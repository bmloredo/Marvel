import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Personagens from "../pages/Characters/Personagens";
import Quadrinhos from "../pages/Comics/Quadrinhos";
import Series from "../pages/Series/Series";
import Eventos from "../pages/Eventos/Eventos";
import App from "../App";

function Routers() {
  return (
    <>
    <App>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/personagens" exact element={<Personagens/>}></Route>
            <Route path="/eventos" exact element={<Eventos/>}></Route>
            <Route path="/quadrinhos" exact element={<Quadrinhos/>}></Route>
            <Route path="/Series" exact element={<Series/>}></Route>
          </Routes>
        </BrowserRouter>
      </App>
    </>
  );
}

export default Routers;