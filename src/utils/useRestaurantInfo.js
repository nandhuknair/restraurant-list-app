import { useState,useEffect } from "react"
import { MENU_API } from "./constants";

const useRestaurantInfo =(resID)=> {
    const [resInfo,setResinfo] = useState()

    useEffect(()=> {
        fetchData()
    },[])

    const fetchData = async ()=> {
        const data = await fetch(MENU_API+resID)
        const josn = await data.josn()
        setResinfo(josn.data)
        console.log(josn);
        console.log(josn.josn);

    }


    return resInfo
}

export default useRestaurantInfo ;