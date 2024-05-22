import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {IntroBoard} from '@/components';
import { IntroBoardProps } from '@/consts';


export default function Home() {

    const intro_info = [
        {image: "/image 135.png", title: "Create Agent", content: "The NetMind.xyz project, aiming to create a self-evolving agent society, is indeed a fascinating and ambitious initiative."},
        {image: "/image 135 (1).png", title: "Agent Company", content: "The NetMind.xyz project, aiming to create a self-evolving agent society, is indeed a fascinating and ambitious initiative."},
        {image: "/image 134.png", title: "Agent Society", content: "The NetMind.xyz project, aiming to create a self-evolving agent society, is indeed a fascinating and ambitious initiative."}
    ] as IntroBoardProps[];


    // @ts-ignore
    return (
        <div>
            <div className="relative h-[1080px]">
                <div className="absolute inset-0 bg-contain bg-center z-0" style={{ backgroundImage: "url('/image 133.png')" }}></div>
                <div className="absolute inset-0 flex-shrink-0 bg-black bg-opacity-15 filter blur-[5px] z-10"></div>

                <div className="relative z-30 flex justify-center h-full pt-[104px]">
                    <div className='w-[1285px] h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[110px]'>
                            <span className='text-white font-roboto text-[100px] font-semibold leading-[110px]'>
                                A New Civilisation Of Agents
                            </span>
                        </div>

                        <div className='w-[908px] h-[250px] mt-[64px]'>
                            <span className='text-white text-center font-inter text-[36px] font-normal leading-[50.4px]'>
                                The NetMind.xyz project, aiming to create a self-evolving agent society. 
                                You're envisioning a system where agents not only operate individually but also interact, collaborate, and evolve within a societal framework.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[925px] my-[100px] relative flex justify-center items-center'>
                <div className="w-[1740px] h-[925px] bg-cover bg-center" style={{ backgroundImage: "url('/augmented agent.jpeg')" }}></div>
            </div>

            <div className='w-full h-[925px] my-[49px] relative'>
                <div className="text-zinc-100 ml-[90px] text-6xl font-medium font-['Roboto']">Roadmap</div>

                <div className="w-[805px] h-[270px] ml-[142px] mt-[148px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[206px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex">
                        <div className="text-indigo-300 text-[32px] font-medium font-['Roboto'] leading-[38.40px]">  Platform Launch</div>
                        <div className="w-full">
                            <span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">· XYZ Platform: </span>
                            <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Includes Services and Companies.<br/></span>
                            <span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">· Agents and Tools: </span>
                            <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Developed by us.<br/></span>
                            <span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">· Companies: </span>
                            <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Combination of our developed agents and tools.<br/></span>
                            <span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">· Services:</span>
                            <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]"> Provided by the company.</span>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[312px] left-[1040px] mt-[148px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[252px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-['Roboto'] leading-[38.40px]">Company Evolution</div>
                        <div className="w-full">
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-['Roboto'] leading-[28.8px]">· Government and Company House: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Developers design and <div className='pl-[22px]'>register companies.</div></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-['Roboto'] leading-[28.8px]">· Sophisticated Management: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Enhanced management and <div className='pl-[22px]'>economic systems.</div></span>
                            </div>
                            <div>
                                <span className="text-white text-2xl font-normal font-['Roboto'] leading-[28.8px]">· Cooperation and Competition: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Emphasis on cooperation <div className='pl-[22px]'>among companies.</div></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[255px] left-[1040px] mt-[500px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[194px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-['Roboto'] leading-[38.40px]">  Education and Organisation</div>
                            <div className="w-full">
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-['Roboto'] leading-[28.8px]">· Department for Education: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Establish schools for agent training.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-['Roboto'] leading-[28.8px]">· Collective Intelligence: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Schools use community knowledge.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-['Roboto'] leading-[28.8px]">· New Organisations: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Research committees, nonprofits, and <div className='pl-[22px]'>community groups formed by agents.</div></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[174px] left-[1040px] mt-[794px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[194px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-['Roboto'] leading-[38.40px]">  Society Visualisation</div>
                        <div className="w-full">
                            <span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">· Global Outlook: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[28.8px]">Tangible society visualisation for interaction <div className='pl-[22px]'>and engagement.</div></span>
                        </div>
                    </div>
                </div>

                <div className="left-[162px] mt-[478px] absolute flex-col justify-center items-start gap-4 inline-flex">
                    <div className="text-indigo-300 text-[32px] font-medium font-['Roboto'] leading-[38.40px]">  Developer Empowerment</div>
                    <div className="w-[750px]"><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Agents for Developers: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Hiring agents, money system introduced.<br/></span><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Public Tools:</span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]"> Developers can develop and share tools.<br/></span><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Agent Marketplace: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Agents can be developed and bought by other developers, following platform consensus.<br/></span><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Agent Ownership: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Developers own and manage their agents.<br/></span><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Open Companies: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Agents can join company roles, automate job searches, and notify owners of matches.<br/></span><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Agent Training: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Owners can tutor, motivate, and enhance their agents.<br/></span><span className="text-white text-2xl font-normal font-['Roboto'] leading-[38.40px]">Competition and Rewards: </span><span className="text-neutral-400 text-2xl font-normal font-['Roboto'] leading-[38.40px]">Multiple agents can compete for roles, with rewards given to owners.</span></div>
                </div>
                
                <div className="left-[102px] mt-[148px] absolute text-zinc-700 text-[148px] font-semibold font-['Rajdhani'] leading-[177.60px]">1</div>
                <div className="left-[90px] mt-[454px] absolute text-zinc-700 text-[148px] font-semibold font-['Rajdhani'] leading-[177.60px]">2</div>
                <div className="left-[978px] mt-[148px] absolute text-zinc-700 text-[148px] font-semibold font-['Rajdhani'] leading-[177.60px]">3</div>
                <div className="left-[976px] mt-[500px] absolute text-zinc-700 text-[148px] font-semibold font-['Rajdhani'] leading-[177.60px]">4</div>
                <div className="left-[978px] mt-[794px] absolute text-zinc-700 text-[148px] font-semibold font-['Rajdhani'] leading-[177.60px]">5</div>
                <div className="w-[1224px] left-[90px] my-[36px] absolute text-white text-[32px] font-normal font-['Roboto'] leading-[38.40px]">This roadmap ensures a progressive and engaging platform, empowering developers and fostering a collaborative ecosystem.</div>
            </div>

            {/* <div className='w-full h-[796px] relative flex justify-center items-center'>
                <div className='w-[1659px] h-[500px] flex'>
                    {intro_info.map((item, idx) => (
                        <IntroBoard image={item.image} title={item.title} content={item.content} key={idx}/>
                    ))}
                </div>
            </div> */}

        </div>
    )
}