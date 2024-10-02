import {useEffect, useState } from "react"

const pokeDatas = ([]);

export async function getPokeData(pokemon)
{
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data=>{return ()=>pokeDatas=data});

}


export function searchPokemon(pokeName)
{
    return pokeDatas.filter(data => data.id.match(pokeName))[0];
}

export function getImageBox(pokemon)
{
    return !!pokemon ? <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`} alt = "pokemon"/>:<h1>x텅</h1>;
}
