import { useState } from "react";

const hardCalculator = (num) =>
{
    for(let i =0; i<929599099; i++)
    {}

    return num+9754234375;
}

const HardCalculator = () =>
{
    const [hardNumber, setHardNumber] = useState(0);
    const hardSum = hardCalculator(hardNumber);

    return(
        <>
        <h3>어려운 계산기</h3>
        <input type="number" value={hardNumber} onChange={e => setHardNumber(parseInt(e.target.value))}/>
        <span> +9754234375 = {hardSum}</span>
        </>
    )
}

export default HardCalculator;