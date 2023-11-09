import { Link } from "react-router-dom";

export default function NavBar(props) {
  const logoutButton = (evt) => {
    evt.preventDefault();
    props.setUser(null);
  };

  return (
    <nav>
      <Link to="/movies">Movies</Link>
      <Link to="/actors">Actors</Link>
      <button onClick={logoutButton}>LOGOUT</button>
    </nav>
  );
}
