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
const UpdateItem = ({ modalIsOpen, closeModal, item }) => {
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
        //         const finalData ={
        //             question: data.question,
        //             rightAnswer: data.rightAnswer.toLowerCase(),
        //             answer:[data.answer1.toLowerCase(),data.answer2.toLowerCase(),data.answer3.toLowerCase(),data.answer4.toLowerCase()]

        //         }
        //  console.log(finalData);
         fetch(`http://localhost:4200/updateItem/${item._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Book Updated')
                   window.location.reload();
                //    closeModal();
                }
            })


    }

    // console.log(item)
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >


            <h4 className="text-center text-primary"><u>Update Book</u> </h4>

            {/* <div className="font-weight-bold text-center">Appointment No: <span style={{color: 'purple'}}>{item?._id.split("").slice(15, 50)}</span></div> */}
            <br />
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Book Name:</b></label>
                        <textarea defaultValue={item?.title} type="text" ref={register({ required: true })} name="title" placeholder="Enter Title" className="form-control ml-3 col-8" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Price:</b></label>
                        <textarea defaultValue={item?.price} type="number" ref={register({ required: true })} name="price" placeholder="Enter Price" className="form-control ml-3 col-8" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Description:</b></label>
                        <textarea defaultValue={item?.description} type="text" ref={register({ required: true })} name="description" placeholder="Enter Description" className="form-control ml-3 col-8" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Short Description:</b></label>
                        <textarea defaultValue={item?.shortDescription} type="text" ref={register({ required: true })} name="shortDescription" placeholder="Enter Short Description" className="form-control ml-3 col-8" />
                        {errors.name && <span className="text-primary">This field is required</span>}

                    </div>
                </div>
                {/* <div className="d-flex justify-content-center">
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
               
                </div> */}



                <div className="form-group text-center">
                    <button type="submit" className="btn btn-warning mt-4 "><b>Update Book</b></button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateItem;