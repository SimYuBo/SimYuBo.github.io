import { Box, Link, Typography } from "@mui/material";
import { InfoBoxSx, ProjectContentBoxSx, ProjectImageBoxSx, ProjectLargeTextSx, ProjectLinkSx, ProjectMediumTextSx, ProjectSmallDescriptionSx, ProjectSmallTextSx, ProjectTitleSx } from "../../Styles/ProjectStyles";
import React from 'react';
import { Link as BrowserLink } from "react-router-dom";
import { NavLinkProps } from "../../Interfaces/ICustomNav";

export function ProjectImageBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={ProjectImageBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

export function InfoBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={InfoBoxSx}
            >
                {children}
            </Box>

        </>
    );
}

export function ProjectContentBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={ProjectContentBoxSx}
            >
                {children}
            </Box>

        </>
    );
}

export function ProjectSmallDescription({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={ProjectSmallDescriptionSx}
            >
                {children}
            </Typography>

        </>
    );
}

export function ProjectLargeText({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={ProjectLargeTextSx}
            >
                {children}
            </Typography>

        </>
    );
}

export function ProjectMediumText({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={ProjectMediumTextSx}
            >
                {children}
            </Typography>

        </>
    );
}

export function ProjectSmallText({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={ProjectSmallTextSx}
            >
                {children}
            </Typography>

        </>
    );
}

export function ProjectTitle({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Typography
                sx={ProjectTitleSx}
            >
                {children}
            </Typography>

        </>
    );
}

export function ProjectLink(props: NavLinkProps) {
    const { children, link } = props
    return (
        <>
            <Link
                rel="noopener noreferrer"
                target="_blank"
                component={BrowserLink}
                to={link}
                underline='none'
                sx={ProjectLinkSx}
            >
                {children}
            </Link>
        </>
    );
}