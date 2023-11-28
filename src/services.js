import React, { useState } from 'react';
import './App.css';
import ServiceBg from './assets/about.jpg'
import employees from './assets/services/download (1)employees.jpg'
import compliance from './assets/services/compliance.jpg'
import Layout from './components/layout';
import BreadCrump from './components/breadCrump';
import TitleComponent, { ListItem, PargraphComponent } from './components/displaycomponts';
import ServiceContainer from './components/service/serviceContainer';






function Services() {
    let corevalues = [
        "Reducing Redundancy",
        "Uncover Company potential",
        "increase agility",

    ]
    const [item, setItem] = useState({});
  
    const [servicesArray, setServices] = useState([{
        isHovered: false,
        title: "Recruitment process",
        description: "The easy cases are perfectly simple and easy to distinguish",
        backdrop: ServiceBg,
        overLay: (
            <div className='flex flex-col'>
                <TitleComponent center={true} underline={true} title="Recruitment process" />
                <PargraphComponent content="The easy cases are perfectly simple and easy to distinguish" />
                <ListItem padding={2} color="black" listitems={corevalues} />
            </div>
        )
    },
    {
        isHovered: false,
        title: "Employee Relations",
        description: "The easy cases are perfectly simple and easy to distinguish",
        backdrop: employees,
        overLay: (
            <div className='flex flex-col'>
                <TitleComponent center={true} underline={true} title="Employee Relations" />
                {/* <PargraphComponent content="The easy cases are perfectly simple and easy to distinguish" />
                <ListItem padding={2} color="black" listitems={corevalues} /> */}
            </div>
        )
    },
    {
        isHovered: false,
        title: "Compliance audits",
        description: "The easy cases are perfectly simple and easy to distinguish",
        backdrop: compliance,
        overLay: (
            <div className='flex flex-col'>
                <TitleComponent center={true} underline={true} title="Compliance audits" />
                {/* <PargraphComponent content="The easy cases are perfectly simple and easy to distinguish" />
                <ListItem padding={2} color="black" listitems={corevalues} /> */}
            </div>
        )
    }
    ]);

    return (
        <Layout>
            <BreadCrump name="Our Services" title="Services" image={ServiceBg} />
            <div className='w-full bg-about-bg-1 bg-no-repeat flex  sm:flex-row flex-col  sm:h-[600px]  overflow-x-hidden sm:px-60 px-2 flex my-2 '>

                {servicesArray.map((service) => (
                    <ServiceContainer data={service} isHovered={service.isHovered} arr={servicesArray} item={item} setItem={setItem} setIsHovered={setServices} corevalues={corevalues} />
                ))}
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.841174484008!2d36.79215377496551!3d-1.268088698719848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1707698ec64f%3A0x951348af62727b26!2sPacific%20Residence!5e0!3m2!1sen!2ske!4v1700186916723!5m2!1sen!2ske" width="1800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className='flex sm:h-[600px] w-full bg-slate-100 p-1 flex-col sm:px-60 px-2  overflow-x-hidden'>
                <TitleComponent center={true} title="Our Business" megaTitle="Stand Out From The Rest" />
                {/* <div className='w-full bg-slate-100 flex   flex-col  sm:h-[600px]  overflow-x-hidden sm:px-60 px-2 flex  '>
                <TitleComponent center={true} underline={true} title="Compliance audits" megaTitle="Test" /> */}
                <div className='w-full bg-slate-100 flex h-[60%]  sm:flex-row flex-col   '>
                    <div className='flex w-1/4 h-full bg-green-100 p-10'>
                        <div className='w-full  h-full  flex    '>
                            <div className='w-full  h-full   bg-white shadow-lg rounded-br-[70px]'>
                                <div class=" w-full h-full relative z-0">
                                    <p class="italic text-bold  font-serif">Map</p>
                                    <div class="absolute  rounded-full -top-5 shadow-3xl -left-5 bg-primary h-28 w-28 flex  z-10">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout >
    );
}

export default Services;
