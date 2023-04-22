import { mainTheme } from "../Theme";

export const LfRootBoxSx = {
    bgcolor: mainTheme.palette.primary.dark,
    position: 'relative',
    height: "26em",
    width: '1',
    display: 'flex',
    mb: '8em'
}

export const LfImageBoxSx = {
    postition: 'absolute',
    bgcolor: "#FFFFF",
    width: '48em',
}

export const LfOverlayBoxSx = {
    height: 0.5,
    width: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    mt: '3em',
}

export const LfTitleBoxSx = {
    display: 'flex',
    justifyContent: 'right',
}

export const LfDescBoxSx = {
    bgcolor: mainTheme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'right',
    height: 1,
    px: "1em",
    py: "1em",
}

export const FeaturedTitleText = {
    mx: '1.3em',
    fontSize: '1.1em',
    fontWeight: 600,
    color: mainTheme.palette.primary.contrastText,
}

export const FeaturedDescText = {
    mx: '1.3em',
    fontSize: '1.1em',
    fontWeight: 600,
    color: mainTheme.palette.primary.contrastText,
}