
import React from 'react';

function BreadCrump(props) {
    return (
        <div class=" w-full sm:h-[400px] h-32 relative z-0">
            <img src={props.image} className='object-cover h-full  w-full ' alt="" />
            <div class="w-full absolute top-0 h-full flex  justify-center items-center backdrop-brightness-50">
            </div>
            <div class="absolute flex-col sm:left-[30%] left-28 sm:right-[30%] right-28 sm:h-20 h-10 rounded-lg sm:bottom-1/4 bottom-2 opacity-70 flex justify-center items-center z-10">
                <p class="sm:text-5xl font-bold text-white">{props.name}</p>
                <div className='sm:flex hidden justify-end w-full px-10 '>
                    <p class="sm:font-bold font-semibold text-right text-slate-600  hover:text-white ">Home</p> | <p class="sm:font-bold font-semibold text-right ">{props.title}</p>
                </div>

            </div>

        </div>
    );
}

export default BreadCrump;
