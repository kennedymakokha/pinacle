import React, { useState } from 'react';
import './../../App.css';
import TitleComponent, { PargraphComponent } from '../displaycomponts';




const ServiceContainer = (props) => {
    const { setIsHovered, corevalues, arr, data, item, setItem } = props
    const { backdrop } = data
    const { isHovered } = item
    const [index, setindex] = useState(0);

    const hover = () => {
        setItem(prevState => ({
            ...prevState, isHovered: !prevState.isHovered
        }))

    }
    useState(() => {

        setItem(data)
    }, [])
    console.log(data)
    return (< div className='sm:w-1/3 w-full  h-full  p-10' >
        <div className='w-full  h-full flex  group   '>
            <div className='w-full  h-full border-primary border-2  bg-primary shadow-lg rounded-md'>
                <div class=" w-full h-full flex-col flex    relative z-0">
                    <img src={`${backdrop}`} alt='' className='h-2/3 w-full object-cover' />
                    <div className='h-1/3 py-5 w-full gap-y-3 flex flex-col'>
                        <TitleComponent center={true} color="white" title={data.title} />
                        <PargraphComponent color="white" content="The easy cases are perfectly simple and easy to distinguish" />
                    </div>

                    <div class="absolute   top-0 shadow-lg p-5 flex items-center justify-center  h-full w-full flex   z-10">
                        <div
                            onMouseEnter={() => hover()}
                            // onMouseLeave={() => setIsHovered(false)}
                            className={`fade-in-container ${arr[index]?.isHovered ? 'hovered' : ''} flex w-full h-full flex-col  rounded-md bg-white`}>
                            <div className='w-full h-1/3 flex items-center justify-center  my-2 '>
                                <div className='w-1/2 border h-full flex items-center justify-center  rounded-md '></div>
                            </div>
                            {props.data.overLay}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div >)
}





export default ServiceContainer;
