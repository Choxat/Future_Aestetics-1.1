import axios from "axios"
import { useEffect, useState } from "react"


const useFetch =(url:string) => {

    const [data,setData] = useState([] as any )
    const [isLoading, setisLoading] = useState(true)
    const [ error,setError] = useState(null) as any

    useEffect(() => {

        axios.get(url)
        .then(res =>{            
            setData(res.data)
            setError(null)
        })
        .catch(err =>{
            setError(err.message)
        })
    },[url])

    return {data,isLoading,error}

    }

export default useFetch;