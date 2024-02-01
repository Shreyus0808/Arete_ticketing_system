import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import user from "../images/user.png"


function Tickets() {
    return (
        <>
            <div className='w-full h-screen p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]'>
                <div className='flex justify-between pb-1.5'>
                    <h2 className=' font-sans font-bold text-3xl text-[#AAAAAA]'>Tickets</h2>
                    <img src={user} className='w-10 h-10 z-10'></img>
                </div>
                <div className='flex flex-col justify-between px-0 p-4'>
                    <div className='bg-white p-2 rounded-xl'>

                    </div>

                </div>

            </div>

        </>
    );
};

export default  Tickets;