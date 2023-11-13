import React, { lazy, useState } from 'react';
import './App.css';
import AboutBg from './assets/about.jpg'
import Layout from './components/layout';
import flag from './assets/about/flag.jpg'
import Support from './assets/about/support.png'
import Flexi from './assets/about/flexibility.png'
import About_6 from './assets/about/about-6.png'
import About_7 from './assets/about/about-7.png'
import why_us from './assets/about/why.jpg'
import mission from './assets/about/mission.jpg'
import People from './assets/about/people.jpg'
import BreadCrump from './components/breadCrump';
// const BreadCrump = lazy(() => import('./components/breadCrump'));

const Groupelement = props => {
    return (
        <div className='flex w-full group-hover:border-t-[5px] py-4 group-hover:border-t-primary flex-col sm:flex-row '>
            <div className='flex justify-center h-14 items-center px-4'>
                <img src={props.img} alt="" className='' />
            </div>
            <h2 className='text-secondary text-center sm:text-start group-hover:text-black sm:text-3xl text-[14px] font-bold capitalize '>{props.title} </h2>
        </div>
    )
}

let corevalues = [
    "Integrity",
    "Commitment to excellence",
    "Consumer focus",
    "Accountability",
    "Inclusiveness"
]
let H = [
    "Affojrdable",
    "Knowledge",
    "Saves Time",
    "Fast & Quality",
    "Experienced"
]
const socialacc= [
    {
        name:"instagram",
        link:"",
        icom:""
    },
    {
        name:"facebook",
        link:"",
        icom:""
    },
    {
        name:"share",
        link:"",
        icom:""
    },
    {
        name:"twiiter",
        link:"",
        icom:""
    },
    {
        name:"skype",
        link:"",
        icom:""
    },

]
function About() {

    const [attribute, setAttribute] = useState(`${H[0]} & ${H[2]}`)
    const [share, setshare] = useState(false)
    return (
        <Layout>
            <div className='h-auto w-full bg-primary '>
                <BreadCrump name="About Us" title="about-us" image={AboutBg} />
            </div>
            <div className='w-full bg-about-bg-1 bg-no-repeat flex flex-col sm:flex-row  sm:h-[800px] sm:px-60 px-2 flex my-2 '>
                <div className='sm:w-[50%] w-full flex   h-full  flex sm:gap-y-3  sm:p-10 p-1  flex-col'>
                    <div className='flex flex-col gap-y-3'>
                        <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold underline'>We are</h2>
                        <h2 className='capitalise text-black sm:text-5xl text-2xl font-semibold '>Leaders in HR Solution</h2>
                    </div>
                    <div className='flex w-full h-20  '>
                        <div className='flex w-[10%] h-full items-center justify-center  '>
                            <img src={flag} alt='' className='rounded-full sm:h-full h-[28px] w-[78px] object-cover' />
                        </div>
                        <div className='flex justify-center  flex-col text-slate-500 w-[90%] h-full sm:text-3xl  text-[14px] font-bold '>
                            <h2 >Since 1998,</h2>
                            <h2>Operating in Kenya.</h2>
                        </div>
                    </div>
                    <p className='sm:text-[24px]  text-gray-600'>
                        The great explorer of the truth, the master-builder of human happiness no one rejects dislikes avoids pleasure itself because it is pleasure but because know who do not those how to pursue pleasures rationally encounter consequences that are extremely painful desires to obtain.
                    </p>
                    <div className='flex w-full   '>
                        <div className='flex w-1/2  group   h-20 '>
                            <Groupelement img={Support} title="Tailored advice and support" />

                        </div>
                        <div className='flex w-1/2  group   h-20 '>
                            <Groupelement img={Flexi} title="Flexible company policies" />
                        </div>
                    </div>
                    <div className='flex sm:w-40  sm:h-14 py-2 justify-center items-center font-bold text-white bg-primary hover:bg-secondary sm:mt-28  mt-8 shadow-lg rounded-md'>
                        Contact us
                    </div>

                </div>
                <div className='sm:w-[50%] w-full flex  h-full  flex     '>
                    <div className='w-full sm:px-10 px-1  flex  sm:mt-20 mt-2   '>
                        <div className='w-full  h-full  rounded-md'>
                            <div class=" w-1/2 h-[65%]   flex    relative z-0">
                                <img src={About_6} alt='' className='sm:w-[300px] w-[150px] h-full  shadow-lg object-cover rounded-md' />
                                <div class="absolute  px-1 sm:top-20 top-10  sm:-right-[95%] -right-[90%] rounded-md  sm:h-[500px] h-[250px] w-full flex  z-10">
                                    <img src={About_7} alt='' className='w-full sm:h-full h-3/4  shadow-lg' />
                                </div>
                            </div>
                            <div class=" shadow-lg sm:w-[60%] w-[60%] h-[20%] border-primary border-2 rounded-md bg-secondary sm:-bottom-[5%] -bottom-[16%] flex items-center justify-center relative z-20">
                                <p class=" text-bold text-slate-100 sm:text-3xl text-center sm:font-bold font-semibold  ">
                                    Making What’s Possible in Human Resource
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex sm:h-[900px] w-full bg-slate-100 p-10 flex-col sm:px-60 px-2 '>
                <div className='flex flex-col gap-y-3 items-center justify-center h-[10%] w-full mx-2'>
                    <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold underline'>Our Business</h2>
                    <h2 className='capitalise text-black sm:text-5xl text-2xl font-semibold '>Stand Out From The Rest</h2>
                </div>
                <div className='w-full flex-col  sm:flex-row  flex h-[90%] '>
                    <div className='h-full sm:w-1/3 w-full '>
                        <div className='h-1/2   sm:p-4 p-1'>
                            <img src={why_us} alt='' className='h-full w-full rounded-lg shadow-lg  object-cover' />
                        </div>
                        <div className='h-1/2 sm:p-4 p-1'>
                            <div className='h-full w-full rounded-lg  py-10  shadow-lg bg-white px-10 flex justify-center items-center flex-col  '>
                                <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold  text-center '>Our Mission</h2>
                                <p className=' sm:text-[24px] text-justify'>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>

                            </div>
                        </div>
                    </div>
                    <div className='h-full sm:w-1/3 w-full '>
                        <div className='h-full sm:p-4 p-1'>
                            <div className='h-full w-full rounded-lg shadow-lg bg-white px-10  py-10 '>
                                <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold  text-center '>Our core values</h2>
                                <p className=' sm:text-[24px] text-justify'>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>
                                <ul className='list-[circle] list-primary leading-10 sm:text-[24px] px-6'>
                                    {corevalues.map((value, i) => (
                                        <li key={i}>{value}</li>
                                    ))}

                                </ul>
                                <div className='flex items-center shadow-lg sm:border relative sm:-bottom-40 z-10 justify-center bg-primary hover:bg-secondary font-bold sm:text-white text-black w-40 px-3 py-5 rounded-tr-[20px]  rounded-bl-[20px]'>
                                    Read More
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full sm:w-1/3 w-full '>
                        <div className='h-1/2 sm:p-4 p-1'>
                            <div className='h-full w-full rounded-lg shadow-lg bg-white px-10 flex justify-center  py-10  items-center flex-col '>
                                <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold  text-center '>Our Vision</h2>
                                <p className=' sm:text-[24px] text-justify'>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>

                            </div>
                        </div>
                        <div className='h-1/2   sm:p-4 p-1'>
                            <img src={mission} alt='' className='h-full w-full rounded-lg shadow-lg  object-cover' />
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex sm:h-[900px]  w-screen  bg-slate-600  bg-about-bg-2 bg-no-repeat  flex-col sm:px-60 px-2 '>
                <div className='w-full  h-3/4  flex  sm:my-40 my-10   '>
                    <div className='w-full  h-full border-primary border-2  shadow-2xl rounded-md'>
                        <div class=" w-full h-full relative z-0">
                            <img src={People} alt='' className='h-full w-full object-cover ' />

                            <div class="w-full absolute top-0 h-full flex  justify-center items-center bg-gradient-to-t from-black backdrop-brightness-50">
                            </div>
                            <div class="absolute flex-col  p-2 rounded-[25px] -top-10 shadow-3xl left-7 bg-white sm:w-1/4 w-1/2 h-3/4 sm:flex hidden  z-10">
                                {H.map((value, i) => (
                                    <div
                                        onMouseEnter={() => setAttribute(H[i])}
                                        key={i} className='sm:h-[10%] h:2 w-full  sm:text-2xl font-bold sm:px-10 px-1 text-gray-700 sm:py-10 hover:text-primary hover:animate-[wiggle_1s_ease-in-out_infinite] hover:pl-11 border-b flex items-center  '>
                                        0{i + 1}. {value}
                                    </div>
                                ))
                                }
                                <div className='flex items-center gap-x-2 sm:text-2xl text-[10px] group shadow-lg sm:border  justify-center
                                  sm:h-[20%] h-10  bg-primary hover:bg-secondary sm:font-bold font-semibold text-white  w-full px-3 py-5 rounded-[20px] '>
                                    <div className='sm:flex hidden justify-center items-center sm:w-[80px] w-[100px]  animate-wiggle  sm:h-[80px] h-[30px] bg-red-100 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                        </svg>

                                    </div> call for free consoltation
                                </div>
                            </div>
                            <div class="absolute flex-col  rounded-[25px] sm:gap-y-10  sm:top-[300px] top-0  shadow-3xl right-[50px]  w-[67%] sm:h-1/2 flex  z-10">
                                <div className='flex flex-col sm:gap-y-3  w-full '>
                                    <h2 className='capitalise text-white  sm:text-3xl sm:text-start text-center text-xl font-bold underline'>Our Business</h2>
                                    <h2 className='capitalise text-white sm:text-5xl text-xl font-semibold '>{attribute}</h2>
                                </div>
                                <p className=' sm:text-[24px] text-[10px] text-white'>
                                    Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex sm:h-[900px]  w-screen    py-20   flex-col sm:px-60 px-2 '>
                <div className='flex w-full h-[20%] '>
                    <div className='flex w-1/2 h-full '>
                        <div className='flex flex-col gap-y-3  h-full w-full mx-2'>
                            <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold underline'>Dedicated Team</h2>
                            <h2 className='capitalise text-black sm:text-5xl text-2xl font-semibold '>Professional Individuals</h2>
                        </div>
                    </div>
                    <div className='flex w-1/2 h-full '>
                        <p className='sm:text-[24px]'>
                            Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.
                        </p>
                    </div>

                </div>
                <div className='flex w-full h-[80%] bg-green-100 '>
                    <div className='h-full w-1/3 p-5 '>
                        <div className='w-full h-full  flex    '>
                            <div className='w-full  h-full border-primary border-2  bg-primary-dark shadow-2xl rounded-md'>
                                <div class=" w-full h-full relative z-0">
                                    <img src={mission} alt='' className='h-full w-full rounded-lg shadow-lg  object-cover' />

                                    {share ? <div onMouseEnter={() => setshare((prevState) => (!share))}
                                        onMouseLeave={() => setshare((prevState) => (!share))}
                                        class="absolute  rounded-b-full top-0 shadow-lg right-0 flex-col bg-primary h-1/2 w-20 flex  z-10">
                                             <div className='flex h-[20%] w-full bg-blue-100'></div>
                                            <div className='flex h-[20%] w-full bg-red-100'></div>

                                    </div> :

                                        <div onMouseLeave={() => setshare((prevState) => (!share))}
                                            onMouseEnter={() => setshare((prevState) => (!share))}
                                            class="absolute  rounded-b-full top-0 shadow-lg right-0 bg-primary h-36 w-20 flex  z-10">

                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full px-20 h-[1000px]  flex  mt-20   '>
                <div className='w-3/4  h-2/4 border-primary border-2  bg-primary-dark shadow-2xl rounded-md'>
                    <div class=" w-full h-full relative z-0">
                        <p class="italic text-bold  font-serif">Map</p>
                        <div class="absolute  rounded-full -bottom-1/2 shadow-3xl -right-1/4 bg-primary h-full w-full flex  z-10">
                            <div className='h-full w-1/3 bg-secondary rounded-l-full '></div>
                            <div className='h-full w-1/3 bg-primary-dark '></div>
                            <div className='h-full w-1/3 bg-secondary rounded-r-full  '></div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='w-3/4  h-[100px] bg-primary-dark shadow-2xl rounded-md'>

                </div> */}

        </Layout>
    );
}

export default About;
