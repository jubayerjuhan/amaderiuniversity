import React, {
    useEffect,
    useState
} from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const UniversityList = () => {
    const [allUniversities, setAllUniversities] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [query, setQuery] = useState("");
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
  
    const columns = [
        {
            name: 'University Name',
            selector: row => row.universityName,
            sortable: true,
            wrap: true,
            width: '160px'
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Ranking',
            selector: row => row.ranking,
            sortable: true,
            wrap: true,
        },
        {
            name: "Action",
            cell: (data) => (
                <div>
                    {" "}
                    <Link
                        className="btn btn-sm btn-success font-weight-bold"
                        to={`/admin/university/${data.id}`}                    
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
    useEffect(() => {
        fetch('http://localhost:4200/universities')
            .then(res => res.json())
            .then(data => { 
                const universityList = data.map(university => {
                    const info = university.data;
                    info.id = university._id;
                    return info
                })
                setUniversities(universityList)
                setAllUniversities(universityList)
            })

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
    const handleChange = (e) => {
        if (e.target.value === "") {
            setUniversities(allUniversities)
        }
        else {
            const filterVarsity = allUniversities.filter(varsity => varsity.category === e.target.value);
            setUniversities(filterVarsity)
        }

    }
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', minHeight: '100vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>University Ranking List</u></h2>
                    </div>
                    <div className="d-flex justify-content-center container">
                        <div className="d-flex justify-content-start container col-6">
                            <form className="form-group">
                                <div style={{ position:'relative',left:"260px"}}className="container">
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
                        </div>
                        <div className="d-flex justify-content-start container col-6">
                            <form className="form-group">
                                <div className="container">
                                    <div className="form-inline d-flex justify-content-start">
                                        <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Category</label>
                                        <select required style={{ padding: '6px 50px', border: '1px solid lightGray' }} name="category"
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value="">All</option>
                                            <option value="Public">Public</option>
                                            <option value="Private">Private</option>
                                            <option value="National">National</option>

                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-6">   <div style={{ marginBottom: '100px' }} className="container pb-5 ">


                            <DataTable
                                columns={columns}
                                data={search(universities)}
                                customStyles={customStyles}
                                pagination
                                paginationPerPage={5}
                                paginationRowsPerPageOptions={[1, 2, 3, 4, 5]}
                            // selectableRows
                            />
                        </div></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UniversityList;