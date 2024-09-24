import { useState, useEffect } from "react";

const Timer = () =>
{
    const [count, setCount] = useState(5);
    useEffect(()=>
    {
        console.log("타이머 시작");
        const timer = setInterval(()=>
        {
            if(count!== 0)
            {
                setCount(count-1);
            }
            else
            {
                alert("시간 초과");
                clearInterval(timer);
            }
        }, (1000));

        return(()=>
            {
                clearInterval(timer);
            });
    }, [count])

    return(
        <>
        <p>남은 시간: {count}초</p>
        </>
    )
}

export const QuestionContainer = ()=>
{
    const correctAnswer = "포크";
    const [isTrue, setIsTrue] = useState(false);
    const [answer, setAnswer] = useState("");
    const onChangeAnswer = e => {setAnswer(e.target.value)};
    
    const OnCheckAnswer = () => {
        if(answer !== correctAnswer)
        {
            alert("틀렷습니다 요새 붐은 포크입니다");
            setIsTrue(true);
        }
        else
        {
            alert("맞앗습니다!!!!");
            setIsTrue(true);
        }
    }
    return(
        <>
        <h1>문제를 풀어보세요!!!</h1>
        <h3>요새 예지의 붐은?</h3>
        {!isTrue && <Timer/>}
        <input type="text" name="answer" value={answer} onChange={onChangeAnswer}></input>
        <button onClick={OnCheckAnswer}> 제출</button>
        </>
    )
}