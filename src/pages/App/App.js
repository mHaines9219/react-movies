import NavBar from "../../components/NavBar/NavBar";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieListPage from "../MoviesListPage/MoviesListPage";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar setUser={setUser} />
          <Routes>
            <Route path="/movies" element={<MovieListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>{" "}
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
      YO
    </div>
  );
}

export default App;
