import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Skin = () => {

    const [skinData, setSkinData] = useState([])

    useEffect(() => {
        fetch("skindata.json").then(res => res.json()).then(data => setSkinData(data))
    }, [])
    return (
        <div>
            <SectionHeader title={"For the skin"} subtitle={"Attention for all types"} desc={"The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types."} topic={"Skin Care"} />
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    skinData.map(data =>
                        <SwiperSlide>
                            <img src={data.img} alt="" className='h-[320px] mx-auto mt-10' />
                            <div className='mx-auto'>
                                <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >{data.skinTitle}</a></p>
                                <p className="text-center">{data.skinSubtitle}</p>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>


        </div>
    );
};

export default Skin;

{/** <SectionHeader title={"For the skin"} subtitle={"Attention for all types"} desc={"The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types."} topic={"Skin Care"} />
                <div className='flex flex-col md:flex-row md:ml-60'>
                    <div className='flex flex-col  '>
                        <img src="https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png" alt="" className='h-[320px]' />
                        <div className='mx-auto'>
                            <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >Nurture Bar Soap</a></p>
                            <p>Offers a mild yet effective cleanse</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/1FyE6PfEJ6wMCfJ5ihJYgy/b9f2cb90e0e43a6b8f5a7c7a12498239/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Small_459x545px.png" alt="" className='h-[320px]' />
                        <div className='mx-auto'>
                            <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >Nurture Bar Soap</a></p>
                            <p>Offers a mild yet effective cleanse</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/5EM8cNCKUmSUw5Ad9vg3d1/73b569f7bcb04bafc22cd73e519d3f2a/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png" alt="" className='h-[320px]' />
                        <div className='mx-auto'>
                            <p className="text-center"><a href='https://www.aesop.com/hk/en/p/body-hand/body/nurture-bar-soap/' >Nurture Bar Soap</a></p>
                            <p>Offers a mild yet effective cleanse</p>
                        </div>
                    </div>
                </div> */}