import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";

const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Container  style={{background: "white"}}>
        <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel mt-2 mb-2" >
            <Carousel.Item className="slider-background" interval={2000}  >
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title w-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p className="slider-text"></p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000} >
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={sliderimg}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title"></h3>
                        <p className="slider-text"></p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000} >
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title"></h3>
                        <p className="slider-text"></p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={prod4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title"></h3>
                        <p className="slider-text"></p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}

export default Silder
