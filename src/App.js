
import './App.css';
import {Routes,Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
