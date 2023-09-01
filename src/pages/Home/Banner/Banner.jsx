import React from 'react';
import './Banner.css'
//w-[575px] sm:[767px] md:[991px] lg:[1199px] xl:[1399px] xxl:[1700px]
import { BiRightArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
const Banner = () => {
    return (
        <div className=''>
            <div class="relative ">
                <img src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg" className='image' alt="image" />
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='absolute top-20 bottom-0 left-0 ml-20  px-4 py-2 md:w-[700px]'><h2 className='text-4xl text-opacity-80 text-[#fffef2]'>A<span className='overline mt-0'>e</span>sop</h2></div>
                    <div className="absolute top-20 bottom-0 left-0 ml-80 px-4 py-2 md:w-[700px]">
                        <p className='text-xl text-[#fffef2] '>Bar Soaps</p>
                        <h3 className="text-3xl text-[#fffef2] font-normal leading-loose">A body care classic, reimagined</h3>
                        <p className="mt-2 text-xl text-gray-300 mb-10">Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                        <div>
                            <button className='btn btn-[#fffef2] text-[#fffef2] banner-button button-banner1 '>Discover Bar Soaps <BiSolidRightArrowAlt className='w-5 h-5' /></button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
