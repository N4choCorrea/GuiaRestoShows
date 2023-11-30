import React, { createContext, useReducer, useContext} from 'react';
import storeReducer, { initialStore } from './StoreReducer'; 


const StoreContext = createContext();
const initialData = initialStore();


const useStore = () => {

  const context = useContext(StoreContext);
  
  if (!context) {
    throw new Error('no usando un provider');
  }
  return context;
};

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialData);
  return (
    <StoreContext.Provider value={[store, dispatch] }>
      {children}
    </StoreContext.Provider>
  );
};


export {StoreContext,useStore };
export default StoreProvider;
