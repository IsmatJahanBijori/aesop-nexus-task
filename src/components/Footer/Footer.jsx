import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className='md:h-[700px] mt-16 bg-[#252525] section-design'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-10 px-10'>
                <div className='w-4/5'>
                    {/* 1st part */}
                    <p className=''>Subscribe to Aesop communications</p>
                    <div class="h-1 bg-[#fffef2] rounded my-5"></div>
                    <div class="relative my-4">
                        <label for="email" class="leading-7 text-sm "></label>
                        <input type="email" placeholder='Email Address' id="email" name="email" className="w-full bg-transparent rounded banner-button_footer  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative flex flex-row-reverse">
                        <label className='cursor-pointer label'>
                            <input type="radio" checked="checked" class="absolute top-0 right-0 mt-2 mr-2 checkbox checkbox-default" /></label>
                        <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
                    </div>
                    <div className='my-20'>
                        <p className=''>Sustainability</p>
                        <div class="h-1 bg-[#fffef2] rounded my-5"></div>
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.<a href="https://www.aesop.com/hk/en/r/sustainability/"> Learn more</a></p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3'>
                    <div className=''>2 Lorem ipsum dolor sit amet consecteturgiat nulla consequuntur facilis dolor nihil. Hic provident voluptatibus voluptates veniam. Repellendus perferendis nulla culpa amet libero quidem atque doloribus, magnam, voluptatibus earum facilis possimus explicabo. Quod, eius eaque!</div>
                    <div className=''>3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, natus!</div>
                    <div className=''>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto.</div>
                </div>
            </div>
            <div class="h-1 w-full bg-white rounded mt-20"></div>
            <div className='px-4 py-2 md:w-[700px]'><h2 className='text-2xl text-opacity-80 mb-0'>A<span className='overline mt-0'>e</span>sop</h2></div>
        </section>
    );
};

export default Footer;