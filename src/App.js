import "./App.css";
import MainContext from "./components/contextExamples/MainContext";
import DataFetchingById from "./components/effectExample/DataFetchingById";
import DataFetchingByIdButton from "./components/effectExample/DataFetchingByIdButton";
import EffectCounterOne from "./components/effectExample/EffectCounterOne";
import HookMouse from "./components/effectExample/HookMouse";
import IntervalHookCounter from "./components/effectExample/IntervalHookCounter";
import Main from "./components/effectExample/Main";
import MouseContainer from "./components/effectExample/MouseContainer";
import CounterOne from "./components/reducerExamples/CounterOne";
import CounterTwo from "./components/reducerExamples/CounterTwo";
import IntroReducer from "./components/reducerExamples/IntroReducer";
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
    </div>
  );
}

export default App;
