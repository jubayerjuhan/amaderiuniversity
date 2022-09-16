import React from "react";
// import { Link } from 'react-router-dom';
import { faPhone, faEnvelope, faFax } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import facebook from '../../../fakeData/images/images/footer/facebook.png'
// import instagram from '../../../fakeData/images/images/footer/instagram.png'
// import twitter from '../../../fakeData/images/images/footer/twitter.png'
// import search from '../../../fakeData/images/images/footer/search.png'
// import youtube from '../../../fakeData/images/images/footer/youtube.png'

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer full-color mt-5">
      <div className="mx-5">
        <div className="d-flex">
          <div className="col-md-6">
            {/* <h5 className="regular">আমাদেরই বিশ্ববিদ্যালয়</h5> */}
            <br />
            <br />
            <FontAwesomeIcon icon={faPhone} /> +880-2-55668200
            &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faFax} />
            <br />
            <FontAwesomeIcon icon={faEnvelope} /> admissionhelpline@gmail.com
          </div>
          <div className="col-md-6">
            {/* <div className="social-box">
                <ul className="social-list" style={{listStyleType: 'none'}}>
                  <li>
                    <a href="https://www.google.com/" target="blank">
                      <img className="fim" src={facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/" target="blank">
                      <img className="fim" src={twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/" target="blank">
                      <img className="fim" src={search} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/" target="blank">
                      <img className="fim" src={instagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/" target="blank">
                      <img className="fim" src={youtube} alt="" />
                    </a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div> */}
            <div className="copyright">
              <ul className="af">
                <a href="/">
                  <li>About US</li>
                </a>
                <a href="/">
                  <li>Privacy Policy</li>
                </a>
                <a href="/">
                  <li>Term &amp; Conditions</li>
                </a>
              </ul>
            </div>
            <br />
            <br />
            <div className="pfd">
              <p>Developed &amp; Maintained by Illin & Abir</p>
              <p>© Copyright 2021, All Rights Reserved </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
