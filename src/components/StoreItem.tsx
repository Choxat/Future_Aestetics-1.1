import { useShoppingCart } from '../context/ShoppingCartContext';
import '../styles/Store.scss'


export type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    img: string,
    category: string
}


export function StoreItem ({id, name, price, img, category} : StoreItemProps) {
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id);
    return(
        <article className="container-item"> 
             <h3>{name}</h3>   <p>{price}.00 RSD</p> <p> {category}</p>
              

            <section className='image-section'>
            <img src={img} alt="" />
            
            </section> 

            <section className='button-section'>
                { quantity === 0 ? (
                    <button className='add-button' onClick={()=>increaseCartQuantity(id)}>Add To Cart</button> 
                ) : (
                 <>
                <button onClick={()=>decreaseCartQuantity(id)}>-</button>
                  <p>{quantity}</p> 
                <button onClick={()=>increaseCartQuantity(id)}>+</button>
                <button onClick={()=>removeFromCart(id)} >Remove</button>
               
                 </>
                 ) 
                 }
            </section> 
           
            </article>
    )
}