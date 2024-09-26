import { useCallback, useEffect, useState } from "react"

const CallbackComponent = () =>
{
    const [size, setSize] = useState(200);
    const [isDark, setIsDark] = useState(false);

    const genSquareStyle = useCallback(() =>
    {
        return{
            backgroundColor: "orangered",
            width: size,
            height: size
        }
    }, [size]); //size가 변할 때만 동작해요

    //이렇게 되면 isDark 할 때 렌더링이 다시 일어나면서 useEffect가 동작함 -> genSquareStyle 재할당됨 (굳이? 싶은 거죠)
    return(
        <>
            <div style={{backgroundColor:isDark?"black":"white"}}>
                <input type="range" min="100" max="300" onChange={e=>setSize(parseInt(e.target.value))}/>
                <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
                <Square genSquareStyle={genSquareStyle}/>
            </div>
        </>
    )
}

const Square = ({genSquareStyle}) => 
{
    const [style, setStyle] = useState({});

    useEffect(()=>
    {
        console.log("style 변경");
        setStyle(genSquareStyle());
    }, [genSquareStyle]);

    return <div style={style}></div>
}

export default CallbackComponent;