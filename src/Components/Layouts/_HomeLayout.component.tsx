import { Box, Typography } from '@mui/material';
import { MixedTypographyBoxSx, SmallDescriptionBoxSx } from '../../Styles/HomePage/HomeStyles';
import '../../Styles/HomePage/HomeStyles.css';
import FeaturedTestImg from "../../Assets/500x300.svg"
import ProfileTestImg from "../../Assets/350x500.svg"
import { LfSection, RfSection } from '../HomePage/FeaturedSection.component';
import { Footer } from '../Miscellaneous/Footer.component';
import { CustomButton } from '../Miscellaneous/Button.component';
import { RootBox, MainContentBox, FlexBlockBox, FlexBox, ContrastText, LightText, LightHeader } from '../Miscellaneous/GlobalElements.component';

export default function HomeLayout() {
    return (
        <>
            <RootBox>
                <MainContentBox>
                    <FlexBlockBox>
                        <ContrastText>
                            Hello, my name is Yu Bo
                        </ContrastText>
                        <Box
                            sx={MixedTypographyBoxSx}
                        >
                            <Typography>
                                <span className='MainHeader'>I am a software Designer</span>
                                <span className='MainHeaderAlt'>/Developer.</span>
                            </Typography>
                        </Box>
                        <Box
                            sx={SmallDescriptionBoxSx}
                        >
                            <LightText>
                                I specialise in web development and always do my best to provide users with a fun and unique experience.
                            </LightText>
                        </Box>
                    </FlexBlockBox>
                </MainContentBox>
                <MainContentBox>
                    <FlexBox>
                        <FlexBlockBox>
                            <LightHeader>
                                Who are you?
                            </LightHeader>
                            <LightText>
                                Hello! my name is Yu Bo, I am currently a third year student at republic polytechnic studying for a diploma in Digital Design and Development. I always strive for my projects to be an enjoyable experience for users, and to create something I will be proud of at the end of the day.
                            </LightText>
                        </FlexBlockBox>
                        <img src={ProfileTestImg} alt=""></img>
                    </FlexBox>
                </MainContentBox>
                <MainContentBox>
                    <LightHeader>
                        What have you worked on?
                    </LightHeader>
                    <Box
                        sx={{ mb: '8em' }}
                    >
                        <LfSection
                            Title="VR Escape Room"
                            Img={FeaturedTestImg}
                            Desc="This project was about creating a functional VR game inside Unity using C# based around the theme of 'escape room'"
                        >
                        </LfSection>
                    </Box>
                    <Box
                        sx={{ mb: '8em' }}
                    >
                        <RfSection
                            Title="VR Escape Room"
                            Img={FeaturedTestImg}
                            Desc="This project was about creating a functional VR game inside Unity using C# based around the theme of 'escape room'"
                        >
                        </RfSection>
                    </Box>
                    <LfSection
                        Title="VR Escape Room"
                        Img={FeaturedTestImg}
                        Desc="This project was about creating a functional VR game inside Unity using C# based around the theme of 'escape room'"
                    >
                    </LfSection>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: '2em',
                        }}
                    >
                        <CustomButton
                            ButtonText='Check out my other projects!'
                            ButtonLink='/portfolio'
                        />
                    </Box>
                </MainContentBox>
                <MainContentBox>
                    <LightHeader>
                        How can I reach you?
                    </LightHeader>
                    <LightText>
                        Don't be afraid to reach out to me! Drop me a message via the following icons below or shoot me an email if you feel like it!
                    </LightText>
                </MainContentBox>
                <Footer />
            </RootBox>
        </>
    );
}