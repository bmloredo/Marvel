import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Personagens from "../pages/Personagens";
import Quadrinhos from "../pages/Quadrinhos";
import Series from "../pages/Series";
import Eventos from "../pages/Eventos";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/personagens" exact element={<Personagens/>}></Route>
          <Route path="/eventos" exact element={<Eventos/>}></Route>
          <Route path="/quadrinhos" exact element={<Quadrinhos/>}></Route>
          <Route path="/Series" exact element={<Series/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;