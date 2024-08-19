import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const data = useContext(UserContext);
  const { resData } = props;
  console.log("RES DATA:: ", resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    locality,
    isOpen,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
      <h4>{data.loggedInUser} </h4>

      <h4>{`${areaName}, ${locality}`} </h4>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => (
    <div>
      <label className="absolute rounded-lg bg-black text-white">
        Promoted
      </label>
      <RestaurentCard {...props} />
    </div>
  );
};

export default RestaurentCard;
