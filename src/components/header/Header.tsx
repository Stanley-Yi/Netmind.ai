'use client'

import React from "react";
import Image from 'next/image'
import Link from "next/link";
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import { it } from "node:test";

interface HeaderProps {
    style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = () => {

    const router = useRouter();
    const pathname = usePathname();

    const navigator_items = [
        {name: "Services", url: "/service"},
        {name: "Society", url: "/society"},
        {name: "Create Agent", url: "/"},
        {name: "Entity", url: "/"},
        {name: <svg xmlns="http://www.w3.org/2000/svg" width="424" height="2" viewBox="0 0 524 2" fill="none">
                    <path d="M0 1H524" stroke="#222222" stroke-width="2"/>
                </svg>, url: "/"},
    ]

    const account_url = 'https://accounts.protago-dev.com/?url=https://xyz.netmind.ai&sysCode=4912e615'

    return (

        <div className="w-full h-[104px] flex items-center border-b border-[#F4F4F4] bg-white bg-opacity-60 flex-shrink-0 z-50">
            <div className="mx-[90px] mt-[24px] mb-[22px] flex items-center z-20">
                <div className="w-[282px] h-[58px] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="29" viewBox="0 0 55 29" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6972 0.224226C40.2916 0.262766 40.8654 0.459999 41.3605 0.795956C41.8882 1.069 42.3378 1.47529 42.666 1.97572C43.2038 2.94596 43.4079 4.07039 43.246 5.17145C43.0841 6.2725 42.5654 7.28745 41.7718 8.05602C41.0471 8.6782 40.2442 9.20003 39.3843 9.60786C38.0501 10.2461 36.8714 11.1758 35.9327 12.3304C34.6521 13.8817 33.6476 15.6475 32.9639 17.5486C32.4462 18.9527 32.2416 20.4559 32.3648 21.95C32.4582 22.7609 32.4582 23.5802 32.3648 24.3912C32.2226 25.5706 31.6513 26.6536 30.7629 27.4276C29.8745 28.2016 28.7332 28.6107 27.5629 28.5748C26.3832 28.6178 25.2315 28.2038 24.3414 27.4168C23.4514 26.6298 22.8896 25.5286 22.77 24.3367C22.6766 23.5257 22.6766 22.7065 22.77 21.8955C22.8888 20.4016 22.6843 18.8994 22.1709 17.4941C21.832 16.55 21.41 15.6388 20.9101 14.7716C20.4099 13.8988 19.8386 13.0701 19.2021 12.2941C18.5394 11.4861 17.7619 10.7826 16.8951 10.2068C16.4986 9.97634 16.0661 9.81671 15.6164 9.73491C15.1424 9.81457 14.691 9.99721 14.293 10.2703C13.4626 10.8415 12.716 11.5289 12.0754 12.3122C11.4389 13.0882 10.8676 13.917 10.3674 14.7897C9.87104 15.6589 9.44921 16.5697 9.10661 17.5123C8.59167 18.9171 8.39011 20.4203 8.51644 21.9137C8.63389 22.9899 8.55508 24.0789 8.28394 25.1262C8.00707 26.1495 7.39847 27.0481 6.55641 27.6771C5.71436 28.3061 4.68799 28.6288 3.64304 28.5929C3.05284 28.568 2.47938 28.3865 1.97982 28.0666C1.4565 27.7859 1.01309 27.3734 0.692173 26.8687C0.133324 25.9105 -0.0969589 24.7915 0.0373239 23.6865C0.171607 22.5815 0.662886 21.5527 1.43436 20.7611C2.20882 20.1356 3.05564 19.6084 3.95601 19.1911C5.28974 18.5521 6.46825 17.6226 7.40763 16.4686C8.04983 15.695 8.6243 14.8661 9.12449 13.9911C9.6147 13.12 10.0334 12.2094 10.3764 11.2686C10.8935 9.86426 11.0981 8.36121 10.9755 6.86718C10.8724 6.05682 10.8724 5.23635 10.9755 4.42599C11.3063 2.7471 12.2542 0.233301 15.6343 0.233301C19.0144 0.233301 19.9086 2.66542 20.302 4.48044C20.4103 5.29046 20.4103 6.11162 20.302 6.92164C20.1794 8.41566 20.384 9.91871 20.9011 11.323C21.2435 12.2657 21.6653 13.1765 22.1619 14.0456C22.6616 14.9231 23.2393 15.7523 23.8878 16.5231C24.5856 17.3737 25.4127 18.1058 26.3379 18.692C26.725 18.9287 27.1528 19.0889 27.5987 19.1639C28.0865 19.0738 28.5517 18.8856 28.9668 18.6103C29.8364 18.0348 30.6169 17.3314 31.2828 16.5231C31.9156 15.729 32.4809 14.882 32.9728 13.9911C33.4695 13.1221 33.8913 12.2112 34.2337 11.2686C34.7462 9.8631 34.9507 8.36108 34.8328 6.86718C34.7411 5.96033 34.7651 5.04526 34.9043 4.14466C35.2262 2.52022 37.113 0.0880997 39.6972 0.224226ZM54.8618 24.01C54.8618 26.546 52.8361 28.602 50.3372 28.602C47.8383 28.602 45.8125 26.546 45.8125 24.01C45.8125 21.4739 47.8383 19.418 50.3372 19.418C52.8361 19.418 54.8618 21.4739 54.8618 24.01Z" fill="#111111"/>
                    </svg>

                    <span className="ml-[17px] text-[#111] font-roboto text-3xl font-medium leading-normal cursor-pointer" onClick={() => router.push('/home')}>
                        NetMind XYZ
                    </span>
                </div>

                <div className="w-[1300px] h-[20px] flex items-center justify-center">
                    {navigator_items.map((item, idx)  => (
                        <div className="mx-[40px] flex items-center justify-center cursor-pointer" key={idx} onClick={() => router.push(item.url)}>
                            <span className="text-[#111] text-center font-roboto text-xl font-normal leading-normal">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="w-[141px] h-[50px] flex-shrink-0 flex items-center justify-center">
                    <button className="rounded-[25px] px-3 py-2 border border-black flex items-center justify-center cursor-pointer" onClick={() => router.push(account_url)}>
                        <span className="text-[#111] text-center font-roboto text-base font-normal leading-normal">
                            Log in | Sign up
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;