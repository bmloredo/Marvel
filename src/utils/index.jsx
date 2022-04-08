import axios from 'axios'
import React from 'react'
import Resultadobusca from '../components/Search/Search'

async function BuscaCharacter(busca){
    busca = 'spider'
    const api = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busca}&ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`)
    let resultadoArray = []
    resultadoArray = api.data.data.results
    return busca
}

export default BuscaCharacter




/*
const buscaCharacter = (busca) =>{
    busca = 'spider'
    console.log(busca)
    const api = require('axios')
    api
    .get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busca}&ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`
    )
    .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
        console.error(error);
    })
}
*/

/*
const buscaCharacter = async(busca) =>{
    busca = 'spider'
    console.log(busca)
    const api = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busca}&ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`)
    console.log(api)
}
*/
/*
async function buscaCharacter(busca){
    busca = 'spider'
    console.log(busca)
    try {
        const api = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busca}&ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`)
        console.log(api)
    } catch (error) {
        console.log(error)
    }
}
*/

/*
const buscaCharacter = (busca) =>{
    busca = 'spider'
    const api = axios.create({
        baseURL: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busca}&ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`
    })
    
    update()
    async function update(){
        const response = await api.get('')
        console.log(response.headers)
    }
  
}

*/

