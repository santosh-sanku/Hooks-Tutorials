import "./App.css";
import EffectCounterOne from "./components/effectExample/EffectCounterOne";
import HookMouse from "./components/effectExample/HookMouse";
import Main from "./components/effectExample/Main";
import MouseContainer from "./components/effectExample/MouseContainer";
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
    </div>
  );
}

export default App;
