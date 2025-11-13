import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import DarkLight from '../Component/DarkLight';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <DarkLight></DarkLight>
            <Footer></Footer>
        </div>
    );
};

export default Layout;