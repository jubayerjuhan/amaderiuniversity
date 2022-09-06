import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import client from "../../client.js";
import moment from "moment";
import Header from "../../components/Shared/Header/Header.js";

const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getUserResult();
  }, []);

  const getUserResult = async () => {
    const res = await client.get(`/order-user/${user.id}`);
    setResult(res.data);
  };
  console.log(result);

  return (
    <div>
      <Header />
      <div className="p-4">
        <h3 className="mb-4">Your All Orders</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Book</th>
              <th>Subtotal</th>
              <th>Shipping</th>
              <th>Total</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res, key) => (
              <>
                <tr>
                  <td>{key + 1}</td>
                  <td>{res.user.username}</td>
                  <td>{res.ordredBook.title}</td>
                  <td>৳ {res.subtotal}</td>
                  <td>৳ {res.shipping}</td>
                  <td>৳ {res.total}</td>
                  <td>{res.address}</td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllOrders;
