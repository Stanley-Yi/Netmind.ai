import React from "react";
import Image from 'next/image';
import {IntroBoardProps} from '@/consts';


const IntroBoard: React.FC<IntroBoardProps> = ({
    image,
    title,
    content
}) => {

   
    return (
        <div className="w-[525px] h-[500px] flex-shrink-0 rounded-[20px] bg-gradient-to-r from-[rgba(154, 106, 255, 0.06)] via-[rgba(255, 216, 220, 0.06)] to-[rgba(255, 239, 100, 0.06)] backdrop-blur-[5px] mx-[25px] flex-col">
            <div className="flex justify-center">
                <div className="w-[503px] h-[254px] my-[10px] flex-shrink-0 rounded-[44px] relative">
                    <Image
                        src={image}
                        alt={title}
                        layout='fill'
                    />
                </div>
            </div>

            <div className="mt-[20px] flex-col mx-[10px]">
                <div className="w-full h-[53px] my-[10px]">
                    <span className="text-white font-inter text-[35px] font-medium leading-[52.5px]">
                        {title}
                    </span>
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