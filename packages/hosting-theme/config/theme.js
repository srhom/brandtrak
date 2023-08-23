// Colors
import colors from 'vuetify/lib/util/colors';

/** !IMPORTANT
** If you change the palette bellow,
** don't forget to update /hosting-theme/components/Banner/Banner.vue on const palette as well.
** Make sure the const palette has same value as this const palette bellow
* */

const palette = {
  cloud: {
    primary: colors.lightBlue.base, // primary main
    primarylight: colors.lightBlue.lighten4, // primary light
    primarydark: colors.lightBlue.darken4, // primary dark
    secondary: colors.orange.base, // secondary main
    secondarylight: colors.orange.lighten4, // secondary light
    secondarydark: colors.orange.darken4, // secondary dark
    anchor: colors.lightBlue.base, // link
  },
};

const theme = {
  ...palette.cloud,
};

export default theme;
