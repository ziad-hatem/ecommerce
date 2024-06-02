import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";

const NavBarLogin = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white sticky-top">
      <div className="container">
        <a href="/">
          <img
            src={logo}
            className="logo"
            style={{ width: "128px", height: "25px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Nav>
          {user !== "" ? (
            <NavDropdown
              title={user.name}
              id="basic-nav-dropdown"
              className="nav-text d-flex mt-3 justify-content-space-between"
              style={{ color: "black" }}
            >
              {user.role === "admin" ? (
                <NavDropdown.Item href="/admin/allproducts">
                  لوحة التحكم
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/user/profile">
                  الصفحه الشخصية
                </NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logOut} href="/">
                تسجيل خروج
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-space-between"
            >
              <img src={login} className="login-img" alt="sfvs" />
              <p style={{ color: "black" }}>Giriş Yap</p>
            </Nav.Link>
          )}
          <Nav.Link
            href="/cart"
            className="nav-text d-flex mt-3 justify-content-space-between"
            style={{ color: "white" }}
          >
            <img src={cart} className="login-img" alt="sfvs" />
            <p style={{ color: "black" }}>Sepetim</p>
          </Nav.Link>
          <Nav.Link
            href="/wishlist"
            className="nav-text d-flex mt-3 justify-content-space-between"
            style={{ color: "white" }}
          >
            <i
              className="fas fa-heart fa-sm mt-1"
              style={{ color: "black", width: "20px", height: "20px" }}
            ></i>
            <p style={{ color: "black" }}>Wishlist</p>
          </Nav.Link>
          <Nav.Link
            href=""
            className="nav-text d-flex mt-3 justify-content-space-between"
            style={{ color: "white" }}
          >
            <i
              className="fas fa-search fa-sm mt-1"
              style={{ color: "black", width: "20px", height: "20px" }}
            ></i>
            <p style={{ color: "black" }}>Search</p>
          </Nav.Link>
        </Nav>
      </div>
    </nav>
  );
};

export default NavBarLogin;
