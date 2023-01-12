import { useShoppingCart } from "../context/ShoppingCartContext"
import useFetch from "../hooks/useFetch"
import '../styles/Cart.scss'
import { StoreItemProps } from "./StoreItem"

type CartItemProps ={
    id:number,
    quantity:number,
}

export function CartItem({ id,quantity}: CartItemProps){

    const {data, isLoading, error} = useFetch('http://localhost:8000/products') 
    const {removeFromCart} = useShoppingCart()
    const item = data.find( (i : StoreItemProps) => i.id === id)
    if(item == null) return null
    
    return(
        <div className="cart-items">
            <img src={item.img}></img>

            <div className="item-details">{
            item.name} <br/>
            {item.price}.00 x {quantity} = {item.price * quantity}.00 RSD
         
            <button className="remove" onClick={() => removeFromCart(item.id)}>x</button>    
            </div>
           
           
        </div>
    )
}