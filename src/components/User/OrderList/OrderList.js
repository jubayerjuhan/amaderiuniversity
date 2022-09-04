import React, { useEffect, useState } from 'react';
// import { useForm} from 'react-hook-form';
import UserHeader from '../UserHeader/UserHeader';
import UserSidebar from '../UserSidebar/UserSidebar';


const OrderList = () => {
    const [item, setItem] = useState([]);





  
    useEffect(() => {
        fetch('http://localhost:4200/allOrder')
            .then(res => res.json())
            .then(data => {
                // if (data) {
                //     localStorage.setItem('student', JSON.stringify(data));

                // }
                const email= sessionStorage.getItem('email')
                const items = data.filter(item => item.finalData.email === email)
                // console.log(items,data)
                setItem(items.reverse());
            })
    }, [])
    return (
        <div>
            <UserHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <UserSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', minminHeight: '100vh'  }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Order List</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="">
                    {
                                    item.reverse().map(fd=><div style={{ width: '450px' ,border: '3px solid brown',backgroundColor: 'lightYellow',marginBottom: '25px',padding: '30px'}}>
                                         <div className="font-weight-bold mb-4">Order No: <span style={{color: 'purple'}}>{fd._id.split("").slice(15, 50)}</span></div>  
                                        {fd.finalData.cart.map(item=><p style={{fontSize: '18px'}}><span className="font-weight-bold text-primary">{item.title}</span> <span className="font-weight-bold text-dark">: {item.quantity}pcs</span></p>)} <br />
                                        <div className="row">
                                        <div className="col-md-6">
                                        <p className="mt-2 font-weight-bold">Status: {
                                            fd.finalData.status === "Pending" ? <span className="text-danger">{fd.finalData.status}</span> : <span className="text-success">{fd.finalData.status}</span>
                                        } </p>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-end">
 
                                        <p className="mt-2 font-weight-bold">Amount: <span className="text-primary">{fd.finalData.amount}$</span></p>
                                        </div>
                                        </div>
                                      
                                        </div>)
                                }
                    </div>

                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default OrderList;