import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");

  // Spotify API Authorization
  const CLIENT_ID = "345e769ef981466e9ee4f8588d86175c";
  const REDIRECT_URI = "https://setlistener.herokuapp.com/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE = "playlist-modify-private";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  // Logout button
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
          <div className="container">
            <div className="d-flex align-items-center">
              <img
                src="spotify-logo.png"
                alt="logo"
                className="logo img-fluid"
              />
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <p className="navbar-brand" style={{ marginTop: "16px" }}>
                  T H E &nbsp; S E T &nbsp; L I S T E N E R
                </p>
              </Link>
            </div>

            {token ? (
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <button onClick={logout} className="button navbar-brand">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        {!token ? (
          <section
            className="d-flex text-center "
            style={{
              height: "85vh",
              backgroundImage: "url(concert.jpg)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container d-flex ">
              <div className="text-center mt-5 flex-grow-1">
                <a
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
                >
                  <img
                    src="connectspotify.png"
                    alt="connect"
                    className="connectButton mt-5"
                  />
                </a>
              </div>
            </div>
          </section>
        ) : (
          <div></div>
        )}

        {token ? (
          <div className="content">
            <Main />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Router>
  );
}

export default App;
