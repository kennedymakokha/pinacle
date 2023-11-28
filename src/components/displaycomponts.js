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


function TitleComponent(props) {
    return (

        <div className={`flex flex-col gap-y-3 ${props.center && "items-center justify-center h-[10%] w-full mx-2"}`}>
            {props.title && <h2 className={`capitalise text-${props.color ? props.color : "primary"}  sm:text-3xl text-xl font-bold ${!props.underline && "underline"}`}>{props.title}</h2>}
            {props.megaTitle && <h2 className='capitalise text-black sm:text-5xl text-2xl font-semibold '>{props.megaTitle}</h2>}
        </div>
        // <div className='flex flex-col gap-y-3'>
        //     {props.title && <h2 className='capitalise text-primary  sm:text-3xl text-xl font-bold underline'>{props.title}</h2>}
        //     {props.megaTitle && < h2 className='capitalise text-black sm:text-5xl text-2xl font-semibold '>{props.megaTitle}</h2>}
        // </div >


    );
}


export function PargraphComponent(props) {
    return (
        <p className={` sm:text-[24px] px-2 text-${props.color} text-justify`}>{props.content}</p>
    );
}


export function ListItem(props) {
    return (
        <ul className='list-[circle] list-primary pl-10 leading-10 sm:text-[24px] px-6'>
            {props.listitems.map((value, i) => (
                <li key={i}>{value}</li>
            ))}

        </ul>
    )
}




export default TitleComponent;
