import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./page/Main";
import Menu from "./page/Menu";
import CheckOrder from "./page/CheckOrder";
import MenuDetail from "./page/MenuDetail";
import CompleteOrder from "./page/CompleteOrder";
import { useState } from "react";

function App() {

  const [orderList, setOrderList] = useState([]);
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Main/>}/>
          <Route path="menu">
            <Route index element={<Menu/>}/>
            <Route path=":menuId" element={<MenuDetail orderList={orderList}
            setOrderList={setOrderList}/>}/>
          </Route>
          <Route path="checkorder" element={<CheckOrder orderList={orderList}/>}/>  
          <Route path="completeorder" element={<CompleteOrder/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
