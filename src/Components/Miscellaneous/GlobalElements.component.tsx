import { Box, Typography } from "@mui/material";
import React from 'react';
import { BlockBoxSx, ContrastTextSx, DarkTextSx, FlexBoxSx, LightHeaderSx, LightTextSx, LightTitleSx, MainContentBoxSx, RootBoxSx } from "../../Styles/Components/GlobalStyles";

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

export function ContrastText({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={ContrastTextSx}
            >
                {children}
            </Typography>
        </>
    );
}

export function DarkText({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={DarkTextSx}
            >
                {children}
            </Typography>
        </>
    );
}

export function LightText({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={LightTextSx}
            >
                {children}
            </Typography>
        </>
    );
}

export function LightTitle({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={LightTitleSx}
            >
                {children}
            </Typography>
        </>
    );
}

export function LightHeader({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={LightHeaderSx}
            >
                {children}
            </Typography>
        </>
    );
}