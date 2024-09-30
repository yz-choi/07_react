import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetails";
import MenuSearch from "./pages/MenuSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="main" element={<Main/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu">
              <Route index element ={<Menu/>}/> {/*검색이랑 상세 페이지는 여기다가 ... */}
              <Route path=":menuCode" element = {<MenuDetail/>}/>
              <Route path="search" element={<MenuSearch/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
