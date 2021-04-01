import React, { useContext, useEffect, useState } from 'react';
import Navber from '../Navber/Navber';
import ShowHomeProduct from './ShowHomeProduct';
import './Home.css';
import { UserContext } from '../../App';
import { Spinner } from 'react-bootstrap';
const Home = () => {
    const [loadProduct, setLoadProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        const url = `https://easy-bazaar-server-side.herokuapp.com/manageProduct`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoadProduct(data);
            })
    }, [])
    return (
        <>
            <Navber></Navber>

            <div className='body'>
                {
                    loadProduct.length === 0 ? <div className='loading'>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div> :
                        <div>
                            <div className='header'>
                                {
                                    loggedInUser.email && (`${loggedInUser.name || loggedInUser.email}`)
                                }
                            </div>
                            <div className="Container">
                                <div className="product-card">
                                    {loadProduct.map(product => <ShowHomeProduct key={loadProduct._id} product={product}></ShowHomeProduct>)}
                                </div>
                            </div>
                        </div>
                }

            </div>

        </>
    );
};

export default Home;