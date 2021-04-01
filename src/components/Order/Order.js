import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navber from '../Navber/Navber';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        const url = `https://easy-bazaar-server-side.herokuapp.com/orders?email=`+loggedInUser.email;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[orders])
    
    //Cancel Order
    const orderCancel = id => {
        fetch(`https://easy-bazaar-server-side.herokuapp.com/deleteOrder/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);}
            )
        alert('Your Order has Deleted');
    }
    return (
        <div className='orderBody'>
            <Navber></Navber>
            <div className='orders'>
                <h4>Your Total Order : <b>{orders.length}</b> Items</h4>
                {
                    orders.map( order => 
                    <div className='order-details'>
                        <h5>Order Id : #{order._id}</h5>
                        <p>Ordered By : {order.name} ||  Ordered Date : {(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</p>
                        <p>Your Product is in Shipment { ` & ` }Thank You Stay With Us </p>
                        <button onClick={()=>{orderCancel(order._id)}} className='cancelOrder'>Cancel Order</button>
                    </div>)
                }
                    

            </div>
        </div>
    );
};

export default Order;