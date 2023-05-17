import { Box, IconButton } from "@mui/material";
import ContactForm from "../ContactPage/CustomForm";
import { LightHeader, LightText, RootBox, TopMarginBox } from "../Miscellaneous/GlobalElements.component";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconBox, IconSx } from "../../Styles/ContactPage/ContactStyles";
import { Footer } from "../Miscellaneous/Footer.component";

export default function ContactLayout() {
    return (
        <>
            <RootBox>
                <TopMarginBox>
                    <LightHeader>
                        How would I reach you?
                    </LightHeader>
                    <LightText>
                        Are you interested in working with me? Drop me a message using the form below.
                    </LightText>
                </TopMarginBox>
                <ContactForm />
                
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
                <Footer />
            </RootBox>
        </>
    );
}