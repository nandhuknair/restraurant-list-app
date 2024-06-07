import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";

const Body =()=> {
   const [resList,setResList] = useState([])
   useEffect(()=> {
    fetchData()
   },[]);

   const fetchData = async()=> {
    const data = await fetch(
       ' https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8992675&lng=77.651152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json()
    
    setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
   }

    return (
        <div className="body">
            <div className="search"> Search</div>
           <button onClick={()=> {
            filteredResList = resList.filter(res=> res.info.avgRating > 4)
            setResList(filteredResList)
           }}>
            Top Rated Restaurant !
           </button>
            <div className="res-container">
             {resList.map(res=> <RestaurantCard key = {res.info.id} resData={res}/>)}
            </div>
        </div>
    )
}

export default Body;