import React from 'react';
import Image from 'next/image';
import FooterItem from "./FooterItem";
import {FooterLink} from '@/consts';



const Footer: React.FC = () => {

    const footer_links = {
        "Product": [{name: "NetMind Power", path: '/'}, {name: "NetMind Chat", path: '/'}, {name: "NetMind Studio", path: '/'}, {name: "NetMind Life", path: '/'}],
        "Community": [{name: "Business partners", path: '/'}, {name: "Research Partners", path: '/'}],
        "Blog": [{name: "News", path: '/'}],
        "Research": [{name: "Publications", path: '/'}],
        "About": [{name: "Our Values", path: '/'}, {name: "Our goals", path: '/'}, {name: "Our teams", path: '/'}]
    } as {[key: string] : FooterLink[]}

    return (
        <footer className="bg-[#141414] flex-shrink-0 w-full h-[644px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="2" viewBox="0 0 1920 2" fill="none">
                <path d="M0 1L1920 0.999832" stroke="white" stroke-opacity="0.3" stroke-width="0.5" stroke-linecap="square"/>
            </svg>

            <div className="flex justify-between">
                {/* left part */}
                <div className="ml-[259px]">
                    <div className="mt-[100px]">
                        <div className="w-[520px] h-[108px]">
                            <span className="text-white font-roboto text-4xl font-normal leading-[54px]">
                                Transforming Humanity Through the Power of AI
                            </span>
                        </div>
                    </div>

                    <div className="mt-[56px]">
                        <div className="w-[202px] h-[52px]">
                            <button className='inline-flex items-start gap-2.5 px-10 py-2 rounded-full-41 bg-[#FAFAFA] text-black'>
                                <span className='text-black text-center font-roboto text-2xl font-normal leading-9'>
                                    Contact Us
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-[102px]">
                        <Image src="/NetMind Logo (2)-11.png"
                            alt="Description" width={244} height={125} 
                            objectFit="none" objectPosition="-82px -118px" />
                    </div>

                    <div className="mt-[50px] flex">
                        <div className='h-[21px] mr-[40px] flex items-center'>
                            <span className='text-[rgba(255,255,255,0.5)] font-roboto text-sm not-italic font-light leading-5 mr-[4px]'>NetMind.AI</span>
                            <svg className='w-3 h-3 flex-shrink-0 mr-[5px]' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_34_35)">
                                <path d="M5.94 4.57C6.58 4.6 6.745 5.145 6.755 5.4H7.65C7.61 4.41 6.905 3.805 5.925 3.805C4.82 3.805 4 4.5 4 6.07C4 7.04 4.465 8.19 5.92 8.19C7.03 8.19 7.625 7.365 7.64 6.715H6.745C6.73 7.01 6.52 7.405 5.93 7.435C5.275 7.415 5 6.905 5 6.07C5 4.625 5.64 4.58 5.94 4.57ZM6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.795 10 2 8.205 2 6C2 3.795 3.795 2 6 2C8.205 2 10 3.795 10 6C10 8.205 8.205 10 6 10Z" fill="white" fill-opacity="0.5"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_34_35">
                                <rect width="12" height="12" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <span className='text-[rgba(255,255,255,0.5)] font-roboto text-sm not-italic font-light leading-5'>2021-2023</span>
                        </div>
                        <div className='w-[160px] h-[21px] mr-[40px] flex'>
                            <span className='text-[rgba(255,255,255,0.5)] font-roboto text-sm not-italic font-light leading-5'>Terms and conditions</span>
                        </div>
                        <div className='w-[100px] h-[21px] mr-[40px] flex'>
                            <span className='text-[rgba(255,255,255,0.5)] font-roboto text-sm not-italic font-light leading-5'>Privacy policy</span>
                        </div>
                    </div>
                </div>

                {/* right part */}
                <div className="mr-[159px]">
                    <div className="mt-[100px] transform translate-x-[110px]">
                        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[700px] h-[420px]">
                            {Object.keys(footer_links).map((key, idx) => (
                                <div className="col-span-1 row-span-2" key={idx}>
                                    <FooterItem
                                        title={key}
                                        links={footer_links[key]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-[64px] flex justify-end">
                        <div className='w-[30px] h-[30px] mr-[40px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 3C8.37 3 3 8.50942 3 15.3047C3 20.7423 6.438 25.3535 11.205 26.9787C11.805 27.0946 12.025 26.7142 12.025 26.3871C12.025 26.0949 12.015 25.3207 12.01 24.2953C8.672 25.0377 7.968 22.6444 7.968 22.6444C7.422 21.2243 6.633 20.8449 6.633 20.8449C5.546 20.082 6.717 20.0974 6.717 20.0974C7.922 20.1835 8.555 21.3647 8.555 21.3647C9.625 23.2463 11.364 22.7029 12.05 22.3881C12.158 21.5924 12.467 21.0499 12.81 20.7423C10.145 20.4347 7.344 19.3765 7.344 14.6618C7.344 13.3185 7.809 12.2213 8.579 11.36C8.444 11.0493 8.039 9.79834 8.684 8.10337C8.684 8.10337 9.689 7.77319 11.984 9.3646C12.944 9.09082 13.964 8.95546 14.984 8.94931C16.004 8.95546 17.024 9.09082 17.984 9.3646C20.264 7.77319 21.269 8.10337 21.269 8.10337C21.914 9.79834 21.509 11.0493 21.389 11.36C22.154 12.2213 22.619 13.3185 22.619 14.6618C22.619 19.3888 19.814 20.4296 17.144 20.7321C17.564 21.1012 17.954 21.8559 17.954 23.0084C17.954 24.6552 17.939 25.978 17.939 26.3779C17.939 26.7009 18.149 27.0854 18.764 26.9623C23.565 25.3484 27 20.7341 27 15.3047C27 8.50942 21.627 3 15 3Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        
                        <div className='w-[30px] h-[30px] mr-[40px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <g opacity="0.7">
                                    <path d="M21.8911 21.8955H18.7814V17.0226C18.7814 15.8606 18.7578 14.3652 17.1609 14.3652C15.5395 14.3652 15.2919 15.6296 15.2919 16.9369V21.8955H12.1821V11.875H15.1694V13.2409H15.2096C15.627 12.4534 16.642 11.6221 18.1584 11.6221C21.3092 11.6221 21.892 13.6959 21.892 16.3953L21.8911 21.8955ZM8.66988 10.5039C7.66887 10.5039 6.86475 9.69362 6.86475 8.697C6.86475 7.70125 7.66975 6.89188 8.66988 6.89188C9.66738 6.89188 10.4759 7.70125 10.4759 8.697C10.4759 9.69362 9.6665 10.5039 8.66988 10.5039ZM10.2291 21.8955H7.11063V11.875H10.2291V21.8955ZM23.4469 4H5.54963C4.693 4 4 4.67725 4 5.51287V23.4871C4 24.3236 4.693 25 5.54963 25H23.4443C24.3 25 25 24.3236 25 23.4871V5.51287C25 4.67725 24.3 4 23.4443 4L23.4469 4Z" fill="white"/>
                                </g>
                            </svg>
                        </div>
                        
                        <div className='w-[30px] h-[30px] mr-[40px] flex justify-center items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="23" height="20" viewBox="0 0 23 20" fill="none">
                                <g opacity="0.7">
                                    <path d="M22.955 2.38171C22.1069 2.78054 21.2013 3.05224 20.2478 3.1763C21.2195 2.54985 21.967 1.56252 22.3206 0.384477C21.4092 0.953504 20.3992 1.36771 19.324 1.5984C18.4654 0.615164 17.2416 0 15.8828 0C13.2791 0 11.168 2.25868 11.168 5.04127C11.168 5.44112 11.2111 5.8256 11.2897 6.19367C7.37023 5.9958 3.89642 3.98216 1.5716 0.938125C1.16241 1.67837 0.933378 2.53858 0.933378 3.47568C0.933378 5.22889 1.76709 6.76988 3.03012 7.67519C2.25678 7.64854 1.52944 7.42093 0.895046 7.04363V7.10617C0.895046 9.55144 2.51744 11.5907 4.67647 12.0552C4.2807 12.169 3.86288 12.2305 3.43452 12.2305C3.13362 12.2305 2.84517 12.1997 2.55673 12.1423C3.16141 14.1447 4.89975 15.6047 6.96871 15.6457C5.35878 16.998 3.31857 17.8039 1.1212 17.8039C0.747469 17.8039 0.374693 17.7803 0 17.7352C2.0977 19.1644 4.56914 20 7.24182 20C15.9182 20 20.657 12.3146 20.657 5.66053C20.657 5.44625 20.657 5.22992 20.6426 5.01461C21.5635 4.3082 22.3675 3.41518 23 2.40221L22.955 2.38171Z" fill="white"/>
                                </g>
                            </svg>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px] cursor-pointer'
                            width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g opacity="0.7">
                                <path d="M27 15.0734C27 8.4054 21.6275 3 15 3C8.37259 3 3 8.4054 3 15.0734C3 21.0995 7.38824 26.0942 13.125 27V18.5633H10.0781V15.0734H13.125V12.4134C13.125 9.38754 14.9165 7.71614 17.6576 7.71614C18.9705 7.71614 20.3438 7.95194 20.3438 7.95194V10.9231H18.8307C17.3399 10.9231 16.875 11.8538 16.875 12.8086V15.0734H20.2032L19.6711 18.5633H16.875V27C22.6119 26.0942 27 21.0995 27 15.0734Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;