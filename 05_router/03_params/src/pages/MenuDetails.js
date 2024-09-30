import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";

const MenuDetail = () =>
{
    const {menuCode} = useParams();
    const [menu, setMenu] = useState({
        menuName: "",
        menuPrice: "",
        categoryName: "",
        detail: {description: "", image: ""}
    });

    useEffect(()=>
    {
        console.log(menuCode);
        setMenu(getMenuDetail(menuCode));
        console.log(getMenuDetail(menuCode));
    }, []);

    return(
        <>
            <h2>************</h2>
            <h3>menu name: {menu.menuName}</h3>
            <h3>menu price: {menu.menuPrice}</h3>
            <h3>menu category: {menu.categoryName}</h3>
            <h3>menu decs: {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{maxWidth:500}}/>
        </>
    )
}

export default MenuDetail;