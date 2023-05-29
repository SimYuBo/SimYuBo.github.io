import { mainTheme } from "./Theme";

export const LfRootBoxSx = {
    position: 'relative',
    height: "26em",
    width: '1',
    display: 'flex',
}

export const LfImageBoxSx = {
    position: 'absolute',
    bgcolor: "#FFFFF",
    width: '40em',
    height: '24em',
    display: 'flex',
    justifyContent: 'flex-end',
}

export const LfOverlayBoxSx = {
    height: 1,
    width: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    mt: '2em',
}

export const LfTitleBoxSx = {
    display: 'flex',
    justifyContent: 'right',
    borderRadius: '5em',
}

export const LfDescBoxSx = {
    bgcolor: mainTheme.palette.secondary.main,
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'right',
    height: '40%',
    px: "0.3em",
    py: "1em",
    mt: '1em',
}

export const RfRootBoxSx = {
    bgcolor: mainTheme.palette.primary.dark,
    position: 'relative',
    height: "26em",
    width: '1',
    display: 'flex',
    mb: '8em'
}

export const RfImageBoxSx = {
    position: 'absolute',
    bgcolor: "#FFFFF",
    width: '40em',
    height: '24em',
    left: '43.5%',
    zIndex: 1,
}

export const RfOverlayBoxSx = {
    height: 1,
    width: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    mt: '2em',
    position: 'relative',
    zIndex: 2,
}

export const RfTitleBoxSx = {
    display: 'flex',
    justifyContent: 'left',
    borderRadius: '5em',
}

export const RfDescBoxSx = {
    bgcolor: mainTheme.palette.secondary.main,
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'left',
    height: '40%',
    px: "0.3em",
    py: "1em",
    mt: '1em',
}

export const FeaturedTitleText = {
    fontSize: '1.8em',
    fontWeight: 800,
    color: mainTheme.palette.primary.contrastText,
}

export const FeaturedDescText = {
    mx: '1.3em',
    fontSize: '1.2em',
    fontWeight: 0,
    color: mainTheme.palette.primary.light,
}