// import ToDoApp from './components/todo_app/ToDoApp';
// import MaterialUi from './components/marial_ui_sample/MaterialUi';
// import Weather from "./components/weather_app/Weather";
// import { CounterUseEffect } from "./components/react_hooks/CounterUseEffect";
// import { useState, CSSProperties } from "react";
// import {PacmanLoader, RingLoader} from 'react-spinners';

import FetchApi from "./components/api_fetch/FetchApi";


// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red"
// }

function App() {
  // const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      <FetchApi/>
    </div>
  )
}

export default App;