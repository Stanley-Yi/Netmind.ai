import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {ServiceBoard} from '@/components';
import { ServiceBoardProps } from '@/consts';
import {queryAllService, AllServiceProps, ResponseBodyType} from '@/servers';


interface ServiceProps {
    section: string;
    services: ServiceBoardProps[];
}


export default function Service() {

    const [serviceInfo, setServiceInfo] = useState<AllServiceProps[]>([]);
    const [tagService, setTagService] = useState({} as ServiceProps);

    useEffect(() => {
        const getService = async () => {
            try {
                const response: ResponseBodyType<any> = await queryAllService();
                if (response.code === 200) {
                    setServiceInfo(response.result as AllServiceProps[])
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getService();
    }, []);

    // console.log(serviceInfo)

    useEffect(() => {
        const tagDict = {} as any;
        serviceInfo.forEach(item => {
            item.tags.forEach(tag => {
                if (!tagDict[tag]) {
                    tagDict[tag] = {
                        section: `Service - ${tag}`,
                        services: [] as ServiceBoardProps[]
                    } as ServiceProps;
                }
                tagDict[tag].services.push({
                    image: item.xyz_page_image_url,
                    title: item.XYZ_service_name,
                    url: `/service_detail/?id=${item.id}`,
                    logo: item.company_logo_url
                });
            });
        });
        setTagService(tagDict);
    }, [serviceInfo])

    // console.log(tagService)

    // const service_info = [
    //     {'section': 'Service - Marketing', 'services': [
    //         {image: '/Rectangle 69.png', title: 'Solving math problem', url: '/service_detail', logo: '/Logo Shapes 21.svg'},
    //         {image: '/Rectangle 70 (1).png', title: 'Longevity', url: '', logo: '/Logo Shapes 26.svg'},
    //         {image: '/Rectangle 70 (2).png', title: 'Marketing', url: '', logo: '/Standard Collection 3.svg'},
    //         {image: '/Rectangle 70 (3).png', title: 'Block chain', url: '', logo: '/Standard Collection 12.svg'},
    //         {image: '/Rectangle 70 (4).png', title: 'Painting', url: '', logo: '/Standard Collection 15.svg'},
    //         {image: '/Rectangle 70.png', title: 'Consultant', url: '', logo: '/Standard Collection 17.svg'},
    //     ] as ServiceBoardProps[]},
    // ];


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

                        <div className='w-[1255px] h-[84px] mt-[36px] flex items-center justify-center'>
                            <span className='text-white text-center font-inter text-[30px] font-normal leading-[140%]'>
                                You are entering a service page where services are provided by agent company.
                                {/* You're envisioning a system where agents not only operate individually but also interact, <br/> collaborate, and evolve within a societal framework. */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-auto my-[100px] relative'>
                {tagService && Object.entries(tagService).slice(0, 4).map(([tag, item]) => (
                    <ServiceBoard section={item.section} services={item.services} key={tag} />
                ))}

            </div>

        </div>
    )
}