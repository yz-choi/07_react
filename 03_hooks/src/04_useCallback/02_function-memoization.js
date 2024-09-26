/*

    useMemo: 특정 값을 메모이제이션 함 (주로 연산이 비싼 값이나 비싼 계산)
    사용목적은 값이 자주 계산되는 것을 방지하여 성능 최적화

    useCallback: 특정 함수를 메모이제이션 함 (함수의 재생성 방지)
    자식 컴포넌트에 함수를 전달할 때 불필요하게 함수가 재생성되는 것을 방지

    useCallback을 많은 함수에 남용하면 오히려 성능저하가 발생할 수 있다
    => 메모이제이션 자체도 메모리 비용이 들기 때문에 ... 비싼 거군요
    함수의 재생성에 큰 비용이 없는 경우 굳이 사용할 필요 x

*/

import { useCallback, useEffect, useState } from "react"

const FunctionMemoization = () =>
{
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const noneCallback = () =>
    {
        console.log(number);
    }

    const printNumber = useCallback(()=>
    {
        console.log(`current number: ` + number);
    }, [number]); // 빈 배열이면 첫 상태로 고정

    useEffect(()=>
    {
        console.log("printNuber 값 변화 인지");
    }, [printNumber])

    return(
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <br/>
            <button onClick ={()=>setToggle(r=>!r)}>{String(toggle)}</button>
            <br/>
            <button onClick={printNumber}>printNumberState</button>
            <button onClick={noneCallback}>noneCallback</button>
        </>
    )
}

export default FunctionMemoization;