import React, { useEffect, useState } from "react";
import "../Ranking.css";
import pic from "../../../fakeData/images/images/ranking/public.jpg";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Select from "react-select";
const PublicRanking = () => {
  const [allUniversities, setAllUniversities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [options] = useState([
    { value: "CSE", label: "CSE" },
    { value: "EEE", label: "EEE" },
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "BBA", label: "BBA" },
    { value: "English", label: "English" },
    { value: "Marketing", label: "Marketing" },
    { value: "Psychology", label: "Psychology" },
    { value: "Accounting", label: "Accounting" },
    { value: "Political Science", label: "Political Science" },
  ]);
  useEffect(() => {
    fetch(`http://localhost:4200/universities`)
      .then((res) => res.json())
      .then((response) => {
        let categoryWise = response.filter(
          (data) => data.data.category === "Public"
        );
        const ranking = categoryWise.sort(function (a, b) {
          return a.data.ranking - b.data.ranking;
        });
        setUniversities(ranking);
        setAllUniversities(ranking);
      });
  }, []);
  const customStylesSelect = {
    control: (provided, state) => ({
      ...provided,
      marginTop: "2px",
      borderRadius: "0px",
      minHeight: "36px",
      height: "30px",
      width: "250px",
      boxShadow: state.isFocused ? null : null,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
      marginTop: "-6px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "-20px -2px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
    }),
  };
  const onChangeOption = (data) => {
    if (data !== null) {
      setSelectedOption({ value: data?.value, label: data?.value });
      // console.log(data?.value)
      const findVarsity = allUniversities?.filter((university) => {
        // console.log(university?.data?.subject)
        let filterVarsity = university?.data?.subject?.includes(data?.value);
        return filterVarsity;
      });
      setUniversities(findVarsity);
    } else {
      setSelectedOption("");
      setUniversities(allUniversities);
    }
  };
  return (
    <div>
      <Header></Header>
      <div
        style={{
          maxWidth: "100vw",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            padding: "10px 30px",
          }}
        >
          <p>
            Source:{" "}
            <a href="https://www.webometrics.info/en/asia/bangladesh%20">
              Webometrics University Ranking
            </a>
          </p>
        </div>
        <table
          className="ranking"
          style={{
            maxWidth: "100vw",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">World Rank</th>
              <th scope="col">University Name</th>
              <th scope="col">Impact Rank</th>
              <th scope="col">Openness Rank</th>
              <th scope="col">Excellence Rank*</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((data, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{data.data.universityName}</td>
                <td>{data.data.worldRanking}</td>
              </tr>
            ))}
            <tr class="odd">
              <td>
                <center>1</center>
              </td>
              <td>
                <center>1468</center>
              </td>
              <td>
                <a href="https://www.du.ac.bd/" target="_blank">
                  University of Dhaka
                </a>
              </td>
              <td>
                <center>3967</center>
              </td>
              <td>
                <center>1084</center>
              </td>
              <td>
                <center>1287</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>2</center>
              </td>
              <td>
                <center>1476</center>
              </td>
              <td>
                <a href="https://www.sust.edu/" target="_blank">
                  Shahjalal University of Science &amp; Technology
                </a>
              </td>
              <td>
                <center>1368</center>
              </td>
              <td>
                <center>1985</center>
              </td>
              <td>
                <center>2147</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>3</center>
              </td>
              <td>
                <center>1483</center>
              </td>
              <td>
                <a href="https://www.buet.ac.bd/" target="_blank">
                  Bangladesh University of Engineering and Technology
                </a>
              </td>
              <td>
                <center>2967</center>
              </td>
              <td>
                <center>1242</center>
              </td>
              <td>
                <center>1556</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>4</center>
              </td>
              <td>
                <center>1593</center>
              </td>
              <td>
                <a href="http://www.ru.ac.bd/" target="_blank">
                  Rajshahi University
                </a>
              </td>
              <td>
                <center>2511</center>
              </td>
              <td>
                <center>1350</center>
              </td>
              <td>
                <center>1920</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>5</center>
              </td>
              <td>
                <center>1749</center>
              </td>
              <td>
                <a href="http://www.northsouth.edu/" target="_blank">
                  North South University Bangladesh
                </a>
              </td>
              <td>
                <center>2397</center>
              </td>
              <td>
                <center>1791</center>
              </td>
              <td>
                <center>2210</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>6</center>
              </td>
              <td>
                <center>2144</center>
              </td>
              <td>
                <a href="https://juniv.edu/" target="_blank">
                  Jahangirnagar University
                </a>
              </td>
              <td>
                <center>7220</center>
              </td>
              <td>
                <center>1624</center>
              </td>
              <td>
                <center>1597</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>7</center>
              </td>
              <td>
                <center>2216</center>
              </td>
              <td>
                <a href="https://www.bracu.ac.bd/" target="_blank">
                  Brac University
                </a>
              </td>
              <td>
                <center>4074</center>
              </td>
              <td>
                <center>2173</center>
              </td>
              <td>
                <center>2454</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>8</center>
              </td>
              <td>
                <center>2318</center>
              </td>
              <td>
                <a href="https://www.bau.edu.bd/" target="_blank">
                  Bangladesh Agricultural University
                </a>
              </td>
              <td>
                <center>6799</center>
              </td>
              <td>
                <center>1127</center>
              </td>
              <td>
                <center>2145</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>9</center>
              </td>
              <td>
                <center>2480</center>
              </td>
              <td>
                <a href="https://cu.ac.bd/" target="_blank">
                  University of Chittagong
                </a>
              </td>
              <td>
                <center>6690</center>
              </td>
              <td>
                <center>1933</center>
              </td>
              <td>
                <center>2228</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>10</center>
              </td>
              <td>
                <center>2480</center>
              </td>
              <td>
                <a href="https://www.daffodilvarsity.edu.bd/" target="_blank">
                  Daffodil International University
                </a>
              </td>
              <td>
                <center>4085</center>
              </td>
              <td>
                <center>3849</center>
              </td>
              <td>
                <center>2559</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>11</center>
              </td>
              <td>
                <center>2768</center>
              </td>
              <td>
                <a href="https://nstu.edu.bd/" target="_blank">
                  Noakhali University of Science &amp; Technology
                </a>
              </td>
              <td>
                <center>4588</center>
              </td>
              <td>
                <center>3014</center>
              </td>
              <td>
                <center>3104</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>12</center>
              </td>
              <td>
                <center>2862</center>
              </td>
              <td>
                <a href="https://ku.ac.bd/" target="_blank">
                  Khulna University
                </a>
              </td>
              <td>
                <center>8718</center>
              </td>
              <td>
                <center>2006</center>
              </td>
              <td>
                <center>2429</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>13</center>
              </td>
              <td>
                <center>2948</center>
              </td>
              <td>
                <a href="https://www.kuet.ac.bd/" target="_blank">
                  Khulna University of Engineering &amp; Technology
                </a>
              </td>
              <td>
                <center>7478</center>
              </td>
              <td>
                <center>2317</center>
              </td>
              <td>
                <center>2762</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>14</center>
              </td>
              <td>
                <center>3088</center>
              </td>
              <td>
                <a href="http://www.iub.edu.bd/" target="_blank">
                  Independent University Bangladesh
                </a>
              </td>
              <td>
                <center>7166</center>
              </td>
              <td>
                <center>2359</center>
              </td>
              <td>
                <center>3089</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>15</center>
              </td>
              <td>
                <center>3094</center>
              </td>
              <td>
                <a href="https://www.ruet.ac.bd/" target="_blank">
                  Rajshahi University of Engineering and Technology
                </a>
              </td>
              <td>
                <center>10733</center>
              </td>
              <td>
                <center>2748</center>
              </td>
              <td>
                <center>2257</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>16</center>
              </td>
              <td>
                <center>3253</center>
              </td>
              <td>
                <a href="https://www.cuet.ac.bd/" target="_blank">
                  Chittagong University of Engineering and Technology
                </a>
              </td>
              <td>
                <center>9787</center>
              </td>
              <td>
                <center>2813</center>
              </td>
              <td>
                <center>2694</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>17</center>
              </td>
              <td>
                <center>3274</center>
              </td>
              <td>
                <a href="https://www.ewubd.edu/" target="_blank">
                  East West University Bangladesh
                </a>
              </td>
              <td>
                <center>7734</center>
              </td>
              <td>
                <center>2329</center>
              </td>
              <td>
                <center>3291</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>18</center>
              </td>
              <td>
                <center>3388</center>
              </td>
              <td>
                <a href="https://www.jnu.ac.bd/" target="_blank">
                  Jagannath University
                </a>
              </td>
              <td>
                <center>9114</center>
              </td>
              <td>
                <center>3025</center>
              </td>
              <td>
                <center>3018</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>19</center>
              </td>
              <td>
                <center>3437</center>
              </td>
              <td>
                <a href="https://mbstu.ac.bd/" target="_blank">
                  Mawlana Bhasani Science &amp; Technology University
                </a>
              </td>
              <td>
                <center>12337</center>
              </td>
              <td>
                <center>3063</center>
              </td>
              <td>
                <center>2448</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>20</center>
              </td>
              <td>
                <center>3461</center>
              </td>
              <td>
                <a href="https://just.edu.bd/" target="_blank">
                  Jessore University of Science &amp; Technology
                </a>
              </td>
              <td>
                <center>11854</center>
              </td>
              <td>
                <center>2498</center>
              </td>
              <td>
                <center>2694</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>21</center>
              </td>
              <td>
                <center>3522</center>
              </td>
              <td>
                <a href="https://www.aust.edu/" target="_blank">
                  (4) Ahsanullah University of Science &amp; Technology
                </a>
              </td>
              <td>
                <center>9305</center>
              </td>
              <td>
                <center>3431</center>
              </td>
              <td>
                <center>3104</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>22</center>
              </td>
              <td>
                <center>3526</center>
              </td>
              <td>
                <a href="https://www.aiub.edu/" target="_blank">
                  American International University Bangladesh
                </a>
              </td>
              <td>
                <center>7192</center>
              </td>
              <td>
                <center>3199</center>
              </td>
              <td>
                <center>3666</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>23</center>
              </td>
              <td>
                <center>3588</center>
              </td>
              <td>
                <a href="https://www.iiuc.ac.bd/" target="_blank">
                  International Islamic University Chittagong
                </a>
              </td>
              <td>
                <center>11321</center>
              </td>
              <td>
                <center>3036</center>
              </td>
              <td>
                <center>2885</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>24</center>
              </td>
              <td>
                <center>3758</center>
              </td>
              <td>
                <a href="https://bsmrau.edu.bd/" target="_blank">
                  Bangabandhu Sheikh Mujibur Rahman Agricultural University
                </a>
              </td>
              <td>
                <center>8167</center>
              </td>
              <td>
                <center>7521</center>
              </td>
              <td>
                <center>2046</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>25</center>
              </td>
              <td>
                <center>3819</center>
              </td>
              <td>
                <a href="https://www.duet.ac.bd/" target="_blank">
                  Dhaka University of Engineering &amp; Technology
                </a>
              </td>
              <td>
                <center>10471</center>
              </td>
              <td>
                <center>3262</center>
              </td>
              <td>
                <center>3399</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>26</center>
              </td>
              <td>
                <center>3851</center>
              </td>
              <td>
                <a href="https://pstu.ac.bd/" target="_blank">
                  Patuakhali Science &amp; Technology University
                </a>
              </td>
              <td>
                <center>12789</center>
              </td>
              <td>
                <center>2982</center>
              </td>
              <td>
                <center>3032</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>27</center>
              </td>
              <td>
                <center>3855</center>
              </td>
              <td>
                <a href="https://www.uap-bd.edu/" target="_blank">
                  University of Asia Pacific Bangladesh
                </a>
              </td>
              <td>
                <center>9457</center>
              </td>
              <td>
                <center>3441</center>
              </td>
              <td>
                <center>3649</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>28</center>
              </td>
              <td>
                <center>3878</center>
              </td>
              <td>
                <a href="http://sau.edu.bd/" target="_blank">
                  Sher-e-Bangla Agricultural University
                </a>
              </td>
              <td>
                <center>12703</center>
              </td>
              <td>
                <center>3299</center>
              </td>
              <td>
                <center>3032</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>29</center>
              </td>
              <td>
                <center>4026</center>
              </td>
              <td>
                <a href="https://bsmmu.edu.bd/" target="_blank">
                  Bangabandhu Sheikh Mujib Medical University
                </a>
              </td>
              <td>
                <center>10079</center>
              </td>
              <td>
                <center>3530</center>
              </td>
              <td>
                <center>3746</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>30</center>
              </td>
              <td>
                <center>4034</center>
              </td>
              <td>
                <a href="https://hstu.ac.bd/" target="_blank">
                  Hajee Mohammad Danesh Science &amp; Technology University
                  Dinajpur
                </a>
              </td>
              <td>
                <center>11273</center>
              </td>
              <td>
                <center>3231</center>
              </td>
              <td>
                <center>3613</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>31</center>
              </td>
              <td>
                <center>4055</center>
              </td>
              <td>
                <a href="http://www.seu.edu.bd/" target="_blank">
                  Southeast University
                </a>
              </td>
              <td>
                <center>12239</center>
              </td>
              <td>
                <center>5125</center>
              </td>
              <td>
                <center>2934</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>32</center>
              </td>
              <td>
                <center>4086</center>
              </td>
              <td>
                <a href="https://sau.ac.bd/" target="_blank">
                  Sylhet Agricultural University (Sher-e-Bangla Agricultural
                  University)
                </a>
              </td>
              <td>
                <center>13560</center>
              </td>
              <td>
                <center>2765</center>
              </td>
              <td>
                <center>3345</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>33</center>
              </td>
              <td>
                <center>4102</center>
              </td>
              <td>
                <a href="https://mist.ac.bd/" target="_blank">
                  Military Institute of Science &amp; Technology
                </a>
              </td>
              <td>
                <center>10889</center>
              </td>
              <td>
                <center>3744</center>
              </td>
              <td>
                <center>3695</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>34</center>
              </td>
              <td>
                <center>4119</center>
              </td>
              <td>
                <a href="https://www.uiu.ac.bd/" target="_blank">
                  United International University
                </a>
              </td>
              <td>
                <center>9174</center>
              </td>
              <td>
                <center>3335</center>
              </td>
              <td>
                <center>4174</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>35</center>
              </td>
              <td>
                <center>4132</center>
              </td>
              <td>
                <a href="http://brur.ac.bd/" target="_blank">
                  Begum Rokeya University Rangpur
                </a>
              </td>
              <td>
                <center>11506</center>
              </td>
              <td>
                <center>4819</center>
              </td>
              <td>
                <center>3324</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>36</center>
              </td>
              <td>
                <center>4143</center>
              </td>
              <td>
                <a href="https://www.iu.ac.bd/" target="_blank">
                  Islamic University Kushtia
                </a>
              </td>
              <td>
                <center>10015</center>
              </td>
              <td>
                <center>3379</center>
              </td>
              <td>
                <center>4037</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>37</center>
              </td>
              <td>
                <center>4505</center>
              </td>
              <td>
                <a href="https://iubat.edu/" target="_blank">
                  International University of Business Agriculture and
                  Technology University of Dhaka
                </a>
              </td>
              <td>
                <center>10710</center>
              </td>
              <td>
                <center>3635</center>
              </td>
              <td>
                <center>4464</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>38</center>
              </td>
              <td>
                <center>4524</center>
              </td>
              <td>
                <a href="https://ulab.edu.bd/" target="_blank">
                  University of Liberal Arts Bangladesh
                </a>
              </td>
              <td>
                <center>9064</center>
              </td>
              <td>
                <center>4431</center>
              </td>
              <td>
                <center>4624</center>
              </td>{" "}
            </tr>
            <tr class="odd">
              <td>
                <center>39</center>
              </td>
              <td>
                <center>4701</center>
              </td>
              <td>
                <a href="https://green.edu.bd/" target="_blank">
                  Green University of Bangladesh
                </a>
              </td>
              <td>
                <center>12324</center>
              </td>
              <td>
                <center>4592</center>
              </td>
              <td>
                <center>4260</center>
              </td>{" "}
            </tr>
            <tr class="even">
              <td>
                <center>40</center>
              </td>
              <td>
                <center>4753</center>
              </td>
              <td>
                <a href="https://www.iutoic-dhaka.edu/" target="_blank">
                  Islamic University of Technology
                </a>
              </td>
              <td>
                <center>10573</center>
              </td>
              <td>
                <center>7521</center>
              </td>
              <td>
                <center>3263</center>
              </td>{" "}
            </tr>
            {/* <tr>
              <th scope="row">01</th>
              <td>Bangladesh University of Engineering and Technology (BUET)</td>
              <td>1794</td>
            </tr>
            <tr>
              <th scope="row">02</th>
              <td>Dhaka University (DU)</td>
              <td>1909</td>
            </tr>
            <tr>
              <th scope="row">03</th>
              <td>Khulna University of Science and Technology (KUET)</td>
              <td>3499</td>
            </tr>
            <tr>
              <th scope="row">04</th>
              <td>Jahangirnagar University (JU)</td>
              <td>3042</td>
            </tr>
            <tr>
              <th scope="row">05</th>
              <td>Chittagong University of Engineering and Technology (CUET)</td>
              <td>3714</td>
            </tr>
            <tr>
              <th scope="row">06</th>
              <td>Rajshahi University (RU)</td>
              <td>2275</td>
            </tr>
            <tr>
              <th scope="row">07</th>
              <td>Shahajalal University of Science and Technology (SUST)</td>
              <td>3011</td>
            </tr>
            <tr>
              <th scope="row">08</th>
              <td>Chittagong University (CU)</td>
              <td>3101</td>
            </tr>
            <tr>
              <th scope="row">09</th>
              <td>Bangladesh Agriculture University (BAU)</td>
              <td>2774</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Khulna University (KU)</td>
              <td>3627</td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PublicRanking;
