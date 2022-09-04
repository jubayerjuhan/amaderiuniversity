import React, {
    useEffect,
    useState
} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useHistory, useParams } from 'react-router';
// import UpdateQuestion from '../UpdateQuestion/UpdateQuestion';
import UpdateTeacher from '../UpdateTeacher/UpdateTeacher';
const AdminTeacherProfile = () => {
    const { id } = useParams();
    const [teacher, setTeacher] =useState([])
    const email = sessionStorage.getItem('email')
    let history = useHistory();
    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    useEffect(() => {
        fetch(`http://localhost:4200/teacher/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                window.scrollTo(0, 0);
                setTeacher(data);
      
            })
    }, [id])
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(data) {

        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:4200/deleteTeacher/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                
                alert('Deleted')
                if (result) {
                    history.goBack()
                }

            })
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
                        <h2><u>Teacher</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                            <div style={{border: '1px solid lightGray',boxShadow: '5px 5px 20px gray',padding: '30px'}}>
                                 <p style={{fontSize: '18px' }}><b>Teacher Name:</b> &nbsp; <span className="text-primary font-weight-bold">{teacher?.teacherName}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Designation:</b> &nbsp; <span className="text-primary font-weight-bold">{teacher?.designation}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Category:</b> &nbsp; <span className="text-primary font-weight-bold">{teacher?.category  }</span></p>
                                 <p style={{fontSize: '18px' }}><b>Subject:</b> &nbsp; <span className="text-primary font-weight-bold">{teacher?.subject  }</span></p>
                                 <p style={{fontSize: '18px' }}><b>Institute:</b> &nbsp; <span className="text-primary font-weight-bold">{teacher?.workingPlace  }</span></p>
                                 <p style={{fontSize: '18px' }}><b>Status:</b> &nbsp;{teacher?.status==="Active" ?<span className="text-success font-weight-bold">{teacher?.status  }</span>:<span className="text-danger font-weight-bold">{teacher?.status  }</span>}</p>
                                 {/* <p><b>Answer 1:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[0]}</span></p>  
                                 <p><b>Answer 2:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[1]}</span></p>  
                                 <p><b>Answer 3:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[2]}</span></p>  
                                 <p><b>Answer 4:</b> &nbsp; <span className="text-danger  font-weight-bold text-capitalize">{question?.data?.answer[3]}</span></p> 
                                 <br /> */}
    {/* 
                                    <p><b>Right Answer:</b> &nbsp; <span className="text-success font-weight-bold text-capitalize">{question?.data?.rightAnswer}</span></p>    */}
                            </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button  onClick={openModal}  className="btn btn-warning mx-2 font-weight-bold" >Update Teacher</button>
                        <UpdateTeacher modalIsOpen={modalIsOpen} teacher={teacher} closeModal={closeModal}></UpdateTeacher>
                        <button onClick={() => { if (window.confirm('Are You Sure?')) { handleDelete(teacher._id) }; }} className="btn btn-danger mx-2 font-weight-bold" >Delete Teacher</button>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default AdminTeacherProfile;