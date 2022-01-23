import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
