import { Box, Typography } from '@mui/material';
import { MediumLightHeader, MixedTypographyBoxSx, SmallBrightText, SmallDescriptionBoxSx, SmallLightText } from '../../Styles/Homepage/HomeStyles';
import { BlockBox, FlexBlockBox, FlexBox, MainContentBox, RootBox } from '../Homepage/HomeElements.component';
import '../../Styles/Homepage/HomeStyles.css';
import FeaturedTestImg from "../../Assets/500x300.svg"
import ProfileTestImg from "../../Assets/350x500.svg"
import { LfSection } from '../Homepage/LeftFeatured.component';
import { RfSection } from '../Homepage/RightFeatured.component';

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
                <MainContentBox>
                    <Typography
                        sx={MediumLightHeader}
                    >
                        What have you worked on?
                    </Typography>
                    <LfSection
                        lfTitle="VR Escape Room"
                        lfImg={FeaturedTestImg}
                        lfDesc="This project was about creating a functional VR game inside Unity using C# based around the theme of 'escape room'"
                    >
                    </LfSection>
                    <RfSection
                        rfTitle="VR Escape Room"
                        rfImg={FeaturedTestImg}
                        rfDesc="This project was about creating a functional VR game inside Unity using C# based around the theme of 'escape room'"
                    >
                    </RfSection>
                    <LfSection
                        lfTitle="VR Escape Room"
                        lfImg={FeaturedTestImg}
                        lfDesc="This project was about creating a functional VR game inside Unity using C# based around the theme of 'escape room'"
                    >
                    </LfSection>
                </MainContentBox>
            </RootBox>
        </>
    );
}