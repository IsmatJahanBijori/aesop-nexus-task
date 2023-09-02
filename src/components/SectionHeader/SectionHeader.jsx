import React from 'react';
import { BiSolidRightArrowAlt } from 'react-icons/bi';
const SectionHeader = ({ title, subtitle, desc, topic }) => {
    return (
        <div className='flex flex-col md:w-2/6 mt-72 md:mt-0 mx-10 md:py-20 md:px-16'>
            <p className='text-sm'>{title}</p>
            <p className='text-2xl font-serif mb-5 mt-2'>{subtitle}</p>
            <p className='text-lg'>{desc}</p>
            <div className="flex items-center"><button><a href="https://www.aesop.com/hk/en/c/body-hand/body/" className="flex items-center"><span>See all {topic} Care</span><BiSolidRightArrowAlt className="w-5 h-5 ml-1" /> </a></button></div>
        </div>
    );
};

export default SectionHeader;