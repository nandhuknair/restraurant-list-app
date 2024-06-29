import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantInfo = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resID);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        console.log(json)
        setResInfo(json.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (resID) {
      fetchData();
    }
  }, [resID]);

  return resInfo;
};

export default useRestaurantInfo;