import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Contact from "./components/contact/Contact";
import HotelsList from './components/accommodation/HotelsList';
import hotelDetail from "./components/accommodation/HotelDetail";
import Footer from "./components/layout/Footer";
import './sass/styles.scss';
import MakeEnquiry from "./components/accommodation/MakeEnquiry";
import Enquiries from "./components/admin/Enquiries";
import Messages from "./components/admin/Messages";

function App() {
  return (
    <AuthContextProvider>
            <Router>
                <Layout />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/accommodation" exact component={HotelsList} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/accommodation/:id" exact component={hotelDetail} />
                        <Route path="/accommodation/makeenquiry/:id" component={MakeEnquiry} />
                        <ProtectedRoute path="/admin" exact component={Dashboard} />
                        <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
                        <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                        <ProtectedRoute path="/admin/hotels/edit/:id" component={EditHotel} />
                        <ProtectedRoute path="/admin/enquiries" exact component={Enquiries} />
                        <ProtectedRoute path="/admin/messages" exact component={Messages} />
                        <Redirect to="/" />
                    </Switch>
            </Router>
            <Footer />
        </AuthContextProvider>
    );
}

export default App;
