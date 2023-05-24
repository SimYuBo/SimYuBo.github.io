import { IconButton } from "@mui/material";
import ContactForm from "../ContactPage/CustomForm";
import { FadeInSection, LightHeader, LightText, RootBox, TopMarginBox } from "../Miscellaneous/GlobalElements.component";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconBox, IconSx } from "../../Styles/ContactPage/ContactStyles";
import { Footer } from "../Miscellaneous/Footer.component";

export default function ContactLayout() {
    return (
        <>
            <RootBox>
                <TopMarginBox>
                    <FadeInSection>
                        <LightHeader>
                            How would I reach you?
                        </LightHeader>
                        <LightText>
                            Want to know more? Drop me a message using the form below.
                        </LightText>
                    </FadeInSection>
                </TopMarginBox>
                <FadeInSection>
                    <ContactForm />
                </FadeInSection>
                <FadeInSection>
                    <IconBox>
                        <IconButton
                            sx={IconSx}
                            component="a"
                            href="https://github.com/SimYuBo"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            sx={IconSx}
                            component="a"
                            href="https://www.linkedin.com/in/sim-yu-bo-1055b3212/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </IconBox>
                </FadeInSection>
                <Footer />
            </RootBox>
        </>
    );
}