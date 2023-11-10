
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Layout(props) {
    return (
        <div className='w-full h-auto flex-col flex'>
            <Navbar transparent={true} />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
