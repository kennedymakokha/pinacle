import React from 'react';
import './App.css';
import ServiceBg from './assets/serce.jpg'
import Layout from './components/layout';
import BreadCrump from './components/breadCrump';

function Services() {
    return (
        <Layout>
            <div className='h-screen w-full bg-gray-700 '>

                <BreadCrump name="Our Services" title="our-services" image={ServiceBg} />
            </div>
        </Layout>
    );
}

export default Services;
