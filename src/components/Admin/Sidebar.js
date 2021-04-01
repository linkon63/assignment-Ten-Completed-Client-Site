import React from 'react';
import './Sidebar.css';
import {
    Link
  } from "react-router-dom";

const Sidebar = () => {

    return (
        <div>
            <div className="sidebarContainer">
                <div className="linkStyle">
                    <ul>                  
                        <Link to="/admin"><p> <b> EASY BAZAAR ADMIN </b></p></Link>
                        <li><Link to="/addProduct">Add Product</Link></li>
                        <li><Link to="/manageProduct">Manage Product</Link></li>
                        <li><Link>Edit Product</Link></li>
                    </ul>    
                </div>
            </div>
            {/* <nav>
            <ul>
                <li><Link to="/addProduct">Add Product</Link></li>
                <li><Link to="/manageProduct">Manage Product</Link></li>
                <li><Link>Edit Product</Link></li>
                </ul>
            </nav> */}



        </div>
    );
};

export default Sidebar;