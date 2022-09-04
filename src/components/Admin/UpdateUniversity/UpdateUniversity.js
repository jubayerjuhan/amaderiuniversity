import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
    }
};
const customStylesInput = {
    control: (provided, state) => ({
        ...provided,
        // border: "2px solid blue",
        // borderRadius: "20px",
        boxShadow: state.isFocused ? null : null,
    }),

};
const UpdateUniversity = ({ modalIsOpen, closeModal, university }) => {
    const { register, handleSubmit, errors } = useForm();
    const [universities, setUniversities] = useState([]);
    const [worldRanking, setWorldRanking] = useState(false)
    const [subject, setSubject] = useState([]);
    const handleSubject = (e) => {
        setSubject(e)
    }
    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        if (e.target.value === "Public") {
            setWorldRanking(true)
        }
        else if (e.target.value === "Private") {
            setWorldRanking(true)
        }
        else {
            setWorldRanking(false)
        }

    }
    useEffect(() => {
        fetch(`http://localhost:4200/universities`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUniversities(data)

            })
    }, [])
    useEffect(() => {
        if (university?.data?.worldRanking) {
            setWorldRanking(true)
        }
    }, [university?.data?.worldRanking])
    useEffect(() => {
        if (university?.data?.subject) {
            let tempArray = [];
            university?.data?.subject.forEach(data => {
                let subject = { value: data, label: data }
                tempArray.push(subject)
            })
            setSubject(tempArray)
            // data.subject = tempArray;
        }
    }, [university?.data?.subject])
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    const onSubmit = data => {
        // console.log(data)

        if (subject.length === 0) {
            alert('insert subject')
        }
        else {

            let tempArray = [];
            subject.forEach(data => {

                tempArray.push(data.value)
            })
            data.subject = tempArray;

            const rankingValidation = universities.filter(university => university.data.category === data.category && university.data.ranking === data.ranking)
            // console.log(data, rankingValidation)
            if (university?.data?.ranking !== data.ranking && rankingValidation.length > 0) {
                alert('Ranking Number already exist')
            }
            else {
                fetch(`http://localhost:4200/updateUniversity/${university._id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(data => {
                        window.alert('University added successfully');
                        window.location.reload();
                        window.scrollTo(0, 0);
                    })

                    .catch(error => {
                        console.error(error)
                    })
            }





        }
        // const finalData = {
        //     university: data.university,
        //     rightAnswer: data.rightAnswer.toLowerCase(),
        //     answer: [data.answer1.toLowerCase(), data.answer2.toLowerCase(), data.answer3.toLowerCase(), data.answer4.toLowerCase()]

        // }
        // console.log(finalData);
        // const validate = finalData.answer.find(ans => ans === finalData.rightAnswer)
        // console.log(validate)
        // if (validate === undefined) {
        //     alert("Please check your Right Answer")
        // }
        // else {
        //     fetch(`http://localhost:4200/updateUniversity/${university._id}`, {
        //         method: 'PATCH',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(finalData)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data) {
        //                 alert('university Updated')
        //                 window.location.reload();
        //                 //    closeModal();
        //             }
        //         })
        // }


    }
    const options = [
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
    ]
    // console.log(university)
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >


            <h4 className="text-center text-primary"><u>Update University Ranking</u> </h4>

            <br />
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>University Name:</b></label>
                        <textarea defaultValue={university?.data?.universityName} type="text" ref={register({ required: true })} name="universityName" placeholder="Enter University Name" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Category:</b></label>
                        <div><select required style={{ padding: '6px 50px', border: '1px solid lightGray', position: 'relative', left: '15px' }} ref={register({ required: true })} name="category"
                            onChange={(e) => handleChange(e)}
                            defaultValue={university?.data?.category}
                        >
                            <option value="">Select</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="National">National</option>

                        </select></div>

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" style={{ position: 'relative', left: '25px' }}><b>Ranking:</b></label>
                        <input defaultValue={university?.data?.ranking} type="text" ref={register({ required: true })} name="ranking" placeholder="Enter Ranking" className="form-control ml-3 col-7" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                {worldRanking && <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>World Ranking:</b></label>
                        <input defaultValue={university?.data?.worldRanking} type="text" ref={register({ required: true })} name="worldRanking" placeholder="Enter World Ranking" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>}
                <div style={{position:'relative',right:'131px'}} className="form-group row mb-1 d-flex justify-content-center">
                    <div className="form-group col-6 text-center d-flex">
                        <label className="pt-1 col-12" for=""><b>Enter Preferred Subjects:</b></label>
                        <Select
                        className="pt-1 col-12"
                            isMulti
                            styles={customStylesInput}
                            required
                            defaultValue={subject}
                            options={options}
                            onChange={(e) => {
                                handleSubject(e);
                            }}
                            isSearchable={true}
                            isClearable={true}
                        />

                    </div>
                </div>
                {/* <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>University Name:</b></label>
                        <textarea defaultValue={university?.data?.university} type="text" ref={register({ required: true })}  name="university" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 1:</b></label>
                        <textarea defaultValue={university?.data?.answer[0]} type="text" ref={register({ required: true })}  name="answer1" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 2:</b></label> 
                        <textarea defaultValue={university?.data?.answer[1]} type="text" ref={register({ required: true })}  name="answer2" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 3:</b></label>
                        <textarea defaultValue={university?.data?.answer[2]} type="text" ref={register({ required: true })}  name="answer3" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 4:</b></label>
                        <textarea defaultValue={university?.data?.answer[3]} type="text" ref={register({ required: true })}  name="answer4" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
         
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Right Answer:</b></label>
                        <textarea defaultValue={university?.data?.rightAnswer} type="text" ref={register({ required: true })}  name="rightAnswer" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div> */}



                <div className="form-group text-center">
                    <button type="submit" className="btn btn-warning mt-4 "><b>Update Information</b></button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateUniversity;