import "./MenuItem.css";
import {Link} from "react-router-dom";

const MenuItem = ({menu}) =>
{
    return(
        <Link to={`/menu/${menu.menuCode}`}>
            <div className="MenuItem">
                <h3>name: {menu.menuName}</h3>
                <h3>price: {menu.menuPrice}</h3>
                <h3>category: {menu.categoryName}</h3>
            </div>
        </Link>

    )
}

export default MenuItem;