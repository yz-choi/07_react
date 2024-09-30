import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { searchPokemon } from "./PokeApi";

const PokeSearch = () =>
{
    const [search] = useSearchParams();
    const searchPokeName = search.get("name");
    const [pokeList, setPokeList] = useState([]);

    useEffect(()=>
    {
        setPokeList(searchPokemon(searchPokeName));
        console.log(searchPokeName);
    }, [])

    return(
        <>
            <h1> 포켓몬 검색 결과 </h1>
            <div>
                {console.log(pokeList)}
            </div>
        </>
    )
} 

export default PokeSearch;