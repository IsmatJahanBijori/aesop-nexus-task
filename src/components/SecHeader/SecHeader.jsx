import React from 'react';
import { BiSolidRightArrowAlt } from 'react-icons/bi';

const SecHeader = ({ title, subtitle, desc, topic, img }) => {
    return (
        <div className='flex flex-col  mt-72 md:mt-0 mx-10 md:py-20 md:px-16 md:flex-row'>
            <div className='md:w-1/2'>
                <p className='text-sm'>{title}</p>
                <p className='text-2xl font-serif mb-5 mt-2'>{subtitle}</p>
                <p className='text-lg'>{desc}</p>
                <div className="flex items-center border-black-2 hover:bg-black hover:text-white w-fit mt-5"><button><a href="https://www.aesop.com/hk/en/c/body-hand/body/" className="flex items-center"><span>{topic}</span><BiSolidRightArrowAlt className="w-5 h-5 ml-1" /> </a></button></div>
            </div>

            <div className='md:w-1/2'>
                <img src={img} alt="" className='w-[2500px] h-[700px]' />
            </div>
        </div>
    );
};

export default SecHeader;