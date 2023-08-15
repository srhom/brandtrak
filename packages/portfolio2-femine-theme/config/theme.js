// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  femine: {
    primary: colors.pink.lighten1, // primary main
    primarylight: colors.pink.lighten4, // primary light
    primarydark: colors.pink.darken4, // primary dark
    secondary: colors.deepOrange.lighten1, // secondary main
    secondarylight: colors.deepOrange.lighten4, // secondary light
    secondarydark: colors.deepOrange.darken4, // secondary dark
    anchor: colors.pink.base, // link
  },
};

const theme = {
  ...palette.femine,
};

export default theme;
