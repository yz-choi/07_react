import { useEffect, useState } from "react"

const ImageBox = ({pokeNum}) =>
{
    return !!pokeNum ? <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`} alt = "pokemon"/>:<h1>x텅</h1>;
}

const searchBox = ({setImgUrl}) =>
{

}

const GameData = ({setPokeNum, setPokeData}) =>
{
    const [pokemon, setPokemon] = useState("");
    const onChangeHandler = e => setPokemon(e.target.value);

    const onClickHandler = () =>
    {
        setPokeNum(pokemon);
    }

    function getPokeData(pokemon)
    {
        const data = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                    .then(response => response.json());
        return data;
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
    const [pokeData, setPokeData] = useState();

    return(
        <>
            <GameData setPokeNum={setPokeData}/>
            <br/>
            <ImageBox pokeNum = {pokeNum}/>
        </>
    )
}

export default PokeBox;