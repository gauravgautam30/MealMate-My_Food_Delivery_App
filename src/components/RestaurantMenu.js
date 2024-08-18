import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const [ItemCards, setItemCards] = useState(null);
  const [Categories, setCategories] = useState(null);
  const [showIndex, setShowIndex] = useState(true);

  const { resId } = useParams();
  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResinfo(json?.data);

    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= i; j++) {
        const itemCards =
          json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]
            ?.card?.card?.itemCards;

        if (itemCards !== undefined && itemCards.length > 0) {
          setItemCards(itemCards);
        }
      }

      if (
        json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards !==
          undefined &&
        json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length >
          0
      ) {
        const categoriesRaw = json?.data?.cards[
          i
        ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
          return (
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        });
        setCategories(categoriesRaw);
      }
    }
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold mt-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info.name}
      </h1>
      {/* <img
        className="res-img"
        src={CDN_URL + resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId}
        alt="Biryani"
      /> */}
      <h3 className="font-bold">{`${resInfo?.cards[2]?.card?.card?.info?.avgRatingString} (${resInfo?.cards[2]?.card?.card?.info?.totalRatingsString})    • ${resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}`}</h3>
      <h3>{`${resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}`}</h3>

      {/* {category accordian} */}

      {Categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            // showItems={(index = !showIndex)}
            setShowItems={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
