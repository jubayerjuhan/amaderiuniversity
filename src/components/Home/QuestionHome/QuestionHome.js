import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
// import './QuestionHome.css'
import DUAe from "../../../fakeData/images/images/qbank/DUAe.png"
import comillae from "../../../fakeData/images/images/qbank/comillae.png"
import jue from "../../../fakeData/images/images/qbank/jue.png"
import brac from "../../../fakeData/images/images/qbank/brac.png"
import nsue from "../../../fakeData/images/images/qbank/nsue.png"
import easte from "../../../fakeData/images/images/qbank/easte.png"

// comillae.png
const QuestionHome = () => {
    const [indexFade, setIndexFade] = useState(0);

    const handleSelectFade = (selectedIndex, e) => {
        setIndexFade(selectedIndex);
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="mx-5">
            <div className="vsl mb-5">
            <h1>Question Bank</h1>
          </div>
            <div className="d-flex ">
                <div className="col-md-6 ">
                    <div >
                        <Carousel fade indicators={false} activeIndex={indexFade} onSelect={handleSelectFade}>
                            <Carousel.Item>
                                <img
                                    style={{ width: '100%' }}
                                    className="d-block"
                                    src={DUAe}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a href="/questionBank" style={{ position: 'relative', left: '190px' }} target="blank mt-4">
                                        <button className="btn-dark btn me-md-2 " type="button">See More</button>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '100%' }}
                                    className="d-block"
                                    src={comillae}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a href="/questionBank" style={{ position: 'relative', left: '190px' }} target="blank mt-4">
                                        <button className="btn-dark btn me-md-2 " type="button">See More</button>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '100%' }}
                                    className="d-block"
                                    src={jue}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a href="/questionBank" style={{ position: 'relative', left: '190px' }} target="blank mt-4">
                                        <button className="btn-dark btn me-md-2 " type="button">See More</button>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div >
                        <Carousel  indicators={false} activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    style={{ width: '100%' }}
                                    className="d-block"
                                    src={brac}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a href="/questionBank" style={{ position: 'relative', left: '190px' }} target="blank mt-4">
                                        <button className="btn-dark btn me-md-2 " type="button">See More</button>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '100%' }}
                                    className="d-block"
                                    src={nsue}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a href="/questionBank" style={{ position: 'relative', left: '190px' }} target="blank mt-4">
                                        <button className="btn-dark btn me-md-2 " type="button">See More</button>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '100%' }}
                                    className="d-block"
                                    src={easte}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a href="/questionBank" style={{ position: 'relative', left: '190px' }} target="blank mt-4">
                                        <button className="btn-dark btn me-md-2 " type="button">See More</button>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionHome;