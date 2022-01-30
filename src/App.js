import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import HeaderPrivate from "./components/HeaderPrivate";
import Container from "./components/Container";
import SideBar from "./components/SideBar";
import Home from './pages/Home';
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Private/Home";
import Cursos from "./pages/Private/Cursos";
import Curso from "./pages/Private/Curso";
import VerProva from "./pages/Private/VerProva";
import Prova from "./pages/Private/Prova";
import { GlobalStylePublic } from "./globalstyledpublic";
import { GlobalStylePrivate } from "./globalstyledprivate";


function App() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isFora, setIsFora] = useState(false);
  const [expansible, setExpansible] = useState(true);

  const handleExpansible = () => {
      console.log('sidebar expansivel', expansible);
      setExpansible(!expansible);
  }

  useEffect(() => {
    let uri = window.location.pathname;
    uri.includes('/realizarprova') ? setIsFora(true) : setIsFora(false);
    console.log(window.location.pathname);
  }, []);


  return (
    <BrowserRouter>
      {!isPrivate ?   
        <>
          <GlobalStylePublic/>
          <Header/>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/cadastrar" element={<Cadastro />} />
          </Routes>
        </>
        :
        <>
        {!isFora ? 
          <>
            <GlobalStylePrivate/>
            <HeaderPrivate handleExpansible={handleExpansible} /> 
            <SideBar expansible={expansible}/>
            <Container expansible={expansible}>
              <Routes>
                  <Route path="*" element={<Dashboard />}/>
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  <Route exact path="/cursos" element={<Cursos />} />
                  <Route path="curso/:matematica" element={<Curso />} />
                  <Route path="curso/:matematica/prova" element={<VerProva />} />
              </Routes>
            </Container>
          </>
        :
          <>
            <GlobalStylePrivate/>
            <Routes>
                <Route exact path="curso/:matematica/realizarprova" element={<Prova />} />
            </Routes>
          </>
        }
        </>
      }

    </BrowserRouter>
  );
}

export default App;
