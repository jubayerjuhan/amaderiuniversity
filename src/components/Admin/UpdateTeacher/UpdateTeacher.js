import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';

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
const UpdateTeacher = ({ modalIsOpen, closeModal, teacher }) => {
    const { register, handleSubmit, errors } = useForm();
    const [defaultSubject, setDefaultSubject] = useState(true)
    const [category, setCategory] = useState()
    // const [subject, setSubject] = useState()
    // const [status, setStatus] = useState()
    
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    const onSubmit = data => {
        // data.category = category;
        // data.subject = subject;
        // data.status = status;
        // console.log(data)
        fetch(`http://localhost:4200/updateTeacher/${teacher._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Teacher Updated')
                   window.location.reload();
                //    closeModal();
                }
            })
        //         const finalData ={
        //             question: data.question,
        //             rightAnswer: data.rightAnswer.toLowerCase(),
        //             answer:[data.answer1.toLowerCase(),data.answer2.toLowerCase(),data.answer3.toLowerCase(),data.answer4.toLowerCase()]

        //         }
        //  console.log(finalData);
        //  const validate = finalData.answer.find(ans=> ans === finalData.rightAnswer)
        //  console.log(validate)
        //  if(validate === undefined){
        //      alert("Please check your Right Answer")
        //  }
        //  else{

        //  }
        // const finalData ={
        //     email: item.email,
        //     teacher: item.teacher,
        //     status: 'approved',
        //     approvedData:{
        //         startTime: data.startTime,
        //         endTime: data.endTime,
        //         date: data.date,
        //         link: data.link
        //     }
        // }
        // console.log(finalData)
        // const finalData= {
        //     address: item.finalData.address,
        //     amount: data.amount,
        //     cart: item.finalData.cart, 
        //     email: item.finalData.email,
        //     status: item.finalData.status,
        // }
        // console.log(finalData)
        // fetch(`http://localhost:4200/updateAppointment/${item._id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(finalData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             alert('Appointment Approved')
        //            window.location.reload();
        //         //    closeModal();
        //         }
        //     })

    }
    // const handleStatus = (e) =>{
    //     setStatus(e.target.value);
    // }
    // const handleChange = (e) => {

    //     setSubject(e.target.value);


    // }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
        setDefaultSubject(false)
        // if (e.target.value === "") {
        //     setSubject("")
        // }
        // else if (e.target.value !== category) {
        //     setSubject("")
        // }

    }
    // console.log(question)
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >


            <h4 className="text-center text-primary"><u>Update Teacher</u> </h4>

            {/* <div className="font-weight-bold text-center">Appointment No: <span style={{color: 'purple'}}>{item?._id.split("").slice(15, 50)}</span></div> */}
            <br />
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Teacher Name:</b></label>
                        <textarea defaultValue={teacher?.teacherName} type="text" ref={register({ required: true })} name="teacherName" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Designation:</b></label>
                        <textarea defaultValue={teacher?.designation} type="text" ref={register({ required: true })} name="designation" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Enter Category:</b></label>
                        <div className=" ml-3 col-6"><select style={{ padding: '6px 32px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="category"
                            onChange={(e) => handleChangeCategory(e)}
                            ref={register({ required: true })}
                            defaultValue={teacher?.category}
                        >
                            {/* <option value="">Select</option> */}
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                        </select></div>

                    </div>

                </div>
                {
                    teacher?.subject === "Math" && defaultSubject === true ? <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select defaultValue={teacher?.subject} style={{ padding: '6px 44px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Math">Math</option>
                                <option value="Biology">Biology</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div> : <></>
                }
                {
                    teacher?.subject === "Biology" && defaultSubject === true ? <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select defaultValue={teacher?.subject} style={{ padding: '6px 44px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Math">Math</option>
                                <option value="Biology">Biology</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div> : <></>
                }
                {
                    category === "Science" && <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select style={{ padding: '6px 44px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Math">Math</option>
                                <option value="Biology">Biology</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div>

                }
                {
                    teacher?.subject === "Accounting" && defaultSubject === true ? <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select defaultValue={teacher?.subject} style={{ padding: '6px 30px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Finance">Finance</option>
                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div> : <></>
                }
                {
                    teacher?.subject === "Finance" && defaultSubject === true ? <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select defaultValue={teacher?.subject} style={{ padding: '6px 30px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Finance">Finance</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div> : <></>
                }
                {
                    category === "Commerce" && <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select style={{ padding: '6px 30px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Finance">Finance</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div>

                }
                {
                    teacher?.subject === "Economics" && defaultSubject === true ? <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select defaultValue={teacher?.subject} style={{ padding: '6px 33px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Economics">Economics</option>
                                <option value="Sociology">Sociology</option>
                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div> : <></>
                }
                {
                    teacher?.subject === "Sociology" && defaultSubject === true ? <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select defaultValue={teacher?.subject} style={{ padding: '6px 33px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Economics">Economics</option>
                                <option value="Sociology">Sociology</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div> : <></>
                }
                {
                    category === "Arts" && <div className="d-flex justify-content-center">
                        <div className="form-group d-flex">
                            <label className="pt-1 col-6" for=""><b>Enter Subject:</b></label>
                            <div className=" ml-3 col-6"><select style={{ padding: '6px 33px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                                <option value="">Select</option>
                                <option value="Economics">Economics</option>
                                <option value="Sociology">Sociology</option>

                            </select></div>
                            {errors.name && <span className="text-primary">This field is required</span>}
                        </div>
                    </div>

                }
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Institute:</b></label>
                        <textarea defaultValue={teacher?.workingPlace} type="text" ref={register({ required: true })} name="workingPlace" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Status:</b></label>
                        <div className=" ml-3 col-6"><select style={{ padding: '6px 30px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="status"
                            ref={register({ required: true })}
                            // onChange={(e) => handleStatus(e)}
                            defaultValue={teacher?.status}
                        >
                            {/* <option value="">Select</option> */}
                            <option value="Active">Active</option>
                            <option value="In Active">In Active</option>
                            {/* <option value="Arts">Arts</option> */}
                        </select></div>

                    </div>

                </div>
                {/* {
                    category === "Commerce" && <div className="form-group text-primary text-center">
                        <label for=""><b>Enter Subject</b></label>
                        <div><select style={{ padding: '6px 44px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
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
                        <div><select style={{ padding: '6px 44px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="subject" ref={register({ required: true })}>
                            <option value="">Select</option>
                            <option value="Economics">Economics</option>
                            <option value="Sociology">Sociology</option>

                        </select></div>
                        {errors.name && <span className="text-primary">This field is required</span>}
                    </div>
                } */}

                {/* <div className="form-group text-primary text-center">
                                    <label for=""><b>Enter Category</b></label>
                                    <div><select style={{ padding: '6px 44px', border: '2px solid lightGray',position: 'relative', right: '15px'}} name="category" 
                                    // onChange={(e) => handleChangeCategory(e)}
                                    >
                                        <option value="">Select</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Arts">Arts</option>
                                    </select></div>
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div> */}
                {/* <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 1:</b></label>
                        <textarea defaultValue={question?.data?.answer[0]} type="text" ref={register({ required: true })}  name="answer1" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 2:</b></label> 
                        <textarea defaultValue={question?.data?.answer[1]} type="text" ref={register({ required: true })}  name="answer2" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 3:</b></label>
                        <textarea defaultValue={question?.data?.answer[2]} type="text" ref={register({ required: true })}  name="answer3" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Answer 4:</b></label>
                        <textarea defaultValue={question?.data?.answer[3]} type="text" ref={register({ required: true })}  name="answer4" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
         
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Right Answer:</b></label>
                        <textarea defaultValue={question?.data?.rightAnswer} type="text" ref={register({ required: true })}  name="rightAnswer" placeholder="Enter Link" className="form-control ml-3 col-7 text-capitalize" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div> */}



                <div className="form-group text-center">
                    <button type="submit" className="btn btn-warning mt-4 "><b>Update Teacher</b></button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateTeacher;