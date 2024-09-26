/*
    useRef를 사용하는 목적?

    1. 값 유지 - 렌더링 사이에 값을 유지할 수 있음. 리렌더링 시 초기화되지 않음
    2. 렌더링 방지 - 값이 변경 되더라도 리렌더링 일으키지 않음 성능 최적화
    3. 애니메이션, 타이머 등 특정 값이 변경되더라도 리렌더링을 원치 않을 때 저장의 용도
    4. DOM 요소에 직접 접근하는 방법 제공, 특정 요소 포커스 등 => 먼 말이긔

*/

import { useRef, useState } from "react";

const UseRefCounter = () =>
{
    console.log("useRefCounter rendering...");

    const [count, setCount] = useState(0);
    let variable = 0;
    const countRef = useRef(0);

    const increaseCount = () =>
    {
        setCount(count+1);
        console.log("setCount-> " + count);
    }

    const increaseVariable = () =>
    {
        variable+=1;
        console.log("variable: " + variable);
    }

    const increaseCountRef = () =>
    {
        countRef.current = countRef.current+1;
        console.log("countRef: " + countRef.current);
    }

    return(
        <>
            <h1>counter: {count}</h1>
            <h1>variable: {variable}</h1>
            <h1>countRef: {countRef.current}</h1>

            <button onClick={increaseCount}>카운트 증가</button>
            <button onClick={increaseVariable}>variable++</button>
            <button onClick={increaseCountRef}>countRef++</button>
        </>
    )
}

export default UseRefCounter;