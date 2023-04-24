import { Box } from "@mui/material";
import { ButtonBoxSx } from "../../Styles/Components/ButtonStyles";

export function ButtonBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
      <>
        <Box
          sx={ButtonBoxSx}
        >
          {children}
        </Box>
      </>
    );
  }