import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className='md:h-[700px] mt-80 md:mt-16 bg-[#252525] section-design'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-10 px-10'>
                <div className='w-full md:w-4/5'>
                    {/* 1st part */}
                    <p className=''>Subscribe to Aesop communications</p>
                    <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                    <div className="relative my-4">
                        <label for="email" className="leading-7 text-sm "></label>
                        <input type="email" placeholder='Email Address' id="email" name="email" className="w-full bg-transparent rounded banner-button_footer  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex flex-row-reverse">
                        <label className='cursor-pointer label'>
                            <input type="radio" checked="checked" className="absolute top-0 right-0 mt-2 mr-2 checkbox checkbox-default" /></label>
                        <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
                    </div>
                    <div className='my-3 md:my-10 hidden md:block'>
                        <p className=''>Sustainability</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.<a href="https://www.aesop.com/hk/en/r/sustainability/"> Learn more</a></p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
                    <div className=''>
                        <p className=''>Orders and support</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#fffef2]">Contact Us</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">FAQs</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Shipping</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Order History</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Terms and Conditions</a>
                            </li>
                        </nav>
                    </div>
                    <div className=''>
                        <p className=''>Services</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#fffef2]">Live assistance</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Corporate gifts</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Facial Appointments</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Click and Collect</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Video consultation</a>
                            </li>
                        </nav>
                    </div>
                    <div className=''>
                        <p className=''>Location preferences</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#fffef2]">Shipping</a>
                            </li>
                            <li className="text-[#fffef2] underline">Hong Kong SAR, China</li>
                            <li>
                                <a className="text-[#fffef2]">Language</a>
                            </li>
                            <li className="text-[#fffef2] underline">English
                            </li>
                            <li>
                                <a className="text-[#fffef2]">繁體中文</a>
                            </li>
                        </nav>
                    </div>
                    <div className='visible md:hidden'>
                        <p className=''>Sustainability</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.<a href="https://www.aesop.com/hk/en/r/sustainability/"> Learn more</a></p>
                    </div>
                    <div className=''>
                        <p className=''>About</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#fffef2]">Our story</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Foundation</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Careers</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Privacy policy</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Accessibility</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Cookie Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className='hidden md:block'>
                        <p className=''>Social Media</p>
                        <div className="border-2 bg-[#fffef2] rounded my-5"></div>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#fffef2]">Instagram</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Twitter</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Facebook</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">WeChat</a>
                            </li>
                            <li>
                                <a className="text-[#fffef2]">Weibo</a>
                            </li>
                        </nav>

                    </div>
                </div>


            </div>
            <div className="border-2 w-full bg-white rounded mt-20"></div>
            <div className='px-4 py-2 md:w-[700px]'><h2 className='text-2xl text-opacity-80 mb-0'>A<span className='overline mt-0'>e</span>sop</h2></div>
        </section>
    );
};

export default Footer;