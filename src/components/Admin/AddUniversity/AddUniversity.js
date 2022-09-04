import React, {
    useEffect, useState,
    // useState 
} from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';



const AddUniversity = () => {
    const { register, handleSubmit, errors } = useForm();

    const email = sessionStorage.getItem('email')
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4200/universities`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUniversities(data)

            })
    }, [])
    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
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

    const onSubmit = data => {
        // console.log(data?.worldRanking)

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
            if (rankingValidation.length > 0) {
                alert('Ranking Number already exist')
            }
            else {
                fetch('http://localhost:4200/addUniversity', {
                    method: 'POST',
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




    }
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: "2px solid blue",
            borderRadius: "20px",
            boxShadow: state.isFocused ? null : null,
        }),

    };
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
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', minHeight: '130vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Add a University For Ranking</u></h2>
                    </div>
                    <div className="col-md-12">
                        <div><form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-primary text-center container">
                                <label for=""><b>Enter University Name</b></label>
                                <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} required type="text" ref={register({ required: true })} name="universityName" placeholder="Enter University Name" className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Category</b></label>
                                    <div><select required style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} ref={register({ required: true })} name="category"
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option value="">Select</option>
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                        <option value="National">National</option>

                                    </select></div>
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Ranking</b></label>
                                    <input required style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="ranking" placeholder="Enter Ranking" className="form-control" />
                                </div>
                            </div>
                            {worldRanking && <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter World Ranking</b></label>
                                    <input required={worldRanking} style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: worldRanking })} name="worldRanking" placeholder="Enter World Ranking" className="form-control" />
                                </div>
                            </div>}
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Preferred Subjects</b></label>
                                    <Select
                                        isMulti
                                        styles={customStyles}
                                        required
                                        options={options}
                                        onChange={(e) => {
                                            handleSubject(e);
                                        }}
                                        isSearchable={true}
                                        isClearable={true}
                                    />
                                    
                                </div>
                            </div>
                        

                            <div className="form-group row">
                                
                                <div className="form-group col-md-12 mt-4 pt-1 d-flex justify-content-center">
                                    <button type="submit" style={{ padding: '10px 90px', borderRadius: '40px' }} className="btn btn-primary font-weight-bold">Submit</button>
                                </div>
                            </div>

                        </form></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddUniversity;