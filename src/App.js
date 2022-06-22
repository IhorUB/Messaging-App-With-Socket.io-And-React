import "bootstrap/dist/css/bootstrap.min.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}

export default App;
