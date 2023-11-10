import React from "react";
import Logo from './../assets/logo_1.png'


import twitter from './../assets/social/twitter.png'
import Fb from './../assets/social/fb.png'
import Instagram from './../assets/social/instagaram.jpg'
import Linkdn from './../assets/social/link.png'
import { Link } from "react-router-dom";


const Social = [
    Linkdn, Fb, Instagram, twitter
]


function Footer(props) {
    return (

        <div className="h-[200px] flex  w-full bg-secondary-100  sm:px-20">

            <div className=" h-full   w-full  flex sm:flex-row  flex-col">
                {/* <div className="h-full sm:w-1/3 w-full bg-secondary-100 flex flex col  border-r border-primary ">
                    <div className="flex justify-center flex-col  items-center h-full w-full  ">
                        <img src={Logo} alt="" className="h-1/6 mt-5  bg-slate-100 " />
                        <div className="flex items-center justify-center w-full text-white ">Daima Towers 2nd flow Rm 201 </div>
                        <div className="flex items-center justify-center w-full text-white ">info@pinnacle.co.ke </div>
                        <div className="flex items-center justify-center w-full text-white ">0714415588 </div>
                        <div className="flex items-center justify-center w-full gap-x-2 ">
                            {Social.map((soci, i) => (
                                <img src={soci} alt="" className="flex  h-[20px] object-contain   my-1 " />
                            ))}
                        </div>
                    </div>
                </div> */}

                <div className="h-full sm:w-1/ w-full bg-secondary-100 flex flex col  border-r border-primary ">

                    <div className="flex justify-center flex-col  items-center h-full w-full  ">
                        <img src={Logo} alt="" className="h-1/6 mt-5  bg-slate-100 " />
                        <div className="flex items-center justify-center w-full text-white ">Daima Towers 2nd flow Rm 201 </div>
                        <div className="flex items-center justify-center w-full text-white ">info@pinnacle.co.ke </div>
                        <div className="flex items-center justify-center w-full text-white ">0714415588 </div>
                        <div className="flex items-center justify-center w-full gap-x-2 ">
                            {Social.map((soci, i) => (
                                <img src={soci} alt="" className="flex  h-[20px] object-contain   my-1 " />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-full sm:w-1/ w-full bg-secondary-100 flex flex col  border-r border-primary ">
                    <div className="flex justify-center flex-col  items-center h-full w-full  ">
                        <div className="h-1/6 mt-5 text-primary font-bold " >
                            Quick Links
                        </div>
                        <div className="flex justify-start pl-20 flex-col  items-start  w-full  ">
                            <Link to="" className="flex  hover:text-secondary-light text-left text-white ">About us </Link>
                            <Link to="" className="flex  hover:text-secondary-light text-left text-white ">Careers </Link>
                            <Link to="" className="flex  hover:text-secondary-light text-left text-white ">Services </Link>
                        </div>
                    </div>
                </div>
                <div className="h-full sm:w-1/ w-full bg-secondary-100 flex flex col  border-r border-primary ">
                    <div className="flex justify-center flex-col  items-center h-full w-full  ">
                        <div className="h-1/6 mt-5 text-primary font-bold " >
                            Newsletter
                        </div>
                        <div className="flex justify-center items-center flex-col w-full ">
                            <input type="text" placeholder="Email" className="w-3/4 h-10 bg-slate-100 my-2" />
                            <div className="flex justify-center items-center ">Text</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Footer;
