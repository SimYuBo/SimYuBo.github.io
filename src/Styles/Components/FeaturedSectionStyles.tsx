import { mainTheme } from "../Theme";

export const LfRootBoxSx = {
    bgcolor: mainTheme.palette.primary.dark,
    height: "20em",
    width: '100%',
    display: 'flex',
}

export const LfImageBoxSx = {
    bgcolor: mainTheme.palette.primary.main,
    zIndex: 0,
    justifyContent: 'left',
    height: '100%',
    width: '60%',
    overflow: 'hidden',
}

export const LfOverlayBoxSx = {
    display: 'block',
    zIndex: 1,
    justifyContent: 'right',
    height: '100%',
    width: '60%',
}

export const LfTitleBoxSx = {
    display: 'flex',
}

export const LfDescBoxSx = {
    bgcolor: mainTheme.palette.primary.light,
    display: 'flex',
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