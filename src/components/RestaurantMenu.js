import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const [ItemCards, setItemCards] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log("RES DATA:: ", json?.data?.cards[2]?.card?.card?.info);
    setResinfo(json?.data);

    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= i; j++) {
        const itemCards =
          json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]
            ?.card?.card?.itemCards;

        if (itemCards !== undefined && itemCards.length > 0) {
          console.log("MENU DATA:: ", itemCards[0].card.info);
          setItemCards(itemCards);
        }
      }
    }
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu-container">
      <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
      <img
        className="res-img"
        src={CDN_URL + resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId}
        alt="Biryani"
      />
      <h3>{`${resInfo?.cards[2]?.card?.card?.info?.avgRatingString} (${resInfo?.cards[2]?.card?.card?.info?.totalRatingsString})    • ${resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}`}</h3>
      <h3>{`${resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}`}</h3>
      <h2 className="menu-name">Menu</h2>
      <ul>
        {ItemCards.map((item, index) => (
          <li key={index}>
            <h3>{item.card.info.name}</h3>
            <img
              className="menu-img"
              src={CDN_URL + item.card.info?.imageId}
              alt={item.card.info.name}
            />
            <p>{item.card.info?.ratings?.aggregatedRating?.rating} ☆</p>
            <p>
              ₹{" "}
              {item.card.info?.price
                ? Math.floor(item.card.info.price / 100)
                : "500"}
            </p>
            <p>{item.card.info?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
