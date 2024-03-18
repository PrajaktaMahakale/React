import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
     
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>   </div>
    );
  };
  export default Body;