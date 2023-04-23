import { Box } from "@mui/material";
import React from 'react';
import { BlockBoxSx, FlexBoxSx, MainContentBoxSx, RootBoxSx } from "../../Styles/Homepage/HomeStyles";

export function RootBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={RootBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

export function MainContentBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={MainContentBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

export function FlexBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={FlexBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

export function BlockBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={BlockBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

export function FlexBlockBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={FlexBoxSx}
            >
                <Box
                    sx={BlockBoxSx}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
}

// export function LeftFeaturedSection(props: ILeftFeaturedSection) {
//     const {children,img} = props
//     return (
//         <>
//             <div className="container">
//                 <div className="image-container">
//                     <img src={img} alt="" />
//                 </div>
//                 <div className="text-container">
//                     {children}
//                 </div>
//             </div>
//         </>
//     );
// }
