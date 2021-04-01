import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Main from './components/Main/Main';
import Admin from './components/Admin/Admin';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import ManageProduct from './components/Admin/ManageProduct/ManageProduct';
import AddProduct from './components/Admin/AddProduct/AddProduct'
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>  
      <Router>
      <Switch>
          <Route path="/main">
            <Main></Main>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> 
    </UserContext.Provider>   
    </div>
  );
}

export default App;
