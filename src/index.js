import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

export const Gapps = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
