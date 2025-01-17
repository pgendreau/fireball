import { createStyles, makeStyles } from '@mui/styles';
import { alpha } from '@mui/material';

import { MAX_GOTCHIS_IN_ROW } from 'shared/constants';
import bg from 'assets/images/main-background/background.png';
import flower2 from 'assets/images/main-background/flower2.png';
import midgroundFar from 'assets/images/main-background/midground-far.png';
import flower1 from 'assets/images/main-background/flower1.png';
import smokeMid from 'assets/images/main-background/smoke-mid.png';
import midgroundClose from 'assets/images/main-background/midground-close.png';
import smokeClose from 'assets/images/main-background/smoke-close.png';
import foreground from 'assets/images/main-background/foreground.png';

export const styles = makeStyles(theme => createStyles({
    content: {
        minHeight: '100vh',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
    },
    title: {
        padding: theme.spacing(0, 5),
        width: '100%',
        maxWidth: 1200,
        margin: theme.spacing(10, 'auto', 0)
    }
}));

export const aboutStyles = makeStyles(theme => createStyles({
    imageBox: {
        width: '6.2%',
        maxWidth: 180,
        paddingBottom: '7%',
        position: 'relative',
        margin: theme.spacing('auto', 'auto', 0)
    },
    image: {
        width: '100%',
        display: 'block',
        cursor: 'pointer'
    },
    button: {
        width: 200,
        margin: theme.spacing('auto', 'auto', 3),
        display: 'block',
        color: '#fff',
        backgroundColor: alpha(theme.palette.primary.main, .8),
        textShadow: `0 0 2px ${theme.palette.background.default}`
    },
    modal: {
        maxWidth: 1000,
        padding: theme.spacing(3, 0)
    },
    container: {
        maxHeight: 400,
        overflow: 'auto',
        padding: theme.spacing(0, 2)
    },
    title: {
        textAlign: 'center',
        color: theme.palette.primary.main,
        fontWeight: 700,
        marginBottom: theme.spacing(2)
    },
    text: {
        margin: theme.spacing(2, 0),
        lineHeight: 1.6,
        textAlign: 'center',
        padding: theme.spacing(0, 2)
    },
    subText: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(0, 2)
    },
    list: {
        backgroundColor: theme.palette.background.default,
        listStyle: 'none',
        padding: theme.spacing(2),
        margin: theme.spacing(1, 0)
    },
    listItem: {
        margin: theme.spacing(1, 0),
        position: 'relative',
        color: theme.palette.common.white,
        paddingLeft: theme.spacing(4),
        lineHeight: 1.8,

        '&:before': {
            content: '""',
            position: 'absolute',
            left: 3,
            top: 9,
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main
        }
    },
    link: {
        color: theme.palette.primary.main,

        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export const bgStyles = makeStyles(theme => createStyles({
    homeBg: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        background: `url(${bg}) center`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            position: 'fixed'
        }

    },
    bgPart: {
        position: 'absolute',
        width: '100%',
        bottom: '0',
        paddingBottom: '56%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            padding: 0
        }
    },
    flower2: {
        backgroundImage: `url(${flower2})`,
        animation: '100s $flower ease-in-out infinite',
        transformOrigin: '23% 68%',
        [theme.breakpoints.down('md')]: {
            animation: 'none'
        }
    },
    midgroundFar: {
        backgroundImage: `url(${midgroundFar})`
    },
    flower1: {
        backgroundImage: `url(${flower1})`,
        animation: '100s $flower 1s ease-in-out infinite',
        transformOrigin: '85% 68%',
        [theme.breakpoints.down('md')]: {
            animation: 'none'
        }
    },
    smokeMid: {
        backgroundImage: `url(${smokeMid})`,
        backgroundSize: 'contain',
        transform: 'translateX(-100%)',
        animation: '65s $smoke 0s linear infinite'
    },
    midgroundClose: {
        backgroundImage: `url(${midgroundClose})`
    },
    smokeClose: {
        backgroundImage: `url(${smokeClose})`
    },
    foreground: {
        backgroundImage: `url(${foreground})`
    },
    '@keyframes flower': {
        '0%, 22%, 49%, 62%, 81%, 100%': {
            transform: 'rotate(0)'
        },
        '14%, 32%, 56%, 70%, 89%': {
            transform: 'rotate(4deg) skew(-4deg, 4deg)'
        }
    },
    '@keyframes smoke': {
        '100%': {
            transform: 'translateX(100%)'
        }
    }
}));

export const teamStyles = makeStyles(theme => createStyles({
    gotchisWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))',
        gridGap: theme.spacing(.5),
        width: '100%',
        marginTop: theme.spacing(5)
    },
    gotchisRow: {
        position: 'absolute',
        height: 1,
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-around',
        'alignItems': 'flex-end',
        '&.active': {
            animation: '5s $show forwards'
        }
    },
    gotchisRow3: {
        paddingBottom: '16%',
        left: '28%',
        right: '28%',
        '& $homeGotchi': {
            transform: 'scale(.8)',
            width: `${100/MAX_GOTCHIS_IN_ROW[2]}%`
        }
    },
    gotchisRow2: {
        paddingBottom: '9.5%',
        left: '5%',
        right: '5%',
        '& $homeGotchi': {
            transform: 'scale(.8)',
            width: `${100/MAX_GOTCHIS_IN_ROW[1]}%`
        }
    },
    gotchisRow1: {
        left: 0,
        right: 0,
        bottom: '4%',
        '& $homeGotchi': {
            width: `${100/MAX_GOTCHIS_IN_ROW[0]}%`
        }
    },
    gotchisSemicircle: {
        position: 'absolute',
        zIndex: 1,
        left: '46.2%',
        bottom: 0,
        width: '80%',
        paddingBottom: '22%',
        '&.active': {
            animation: '5s $show forwards'
        }
    },
    gotchiBox: {
        position: 'absolute',
        width: '10%'
    },
    homeGotchi: {
        padding: '0 5px 5px',
        position: 'relative',
        zIndex: 1,
        cursor: 'pointer',
        '&:hover': {
            '& $gotchiName span': {
                overflow: 'visible'
            },
            '& $gotchiAvatar': {
                filter: 'none'
            }
        }
    },

    gotchiAvatar: {
        width: '100%',
        paddingBottom: '100%',
        position: 'relative',
        filter: 'sepia(0.6)',
        transition: '.3s',
        marginTop: 5,
        '& > img': {
            position: 'absolute',
            left: '1%',
            top: '1%',
            width: '98%',
            height: '98%'
        }
    },
    gotchiName: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        fontWeight: 500,
        position: 'relative',
        transition: 'all .2s ease-in-out',
        padding: 5,
        fontSize: 14,
        margin: 0,
        textShadow: '0 0 2px #000',
        '& span': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            margin: 0
        }
    },
    '@keyframes show': {
        '0%': {
            opacity: 0
        },
        '100%': {
            opacity: 1
        }
    }
}));
