import { Box, Typography } from "@mui/material";
import { FooterBoxSx, FooterText } from "../../Styles/FooterStyles";

export function Footer() {
    return (
        <>
            <Box
                sx={FooterBoxSx}
            >
                <Typography
                sx={FooterText}
                >
                    © 2023  Sim Yu Bo. All Rights Reserved
                </Typography>
            </Box>
        </>
    );
}
