import { Box } from "@mui/material";
import { ImageDescription, SkillsTextBox } from "../Elements/AboutElements.component";
import { Footer } from "../Elements/Footer.component";
import { RootBox, TopMarginBox, FadeInSection, LightHeader, MainContentBox, LightText, LightTitle } from "../Elements/GlobalElements.component";

export default function AboutContent() {
    return (
        <>
            <TopMarginBox>
                <FadeInSection>
                    <LightHeader>
                        Tell us about yourself
                    </LightHeader>
                </FadeInSection>
                <FadeInSection>
                    <ImageDescription />
                </FadeInSection>
            </TopMarginBox>
            <MainContentBox>
                <FadeInSection>
                    <Box
                        sx={{ mb: '5em' }}
                    >
                        <LightHeader>
                            Tell us about your skills
                        </LightHeader>
                        <LightText>
                            While studying for my diploma, I have picked up a few skills that include UI/UX design, back-end web development, front-end web development
                        </LightText>
                    </Box>
                </FadeInSection>
                <FadeInSection>
                    <SkillsTextBox>
                        <LightTitle>
                            UI/UX Design
                        </LightTitle>
                        <LightText>
                            I am knowledgable in using adobe XD, illustrator and photoshop to create and edit content for use in branding, wireframing and prototyping of projects
                        </LightText>
                    </SkillsTextBox>
                </FadeInSection>
                <FadeInSection>
                    <SkillsTextBox>
                        <LightTitle>
                            Front-end Web Development
                        </LightTitle>
                        <LightText>
                            I can use CSS, HTML5, React, JavaScript as well as CSS libraries like bootstrap 5 to create stunning webpages
                        </LightText>
                    </SkillsTextBox>
                </FadeInSection>
                <FadeInSection>
                    <SkillsTextBox>
                        <LightTitle>
                            Back-end Web Development
                        </LightTitle>
                        <LightText>
                            I am familiar in using PHP and SQL queries to send and retrieve data from a database, as well as to perform simple calculations and retrieval of user data
                        </LightText>
                    </SkillsTextBox>
                </FadeInSection>
            </MainContentBox>
        </>
    );
}