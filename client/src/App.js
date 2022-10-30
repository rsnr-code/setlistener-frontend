import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { GiExitDoor, GiInfo } from "react-icons/gi";
import { RiArrowGoBackLine } from "react-icons/ri";

function App() {
  const [token, setToken] = useState("");
  const [info, setInfo] = useState(false);

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
                  onClick={logout}
                  className="button navbar-brand formBtns"
                >
                  {" "}
                  <GiExitDoor
                    className="logoutBtn"
                    style={{ fontSize: "2.5rem" }}
                  />{" "}
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    setInfo(true);
                  }}
                  className="button navbar-brand formBtns"
                >
                  {" "}
                  <GiInfo
                    className="infoBtn"
                    style={{ fontSize: "1.5rem" }}
                  />{" "}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        {!token ? (
          <section
            className="d-flex text-center "
            style={{
              height: "90vh",
              backgroundImage: "url(concert.jpg)",
              backgroundRepeat: "no-repeat",
            }}
          >
            {!info ? (
              <div className="container d-flex ">
                <div className="text-center mt-5 flex-grow-1">
                  <a
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
                  >
                    <img
                      src="connectspotify.png"
                      alt="connect"
                      className="connectButton mt-5 formBtns"
                    />
                  </a>
                </div>
              </div>
            ) : (
              <div className="container d-flex justify-content-center">
                <div className="text-center mt-5 infoBox">
                  <p className="infoText mt-1">
                    Going to a show? Not totally familiar with an artist’s
                    catalog? Give The Set Listener a try. The Set Listener is a
                    web app that will create a Spotify playlist of an artist’s
                    most recent show.{" "}
                  </p>
                  <p className="infoText">
                    To use The Set Listener just type in the artist name, and
                    hit the search button, you’ll be presented with a playlist
                    of songs from that artist’s most recent show. Hit the ‘Save
                    this playlist to Spotify’ button and you’ll have a Spotify
                    playlist that you can listen to on your desktop or on your
                    mobile phone.
                  </p>
                  <button
                    onClick={() => {
                      setInfo(false);
                    }}
                    className="button navbar-brand formBtns"
                  >
                    {" "}
                    <RiArrowGoBackLine
                      className="infoBtn"
                      style={{ fontSize: "1.5rem" }}
                    />{" "}
                  </button>
                </div>
              </div>
            )}
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
