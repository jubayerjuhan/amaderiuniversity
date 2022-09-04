import React, {
    useContext,
    useEffect, useState
} from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

// import About from '../About/About';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { UserContext } from '../../../App';
// import fakeData from '../../../fakeData';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import OpinionList from '../OpinionList/OpinionList';
import Details from '../Details/Details';
// import QuestionHome from '../QuestionHome/QuestionHome';
const Home = () => {
    const [cart, setCart] = useState([]);
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
    const [loggedInUser] = useContext(UserContext)
    // const exampleDate = "2021-06-16 16:46:13 +0900"



    // const formatAMPM = (time) => {
    //     // console.log(date.split(':')[0])
    //     let hours = time?.split(':')[0];
    //     let minutes = time?.split(':')[1];
    //     const ampm = hours >= 12 ? 'pm' : 'am';

    //     hours %= 12;
    //     hours = hours || 12;
    //     minutes = minutes < 10 ? `${minutes}` : minutes;

    //     const strTime = `${hours}:${minutes} ${ampm}`;

    //     return strTime;
    // };
    // const formatDate = (data) => {
    //     const date = data.split(" ")[0];
    //     const time = data.split(" ")[1];
    //     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     var d = new Date(date?.split('-')[1]);
    //     var monthName = months[d.getMonth()];
    //     let day = date?.split('-')[2];
    //     let month = monthName;
    //     let year = date?.split('-')[0];


    //     let hours = time?.split(':')[0];
    //     let minutes = time?.split(':')[1];
    //     const ampm = hours >= 12 ? 'pm' : 'am';

    //     hours %= 12;
    //     hours = hours || 12;
    //     minutes = minutes < 10 ? `${minutes}` : minutes;

    //     // const updateDate = `${day}/${month}/${year}`;
    //     const updateDate = `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
    //     return updateDate;
    // };
    // console.log(
    //     // monthName,
    //     formatDate(exampleDate),
    //     // formatAMPM(exampleDate.split(" ")[1])
    // );

    return (
        <div>
            <Header cart={cart.length}></Header>
            <Search></Search>
            <Details></Details>
            {/* <Menu></Menu> */}
            {loggedInUser.email || sessionStorage.getItem('token') ? <Menu></Menu> : <></>}
            {/* <About></About> */}
            <OpinionList />
            {/* <QuestionHome/> */}
            <Footer></Footer>

            {/* <MessengerCustomerChat
                pageId="106496095168759"
                appId="370328294888437"
            /> */}
        </div>
    );
};

export default Home;