import React, { useState } from "react";
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceBoardProps } from '@/consts';
import { Router, useRouter } from "next/router";


interface ServiceBoardSection {
    section: string;
    services: ServiceBoardProps[]
}

const ServiceBoard: React.FC<ServiceBoardSection> = ({ section, services }) => {

    const router = useRouter();

    const [sliderMargin, setSliderMargin] = useState({ marginLeft: '90px', marginRight: '0px' });

    const settings = {
        infinite: false,
        centerMode: false,
        draggable: services.length > 5,
        swipe: services.length > 5,
        slidesToShow: 5.3,
        // lazyLoad: 'progressive',
        arrows: false,
        beforeChange: (current: any, next: any) => handleMargin(current, next),
        afterChange: (current: any) => handleMargin(current, current)
    };

    function handleMargin(current: any, next: number) {
        let newMarginLeft = '0px';
        let newMarginRight = '0px';

        if (next === 0) {
            newMarginLeft = '90px';
        }
        else if (next + Math.ceil(settings.slidesToShow) >= services.length) {
            newMarginRight = '90px';
        }

        setSliderMargin({ marginLeft: newMarginLeft, marginRight: newMarginRight });
    }

    return (
        <div className="w-full h-[300px] my-[76px]">
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

            <div className="mt-[35px]" style={{ marginLeft: sliderMargin.marginLeft, marginRight: sliderMargin.marginRight }}>
                <Slider {...settings}>
                    {services && services.map((item, idx) => (
                        <div className="w-[351px] h-[199px] flex justify-start" key={idx}>
                            <div className="w-[335px] h-full overflow-hidden relative flex items-end justify-start cursor-pointer" onClick={() => router.push('/service_detail')}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={335}
                                    height={199}
                                    style={{ width: '100%', height: '100%', objectFit: 'fill', position: 'absolute', zIndex: 10 }}
                                />
                                <div className="ml-[16px] mb-[14px] w-[180px] h-auto z-40 flex flex-col-reverse justify-start content-end">
                                    <div className="text-white text-2xl font-medium font-inter">{item.title}</div>
                                    <Image className="mb-[9px]" src={item.logo} alt={item.title} width={32} height={32}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServiceBoard;
