
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/Counter/action";
// import { store } from "./Redux/store";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((store) => 
    store.counter.counter);
console.log("Rendering Counter")
  return(
  <div>
    <h3>Counter:{counter}</h3>
    <button
      onClick={() => {
        dispatch(addCount(1));
      }}
    >
      ADD 1
    </button>
  </div>

  )};
