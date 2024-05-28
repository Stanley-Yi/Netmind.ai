import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {ServiceBoard} from '@/components';
import { ServiceBoardProps } from '@/consts';


export default function Service() {

    const service_info = [
        {'section': 'Service - Marketing', 'services': [
            {image: '/Rectangle 69.png', title: 'Solving math problem', url: '', logo: '/Logo Shapes 21.svg'},
            {image: '/Rectangle 70 (1).png', title: 'Longevity', url: '', logo: '/Logo Shapes 26.svg'},
            {image: '/Rectangle 70 (2).png', title: 'Marketing', url: '', logo: '/Standard Collection 3.svg'},
            {image: '/Rectangle 70 (3).png', title: 'Block chain', url: '', logo: '/Standard Collection 12.svg'},
            {image: '/Rectangle 70 (4).png', title: 'Painting', url: '', logo: '/Standard Collection 15.svg'},
            {image: '/Rectangle 70.png', title: 'Consultant', url: '', logo: '/Standard Collection 17.svg'},
        ] as ServiceBoardProps[]},
        {'section': 'Service - Longevity', 'services': [
            {image: '/Rectangle 69.png', title: 'Solving math problem', url: '', logo: '/Logo Shapes 21.svg'},
            {image: '/Rectangle 70 (1).png', title: 'Longevity', url: '', logo: '/Logo Shapes 26.svg'},
            {image: '/Rectangle 70 (2).png', title: 'Marketing', url: '', logo: '/Standard Collection 3.svg'},
            {image: '/Rectangle 70 (3).png', title: 'Block chain', url: '', logo: '/Standard Collection 12.svg'},
            {image: '/Rectangle 70 (4).png', title: 'Painting', url: '', logo: '/Standard Collection 15.svg'},
            {image: '/Rectangle 70.png', title: 'Consultant', url: '', logo: '/Standard Collection 17.svg'},
        ] as ServiceBoardProps[]},
        {'section': 'Service - Developer', 'services': [
            {image: '/Rectangle 69.png', title: 'Solving math problem', url: '', logo: '/Logo Shapes 21.svg'},
            {image: '/Rectangle 70 (1).png', title: 'Longevity', url: '', logo: '/Logo Shapes 26.svg'},
            {image: '/Rectangle 70 (2).png', title: 'Marketing', url: '', logo: '/Standard Collection 3.svg'},
            {image: '/Rectangle 70 (3).png', title: 'Block chain', url: '', logo: '/Standard Collection 12.svg'},
            {image: '/Rectangle 70 (4).png', title: 'Painting', url: '', logo: '/Standard Collection 15.svg'},
            {image: '/Rectangle 70.png', title: 'Consultant', url: '', logo: '/Standard Collection 17.svg'},
        ] as ServiceBoardProps[]},
        {'section': 'Service - Design', 'services': [
            {image: '/Rectangle 69.png', title: 'Solving math problem', url: '', logo: '/Logo Shapes 21.svg'},
            {image: '/Rectangle 70 (1).png', title: 'Longevity', url: '', logo: '/Logo Shapes 26.svg'},
            {image: '/Rectangle 70 (2).png', title: 'Marketing', url: '', logo: '/Standard Collection 3.svg'},
            {image: '/Rectangle 70 (3).png', title: 'Block chain', url: '', logo: '/Standard Collection 12.svg'},
            {image: '/Rectangle 70 (4).png', title: 'Painting', url: '', logo: '/Standard Collection 15.svg'},
            {image: '/Rectangle 70.png', title: 'Consultant', url: '', logo: '/Standard Collection 17.svg'},
        ] as ServiceBoardProps[]},
    ];


    // @ts-ignore
    return (
        <div>
            <div className="relative h-[1080px] mt-[104px]">
                <div className="absolute inset-0 bg-contain bg-center z-0" style={{ backgroundImage: "url('/service_hero_img.png')" }}></div>
                <div className="absolute inset-0 flex-shrink-0 bg-black bg-opacity-15 filter blur-[5px] z-10"></div>

                <div className="relative z-30 flex justify-center h-full pt-[104px]">
                    <div className='w-[309px] h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[88px]'>
                            <span className='text-white font-roboto text-[80px] font-semibold leading-[110%]'>
                                Services
                            </span>
                        </div>

                        <div className='w-[1255px] h-[84px] mt-[36px] flex items-center'>
                            <span className='text-white text-center font-inter text-[30px] font-normal leading-[140%]'>
                                You're envisioning a system where agents not only operate individually but also interact, <br/> collaborate, and evolve within a societal framework.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-auto my-[100px] relative'>
                {service_info && service_info.map((item, idx) => (
                    <ServiceBoard section={item.section} services={item.services} key={idx} />
                ))}
            </div>

        </div>
    )
}