import { useState } from "react";

const hardCalculator = (num) =>
{
    console.log("어려븐 계산기");
    for(let i = 0; i<19998905; i++){}
    return num + 10000;
}

const easyCalculator = (num) =>
{
    console.log("쉬운 꼐산기");
    return num + 1;
}

const ComplexCaculator = () => 
{
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalculator(easyNumber);
    
    return(
        <>
        <h1>어려운 계산기</h1>
        <input type="number" value={hardNumber} onChange={e=>setHardNumber(e.target.value)}/>
        <span> +10000 = {hardSum}</span>

        <h1>쉬운 계산기</h1>
        <input type="number" value={easyNumber} onChange={e=>setEasyNumber(e.target.value)}/>
        <span> +10000 = {easySum}</span>
        </>
    )
}

export default ComplexCaculator;