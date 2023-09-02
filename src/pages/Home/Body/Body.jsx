import React, { useEffect } from 'react';
// import './Body.css'
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import AOS from 'aos';

const Body = () => {
    useEffect(() => {
        AOS.init({
            duration: 300,

        });
    }, [])
    return (
        <div data-aos="zoom-in">
            <SectionHeader title={"For the body"} subtitle={"An expression of care"} desc={"Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma."} topic={"Body"} />
            <div className='flex flex-col md:flex-row md:ml-60'>
                <div className='flex flex-col  '>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/7GOcMuzhepgAOwZicR9myA/389f68dc37e95c7ca421a1796e06dd1f/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_X-Large_3000x1822px.png" alt="" className='h-[320px]' />
                    <div className='mx-auto'>
                        <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >Nurture Bar Soap</a></p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" alt="" className='h-[320px]' />
                    <div className='mx-auto'>
                        <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >Nurture Bar Soap</a></p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/5wsll4MFHzmjBlZxIsIqlv/9372ee98ebcb4ea841eab31a4767a869/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Medium_1000x608px.png" alt="" className='h-[320px]' />
                    <div className='mx-auto'>
                        <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >Nurture Bar Soap</a></p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Body;

{/**<div>
            <SectionHeader title={"For the body"} subtitle={"An expression of care"} desc={"Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma."} topic={"Body"}/>
            <div className='flex flex-row'>
            <img src="https://www.aesop.com/u1nb1km7t5q7/7GOcMuzhepgAOwZicR9myA/389f68dc37e95c7ca421a1796e06dd1f/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_X-Large_3000x1822px.png" alt="" className='h-[320px]'/>
            <img src="https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" alt=""  className='h-[320px]'/>
            <img src="https://www.aesop.com/u1nb1km7t5q7/5wsll4MFHzmjBlZxIsIqlv/9372ee98ebcb4ea841eab31a4767a869/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Medium_1000x608px.png" alt=""  className='h-[320px]'/>
            </div>

        </div> */}
