import { useEffect, useState } from "react"

const ImageBox = ({pokeNum}) =>
{
    return !!pokeNum ? <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`} alt = "pokemon"/>:<h1>x텅</h1>;
}

const searchBox = ({setImgUrl}) =>
{

}

const GameData = ({setPokeNum}) =>
{
    const [pokemon, setPokemon] = useState("");
    const onChangeHandler = e => setPokemon(e.target.value);
    const onClickHandler = () =>
    {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(response => response.json());
        setPokeNum(data);
    }

    return(
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>button</button>
        </>
    )
}

const PokeBox = () =>
{
    const [pokeNum, setPokeNum] = useState("");

    return(
        <>
            <GameData setPokeNum={setPokeNum}/>
            <br/>
            <ImageBox pokeNum = {pokeNum}/>
        </>
    )
}

export default PokeBox;