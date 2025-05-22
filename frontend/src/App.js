import './App.css';
import Login from './components/login/Login';
// ↳ Brings in your Login component so we can render it

function App() {
  return (
    <div className="App">
      <Login />
      {/* Renders the login form you just created */}
    </div>
  );
}

export default App;