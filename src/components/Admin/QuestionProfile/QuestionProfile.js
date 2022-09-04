import React, {
    useEffect,
    useState
} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useHistory, useParams } from 'react-router';
import UpdateQuestion from '../UpdateQuestion/UpdateQuestion';
const QuestionProfile = () => {
    const { id } = useParams();
    const [question, setQuestion] =useState([])
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
        fetch(`http://localhost:4200/question/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                window.scrollTo(0, 0);
                setQuestion(data);
      
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
        fetch(`http://localhost:4200/deleteQuestion/${id}`, {
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
                        <h2><u>Question</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                            <div style={{border: '1px solid lightGray',boxShadow: '5px 5px 20px gray',padding: '30px'}}>
                                 <p style={{fontSize: '18px' }}><b>Question Name:</b> &nbsp; <span className="text-primary font-weight-bold">{question?.data?.question}</span></p>
                                 <p><b>Answer 1:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[0]}</span></p>  
                                 <p><b>Answer 2:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[1]}</span></p>  
                                 <p><b>Answer 3:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[2]}</span></p>  
                                 <p><b>Answer 4:</b> &nbsp; <span className="text-danger  font-weight-bold text-capitalize">{question?.data?.answer[3]}</span></p> 
                                 <br />

                                  <p><b>Right Answer:</b> &nbsp; <span className="text-success font-weight-bold text-capitalize">{question?.data?.rightAnswer}</span></p>   
                            </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button  onClick={openModal}  className="btn btn-warning mx-2 font-weight-bold" >Update Question</button>
                        <UpdateQuestion modalIsOpen={modalIsOpen} question={question} closeModal={closeModal}></UpdateQuestion>
                        <button onClick={() => { if (window.confirm('Are You Sure?')) { handleDelete(question._id) }; }} className="btn btn-danger mx-2 font-weight-bold" >Delete Question</button>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default QuestionProfile;