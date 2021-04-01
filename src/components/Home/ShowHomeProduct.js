import React from 'react';
import { useHistory } from 'react-router-dom';
import './ShowHomeProduct.css';
import { Button, Card } from 'react-bootstrap';

const ShowHomeProduct = (props) => {
    
    const {_id,name,imageURL,price} = props.product;

    const history = useHistory()
    const handleProductBuy = id => {
        history.push(`/checkout/${id}`);
    }
    return (
       <div>
            <Card style={{ width: '18rem', marginBottom : '20px'}}>
                <Card.Img variant="top" src={imageURL}  />
                <Card.Body className="cardBody">
                    <Card.Title> <small>{name}</small> </Card.Title>
                    <Card.Text>
                        <h3>$ {price}</h3>
                    </Card.Text>
                    <Button  onClick={() => handleProductBuy(_id)} variant="success">BUY NOW</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowHomeProduct;