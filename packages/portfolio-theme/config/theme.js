// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  violet: {
    primary: colors.pink.lighten1, // primary main
    primarylight: colors.pink.lighten4, // primary light
    primarydark: colors.pink.darken4, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten5, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.pink.base, // link
  },
};

const theme = {
  ...palette.violet,
};

export default theme;
