import {FC, ReactElement, ReactNode} from 'react';
import Footer from "./footer";
import Header from "./header";

type LayoutsProps = {
    children: ReactNode;
}

const Layouts: FC<LayoutsProps> = ({children}): ReactElement => {
    return (
        <div className="h-auto w-[1920px] flex flex-col bg-[#FAFAFA]">
            <Header/>
            <div className="flex-grow flex flex-col mt-[-104px]">
                <div className="flex-grow">{children}</div>
            </div>
            <Footer/>
        </div>
    );
};
export default Layouts;
