import React from 'react';
import Navber from '../Navber/Navber';
import Sidebar from './Sidebar';
import './Admin.css';
const Admin = () => {
    const style={
        'color': 'cornflowerblue',
        'font-size': '30px',
        'font-family': 'unset',
        'font-style': 'italic'
    }
    const bodyBG = {'background-color': '#f1f1f1'};
    return (
        <div style={bodyBG}>
            <Navber></Navber>
            <div className="admin">
                <div style={{textAlign:'center'}}>
                    <Sidebar></Sidebar>
                </div>
                <div style={{'margin-top': '50px', 'text-align' :'center'}}>
                    <h1 style={style}>WelCome to Admin Panel</h1>
                </div>
            </div>
        </div>
    );
};

export default Admin;