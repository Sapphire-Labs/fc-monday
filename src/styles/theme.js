import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default function () {
  return createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#0D47A1",
        contrastText: "#FFF",
      },
      secondary: {
        main: red[700],
      },
    },
    typography: {
      fontFamily: "Doppio One, sans-serif",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            height: "100%",
            fontVariantLigatures: "none",
            WebkitFontVariantLigatures: "none",
          },
          body: {
            height: "100%",
            margin: 0,
          },
        },
      },
    },
  });
}
