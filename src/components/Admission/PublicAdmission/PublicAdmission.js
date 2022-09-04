import React from 'react';
import '../Admission.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PublicAdmission = () => {
    return (
        <div>
            <Header></Header>
            <div>
  <div className="admissionh">
    <h1> Public Universities Admission Time &amp; Date</h1>
  </div>
  <div className="admissionTable">
    <table>
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
          <td rowSpan={6}>Dhaka University</td>
          <td rowSpan={6}>2020-2021 </td>
          <td rowSpan={6}>08.03.2021</td>
          <td rowSpan={6}>31.03.2021</td>
          <td>A</td>
          <td>01.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B</td>
          <td>02.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>C</td>
          <td>22.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>D</td>
          <td>23.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>E</td>
          <td>09.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>  
      </tbody></table>
    <table className="first" style={{width: '1388px'}}>
      <tbody><tr>
          <td rowSpan={11}>Jahangirnagar University</td>
          <td rowSpan={11}>2020-2021 </td>
          <td rowSpan={11}>20.06.2021</td>
          <td rowSpan={11}>14.08.2021</td>
          <td>A</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>C</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>C1</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>D</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>  
        <tr>
          <td>E</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
        <tr>
          <td>F</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
        <tr>
          <td>G</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
        <tr>
          <td>H</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
        <tr>
          <td>I</td>
          <td>07.11.2021</td>
          <td>11am-12.30pm</td>
        </tr> 
      </tbody></table>
    <table className="first" style={{width: '1388px'}}>
      <tbody><tr>
          <td rowSpan={7}>Chittagong University</td>
          <td rowSpan={7}>2020-2021 </td>
          <td rowSpan={7}>12.04.2021</td>
          <td rowSpan={7}>07.05.2021</td>
          <td>A</td>
          <td>01.11.2021<br />02.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B</td>
          <td>27.10.2021 <br />28.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B1</td>
          <td>05.11.2021</td>
          <td>10.45am-12.30pm</td>
        </tr>
        <tr>
          <td>C</td>
          <td>29.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>D</td>
          <td>30.10.2021<br />31.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>  
        <tr>
          <td>D1</td>
          <td>05.11.2021</td>
          <td>2.15pm-3.30pm</td>
        </tr> 
      </tbody></table>
    <table className="first" style={{width: '1388px'}}>
      <tbody><tr>
          <td rowSpan={4}>Rajshahi University</td>
          <td rowSpan={4}>2020-2021 </td>
          <td rowSpan={4}>23.03.2021</td>
          <td rowSpan={4}>31.03.2021</td>
          <td>A</td>
          <td>5.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B</td>
          <td>06.10.2021</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>C</td>
          <td>04.10.2021</td>
          <td>10.45am-12.30pm</td>
        </tr>
      </tbody></table>
    <table className="first" style={{width: '1388px', borderBottom: '5px solid  rgb(124, 32, 32)'}}>
      <tbody><tr>
          <td rowSpan={3}>Bangladesh University of Engineering and Technology</td>
          <td rowSpan={3}>2020-2021 </td>
          <td rowSpan={3}>15.04.2021</td>
          <td rowSpan={3}>24.04.2021</td>
          <td>A</td>
          <td>6.11.20219</td>
          <td>11am-12.30pm</td>
        </tr>
        <tr>
          <td>B</td>
          <td>06.11.2021</td>
          <td>11am-12.30pm</td>
        </tr>
      </tbody></table>
  </div>
</div>


            <Footer></Footer>
        </div>

    );
};

export default PublicAdmission;