import NavBar from "../../components/NavBar/NavBar";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieListPage from "../MoviesListPage/MoviesListPage";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { movies } from "../../data.js";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [moviesObject, setMoviesObject] = useState(movies);
  console.log(moviesObject);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar setUser={setUser} />
          <Routes>
            <Route
              path="/movies"
              element={<MovieListPage movies={moviesObject} />}
            />
            <Route
              path="/actors"
              element={<ActorListPage movies={moviesObject} />}
            />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          </Routes>{" "}
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
