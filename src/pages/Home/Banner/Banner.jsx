import React from 'react';
import './Banner.css'
//w-[575px] sm:[767px] md:[991px] lg:[1199px] xl:[1399px] xxl:[1700px]
import {  BiSolidRightArrowAlt } from "react-icons/bi";
const Banner = () => {
    return (

        <div class="relative ">
            <img src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg" className='w-full mb-14 md:mb-0' alt="image" />
            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className='hidden md:block absolute top-20 bottom-0 left-0 ml-20  px-4 py-2 md:w-[700px]'><h2 className='text-4xl text-opacity-80 text-[#fffef2]'>A<span className='overline mt-0'>e</span>sop</h2></div>
                <div className="absolute top-20 bottom-0 mb-60 md:mb-0 left-0 mt-[90px] md:mt-0 md:ml-80 px-4 py-2 w-full h-[300px] md:w-[700px] bg-black bg-opacity-80 md:bg-transparent">
                    <p className='text-sm md:text-xl text-[#fffef2] '>Bar Soaps</p>
                    <h3 className="text-lg md:text-3xl text-[#fffef2] font-normal leading-loose">A body care classic, reimagined</h3>
                    <p className="mt-2 text-xl text-gray-300 mb-10">Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                        <button className='btn btn-[#fffef2] text-[#fffef2] banner-button button-banner1 '>Discover Bar Soaps <BiSolidRightArrowAlt className='w-5 h-5' /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
