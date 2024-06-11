import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {IntroBoard} from '@/components';
import { IntroBoardProps } from '@/consts';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {queryUserInfo, ResponseBodyType} from '@/servers';


export default function Home() {

    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        Array.from(searchParams.entries()).forEach(([key, value]) => {
            if (key === 'token') {
                Cookies.set(key, value, { expires: 9 });
                // Cookies.set(key, value, { expires: 1 / 1440 });
            }
        });
        // Cookies.remove('token');
        // getUser();
    }, []);

    // const getUser = async () => {
    //     const response: ResponseBodyType<any> = await queryUserInfo();
    //     console.log(response)
    //     if (response.code === 200) {
    //         console.log(response.result)
    //     } else {
    //         alert("Please log in first")
    //     }
    // }

    const intro_info = [
        {image: "/image 135.png", title: "Create Agent", content: "The NetMind.xyz project, aiming to create a self-evolving agent society, is indeed a fascinating and ambitious initiative."},
        {image: "/image 135 (1).png", title: "Agent Company", content: "The NetMind.xyz project, aiming to create a self-evolving agent society, is indeed a fascinating and ambitious initiative."},
        {image: "/image 134.png", title: "Agent Society", content: "The NetMind.xyz project, aiming to create a self-evolving agent society, is indeed a fascinating and ambitious initiative.", status: 'coming soon'}
    ] as IntroBoardProps[];


    // @ts-ignore
    return (
        <div>
            <div className="relative h-[1080px]">
                <div className="absolute inset-0 bg-contain bg-center z-0" style={{ backgroundImage: "url('/image 133.png')" }}></div>
                <div className="absolute inset-0 flex-shrink-0 bg-black bg-opacity-15 filter blur-[5px] z-10"></div>

                <div className="relative z-30 flex justify-center h-full pt-[104px]">
                    <div className='w-[1300px] h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[110px]'>
                            <span className='text-white font-roboto text-[100px] font-semibold leading-[110px]'>
                                A New Civilisation Of Agents
                            </span>
                        </div>

                        <div className='w-[908px] h-[250px] mt-[64px] flex items-center'>
                            <span className='text-white text-center font-inter text-[36px] font-normal leading-[50.4px]'>
                                The NetMind.xyz project, aiming to create a self-evolving agent society. <br/>
                                You're envisioning a system where agents not only operate individually but also interact, collaborate, and evolve within a societal framework.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[925px] my-[100px] relative flex justify-center items-center'>
                <div className="w-[1740px] h-[925px] bg-cover bg-center" style={{ backgroundImage: "url('/augmented agent.jpeg')" }}></div>
            </div>

            <div className='w-full h-[1074px] my-[100px] relative'>
                <div className="text-zinc-100 ml-[90px] text-6xl font-medium font-roboto">Roadmap</div>

                <div className="w-[805px] h-[270px] ml-[136px] mt-[148px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[206px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex">
                        <div className="text-indigo-300 text-[32px] font-medium font-roboto leading-[38.40px]">  Platform Launch</div>
                        <div className="w-full">
                            <span className="text-white text-2xl font-normal font-roboto leading-[38.40px]">· XYZ Platform: </span>
                            <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[38.40px]">Includes Services and Companies.<br/></span>
                            <span className="text-white text-2xl font-normal font-roboto leading-[38.40px]">· Agents and Tools: </span>
                            <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[38.40px]">Developed by us.<br/></span>
                            <span className="text-white text-2xl font-normal font-roboto leading-[38.40px]">· Companies: </span>
                            <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[38.40px]">Combination of our developed agents and tools.<br/></span>
                            <span className="text-white text-2xl font-normal font-roboto leading-[38.40px]">· Services:</span>
                            <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[38.40px]"> Provided by the company.</span>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[312px] left-[1024px] mt-[148px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[252px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-roboto leading-[38.40px]">Company Evolution</div>
                        <div className="w-full">
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Government and Company House: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Developers design and register <div className='pl-[14px]'>companies.</div></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Sophisticated Management: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Enhanced management and <div className='pl-[14px]'>economic systems.</div></span>
                            </div>
                            <div>
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Cooperation and Competition: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Emphasis on cooperation among <div className='pl-[14px]'>companies.</div></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[255px] left-[1024px] mt-[500px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[194px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-roboto leading-[38.40px]">  Education and Organisation</div>
                            <div className="w-full">
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Department for Education: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Establish schools for agent training.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Collective Intelligence: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Schools use community knowledge.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· New Organisations: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Research committees, nonprofits, and <div className='pl-[14px]'>community groups formed by agents.</div></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[174px] left-[1024px] mt-[794px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[194px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-roboto leading-[38.40px]">  Society Visualisation</div>
                        <div className="w-full">
                            <span className="text-white text-2xl font-normal font-roboto leading-[38.40px]">· Global Outlook: </span><span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Tangible society visualisation for interaction and <div className='pl-[14px]'>engagement.</div></span>
                        </div>
                    </div>
                </div>

                <div className="w-[805px] h-[514px] left-[136px] mt-[454px] absolute flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                    <div className="w-[730px] h-[445px] ml-[45px] flex-col justify-center items-start gap-4 inline-flex bg-neutral-900">
                        <div className="text-indigo-300 text-[32px] font-medium font-roboto leading-[38.40px]">  Developer Empowerment</div>
                        <div className="w-full">
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Agents for Developers: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Hiring agents, money system introduced.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Public Tools:</span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]"> Developers can develop and share tools.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Agent Marketplace: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Agents can be developed and bought by other <div className='pl-[14px]'>developers, following platform consensus.<br/></div></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Agent Ownership: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Developers own and manage their agents.<br/></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Open Companies: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Agents can join company roles, automate job <div className='pl-[14px]'>searches, and notify owners of matches.<br/></div></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Agent Training: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Owners can tutor, motivate, and enhance their <div className='pl-[14px]'>agents.<br/></div></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-2xl font-normal font-roboto leading-[28.8px]">· Competition and Rewards: </span>
                                <span className="text-neutral-400 text-2xl font-normal font-roboto leading-[28.8px]">Multiple agents can compete for roles, <div className='pl-[14px]'>with rewards given to owners.</div></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="left-[102px] mt-[148px] absolute text-zinc-700 text-[148px] font-semibold font-rajdhani leading-[177.60px]">1</div>
                <div className="left-[90px] mt-[454px] absolute text-zinc-700 text-[148px] font-semibold font-rajdhani leading-[177.60px]">2</div>
                <div className="left-[978px] mt-[148px] absolute text-zinc-700 text-[148px] font-semibold font-rajdhani leading-[177.60px]">3</div>
                <div className="left-[976px] mt-[500px] absolute text-zinc-700 text-[148px] font-semibold font-rajdhani leading-[177.60px]">4</div>
                <div className="left-[978px] mt-[794px] absolute text-zinc-700 text-[148px] font-semibold font-rajdhani leading-[177.60px]">5</div>
                <div className="w-[1224px] left-[90px] my-[36px] absolute text-white text-[32px] font-normal font-roboto leading-[38.40px]">This roadmap ensures a progressive and engaging platform, empowering developers and fostering a collaborative ecosystem.</div>

                <div className="left-[116px] mt-[326px] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="140" viewBox="0 0 12 140" fill="none">
                        <path d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6.00001 139.773L11.7735 134L6.00001 128.227L0.226503 134L6.00001 139.773ZM5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8L5 8ZM7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12L7 12ZM5 16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16L5 16ZM7 20C7 19.4477 6.55229 19 6 19C5.44772 19 5 19.4477 5 20L7 20ZM5 24C5 24.5523 5.44772 25 6 25C6.55229 25 7 24.5523 7 24L5 24ZM7 28C7 27.4477 6.55229 27 6 27C5.44772 27 5 27.4477 5 28L7 28ZM5 32C5 32.5523 5.44772 33 6 33C6.55229 33 7 32.5523 7 32L5 32ZM7 36C7 35.4477 6.55229 35 6 35C5.44772 35 5 35.4477 5 36L7 36ZM5 40C5 40.5523 5.44772 41 6 41C6.55229 41 7 40.5523 7 40L5 40ZM7 44C7 43.4477 6.55229 43 6 43C5.44772 43 5 43.4477 5 44L7 44ZM5 48C5 48.5523 5.44772 49 6 49C6.55229 49 7 48.5523 7 48L5 48ZM7 52C7 51.4477 6.55229 51 6 51C5.44772 51 5 51.4477 5 52L7 52ZM5 56C5 56.5523 5.44772 57 6 57C6.55229 57 7 56.5523 7 56L5 56ZM7 60C7 59.4477 6.55229 59 6 59C5.44772 59 5 59.4477 5 60L7 60ZM5 64C5 64.5523 5.44772 65 6 65C6.55229 65 7 64.5523 7 64L5 64ZM7 68C7 67.4477 6.55229 67 6 67C5.44772 67 5 67.4477 5 68L7 68ZM5 72C5 72.5523 5.44772 73 6 73C6.55229 73 7 72.5523 7 72L5 72ZM7 76C7 75.4477 6.55229 75 6 75C5.44772 75 5 75.4477 5 76L7 76ZM5 80C5 80.5523 5.44772 81 6 81C6.55229 81 7 80.5523 7 80L5 80ZM7 84C7 83.4477 6.55229 83 6 83C5.44772 83 5 83.4477 5 84L7 84ZM5 88C5 88.5523 5.44772 89 6 89C6.55229 89 7 88.5523 7 88L5 88ZM7 92C7 91.4477 6.55229 91 6 91C5.44772 91 5 91.4477 5 92L7 92ZM5 96C5 96.5523 5.44772 97 6 97C6.55229 97 7 96.5523 7 96L5 96ZM7 100C7 99.4477 6.55229 99 6 99C5.44772 99 5 99.4477 5 100L7 100ZM5 104C5 104.552 5.44772 105 6 105C6.55229 105 7 104.552 7 104L5 104ZM7 108C7 107.448 6.55229 107 6 107C5.44772 107 5 107.448 5 108L7 108ZM5 112C5 112.552 5.44772 113 6 113C6.55229 113 7 112.552 7 112L5 112ZM7 116C7 115.448 6.55229 115 6 115C5.44772 115 5 115.448 5 116L7 116ZM5 120C5.00001 120.552 5.44772 121 6.00001 121C6.55229 121 7.00001 120.552 7 120L5 120ZM7.00001 124C7.00001 123.448 6.55229 123 6.00001 123C5.44772 123 5.00001 123.448 5.00001 124L7.00001 124ZM5.00001 128C5.00001 128.552 5.44772 129 6.00001 129C6.55229 129 7.00001 128.552 7.00001 128L5.00001 128ZM7.00001 132C7.00001 131.448 6.55229 131 6.00001 131C5.44772 131 5.00001 131.448 5.00001 132L7.00001 132ZM5 6L5 8L7 8L7 6L5 6ZM5 12L5 16L7 16L7 12L5 12ZM5 20L5 24L7 24L7 20L5 20ZM5 28L5 32L7 32L7 28L5 28ZM5 36L5 40L7 40L7 36L5 36ZM5 44L5 48L7 48L7 44L5 44ZM5 52L5 56L7 56L7 52L5 52ZM5 60L5 64L7 64L7 60L5 60ZM5 68L5 72L7 72L7 68L5 68ZM5 76L5 80L7 80L7 76L5 76ZM5 84L5 88L7 88L7 84L5 84ZM5 92L5 96L7 96L7 92L5 92ZM5 100L5 104L7 104L7 100L5 100ZM5 108L5 112L7 112L7 108L5 108ZM5 116L5 120L7 120L7 116L5 116ZM5.00001 124L5.00001 128L7.00001 128L7.00001 124L5.00001 124ZM5.00001 132L5.00001 134L7.00001 134L7.00001 132L5.00001 132Z" fill="#45433E"/>
                    </svg>
                </div>

                <div className="left-[1004px] mt-[321px] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="186" viewBox="0 0 12 186" fill="none">
                        <path d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6.00001 185.773L11.7735 180L6.00001 174.227L0.226505 180L6.00001 185.773ZM5 6L5 7.97727L7 7.97727L7 6L5 6ZM5 11.9318L5 15.8864L7 15.8864L7 11.9318L5 11.9318ZM5 19.8409L5 23.7955L7 23.7955L7 19.8409L5 19.8409ZM5 27.75L5 31.7045L7 31.7045L7 27.75L5 27.75ZM5 35.6591L5 39.6136L7 39.6136L7 35.6591L5 35.6591ZM5 43.5682L5 47.5227L7 47.5227L7 43.5682L5 43.5682ZM5 51.4773L5 55.4318L7 55.4318L7 51.4773L5 51.4773ZM5 59.3864L5 63.3409L7 63.3409L7 59.3864L5 59.3864ZM5 67.2954L5 71.25L7 71.25L7 67.2954L5 67.2954ZM5 75.2045L5 79.1591L7 79.1591L7 75.2045L5 75.2045ZM5 83.1136L5 87.0682L7 87.0682L7 83.1136L5 83.1136ZM5 91.0227L5 94.9773L7 94.9773L7 91.0227L5 91.0227ZM5 98.9318L5 102.886L7 102.886L7 98.9318L5 98.9318ZM5 106.841L5 110.795L7 110.795L7 106.841L5 106.841ZM5 114.75L5 118.705L7 118.705L7 114.75L5 114.75ZM5.00001 122.659L5.00001 126.614L7.00001 126.614L7.00001 122.659L5.00001 122.659ZM5.00001 130.568L5.00001 134.523L7.00001 134.523L7.00001 130.568L5.00001 130.568ZM5.00001 138.477L5.00001 142.432L7.00001 142.432L7.00001 138.477L5.00001 138.477ZM5.00001 146.386L5.00001 150.341L7.00001 150.341L7.00001 146.386L5.00001 146.386ZM5.00001 154.295L5.00001 158.25L7.00001 158.25L7.00001 154.295L5.00001 154.295ZM5.00001 162.205L5.00001 166.159L7.00001 166.159L7.00001 162.205L5.00001 162.205ZM5.00001 170.114L5.00001 174.068L7.00001 174.068L7.00001 170.114L5.00001 170.114ZM5.00001 178.023L5.00001 180L7.00001 180L7.00001 178.023L5.00001 178.023Z" fill="#45433E"/>
                    </svg>
                </div>

                <div className="left-[1004px] mt-[677px] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="128" viewBox="0 0 12 128" fill="none">
                        <path d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6.00001 127.774L11.7735 122L6 116.227L0.226502 122L6.00001 127.774ZM5 6L5 7.93333L7 7.93333L7 6L5 6ZM5 11.8L5 15.6667L7 15.6667L7 11.8L5 11.8ZM5 19.5333L5 23.4L7 23.4L7 19.5333L5 19.5333ZM5 27.2667L5 31.1333L7 31.1333L7 27.2667L5 27.2667ZM5 35L5 38.8667L7 38.8667L7 35L5 35ZM5 42.7333L5 46.6L7 46.6L7 42.7333L5 42.7333ZM5 50.4667L5 54.3333L7 54.3333L7 50.4667L5 50.4667ZM5 58.2L5 62.0667L7 62.0667L7 58.2L5 58.2ZM5 65.9333L5 69.8L7 69.8L7 65.9333L5 65.9333ZM5 73.6666L5 77.5333L7 77.5333L7 73.6666L5 73.6666ZM5 81.4L5 85.2667L7 85.2667L7 81.4L5 81.4ZM5 89.1333L5 93L7 93L7 89.1333L5 89.1333ZM5 96.8667L5 100.733L7 100.733L7 96.8667L5 96.8667ZM5 104.6L5 108.467L7 108.467L7 104.6L5 104.6ZM5 112.333L5 116.2L7 116.2L7 112.333L5 112.333ZM5 120.067L5.00001 122L7.00001 122L7 120.067L5 120.067Z" fill="#45433E"/>
                    </svg>
                </div>
            </div>

            <div className='w-full h-[696px] relative flex justify-center items-center'>
                <div className='w-[1659px] h-[500px] flex'>
                    {intro_info.map((item, idx) => (
                        <IntroBoard image={item.image} title={item.title} content={item.content} status={item.status} key={idx}/>
                    ))}
                </div>
            </div>

        </div>
    )
}