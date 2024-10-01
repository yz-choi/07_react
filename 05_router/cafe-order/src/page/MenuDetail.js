import { useEffect, useState } from "react";
import { getMenuDetail } from "../api/MenuApi";
import { useNavigate, useParams } from "react-router-dom";

const MenuDetail = ({orderList, setOrderList}) =>
{
    const {menuId} = useParams();
    const [menu, setMenu] = useState(
        {
            name: "",
            price: "",
            description: ""
        }
    );
    const navigate = useNavigate();

    const onClickAddCart = () =>
    {
        //추가하는 기능    
        setOrderList([...orderList, menu])
        navigate(`/menu`);
    }

    const onClickBack = () =>
    {
        navigate(`/menu`);
    }
    
    useEffect(()=>
    {
        setMenu(getMenuDetail(menuId));
    })

    return(
        <>
            <h2> 〓〓〓〓〓〓〓〓〓〓 </h2>
            <h3> {menu.name} </h3>
            <p>가격: {menu.price}</p>
            <p>{menu.description}</p>
            <button onClick={onClickAddCart}>장바구니 추가</button>
            <button onClick={onClickBack}>돌아가기</button>
        </>
    )
}

export default MenuDetail;