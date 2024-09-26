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
import CallbackProblem from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-memoization";
import CallbackComponent from "./04_useCallback/03_components";
import UseRefCounter from "./05_useRef/02_useRef";
import LoginComponent from "./05_useRef/03_inputRef";
import PostComponent from "./05_useRef/testUseRef";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";
import CustomHooks from "./07_custom-hooks/02_custom-hooks";



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
      
        <SquareCalculator/>
        <PrintProductsByCategory/>
        <FunctionMemoization/>
         <CallbackComponent/>
         <UseRefCounter/>
         <LoginComponent/>
         <PostComponent/>
         <ContextContainer/>
         <CustomHooks/>*/}
         <PostComponent/>
    </>
  );
}

export default App;
