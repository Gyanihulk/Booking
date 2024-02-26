import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const PhonePayCheckoutPage = () => {
    const [orderId, setOrderId] = useState('');
    const [price, setPrice] = useState('');
    const location = useLocation();
    const useQuery = () => {
        return new URLSearchParams(location.search);
    };

    const query = useQuery();

    useEffect(() => {
        setOrderId(query.get("orderId"));
        setPrice(query.get("price"));

    }, [location, orderId]);
    return (
        <div className='container-fluid my-5 d-flex flex-column align-items-center'>
            <h1 className='my-5'>PhonePayCheckoutPage</h1>
            <img className="w-30" src="/phonepay.png" alt="" />
            <button className='btn btn-primary'>Pay {price}</button>
        </div>
    )
}

export default PhonePayCheckoutPage