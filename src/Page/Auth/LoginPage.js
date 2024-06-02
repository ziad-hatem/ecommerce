import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "../../images/log in.png";
import LoginHook from "./../../hook/auth/loginHook";
import axios from "axios";

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();
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
                        Giriş Yap
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              className="form-control"
                              value={email}
                              onChange={onChangeEmail}
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
                              type="password"
                              value={password}
                              onChange={onChangePassword}
                              className="form-control"
                              placeholder="Password"
                              style={{ border: "none" }}
                            />
                            {/* <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                          </div>
                        </div>
                        <div className="d-flex justify-content-start mb-5">
                          <div className="">
                            <a
                              href=""
                              className="form-check-label"
                              style={{ color: "#1ececa" }}
                            >
                              Şifremi Unuttum
                            </a>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-lg"
                            onClick={onSubmit}
                            style={{ background: "#1ececa", color: "white" }}
                          >
                            {isPress === true ? (
                              loading === true ? (
                                <Spinner
                                  animation="border"
                                  role="status"
                                ></Spinner>
                              ) : null
                            ) : (
                              "Giriş Yap"
                            )}
                          </button>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" /> */}
                          <label className="form-check-label">
                            Hesabınız yoksa hemen{" "}
                            <Link
                              to="/register"
                              style={{ textDecoration: "none" }}
                            >
                              <span
                                style={{ cursor: "pointer" }}
                                className="text-danger"
                              >
                                Üye ol
                              </span>
                            </Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={login}
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

      {/* <div className='login template d-flex justify-content-center align-items-center'>
                    <div className='40-w p-5 rounded bg-white'>  
                      <form>
                        <h3 className='mx-auto title-login'>Merhaba !</h3>
                        <p className='mx-auto span-login'>Giriş yaparak alışverişe başlayın.</p>
                        <div className='mb-2 d-grid'>
                            <label htmlFor='email' className='label-login'>E-Posta</label>
                            <input type='email' placeholder='' className='user-input text-start p-2 mx-auto' />
                        </div>
                        <div className='mb-2 d-grid'>
                            <label htmlFor='password' className='label-login'>Şifre</label>
                            <input type='password' placeholder='' className='user-input text-start p-2 mx-auto' />
                        </div>
                        <div className='d-grid'>
                            <button className='btn-login mx-auto mt-4'>Giriş Yap</button>
                        </div>
                        <label className="span-login mx-auto my-4">
                        Hesabınız yoksa hemen{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-primary">
                                    Üye ol
                                </span>
                            </Link>
                        </label>
                      </form>
                      <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-primary">
                            Admin girişi
                        </span>
                    </Link>
                    </label>
                    </div>
                    
                </div> */}
      {/* <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">Merhaba !</label>
                        <span className="mx-auto span-login">Giriş yaparak alışverişe başlayın.</span>
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
                        <button className="btn-login mx-auto mt-4">Giriş Yap</button>
                        <label className="mx-auto my-4">
                        Hesabınız yoksa{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    Üye ol
                                </span>
                            </Link>
                        </label>



                    </Col>


                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            Admin girişi
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            Üye girişi
                        </span>
                    </Link>
                </label>
                </Row> */}
    </Container>
  );
};

export default LoginPage;
