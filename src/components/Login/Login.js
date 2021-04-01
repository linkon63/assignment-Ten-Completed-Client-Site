import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navber from '../Navber/Navber';
import './Login.css';
if(firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn =() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error,errorCode,errorMessage)
        });
    }


    return (
        <div>
            <Navber></Navber>
            <div className='loginPage'>
                <h1>Please Login by Google Account</h1>
                <p>To Access Data Base Admin And Order</p>
                <button className='googlebtn' onClick={handleGoogleSignIn}>Google</button>
            </div>
        </div>
    );
};

export default Login;