import React, { memo, useContext, useMemo} from "react";
import { CounterContext } from "./CounterContext";
import Second from "./Second";

const First = () => {
  console.log("First");
  // const Update = () => {
  //   setState(state+ 1);
  // };

  return (
    <div>
      <div>This is First Component</div>
      <button  className="border bg-slate-200">
        First
      </button>
      <div className="">
        <Second />
      </div>
    </div>
  );
};

export default memo(First);
