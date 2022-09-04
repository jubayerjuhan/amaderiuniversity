import React, { useContext } from 'react';
import {  Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Header.css'
import logo from '../../../fakeData/images/Logo/projectlogo.png'
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../../../App';

const Header = ({ cart }) => {
  // const [item, setItem] = useState([]);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [loggedInUser] = useContext(UserContext);

  // useEffect(() => {
  //   fetch('http://localhost:4200/allOrder')
  //     .then(res => res.json())
  //     .then(data => {
  //       // if (data) {
  //       //     localStorage.setItem('student', JSON.stringify(data));

  //       // }
  //       // const email = sessionStorage.getItem('email')
  //       // const items = data.filter(item => item.finalData.email === email)
  //       // console.log(items,data)
  //       // setItem(items.reverse());
  //     })
  // }, [])
  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.assign("/");
  }
  // const handleWindow = () => {
  //   window.scrollTo(0, 0);
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bc">
        <div className="container-fluid">
          <img src={logo} alt="" className="lp" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
           
           
            {loggedInUser.email === "admin@gmail.com" || sessionStorage.getItem('email') === "admin@gmail.com"  ?      <Link to='/admin/pending' style={{position: 'relative',top: '12px'}} className="cart text-white"><SupervisorAccountIcon /></Link> : <></>}
        
             
              <li className="nav-item">
                <a href="/" className="nav-link active tc hv" aria-current="page" >Home</a>
              </li>

              {/* <li className="nav-item">
                <a href="/user/appointmentStatus" className="nav-link active tc hv" aria-current="page" >Profile</a>
              </li> */}
              <li style={{position: 'relative', top:'8px'}} className="nav-item dropdown ">
              <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<a href="." className="drop-link">
                        University List
                      </a>}
                      menuVariant="white"
                    // style={{position: "relative",bottom:'9px',color:'white'}}
                    >
                      <NavDropdown.Item href="/publicList">Public University</NavDropdown.Item>
                      <NavDropdown.Item href="/privateList">Private University</NavDropdown.Item>
                      <NavDropdown.Item href="/nationalList">National University</NavDropdown.Item>
                      {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </li>
              <li style={{position: 'relative', top:'8px'}} className="nav-item dropdown">
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<a href="."  className="drop-link">
                        University Ranking
                      </a>}
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="/publicRanking">Public University</NavDropdown.Item>
                      <NavDropdown.Item href="/privateRanking">Private University</NavDropdown.Item>
                      <NavDropdown.Item href="/nationalRanking">National University</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                {/* <a className="nav-link dropdown-toggle tc hv"   id="dropdown-basic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  University Ranking
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item hvv " href="#/action-1">Public University</a></li>
                  <li><a className="dropdown-item hvv" href="#/action-2">Private University</a></li>
                  <li><a className="dropdown-item hvv" href="#/action-3">National University</a></li>
                </ul> */}
              </li>
              <li style={{position: 'relative', top:'8px'}} className="nav-item">
              <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<a href="."  className="drop-link">
                      Admission Time &amp; Date
                      </a>}
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="/publicAdmission">Public University</NavDropdown.Item>
                      <NavDropdown.Item href="/privateAdmission">Private University</NavDropdown.Item>
                      <NavDropdown.Item href="/nationalAdmission">National University</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                {/* <a className="nav-link active tc hv" role="button">Admission Time &amp; Date</a> */}
              </li>
              <li className="nav-item">
                <a href="/questionBank"  className="nav-link active tc hv " role="button">Question Bank</a>
              </li>
              {
                loggedInUser.email || sessionStorage.getItem('token') ? <>
                  <li className="nav-item">
                    <a href="/user/appointment" className="nav-link active tc hv" aria-current="page" >Appointment</a>
                  </li>
                  <li className="nav-item">
                    <a href="/skillTest" className="nav-link active tc hv" aria-current="page" >Skill Test</a>
                  </li>
                  <li className="nav-item">
                    <a href="/user/appointmentStatus" className="nav-link active tc hv" aria-current="page" >Profile</a>
                  </li>
                  <li className="nav-item">
                    <a href="/" onClick={logout} className="nav-link active tc hv" role="button">Log Out</a>
                  </li>
                  {/* <li className="nav-item">
                    <p style={{ position: 'relative', left: '45px', top: '17px', color: 'white' }}><b>{sessionStorage.getItem('name').split(" ").slice(0, 1)}</b></p>
                  </li> */}
                </> : <> <li className="nav-item">
                  <a href="/login" className="nav-link active tc hv" role="button">Log In</a>
                </li>
                  <li className="nav-item">
                    <a href="/signup" className="nav-link active tc hv" role="button">Sign Up</a>
                  </li></>
              }

            </ul>
            {/* <a href="#" className="tie-search-trigger-mobile">
        <span className="tie-icon-search tie-search-icon" aria-hidden="true" />
        <span className="screen-reader-text"><img src="images/iconi.png" className="ip" /></span>
      </a> */}
     
          </div>
        </div>
        {
                            loggedInUser.email || sessionStorage.getItem('token') ?
                            <p style={{ position: 'relative', left: '-45px', top: '10px', color: 'orange' }}><b>{sessionStorage.getItem('name').split(" ").slice(0, 1)}</b></p>
                                :
                                <></>
                        }
        {/* <small>hello</small> */}
      </nav>
    </div>
  );
};

export default Header;