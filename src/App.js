import "./App.css";
import EffectCounterOne from "./components/effectExample/EffectCounterOne";
import Main from "./components/effectExample/Main";
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
    </div>
  );
}

export default App;
