export interface NavbarState {
    prevScrollPos: number;
    visible: boolean;
}

export interface NavLinkProps {
    children:  React.ReactNode | React.ReactNode[];
    link: string;
}