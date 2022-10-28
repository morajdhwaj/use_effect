import { useContext,} from "react";
import "./App.css";
import { CounterContext } from "./CounterContext";
import First from "./First";

function App() {
  console.log("App");
  const {state,updateState} = useContext(CounterContext);
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("App use effect");
  // }, []);
   

  return (
    <div className="text-2xl  font-medium">
      <p> This is App Component</p>
      <button className="border bg-slate-200" onClick={updateState}>
        {" "}
        App {state}
      </button>
      <First />
    </div>
  );
}

export default App;
