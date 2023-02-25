interface IUIColors {
  lightBackground: string;
  darkBackground: string;
  greyBackground: string;
  backgroundSeparator: string;
}

interface ITextColors {
  black: string;
  white: string;
  darker: string;
  dark: string;
}

export interface IColors {
  ui: IUIColors;
  text: ITextColors;
}
export const colors = {
  ui: {
    lightBackground: '#ffffff',
    darkBackground: '#000000',
    greyBackground: '#e5e5e5',
    backgroundSeparator: '#cccccc',
  },
  text: {
    black: '#000000',
    white: '#FFFFFF',
    darker: '#181818',
    dark: '#6b6b6b',
  },
};
