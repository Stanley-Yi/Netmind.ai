import React from "react";
import Image from 'next/image';
import {IntroBoardProps} from '@/consts';


const IntroBoard: React.FC<IntroBoardProps> = ({
    image,
    title,
    content,
    status,
}) => {

   
    return (
        <div className="w-[525px] h-[500px] flex-shrink-0 rounded-[20px] bg-neutral-900 backdrop-blur-[5px] mx-[25px] flex-col">
            <div className="flex justify-center">
                <div className="w-[503px] h-[254px] my-[10px] flex-shrink-0 rounded-[44px] relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        layout='fill'
                        className='object-cover'
                    />
                </div>
            </div>

            <div className="mt-[20px] flex-col mx-[10px]">
                <div className="w-full h-[53px] my-[10px] flex items-center">
                    <span className="text-white font-inter text-[35px] font-medium leading-[52.5px]">
                        {title}
                    </span>
                    {status ? <div className="w-[113px] h-[26px] ml-[16px] mt-3 bg-neutral-500 rounded-lg flex justify-center content-center"><div className="text-stone-300 text-base font-normal font-inter leading-normal">coming soon</div></div> : <></>}
                </div>

                <div className="w-full h-auto">
                    <span className="text-[#666] font-inter text-xl font-normal leading-[36px]">
                        {content}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default IntroBoard;