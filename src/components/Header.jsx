
const Header = () => {
  return (
    <nav className="navbar navbar-dark fixed-top px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <button id="menuToggle" className="btn btn-dark me-2">
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand" href="#">
            <i className="fas fa-play-circle"></i> Vidoe
          </a>
        </div>
        <form className="search-form">
          <div className="input-group">
            <input
              type="search"
              className="form-control bg-dark text-white border-white"
              placeholder="Search for..."
            />
            <button className="btn btn-dark border-dark" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <div className="d-flex align-items-center">
          <button id="searchToggle" className="btn btn-dark">
            <i className="fas fa-search"></i>
          </button>
          <button className="btn btn-dark me-2">
            <i className="fas fa-bell"></i>
          </button>
          {/* <img
            src="https://api/placeholder/32/32"
            className="rounded-circle"
            alt="Profile"
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
