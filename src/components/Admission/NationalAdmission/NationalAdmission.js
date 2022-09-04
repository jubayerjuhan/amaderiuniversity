import React from 'react';
import '../Admission.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const NationalAdmission = () => {
    return (
        <div>
            <Header></Header>
            <div>
  <div className="admissionh">
    <h1> National Universities Admission Time &amp; Date</h1>
  </div>
  <div className="admissionTable">
    <table style={{borderBottom: '5px solid  rgb(124, 32, 32)', width: '1400px'}}>
      <tbody><tr className="first head ">
          <td className="head">University Name</td>
          <td className="head">Admission Circular</td>
          <td className="head">Application Starts</td>
          <td className="head">Application Ends</td>
          <td className="head">Unit</td>
          <td className="head">Admission Date</td>
          <td className="head">Admission Time</td>
        </tr>
        <tr>
          <td rowSpan={4}> Dhaka College<br /><br />Eden Mohila College<br /><br />Govt. Shaheed Suhrawardy College, Dhaka<br /><br />Kabi Nazrul Government College<br /><br />Begum Badrunnessa Government Girls College<br /><br />Government Bangla College<br /><br />Government Titumir College</td>
          <td rowSpan={4}>2020-2021 </td>
          <td rowSpan={4}>10.07.2021</td>
          <td rowSpan={4}>10.09.2021</td>
          <td>Science </td>
          <td>23.10.2021</td>
          <td>11am-12pm</td>
        </tr>
        <tr>
          <td>Commerce</td>
          <td>23.10.2021</td>
          <td>11am-12pm</td>
        </tr>
        <tr>
          <td>Arts and social sciences</td>
          <td>23.10.2021</td>
          <td>11am-12pm</td>
        </tr>
      </tbody></table>
  </div>
</div>


            <Footer></Footer>
        </div>

    );
};

export default NationalAdmission;