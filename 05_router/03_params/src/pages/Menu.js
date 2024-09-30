import {useState, useEffect} from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import menuStyle from "./Menu.css";
import {useNavigate} from "react-router-dom";


const Menu = () =>
{
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(()=>
    {
        setMenuList(getMenuList());
    }, []);

    const onClickHandler = () =>
    {
        navigate(`/menu/search?menuName=${searchValue}`); //? 뒤에 오는 애들은 쿼리 스트링 파라미터 menuName이 key, searchValue가 value
    }

    return(
        <>
        <h1>판매 메뉴 목록</h1>
        <div>
            <input type="search" name="menuName" onChange={e=>{setSearchValue(e.target.value)}}/>
            <button onClick={onClickHandler}>search</button>
        </div>
            <div className={menuStyle.MenuBox}>
            {menuList.map(menu=><MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
        </>
    )
}

export default Menu;