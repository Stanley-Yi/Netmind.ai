import React, {useEffect, useRef, useState} from "react";
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {Layout} from '@/components'
import 'tailwindcss/tailwind.css'
import '@/globals.css'
import dynamic from "next/dynamic";
import {SWRConfig} from "swr";


export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({Component, pageProps}: AppPropsWithLayout) => {

    const designWidth = 1920;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    let scale = screenWidth > 768 ? screenWidth / designWidth : 1;

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (wrapperRef.current) {
            const originalHeight = designWidth * (window.innerHeight / window.innerWidth);
            wrapperRef.current.style.height = `${originalHeight * scale}px`;
        }

        scale = screenWidth > 768 && screenWidth <= 1920 ? screenWidth / designWidth : 1;
    }, [scale]);

    return (
        <SWRConfig value={{
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }}>
            <div ref={wrapperRef} className="wrapper" style={{ transform: `scale(${scale})` }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </SWRConfig>
    );
}


export default dynamic(() => Promise.resolve(App), {
    ssr: false,
});