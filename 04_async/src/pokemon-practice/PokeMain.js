import {useState, useEffect} from "react";
import { getImageBox, getPokeData } from "./PokeApi";
import {useNavigate} from "react-router-dom";

const PokeMain = () =>
{
    const [curPokemon, setCurPokeNum] = useState("");
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    const onClickHandler = () =>
    {
        setPokemon(curPokemon);
        navigate(`/pokelist/search?name=${curPokemon}`);
        console.log(pokemon);
    }

    useEffect(()=>
    {
        getPokeData(curPokemon);
    }, [pokemon]);

    return(
        <>
        <h1>오늘의 포켓몬은 뭘까요~?</h1>
        <img src = "./image/maxresdefault.jpg"/>
        <input type="text" onChange={e=>{setCurPokeNum(e.target.value)}}/>
        <button onClick={onClickHandler}>찾기!</button>
        <br/>

        </>
    )

}

export default PokeMain;