import React, { useEffect, useState } from 'react';
import { useForm} from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
// import './AddQuestion.css'



const AddQuestion = () => {
    const { register, handleSubmit, errors } = useForm();
    const [rightAnswer, setRightAnswer] = useState([{ name: 'answer1', value: 'false' }, { name: 'answer2', value: 'false' }, { name: 'answer3', value: 'false' }, { name: 'answer4', value: 'false' },])
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

    const handleChange = (e) => {
        // console.log(e.target.name,e.target.value)
        const data = [...rightAnswer]
        if (data[e.target.name].value === 'false') {
            data[e.target.name].value = 'true';
        }
        else {
            data[e.target.name].value = 'false';
        }

        setRightAnswer(data)

    }

    const onSubmit = data => {

        const checkData = rightAnswer.filter(ans => ans.value === 'true')
        // console.log(checkData.length)
        if (checkData.length === 0) {
            alert('Please Select A Right Answer')
        }
        else if (checkData.length > 1) {
            alert('Please Select Only One Answer')
        }
        else if (checkData.length === 1) {

            const rightValue = rightAnswer.filter(ans => ans.value === 'true')
            const ans = data[rightValue[0].name]
       
            const finalData ={
                question: data.question,
                rightAnswer: ans.toLowerCase(),
                answer:[data.answer1.toLowerCase(),data.answer2.toLowerCase(),data.answer3.toLowerCase(),data.answer4.toLowerCase()]
                
            }
    //  console.log(finalData);
            fetch('http://localhost:4200/addQuestion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData)
            })
                .then(response => response.json())
                .then(data => {
                    window.alert('Question added successfully');
                    window.location.reload();
                })

                .catch(error => {
                    console.error(error)
                })
        }
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('title', data.title);
        // formData.append('price', data.price);
        // formData.append('description', data.description);
        // formData.append('shortDescription', data.shortDescription);

        //  fetch('http://localhost:4200/addItem', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         window.alert('Item added successfully');
        //         window.location.reload();
        //     })

        //     .catch(error => {
        //         console.error(error)
        //     })


    }
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', minHeight: '100vh'  }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Add a Question</u></h2>
                    </div>
                    <div className="col-md-12">
                        <div><form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-primary text-center">
                                <label for=""><b>Enter Question Name</b></label>
                                <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="question" placeholder="Enter Question Name" className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>

                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 1</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} 
                                    placeholder="Enter Answer" name="answer1" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 1 Value</b></label>
                                    <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="0" onChange={(e) => handleChange(e)}>
                                        <option value="False">Wrong</option>
                                        <option value="True">Right</option>

                                    </select></div>
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 2</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="answer2" placeholder="Enter Answer" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 2 Value</b></label>
                                    <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="1" onChange={(e) => handleChange(e)}>
                                        <option value="False">Wrong</option>
                                        <option value="True">Right</option>

                                    </select></div>
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 3</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="answer3"placeholder="Enter Answer" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 3 Value</b></label>
                                    <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="2" onChange={(e) => handleChange(e)}>
                                        <option value="False">Wrong</option>
                                        <option value="True">Right</option>

                                    </select></div>
                                </div>
                            </div>
                            <div className="form-group row mb-1 d-flex justify-content-center">
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 4</b></label>
                                    <input style={{ borderRadius: '15px', border: '2px solid #0000FF' }} type="text" ref={register({ required: true })} name="answer4" placeholder="Enter Answer" className="form-control" />
                                    {errors.name && <span className="text-primary">This field is required</span>}
                                </div>
                                <div className="form-group col-6 text-primary text-center">
                                    <label for=""><b>Enter Answer 4 Value</b></label>
                                    <div><select style={{ padding: '6px 50px', border: '2px solid blue', borderRadius: '15px' }} name="3" onChange={(e) => handleChange(e)}>
                                        <option value="False">Wrong</option>
                                        <option value="True">Right</option>

                                    </select></div>
                                </div>
                            </div>

                            <div className="form-group row">
                                {/* <div className="form-group col-md-6 text-primary text-center">
                                            <label for=""><b>Enter Short Description</b></label>
                                            <textarea style={{height: "70px", borderRadius: '20px',border: '2px solid #0000FF' }} type="number" ref={register({ required: true })} name="shortDescription" placeholder="Short Description" className="form-control" />
                                            {errors.mobile && <span className="text-primary">This field is required</span>}
                                        </div>
                                     */}
                                {/* <div className="col-6 text-primary">
                                                            <label for=""><b>Upload Image</b></label>

                                                            <input ref={register({ required: true })} onChange={handleFileChange} className="form" name="image" type="file" />
                                                            {errors.file && <span className="text-primary">This field is required</span>}
                                                           
                                                        </div> */}
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

export default AddQuestion;