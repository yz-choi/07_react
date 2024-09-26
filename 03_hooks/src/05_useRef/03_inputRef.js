import { useEffect, useRef, useState } from "react"

const LoginComponent = () =>
{
    const [form, setForm] = useState({
        username: '',
        password:''
    });

    const userNameRef = useRef();

    useEffect (()=>
    {
        console.log(userNameRef.current);
        userNameRef.current.focus(); //focus 주는 거예요
    }, []);
    
    const onChangeHandler = e =>
    {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const onClickHandler = () =>
    {
        alert(
            `username: ${form.username}\npassword: ${form.password}`
        )
        setForm(
            {
                username:"",
                password:""
            }
        );
        userNameRef.current.focus();
    }

    return(
        <>
            <input type="text" name ="username" placeholder="name" onChange={onChangeHandler} value={form.username} ref ={userNameRef}/>
            <br/>

            <input type="password" name="password" placeholder="password" onChange={onChangeHandler} value={form.password}/>
            <br/>

            <button onClick={onClickHandler}>login</button>
        </>
    )
}

export default LoginComponent;