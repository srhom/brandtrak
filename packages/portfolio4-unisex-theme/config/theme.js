// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  unisex: {
    primary: colors.deepPurple.accent3, // primary main
    primarylight: colors.deepPurple.lighten3, // primary light
    primarydark: colors.deepPurple.darken4, // primary dark
    secondary: colors.purple.base, // secondary main
    secondarylight: colors.purple.lighten4, // secondary light
    secondarydark: colors.purple.darken4, // secondary dark
    anchor: colors.purple.base, // link
  },
};

const theme = {
  ...palette.unisex,
};

export default theme;
