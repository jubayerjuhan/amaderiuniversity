import React, { useEffect, useState } from 'react';
import '../Ranking.css';
import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Select from "react-select";
const NationalRanking = () => {
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
                let categoryWise = response.filter(data => data.data.category === "National");
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
                    <h1>Top 10 National Universities 2021 Ranking in Bangladesh</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {universities.map((data, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{data.data.universityName}</td>
                            </tr>

                        )}

                        {/* <tr>
                            <th scope="row">02</th>
                            <td>Eden Mohila College, Dhaka</td>
                        </tr>
                        <tr>
                            <th scope="row">03</th>
                            <td>Dhaka College, Dhaka</td>
                        </tr>
                        <tr>
                            <th scope="row">04</th>
                            <td>Dhaka Commerce College, Dhaka (Private)</td>
                        </tr>
                        <tr>
                            <th scope="row">05</th>
                            <td>Brojomohun College, Barishal</td>
                        </tr>
                        <tr>
                            <th scope="row">06</th>
                            <td>Government Azizul Haque College, Bogra</td>
                        </tr>
                        <tr>
                            <th scope="row">07</th>
                            <td>Anondo Mohon College, Mymensingh</td>
                        </tr>
                        <tr>
                            <th scope="row">08</th>
                            <td>Carmichael College Rangpur</td>
                        </tr>
                        <tr>
                            <th scope="row">09</th>
                            <td>Government Saadat College, Tangail</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Lalmatia Mohila College, Dhaka (Private)</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default NationalRanking;