import '../styles/Navbar.scss';
import {FaOpencart} from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
    const {openCart,cartQuantity} = useShoppingCart();
    

    return(
            <nav className='navigation'>
            <h1><img src="/vite.svg" alt="" />Cart.inc</h1>

            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
            </ul>
            
           
            <button onClick={ openCart } className={cartQuantity> 0?  'nav-cart-icon' : 'nav-cart-icon-close'} > 
            <p className="nav-cart-info"> {cartQuantity } </p>
           
            <FaOpencart/> 
          
            </button>
         
           

            </nav>
        )
    }
