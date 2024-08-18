import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4  shadow-gray-400">
      <div className="flex justify-between">
        <span className="font-bold mb-4 text-xl ">
          {data.title}({data?.itemCards.length})
        </span>
        <span
          className="font-bold cursor-pointer"
          onClick={() => handleClick()}
        >
          ⬆️
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
      {/* <ItemList items={data.itemCards} /> */}
    </div>
  );
};

export default RestaurantCategory;
