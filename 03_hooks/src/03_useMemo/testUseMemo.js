import { useState } from "react";

const SquareCalculator = () =>
{

    const [numbers, setNumbers] = useState([]);
    const onChangeHandler = e => {setNumbers(e.target.value.split(","))};
    const squareNumbers = numbers.map(function(number){return isNaN(number)? 0 :number**2;})

    // //선생님 코드
    // const [numbers, setNubmers] = useState("");
    // const squareNumbers = useMemo(()=>
    // {
    //     console.log("제곱값");
    //     return numbers.split(",").map(num=>{return isNaN(num)?0:num**2;})
    // }, [numbers]);

    return(
        <>
            <h1>숫자 제곱 계산기</h1>
            <input type = "text" name="numbers" onChange={onChangeHandler}></input>
            <h2>제곱값:</h2>
            {squareNumbers.map(num=>{return(
                <>
                <ul>{num}</ul>
                </>
            )})}
        </>
    )
}

export default SquareCalculator;