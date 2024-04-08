import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import FooterItem from "./FooterItem";

const Footer: React.FC = () => {

    return (
        <footer className="bg-[#000] flex-shrink-0 w-full h-[644px]">
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
                        <div className="w-[520px] h-[108px]">
                            
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;