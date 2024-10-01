import { NavLink } from "react-router-dom";

const Navbar = () =>
{
    const activeStyle =
    {
        backgroundColor: "white",
        color: "pink"
    }

    return(
        <div>
            <ul>
                <li><NavLink to={"/home"} style={({isActive})=>isActive? activeStyle:null}>HOME</NavLink></li>
                <li><NavLink to={"/menu"} style={({isActive})=>isActive? activeStyle:null}>MENU</NavLink></li>
                <li><NavLink to={"/checkorder"} style={({isActive})=>isActive? activeStyle:null}>CHECK ORDER</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;