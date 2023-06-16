import { Box } from "@mui/material";
import { ContentBoxSx, DescriptionBoxSx, ImageBoxSx, SkillsTextBoxSx } from "../../Styles/AboutStyles";
import { LightText } from "../Elements/GlobalElements.component";
import ProfileImg from "../../Assets/Profile Image.png"

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
                    <img src={ProfileImg} alt="" style={{ height: '38em' }}></img>
                </ImageBox>
                <DescriptionBox>
                    <Box>
                        Pleasure to meet you! My name is Yu Bo.
                    </Box>
                    <Box sx={{marginTop: '1em'}}>
                        I am a 3rd Year student pursuing a Diploma in Digital Design and Development at Republic Polytechnic.
                    </Box>
                    <Box sx={{marginTop: '1em'}}>
                        With a passion for crafting user-friendly and engaging software, I am driven to go above and beyond in achieving this objective. Rather
                        than considering programming solely as a means of creation, I view it as a powerful problem-solving tool. This mindset enables me to approach
                        assignments as unique challenges, enhancing my productivity and propelling me towards innovative solutions.
                    </Box>
                    <Box sx={{marginTop: '1em'}}>
                        An interesting thing about myself is that I enjoy reading manga/webtoons/manhwa.
                    </Box>
                </DescriptionBox>
            </ContentBox>
        </>
    );
}