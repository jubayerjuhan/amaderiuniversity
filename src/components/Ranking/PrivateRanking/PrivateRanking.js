import React, { useEffect, useState } from 'react';
import '../Ranking.css';
import pic from '../../../fakeData/images/images/ranking/private.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Select from "react-select";
const PrivateRanking = () => {
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
        let categoryWise = response.filter(data => data.data.category === "Private");
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
          <h1>Top 10 Private Universities 2021 Ranking in Bangladesh</h1>
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
              <td>North South University (NUS)</td>
              <td>3091</td>
            </tr>
            <tr>
              <th scope="row">02</th>
              <td>BRAC University (BRACU)</td>
              <td>3039</td>
            </tr>
            <tr>
              <th scope="row">03</th>
              <td>East West University (EWU)</td>
              <td>3549</td>
            </tr>
            <tr>
              <th scope="row">04</th>
              <td>Independent University, Bangladesh (IUB)</td>
              <td>3167</td>
            </tr>
            <tr>
              <th scope="row">05</th>
              <td>Ahsanullah University of Science and Technology (AUST)</td>
              <td>4043</td>
            </tr>
            <tr>
              <th scope="row">06</th>
              <td>American International University (AIUB)</td>
              <td>3790</td>
            </tr>
            <tr>
              <th scope="row">07</th>
              <td>Daffodil International University (DIU)</td>
              <td>3531</td>
            </tr>
            <tr>
              <th scope="row">08</th>
              <td>United International University (UIU)</td>
              <td>4147</td>
            </tr>
            <tr>
              <th scope="row">09</th>
              <td>University Of Liberal Arts Bangladesh (ULAB)</td>
              <td>8647</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>University of Asia Pacific (UAP)</td>
              <td>4612</td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>

  );
};

export default PrivateRanking;