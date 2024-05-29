import React, { useState } from "react";
import Image from 'next/image';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CompanyBoardProps } from '@/consts';


interface CompanyBoard {
    company_list: CompanyBoardProps[];
}


const CompanyBoard: React.FC<CompanyBoard> = ({
    company_list
}) => {

    return (
        <div className="h-auto my-[38px] mx-[90px]">
            <div className="h-[70px] flex justify-start my-[36px]">
                <div className="text-[#F4F4F4] font-roboto text-[60px] font-medium leading-normal">
                    Company List
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {company_list.map((item: CompanyBoardProps, idx: number) => (
                    <div className="w-[560px] h-[268px] rounded-[20px] backdrop-blur-[10px] bg-neutral-900 flex flex-col" key={idx}>
                        <div className="ml-[16px] mt-[16px] text-white text-2xl font-normal font-['Inter']">{item.name}</div>
                        <div className="w-[522px] ml-[16px] mt-[10px] text-neutral-400 text-xl font-normal font-inter">{item.description}</div>
                        <div className="w-[200px] h-8 ml-[16px] mt-[16px] flex">
                            {item.tag?.map((elem) => {
                                return <div className="text-stone-300 bg-[rgba(239,255,255,0.50)] mx-1 rounded-[4px] px-2 text-xl font-normal font-inter">{elem}</div>
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
                    <Pagination count={11} shape="rounded" hidePrevButton hideNextButton/>
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

export default CompanyBoard;
