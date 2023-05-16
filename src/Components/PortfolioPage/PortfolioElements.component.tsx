import { Box } from "@mui/material";
import { PortfolioItemProps } from "../../Interfaces/IPortfolioItem";
import { ContentBoxSx, DescriptionBoxLeftSx, DescriptionBoxRightSx, ImageBoxSx, PortfolioRootBoxSx, TitleBoxLeftSx, TitleBoxRightSx } from "../../Styles/PortfolioPage/PortfolioStyles";
import { LightText, LightTitle } from "../Miscellaneous/GlobalElements.component";
import PortfolioDialog from "./PortfolioDialog";

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
    const { title, imageUrl, description, dialogImageUrl, duration, languages } = props
    return (
        <>
            <PortfolioRootBox>
                <ImageBox>
                    <PortfolioDialog
                        imageUrl={imageUrl}
                        dialogImageUrl={dialogImageUrl}
                        dialogTitle={title}
                        dialogDescription={description}
                        duration={duration}
                        languages={languages}
                    />
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
    const { title, imageUrl, description, dialogImageUrl, duration, languages } = props
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
                    <PortfolioDialog
                        imageUrl={imageUrl}
                        dialogImageUrl={dialogImageUrl}
                        dialogTitle={title}
                        dialogDescription={description}
                        duration={duration}
                        languages={languages}
                    />
                </ImageBox>
            </PortfolioRootBox>
        </>
    );
}