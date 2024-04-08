import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./cards/layout";
import Euro from "./cards/euro";
import Uzs from "./cards/uzs";
import Lira from "./cards/lira";
import Rub from "./cards/rub";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Euro/>}/>
          <Route path="/uzs" element={<Uzs/>}/>
          <Route path="/lira" element={<Lira/>}/>
          <Route path="/rub" element={<Rub/>}/>
        </Route>
      </Routes>
    </div>
  )
};

export default App;
