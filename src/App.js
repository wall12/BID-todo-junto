
import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstname="Jane"
      lastname="Doe"
      age={"45"}
      haircolor="black"
      />
      <PersonCard
      firstname="John"
      lastname="Smith"
      age={"88"}
      haircolor="Brown"
      />
    </div>
  );
}

export default App;
