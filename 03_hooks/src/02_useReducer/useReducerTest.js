import { useReducer } from "react";

const reducer = (state, action) =>
{
    switch(action.type)
    {
        case 'DECREMENT':
            return                 {
                ...state,
                count: state.count-1
            };
        case 'INCREMENT':
            return {                ...state,
                count: state.count+1};
        case 'text':
            return               ({
                ...state,
                [action.name]: action.value
            })
        default:
            return state;
    }
}

const ReduceContorl = () =>
{
    const values = {count: 0, inputtext: ""};
    const [state, dispatch] = useReducer(reducer, values);

    const onChangeHandler = e => dispatch(e.target);

    return(
        <>
            <h1>counter: {state.count}</h1>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>
            <input type="text" name="inputtext" onChange={onChangeHandler}/>
            <p>입력한 텍스트: {state.inputtext}</p>
        </>
    )
}

export default ReduceContorl;