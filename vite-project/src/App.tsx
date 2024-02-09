// import ToDoApp from './components/todo_app/ToDoApp';
// import MaterialUi from './components/marial_ui_sample/MaterialUi';
// import Weather from "./components/weather_app/Weather";
// import { CounterUseEffect } from "./components/react_hooks/CounterUseEffect";
import { useState, CSSProperties } from "react";
import {PacmanLoader, RingLoader} from 'react-spinners';


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>

      {/* ToDo App */}
      {/* <ToDoApp/> */}

      {/* Material UI Sample */}
      {/* <MaterialUi/> */}

      {/* Weather */}
      {/* <Weather/> */}

      {/* useEffect */}
      {/* <CounterUseEffect/> */}

      <div>
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <RingLoader
          color={"blue"}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {/* <PacmanLoader
          color={"blue"}
          loading={loading}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
      </div>
    </div>
  )
}

export default App;