import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "./greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting)

  useEffect(() => {
  dispatch(fetchGreetings());
  }, [])

  if (!greeting) return null;

  return <h1>{greeting.name}</h1>
};

export default Greeting;