import {useState} from "react";
import userAuthStore from "../store";
import {useNavigate} from "react-router-dom";

const LoginPage = () =>
{
    const [input, setInput] = useState("");
    const {login} = userAuthStore();
    const navi = useNavigate();

    const handleLogin = () =>
    {
        login(input);
        navi("/profile");
        
    }

    const handleMypage = () =>
    {
        navi("/profile");
    }
    return(
        <div style = {{textAlign:"center", marginTop:"50px"}}>
            <h1>login</h1>
            <input type="text" placeholder="이름을 입력하세요" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleMypage}>profile</button>
        </div>
    )
}

export default LoginPage;