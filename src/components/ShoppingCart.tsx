import { useShoppingCart } from '../context/ShoppingCartContext'
import '../styles/Cart.scss'
import { CartItem } from './CartItem';

import useFetch from '../hooks/useFetch';
import { StoreItemProps } from './StoreItem';

type ShoppingCartProps ={
    isOpen: boolean
}

export function ShoppingCart({isOpen }: ShoppingCartProps) {

    const { closeCart,cartItems } = useShoppingCart();
    const {data, isLoading, error} = useFetch('http://localhost:8000/products') 

    return(

    
        <aside className={isOpen?'Shopping-cart-open': 'Shopping-cart'} >
      
       <button onClick={closeCart} className="button-close-cart">X</button>

        <section className='section-cart'>
            <h3>Items in cart:</h3>
            
            { cartItems.map(item=> (
                <CartItem key={item.id} {...item}/>
            
            ))}
               <div className="total-price">
                <h4>Total: 
                 {    
               cartItems.reduce((total, cartItem) =>{

                const item = data.find( ( i : StoreItemProps) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity},0) }.00 RSD </h4>
                 </div>
                 <button className='checkout'>Checkout</button>
        </section>
        
        </aside>
        

    )
   
}