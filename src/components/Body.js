import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineNotice from "../utils/OfflineNotice";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [FilteredlistOfRestaurent, setFilteredListOfRestaurent] = useState([]);
  const [searchText, setSearchtext] = useState("");

  // const arr = useState(resList);
  // console.log(arr);
  // listOfRestaurent = arr[0];

  useEffect(() => {
    getData();
  }, []);
  console.log("body rendered");
  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.62545&lng=77.437348&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    for (let i = 0; i <= 10; i++) {
      console.log(
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
      );

      if (
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle !==
        undefined
      ) {
        console.log(
          json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants
        );
        setListOfRestaurent(
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredListOfRestaurent(
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <OfflineNotice />;
  {
    return listOfRestaurent.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchtext(e.target.value)}
            />
            <button
              className="serch-btn"
              onClick={() => {
                const filteredRes = listOfRestaurent.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListOfRestaurent(filteredRes);
              }}
            >
              search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating >= 4.3
              );
              // console.log(resList);
              setFilteredListOfRestaurent(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="res-container">
          {FilteredlistOfRestaurent.map((res) => (
            <Link
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurentCard key={res.info.id} resData={res} />
            </Link>
          ))}
          ;
        </div>
      </div>
    );
  }
};

export default Body;
