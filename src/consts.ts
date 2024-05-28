// store image or repo url

export type FooterLink = {
    name: string;
    path: string;
    target?: '_self' | '_black';
};

export interface FooterItemProps {
    title: string;
    links: FooterLink[];
    extend?: React.ReactNode;
}

export interface IntroBoardProps {
    image: string;
    title: string;
    content: string;
    status?: string;
}

export interface ServiceBoardProps {
    image: string;
    title: string;
    url: string;
    logo?: any;
}