import { Button, Typography } from "@mui/material";
import { mainTheme } from "../../Styles/Theme";
import { ButtonProps } from "../../Interfaces/IButton";
import { Link } from "react-router-dom";

export function CustomButton(props: ButtonProps) {
  const { ButtonText, ButtonLink } = props
  return (
    <>
      <Link to={ButtonLink}>
        <Button
          disableElevation
          variant="outlined"
          sx={{
            bgColor: mainTheme.palette.primary.dark,
            borderColor: mainTheme.palette.primary.main,
            px: '2em',
            textTransform: 'none',
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            }
          }}
        >
          <Typography
            sx={{
              fontSize: '1.4em',
              fontWeight: 600,
              color: mainTheme.palette.primary.main,
            }}
          >
            {ButtonText}
          </Typography>
        </Button>
      </Link>
    </>
  );
}