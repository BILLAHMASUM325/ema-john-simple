import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import {getDatabaseCart} from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useState([]);

    useEffect(() =>{
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);

            const cartProducts = productKeys.map(key => {
                
                const product = fakeData.find(pd => pd.key === key);
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cartProducts)
    },[])
    return (
        <div>
            
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    product = {pd}></ReviewItem>)
            }
        </div>
    );
};

export default OrderReview;