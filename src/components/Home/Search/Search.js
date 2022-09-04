import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../fakeData/images/images/diu.jpg';
import image2 from '../../../fakeData/images/images/DU.jpg';
import image3 from '../../../fakeData/images/images/eden.jpg';
import image4 from '../../../fakeData/images/images/JNU.jpg';
import image5 from '../../../fakeData/images/images/JU.jpg';
import amaderiBisshobiddaloy from '../../../fakeData/images/images/amaderiBisshobiddaloy.jpeg';
const Search = () => {
    return (
        <div style={{}} >
            <div style={{ margin: '0 auto', textAlign: 'center' }} className="">
                <Carousel>
                <Carousel.Item>
                        <img

                            className="d-block cari"
                            src={amaderiBisshobiddaloy}
                            alt="..."
                        />
                        {/* <div className="carousel-caption d-none d-md-block carousel-like">
                            <p>“Start where you are. Use what you have. Do what you can.”</p>
                            <h4>― Arthur Ashe</h4>
                        </div> */}
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block cari"
                            src={image1}
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block carousel-like">
                            <p>“Start where you are. Use what you have. Do what you can.”</p>
                            <h4>― Arthur Ashe</h4>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block cari"
                            src={image2}
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block carousel-like">
                            <p>“The beautiful thing about learning is nobody can take it away from you.”</p>
                            <h4>― B.B. King</h4>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block cari"
                            src={image3}
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block carousel-like">
                            <p>“What we learn with pleasure we never forget.”</p>
                            <h4>― Alfred Mercier</h4>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block cari"
                            src={image4}
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block carousel-like">
                            <p>"It is the mark of an educated mind to be able to entertain a thought without accepting it."</p>
                            <h4>― Aristotle</h4>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block cari"
                            src={image5}
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block carousel-like">
                            <p>"Develop a passion for learning. If you do, you will never cease to grow."</p>
                            <h4>― Anthony</h4>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            
            </div>

        </div>
    );
};

export default Search;