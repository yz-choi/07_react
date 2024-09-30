import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { searchMenu } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.css";

const MenuSearch = () =>
{
    const [search] = useSearchParams(); // 배열로 구조분해할당을 ...    :  )
    const searchMenuName = search.get("menuName");
    const [menuList, setMenuList] = useState([]);

    useEffect(()=>
    {
        setMenuList(searchMenu(searchMenuName));
        console.log(searchMenuName);
    }, [])

    return(
        <>
            <h1 style={{color:"pink"}}>=== search result ===</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu=><MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearch;