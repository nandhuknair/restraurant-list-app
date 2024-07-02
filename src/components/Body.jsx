import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  console.log(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8992675&lng=77.651152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setResList(restaurants);
      setFilteredResList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { loggedInUser, setUserName } = useContext(userContext);

  return filteredResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="mx-8">
        <input
          className="border p-2 border-solid"
          type="text"
          placeholder="Type here.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="transition bg-amber-400 hover:bg-black hover:text-white px-4 py-2"
          onClick={() => {
            const filteredList = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResList(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="mx-8 mb-5 transition rounded-ss-md bg-amber-400 hover:bg-black hover:text-white px-5 py-4"
          onClick={() => {
            const filteredResList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredResList);
          }}
        >
          Top Rated Restaurant!
        </button>

        User name:
        <input type="text" className="mx-2 border px-2 hover:p-3"
         value = {loggedInUser}
         onChange={(e)=> {setUserName(e.target.value)}}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredResList.map((res) => (
          <Link
            key={res.info.id}
            to={`/restaurants/${res.info.id}`}
            className="m-5 bg-zinc-100 shadow-md border hover:shadow-xl hover:bg-zinc-200 rounded-lg"
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
