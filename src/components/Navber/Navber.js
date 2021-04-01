import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import { Navbar,Nav } from 'react-bootstrap';
import { UserContext } from '../../App';

const Navber = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogOut = () =>{
        setLoggedInUser({});
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand >Easy Bazaar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link> <Link to='/home'>Home</Link> </Nav.Link>
                <Nav.Link> <Link to='/order'>Order</Link> </Nav.Link>
                <Nav.Link> <Link to='/admin'>Admin</Link> </Nav.Link>
                {
                    loggedInUser.email ? <Nav.Link> <Link to='/logout'> <span onClick={handleLogOut}> Logout </span></Link> </Nav.Link> :
                    <Nav.Link> <Link to='/login'>  Login</Link> </Nav.Link>
                }
                </Nav>
            </Navbar>

        </div>
    );
};

export default Navber;