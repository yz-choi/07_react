import { useEffect, useState } from "react"

export const ProfileContainer = () =>
{
    const[profile, setProfile] = useState({username:"", email:""});

    const onChangeHandler = e =>
    {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => 
    {
        console.log("변경 감지")
    })

    return(
        <>
            <h1>프로필 입력</h1>
        </>
    )
}