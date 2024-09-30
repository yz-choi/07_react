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
                <li><NavLink to={"/main"} style={({isActive})=>isActive?activeStyle:null}>HOME</NavLink></li>
                <li><NavLink to={"/about"} style={({isActive})=>isActive?activeStyle:null}>About</NavLink></li>
                <li><NavLink to={"/menu"} style={({isActive})=>isActive?activeStyle:null}>Menu</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
