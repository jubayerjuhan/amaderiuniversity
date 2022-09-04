import React, { useEffect, useState } from 'react';
import '../Ranking.css';
import pic from '../../../fakeData/images/images/ranking/public.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Select from "react-select";
const PublicRanking = () => {
  const [allUniversities, setAllUniversities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [selectedOption, setSelectedOption] = useState("")
  const [options] = useState([
    { value: 'CSE', label: 'CSE' },
    { value: 'EEE', label: 'EEE' },
    { value: 'Software Engineering', label: 'Software Engineering' },
    { value: 'Pharmacy', label: 'Pharmacy' },
    { value: 'BBA', label: 'BBA' },
    { value: 'English', label: 'English' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Psychology', label: 'Psychology' },
    { value: 'Accounting', label: 'Accounting' },
    { value: 'Political Science', label: 'Political Science' },
  ]);
  useEffect(() => {
    fetch(`http://localhost:4200/universities`)
      .then(res => res.json())
      .then(response => {
        let categoryWise = response.filter(data => data.data.category === "Public");
        const ranking = categoryWise.sort(function (a, b) {
          return a.data.ranking - b.data.ranking
        })
        setUniversities(ranking)
        setAllUniversities(ranking)
      })
  }, [])
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
      setSelectedOption({ value: data?.value, label: data?.value })
      // console.log(data?.value)
      const findVarsity = allUniversities?.filter(university => {
        // console.log(university?.data?.subject)
        let filterVarsity = university?.data?.subject?.includes(data?.value);
        return filterVarsity;
      })
      setUniversities(findVarsity)
    }
    else {
      setSelectedOption("")
      setUniversities(allUniversities)
    }
  }
  return (
    <div>
      <Header></Header>
      <div>
        <div className="rankingheader">
          <h1>Top 10 Public Universities 2021 Ranking in Bangladesh</h1>
          <p>Updated on June 13th, 2021</p>
        </div>
        <div className="rankingimage">
          <img src={pic} alt="" />
        </div>
        <div>
          <div className="mx-5 mt-5">
            <div className="form-inline d-flex justify-content-start">
              <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Filter With Subject</label>
              <div>
                <Select
                  styles={customStylesSelect}
                  options={options}
                  onChange={(e) => {
                    onChangeOption(e);
                  }}
                  value={selectedOption}
                  isSearchable={true}
                  isClearable={true}
                /></div>
            </div>
          </div>
        </div>
        <table className="ranking">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">University Name</th>
              <th scope="col">World Ranking</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((data, index) =>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{data.data.universityName}</td>
                <td>{data.data.worldRanking}</td>
              </tr>

            )}
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