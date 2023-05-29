import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconBox, IconSx } from "../../Styles/ContactStyles";
import ContactForm from "../Elements/CustomForm";
import { Footer } from "../Elements/Footer.component";
import { RootBox, TopMarginBox, FadeInSection, LightHeader, LightText } from "../Elements/GlobalElements.component";

export default function ContactContent() {
    return (
        <>
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
        </>
    );
}