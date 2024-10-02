import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getImageBox, searchPokemon } from "./PokeApi";

const PokeSearch = () =>
{
    const [search] = useSearchParams();
    const searchPokeName = search.get("name");
    const [pokeList, setPokeList] = useState([]);

    useEffect(()=>
    {
        setPokeList(searchPokemon(searchPokeName));
        
    }, [])

    return(
        <>
            <h1> 네가 찾던 포켓몬이란다 </h1>
            <div>
                {getImageBox(searchPokeName)}

            </div>
        </>
    )
} 

export default PokeSearch;