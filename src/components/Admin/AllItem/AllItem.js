import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
const AllItem = () => {
    return (
        <div>
        <AdminHeader />
        <div className="row">
        <div className="col-md-2">
               <AdminSidebar />
           </div>
           <div style={{ backgroundColor: '#d6ffff', minHeight: '100vh'  }} className="col-md-10 pt-4">
               <div className="col-md-12">
                   <div>All Book</div>
               </div>
           </div>
        </div>
       
   </div>
    );
};

export default AllItem;