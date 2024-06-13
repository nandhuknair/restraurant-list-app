import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText,setSearchText] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8992675&lng=77.651152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };



  return filteredResList.length === 0 
  ?(
    <Shimmer/>
  )
  :(
    <div className="body">
      <div className="filter-section">
        <div className="search">
          <input type="text" placeholder="Type here.." value={searchText} onChange={(e)=> {
            setSearchText(e.target.value)
          }} />
          <button className="search-btn" onClick={()=> {
            const filteredList = resList.filter(res=> {
             return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredResList(filteredList)
          }}>
          Search</button>
        </div>

        <button
          className="login-btn"
          onClick={() => {
           const filteredResList = resList.filter((res) => res.info.avgRating > 4);
            setFilteredResList(filteredResList);
          }}
        >
          Top Rated Restaurant !
        </button>
      </div>

      <div className="res-container">
        {filteredResList.map((res) => (
         <Link key={res.info.id} to={"/restaurants/"+res.info.id} className="res-card"> <RestaurantCard resData={res}/> </Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;
