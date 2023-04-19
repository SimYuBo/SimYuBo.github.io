import { Box, Link, Typography } from "@mui/material";
import React from 'react';
import { LinkTypography, NavbarMenuSx, NavbarRootSx } from "../../Styles/Components/NavbarStyles";
import { NavLinkProps } from "../../Interfaces/CustomNavProps";
// import logo from './Personal_Logo_Transparent.png';

export function Navbar({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={NavbarRootSx}
            >
                {children}
            </Box>
        </>
    );
}

export function NavMenu({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={NavbarMenuSx}
            >
                <Typography
                    sx={LinkTypography}
                >
                    {children}
                </Typography>

            </Box>
        </>
    );
}

export function NavLink( props: NavLinkProps ) {
    const { children, customNavLink } = props
    return (
        <>
            <Link
                href= {customNavLink}
                underline='none'
                sx={LinkTypography}
            >
                {children}
            </Link>
        </>
    );
}

// export function NavLogo() {
//     return (
//         <>
//             <img src={logo} alt='Logo' />
//         </>
//     );
// }