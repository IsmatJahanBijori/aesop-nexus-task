import React, { useState } from 'react';
import './Navbar.css'
import { AiOutlineHeart } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx"
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const handleMenu = () => {
        setNavbar(true)

    }
    return (
        <section>
            {/*First gray part */}

            <div className='w-full AlertBanner_AlertBanner-learnMoreLink__jqUKd text-start md:text-center '>
                <p className='w-[638px] h-[42px] md:w-auto md:h-auto'>Trained Aesop consultations are available to provide bespoke skin care advise.
                    <a href="https://www.aesop.com/hk/en/r/live-video-consultations/">Book a video consultation</a></p>
            </div>

            {/*Second black part */}

            <div className='w-full text-start md:text-center ShippingBanner_BannerContent__UGcUb ShippingBanner_BannerContent--expandable__r9wUZ'>
                <button className='ShippingBanner_ShippingBanner-openModalBtn__Od1j6 text-white button1'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400</button>
            </div>

            {/*Third part for md device */}
            <section>
                <div className="navbar bg-base-100 GlobalNavigation_base__dRjVn h-20 hidden">
                    <div className="navbar-start">
                        <ul className="flex flex-row gap-5 items-center pl-5">
                            <li><a>Skin Care</a></li>
                            <li><a>Body & Hand</a></li>
                            <li><a>Hair</a></li>
                            <li><a>Fragrance</a></li>
                            <li><a>Home</a></li>
                            <li><a>Kits & Travel</a></li>
                            <li><a>Gifts</a></li>
                            <li><a>Read</a></li>
                            <li><a>Stores</a></li>
                            <li><a>Facial Appointments</a></li>
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </ul>

                    </div>

                    <div className="navbar-end ">
                        <ul className="flex flex-row gap-5 items-center pr-5">
                            <li><a>Login</a></li>
                            <li><a>Cabinet</a></li>
                            <li><a>Cart</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Mobile part */}
            <section>

                <div className='flex flex-row md:hidden items-center'>
                    {
                        navbar ? "" : <div className='navbar'>
                            <div className='absolute'><h2 className='text-2xl text-opacity-80 text-[#333]'>A<span className='overline mt-0'>e</span>sop</h2></div>
                        </div>
                    }

                    <div className="navbar-end ">
                        <ul className="flex flex-row gap-5 items-center pr-5">
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <li><AiOutlineHeart className='w-6 h-6' /></li>
                            <li><a>Cart</a></li>
                            <button className="menu-icon" onClick={handleMenu}>
                                {navbar ? (
                                    <RxCross2 />
                                ) : (
                                    <HiMenuAlt4 />
                                )}
                            </button>
                        </ul>
                        {
                            navbar && (
                                <section>
                                    <ul className="flex flex-col gap-5 pl-5 w-full">
                                        <h2 className='text-2xl text-opacity-80 text-[#333]'>A<span className='overline mt-0'>e</span>sop</h2>
                                        <hr />
                                        <li><a>Skin Care</a></li>
                                        <hr />
                                        <li><a>Body & Hand</a></li><hr />
                                        <li><a>Hair</a></li><hr />
                                        <li><a>Fragrance</a></li><hr />
                                        <li><a>Home</a></li><hr />
                                        <li><a>Kits & Travel</a></li><hr />
                                        <li><a>Gifts</a></li><hr />
                                        <li><a>Read</a></li><hr />
                                        <li><a>Stores</a></li><hr />
                                        <li><a>Facial Appointments</a></li><hr />
                                    </ul>
                                </section>
                            )
                        }
                    </div>
                </div>

            </section>
        </section>
    );
};

export default Navbar;