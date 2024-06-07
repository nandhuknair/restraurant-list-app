import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CDN_URL, MENU_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";



const RestaurantInfo =()=> {

    const [resInfo , setResInfo]  = useState(null)

    useEffect(()=> {
        fetchMenu();
    },[]);

    const{resId} = useParams()

    const fetchMenu = async ()=> {
    const data = await fetch(MENU_API + resId)
    const json  =await data.json()
    setResInfo(json.data)
    console.log(json.data)
   } 
   


   if(resInfo===null){
    return <Shimmer/>
}

   const {
    avgRating,
    cloudinaryImageId,
    cuisines,
    id,
    name,
    costForTwoMessage
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card ;

    return(
        <div className="res-info">
            <img src={CDN_URL+cloudinaryImageId} alt="Info image" />
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}</p>
            <h2 style={{marginTop:"1%"}}>Menu</h2>
            <ul>
                {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name} -{"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
            </ul>
        </div>
    )
    }
export default RestaurantInfo