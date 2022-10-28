
import React, { useContext, useEffect } from "react";
import { CounterContext } from "./CounterContext";

const Second = () => {
  const {updateState} = useContext(CounterContext);
  console.log("second");
  // const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Second Use effect")
    
// }, []);
// const Update = () => {
//       setCount(count + 1);
//   };

  return (
    <div>
      {" "}
      <p>This is Second Component</p>
      <button onClick={updateState} className="border bg-slate-200">
        {" "}
        Second {}
      </button>
    </div>
  );
};

export default Second;
