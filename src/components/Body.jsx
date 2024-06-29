import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [resMenu,setResMenu] = useState([])

  const [searchText,setSearchText] = useState('')

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8992675&lng=77.651152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };


  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=376708"
    );
    const json = await data.json();
    setResMenu(json)
  };

  console.log(resMenu) 


  return filteredResList.length === 0 
  ?(
    <Shimmer/>
  )
  :(
    <div className="body">
      <div className="mx-8"> 
          <input className="border p-2 border-solid"
            type="text" placeholder="Type here.." value={searchText} onChange={(e)=> {
            setSearchText(e.target.value)
          }} />
          <button className="transition bg-amber-400 hover:bg-black hover:text-white px-4 py-2" 
            onClick={()=> {
            const filteredList = resList.filter(res=> {
             return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredResList(filteredList)
          }}>
          Search</button>
        <button
          className=" mx-8 mb-5 transition rounded-ss-md bg-amber-400 hover:bg-black hover:text-white px-5 py-4" 
          onClick={() => {
          const filteredResList = resList.filter((res) => res.info.avgRating > 4);
          setFilteredResList(filteredResList);
          }}
        >
          Top Rated Restaurant !
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredResList.map((res) => (
         <Link key={res.info.id} to={"/restaurants/"+res.info.id} className=" m-5 bg-zinc-100 shadow-md border hover:shadow-xl hover:bg-zinc-200  rounded-lg">  
         <RestaurantCard resData={res}/> </Link>  
        ))}
        {}
      </div>
    </div>
  );
};
export default Body;
