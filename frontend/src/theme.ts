import { createTheme } from "@mui/material";
import { fiFI } from "@mui/material/locale";

export const theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1920,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          sizeSmall: {
            padding: "6px 16px",
          },
          sizeMedium: {
            padding: "8px 20px",
          },
          sizeLarge: {
            padding: "11px 24px",
          },
          textSizeSmall: {
            padding: "7px 12px",
          },
          textSizeMedium: {
            padding: "9px 16px",
          },
          textSizeLarge: {
            padding: "12px 16px",
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: "32px 24px",
            "&:last-child": {
              paddingBottom: "32px",
            },
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: "h6",
          },
          subheaderTypographyProps: {
            variant: "body2",
          },
        },
        styleOverrides: {
          root: {
            padding: "32px 24px",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },
          html: {
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            width: "100%",
          },
          body: {
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            minHeight: "100%",
            width: "100%",
          },
          a: {
            textDecoration: "none",
            color: "inherit",
          },
          "#__next": {
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "#E6E8F0",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
          },
        },
      },
    },
    palette: {
      background: {
        default: "#F9FAFC",
        paper: "#FFFFFF",
      },
      divider: "#E6E8F0",
      primary: {
        main: "#C7273F",
        dark: "#912738",
      },
      secondary: {
        main: "#10B981",
        dark: "#0B815A",
      },
      text: {
        primary: "#282828",
        secondary: "#65748B",
        disabled: "rgba(55, 65, 81, 0.48)",
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: [
      "none",
      "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
      "0px 1px 2px rgba(100, 116, 139, 0.12)",
      "0px 1px 4px rgba(100, 116, 139, 0.12)",
      "0px 1px 5px rgba(100, 116, 139, 0.12)",
      "0px 1px 6px rgba(100, 116, 139, 0.12)",
      "0px 2px 6px rgba(100, 116, 139, 0.12)",
      "0px 3px 6px rgba(100, 116, 139, 0.12)",
      "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
      "0px 5px 12px rgba(100, 116, 139, 0.12)",
      "0px 5px 14px rgba(100, 116, 139, 0.12)",
      "0px 5px 15px rgba(100, 116, 139, 0.12)",
      "0px 6px 15px rgba(100, 116, 139, 0.12)",
      "0px 7px 15px rgba(100, 116, 139, 0.12)",
      "0px 8px 15px rgba(100, 116, 139, 0.12)",
      "0px 9px 15px rgba(100, 116, 139, 0.12)",
      "0px 10px 15px rgba(100, 116, 139, 0.12)",
      "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
      "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
      "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
      "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
      "0px 25px 50px rgba(100, 116, 139, 0.25)",
      "0px 25px 50px rgba(100, 116, 139, 0.25)",
      "0px 25px 50px rgba(100, 116, 139, 0.25)",
      "0px 25px 50px rgba(100, 116, 139, 0.25)",
    ],
    typography: {
      button: {
        fontWeight: 600,
      },
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.57,
      },
      h1: {
        fontWeight: 700,
        fontSize: "2.2rem",
        lineHeight: 1.375,
      },
      h2: {
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: 1.375,
      },
      h3: {
        fontWeight: 700,
        fontSize: "2.25rem",
        lineHeight: 1.375,
      },
      h4: {
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: 1.375,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.375,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: 1.375,
      },
    },
  },
  fiFI
);
