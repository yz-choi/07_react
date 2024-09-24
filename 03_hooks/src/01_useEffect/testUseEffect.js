import { useEffect, useState } from "react";

 const Timer = ({id, onDelete}) =>
{
    const [second, setSecond] = useState(0);

    useEffect(()=>
    {
        const timer = setInterval(()=>{
            setSecond(second+1);
            console.log(second);
        }, (1000));

        return (()=>
        {
            clearInterval(timer);
        })
    })

    return(
        <>
        <p>타이머 {id}: {second}</p>
        <button onClick={()=>onDelete(id)}>삭제</button>
        </>
    )
}

export const TimerContainer = () =>
{
    const[timers, setTimers] = useState([])
    const[count, setCount] = useState(1);
    const timersList = timers.map(timer =>
    {
        return(
            <>
            <p key = {timer.id}>
                <label>타이머 {timer.id}</label>
                <button>삭제</button>
            </p>
            </>
        )
    })

    const addTimer = () =>
    {
        console.log(timers.length)
        if(timers.length<5)
        {
            setTimers([...timers, {id:count}])
            setCount(count+1);
            console.log("타이머 추가" + count);
        }
    }

    const deleteTimer = (id) =>
    {
        setTimers(timers.filter((timer)=>timer.id !== id));
        console.log("타이머 삭제")
    }

    return(
        <div>
        <button onClick={addTimer}>
            타이머 추가
        </button>
        {timers.map((timer)=> { return(<Timer id={timer.id} onDelete={deleteTimer}/>)})}
        </div>
    ) 
}