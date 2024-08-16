import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResinfo] = useState(null);
  const [ItemCards, setItemCards] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResinfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
