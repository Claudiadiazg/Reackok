import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./assets/components/pages/homePages/homePage";
import CharacterPage from "./assets/components/pages/CharacterPage/CharacterPage";
import EpisodesPage from "./assets/components/pages/CharacterPage/Episodes/episodesPage";
import {NotFoundPage} from "./assets/components/pages/Pagina NotFound/paginaNotFound.jsx";
import "./App.css";
import NavbarComponents from "./assets/components/pages/navbarPage/navbarPage";

// import { Container,Form, InputGroup, Table } from "react-bootstrap";

function App() {
  return (
    <Router>
      <NavbarComponents />
      <div className="home">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/characters" element={<CharacterPage />}></Route>
          <Route path="/episodes" element={<EpisodesPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;