import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { useHistory, useParams } from 'react-router';
import { getDatabaseCart } from '../../../utilities/databaseManager';
const TeacherProfile = () => {
    const { id } = useParams();
    const [cart, setCart] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [approve,setApprove] = useState(true);
    let history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:4200/teacher/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                window.scrollTo(0, 0);
                setTeacher(data);
      
            })
    }, [id])
    useEffect(() => {
        fetch(`http://localhost:4200/appointments`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // /${sessionStorage.getItem('email')}
                  const checkUser = data?.filter(user => user?.email === sessionStorage.getItem('email'))
            //    console.log(checkUser)
                  const checkTeacher = checkUser?.filter(teacher => teacher?.teacher?._id === id && teacher?.status === "pending")
                // console.log(checkTeacher)
                if(checkTeacher.length> 0){
                    setApprove(false)
                }

                // setApprove()
                // window.scrollTo(0, 0);
                // setTeacher(data);
      
            })
    }, [id])
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [itemData])
    const handleAppointment = (data) =>{
        // console.log(data);
        const finalData ={
            email: sessionStorage.getItem('email'),
            teacher: data,
            status: 'pending'
        }
        if(approve){
            fetch('http://localhost:4200/addAppointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData)
            })
                .then(response => response.json())
                .then(data => {
                    alert('Appointment Request Sent')
                    history.goBack()
               
                })

                .catch(error => {
                    console.error(error)
                })   
        }
        else{
           alert('You already send a request for this teacher.')
        }

     
       
    }
    return (
        <div>
        <Header cart={cart.length}></Header>
        <div style={{marginTop:'20px',marginBottom:'100px'}} className="container py-5 d-flex justify-content-center">
            <div style={{border: '5px solid lightGray',height:'450px',width:'900px',borderRadius:'30px',textAlign:'center',fontWeight:'bold',fontSize:'30px',padding:'30px'}}>
                <p className="text-primary">Teacher Name: <span className="text-info" style={{}}>{teacher.teacherName}</span></p>
    
                <p className="text-primary">Institute Name: <span className="text-info" style={{}}>{teacher.workingPlace}</span></p>
            
                <p className="text-primary">Designation: <span className="text-info" style={{}}>{teacher.designation}</span></p>
                
                <p className="text-primary">Department: <span className="text-info" style={{}}>{teacher.category}</span></p>
                <p className="text-primary">Subject: <span className="text-info" style={{}}>{teacher.subject}</span></p>
                <button onClick={()=>handleAppointment(teacher)} className="btn btn-dark font-weight-bold">Make an Appointment</button>
            </div>
        {/* <div style={{border:'1px solid white',padding:'50px',width:'50%',borderRadius:'50px',boxShadow:'5px 5px 20px gray'}} className="text-center">
            <p className="font-weight-bold ">You have to answer all the question for test your skills</p>
            <button onClick={() =>window.location.assign('/exam')} className="btn btn-primary font-weight-bold">Proceed</button>
        </div> */}
        </div>
        <Footer></Footer>
    </div>
    );
};

export default TeacherProfile;