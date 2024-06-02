import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
const Footer = () => {
    return (
        <footer className='bg-white text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center  p-4 border-bottom'>
        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                İMU SHOP
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>İletşim</h6>
              <p>
                <i className='fas fa-home me-2'></i>
                New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright{" "}
        <a className='text-reset fw-bold' href='/'>
          İMU SHOP
        </a>
      </div>
    </footer>
    //     <footer className='bg-light text-center text-lg-start text-muted'>
    //     <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    //       <div className='me-5 d-none d-lg-block'>
    //         <span>Get connected with us on social networks:</span>
    //       </div>
  
    //       <div>
    //         <a href='' className='me-4 text-reset'>
    //           <i className='fab fa-facebook-f'></i>
    //         </a>
    //         <a href='' className='me-4 text-reset'>
    //           <i className='fab fa-twitter'></i>
    //         </a>
    //         <a href='' className='me-4 text-reset'>
    //           <i className='fab fa-google'></i>
    //         </a>
    //         <a href='' className='me-4 text-reset'>
    //           <i className='fab fa-instagram'></i>
    //         </a>
    //         <a href='' className='me-4 text-reset'>
    //           <i className='fab fa-linkedin'></i>
    //         </a>
    //         <a href='' className='me-4 text-reset'>
    //           <i className='fab fa-github'></i>
    //         </a>
    //       </div>
    //     </section>
  
    //     <section className=''>
    //       <div className='container text-center text-md-start mt-5'>
    //         <div className='row mt-3'>
    //           <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
    //             <h6 className='text-uppercase fw-bold mb-4'>
    //               <i className='fas fa-gem me-3'></i>
    //               Company name
    //             </h6>
    //             <p>
    //               Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
    //               amet, consectetur adipisicing elit.
    //             </p>
    //           </div>
  
    //           <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
    //             <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Angular
    //               </a>
    //             </p>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 React
    //               </a>
    //             </p>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Vue
    //               </a>
    //             </p>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Laravel
    //               </a>
    //             </p>
    //           </div>
  
    //           <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
    //             <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Pricing
    //               </a>
    //             </p>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Settings
    //               </a>
    //             </p>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Orders
    //               </a>
    //             </p>
    //             <p>
    //               <a href='#!' className='text-reset'>
    //                 Help
    //               </a>
    //             </p>
    //           </div>
  
    //           <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
    //             <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
    //             <p>
    //               <i className='fas fa-home me-2'></i>
    //               New York, NY 10012, US
    //             </p>
    //             <p>
    //               <i className='fas fa-envelope me-3'></i>
    //               info@example.com
    //             </p>
    //             <p>
    //               <i className='fas fa-phone me-3'></i> + 01 234 567 88
    //             </p>
    //             <p>
    //               <i className='fas fa-print me-3'></i> + 01 234 567 89
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
  
    //     <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    //       © 2021 Copyright:
    //       <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
    //         MDBootstrap.com
    //       </a>
    //     </div>
    //   </footer>
        // <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
        //     <Container className="">
        //         <Row className="d-flex justify-content-between align-items-center">
        //             <Col sm="6" className="d-flex align-items-center ">
        //                 <div className="footer-shroot ">Şartlar ve koşullar</div>
        //                 <div className="footer-shroot mx-2">Gizlilik Politikası</div>
        //                 <div className="footer-shroot mx-2">İletşim</div>
        //             </Col>
        //             <Col
        //                 sm="6"
        //                 className="d-flex justify-content-end align-items-center ">
        //                 <div className="d-flex pt-3 mx-2">
        //                     <img width="20px" height="20px" src={phone} alt="" />
        //                     <p className="footer-phone">0122455346356</p>
        //                 </div>
        //                 <div style={{ cursor: "pointer" }}>
        //                     <img width="20px" height="20px" src={facebook} alt="" />
        //                 </div>
        //                 <div style={{ cursor: "pointer" }} className="">
        //                     <img width="20px" height="20px" src={instagram} alt="" />
        //                 </div>
        //                 <div style={{ cursor: "pointer" }} className="">
        //                     <img width="20px" height="20px" src={twitter} alt="" />
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    )
}

export default Footer
