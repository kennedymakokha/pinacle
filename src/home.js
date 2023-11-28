import React from "react";
import Navbar from "./components/navbar";
import Img from './assets/Workspace_1.jpg'
import Cam from './assets/services/cameras.jpg'
import Fire from './assets/services/fire.jpg'
import Nangs from './assets/logos/eldoret.jpg'
import Eldoret from './assets/logos/nangili.png'
import Footer from "./components/footer";

const CardContainer = (props) => {
    return (

        <div className="bg-transparent w-full h-full relative z-0   ">
            <img src={Img} alt={props.data.title} className="h-full object-cover rounded-md" />
            {/* <div className="absolute top-3 flex justify-start gap-x-2 px-2 items-between   w-full z-10">
                <div className=" py-1 px-3 bg-primary rounded-md shadow-2xl flex items-center justify-center">One</div>
                <div className=" py-1 px-3 bg-success rounded-md shadow-2xl flex items-center justify-center">Two</div>
            </div> */}
            <div className="absolute bottom-10 flex-col bg-slate-100 sm:w-[95%] w-[86%]  mx-2 flex items-center justify-center h-1/3 rounded-md items-center z-10">
                <div className="flex flex-col w-full">
                    <p className="text-xl font-semibold text-center ">{props?.data?.title}</p>
                    <p className="  text-center ">{props?.data?.desc}</p>
                </div>

            </div>
        </div>

    )
}

const Services = [
    {
        title: 'CCTV Range Equipment',
        image: Cam,

        desc: 'This should be on top of the map'
    },
    {
        title: 'Fire Alarm/lighting Arresters',
        image: Fire,

        desc: 'This should be on top of the map'
    },
    {
        title: 'Fire Extinguishers',
        image: Img,

        desc: 'Water/Powder/CO2/Chemical'
    },
    // {
    //     title: 'CCTV Range Equipment',
    //     image: Img,

    //     desc: 'This should be on top of the map'
    // }
]


const clients = [
    {
        title: 'Moi Girls Nangili',
        logo: Eldoret
    },
    {
        title: 'Moi Girls Eldoret',
        logo: Nangs
    },
    {
        title: 'Wareng\' hIgh Scghool',
        logo: Eldoret
    },
    {
        title: 'Moi Girls Nangili',
        logo: Eldoret
    },
    {
        title: 'Moi Girls Eldoret',
        logo: Nangs
    },
    {
        title: 'Wareng\' hIgh Scghool',
        logo: Eldoret
    }
]

function Home(props) {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="w-screen h-screen ">
                <div className="sm:bg-ws bg-sm-ws bg-no-repeat w-full h-full relative z-0">

                    <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center z-10">
                        <Navbar />
                        <div className=" absolute rounded-bl-[60px] rounded-tr-[60px] sm:top-[300px] top-[200px] sm:left-10  flex  
                        items-center justify-center sm:bg-slate-100  sm:w-[800px] w-full h-96  -z-10">

                            <div className="  flex justify-center sm:gap-y-10 gap-y-2 flex-col items-center content-center ">
                                <p className="sm:text-5xl text-3xl font-bold text-primary">Rent-A-Shelf</p>

                                <p className=" sm:text-3xl text-xl text-primary-light">Connecting businesses, shelf by shelf</p>
                                <div className="flex justify-center items-center font-bold bg-secondary hover:bg-secondary-light shadow-2xl rounded-md py-2  px-3 text-white ">
                                    Explore Shelves
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen  flex flex-col  h-auto">
                <div className="sm:h-1/2 h-full w-full bg-red-100 flex ">
                    <div className="w-full  flex h-full sm:flex-row  items-center justify-center flex-col bg-slate-200  sm:px-20">
                        <div className="sm:h-full h-20 sm:w-1/3 w-full  flex items-center justify-center flex-col ">
                            <h1 className="font-bold text-3xl text-primary">Our Services</h1>
                            <p>Our Services</p>
                        </div>
                        <div className="h-full sm:w-2/3 w-full sm:flex-row flex-col flex  sm:gap-x-5 ">
                            {Services.map((serve, i) => (
                                <div key={i} className="h-full sm:w-1/3  w-full flex  py-5">
                                    <CardContainer data={serve} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sm:h-1/4 h-full w-full py-5 bg-white sm:px-20">
                    <div className="items-center sm:py-5 py-5 justify-center  font-semibold text-3xl text-primary underline flex"> Our Clients</div>
                    <div className="w-full h-3/4  sm:flex-row flex-col gap-y-2 float-right sm:gap-x-1 gap-y-5 flex">
                        {clients.map((client, i) => (
                            <div key={i} className="sm:w-1/6 w-full group flex-col  flex items-center justify-center h-full">
                                <div className="w-[150px] h-[150px] rounded-full  bg-[url('./assets/logos/eldoret.jpg')] bg-cover bg-center">
                                    <div className="w-full h-full rounded-full flex  justify-center items-center backdrop-brightness-50">
                                        <span className="text-white group-hover:flex hidden text-[16px] w-1/2 text-center">{client.title}</span>
                                    </div>
                                </div>
                                <span className="text-primary sm:hidden flex  justify-center items-center  text-[16px] w-1/2 text-center">{client.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div >

    );
}

export default Home;
