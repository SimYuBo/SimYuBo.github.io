import { Box } from "@mui/material";
import { PortfolioItemProps } from "../../Interfaces/IPortfolioItem";
import { ContentBoxSx, DescriptionBoxLeftSx, DescriptionBoxRightSx, ImageBoxSx, PortfolioRootBoxSx, TitleBoxLeftSx, TitleBoxRightSx } from "../../Styles/Portfolio/PortfolioStyles";
import { LightText, LightTitle } from "../Miscellaneous/GlobalElements.component";

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
    const { Title, Img, Desc } = props
    return (
        <>
            <PortfolioRootBox>
                <ImageBox>
                    <img
                        src={Img}
                        alt=""
                        style={{
                            width: '100%',
                            borderRadius: 3,
                        }}></img>
                </ImageBox>
                <ContentBox>
                    <TitleBoxRight>
                        {Title}
                    </TitleBoxRight>
                    <DescriptionBoxRight>
                        {Desc}
                    </DescriptionBoxRight>
                </ContentBox>
            </PortfolioRootBox>
        </>
    );
}

export function PortfolioItemRight(props: PortfolioItemProps) {
    const { Title, Img, Desc } = props
    return (
        <>
            <PortfolioRootBox>
                <ContentBox>
                    <TitleBoxLeft>
                        {Title}
                    </TitleBoxLeft>
                    <DescriptionBoxLeft>
                        {Desc}
                    </DescriptionBoxLeft>
                </ContentBox>
                <ImageBox>
                    <img
                        src={Img}
                        alt=""
                        style={{
                            width: '100%',
                            borderRadius: 3,
                        }}></img>
                </ImageBox>
            </PortfolioRootBox>
        </>
    );
}