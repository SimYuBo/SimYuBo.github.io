import { Box } from "@mui/material";
import { ContentBoxSx, DescriptionBoxSx, ImageBoxSx, SkillsTextBoxSx } from "../../Styles/AboutPage/AboutStyles";
import { LightText } from "../Miscellaneous/GlobalElements.component";
import ProfileTestImg from "../../Assets/350x500.svg"

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

function DescriptionBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={DescriptionBoxSx}
            >
                <LightText>
                    {children}
                </LightText>
            </Box>
        </>
    );
}

export function SkillsTextBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={SkillsTextBoxSx}
            >
                {children}
            </Box>
        </>
    );
}

export function ImageDescription() {
    return (
        <>
            <ContentBox>
                <ImageBox>
                    <img src={ProfileTestImg} alt=""></img>
                </ImageBox>
                <DescriptionBox>
                    Nice to meet you! My name is Sim Yu Bo, I am currently a 2nd Year student studying in Republic Polytechnic for a Diploma in Digital Design and Development.

                    I strive to create enjoyable and easy-to-use software that everyone can use, and I will stop at nothing to achieve this goal.

                    I don't think of programming as something used to create, I think of it as a way to solve problems. My way of thinking has allowed myself to see assignments as separate problems that I have to solve which enhances my productivity.
                </DescriptionBox>
            </ContentBox>
        </>
    );
}