
import { useEffect, useState } from "react";
import { CheckoutInput } from "../components/CheckoutInput"
import { useShoppingCart } from "../context/ShoppingCartContext";
import '../styles/Checkout.scss'
import { inputs } from "../data/checkoutInputs.json";
import axios, { Axios } from "axios";

export function Checkout(){


    const { cartItems } = useShoppingCart();

    const [values,setValues] = useState({
        username:"",
        email:"",
        phone:"",
        adress:"",
    })

    const handleSubmit = (e:any) => {
        e.preventDefault(); 
        console.log("submited")

        console.log(JSON.stringify(values))
        console.log(JSON.stringify(cartItems))

        axios.post('http://localhost:8000/cart', {
            values,
            cartItems
        })
        .then(res => console.log('Data posted', res))
        .catch(err => console.log(err))
    }
 
    const onChange = (e:any) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    


   
    
    return( 
    
    <form className="checkout" onSubmit={handleSubmit}>
       <h3>Store/Checkout</h3>
        {
            inputs.map((input)=>(
                <CheckoutInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            ))
        }
      
       <button type="submit"onClick={handleSubmit}> Submit</button>
    </form>
    
    
    )
}