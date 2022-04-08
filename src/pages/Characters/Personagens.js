import React from "react";
import BuscaCharacter from "../../utils";
import Resultadobusca from "../../components/Search/Search";

function Personagens (){
  const teste = "EuSou"
  return (
    <>
      <div className="characters">
        <label>Digite nome do Personagem que deseja realizar a busca:</label>
        <input type='text' placeholder="Personagem Marvel" onChange={(e) =>{
          console.log(e)
        }}/>
        <button className="bt_busca_character" onClick={(e) => {
          BuscaCharacter()
        }}>Buscar</button>
        <div><Resultadobusca/></div>
      </div>
    </>
  ) 
};

export default Personagens