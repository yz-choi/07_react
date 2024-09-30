import AxiosCallComponent from "./02_api/03_axios";
import EmojiContainer from "./02_api/04_github-emoji";
import Container from "./04_data-component/01_rendering-component";
import Weather from "./04_data-component/02_weather-promise";
import WeatherAsync from "./04_data-component/03_weather-async";
import PokeBox from "./04_data-component/testGetGameData";
import GameData from "./04_data-component/testGetGameData";

function App() {
  return (
    <>
      {/*<ApiComponent/>
      <AxiosCallComponent/>
      <EmojiContainer/>
      <Container/>
      <WeatherAsync/>
            */}

      <PokeBox/>
    </>
  );
}

export default App;
