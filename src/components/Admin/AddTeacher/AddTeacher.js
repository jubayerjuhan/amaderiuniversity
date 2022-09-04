import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddTeacher = () => {
    const { register, handleSubmit, errors } = useForm();
    const [category, setCategory] = useState()
    const [subject, setSubject] = useState()
    // const [loading, setLoading] = useState(false);
    // const [dept, setDept] = useState([]);
    // document.title = "Enroll A Student";
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
        if (e.target.value === "") {
            setSubject("")
        }
        else if (e.target.value !== category) {
            setSubject("")
        }

    }
    const handleChange = (e) => {

        setSubject(e.target.value);
        // if(e.target.name === "subject" ){



        // }

        // const data = [...rightAnswer]
        // if (data[e.target.name].value === 'false') {
        //     data[e.target.name].value = 'true';
        // }
        // else {
        //     data[e.target.name].value = 'false';
        // }

        // setRightAnswer(data)

    }
    // console.log(category, subject)
    const onSubmit = data => {
        data.category = category;
        data.subject = subject;
        data.status = 'Active';

        if (data.category === '') {
            alert('Please enter a category')
        }
        else if (data.subject === '') {
            alert('Please enter a subject')
        }
        else {
            fetch('http://localhost:4200/addTeacher', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    window.alert('Teacher added successfully');
                    window.location.reload();
                })

                .catch(error => {
                    console.error(error)
                })
        }

    }
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', height: '120vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Add a Teacher for Appointment</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-9">
                            <div><form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group text-primary text-center">
                                    <label for=""><b>Enter Teacher Name</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="teacherName" placeholder="Enter Teacher Name" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                <div className="form-group text-primary text-center">
                                    <label for=""><b>Enter Designation</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="designation" placeholder="Enter Designation" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                <div className="form-group text-primary text-center">
                                    <label for=""><b>Enter Working Place</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="workingPlace" placeholder="Enter Working Place" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>


                                <div className="form-group text-primary text-center">
                                    <label for=""><b>Enter Category</b></label>
                                    <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="category" onChange={(e) => handleChangeCategory(e)}>
                                        <option value="">Select</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Arts">Arts</option>
                                    </select></div>
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                {
                                    category === "Science" && <div className="form-group text-primary text-center">
                                        <label for=""><b>Enter Subject</b></label>
                                        <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="subject" onChange={(e) => handleChange(e)}>
                                            <option value="">Select</option>
                                            <option value="Math">Math</option>
                                            <option value="Biology">Biology</option>

                                        </select></div>
                                        {errors.name && <span className="text-primary">This field is required</span>}
                                    </div>

                                }

                                {
                                    category === "Commerce" && <div className="form-group text-primary text-center">
                                        <label for=""><b>Enter Subject</b></label>
                                        <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="subject" onChange={(e) => handleChange(e)}>
                                            <option value="">Select</option>
                                            <option value="Accounting">Accounting</option>
                                            <option value="Finance">Finance</option>

                                        </select></div>
                                        {errors.name && <span className="text-primary">This field is required</span>}
                                    </div>
                                }
                                {
                                    category === "Arts" && <div className="form-group text-primary text-center">
                                        <label for=""><b>Enter Subject</b></label>
                                        <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="subject" onChange={(e) => handleChange(e)}>
                                            <option value="">Select</option>
                                            <option value="Economics">Economics</option>
                                            <option value="Sociology">Sociology</option>

                                        </select></div>
                                        {errors.name && <span className="text-primary">This field is required</span>}
                                    </div>
                                }


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

        </div>
    );
};

export default AddTeacher;