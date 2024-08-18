import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useReducer } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("CART", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center ">
      <h1 className="text-2xl font-bold p-4 m-4">Cart</h1>
      <button
        className="bg-gray-400 text-white"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>
      <div className="w-6/12 text-center m-auto">
        <ItemList items={cartItems} />;
      </div>
    </div>
  );
};

export default Cart;
