import {useState} from "react";

const Main = () =>
{
    const [main, setMain] = useState(0);

    return(
        <div>
            <h1>main: {main}</h1>
            <button onClick={()=>setMain(main+1)}>+1</button>
        </div>
    )
}

export default Main;