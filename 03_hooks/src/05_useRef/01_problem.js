import { useState } from "react"

// 어차피 사용자한테 보여주지도 않을 건데 변화하는 값이 있다고 해서 렌더링을 해야하냐? 낭비 아닌가?
const CounterRef = () =>
{
    const [counter, setCounter] = useState(0);

    console.log("counter rendering...");

    const increaseCount = () =>
    {
        setCounter(counter + 1);
    }

    return(
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={increaseCount}>카운트 증가</button>
        </>
    )
}

export default CounterRef;