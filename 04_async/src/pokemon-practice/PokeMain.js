import {useState, useEffect} from "react";
import { getImageBox } from "./PokeApi";
import {useNavigate} from "react-router-dom";

const PokeMain = () =>
{
    const [pokeNum, setPokeNum] = useState("");
    const [pokemon, setPokemon] = useState("");
    const navigate = useNavigate();

    const onClickHandler = () =>
    {
        navigate(`/pokelist/search?name=${pokemon}`);
    }

    return(
        <>
        <h1>연습 메인</h1>
        <input type="text" onChange={e=>{setPokemon(e.target.value)}}/>
        <button onClick={onClickHandler}>찾기!</button>
        {getImageBox(pokemon)}
        </>
    )

}

export default PokeMain;