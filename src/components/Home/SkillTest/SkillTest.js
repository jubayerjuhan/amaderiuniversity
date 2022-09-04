import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { getDatabaseCart } from '../../../utilities/databaseManager';
const SkillTest = () => {
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
    return (
        <div>
        <Header cart={cart.length}></Header>
        <div style={{marginTop:'50px',marginBottom:'100px'}} className="container py-5 d-flex justify-content-center">
        <div style={{border:'1px solid white',padding:'50px',width:'50%',borderRadius:'50px',boxShadow:'5px 5px 20px gray'}} className="text-center">
            <p className="font-weight-bold ">You have to answer all the question for test your skills</p>
            <button onClick={() =>window.location.assign('/exam')} className="btn btn-primary font-weight-bold">Proceed</button>
        </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default SkillTest;