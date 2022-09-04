import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddItem from "./components/Admin/AddItem/AddItem";
import AddQuestion from "./components/Admin/AddQuestion/AddQuestion";
import AddTeacher from "./components/Admin/AddTeacher/AddTeacher";
// import AllItem from "./components/Admin/AllItem/AllItem";
import DeliveryOrder from "./components/Admin/DeliveryOrder/DeliveryOrder";
import PendingOrder from "./components/Admin/PendingOrder/PendingOrder";
import Checkout from "./components/Checkout/Checkout/Checkout";
import Exam from "./components/Home/Exam/Exam";
import Home from "./components/Home/Home/Home";
import SkillTest from "./components/Home/SkillTest/SkillTest";
import Item from "./components/Item/Item/Item";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import SignUp from "./components/Login/SignUp/SignUp";
import Shipment from "./components/Shipment/Shipment/Shipment";
import Appointment from "./components/Home/Appointment/Appointment";
import Opinion from "./components/User/Opinion/Opinion";
import TeacherProfile from "./components/Home/TeacherProfile/TeacherProfile";
import PendingAppointment from "./components/Admin/PendingAppointment/PendingAppointment";
import ApprovedAppointment from "./components/Admin/ApprovedAppointment/ApprovedAppointment";
import AppointmentStatus from "./components/User/AppointmentStatus/AppointmentStatus";
import OrderList from "./components/User/OrderList/OrderList";
import AboutUs from "./components/AboutUs/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition/TermsCondition";
import PrivateRanking from "./components/Ranking/PrivateRanking/PrivateRanking";
import NationalRanking from "./components/Ranking/NationalRanking/NationalRanking";
import PublicRanking from "./components/Ranking/PublicRanking/PublicRanking";
import NationalList from "./components/VarsityList/National/NationalList";
import PrivateList from "./components/VarsityList/Private/PrivateList";
import PublicList from "./components/VarsityList/Public/PublicList";
import PublicAdmission from "./components/Admission/PublicAdmission/PublicAdmission";
import PrivateAdmission from "./components/Admission/PrivateAdmission/PrivateAdmission";
import NationalAdmission from "./components/Admission/NationalAdmission/NationalAdmission";
import PrivateHomepage from "./components/Homepage/PrivateHomepage/PrivateHomepage";
import PublicHomepage from "./components/Homepage/PublicHomepage/PublicHomepage";
import NationalHomePage from "./components/Homepage/NationalHomepage/NationalHomePage";
import QuestionBank from "./components/QuestionBank/QuestionBank";
import QuestionList from "./components/Admin/QuestionList/QuestionList";
import TeacherList from "./components/Admin/TeacherList/TeacherList";
import ItemList from "./components/Admin/ItemList/ItemList";
import QuestionProfile from "./components/Admin/QuestionProfile/QuestionProfile";
import AdminTeacherProfile from "./components/Admin/TeacherProfile/AdminTeacherProfile";
import AddUniversity from "./components/Admin/AddUniversity/AddUniversity";
import UniversityList from "./components/Admin/UniversityList/UniversityList";
import ItemProfile from "./components/Admin/ItemProfile/ItemProfile";
import UniversityProfile from "./components/Admin/UniversityProfile/UniversityProfile";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/skillTest">
           <SkillTest/>
          </PrivateRoute>
          <PrivateRoute path="/exam">
           <Exam/>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/item/:id">
            <Item></Item>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <PrivateRoute path="/user/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/user/teacher/:id">
            <TeacherProfile />
          </Route>
          <Route path="/admin/pending">
            <PendingOrder></PendingOrder>
          </Route>
          <Route path="/admin/delivery">
            <DeliveryOrder></DeliveryOrder>
          </Route>
          <Route path="/admin/pendingAppointment">
            <PendingAppointment />
          </Route>
          <Route path="/admin/approvedAppointment">
            <ApprovedAppointment />
          </Route>
          
          <Route path="/admin/addItem">
            <AddItem/>
          </Route>
          <Route path="/admin/itemList">
            <ItemList/>
          </Route>
          <Route path="/admin/item/:id">
            <ItemProfile />
          </Route>
          <Route path="/admin/addUniversity">
            <AddUniversity/>
          </Route>
          <Route path="/admin/university/:id">
            <UniversityProfile />
          </Route>
          <Route path="/admin/addQuestion">
            <AddQuestion/>
          </Route>
          <Route path="/admin/questionList">
            <QuestionList/>
          </Route>
          <Route path="/admin/question/:id">
            <QuestionProfile />
          </Route>
          <Route path="/admin/teacherList">
            <TeacherList/>
          </Route>
          <Route path="/admin/universityList">
            <UniversityList/>
          </Route>
          <Route path="/admin/addTeacher">
            <AddTeacher/>
          </Route>
          <Route path="/admin/teacher/:id">
            <AdminTeacherProfile />
          </Route>
          <Route path="/user/opinion">
            <Opinion/>
          </Route>
          <Route path="/user/appointmentStatus">
            <AppointmentStatus/>
          </Route>
          <Route path="/user/orderList">
            <OrderList/>
          </Route>
          
          <Route path="/publicRanking">
            <PublicRanking />
          </Route>
          <Route path="/privateRanking">
            <PrivateRanking />
          </Route>
          <Route path="/nationalRanking">
            <NationalRanking />
          </Route>
          <Route path="/nationalList">
            <NationalList />
          </Route>
          <Route path="/privateList">
            <PrivateList />
          </Route>
          <Route path="/publicList">
            <PublicList />
          </Route>
          <Route path="/publicAdmission">
            <PublicAdmission />
          </Route>
          <Route path="/privateAdmission">
            <PrivateAdmission />
          </Route>
          <Route path="/nationalAdmission">
            <NationalAdmission />
          </Route>
          <Route path="/privateHomepage">
            <PrivateHomepage />
          </Route>
          <Route path="/publicHomepage">
            <PublicHomepage />
          </Route>
          <Route path="/nationalHomepage">
            <NationalHomePage />
          </Route>
          <Route path="/questionBank">
            <QuestionBank />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/privacyPolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms">
            <TermsCondition />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
