import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

export default function configure(initialState) {
  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux dev tools support

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk)
  });
}
