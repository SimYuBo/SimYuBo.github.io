import { mainTheme } from "../Theme";

export const NavbarRootSx = {
    bgcolor: mainTheme.palette.primary.dark,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    px: '1.5em',
    py: '1.6em',
}

export const NavbarMenuSx = {
    display: 'flex',
}

export const LinkTypography = {
    mx: '1.3em',
    fontSize: '1.1em',
    fontWeight: 600,
    color: mainTheme.palette.primary.contrastText,
}