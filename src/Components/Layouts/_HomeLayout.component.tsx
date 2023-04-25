import { Box, Typography } from '@mui/material';
import { MediumLightHeader, MixedTypographyBoxSx, SmallBrightText, SmallDescriptionBoxSx, SmallLightText } from '../../Styles/Homepage/HomeStyles';
import { FlexBlockBox, FlexBox, MainContentBox, RootBox } from '../Homepage/HomeElements.component';
import '../../Styles/Homepage/HomeStyles.css';
import FeaturedTestImg from "../../Assets/500x300.svg"
import ProfileTestImg from "../../Assets/350x500.svg"
import { LfSection, RfSection } from '../Homepage/FeaturedSection.component';
import { Footer } from '../Miscellaneous/Footer.component';
import { CustomButton } from '../Miscellaneous/Button.component';

export default function HomeLayout() {
    return (
        <>
            <RootBox>
                <MainContentBox>
                    <FlexBlockBox>
                        <Typography
                            sx={SmallBrightText}
                        >
                            Hello, my name is Yu Bo
                        </Typography>
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
                            <Typography
                                sx={SmallLightText}
                            >
                                I specialise in web development and always do my best to provide users with a fun and unique experience.
                            </Typography>
                        </Box>
                    </FlexBlockBox>
                </MainContentBox>
                <MainContentBox>
                    <FlexBox>
                        <FlexBlockBox>
                            <Typography
                                sx={MediumLightHeader}
                            >
                                Who are you?
                            </Typography>
                            <Typography
                                sx={SmallLightText}
                            >
                                Hello! my name is Yu Bo, I am currently a third year student at republic polytechnic studying for a diploma in Digital Design and Development. I always strive for my projects to be an enjoyable experience for users, and to create something I will be proud of at the end of the day.
                            </Typography>
                        </FlexBlockBox>
                        <img src={ProfileTestImg} alt=""></img>
                    </FlexBox>
                </MainContentBox>
                <MainContentBox>
                    <Typography
                        sx={MediumLightHeader}
                    >
                        What have you worked on?
                    </Typography>
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
                <Footer />
            </RootBox>
        </>
    );
}