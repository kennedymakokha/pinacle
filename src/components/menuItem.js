import { Link } from 'react-router-dom';
import './styles.css'
import React from 'react';
function NavItem(props) {
    return (
        <div className="group inline-block">
            <Link to={props?.data?.href}
                className="
                font-montserrat  hover:underline underline-offset-8  text-primary hover:text-primary-light leading-normal text-lg text-slate-gray
                outline-none focus:outline-none px-3 py-1  rounded-sm flex items-center min-w-32"
            >
                <span className="pr-1 font-semibold flex-1">{props.title}</span>
                {props.data.children && <span>
                    <svg
                        className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                    </svg>
                </span>}
            </Link>
            {props.data.children && <ul
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32"
            >
                {props?.data?.children?.map((child, i) => (
                    <li key={i} className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <Link to={child?.href}
                            className="w-full text-left flex items-center outline-none focus:outline-none"
                        >
                            <span className="pr-1 flex-1 font-semibold  font-montserrat text-primary hover:text-primary-light">{child.label}</span>
                            {child.children && <span className="mr-auto">
                                <svg
                                    className="fill-current h-4 w-4
        transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </span>}
                        </Link>
                        <ul
                            className="bg-white border rounded-sm absolute top-0 right-0 
        transition duration-150 ease-in-out origin-top-left
        min-w-32
        "
                        >
                            {child.children.map((child, i) => (
                                <li key={i} className="px-3 py-1 font-semibold  font-montserrat text-primary hover:text-primary-light  hover:bg-gray-100">{child.label}</li>
                            ))}

                            {/* <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                <button
                                    className="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                    <span className="pr-1 flex-1">Python</span>
                                    <span className="mr-auto">
                                        <svg
                                            className="fill-current h-4 w-4
        transition duration-150 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul
                                    className="bg-white border rounded-sm absolute top-0 right-0 
        transition duration-150 ease-in-out origin-top-left
        min-w-32
        "
                                >
                                    <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                                    <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                                </ul>
                            </li> */}

                        </ul>
                    </li>
                ))}

            </ul>}
        </div>
    );
}

export default NavItem;
