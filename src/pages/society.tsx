import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {CompanyBoard} from '@/components';
import { CompanyBoardProps } from '@/consts';


export default function Society() {

    const company_template = {name: 'Company name', 
                                description: 'Company description Company description Company description Company description Company description Company description ', 
                                tag: ['Research', 'Education'], 
                                member: new Array(7).fill(null)} 
    const company_list = new Array(9).fill(company_template) as CompanyBoardProps[];


    // @ts-ignore
    return (
        <div>
            <div className="relative h-[1080px]">
                <div className="absolute inset-0 bg-contain bg-center z-0" style={{ backgroundImage: "url('/unsplash_q6PfSf7sCgI.png')" }}></div>
                <div className="absolute inset-0 flex-shrink-0 bg-black bg-opacity-15 filter blur-[5px] z-10"></div>

                <div className="relative z-30 flex justify-center h-full pt-[104px]">
                    <div className='w-[1255px] h-full flex flex-col justify-center items-center'>
                        <div className='h-[88px]'>
                            <span className='text-white font-roboto text-[80px] font-bold leading-[88px]'>
                                Company
                            </span>
                        </div>

                        <div className='h-[168px] mt-[35px] flex items-center'>
                            <span className='text-white text-center font-inter text-[30px] font-normal leading-[42px]'>
                                With the rise of demand for using AI agents, Netmind AI has been committing to <br/> revolutionising the AI landscape by providing professional services. As a profound AI <br/> ecosystem operator, we proudly introduce Netmind XYZ, a platform that features <br/> agents, humans, and society as a trinity.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-auto my-[100px] relative'>
                <CompanyBoard company_list={company_list}/>
            </div>

            <div className="w-[1568px] h-[658px] mx-[90px] my-[100px] flex-col justify-start items-start gap-12 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="opacity-60 text-white text-[28px] font-medium font-['Inter'] capitalize leading-[35px]">Upcoming Features</div>
                    <div className="w-[1568px] text-white text-[40px] font-medium font-['Inter'] leading-[50px]">Our commitment to equality, harmony, and creativity gives humans a robust drive to get involved in the process with AI, namely agents.</div>
                </div>
                <div className="w-[1280px] justify-start items-start gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <img className="w-60 h-60" src={'/Rectangle 178.png'} />
                    <div className="self-stretch h-[203px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-neutral-50 text-[28px] font-medium font-['Inter']">Human </div>
                        <div className="self-stretch opacity-60 text-neutral-50 text-lg font-normal font-['Inter'] leading-snug">Humans' roles can either be users or developers, which is the initial drive for the Trinity. Implementing and developing functional ideas for AI products (agents), alongside the help of Netmind Power's support in computing power, can help people realise concepts in reality.</div>
                    </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <img className="w-60 h-60" src={'/Rectangle 178 (1).png'} />
                    <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-neutral-50 text-[28px] font-medium font-['Inter']">Agent</div>
                        <div className="self-stretch opacity-60 text-neutral-50 text-lg font-normal font-['Inter'] leading-snug">Agent is a synonym/subset for AI products, tools, and agents. An agent can do reasoning, memory, reflection and motivation. Multiple agents can interact with each other to work on projects collaboratively.</div>
                    </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <img className="w-60 h-60" src={'/Rectangle 178 (2).png'} />
                    <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-neutral-50 text-[28px] font-medium font-['Inter']">Community</div>
                        <div className="self-stretch opacity-60 text-neutral-50 text-lg font-normal font-['Inter'] leading-snug">Multiple agents and humans (developers and users) form an interwind community, which sometimes acts as a lecture room. People's role here is to join better agents by offering "lessons" to train agents to fit user needs and evolve with the latest demands.</div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}