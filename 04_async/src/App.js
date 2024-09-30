import AxiosCallComponent from "./02_api/03_axios";
import EmojiContainer from "./02_api/04_github-emoji";
import Container from "./04_data-component/01_rendering-component";
import Weather from "./04_data-component/02_weather-promise";
import WeatherAsync from "./04_data-component/03_weather-async";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PokeMain from "./pokemon-practice/PokeMain";
import PokeSearch from "./pokemon-practice/PokeSearch";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      {/*<ApiComponent/>
      <AxiosCallComponent/>
      <EmojiContainer/>
      <Container/>
      <WeatherAsync/>
            */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="pokelist">
            <Route index element={<PokeMain/>}/>
            <Route path="search" element={<PokeSearch/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
