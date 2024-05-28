import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ServiceBoardProps {
    image: string;
    title: string;
}

interface ServiceBoardSection {
    section: string;
    services: ServiceBoardProps[]
}

const ServiceBoard: React.FC<ServiceBoardSection> = ({ section, services }) => {
    const [padding, setPadding] = useState('pl-[90px]');

    const settings = {
        className: `w-full ${padding}`,
        infinite: false,
        centerMode: false,
        slidesToShow: 5.3,
        arrows: false,
        afterChange: handleSlideChange
    };

    function handleSlideChange(index: number) {
        const totalSlides = services.length;
        const slidesToShow = Math.floor(settings.slidesToShow);
        if (index === 0) {
            setPadding('pl-[90px]');
        } else if (index + slidesToShow >= totalSlides) {
            setPadding('pr-[90px]');
        } else {
            setPadding('');
        }
    }

    return (
        <div className="w-full h-[300px] my-[38px]">
            <div className="h-[66px] flex justify-between items-center mx-[90px]">
                <div className="text-[#F4F4F4] font-roboto text-[56px] font-normal leading-normal">
                    {section}
                </div>
                <div className="flex h-[29px] justify-center items-center cursor-pointer">
                    <div className="text-[#F4F4F4] font-inter text-[24px] font-normal leading-normal mr-[10px]">
                        more
                    </div>
                    <svg className='mt-[3px]' xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
                        <path d="M1 18L9.48528 9.51472L1 1.02944" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <div className="mt-[35px]">
                <Slider {...settings}>
                    {services && services.map((item, idx) => (
                        <div className="w-[351px] h-[199px] flex justify-start" key={idx}>
                            <div className="w-[335px] h-full overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={335}
                                    height={199}
                                    style={{ width: '100%', height: '100%', objectFit: 'fill', position: 'absolute' }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServiceBoard;
