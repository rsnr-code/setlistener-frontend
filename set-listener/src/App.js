import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import { useEffect, useState } from 'react'
import { Button } from "bootstrap";

function App() {
  const CLIENT_ID = "345e769ef981466e9ee4f8588d86175c"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"


  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

      if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}

  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">

          <div className="d-flex align-items-center">
            <img src="spotify-logo.png" alt="logo" className="logo img-fluid" />
            <Link to={'/'} style={{textDecoration: "none"}}>
            <p className="navbar-brand" style={{marginTop: "16px"}}>
              T H E &nbsp; S E T &nbsp; L I S T E N E R
            </p>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

{token ? 
<div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <button onClick={logout}>Logout</button>
                
              </li>
            </ul>
          </div>
          : <div></div>
}
          
          
        </div>
      </nav>

        {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <div></div>
                    // <button onClick={logout}>Logout</button>
                    }


{token ?
                   <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </div> 

                    : <h2>Please login</h2>
                }
        
      </div>
    </Router>
  );
}

export default App;
