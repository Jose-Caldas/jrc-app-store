import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "#131340",
      },
    },
  },
});
