import { Box } from "@mui/material";
import { PortfolioItemProps } from "../../Interfaces/IPortfolioItem";
import { ContentBoxSx, DescriptionBoxLeftSx, DescriptionBoxRightSx, ImageBoxSx, PortfolioRootBoxSx, TitleBoxLeftSx, TitleBoxRightSx } from "../../Styles/PortfolioStyles";
import { LightTitle, LightText } from "./GlobalElements.component";

function PortfolioRootBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={PortfolioRootBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

function ImageBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={ImageBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

function ContentBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={ContentBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

function TitleBoxLeft({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={TitleBoxLeftSx}
            >
                <LightTitle>
                    {children}
                </LightTitle>
            </Box>
        </>
    );
}

function TitleBoxRight({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={TitleBoxRightSx}
            >
                <LightTitle>
                    {children}
                </LightTitle>
            </Box>
        </>
    );
}

function DescriptionBoxLeft({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={DescriptionBoxLeftSx}
            >
                <LightText>
                    {children}
                </LightText>
            </Box>
        </>
    );
}

function DescriptionBoxRight({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={DescriptionBoxRightSx}
            >
                <LightText>
                    {children}
                </LightText>
            </Box>
        </>
    );
}

export function PortfolioItemLeft(props: PortfolioItemProps) {
    const { title, imageUrl, description } = props
    return (
        <>
            <PortfolioRootBox>
                <ImageBox>
                    <img
                        src={imageUrl}
                        alt=""
                        style={{
                            borderRadius: 3,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}></img>
                </ImageBox>

                <ContentBox>
                    <TitleBoxRight>
                        {title}
                    </TitleBoxRight>
                    <DescriptionBoxRight>
                        {description}
                    </DescriptionBoxRight>
                </ContentBox>
            </PortfolioRootBox>
        </>
    );
}

export function PortfolioItemRight(props: PortfolioItemProps) {
    const { title, imageUrl, description } = props
    return (
        <>
            <PortfolioRootBox>
                <ContentBox>
                    <TitleBoxLeft>
                        {title}
                    </TitleBoxLeft>
                    <DescriptionBoxLeft>
                        {description}
                    </DescriptionBoxLeft>
                </ContentBox>
                <ImageBox>
                    <img
                        src={imageUrl}
                        alt=""
                        style={{
                            borderRadius: 3,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}></img>
                </ImageBox>
            </PortfolioRootBox>
        </>
    );
}