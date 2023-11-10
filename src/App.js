import "./App.css";
import ParentComponent from "./components/callBackExamples/ParentComponent";
import MainContext from "./components/contextExamples/MainContext";
import DataFetchingById from "./components/effectExample/DataFetchingById";
import DataFetchingByIdButton from "./components/effectExample/DataFetchingByIdButton";
import EffectCounterOne from "./components/effectExample/EffectCounterOne";
import HookMouse from "./components/effectExample/HookMouse";
import IntervalHookCounter from "./components/effectExample/IntervalHookCounter";
import Main from "./components/effectExample/Main";
import MouseContainer from "./components/effectExample/MouseContainer";
import CounterOne from "./components/reducerExamples/CounterOne";
import CounterThree from "./components/reducerExamples/CounterThree";
import CounterTwo from "./components/reducerExamples/CounterTwo";
import DataFetchingOne from "./components/reducerExamples/DataFetchingOne";
import DataFetchingTwo from "./components/reducerExamples/DataFetchingTwo";
import IntroReducer from "./components/reducerExamples/IntroReducer";
import Index from "./components/reducerExamples/reducerWithContext/Index";
import IndexState from "./components/stateExample/IndexState";

function App() {
  return (
    <div className="App">
      <h1>React Hooks Tutorial</h1>
      <h3>from codevolution</h3>
      <hr />
      <hr />
      <IndexState />
      <hr />
      <Main />
      <EffectCounterOne />
      <hr />
      <HookMouse />
      <hr />
      <MouseContainer />
      <hr />
      <IntervalHookCounter />
      <hr />
      <DataFetchingById />
      <hr />
      <DataFetchingByIdButton />
      <hr />
      <MainContext />
      <hr />
      <IntroReducer />
      <hr />
      <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree />
      <hr />
      <Index />
      <hr />
      <DataFetchingOne />
      <hr />
      <DataFetchingTwo />
      <hr />
      <ParentComponent />
    </div>
  );
}

export default App;
