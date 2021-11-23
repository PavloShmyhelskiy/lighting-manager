import './App.css';
import Main from './components/Main/Main';
if (!localStorage.getItem("presets")){
  localStorage.setItem("presets", '[[{"color":"#25d80e","ids":["K49","K50","K51"]},{"color":"#dd1313","ids":["K52","K53","K54"]}]]');
  localStorage.setItem("currentPreset", "0");
  localStorage.setItem("currentGroup", "0");
}

function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
