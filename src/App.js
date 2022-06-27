import "bootstrap/dist/css/bootstrap.min.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ContactsProvider from "./context/ContactsProvider";
import ConversationsProvider from "./context/ConversionsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div className="App">
      {id ? (
        <ContactsProvider>
          <ConversationsProvider>
            <Dashboard id={id} />
          </ConversationsProvider>
        </ContactsProvider>
      ) : (
        <Login onIdSubmit={setId} />
      )}
    </div>
  );
}

export default App;
