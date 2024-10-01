import { useEffect, useState } from "react";
import { getMenuList } from "../api/MenuApi";
import { Link, useNavigate } from "react-router-dom";

const Menu = () =>
{
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState([]);
        
    useEffect(()=>
    {
        setMenuList(getMenuList());
    },[]);

    const onClickHandler = () =>
    {
        navigate(`/checkorder`); 
    }

    return(
        <>
        <h2>〓〓〓〓〓 MENU 〓〓〓〓〓</h2>
        <div>
            {menuList.map(menu=>{return(
                <Link to={`/menu/${menu.id}`} key={menu.id}><li>{menu.name} - {menu.price}원</li></Link>
            )})}
            <br/>
            <button onClick={onClickHandler}>주문하기</button>
        </div>
        </>
    )
}
    
export default Menu;