import axios, { Axios } from "axios"

const callApi = () =>
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r=>r.json()).then(d=>console.log(d));
}

const axiosCall = () =>
{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>console.log(res.data)); //axios는 자동으로 json처리를 해주긔
}

const AxiosCallComponent = () =>
{
    return(
        <>
        <button onClick={callApi}>fetch 요청</button>
        <button onClick={axiosCall}>axios 요청</button>
        </>
    )
}

export default AxiosCallComponent;