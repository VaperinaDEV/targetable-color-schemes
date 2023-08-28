export default {
  name: "targetable-color-scheme",
  
  initialize(container) {

    this.container = container.lookup("session:main");
    
    const colorScheme = this.container.userColorSchemeId;
    const darkScheme = this.container.userDarkSchemeId;       
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");  
    const sameAsRegularScheme = darkScheme === -1;
    
    const currentColorScheme = e => {
      if (e.matches) {
        if (sameAsRegularScheme) {
          document.documentElement.setAttribute("color-scheme", colorScheme);
        } else {
          document.documentElement.setAttribute("color-scheme", darkScheme);
        }
      } else {
        document.documentElement.setAttribute("color-scheme", colorScheme);
      }
    }
          
    currentColorScheme(isDarkMode);
    isDarkMode.addEventListener("change", currentColorScheme);
  },
};
