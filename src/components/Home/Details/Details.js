import React from 'react';
import './Details.css'
// import buetLogo from '../../../fakeData/images/images/buetlogo.jpg'
// import krisi from '../../../fakeData/images/images/krisi.jpg'
// import jnulogo from '../../../fakeData/images/images/jnulogo.jpg'
// import austlogo from '../../../fakeData/images/images/austlogo.jfif'
// import diulogo from '../../../fakeData/images/images/diulogo.jpg'
// import aiublogo from '../../../fakeData/images/images/aiublogo.jpg'
// import sarkarilogo from '../../../fakeData/images/images/sarkarilogo.jpg'
// import titulogo from '../../../fakeData/images/images/titulogo.jpg'
// import edenlogo from '../../../fakeData/images/images/edenlogo.jpg'
import DU from '../../../fakeData/images/images/DU.jpg'
import sust from '../../../fakeData/images/images/sust.jpg'
import JU from '../../../fakeData/images/images/JU.jpg'
import diu from '../../../fakeData/images/images/diu.jpg'
import nsu from '../../../fakeData/images/images/nsu.jpg'

import uttora from '../../../fakeData/images/images/uttora.jpg'
import dhakacollege from '../../../fakeData/images/images/dhakacollege.jpg'
import lalmatia from '../../../fakeData/images/images/lalmatia.jpg'
import eden from '../../../fakeData/images/images/eden.jpg'
import QuestionHome from '../QuestionHome/QuestionHome';






const Details = () => {
    return (
        <div className="mx-5 details">
        {/*Varsity List*/}
        {/* <div className="vsl">
          <h1>University List</h1>
        </div>
        <div className="divon">
          <h2 className="listh">Public University</h2>
          <p>
            <img src={buetLogo} alt="" className="logoim" /><span className="logop">Bangladesh University of Engineering and Technology</span>
          </p>
          <p>
            <img src={krisi} alt="" className="logoim" /><span className="logop">Bangladesh Agricultural University</span>
          </p>
          <p>
            <img src={jnulogo} alt="" className="logoim" /><span className="logop">Jagannath University</span>
          </p>
          <a href="/publicList" target="blank">
            <button className="btn btn-primary me-md-2 " type="button">See More</button>
          </a>
        </div>
        <div className="divont">
          <h2 className="listh">Private University</h2>
          <p>
            <img src={austlogo} alt="" className="logoim" /><span className="logop">Ahsanullah University of Science and Technology</span>
          </p>
          <p>
            <img src={diulogo} alt="" className="logoim" /><span className="logop">Daffodil International University</span>
          </p>
          <p>
            <img src={aiublogo} alt="" className="logoim" /><span className="logop">American International University-Bangladesh</span>
          </p>
          <a href="/publicList" target="blank">
            <button className="btn btn-primary me-md-2 " type="button">See More</button>
          </a>
        </div>
        <div className="divonth">
          <h2 className="listh">National University</h2>
          <p>
            <img src={sarkarilogo} alt="" className="logoim" /><span className="logop">Government Bangla College</span>
          </p>
          <p>
            <img src={titulogo} alt="" className="logoim" /><span className="logop">Government Titumir College</span>
          </p>
          <p>
            <img src={edenlogo} alt="" className="logoim" /><span className="logop">Eden Mohila College</span>
          </p>
          <a href="/nationalList" target="blank">
            <button className="btn btn-primary me-md-2 " type="button">See More</button>
          </a>
        </div> */}
        {/*Home Page*/}
        <div className="card-group"> 
          <div className="card">
            <img src={DU} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://www.du.ac.bd/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title">Dhaka University</h5>
              </a>
              <p className="card-text">The University of Dhaka is a public university located in Dhaka, Bangladesh. It is the oldest university in Bangladesh. On the first day of July 1921, the university opened its doors to students. Today, it is the largest public research university in Bangladesh.</p>
            </div>
          </div>
          <div className="card cdf">
            <img src={sust} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://www.sust.edu/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title ">Shahjalal University of Science and Technology (SUST)</h5>
              </a>
              <p className="card-text ">Shahjalal University of Science and Technology is a public research university based in Sylhet, Bangladesh.The university is known for its pioneering research and education in the physical sciences and engineering.</p>
            </div>
          </div>
          <div className="card">
            <img src={JU} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://www.juniv.edu/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title">Jahangirnagar University</h5>
              </a>
              <p className="card-text">Jahangirnagar University is a public university in Bangladesh, based in Savar, Dhaka. It is the only fully residential university of Bangladesh. It has been ranked 3rd several times in national public university rankings.</p>
              <a href="/publicHomepage" target="blank" style={{textDecoration: 'none'}}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
                  <button className="btn btn-primary me-md-2" type="button">See More</button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card-group"> 
          <div className="card carda">
            <img src={diu} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://daffodilvarsity.edu.bd/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title ">Daffodil International University</h5>
              </a>
              <p className="card-text">The University of Dhaka is a public university located in Dhaka, Bangladesh. It is the oldest university in Bangladesh. On the first day of July 1921, the university opened its doors to students. Today, it is the largest public research university in Bangladesh</p>
            </div>
          </div>
          <div className="card cdfa">
            <img src={nsu} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="http://www.northsouth.edu/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title ">North South University</h5>
              </a>
              <p className="card-text ">North South University  is a private university based in Dhaka, Bangladesh. The mission of North South University is to produce competent graduates in their selected disciplines who will have productive careers or choose to engage in advanced studies.</p>
            </div>
          </div>
          <div className="card carda">
            <img src={uttora} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://uttarauniversity.edu.bd/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title">Uttara University</h5>
              </a>
              <p className="card-text">Uttara University  or UU is a private university at Uttara, in Dhaka, Bangladesh. It is a well-recognized university both nationally and internationally for its motto of "Quality Education at Affordable Tuition".The prime objective of this university is to help grow students professionally as well as personally.</p>
              <a href="/privateHomepage" target="blank" style={{textDecoration: 'none'}}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-primary me-md-2" type="button">See More</button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card-group"> 
          <div className="card">
            <img src={dhakacollege} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://dhakacollege.edu.bd/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title ">Dhaka College</h5>
              </a>
              <p className="card-text">Dhaka College (Bengali: ঢাকা কলেজ also known as DC) is the oldest educational institution of Bangladesh located in Dhaka. It offers higher secondary education (HSC). It has Honours and Masters programs as well which are affiliated to the University of Dhaka</p>
            </div>
          </div>
          <div className="card cdf">
            <img src={lalmatia} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="http://www.lalmatiamohilacollege.edu.bd/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title">Lalmatia Mohila College</h5>
              </a>
              <p className="card-text">Lalmatia Women’s College is a well-known girls’ college in Bangladesh. The college has selected as the best women’s college at the national level and ranked 7th among boys ‘and girls’ colleges. It is also selected as Model College under National University Model College Project. The College achieved champion in the National Debate Competition against Violent Extremism.</p>
            </div>
          </div>
          <div className="card">
            <img src={eden} className="card-img-top ims" alt="..." />
            <div className="card-body">
              <a href="https://www.emc.edu.bd/" target="blank" style={{textDecoration: 'none'}}>
                <h5 className="card-title">Eden Mohila College</h5>
              </a>
              <p className="card-text">Eden Mohila College (known as Eden College), is a women's college in Azimpur, Dhaka, Bangladesh. It was established in 1873 in the Farashganj area of Dhaka. In 1878 the school was named after Ashley Eden, Lieutenant Governor of Bengal.It is affiliated with the University of Dhaka as of 16 February 2017.</p>
              <a href="/nationalHomepage" target="blank" style={{textDecoration: 'none'}}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-primary me-md-2" type="button">See More</button>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*Varsity Ranking*/}
        <div>
          <div className="vsl">
            <h1>University Ranking</h1>
          </div>
          <div className="vsr">
            <p>According to the university list of UGC Bangladesh, there are 46 public universities and 92 private universities in Bangladesh.This ranking of Universities in Bangladesh is based on Web o Matrics. From this list you will be able to find out the particular university ranking, You also get data of university types which may help you to create a new list of private or public university rankings.</p>
          </div>
          <div id="carouselExampleControls" className="carousel slide bg" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row ">
                  <div className="col-md-7 rh">
                    <h1 className="listh">Public University</h1>
                    <ol className="logop ">
                      <li>Bangladesh University of Engineering and Technology</li>
                      <li>University of Dhaka</li>
                      <li>University of Chittagong</li>
                      <li>Rajshahi University</li>
                      <li>Jahangirnagar University</li>
                    </ol>
                    <a href="/publicRanking" target="blank">
                      <button className="btn btn-primary me-md-2 " type="button">See More</button>
                    </a>
                  </div>
                  <div className="col-md-5 rp section">
                    <p>Deciding on a university to go to and a degree to study isn’t always easy. There are so many universities and degree choices, you might feel overwhelmed! Reading in a good public university is most of the student’s dream. Some students don’t have an option. Studying at a private university can be very expensive. Some can’t afford that. So, some students don’t have an option. They must study at a public university so that they can complete their graduation. There is a very limited amount of seat available in public universities. Every year after passing their HSC exam student fight for every single seat. Whoever gets the opportunity, they are treated very special and respected in our society. Three Bangladeshi universities have managed to secure their position in the Times Higher Education World University Rankings 2022, with only Dhaka University among top 1,000 universities of the world. Dhaka University has managed to secure its position in the range of 800-1,000 after years of being out of 1,000 universities while Bangladesh University of Engineering and Technology (BUET) slipped to the 1200+bracket from 1000+ bracket in 2020. DU got 16.3 points out of 100 in teaching (15.3 in previous ranking), 8.4 in research (increasing from 7.7) 61.8 in citations (increasing from 36.6 previously), 42.6 in international outlook (increasing from 42.4) and 35.2 in industry outcome (increasing from 33.9 last year). However, for the first time, Bangladesh Agricultural University (BAU) has managed to find itself in the global ranking with the position of 1,000-1,200, 2nd position among the Bangladeshi universities. The ranking is made based on five indicators such as teaching, research, citations, international outlook and industry income, according to the website of Times Higher Education.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="carouselExampleControls" className="carousel slide bg" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row ">
                  <div className="col-md-7 rh">
                    <h1 className="listh">Private University</h1>
                    <ol className="logop ">
                      <li>North South University (NSU)</li>
                      <li>BRAC University (BRACU)</li>
                      <li>Independent University, Bangladesh (IUB)</li>
                      <li>East West University (EWU)</li>
                      <li>Ahsanullah University of Science and Technology (AUST)</li>
                    </ol>
                    <a href="/privateRanking" target="blank">
                      <button className="btn btn-primary me-md-2 " type="button">See More</button>
                    </a>
                  </div>
                  <div className="col-md-5 rp section">
                    <p>The emergence of private universities was prompted by several factors of which two are most important. (1) The demand for higher education increased much faster than the public university system could cope with; and (2) scarcity of public fund and other resources i.e. the government could not mobilise the required infrastructures, and financial and human resources to match the rapidly increasing demand. With continuous widening of the gap between the supply of and demand for higher education the private entrepreneurs, philanthropists and social leaders found new opportunities to serve the society by establishing private universities. On the other hand, the government realised that without public-private partnership the rapidly increasing demand for higher education could not be met. A private university can be a great value because of the individualized attention students receive. The resources private institutions allow for better aid to students, better degree programs and more opportunities. If you want to get admit yourself in the private university of Bangladesh, then this ranking factor will help you to get admission in right university. At present, most rankings depend on the combination of various indicators like covering research, teaching quality, admission process, employment rate after study and so forth. These indicators are thus weighted and standardized to the final overall score. North South University's Business &amp; Management Studies and Computer Science &amp; Information Systems has been ranked in the QS World University Rankings 2021 by Subject for the second year in a row.  North South University (NSU) has proudly held its undisputed spot as the #1 private university in Bangladesh in the latest QS World University Rankings - Asia 2021. NSU is the first and only private university in Bangladesh to have also entered the QS Graduate Employability Rankings among the World's Top 500 institutions in 2020. Independent University, Bangladesh (IUB) has also made its’ position in the Scimago Rankings 2021.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="carouselExampleControls" className="carousel slide bg" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row ">
                  <div className="col-md-7 rh">
                    <h1 className="listh">National University</h1>
                    <ol className="logop ">
                      <li>Dhaka College, Dhaka</li>
                      <li>Rajshahi College, Rajshahi</li>
                      <li>Eden Mohila College, Dhaka</li>
                      <li>Dhaka Commerce College, Dhaka (Private)</li>
                      <li>Brojomohun College, Barishal</li>
                    </ol>
                    <a href="/nationalRanking" target="blank">
                      <button className="btn btn-primary me-md-2 " type="button">See More</button>
                    </a>
                  </div>
                  <div className="col-md-5 rp section">
                    <p>A national university is mainly a university created or managed by a government, but which may also at the same time operate autonomously without direct control by the state. Some national universities are associated with national cultural or political aspirations. National University of Bangladesh is the most popular university in our country. The university plays a vital role in our higher-level Honours, Degree and Masters course. Every year a large number of students have admitted in this university. On the other hand a large number of student have graduated under this university. National University of Bangladesh spreads their colleges all over the country.  There is a total of 685 affiliated colleges all over Bangladesh. ON FEBRUARY 17, 2017, the government affiliated Dhaka College, Eden Mohila College, Government Shaheed Suhrawardy College, Kabi Nazrul Government College, Begum Badrunnesa Government Mohila College, Mirpur Government Bangla College and Government Titumir College with University of Dhaka.   If you are ready to admit yourself to university, you need to know about the best national universities in Bangladesh. But not all the university’s education system is the same. Getting the top university title among 685 affiliates isn’t so easy. It depends on many factors. The national university has done this difficult work. The authority has researched 31 factors like the result, student attendance rate, principle, and other teachers’ education, digitization, environment, and even teacher attended rate. After knowing about 31 categories, the national university finds out the top universities and has given them the position they deserve.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Admission Time & Date*/}
        <div>
          <div className="vsl">
            <h1>Admission Time &amp; Date</h1>
          </div>
          <div className="card text-center adcolor1">
            <div className="card-body">
              <h5 className="cardad">*Public University Admission Test 2020-2021 time&amp; date schedule*</h5>
              <a href="/publicAdmission" target="blank" className="btn btn-color">See More</a>
            </div>
          </div>
          <br />
          <div className="card text-center adcolor2">
            <div className="card-body">
              <h5 className="cardad">*Private University Admission Test 2020-2021 time &amp; date Schedule*</h5>
              <a href="/privateAdmission"  target="blank" className="btn btn-color">See More</a>
            </div>
          </div>
          <br />
          <div className="card text-center adcolor3 mb-5">
            <div className="card-body">
              <h5 className="cardad">*National University Admission Starts 2020-2021 time &amp; date Schedule*</h5>
              <a href="/nationalAdmission"  target="blank" className="btn btn-color">See More</a>
            </div>
          </div>
        </div>
        <QuestionHome/>
      </div>
      
    );
};

export default Details;