import {    
    //  faCookieBite, 
    faThList, faCheckCircle,faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <div className="sidebar d-flex  justify-content-center  py-5 px-4" style={{ height: "100vh" }}>

        <ul className="list-unstyled py-3">
       
            <li>
                <Link to="/user/appointmentStatus" className="">
                    <span style={{color: 'blue', fontWeight: 'bold',fontSize:'14px' }}> <FontAwesomeIcon icon={faUserFriends} /> Appointment Status</span>
                </Link>
            </li>
            <br />
   
            <li>
                <Link to="/user/orderList" className="">
                    <span style={{ color: 'blue', fontWeight: 'bold',fontSize:'14px' }}> <FontAwesomeIcon icon={faThList} /> Order Status</span>
                </Link>
            </li>
            <br />
            <li>
                <Link to="/user/opinion" className="">
                    <span style={{ color: 'blue', fontWeight: 'bold',fontSize:'14px'}}><FontAwesomeIcon icon={faCheckCircle} /> Add an Opinion</span>
                </Link>
            </li>
            <br />
            {/* <li>
                <Link to="/admin/addItem" className="">
                    <span style={{ color: 'blue', fontWeight: 'bold' }}><FontAwesomeIcon icon={faPlus} /> Add Book</span>
                </Link>
            </li>
            <br />
            <li>
                <Link to="/admin/addQuestion" className="">
                    <span style={{ color: 'blue', fontWeight: 'bold' }}><FontAwesomeIcon icon={faPlus} /> Add Question</span>
                </Link>
            </li>
            <br />
            <li>
                <Link to="/admin/itemList" className="">
                    <span style={{ color: 'blue', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faThList} /> Book List</span>
                </Link>
            </li>
            <br /> */}


        </ul>

    </div>
    );
};

export default UserSidebar;