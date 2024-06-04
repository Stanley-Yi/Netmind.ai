import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';


export default function ServiceDetail() {

    // @ts-ignore
    return (
        <div className='pt-[104px]'>
            <div className="relative my-[157px] mx-[90px]">

                <div className="relative w-full flex flex-col">
                    <div className="text-white font-inter text-[28px] font-medium leading-[35px] opacity-60">
                        Service
                    </div>

                    <div className='mt-[16px] text-[#FAFAFA] font-inter text-[56px] font-normal leading-[56px]'>
                        NetMind Marketing
                    </div>

                    <div className='mt-[32px] flex justify-start'>
                        <div className="w-[210px] h-14 px-6 py-4 bg-white rounded-[14px] justify-center items-center gap-2 inline-flex">
                            <div className="text-zinc-950 text-xl font-semibold font-inter">Visit the website</div>
                        </div>

                        <div className="w-[179px] ml-[24px] h-14 px-6 py-4 rounded-[14px] border border-white justify-center items-center gap-2 inline-flex">
                            <div className="text-neutral-50 text-xl font-semibold font-inter">Using the API</div>
                        </div>
                    </div>
                </div>

                <div className='relative mt-[80px] w-full flex justify-between'>
                    <div className='w-auto h-auto max-w-[66%] flex flex-col justify-start'>
                        <div className='self-stretch w-full text-white font-inter text-[44px] font-medium leading-[55px]'>
                            NetMind Marketing Introduction 
                        </div>

                        <div className='mt-[16px] w-full self-stretch text-white font-inter text-2xl font-normal leading-[35.04px]'>
                            The interplay of agent-based systems within artificial intelligence heralds a transformative era, inspired by the complex social structures and communication methods of natural societies. Our paper introduces the XYZ framework, an innovative approach designed to elevate the capabilities of agent societies beyond human productivity and creativity. This framework is rooted in the evolution and functionalities of Large Language Models (LLMs) and builds upon recent advancements in multi-agent systems, such as AutoGen and MetaGPT, which have significantly enhanced agent collaboration and autonomy through conversation programming paradigms, dynamic scheduling, and role-playing methods. 
                        </div>
                    </div>

                    <img className="w-auto h-auto max-w-[33%] max-h-full" src="/Rectangle 177.png" />
                </div>

                <div className='relative mt-[128px] flex flex-col'>
                    <div className="w-full text-white text-[44px] font-medium font-inter leading-[55px]">
                        Try the demo
                    </div>
                    
                    <div className='mt-[48px] w-full flex justify-center items-center'>
                        <div className="w-[1575px] h-[883px] bg-zinc-800 rounded-[30px] flex flex-col justify-start items-center">
                            <div className="bg-white opacity-[10%] rounded-t-[30px] absolute w-[1575px]" style={{ height: '98px' }}></div>
                            <div className="w-[1573px] h-[0px] top-[98px] relative border border-neutral-500"></div>
                            <div className="w-[1573px] h-[0px] top-[785px] relative border border-neutral-500"></div>

                            <div className='px-[320px] w-full h-[98px] flex justify-between items-center'>
                                <div className="w-[284.71px] text-white text-2xl font-semibold font-roboto">Name the conversation</div>

                                <div className='flex'>
                                    <div className="w-[30px] h-[30px] relative bg-white/opacity-0 mx-[8px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 24C4.25 23.5858 4.58579 23.25 5 23.25H25C25.4142 23.25 25.75 23.5858 25.75 24C25.75 24.4142 25.4142 24.75 25 24.75H5C4.58579 24.75 4.25 24.4142 4.25 24Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.197 4.46967C18.9041 4.17678 18.4292 4.17678 18.1363 4.46967L7.46967 15.1363C7.32902 15.277 7.25 15.4678 7.25 15.6667V21C7.25 21.4142 7.58579 21.75 8 21.75H13.3333C13.5322 21.75 13.723 21.671 13.8637 21.5303L24.5303 10.8637C24.8232 10.5708 24.8232 10.0959 24.5303 9.803L19.197 4.46967ZM8.75 20.25V15.9773L18.6667 6.06066L22.9393 10.3333L20.4996 12.773C20.5057 12.5735 20.4326 12.372 20.2803 12.2197L17.2803 9.21967C16.9874 8.92678 16.5126 8.92678 16.2197 9.21967C15.9268 9.51256 15.9268 9.98744 16.2197 10.2803L19.2197 13.2803C19.372 13.4326 19.5735 13.5057 19.773 13.4996L13.0227 20.25H8.75Z" fill="white"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="w-[30px] h-[30px] relative bg-white/opacity-0 mx-[8px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M13 18L12.5 25" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M17.5 18L17 25" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                            <rect x="6" y="11" width="18" height="4" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                            <rect x="13" y="6" width="4" height="5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                            <path d="M7.88889 15H22.1111L23 25H7L7.88889 15Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div className='w-full h-[687px] px-[320px] flex-col justify-start items-center my-[10px]'>
                                <div className='flex justify-start items-center my-[28px]'>
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 via-indigo-600 to-red-300 rounded-3xl backdrop-blur-[200px]"/>
                                    <div className="w-auto max-w-[726px] px-4 py-3 h-auto bg-white opacity-[61%] ml-[12px] rounded flex items-center">
                                        <div className="text-neutral-900 text-xl font-normal font-roboto leading-normal">Here is an example for a one line answer.</div>
                                    </div>
                                </div>

                                <div className='flex flex-row-reverse justify-start items-center my-[28px]'>
                                    <div className="w-12 h-12 bg-black rounded-3xl" />
                                    <div className="w-auto max-w-[726px] px-4 py-3 h-auto bg-black opacity-[61%] mr-[12px] rounded flex items-center">
                                        <div className="text-neutral-50 text-xl font-normal font-roboto leading-normal">Here is an example for a one line question.</div>
                                    </div>
                                </div>

                                <div className='flex justify-start items-center my-[28px]'>
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 via-indigo-600 to-red-300 rounded-3xl backdrop-blur-[200px]"/>
                                    <div className="w-auto max-w-[726px] px-4 py-3 h-auto bg-white opacity-[61%] ml-[12px] rounded flex items-center">
                                        <div className="text-neutral-900 text-xl font-normal font-roboto leading-normal">Here is an example for a two or more lines answer. Here is an example for a two or more lines answer. Here is an example for a two or more lines answer.</div>
                                    </div>
                                </div>

                                <div className='flex flex-row-reverse justify-start items-center my-[28px]'>
                                    <div className="w-12 h-12 bg-black rounded-3xl" />
                                    <div className="w-auto max-w-[726px] px-4 py-3 h-auto bg-black opacity-[61%] mr-[12px] rounded flex items-center">
                                        <div className="text-neutral-50 text-xl font-normal font-roboto leading-normal">Here is an example for a two or more lines answer. Here is an example for a two or more lines answer. Here is an example for a two or more lines answer.</div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full h-[98px] px-[320px] flex justify-center'>
                                <div className="w-full h-[50px] mt-[20px] bg-white rounded border border-neutral-200 flex justify-between items-center">
                                    <div className="text-neutral-800 text-xl font-normal font-roboto ml-5">Thank you!</div>
                                    <div className="w-[54px] h-[50px] bg-zinc-100 rounded-[3px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clip-path="url(#clip0_281_323)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5241 6.24586C23.7292 6.4425 23.8055 6.73817 23.7213 7.00954L17.9341 25.6573C17.8433 25.9497 17.5839 26.1576 17.2787 26.1825C16.9736 26.2074 16.6839 26.0443 16.547 25.7704L13.4232 19.5229C13.238 19.1525 13.3881 18.702 13.7586 18.5167C14.1291 18.3315 14.5796 18.4816 14.7648 18.8521L17.0544 23.4312L21.8439 7.99833L6.90769 13.3327L12.5685 16.1631L18.6165 10.1151C18.9094 9.82217 19.3843 9.82217 19.6772 10.1151C19.9701 10.408 19.9701 10.8828 19.6772 11.1757L13.2469 17.606C13.0187 17.8343 12.6699 17.8908 12.3812 17.7465L4.66487 13.8883C4.39615 13.754 4.23354 13.4722 4.25165 13.1723C4.26975 12.8724 4.46509 12.6122 4.74803 12.5112L22.7528 6.08093C23.0204 5.98536 23.319 6.04922 23.5241 6.24586Z" fill="#111111"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_281_323">
                                            <rect width="30" height="30" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}