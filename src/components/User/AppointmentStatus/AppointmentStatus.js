import React, { useEffect, useState } from 'react';
// import { useForm} from 'react-hook-form';
import UserHeader from '../UserHeader/UserHeader';
import UserSidebar from '../UserSidebar/UserSidebar';


const AppointmentStatus = () => {
    const [product, setProduct] = useState([]);




    useEffect(() => {
        fetch(`http://localhost:4200/appointments`)
            .then(res => res.json())
            .then(data => {

                const items = data.filter(item => item.email === sessionStorage.getItem('email'))
                // console.log(items);
                setProduct(items.reverse());
              

            })
    }, [])
   
    const formatAMPM = (date) => {
        // console.log(date.split(':')[0])
        let hours = date.split(':')[0];
        let minutes = date.split(':')[1];    
        const ampm = hours >= 12 ? 'pm' : 'am';
      
        hours %= 12;
        hours = hours || 12;    
        minutes = minutes < 10 ? `${minutes}` : minutes;
      
        const strTime = `${hours}:${minutes} ${ampm}`;
      
        return strTime;
      };
      const formatDate = (date) => {
        let day = date?.split('-')[2];
        let month = date?.split('-')[1];   
        let year = date?.split('-')[0];     
      
        const updateDate = `${day}/${month}/${year}`;
      
        return updateDate;
      };
    return (
        <div>
            <UserHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <UserSidebar />
                </div>
                {
                    product.length === 0 ? <div style={{ backgroundColor: '#d6ffff', height: '800px' }} className="col-md-10 pt-4 d-flex justify-content-center"><h2 className="text-primary">Loading...</h2></div> : <div style={{ backgroundColor: '#d6ffff', height: '100%', minHeight: '800px' }} className="col-md-10 pt-4 d-flex justify-content-center">
                        <div className="">
                            <div className="text-center pb-3 text-primary">
                                <h2><u>Appointment Status</u></h2>
                            </div>
                            <div>{
                                product.map(fd => <div style={{ width: '700px', height: '100%', border: '1px solid lightYellow', borderRadius: '30px', backgroundColor: 'lightYellow', marginBottom: '25px', padding: '30px' }}>

                                    <div className="font-weight-bold">Appointment No: <span style={{ color: 'purple' }}>{fd._id.split("").slice(15, 50)}</span></div>
                                    <br />


                                    <p style={{ fontSize: '18px' }}><span className="font-weight-bold">Status:  </span>{fd.status === "pending" ? <span className="font-weight-bold text-danger">Pending</span> :<span className="font-weight-bold text-success">Approved</span>} </p>
                                    <br />
                                    {
                                           fd.status === "approved" &&  <div style={{marginTop:'-30px'}}>
                                           <p style={{ fontSize: '18px' }} className="font-weight-bold text-dark">Time: <span className="text-primary">{formatAMPM(fd.approvedData?.startTime)} - {formatAMPM(fd.approvedData?.endTime)}</span></p>
                                           <p style={{ fontSize: '18px' }} className="font-weight-bold text-dark">Date: <span className="text-danger">{formatDate(fd.approvedData?.date)}</span></p>
                                           <p style={{ fontSize: '18px' }} className="font-weight-bold text-dark">Link: <a href={fd.approvedData?.link} target="_blank" rel = "noopener noreferrer" className="text-success">{fd.approvedData?.link}</a></p>
                                               {/* <p className="mt-2 font-weight-bold">Amount: <span className="text-primary">{fd.finalData.amount}$</span></p>&nbsp;&nbsp;  */}
                                               {/* <button onClick={() => openModal(fd)} style={{ padding: '10px 10px' }} className="btn btn-warning font-weight-bold">Approve Appointment</button>
                                               <UpdateAppointment modalIsOpen={modalIsOpen} item={item} closeModal={closeModal}></UpdateAppointment> */}
                                           </div>
                                       }
                                    <br/>
                                    <div style={{ border: '2px solid blue', padding: '15px' }}>
                                        {/* <p className="font-weight-bold ">Address: <span className="text-primary">Flat No {fd.finalData.address.flatNo}, House No {fd.finalData.address.houseNo}, {fd.finalData.address.area}</span></p> */}
                                        <p className="font-weight-bold">Teacher Name: <span className="text-primary">{fd?.teacher?.teacherName}</span></p>
                                        <p className="font-weight-bold text-dark">Institute: <span className="text-primary">{fd.teacher?.workingPlace}</span></p>
                                        <p className="font-weight-bold text-dark">Designation: <span className="text-primary">{fd.teacher?.designation}</span></p>
                                        <p className="font-weight-bold text-dark">Department: <span className="text-primary">{fd.teacher?.category}</span></p>
                                        <p className="font-weight-bold text-dark">Subject: <span className="text-primary">{fd.teacher?.subject}</span></p>
                                    </div>
                                    <br />
                                    <div className="row">
                                        {/* <div className="d-flex col-md-6">
                                            <div className="">
                                                <p className="mt-2 font-weight-bold">Status: <span className="text-primary">{fd.finalData.status}</span> </p></div>
                                            <div style={{ position: 'relative', left: '10px', top: '7px' }} >
                                                <label class="switch">
                                                    <input onClick={()=>openModal(fd)}  type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div> */}
                              
                                    </div>

                                </div>)
                            }</div>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default AppointmentStatus;