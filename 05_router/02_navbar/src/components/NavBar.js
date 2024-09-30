import {NavLink} from "react-router-dom";

const Navbar = () =>
{
    const activeSytle =
    {
        backgroundColor: "blue"
    }

    return(
        <div>
            <ul>
                <li><NavLink to={"/"} style={({isActive}) => isActive? activeSytle: undefined}>home</NavLink></li>
                <li><NavLink to={"/main"} style={({isActive}) => isActive? activeSytle: undefined}>main</NavLink></li>
                <li><NavLink to={"/mypage"} style={({isActive}) => isActive? activeSytle: undefined}>mypage</NavLink></li>
                <li><NavLink to={"/login"} style={({isActive}) => isActive? activeSytle: undefined}>login</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;