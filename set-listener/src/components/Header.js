import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">

          <div className="d-flex align-items-center titleLogo">
            <img src="spotify-logo.png" alt="logo" className="logo img-fluid" />
            <Link to={'/'} style={{textDecoration: "none"}}>
            <p className="navbar-brand" style={{marginTop: "10px"}}>
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

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={'/about'} style={{textDecoration: "none"}}>
                   <p className="nav-link">
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
