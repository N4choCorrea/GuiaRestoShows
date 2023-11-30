import RESTAURANT_DATA from "./DataRestaurant";
import SHOWS_DATA from "./DataShows";


const initialStore = () => {
  
    const store = {
        restaurants: RESTAURANT_DATA,
        shows: SHOWS_DATA,
        
    };
    
    return store;
    
};

const types = {
    
    selectRestaurant: "selectRestaurant",
};

const storeReducer = (state, action) => {
    switch (action.type) {
      case types.selectRestaurant:
        return {
          ...state,
          restaurants: state.restaurants.push(...action.payload)
        };
      default:
        return state;
    }
  };

export {types};
export {initialStore};
export default storeReducer;
