//사이트의 구조

import Header from "../components/Header";
import Navbar from "../components/NavBar";
import {Outlet} from "react-router-dom";

const Layout = () =>
{
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/> {/* 우리 선택에 따라 바뀌는 컴포넌트. 나머지는 보장되긔   :   D */}
        </>
    )
}

export default Layout;