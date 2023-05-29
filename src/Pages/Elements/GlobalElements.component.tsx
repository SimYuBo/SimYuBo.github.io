import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from 'react';
import { BlockBoxSx, ContrastTextSx, DarkTextSx, FlexBoxSx, LightHeaderSx, LightTextSx, LightTitleSx, MainContentBoxSx, RootBoxSx, TopMarginBoxSx } from "../../Styles/GlobalStyles";
import { FadeInSectionProps } from "../../Interfaces/IGlobal";

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

export function TopMarginBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={TopMarginBoxSx}
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

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []);

    return (
        <div ref={sectionRef}>
            <Box
                sx={{
                    opacity: inView ? 1 : 0,
                    transition: 'opacity 0.5s',
                }}
            >
                {children}
            </Box>
        </div>
    );
};