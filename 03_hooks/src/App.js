import {useState} from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TimerContainer } from "./01_useEffect/testUseEffect";
import { QuestionContainer } from "./01_useEffect/testUseEffect2";



function App() {
  const [message, setMessage] = useState("안냐새요");
  return (
    <>
        {/*<UseEffectBasic message = {message}/>*/}
        {/*<UseEffectMount/>*/}
        {/*<UseEffectUpdate/>*/}
        {/*<Container/>*/}
        {/*<TimerContainer/>*/}

        <QuestionContainer/>
    </>
  );
}

export default App;
