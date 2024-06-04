import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import "../../App.css"
import FetchAPi from '../../API/FetchAPI';
import CartLineItem from './CartLineItem';

const Cart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchAPi("/carts");
                if (Array.isArray(response)) {
                    setData(response);
                } else {
                    setData([]); // Set to empty array if response is not an array
                }
            } catch (err) {
                console.log(err);
                setData([]); // Set to empty array in case of error
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <nav className='nav'>
                <span>
                    <button>{"<-"} My Cart</button>
                </span>
            </nav>
            <div className='my-cart'>
                <div className='left-cart'>
                    <div>
                        <h3 className='cart-item'>Items</h3>
                        <hr />
                    </div>
                    <div>
                        {Array.isArray(data) && data.map((cart, idx) => (
                           
                            <CartLineItem
                                key={idx}
                                // title={cart?.products[0].title}
                                quantity={cart?.products[0].quantity}
                                price={cart?.products[0].price}
                            />
                        ))}
                    </div>
                </div>
                <div className='right-cart'></div>
            </div>
        </div>
    );
}

export default Cart;
