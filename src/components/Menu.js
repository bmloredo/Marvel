import React from "react";
import './menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <ul>
          <li onClick={() => window.location.href= '/'}>Home</li>
          <li onClick={() => window.location.href= '/personagens'}>Personagens</li>
          <li onClick={() => window.location.href= '/quadrinhos'}>Quadrinhos</li>
          <li onClick={() => window.location.href= '/eventos'}>Eventos</li>
          <li onClick={() => window.location.href= '/series'}>Quadrinhos</li>
      </ul>
    </div>
  );
};

export default Menu;