import { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);
  const [showAll, setShowAll] = useState(false);

  console.log("This is the resinfo of the page to test", resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    avgRating,
    cloudinaryImageId,
    cuisines,
    id,
    name,
    costForTwoMessage
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

  const displayedItems = showAll ? itemCards : itemCards.slice(0, 3);

  return (
    <div className="res-info p-6 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Info image"
        className="w-full h-96 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4 text-center">{name}</h1>
      <p className="text-gray-700 mt-2 text-center">{cuisines?.join(", ")} - {costForTwoMessage}</p>
      <h2 className="text-2xl font-semibold mt-6 text-center">Menu</h2>
      {itemCards.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 mx-auto block"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
      <ul className="mt-4 space-y-2">
        {displayedItems.map((item) => (
          <li key={item.card.info.id} className="flex justify-between bg-white p-3 rounded-lg shadow">
            <span>{item.card.info.name}</span>
            <span>Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default RestaurantInfo;