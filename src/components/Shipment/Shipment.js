import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Shipment.css';
import Navber from '../Navber/Navber';
const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    const {displayName, photoURL,email,product} = loggedInUser;
    const [show, setShow] =useState(null);
    const onSubmit = data => {
        const orderDetails = {email:email,name:displayName,product:product, shipment: data, orderTime: new Date()};

        // Sending Order data to the back-End
        fetch('https://easy-bazaar-server-side.herokuapp.com/addOrder',{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert('Your Order Placed Successfully');
            setShow(true);
          }
        })
      };
      const gotoHome = () => {
          setShow(null);
      }
    return (
        <div>
          <Navber></Navber>
          <div className='ship-body'>
          <div className='heading'>
            {
              show ?  <h4>Happy Shopping Thank You</h4> :<h4>Please Submit your Information</h4>
            }
          </div>  
            {
                show ?  <div className='heading'>
                    <h4>Your Ordered Submitted</h4>
                    <Link to='/home'><button className='btn' onClick={gotoHome}>Go to Home Page</button></Link>
                </div> : <div className="fromBody">
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" /> <br/>
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/> <br/>
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="address" ref={register({ required: true })}  placeholder="Your Address" /> <br/>
                    {errors.address && <span className="error">Address is required</span>}

                    <input name="phone" ref={register({ required: true })}  placeholder="Your Phone Number"/> <br/>
                    {errors.phone && <span className="error">Phone Number is required</span>}

                    <input type="submit" className='btn' />
                </form>
            </div>
            }
            </div>
        </div>
    );
};

export default Shipment;