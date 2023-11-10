import { Outlet } from "react-router-dom";


import Navbar from "../components/navbar";

export default function Root() {
    return (
        <>
            <div className="bg-black w-full ">
                <div className={`sm:px-26 px-10 flex justify-center items-center`}>
                    <div className={`xl:max-w-[1280px] w-full`}>
                        <Navbar />
                        {/* <Crumb? /> */}
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    );
}