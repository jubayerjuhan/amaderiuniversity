import { useForm } from "react-hook-form";
import React, { useEffect } from 'react';

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
const UpdateQuestion = ({ modalIsOpen, closeModal, question }) => {
    const { register, handleSubmit, errors } = useForm();


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
        const finalData ={
            question: data.question,
            rightAnswer: data.rightAnswer.toLowerCase(),
            answer:[data.answer1.toLowerCase(),data.answer2.toLowerCase(),data.answer3.toLowerCase(),data.answer4.toLowerCase()]
            
        }
//  console.log(finalData);
 const validate = finalData.answer.find(ans=> ans === finalData.rightAnswer)
//  console.log(validate)
 if(validate === undefined){
     alert("Please check your Right Answer")
 }
 else{
          fetch(`http://localhost:4200/updateQuestion/${question._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Question Updated')
                   window.location.reload();
                //    closeModal();
                }
            })
 }
        

    }

    // console.log(question)
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
         

            <h4 className="text-center text-primary"><u>Update Question</u> </h4>
           
            <br />
            <form  className="p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Question Name:</b></label>
                        <textarea defaultValue={question?.data?.question} type="text" ref={register({ required: true })}  name="question" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
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
               
                </div>
            
          

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-warning mt-4 "><b>Update Question</b></button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateQuestion;