import {useEffect, useState } from "react"

const pokeDatas = {};

async function getPokeDatas()
{
    const promise = fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => response.json());

    const datas = await promise;
    pokeDatas = datas;
}


export function searchPokemon(pokeName)
{
    return pokeDatas.filter(data => data.name.match(pokeName));
}

export function getAllPokemon()
{
    return pokeDatas;
}

export function getImageBox(pokemon)
{
    return !!pokemon ? <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`} alt = "pokemon"/>:<h1>x텅</h1>;
}