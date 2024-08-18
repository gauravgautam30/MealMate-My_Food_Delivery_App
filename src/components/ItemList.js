import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.name}
            className="border-b-2 border-gray-400 text-left mb-4 flex"
          >
            <div className="flex-1">
              <span className="font-bold">{item.card.info.name}</span>
              <p className="p-2">₹ {item.card.info.price / 100 || 100}</p>
              <p className="text-s">{item.card.info.description}</p>
            </div>
            <div className="flex-shrink-0 relative">
              <img
                className="menu-img w-24 h-24 object-cover"
                src={CDN_URL + item.card.info?.imageId}
                alt={item.card.info.name}
              />
              <button
                className="absolute bottom-2 right-2 bg-white text-green rounded-lg p-1 hover:bg-blue-700"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
