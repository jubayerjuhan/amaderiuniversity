import React, {
    useEffect,
    useState
} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useHistory, useParams } from 'react-router';
// import UpdateQuestion from '../UpdateQuestion/UpdateQuestion';
// import UpdateTeacher from '../UpdateTeacher/UpdateTeacher';
import UpdateItem from '../UpdateItem/UpdateItem';
const ItemProfile = () => {
    const { id } = useParams();
    const [item, setItem] =useState([])
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
        fetch(`http://localhost:4200/item/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                window.scrollTo(0, 0);
                setItem(data);
      
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
        fetch(`http://localhost:4200/deleteItem/${id}`, {
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
                        <h2><u>Book</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                            <div style={{border: '1px solid lightGray',boxShadow: '5px 5px 20px gray',padding: '30px'}}>
                                <div className="d-flex justify-content-center">
                                    <img className="w-50 mb-4" src={`http://localhost:4200/${item.image}`} alt="" />
                                </div>
                                 <p style={{fontSize: '18px' }}><b>Book Name:</b> &nbsp; <span className="text-primary font-weight-bold">{item?.title}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Price:</b> &nbsp; <span className="text-primary font-weight-bold">{item?.price}$</span></p>
                                 <p style={{fontSize: '18px' }}><b>Short Description:</b> &nbsp; <span className="text-primary font-weight-bold">{item?.shortDescription}</span></p>
                                 <p style={{fontSize: '18px' }}><b>Description:</b> &nbsp; <span className="text-primary font-weight-bold">{item?.description}</span></p>
                            </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button  onClick={openModal}  className="btn btn-warning mx-2 font-weight-bold" >Update Book</button>
                        <UpdateItem modalIsOpen={modalIsOpen} item={item} closeModal={closeModal}></UpdateItem>
                        <button onClick={() => { if (window.confirm('Are You Sure?')) { handleDelete(item._id) }; }} className="btn btn-danger mx-2 font-weight-bold" >Delete Book</button>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default ItemProfile;