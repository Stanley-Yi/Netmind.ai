import React, { useState } from "react";
import Image from 'next/image';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CompanyBoardProps } from '@/consts';


interface CompanyBoard {
    service_list: CompanyBoardProps[];
    page_num: number;
}


const ServiceList: React.FC<CompanyBoard> = ({
    service_list,
    page_num
}) => {

    return (
        <div className="h-auto my-[38px]">
            <div className="h-[70px] flex justify-start my-[36px]">
                <div className="text-white font-inter text-[44px] font-medium leading-[55px]">
                    Service List
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {service_list.map((item: CompanyBoardProps, idx: number) => (
                    <div className="w-[560px] h-[268px] rounded-[20px] backdrop-blur-[10px] bg-neutral-900 flex flex-col overflow-hidden" key={idx}>
                        <div className="ml-[16px] mt-[16px] text-white text-2xl font-normal font-['Inter']">{item.name}</div>
                        <div className="w-[522px] ml-[16px] mt-[10px] text-neutral-400 text-xl font-normal font-inter">{item.description}</div>
                        <div className="w-full h-8 mx-[16px] mt-[16px] flex">
                            {item.tag?.map((elem, index) => {
                                const bgColorClass = index % 2 === 0 ? "bg-[#2f2b4a]" : "bg-[#3a3424]";
                                return <div className={`w-auto h-8 p-1 mx-1 ${bgColorClass} rounded justify-center items-center gap-2.5 inline-flex`}>
                                            <div className="text-stone-300 text-xl font-normal font-inter">{elem}</div>
                                        </div>
                            })}
                        </div>
                        <div className="ml-[16px] mt-[16px] flex justify-start">
                            {item.member?.map((elem) => {
                                return <div className="w-10 h-10 bg-zinc-900 mr-[-14px] rounded-full border border-zinc-600" />
                            })}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="my-[36px] flex justify-end items-center">
                <div className="text-[#B3B3B3] font-inter text-[24px] font-normal leading-normal">Page</div>

                <Stack spacing={2}>
                    <Pagination count={page_num} shape="rounded" hidePrevButton hideNextButton/>
                </Stack>
                
                <div className="ml-[42px] flex items-center justify-start">
                    <div className="text-[#B3B3B3] font-inter text-[24px] font-normal leading-normal">to</div>
                    <input
                        type="text"
                        className="w-10 ml-4 h-10 rounded border text-[24px] border-zinc-400 p-1 text-center align-middle"
                        style={{ height: "38px", lineHeight: "36px" }}
                    />
                </div>
            </div>

        </div>
    );
};

export default ServiceList;
