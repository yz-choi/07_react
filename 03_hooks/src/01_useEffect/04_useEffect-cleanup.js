/*
    useEffect는 기본적으로 렌더링 직후와 업데이트 직후 호출
    컴포넌트가 마운트 해제되기 직전이나 업데이트 되기 전에 실행할 내용이 있다면 정리(clean-up) 가능
    이전 effect 내용을 정리하고 난 뒤 새로운 effect가 동작하도록 할 때 사용
    이전 effect가 남아있는 상태에서 새로운 effect가 발생하게 되면 마운트 해제가 일어나고 나서도 메모리 누수나 충돌 발생 가능성 있음

 */

    import {useState, useEffect} from "react";

    const Timer = () =>
    {
        useEffect(()=>
        {
            console.log("타이머 시작");
            const timer = setInterval(()=>{
                console.log(new Date().toLocaleTimeString());
            }, (1000));
            
            //useEffect가 unmount 될 때 return
            return (() => {
                clearInterval(timer);
                console.log("타이머");
            })
        }, [])

        return <h1> 타이머를 시작하겟긔 </h1>
    }

    export const Container = () =>
    {
        const [isTrue, setIsTrue] = useState(false);

        return(
            <>
            <button onClick = {()=>setIsTrue(!isTrue)}> 타이머 토글</button>
            {isTrue&&<Timer/>}
            </>
        )
    }