import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div class="container">

          <div className="d-flex align-items-center">
            <img src="spotify-logo.png" alt="logo" className="logo img-fluid" />
            <Link to={'/'} style={{textDecoration: "none"}}>
            <a className="navbar-brand">
              T H E &nbsp; S E T &nbsp; L I S T E N E R
            </a>
            </Link>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to={'/about'} style={{textDecoration: "none"}}>
                   <p class="nav-link">
                  About
                </p> 
                </Link>
                
              </li>
            </ul>
          </div>
          
        </div>
      </nav>

    </div>
  );
};

export default Header;
