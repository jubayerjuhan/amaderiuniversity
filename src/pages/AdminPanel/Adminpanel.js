import React, { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import client from "../../client.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import { AiFillDelete } from "react-icons/ai";
import { Button, Form } from "react-bootstrap";

const Adminpanel = () => {
  const components = {
    books: <Books />,
    questions: <Questions />,
    orders: <Orders />,
    add_questions: <AddQuestion />,
    add_books: <AddBooks />,
  };
  const [activeComponent, setActiveComponent] = useState("Books");
  console.log(activeComponent, "active");

  return (
    <div>
      <Sidebar
        setClickedComponent={setActiveComponent}
        component={components[activeComponent.toLowerCase()]}
      />
    </div>
  );
};

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    client.get("/books").then((books) => {
      setBooks(books.data);
    });
    console.log(books);
  }, [client]);

  const handleDelete = async (item) => {
    console.log(item);
    const confirm = window.confirm("Are You Sure");
    if (!confirm) return;

    const res = await client.delete(`/deleteItem/${item._id}`);
    if (res.data) window.alert("Deleted Successfully");
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{book.title}</td>
            <td>{book.price}</td>
            <td onClick={() => handleDelete(book)}>
              <AiFillDelete size={24} color={"red"} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
const Questions = () => {
  const [questions, setquestions] = useState([]);
  useEffect(() => {
    client.get("/questions").then((questions) => {
      setquestions(questions.data);
    });
    console.log(questions);
  }, [client]);

  const handleDelete = async (item) => {
    console.log(item);
    const confirm = window.confirm("Are You Sure");
    if (!confirm) return;

    const res = await client.delete(`/deleteQuestion/${item._id}`);
    if (res.data) window.alert("Deleted Successfully");
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Section</th>
          <th>Correct Ans</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{question.data.question}</td>
            <td>{question.data.section}</td>
            <td>{question.data.correctAns}</td>
            <td onClick={() => handleDelete(question)}>
              <AiFillDelete size={24} color={"red"} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
const Orders = () => {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    client.get("/allOrder").then((orders) => {
      setorders(orders.data);
    });
    console.log(orders, "orders");
  }, [client]);

  const handleDelete = async (item) => {
    console.log(item);
    const confirm = window.confirm("Are You Sure");
    if (!confirm) return;

    const res = await client.delete(`/order/${item._id}`);
    if (res.data) window.alert("Deleted Successfully");
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Order Item</th>
          <th>Subtotal</th>
          <th>Total</th>
          <th>Shipping</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{order.ordredBook?.title}</td>
            <td>{order?.subtotal}</td>
            <td>{order?.total}</td>
            <td>{order?.shipping}</td>
            <td>{order?.address}</td>
            <td onClick={() => handleDelete(order)}>
              <AiFillDelete size={24} color={"red"} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const AddBooks = () => {
  const fields = ["File", "Title", "Price", "Description", "ShortDesctiption"];
  const [fieldValues, setFieldValues] = useState({});

  // handle submit
  const handleSubmit = async () => {
    if (!fieldValues.file) return alert("Please Add Image");
    const formdata = new FormData();
    formdata.append("file", fieldValues.file);
    formdata.append("title", fieldValues.title);
    formdata.append("price", fieldValues.price);
    formdata.append("description", fieldValues.description);
    formdata.append("shortDescription", fieldValues.shortdesctiption);

    for (var pair of formdata.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    const res = await client.post("/addbooks", formdata);
    if (res.data === true) {
      window.alert("Book Added Successfully");
      setFieldValues({});
    }
  };

  return (
    <>
      <div>
        <p className="mb-3">Add Books</p>
        <div>
          <Form.Group className="mb-3" onSubmit={() => console.log("first")}>
            {fields.map((field, key) => {
              if (field === "File")
                return (
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="file"
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          file: e.target.files[0],
                        })
                      }
                    />
                  </Form.Group>
                );
              else
                return (
                  <>
                    <Form.Label>{field}</Form.Label>
                    <Form.Control
                      placeholder={field}
                      value={fieldValues[field.toLowerCase()]}
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          [field.toLowerCase()]: e.target.value,
                        })
                      }
                      name={field.toLowerCase()}
                      className="mb-4"
                    />
                  </>
                );
            })}
            <Button onClick={handleSubmit} style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Group>
        </div>
      </div>
    </>
  );
};
const AddQuestion = () => {
  const fields = ["Question", "CorrectAns", "Section"];
  const [fieldValues, setFieldValues] = useState({});
  const options = ["A", "B", "C", "D"];

  // handle submit
  const handleSubmit = async () => {
    const questionReq = {
      options: [],
    };
    questionReq.question = fieldValues.question;
    questionReq.correctAns = fieldValues.correctans;
    questionReq.section = fieldValues.section;
    options.forEach((opt) => {
      questionReq.options.push({
        name: fieldValues[opt],
        serial: opt,
      });
    });
    console.log(questionReq, "qr");

    const res = await client.post("/addquestion", questionReq);
    if (res.data === true) {
      window.alert("Question Added Successfully");
      setFieldValues({});
    }
  };

  console.log(fieldValues);

  return (
    <>
      <div>
        <p className="mb-3">Add Books</p>
        <div>
          <Form.Group className="mb-3" onSubmit={() => console.log("first")}>
            {fields.map((field, key) => {
              if (field === "Section")
                return (
                  <>
                    <p>Select Group</p>
                    <select
                      style={{
                        width: "100%",
                        height: "50px",
                        marginBottom: "20px",
                      }}
                      name=""
                      id=""
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          section: e.target.value,
                        })
                      }
                    >
                      <option value={null}>Select One</option>
                      <option value="science">Science</option>
                      <option value="arts">Arts</option>
                      <option value="commerce">Commerce</option>
                    </select>
                  </>
                );
              else
                return (
                  <>
                    <Form.Label>{field}</Form.Label>
                    <Form.Control
                      placeholder={field}
                      value={fieldValues[field.toLowerCase()]}
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          [field.toLowerCase()]: e.target.value,
                        })
                      }
                      name={field.toLowerCase()}
                      className="mb-4"
                    />
                  </>
                );
            })}
            {options.map((opt, key) => {
              return (
                <>
                  <Form.Label>{opt}</Form.Label>
                  <Form.Control
                    placeholder={opt}
                    // value={fieldValues[field.toLowerCase()]}
                    onChange={(e) =>
                      setFieldValues({
                        ...fieldValues,
                        [opt]: e.target.value,
                      })
                    }
                    name={opt}
                    className="mb-4"
                  />
                </>
              );
            })}
            <Button onClick={handleSubmit} style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default Adminpanel;
