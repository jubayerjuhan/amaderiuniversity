import React from "react";
import "../Admission.css";
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import university from "../../../fakeData/publicUni.json";
import { Table } from "react-bootstrap";
const PublicAdmission = () => {
  return (
    <div>
      <Header></Header>
      <div className="p-4">
        <h3 className="mb-4">Public University Form Collecting Website</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {university.map((res, key) => (
              <>
                <tr>
                  <td>{key + 1}</td>
                  <td>{res.name}</td>
                  <td>{res.website}</td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PublicAdmission;
