import React from 'react';
import '../Admission.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PrivateAdmission = () => {
    return (
        <div>
            <Header></Header>
            <div>
  <div className="admissionh">
    <h1> Private Universities Admission Time &amp; Date</h1>
  </div>
  <div className="admissionTable">
    <table style={{width: '1400px'}}>
      <tbody><tr className="first head ">
          <td className="head">University Name</td>
          <td className="head">Admission Circular</td>
          <td className="head">Application Starts</td>
          <td className="head">Application Ends</td>
          <td className="head">Subject</td>
          <td className="head">Admission Date</td>
          <td className="head">Admission Time</td>
        </tr>
        <tr>
          <td rowSpan={4}> United International University</td>
          <td rowSpan={4}>2020-2021 </td>
          <td rowSpan={4}>20.10.2021</td>
          <td rowSpan={4}>22.10.2021</td>
          <td>School of Science &amp; Engineering</td>
          <td>23.10.2021</td>
          <td>11am-12pm</td>
        </tr>
        <tr>
          <td>School of Business &amp; Economics</td>
          <td>23.10.2021</td>
          <td>11am-12pm</td>
        </tr>
        <tr>
          <td>School of Humanities and Social Sciences</td>
          <td>23.10.2021</td>
          <td>11am-12pm</td>
        </tr>
      </tbody></table>
    <table className="first" style={{width: '1400px'}}>
      <tbody><tr>
          <td rowSpan={8}>Ahsanullah University of Science and Technology</td>
          <td rowSpan={8}>2020-2021 </td>
          <td rowSpan={8}>23.08.2021</td>
          <td rowSpan={8}>12.09.2021</td>
          <td>Bachelor of Architecture</td>
          <td>20.09.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Bachelor of Science in Civil Engineering</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Bachelor of Science in Computer Science and Engineering</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Bachelor of Science in Electrical &amp; Electronics Engineering</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Bachelor of Science in Textile Engineering</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>  
        <tr>
          <td>Bachelor of Science in Industrial and Production Engineering</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
        <tr>
          <td>Bachelor of Science in Mechanical Engineering</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
      </tbody></table>
    <table className="first" style={{width: '1400px'}}>
      <tbody><tr>
          <td rowSpan={4}>BRAC University</td>
          <td rowSpan={4}>2020-2021 </td>
          <td rowSpan={4}>07.02.2021</td>
          <td rowSpan={4}>10.02.2021</td>
          <td>EEE, ECE, CSE, APE &amp; Physics</td>
          <td>01.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Biotechnology and Microbiology</td>
          <td>27.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B.Sc in Computer Science and B.Sc in Mathematics</td>
          <td>05.11.2021</td>
          <td>10.45am-12.30pm</td>
        </tr>
      </tbody></table>
    <table className="first" style={{width: '1400px'}}>
      <tbody><tr>
          <td rowSpan={4}>East West University</td>
          <td rowSpan={4}>2020-2021 </td>
          <td rowSpan={4}>17.08.2021</td>
          <td rowSpan={4}>21.08.2021</td>
          <td>Faculty of Science and Engineering</td>
          <td>24.08.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Faculty of Business and Economics</td>
          <td>24.08.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Faculty of Liberal Arts and Social Sciences</td>
          <td>24.08.2021</td>
          <td>10.45am-12.30pm</td>
        </tr>
      </tbody></table>
    <table className="first" style={{borderBottom: '5px solid  rgb(124, 32, 32)', width: '1400px'}}>
      <tbody><tr>
          <td rowSpan={4}>American International University, Bangladesh</td>
          <td rowSpan={4}>2020-2021 </td>
          <td rowSpan={4}>01.09.2021</td>
          <td rowSpan={4}>19.09.2021</td>
          <td>EEE/ Architecture/ B.Science (CSE)</td>
          <td>20.09.2021<br />21.09.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Bachelor of Business Administration (BBA)</td>
          <td>20.09.2021<br />21.09.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>Arts &amp; Social Science (BA in English or MMC/ BSS in Economics/ LLB )</td>
          <td>20.09.2021<br />21.09.2021</td>
          <td>11am-12.30pm</td>
        </tr>
      </tbody></table>
  </div>
</div>



            <Footer></Footer>
        </div>

    );
};

export default PrivateAdmission;