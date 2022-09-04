import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import shakir from '../../fakeData/images/images/aboutus/shakir.jpg';
import rinku from '../../fakeData/images/images/aboutus/rinku.jpg';
import susmita from '../../fakeData/images/images/aboutus/susmita.jpg';
import facebook from '../../fakeData/images/images/footer/facebook.png';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="about">
            <Header></Header>
        <div className="abtdh">
          <h1 className="abth">Our Team</h1>
        </div>
        <div className="d-flex row-cols-1 row-cols-md-3 g-4 mx-5">
          <div className="col">
            <div className="card h-100">
              <img src={shakir} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">I am Emdadul Haque Shakir,a student of Daffodil International University,studying B.S.c in CSE</p>
                <p className="card-text">DIU ID : 181-15-10741</p>
                <p className="card-text">DIU Email : emdadul15-10741@diu.edu.bd</p>
                <a href="https://www.google.com/" target="blank" style={{textDecoration: 'none'}}>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">View Profile</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={rinku} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">I am Rinku Nahar Hossan.I am studying in Daffodil International University in B.Sc in CSE.</p>
                <p className="card-text">DIU ID : 181-15-10617</p>
                <p className="card-text">DIU Email : rinku15-10617@diu.edu.bd</p>
                <a href="https://www.google.com/" target="blank" style={{textDecoration: 'none'}}>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">View Profile</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={susmita} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">I am Susmita Saha, a student of Daffodil International University, studying B.sc in CSE.</p>
                <p className="card-text">DIU ID : 181-15-10571</p>
                <p className="card-text">DIU Email : susmita15-10571@diu.edu.bd</p>
                <a href="https://www.google.com/" target="blank" style={{textDecoration: 'none'}}>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">View Profile</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="qdv">
          <div>
            <h2>What is Aamderi Bissobiddaloy?</h2>
            <p>Think about the name Aamderi Bissobiddaloy. The name gives you the concept of the competition of university admission test in Bangladesh. Literally this is a war. Not a war with guns and soldier this is a war of intelligence ,war of  students to prove themselves the best candidate to get admit in Public University. The admissionwar is a very useful tool to get all updates about university admission. Not only university admission but also all education sector of Bangladesh.It is an internet based service to provide all education sector’s information of Bangladesh.</p>
          </div>
          <div>
            <h2>Amaderi Biswobidyaloy for whom?</h2>
            <p>Students are very busy and anxious about their study in their hard time like university admission test.They need a system which provides information without any effort and the system must will be time effective. Yes admission war is such type of information service that provides updated informations to the students in a time optimized way. Students will get the latest update about their education with only one click.
              <br />
              <br />
              They can save their time by rejecting google search or checking a long list of university admission website. 
            </p>
          </div>
          <div className="last">
            <h3 className="lasth">Official Facebook Account Of Us</h3>
            <a href="https://www.google.com/" target="blank">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    );
};

export default AboutUs;