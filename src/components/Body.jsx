import RestaurantCard from "./RestaurantCard";
import { resList as initialList} from "../utils/mockData";
import { useState } from "react";

const Body =()=> {
   const [resList,setResList] = useState(initialList)
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