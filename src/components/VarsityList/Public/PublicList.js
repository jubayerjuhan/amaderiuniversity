import React from 'react';
import '../VarsityList.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PublicList = () => {
    return (
        <div>
            <Header></Header>
            <div className="list">
                <div className="publiclist">
                    <h1>Public University List</h1>
                    <p>Bangladesh has 53 public universities to the bulk of higher studies students. These universities are funded by the government while managed as self-governed organizations.
                        Dhaka division is home to thirteen public universities, among which eight are in Dhaka City. There are seven public universities in Chittagong division, six in Rajshahi division five in Khulna division, four in Mymensingh Division. Each of Rangpur division, Sylhet division &amp; Barisal division has two. as of 2020 the University Grants Commission of Bangladesh has introduce the cluster system for students enrollment.</p>
                </div>
                <div>
                    <h2>General Universities</h2>
                </div>
                <table className="tableplist">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Dhaka University</td>
                            <td>DU</td>
                            <td>1921</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Rajshahi University</td>
                            <td>RU</td>
                            <td>1953</td>
                            <td>Rajshahi</td>
                            <td>Rajshahi</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Chittagong University</td>
                            <td>CU</td>
                            <td>1966</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Jahangirnagar University</td>
                            <td>JU</td>
                            <td>1970</td>
                            <td>Savar, Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Islamic University, Bangladesh</td>
                            <td>IU</td>
                            <td>1979</td>
                            <td>Kushtia</td>
                            <td>Khulna</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>Khulna University</td>
                            <td>KU</td>
                            <td>1991</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>07</td>
                            <td>jagannath University</td>
                            <td>JnU</td>
                            <td>2005</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>08</td>
                            <td>Barisal University</td>
                            <td>BU		</td>
                            <td>2011</td>
                            <td>Barisal</td>
                            <td>Barisal</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>09</td>
                            <td>Comilla University</td>
                            <td>CoU</td>
                            <td>2006</td>
                            <td>Comilla</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Rabindra University</td>
                            <td>RUB	</td>
                            <td>2017</td>
                            <td>Sirajganj</td>
                            <td>Rajshahi</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Jatiya Kabi Kazi Nazrul Islam University</td>
                            <td>JKKNIU</td>
                            <td>2006</td>
                            <td>Mymensingh</td>
                            <td>Mymensingh</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Bangladesh University of Professionals</td>
                            <td>BUP	</td>
                            <td>2008</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Begum Rokeya</td>
                            <td>BRU		</td>
                            <td>2008</td>
                            <td>Rangpur</td>
                            <td>Rangpur</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Sheikh Hasina University</td>
                            <td>SHU</td>
                            <td>2018</td>
                            <td>Netrokona</td>
                            <td>Mymensingh</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman University</td>
                            <td>BSMRU			</td>
                            <td>2020</td>
                            <td>Kishoreganj</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table>
                <div className="secondtable">
                    <h2>Science &amp; Technology Universities</h2>
                </div>
                <table className="tableplist ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Sunamganj Science and Technology University</td>
                            <td>SSTU</td>
                            <td>2020</td>
                            <td>Sunamganj</td>
                            <td>Sylhet</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Shahjalal University of Science and Technology University</td>
                            <td>SUST</td>
                            <td>1986</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rangamati Science and Technology University University</td>
                            <td>RMSTU</td>
                            <td>2014</td>
                            <td>Rangamati</td>
                            <td>Chittagong</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Patuakhali Science and Technology University University</td>
                            <td>PSTU</td>
                            <td>2000</td>
                            <td>Patuakhali</td>
                            <td>Barisal</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Pabna University of Science And Technology</td>
                            <td>PUST</td>
                            <td>2008</td>
                            <td>Pabna</td>
                            <td>Rajshahi</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>Noakhali Science and Technology University University</td>
                            <td>NSTU</td>
                            <td>2006</td>
                            <td>Noakhali</td>
                            <td>Chittagong</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>07</td>
                            <td>Mawlana Bhashani Science and Technology University</td>
                            <td>MBSTU</td>
                            <td>1999</td>
                            <td>Tangail</td>
                            <td>Dhaka</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>08</td>
                            <td>Lakshmipur Science and Technology University</td>
                            <td>LSTU</td>
                            <td>2020</td>
                            <td>Lakshmipur</td>
                            <td>Chittagong</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>09</td>
                            <td>Jashore University of Science and Technology University</td>
                            <td>JUST</td>
                            <td>2007</td>
                            <td>Jessore</td>
                            <td>Khulna</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Hajee Mohammad Danesh Science &amp; Technology University</td>
                            <td>HSTU</td>
                            <td>1999</td>
                            <td>Dinajpur</td>
                            <td>Rangpur</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Chandpur Science and Technology University</td>
                            <td>CSTU</td>
                            <td>2020</td>
                            <td>Chandpur</td>
                            <td>Chittagong</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Bogura Science and Technology University</td>
                            <td>BSTU</td>
                            <td>2020</td>
                            <td>Bogura</td>
                            <td>Rajshahi</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University</td>
                            <td>BSFMSTU</td>
                            <td>2017</td>
                            <td>Jamalpur</td>
                            <td>Mymensingh</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman Science and Technology University</td>
                            <td>BSMRSTU</td>
                            <td>2011</td>
                            <td>Gopalganj</td>
                            <td>Dhaka</td>
                            <td>STEM</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table>
                <div className="secondtable">
                    <h2>Specialized Universities</h2>
                </div>
                <table className="tableplist ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University</td>
                            <td>BSMRAAU</td>
                            <td>2019</td>
                            <td>Lalmonirhat</td>
                            <td>Rangpur</td>
                            <td>Aeronautical Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman Digital University</td>
                            <td>BSMRDU</td>
                            <td>2018</td>
                            <td>Kaliakoir</td>
                            <td>Dhaka</td>
                            <td>ICT in education</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Bangladesh University of Textiles University</td>
                            <td>BUTEX</td>
                            <td>2010</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Textile Engineering</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman Maritime University</td>
                            <td>BSMRMU</td>
                            <td>2013</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>Maritime transport</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Chittagong Veterinary and Animal Sciences University</td>
                            <td>CVASU</td>
                            <td>2006</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>Veterinary Science</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table>
                <div className="secondtable">
                    <h2>Agricultural Universities</h2>
                </div>
                <table className="tableplist ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Bangladesh Agricultural University</td>
                            <td>BAU</td>
                            <td>1961</td>
                            <td>Mymensingh</td>
                            <td>Mymensingh</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Bangabandhu Sheikh Mujibur Rahman Agricultural University</td>
                            <td>BSMRAU</td>
                            <td>1998</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Sher-e-Bangla Agricultural  University</td>
                            <td>SAU		</td>
                            <td>2001</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Sylhet Agricultural University</td>
                            <td>SyAU		</td>
                            <td>2006</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Habiganj Agricultural</td>
                            <td>HAU			</td>
                            <td>2020</td>
                            <td>Habiganj</td>
                            <td>Sylhet</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>Khulna Agricultural University</td>
                            <td>KAU	</td>
                            <td>2019</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>Agricultural Science</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table>
                <div className="secondtable">
                    <h2>Engineering Universities</h2>
                </div>
                <table className="tableplist ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Bangladesh University of Engineering and Technology </td>
                            <td>BUET</td>
                            <td>1962</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Engineering</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Khulna University of Engineering &amp; Technology</td>
                            <td>KUET			</td>
                            <td>2003</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>Engineering</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Chittagong University of Engineering &amp; Technology</td>
                            <td>CUET</td>
                            <td>2003</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>Engineering</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Rajshahi University of Engineering &amp; Technology</td>
                            <td>RUET			</td>
                            <td>2003</td>
                            <td>Rajshahi</td>
                            <td>Rajshahi</td>
                            <td>Engineering</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Dhaka University of Engineering &amp; Technology</td>
                            <td>DUET			</td>
                            <td>2003</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>Engineering</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table>
                <div className="secondtable">
                    <h2>Off Campus Universities</h2>
                </div>
                <table className="tableplist lasttable ">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>Bangladesh Open University</td>
                            <td>OUB			</td>
                            <td>1992</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>National University</td>
                            <td>NUB			</td>
                            <td>1992</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Islamic Arabic University</td>
                            <td>IAU			</td>
                            <td>2013</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Islamic</td>
                            <td>Yes</td>
                        </tr>
                    </tbody></table>
            </div>


            <Footer></Footer>
        </div>

    );
};

export default PublicList;