import { createContext, useContext, useReducer } from "react";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

//Boş bir merkezi state oluşturuldu
const StoreContext = createContext();

// Componentlerde merkezi state'e erişimi kolaylaştırmak için kendi hook'umuzu yazdık
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  //useRducer Hook'una reduce ve initial state parametre olarak verilir ...
  //useReducer fonksiyonu ise geriye getter ve setterları döner
  //       getter          setter
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );
  return (
    <StoreContext.Provider value={{ counterState, dispatchCounter }}>
      {children}
    </StoreContext.Provider>
  );
};
