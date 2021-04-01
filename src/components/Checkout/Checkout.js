import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navber from '../Navber/Navber';
import { Button } from 'react-bootstrap';
import './Checkout.css'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [productData, setProductData] = useState([]);

    useEffect( () => {
        const url = `https://easy-bazaar-server-side.herokuapp.com/manageProduct`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProductData(data))
    },[])
    if(productData.length){
        const product = productData.find(product => product._id === id);
        setProductData(product);
    }

    
    
    const history = useHistory();
    const handleCheckOut = () => {
        const newLoggedInUserData = {...loggedInUser, product:productData};
        setLoggedInUser(newLoggedInUserData);
        history.push('/shipment')
    }
    const productPrice = productData.price;
    const intPrice = parseInt(productPrice);
    return (
        <div>
            <Navber></Navber>
        <h1 className="table-Heading">Checkout</h1>
        <div className="table-card">
            <table id="tableContainer">
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{productData.name}</td>
                    <td>1</td>
                    <td> <b> ${productData.price} </b></td>
                </tr>
                <tr>
                    <td> VAT : 0% </td>
                    <td> Shipping Cost : $10 </td>
                    <td> <b> ${10} </b></td>
                </tr>
                <tr>
                    <td> <b> Total Price  </b></td>
                    <td> <b> Total Quantity : 1 </b></td>
                    <td> <b> `${intPrice + 10} </b></td>
                </tr>
            </table>
            <div className="checkout">
                <Button type="button" onClick={handleCheckOut} variant="success">Checkout</Button>
            </div>
        </div>

        </div>
    );
};

export default Checkout;