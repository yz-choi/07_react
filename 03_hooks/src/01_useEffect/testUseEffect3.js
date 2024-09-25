import { useEffect, useState } from "react"

const PrintProfile = ({username, email}) =>
{
    return(
        <>
            <p>이름: </p>
            <p>이메일: </p>
        </>
    )
}

export const ProfileContainer = () =>
{
    const[profile, setProfile] = useState({username:"", email:""});
    const [isClicked, setIsClicked] = useState(false);

    const onChangeHandler = e =>
    {
        if(isClicked)
        {
            setProfile({
                ...profile,
                [e.target.name]: e.target.value
            });
        }
    }
    useEffect(() => 
    {
        console.log("변경 감지")
        
    })

    const onClickSave = (e) =>
    {
        console.log("여기서 프로필 세팅하고 싶다고");
        isClicked = true;
    }

    return(
        <>
            <h1>프로필 입력</h1>
            <label>이름: </label>
            <input type="text" name="username" onChange={onChangeHandler}/>
            <br/>
            <label>이메일: </label>
            <input type="text" name="email" onChange={onChangeHandler}/>
            <br/>
            <button onClick={onClickSave}>저장</button>
            <br/>
            <h1>프로필 미리보기</h1>
            <PrintProfile/>
        </>
    )
}