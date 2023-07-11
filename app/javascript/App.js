import React from "react";
import Greeting from "./Greeting";
import { Navigate, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
          <Route path="*" element={<Navigate to="/greeting" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;