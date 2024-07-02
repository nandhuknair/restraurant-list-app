import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import userContext from "../utils/userContext"

const RestaurantCard =(props)=> {

    const {resData,resMenu} = props
    const {
     cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     sla
    } = resData?.info

    const {loggedInUser} = useContext(userContext)

     return (
         <div className="m-4 p-4 w-[300px]">
             <img className="res-logo" src= {CDN_URL+cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines.join(',  ')}</h4>
             <h4>{avgRating} ⭐</h4>
             <h4>{sla.deliveryTime} minutes</h4> 
             <h1>Logged User : {loggedInUser}</h1>
         </div>    
     )
 }

 export default RestaurantCard