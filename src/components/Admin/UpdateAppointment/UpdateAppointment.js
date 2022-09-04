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
const UpdateAppointment = ({ modalIsOpen, closeModal, item }) => {
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
        
        const finalData ={
            email: item.email,
            teacher: item.teacher,
            status: 'approved',
            approvedData:{
                startTime: data.startTime,
                endTime: data.endTime,
                date: data.date,
                link: data.link
            }
        }
        // console.log(finalData)
        // const finalData= {
        //     address: item.finalData.address,
        //     amount: data.amount,
        //     cart: item.finalData.cart, 
        //     email: item.finalData.email,
        //     status: item.finalData.status,
        // }
        // console.log(finalData)
        fetch(`http://localhost:4200/updateAppointment/${item._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Appointment Approved')
                   window.location.reload();
                //    closeModal();
                }
            })

    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="d-flex justify-content-end">



            </div>

            <h4 className="text-center text-primary"><u>Approve Appointment</u> </h4>
           
            <div className="font-weight-bold text-center">Appointment No: <span style={{color: 'purple'}}>{item?._id.split("").slice(15, 50)}</span></div>
            <br />
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Start Time:</b></label>
                        <input type="time" ref={register({ required: true })}  name="startTime" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}
                        {/* <span  className="pt-1  ml-3 font-weight-bold">$</span> */}
                    </div>
               
                </div>
                <div className="d-flex justify-content-center">
            
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>End Time:</b></label>
                        <input type="time" ref={register({ required: true })}  name="endTime" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}
                        {/* <span  className="pt-1  ml-3 font-weight-bold">$</span> */}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
            
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6 ml-5" for=""><b>Enter Date:</b></label>
                        <input type="date" style={{position: "relative",right: "32px"}} ref={register({ required: true })}  name="date" placeholder="Enter Link" className="form-control mr-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}
                        {/* <span  className="pt-1  ml-3 font-weight-bold">$</span> */}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group d-flex ">
                        <label className="pt-1 col-6" for=""><b>Enter Meeting Link:</b></label>
                        <input type="text" ref={register({ required: true })} defaultValue={item?.finalData?.amount} name="link" placeholder="Enter Link" className="form-control ml-3 col-6" />
                        {errors.name && <span className="text-primary">This field is required</span>}
                        {/* <span  className="pt-1  ml-3 font-weight-bold">$</span> */}
                    </div>
                   
                </div>
            
          

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-warning mt-4 "><b>Approve Appointment</b></button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateAppointment;