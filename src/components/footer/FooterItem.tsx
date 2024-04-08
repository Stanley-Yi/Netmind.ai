import React from "react";
import Link from 'next/link';
import {FooterItemProps} from '@/consts';


const FooterItem: React.FC<FooterItemProps> = (
    {
        title,
        links,
        extend
    }
) => {

    return (
        <div className="w-[139px] mx-[44px] h-[200px] my-[5px]">
            <div className="h-[30px]">
                <span className="text-white font-roboto text-lg font-semibold leading-7">{title}</span>
            </div>
            <ul className="h-[24px] flex-shrink-0">
                {links.map((item, idx) =>(
                    <li key={idx} className="my-[10px]">
                        <Link
                            href={item.path}
                            className="inline-block text-[rgba(255,255,255,0.7)] font-roboto text-base font-normal leading-6 cursor-pointer rounded-md no-underline"
                        >{item.name}</Link>
                    </li>
                ))}
                <li>
                    {extend}
                </li>
            </ul>
        </div>
    )
};

export default FooterItem;