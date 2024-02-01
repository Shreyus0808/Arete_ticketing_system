import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import user from "../images/user.png"


function Tickets() {
    return (
        <>
            <div className='w-full h-screen p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]'>
                <div className='flex justify-between py-2 pb-5'>
                    <h2 className=' font-sans font-bold text-3xl text-[#AAAAAA]'>Tickets</h2>
                    <img src={user} className='w-10 h-10 z-10'></img>
                </div>
                <div className='flex flex-col space-y-3 justify-between px-0 p-4'>
                    <div className='bg-white flex py-4 justify-between space-x-10 px-10 rounded-xl'>
                        <h3 className='font-bold'>ID</h3>
                        <h3 className='font-bold px-4'>Ticket Status</h3>
                        <h3 className='font-bold pr-40'>Description</h3>
                        <h3 className='font-bold pr-10'>Assigned By</h3>
                        <h3 className='font-bold pr-5'>Project</h3>
                        <h3 className='font-bold px-5'>Priority</h3>
                        <h3 className='font-bold '>ETA</h3>
                    </div>
                    <div className='bg-white rounded-xl'>
                        <table className='flex flex-col divide-y-[3px] px-5 divide-[#aaaaaa]'>
                        <tr className='flex py-4 justify-between space-x-10 px-5'>
                        <h3 className=''>85</h3>
                        <h3 className=' px-4 '>Ticket Status</h3>
                        <h3 className=' pr-40'>Description</h3>
                        <h3 className=' pr-10'>Assigned By</h3>
                        <h3 className=' pr-5'>Project</h3>
                        <h3 className=' px-5'>Priority</h3>
                        <h3 className=' '>ETA</h3>
                        </tr>

                        </table>
                    </div>
                </div>

            </div>

        </>
    );
};

export default  Tickets;