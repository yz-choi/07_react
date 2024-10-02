import userAuthStore from "../store";
import {useNavigate} from "react-router-dom";

const ProfilePage = () =>
{
    const {isLogin, username, logout} = userAuthStore();
    const navi = useNavigate();

    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            {isLogin?(
                <>
                    <h1>{username}님, 환영합니다!</h1>
                    <button onClick={logout}>로그아숭ㅅ</button>
                </>
            ):
            (
                <>
                    <h1> 로그인 안 됏습니다</h1>
                    <button onClick={()=>navi("/")}>
                        로그인하러가기
                    </button>
                </>

            )}
        </div>
    )
}

export default ProfilePage;