import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const theme = extendTheme(
  {
    colors: {
      element: {
        pink: "#eebbc3",
        white: "#fffffe",
        blue: "#232946",
        gray: "#b8c1ec",
        grayFB: "#F0F2F5",
      },
      illustration: {
        stroke: "#121629",
        secondary: "#fffffe",
        main: "#b8c1ec",
        tertiary: "#eebbc3",
        highlight: "#eebbc3",
      },
    },
    // fonts: {
    //   heading: `'Work Sans', sans-serif`,
    //   body: `Inter, sans-serif`,
    // },
    styles: {
      global: () => ({
        body: {
          color: "element.bg",
          bg: "#FFFFFF",
        },
      }),
    },
    // components: {
    //   Button,
    // },
  },
  { breakpoints }
);

export default theme;
