import {createTheme} from '@mui/material/styles';
import {PaletteColorOptions} from '@mui/material';
import createPalette from "@mui/material/styles/createPalette";

declare module '@mui/material/styles' {
    interface Palette {
        green: PaletteColorOptions;
    }

    interface PaletteOptions {
        green?: PaletteColorOptions;
    }
}


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        green: true;
    }
}

const palette = createPalette({});


const theme = createTheme({
    palette: {
        green: palette.augmentColor({
            color: {
                main: '#00632B',
            }
        }),
    },
});

export default theme;
