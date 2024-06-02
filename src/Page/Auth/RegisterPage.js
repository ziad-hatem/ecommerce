import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import signup from "../../images/sign up.png";
import RegisterHook from "../../hook/auth/registerHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //! toast style alsin diye import etmek zorundayim :)

const RegisterPage = () => {
  const [
    name,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ] = RegisterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <section className="vh-10">
        <div className="container h-100 py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black "
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Hesap oluştur
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={name}
                              onChange={onChangeName}
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              style={{ border: "none" }}
                            />
                            {/* <label className="form-label" htmlFor="form3Example1c">Your Name</label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              value={email}
                              onChange={onChangeEmail}
                              className="form-control"
                              placeholder="Your Email"
                              style={{ border: "none" }}
                            />
                            {/* <label className="form-label" htmlFor="form3Example3c">Your Email</label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={password}
                              onChange={onChangePassword}
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              style={{ border: "none" }}
                            />
                            {/* <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              value={confirmPassword}
                              onChange={onChangeConfirmPassword}
                              className="form-control"
                              placeholder="Repeat your password"
                              style={{ border: "none" }}
                            />
                            {/* <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label> */}
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-start mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                          />
                          <label className="form-check-label">
                            <a href="#!" style={{ color: "#1ececa" }}>
                              Üyelik koşulları
                            </a>
                            'nı Kabul ediyorum
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-lg"
                            onClick={onSubmit}
                            style={{ background: "#1ececa", color: "white" }}
                          >
                            Üye Ol
                          </button>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" /> */}
                          <label className="form-check-label">
                            Hesabınız varsa{" "}
                            <Link
                              to="/login"
                              style={{ textDecoration: "none" }}
                            >
                              <span
                                style={{ cursor: "pointer" }}
                                className="text-danger"
                              >
                                Giriş Yap
                              </span>
                            </Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={signup}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              Admin girişi
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
              Üye girişi
            </span>
          </Link>
        </label>
      </section>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"> */}
      {/* Copyright */}
      {/* <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div> */}
      {/* Right */}
      {/* <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div> */}
      {/* Right */}
      {/* </div> */}

      {/* <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Hesap oluştur</label>
            <span className="mx-auto span-login">Oturum açtığınızda, bizimlesiniz!</span>

            <input
              placeholder="Kullanıcı adı"
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              placeholder="E-posta"
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="Şifre"
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Üye ol</button>
            <label className="mx-auto my-4">
              Hesabınız varsa{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Giriş Yap
                </span>
              </Link>
            </label>
          </Col>
        </Row> */}
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
