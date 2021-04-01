import React, { useEffect, useState } from 'react';
import Navber from '../../Navber/Navber';
import Sidebar from '../Sidebar';
import ShowingData from './ShowingData';

const ManageProduct = () => {
    const [loadProduct, setLoadProduct] = useState([]);
    
    useEffect( () => {
        const url = `https://easy-bazaar-server-side.herokuapp.com/manageProduct`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLoadProduct(data);
        })
    },[loadProduct]);   
    return (
        <div>
            <Navber></Navber>
            <div className="admin">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div>
                    {
                        loadProduct.map(product => <ShowingData product={product} key={loadProduct._id}></ShowingData>)
                    }
                </div>
            </div>    
        </div>
    );
};

export default ManageProduct;