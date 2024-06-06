import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {ServiceList} from '@/components';
import { CompanyBoardProps } from '@/consts';
import {queryServiceByCompany, queryCompanyByID, SingleCompanyProps, AllServiceProps, ResponseBodyType} from '@/servers';
import { Router, useRouter } from 'next/router';


export default function CompanyDetail() {

    const router = useRouter();

    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    const [companyInfo, setCompanyInfo] = useState<SingleCompanyProps>();
    const [serviceInfo, setServiceInfo] = useState<AllServiceProps[]>([]);
    const [service, setService] = useState<CompanyBoardProps[]>([]);

    useEffect(() => {
        const getServiceByCompany = async (id: string) => {
            try {
                const response: ResponseBodyType<any> = await queryServiceByCompany(id);
                if (response.code === 200) {
                    setServiceInfo(response.result)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const getCompanyByID = async (id: string) => {
            try {
                const response: ResponseBodyType<any> = await queryCompanyByID(id);
                if (response.code === 200) {
                    // console.log(response.result)
                    setCompanyInfo(response.result)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const company_id = searchParams.get('id');
        if (company_id) {
            getServiceByCompany(company_id).then(() => {
                getCompanyByID(company_id);
            });
        }
    }, []);

    useEffect(() => {
        const temp_list = [] as CompanyBoardProps[];
        serviceInfo.forEach(item => {
            temp_list.push({
                name: item.XYZ_service_name,
                description: item.description,
                tag: item.tags,
                member: new Array(7).fill(null),
                url:`/service_detail/?id=${item.id}`
            });
        });
        setService(temp_list);
    }, [serviceInfo])

    useEffect(() => {
        console.log(companyInfo); // 当 companyInfo 更新时，打印出来看看
    }, [companyInfo]);

    // const company_template = {name: 'Service name', 
    //                             description: 'Service intro Service intro Service intro Service intro Service intro Service intro Service intro Service intro Service intro Service intro ', 
    //                             tag: ['Research', 'Education'], 
    //                             member: new Array(7).fill(null)} 
    // const companyList = new Array(5).fill(company_template) as CompanyBoardProps[];


    // @ts-ignore
    return (
        <div className='pt-[104px]'>
            <div className="relative my-[157px] mx-[90px]">

                <div className="relative w-full flex flex-col">
                    <div className="text-white font-inter text-[28px] font-medium leading-[35px] opacity-60">
                        Company
                    </div>

                    <div className='mt-[16px] text-[#FAFAFA] font-inter text-[56px] font-normal leading-[56px]'>
                        {companyInfo?.company_name}
                    </div>

                    <div className='mt-[32px] flex justify-start'>
                        <div className="w-[210px] h-[56px] px-[24px] py-[16px] flex justify-center items-center gap-[8px] rounded-[14px] border border-white cursor-pointer" onClick={() => window.open(companyInfo?.company_official_url, '_blank', 'noopener,noreferrer')}>
                            <div className="text-neutral-50 text-xl font-semibold font-inter">Visit the website</div>
                        </div>
                    </div>
                </div>

                <div className='relative mt-[96px] w-full flex justify-between'>
                    <div className='w-auto h-auto max-w-[66%] flex flex-col justify-start'>
                        <div className='self-stretch w-full text-white font-inter text-[44px] font-medium leading-[55px]'>
                            Company Introduction 
                        </div>

                        <div className='mt-[16px] w-full self-stretch text-white font-inter text-2xl font-normal leading-[35.04px]'>
                            {companyInfo?.description}
                        </div>
                    </div>

                    <img className="w-auto h-auto max-w-[33%] max-h-full" src={companyInfo?.company_logo_url} />
                </div>

                <div className='relative mt-[128px] flex flex-col'>
                    
                    <div className='h-auto relative'>
                        {service ? <ServiceList service_list={service} page_num={1}/> : <></>}
                    </div>

                </div>
            </div>

        </div>
    )
}