import { Box } from '@mui/material';
import ProfileImg from "../../Assets/Profile Image.png"
import SerebiiRedesignImage1 from "../../Assets/SerebiiRedesignImage1.png"
import ToyKingdomImage1 from "../../Assets/ToyKingdomImage1.jpg"
import ElderCareImage1 from "../../Assets/ElderCareImage1.jpg"
import { LfSection, RfSection } from '../Home/FeaturedSection.component';
import '../../Styles/Home/HomeStyles.css';
import { Footer } from '../Miscellaneous/Footer.component';
import { CustomButton } from '../Miscellaneous/Button.component';
import { RootBox, MainContentBox, FlexBlockBox, FlexBox, ContrastText, LightText, LightHeader, FadeInSection } from '../Miscellaneous/GlobalElements.component';

export default function HomeLayout() {
    return (
        <>
            <RootBox>
                <FadeInSection>
                    <MainContentBox>
                        <FlexBlockBox>
                            <ContrastText>
                                Hello, my name is Yu Bo
                            </ContrastText>
                            <span className='MainHeader'>I am a software Designer</span>
                            <span className='MainHeaderAlt'>/Developer.</span>
                            <LightText>
                                I specialise in web development and always do my best to provide users with a fun and unique experience.
                            </LightText>
                        </FlexBlockBox>
                    </MainContentBox>
                </FadeInSection>
                <FadeInSection>
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
                            <img src={ProfileImg} alt="" style={{ height: '30em' }}></img>
                        </FlexBox>
                    </MainContentBox>
                </FadeInSection>
                <MainContentBox>

                    <FadeInSection>
                        <LightHeader>
                            What have you worked on?
                        </LightHeader>
                    </FadeInSection>
                    <FadeInSection>
                        <Box
                            sx={{ mb: '8em' }}
                        >
                            <LfSection
                                Title="Serebii Redesign"
                                Img={SerebiiRedesignImage1}
                                Desc="This project is a personal challenge for myself to try and redesign Serebii.net to hone my skills in web design"
                            >
                            </LfSection>
                        </Box>
                    </FadeInSection>
                    <FadeInSection>
                        <Box
                            sx={{ mb: '8em' }}
                        >
                            <RfSection
                                Title="Little Toy Kingdom"
                                Img={ToyKingdomImage1}
                                Desc="Little Toy Kingdom is a concept design for a online store that retails toys for children"
                            >
                            </RfSection>
                        </Box>
                    </FadeInSection>
                    <FadeInSection>
                        <LfSection
                            Title="ElderCare"
                            Img={ElderCareImage1}
                            Desc="ElderCare is a concept design for a mobile app that assists the elderly in learning new hobbies"
                        >
                        </LfSection>
                    </FadeInSection>
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
                {/*
                <MainContentBox>
                    <LightHeader>
                        How can I reach you?
                    </LightHeader>
                    <LightText>
                        Don't be afraid to reach out to me! Drop me a message via the following icons below or shoot me an email if you feel like it!
                    </LightText>
                    </MainContentBox>
                    */}
                <Footer />
            </RootBox>
        </>
    );
}