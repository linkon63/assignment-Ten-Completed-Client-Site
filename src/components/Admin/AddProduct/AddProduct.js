import React from 'react';
import Navber from '../../Navber/Navber';
import Sidebar from '../Sidebar';
import UploadProduct from '../UploadProduct';
import './AddProduct';
const AddProduct = () => {
    const style = {
        'background': '#f1f1f1'
    }
    return (
        <div style={style}>
            <Navber></Navber>
            <div className='admin'>    
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div style={{'margin-top': '20px', 'text-align' :'center'}}>
                    <UploadProduct></UploadProduct>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;