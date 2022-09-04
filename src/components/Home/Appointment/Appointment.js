import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Select from "react-select";
const Appointment = () => {
    const [cart, setCart] = useState([]);
    const [allTeachers, setAllTeachers] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [departments] = useState([
        { value: 'Science', label: 'Science' },
        { value: 'Commerce', label: 'Commerce' },
        { value: 'Arts', label: 'Arts' },
    ]);
    const [selectedDepartment, setSelectedDepartment] = useState("")
    const [selectedSubject, setSelectedSubject] = useState("")
    const [subjects,setSubjects] = useState([
        { value: 'Math', label: 'Math' },
        { value: 'Biology', label: 'Biology' },
        { value: 'Accounting', label: 'Accounting' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Economics', label: 'Economics' },
        { value: 'Sociology', label: 'Sociology' },
    ]);
    const [query, setQuery] = useState("");
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [itemData])
    const columns = [
        {
            name: 'Teacher Name',
            selector: row => row.teacherName,
            sortable: true,
        },
        {
            name: 'Department',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Subject',
            selector: row => row.subject,
            sortable: true,
        },
        {
            name: "Action",
            // width: '75px',
            cell: (data) => (
                <div>
                    {" "}
                    <Link
                        className="btn btn-sm btn-success font-weight-bold"
                        to={`/user/teacher/${data._id}`}
                    // onClick={() => {
                    //         console.log(data)
                    //         setBook(data)
                    //         openModal()

                    // }}
                    >
                        Details

                    </Link>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: false,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: "32px",
                width: "100%",
            },
        },
        headCells: {
            style: {
                padding: " 15px",
                background: 'blue',
                fontSize: "15px",
                color: 'white',
            },
        },
        cells: {
            style: {
                fontSize: "14px",
                padding: " 15px",
            },
        },
    };

    useEffect(() => {
        fetch('http://localhost:4200/teachers')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const activeTeacher = data.filter(teacher => teacher.status === "Active")
                // let tempArray = []; 
                // const teacherCollection = data.map(teacher => { return teacher.data })
                setTeachers(activeTeacher);
                setAllTeachers(activeTeacher)
                // setAllItem(data);
                // localStorage.setItem('item', JSON.stringify(data));

            })
        // const items = fakeData.slice(0, 6);

    }, []);
    const search = (rows) => {
        if (rows) {
            const columns = rows[0] && Object?.keys(rows[0]);
            return rows?.filter((row) =>
                columns?.some(
                    (column) =>
                        row[column]
                            ?.toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                )
            );
        }
    };
    const customStylesSelect = {
        control: (provided, state) => ({
            ...provided,
            marginTop: "2px",
            borderRadius: "0px",
            minHeight: "36px",
            height: "30px",
            width: "200px",
            boxShadow: state.isFocused ? null : null,
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: "30px",
            padding: "0 6px",
            marginTop: "-6px",
        }),

        input: (provided, state) => ({
            ...provided,
            margin: "-20px -2px",
        }),
        indicatorSeparator: (state) => ({
            display: "none",
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
        }),
    };
    const onChangeDepartment = (data) => {
        if (data !== null) {
            setSelectedDepartment({ value: data?.value, label: data?.value })
            setSelectedSubject("")
            const findTeacher = allTeachers.filter(teacher => teacher.category === data?.value)
            setTeachers(findTeacher)
            if(data?.value === "Science"  ){
                setSubjects([{ value: "Math", label:"Math" },{ value: "Biology", label:"Biology" }]);
                
            }
            else if(data?.value === "Commerce"  ){
                setSubjects([{ value: "Accounting", label:"Accounting" },{ value: "Finance", label:"Finance" }])
            }
            else if(data?.value === "Arts"  ){
                setSubjects([{ value: "Economics", label:"Economics" },{ value: "Sociology", label:"Sociology" }])
            }
           
        }
        else {
            setTeachers(allTeachers)
            setSelectedSubject("")
            setSelectedDepartment("")
            setSubjects([
                { value: 'Math', label: 'Math' },
                { value: 'Biology', label: 'Biology' },
                { value: 'Accounting', label: 'Accounting' },
                { value: 'Finance', label: 'Finance' },
                { value: 'Economics', label: 'Economics' },
                { value: 'Sociology', label: 'Sociology' },
            ])
        }
        // console.log(data)
    }
    const onChangeSubject = (data) => {
        if (data !== null) {
            setSelectedSubject({ value: data?.value, label: data?.value })
            const findTeacher = allTeachers.filter(teacher => teacher.subject === data?.value)
            setTeachers(findTeacher)
            if(data?.value === "Math"  ){
                setSelectedDepartment({ value: "Science", label:"Science" })
                setSubjects([{ value: "Math", label:"Math" },{ value: "Biology", label:"Biology" }]);
            }
            else if(data?.value ===  "Biology" ){
                setSelectedDepartment({ value: "Science", label:"Science" })
                setSubjects([{ value: "Math", label:"Math" },{ value: "Biology", label:"Biology" }]);
            }
            else if(data?.value === "Accounting"){
                setSelectedDepartment({ value: "Commerce", label:"Commerce" })
                setSubjects([{ value: "Accounting", label:"Accounting" },{ value: "Finance", label:"Finance" }])
            }
            else if(data?.value === "Finance"){
                setSelectedDepartment({ value: "Commerce", label:"Commerce" })
                setSubjects([{ value: "Accounting", label:"Accounting" },{ value: "Finance", label:"Finance" }])
            }
            else if(data?.value === "Economics"){
                setSelectedDepartment({ value: "Arts", label:"Arts" })
                setSubjects([{ value: "Economics", label:"Economics" },{ value: "Sociology", label:"Sociology" }])
            }
            else if(data?.value === "Sociology"){
                setSelectedDepartment({ value: "Arts", label:"Arts" })
                setSubjects([{ value: "Economics", label:"Economics" },{ value: "Sociology", label:"Sociology" }])
            }
        }
        else {
            setTeachers(allTeachers)
            setSelectedSubject("")
            setSelectedDepartment("")
            setSubjects([
                { value: 'Math', label: 'Math' },
                { value: 'Biology', label: 'Biology' },
                { value: 'Accounting', label: 'Accounting' },
                { value: 'Finance', label: 'Finance' },
                { value: 'Economics', label: 'Economics' },
                { value: 'Sociology', label: 'Sociology' },
            ])
        }
        // console.log(data)
    }
    return (
        <div>
            <Header cart={cart.length}></Header>
            <div className="d-flex justify-content-center" style={{ marginTop: '50px', height: "100px" }} >
                <form className="form-group">
                    <div className="container">
                        <div className="form-inline d-flex justify-content-start">
                            <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Search</label>
                            <input
                                style={{}}
                                className="form-control"
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <div className="container">
                        <div className="form-inline d-flex justify-content-start">
                            <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Filter With Department</label>
                            <div>   <Select
                                styles={customStylesSelect}
                                // name="facilityId"
                                options={departments}
                                onChange={(e) => {
                                    onChangeDepartment(e);
                                }}
                                value={selectedDepartment}
                                isSearchable={true}
                                isClearable={true}
                            /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="form-inline d-flex justify-content-start">
                            <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Filter With Subject</label>
                            <div>   <Select
                                styles={customStylesSelect}
                                // name="facilityId"
                                options={subjects}
                                onChange={(e) => {
                                    onChangeSubject(e);
                                }}
                                value={selectedSubject}
                                isSearchable={true}
                                isClearable={true}
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '100px' }} className="container pb-5 d-flex justify-content-center">


                <DataTable
                    columns={columns}
                    data={search(teachers)}
                    customStyles={customStyles}
                // selectableRows
                />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;