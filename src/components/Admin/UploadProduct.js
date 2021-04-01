import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './UploadProduct.css'
const UploadProduct = () => {
    
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURl] = useState(null);

    //Handle Form Submitting 
    const onSubmit = data => {
        console.log(data);
        const productData = {
            name: data.productName,
            wight: data.wight,
            price: data.addPrice,
            imageURL: imageURL
        }
        const url = `https://easy-bazaar-server-side.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(productData)
        })
        .then(res => console.log('Server Side Response',res)
        )

        alert('Your Data has sended to the server');
    };

    //---------handleImageUpload in ImageBB Hosting---------
    const handleImageUpload = event => {
        console.log('ImageURL',event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '41ab61d1a2635feab06cde6b123c5332');
        imageData.append('image', event.target.files[0]);

        //Sending Data to the image BB DataBase
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log('Axios Uploading Image Error',error);
          });

    }

    return (
        <div className="formBody">
            <h3>This is Upload Data</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="productName" defaultValue="Product Name" ref={register} /> <br/>
                <input name="wight" defaultValue="wight" ref={register} /> <br/>
                <input name="addPrice" defaultValue="Price" ref={register} /> <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} ref={register({ required: true })} /> <br/>
                <input type="submit" className='btn' />
            </form>

        </div>
    );
};

export default UploadProduct;