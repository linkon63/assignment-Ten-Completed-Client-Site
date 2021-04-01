import React from 'react';
import './ShowingData.css';
import { Button } from 'react-bootstrap';

const ShowingData = (props) => {
    const {_id,name,wight,price} =props.product;

    const deleteProduct = id => {
        console.log('Data Delete', id);
        fetch(`https://easy-bazaar-server-side.herokuapp.com/deleteProduct/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);}
            )
        alert('Your Product has Deleted');
    }
    
    return (
        <div className='dataCard'>
            <h4>Name : {name} </h4>
            <h4>Wight : {wight} </h4>
            <h4>Price : {price} </h4>
            <Button  onClick={() => {deleteProduct(_id)}} variant="success">Delete Product</Button>
        </div>
    );
};

export default ShowingData;