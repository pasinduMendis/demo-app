import './App.css';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <Button label="press me" onClick={()=>window.alert("press")}/>
    </div>
  );
}

export default App;
