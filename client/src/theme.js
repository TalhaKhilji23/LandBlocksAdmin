// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    100: "#a6a6a6", // manually adjusted
    200: "#8c8c8c", // manually adjusted
    300: "#737373", // manually adjusted
    400: "#595959", // manually adjusted
    500: "#262626", // manually adjusted
    600: "#1f1f1f",
    700: "#262626",
    800: "#1f1f1f", // manually adjusted
    900: "#121212", // manually adjusted
  },
  // secondary: {
  //   // yellow
  //   50: "#f0f0f0", // manually adjusted
  //   100: "#fff6e0",
  //   200: "#ffedc2",
  //   300: "#ffe3a3",
  //   400: "#ffda85",
  //   500: "#ffd166",
  //   600: "#cca752",
  //   700: "#997d3d",
  //   800: "#665429",
  //   900: "#332a14",
  // },
  secondary: {
    // yellow
    50: "#f5f5f5", // manually adjusted
    100: "#e0e0e0",
    200: "#b0b0b0",
    300: "#8a8a8a",
    400: "#6e6e6e",
    500: "#525252",
    600: "#484848",
    700: "#3e3e3e",
    800: "#343434",
    900: "#292929",
  },
  // third: {
  //   // yellow
  //   50: "#f0f0f0", // manually adjusted
  //   100: "#fff6e0",
  //   200: "#ffedc2",
  //   300: "#ffe3a3",
  //   400: "#ffda85",
  //   500: "#ffd166",
  //   600: "#cca752",
  //   700: "#997d3d",
  //   800: "#665429",
  //   900: "#332a14",
  // },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
