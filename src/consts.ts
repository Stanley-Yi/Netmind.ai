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