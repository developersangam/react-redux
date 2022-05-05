import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Component/CakeContainer";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IcecreamContainer from './Component/IcecreamContainer'
import UserContainer from "./Component/UserContainer";

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <UserContainer/>
      {/* <HooksCakeContainer/> */}
      {/* <IcecreamContainer/> */}
      {/* <CakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
