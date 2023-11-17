import RESTAURANT_DATA from "./DataRestaurant";
import SHOWS_DATA from "./DataShows";
import AUTO_DATA from "./DataSearchBar";

const initialStore = () => {
  
    const store = {
        restaurants: RESTAURANT_DATA,
        shows: SHOWS_DATA,
        autoData: AUTO_DATA,
    };
    //console.log("store =", store);
    return store;
    
};

const types = {
    
    selectRestaurant: "selectRestaurant",
};

const storeReducer = (state, action) => {
    switch (action.type) {
      case types.selectRestaurant:
        return {
          ...state
          // restaurants: state.restaurants.push(...action.payload),
          // shows: state.shows.push(...action.payload),
          // autoData: state.autoData.push(...action.payload),

        };
      default:
        return state;
    }
  };

export {types};
export {initialStore};
export default storeReducer;
