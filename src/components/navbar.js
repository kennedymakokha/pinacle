"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../hooks/scrollhook";
import Logo from './logo_1.png'
import './styles.css'
import NavItem from "./menuItem";
const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { href: "/", label: "Home" },
        // {
        //     href: "", label: "Rental shelves", children: [
        //         {
        //             href: "", label: "Rental type", children: [
        //                 { href: "/rent-a-shelf", label: "Rent a Shelf", },
        //                 { href: "#", label: "Pick Up Point", },
        //                 { href: "#", label: "Drop Off Point", },
        //                 { href: "#", label: "Percel Sending errands", },
        //                 { href: "#", label: "Storage Units ", },
        //                 { href: "#", label: "WareHouse", },

        //             ]
        //         },
        //         { href: "#about-us", label: "Rental City", children: [] }
        //     ]
        // },
        { href: "/about-us", label: "About Us" },
        { href: "/our-services", label: "Services" },
        { href: "/contact-us", label: "Contact Us" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()
    return (
        <>
            <header
                className={classNames(
                    scrollPosition > 0 ? 'shadow' : 'shadow-none',
                    props.transparent && 'bg-slate-100',
                    scrollPosition < 10 && !props.transparent ? 'bg-transparent' : 'bg-slate-100',
                    'sm:px-8 px-4 py-2 z-10 w-full  fixed top-0 w-full',
                )}
            // className="sm:px-8 px-4 py-2 z-10 w-full  fixed top-0 w-full"
            >
                <nav className="flex justify-between items-center max-container">
                    <a href="/" className="text-3xl font-bold">
                        <img src={Logo} className="h-[60px]" alt="" />
                    </a>

                    <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden">
                        {navLinks.map((item) => (
                            <NavItem key={item.label} title={item.label} data={item} />
                            // <li key={item.label}>
                            //     <a
                            //         href={item.href}
                            //         className="font-montserrat  hover:underline underline-offset-8 font-bold text-primary hover:text-primary-light leading-normal text-lg text-slate-gray"
                            //     >
                            //         {item.label}
                            //     </a>
                            // </li>
                        ))}
                    </ul>
                    {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                        <a href="/">Sign in</a>
                        <span>/</span>
                        <a href="/">Explore now</a>
                    </div> */}
                    <div
                        className="hidden max-lg:block cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        <RxHamburgerMenu className="text-4xl" />
                    </div>
                </nav>
            </header>
            {isMenuOpen && (
                <div>
                    <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
                        <div
                            className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            <AiOutlineClose className="text-4xl" />
                        </div>
                        <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                            {navLinks.map((item) => (
                                <NavItem key={item.label} title={item.label} data={item} />
                                // <li key={item.label}>
                                //     <a
                                //         href={item.href}
                                //         className="font-montserrat leading-normal text-lg text-slate-gray"
                                //     >
                                //         {item.label}
                                //     </a>
                                // </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};
export default Navbar;
