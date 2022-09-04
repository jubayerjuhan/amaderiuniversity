import React, { 
    // useEffect, useState
 } from 'react';
import Carousel from 'react-multi-carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import './QuestionBank.css'
// import image from '../../fakeData/images/images/qbank/duf.png'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
// images/qbank/duf.png
import duf from '../../fakeData/images/images/qbank/duf.png'
import rajshahif from '../../fakeData/images/images/qbank/rajshahif.png'
import juf from '../../fakeData/images/images/qbank/juf.png'
import chittagonf from '../../fakeData/images/images/qbank/chittagonf.png'
import agriculturalf from '../../fakeData/images/images/qbank/agriculturalf.png'
import butexf from '../../fakeData/images/images/qbank/butexf.png'
import khulnaf from '../../fakeData/images/images/qbank/khulnaf.png'
import buetf from '../../fakeData/images/images/qbank/buetf.png'
import uiuf from '../../fakeData/images/images/qbank/uiuf.png'
import bracf from '../../fakeData/images/images/qbank/bracf.png'
import aiuf from '../../fakeData/images/images/qbank/aiuf.png'
import iu from '../../fakeData/images/images/qbank/iu.png'
import austf from '../../fakeData/images/images/qbank/austf.png'
import eastf from '../../fakeData/images/images/qbank/eastf.png'
import nsuf from '../../fakeData/images/images/qbank/nsuf.png'
import asiaaf from '../../fakeData/images/images/qbank/asiaaf.png'
const QuestionBank = () => {
    // const [opinions, setOpinions] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:4200/opinions')
    //         .then((response) => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setOpinions(data)
    //         })
    // }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="qbBody">
            <Header></Header>
            <div style={{ background: '#D3F8F8', boxShadow: '10px 10px 5px gray' }} className="text-center container">
                <h2><b>Question Bank</b></h2>
            </div>
            <section className='public mb-5 mx-5'>

                <Container>
                    <div className="bg-danger p-1 mb-5" style={{ marginBottom: '10px', width: '25%', borderRadius: '5px' }}>
                        <h4 style={{ color: 'white', fontSize: '34px', fontWeight: '600' }} className='text-center text-white'>
                            Public University
                        </h4>
                    </div>

                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                        keyBoardControl={true} dotListClass="custom-dot-list-style" showDots={true}>
                        {/* <div className="mx-2">

                            <a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={image} alt="" /></a>
                        </div>
                        <div className="mx-2">

                            <a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={image} alt="" /></a>
                        </div>
                        <div className="mx-2">

                            <a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={image} alt="" /></a>
                        </div> */}
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={duf} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/1m1TifZ4vDey5BkrjIoB81TeaudyOVvF4?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={rajshahif} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/1pL_maRj1nALFbaOMmoxU8H6bnIqCZs_L?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={juf} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/1aMoRoQ37ASn_LOmC_72SU9brhxkjy3Pp?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={chittagonf} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/1fV-cNZR6cK5fQl3Zis3GlUI2yRhiDa5X?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={agriculturalf} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/1BnwJPeyHhBApWJX8nJZlLHBocrJkemtb?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={butexf} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/14evRgMuj03_IFkEB_Gewtch62EjRbJDf?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={khulnaf} alt="" /></a></div>
                            <div className="mx-2"><a href="https://drive.google.com/drive/folders/1_OXuIxyytJBOSFp1ZgGLfYcX8fzMILKQ?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={buetf} alt="" /></a></div>
                    </Carousel>
                </Container>
            </section>
            <section className='private mb-5 mx-5'>
                <Container>
                    <div className="bg-danger p-1 mb-5" style={{ marginBottom: '10px', width: '25%', borderRadius: '5px' }}>
                        <h4 style={{ color: 'white', fontSize: '34px', fontWeight: '600' }} className='text-center text-white'>
                            Private University
                        </h4>
                    </div>


                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                        keyBoardControl={true} dotListClass="custom-dot-list-style" showDots={true}>
                        {/* <div className="mx-2">

                            <a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={image} alt="" /></a>
                        </div>
                        <div className="mx-2">

                            <a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={image} alt="" /></a>
                        </div>
                        <div className="mx-2">

                            <a href="https://drive.google.com/drive/folders/1yo16ZaGudSa5lZ1Ac28A-49Uhy8NKB9C?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={image} alt="" /></a>
                        </div> */}
                        
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/10qcyvrE9Udd0RIdH9RFWZVRmZ_Z5RCBk?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={uiuf} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1HyNar7njI5kCY8ysJhlZSVM5tslPomP3?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={bracf} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1WMZSF5YcRhyHPtVZDH6IDwFP5MBcM_C3?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={aiuf} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1qOZFd2b6yam9EMK0ajIfAnwAYMnFICFx?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={iu} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1sCfgpC9SxyPtTo59SE2TXYryyPKfZXYu?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={austf} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1GqOZPBn0zN41AIynCOSoSz3-Wy61PXrd?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={eastf} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1MMjcjeSHzbdE0YLaYi9y6HhbZqBZaI70?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={nsuf} alt="" /></a></div>
                        <div className="mx-2"><a href="https://drive.google.com/drive/folders/1XKIcXySYokdwdWsGCCDojRHBAz-ggTa1?usp=sharing" target="_blank" rel="noreferrer"><img className="qbImg" src={asiaaf} alt="" /></a></div>
                    </Carousel>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default QuestionBank;