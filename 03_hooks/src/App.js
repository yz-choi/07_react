import {useState} from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TimerContainer } from "./01_useEffect/testUseEffect";
import { QuestionContainer } from "./01_useEffect/testUseEffect2";
import { ProfileContainer } from "./01_useEffect/testUseEffect3";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-control";
import ReduceContorl from "./02_useReducer/useReducerTest";
import HardCalculator from "./03_useMemo/01_hard-calculator";
import ComplexCaculator from "./03_useMemo/02_complex-calculator";
import UseMemoComponent from "./03_useMemo/03_performance-useMemo";
import LocationComponent from "./03_useMemo/04_object-type-problem";
import SquareCalculator from "./03_useMemo/testUseMemo";
import PrintProductsByCategory from "./03_useMemo/testCategory";



function App() {
  const [message, setMessage] = useState("안냐새요");
  return (
    <>
        {/*<UseEffectBasic message = {message}/>*/}
        {/*<UseEffectMount/>*/}
        {/*<UseEffectUpdate/>*/}
        {/*<Container/>*/}
        {/*<TimerContainer/>*/}
        {/*<QuestionContainer/>*/}
        {/*<ProfileContainer/>*/}
        {/*<UseReducerBasic/>*/}


        {/*<ReducerFormControl/>
        <Input/> 
        
        <ReduceContorl/>
        <HardCalculator/>
        <UseMemoComponent/>
        <LocationComponent/>
      
        <SquareCalculator/>*/}


        <PrintProductsByCategory/>
    </>
  );
}

export default App;
