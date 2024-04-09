import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from 'next/link';



export default function Home() {

    const dis_category = ['DJ Equipments', 'Cameras', 'Game Consoles', 'Laptops'];


    // @ts-ignore
    return (
        <>
            <div className="min-h-[100vh] bg-[#f9f9f9]">

                <div className="flex justify-center my-8 px-6 w-full md:w-3/4 flex-col mx-auto">
                    <div className="flex-grow max-w-full">
                        <div className="mb-7 flex flex-col pl-10 md:flex-row md:items-baseline">
                            <p className="leading-10 mb-0 font-bold mr-3 text-3xl text-black">More ways to tech
                                sustainably</p>
                        </div>

                        <nav>
                            <ul className="list-none grid gap-3 grid-cols-2 md:grid-cols-6">
                                <li className="col-span-2 flex mx-5">
                                    <div className="w-full h-auto block relative hover:shadow-lg bg-white shadow-md rounded-lg motion-safe:transition motion-safe:ease-in motion-safe:duration-200 text-current no-underline after:absolute after:rounded-lg after:top-0 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:bg-paper-primary-light active:after:opacity-20
       hover:shadow-long cursor-pointer focus-visible-outline-default">
                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex flex-col justify-between items-center h-full p-4 md:p-6">
                                                <div className="w-full min-h-0 max-h-full max-w-xs m-auto mt-2">
                                                    <Image className="h-auto max-w-full max-h-full block object-contain"
                                                           width={200} height={200}
                                                           src={"/data/Copy_of_BM_battery_EN.png"} alt={"battery"}/>
                                                </div>

                                                <div className="min-h-0 w-full text-center m-5">
                                                    <span className="text-black text-primary mt-3 body-1-light">iPhones with New Battery</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-span-1 md:col-span-2 flex md:mx-5 ml-5">
                                    <div className="w-full h-auto block relative hover:shadow-lg bg-white shadow-md rounded-lg motion-safe:transition motion-safe:ease-in motion-safe:duration-200 text-current no-underline after:absolute after:rounded-lg after:top-0 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:bg-paper-primary-light active:after:opacity-20
       hover:shadow-long cursor-pointer focus-visible-outline-default">
                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex flex-col justify-between items-center h-full p-4 md:p-6">
                                                <div className="w-full min-h-0 max-h-full max-w-xs m-auto mt-2">
                                                    <Image className="h-auto max-w-full max-h-full block object-contain"
                                                           width={200} height={200}
                                                           src={"/data/newcontentbloc_070723_V4.jpg"} alt={"battery"}/>
                                                </div>

                                                <div className="min-h-0 w-full text-center m-5">
                                                    <span className="text-black text-primary mt-3 body-1-light">My first smartphone</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-span-1 md:col-span-2 flex md:mx-5 mr-5">
                                    <div className="w-full h-auto block relative hover:shadow-lg bg-white shadow-md rounded-lg motion-safe:transition motion-safe:ease-in motion-safe:duration-200 text-current no-underline after:absolute after:rounded-lg after:top-0 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:bg-paper-primary-light active:after:opacity-20
       hover:shadow-long cursor-pointer focus-visible-outline-default">
                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex flex-col justify-between items-center h-full p-4 md:p-6">
                                                <div className="w-full min-h-0 max-h-full max-w-xs m-auto mt-2">
                                                    <Image className="h-auto max-w-full max-h-full block object-contain"
                                                           width={200} height={200}
                                                           src={"/data/AA-Accessories-Desktop.png"} alt={"battery"}/>
                                                </div>

                                                <div className="min-h-0 w-full text-center m-5">
                                                    <span className="text-black text-primary mt-3 body-1-light">Tech accessories</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>


                {/*\who we are*/}
                <div className="py-24 w-3/4 flex flex-col mx-auto">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-5xl mx-auto text-center mb-16">
                            <p className="mb-4 text-7xl leading-tight font-bold tracking-tighter text-black">
                                Who we are !
                            </p>
                            <p className="mb-4 text-5xl leading-tight font-bold tracking-tighter text-black">
                                Reviews and what we do
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}