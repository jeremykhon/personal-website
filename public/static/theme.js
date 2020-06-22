(function () {
  const themeConfig = {
    light: {
      "--initial-theme": "light",
      "--color-bg": "white",
      "--color-text": "#20242C",
      "--color-text-invert": "white",
      "--color-primary": "#4334FF",
      "--color-white": "white",
    },
    dark: {
      "--initial-theme": "dark",
      "--color-bg": "#0F151C",
      "--color-text": "white",
      "--color-text-invert": "#20242C",
      "--color-primary": "#FF0B78",
      "--color-white": "white",
    },
  };

  function setTheme(inputTheme) {
    const theme = inputTheme === "dark" ? themeConfig.dark : themeConfig.light;
    for (let key in theme) {
      setCSSVar(key, theme[key]);
    }
  }

  function setCSSVar(property, value) {
    document.documentElement.style.setProperty(property, value);
  }

  function getInitialTheme() {
    const persistedColorPreference = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedColorPreference === "string";
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    return "light";
  }

  const currentTheme = getInitialTheme();

  setTheme(currentTheme);
})();
