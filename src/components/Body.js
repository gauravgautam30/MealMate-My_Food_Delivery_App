import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

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

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.62545&lng=77.437348&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    for (let i = 0; i <= 10; i++) {
      console.log(json.data.cards[i].card.card.gridElements);
      if (json.data.cards[i].card.card.gridElements !== undefined) {
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

    // setTimeout(() => {
    //   setListOfRestaurent(resList);
    //   setFilteredListOfRestaurent(resList);
    // }, 500);
  };
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
                (res) => res.info.avgRating > 4
              );
              console.log(resList);
              setFilteredListOfRestaurent(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="res-container">
          {FilteredlistOfRestaurent.map((res) => (
            <RestaurentCard key={res.info.id} resData={res} />
          ))}
          ;
        </div>
      </div>
    );
  }
};

export default Body;
