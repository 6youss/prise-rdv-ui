import React from "react";
// import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAsync, decrement } from "../../redux/actions";
import { State } from "../../redux/reducer";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: State) => state);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementAsync());
        }}
      >
        Increment after 1 second
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
