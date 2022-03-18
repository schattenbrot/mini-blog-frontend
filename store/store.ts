import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const PersistGate = () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default PersistGate;

// export const store = createStore(reducers, {}, applyMiddleware(thunk));
