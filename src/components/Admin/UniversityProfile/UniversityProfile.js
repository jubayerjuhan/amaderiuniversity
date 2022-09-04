import React, {
    useEffect,
    useState
} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useHistory, useParams } from 'react-router';
import UpdateUniversity from '../UpdateUniversity/UpdateUniversity';
// import Updateuniversity from '../Updateuniversity/Updateuniversity';
const UniversityProfile = () => {
    const { id } = useParams();
    const [university, setUniversity] =useState([])
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
        fetch(`http://localhost:4200/university/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                window.scrollTo(0, 0);
                setUniversity(data);
      
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
        fetch(`http://localhost:4200/deleteUniversity/${id}`, {
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
                <div style={{ backgroundColor: '#d6ffff', height: '140vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>University Ranking</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                            <div style={{border: '1px solid lightGray',boxShadow: '5px 5px 20px gray',padding: '30px'}}>
                                 <p style={{fontSize: '18px' }}><b>University Name:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.universityName}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Category:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.category}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Ranking:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.ranking}</span></p>
                                 {university?.data?.worldRanking && <p style={{fontSize: '18px' }}><b>World Ranking:</b> &nbsp; <span className="text-primary font-weight-bold">{university?.data?.worldRanking}</span></p>}
                                 
                                 <p style={{fontSize: '18px',color: 'orange',textDecoration: 'underline'}}><b>Preferred Subject</b></p>
                                 {university?.data?.subject.map(subject => <div style={{position: 'relative', left: '-38px'}}>
                                    <ul className="text-danger font-weight-bold">
                                         <li># {subject}</li>
                                     </ul>
                                 </div>
                                 
                                 )}
                            </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button  onClick={openModal}  className="btn btn-warning mx-2 font-weight-bold" >Update Information</button>
                        <UpdateUniversity modalIsOpen={modalIsOpen} university={university} closeModal={closeModal}></UpdateUniversity>
                        <button onClick={() => { if (window.confirm('Are You Sure?')) { handleDelete(university._id) }; }} className="btn btn-danger mx-2 font-weight-bold" >Delete University</button>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default UniversityProfile;