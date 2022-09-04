import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import fakeData from '../../../fakeData';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

const Menu = () => {
    const [item, setItem] = useState([]);
    const [allItem, setAllItem] = useState([]);
    // const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/items')
        .then(res => res.json())
        .then(data => {
            setItem(data);
            setAllItem(data);
            localStorage.setItem('item', JSON.stringify(data));
         
        })
        // const items = fakeData.slice(0, 6);

    }, []);
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            // console.log(existingKey, savedCart[existingKey]);
            product.quantity = savedCart[existingKey];
            // console.log(product);
            return product;
        })
        // setProducts(previousCart);
        setCart(previousCart);
    }, [allItem,itemData])

 





    return (
        <div className="menuBody container mt-5"  >
                       <div className="vsl mb-5">
            <h1>Book Collection</h1>
          </div>

            <div className="container mt-5">
            {
                        item.length === 0 ? <div className="text-center text-dark "><p style={{fontSize: '50px'}}>Loading....</p></div> : <></>
                    }
                <div className="row">
                  
                    {
                        item.map(item => <MenuItem item={item}></MenuItem>)
                    }
                </div>
            </div>

            {
                cart.length > 0 ? <div className="text-center my-4">
                    <Link to='/checkout'  className="btn btn-primary px-5">Checkout Your Book</Link>
                </div>
                    :
                    <div className="text-center my-4">
                        <button style={{ backgroundColor: 'gray', color: 'white', outline: 'none' }} className="btn  px-5">Checkout Your Book</button>
                    </div>
            }
        </div>
    );
};

export default Menu;