import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = ({ activeMenu }) => {
  useEffect(() => {
    const handleMenuToggle = () => {
      document.querySelector(".sidebar").classList.toggle("show");
    };

    const handleOutsideClick = (event) => {
      if (window.innerWidth <= 768) {
        const sidebar = document.querySelector(".sidebar");
        const menuToggle = document.getElementById("menuToggle");
        if (
          !sidebar.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          sidebar.classList.remove("show");
        }
      }
    };

    const handleActiveLink = (e) => {
      document
        .querySelectorAll(".nav-link")
        .forEach((link) => link.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", handleMenuToggle);
    document.addEventListener("click", handleOutsideClick);
    navLinks.forEach((link) =>
      link.addEventListener("click", handleActiveLink)
    );

    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
      document.removeEventListener("click", handleOutsideClick);
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleActiveLink)
      );
    };
  }, []);

  return (
    <div className="sidebar mt-4">
      <Link
        to="/"
        className={`nav-link mt-4 ${activeMenu === "home" ? "active" : ""}`}
      >
        <i className="fas fa-home"></i>
        Home
      </Link>
      <Link
        to="/search"
        className={`nav-link ${activeMenu === "search" ? "active" : ""}`}
      >
        <i className="fas fa-compass"></i>
        Explore
      </Link>
      <Link
        to="/category"
        className={`nav-link ${activeMenu === "category" ? "active" : ""}`}
      >
        <i className="fas fa-users"></i>
        Category
      </Link>

      <button id="menuToggle" className="btn btn-primary">
        Toggle Sidebar
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  activeMenu: PropTypes.string.isRequired,
};

export default Sidebar;
