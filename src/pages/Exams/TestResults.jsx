import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import client from "../../client.js";
import moment from "moment";
import Header from "../../components/Shared/Header/Header.js";

const TestResults = () => {
  const { user } = useSelector((state) => state.user);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getUserResult();
  }, []);

  const getUserResult = async () => {
    const res = await client.get(`/getResult/${user.id}`);
    setResult(res.data);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <h3 className="mb-4">Mock Test Results</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Mark's Got</th>
              <th>Full Marks</th>
              <th>Group</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res, key) => (
              <>
                <tr>
                  <td>{key + 1}</td>
                  <td>{res.mark}</td>
                  <td>{res.fullMark}</td>
                  <td>{res.section}</td>
                  <td>{moment(res.time).format("MMMM Do YYYY, h:mm:ss a")}</td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TestResults;
