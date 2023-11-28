
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Layout(props) {
    return (
        <div className='w-full h-auto flex-col flex'>
            <Navbar transparent={true} />
            {props.children}
            <div className='flex sm:h-[200px] bg-primary   w-full    py-10   flex-col sm:px-60 px-2 '>
                <div className=' h-full w-full'>
                    <div className='border-l-[8px] flex  border-white h-full w-full'>
                        <div className='flex flex-col  px-2 gap-y-5 w-1/2 '>
                            <h2 className='capitalise text-white  sm:text-5xl  text-2xl font-semibold '>Join Our Mailing Listen</h2>
                            <h2 className='capitalise text-white  sm:text-xl  font-bold '>For receiving our news and updates in your inbox directly.</h2>
                        </div>
                        <div className='flex   px-2 gap-y-5 w-1/2 h-full  justify-center items-center  '>
                            <input type="text" placeholder='Your Email Address' className='flex px-4 w-3/4 h-1/2 bg-red-100  rounded-tl-[18px]' />
                            <div className=' w-1/4 bg-secondary text-xl text-white font-bold flex justify-center  items-center   h-1/2 rounded-br-[18px]'>
                                Subscribe
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Layout;
