import { StoreItem } from "../components/StoreItem"

import useFetch from "../hooks/useFetch"
import '../styles/Store.scss'

 type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    img: string,
    category: string
}

export function Store(){


       const {data, isLoading, error} = useFetch('http://localhost:8000/products') 

    return (
        
       <>
        <h2> Cart.inc/Store</h2>

        <main className="container">
            {data.map((item : StoreItemProps) => (
               
                 <StoreItem  key={item.id} {...item}/>
               
            ))}
        </main>




       
        </>
    )
}