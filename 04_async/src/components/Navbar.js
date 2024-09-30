import {NavLink} from "react-router-dom"

const Navbar = () =>
{
    const activeStyle =
    {
        backgroundColor: "#A4F9D9",
        color: "white"
    }

    return(
        <div>
            <ul>
                <li><NavLink to={"/pokelist"} style={({isActive})=>isActive?activeStyle:null}>포켓몬 리스트</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
