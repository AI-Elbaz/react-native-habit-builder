import {createContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';

export const ThemeContext = createContext();

const themes = {
  light: {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: 'rgb(40, 84, 204)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(220, 225, 255)',
      onPrimaryContainer: 'rgb(0, 22, 78)',
      secondary: 'rgb(89, 94, 114)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(222, 225, 249)',
      onSecondaryContainer: 'rgb(22, 27, 44)',
      tertiary: 'rgb(117, 84, 112)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(255, 215, 246)',
      onTertiaryContainer: 'rgb(44, 18, 42)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: 'rgb(254, 251, 255)',
      onBackground: 'rgb(27, 27, 31)',
      surface: 'rgb(254, 251, 255)',
      onSurface: 'rgb(27, 27, 31)',
      surfaceVariant: 'rgb(226, 225, 236)',
      onSurfaceVariant: 'rgb(69, 70, 79)',
      outline: 'rgb(118, 118, 128)',
      outlineVariant: 'rgb(198, 198, 208)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(48, 48, 52)',
      inverseOnSurface: 'rgb(242, 240, 244)',
      inversePrimary: 'rgb(182, 196, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(243, 243, 252)',
        level2: 'rgb(237, 238, 251)',
        level3: 'rgb(231, 233, 249)',
        level4: 'rgb(228, 231, 249)',
        level5: 'rgb(224, 228, 248)',
      },
      surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
      onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
      backdrop: 'rgba(47, 48, 56, 0.4)',
    },
  },

  dark: {
    ...MD3DarkTheme,
    dark: true,
    colors: {
      primary: 'rgb(182, 196, 255)',
      onPrimary: 'rgb(0, 40, 125)',
      primaryContainer: 'rgb(0, 59, 175)',
      onPrimaryContainer: 'rgb(220, 225, 255)',
      secondary: 'rgb(194, 197, 221)',
      onSecondary: 'rgb(43, 48, 66)',
      secondaryContainer: 'rgb(65, 70, 89)',
      onSecondaryContainer: 'rgb(222, 225, 249)',
      tertiary: 'rgb(227, 186, 218)',
      onTertiary: 'rgb(67, 39, 64)',
      tertiaryContainer: 'rgb(91, 61, 87)',
      onTertiaryContainer: 'rgb(255, 215, 246)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(27, 27, 31)',
      onBackground: 'rgb(228, 225, 230)',
      surface: 'rgb(27, 27, 31)',
      onSurface: 'rgb(228, 225, 230)',
      surfaceVariant: 'rgb(69, 70, 79)',
      onSurfaceVariant: 'rgb(198, 198, 208)',
      outline: 'rgb(143, 144, 154)',
      outlineVariant: 'rgb(69, 70, 79)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(228, 225, 230)',
      inverseOnSurface: 'rgb(48, 48, 52)',
      inversePrimary: 'rgb(40, 84, 204)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(35, 35, 42)',
        level2: 'rgb(39, 41, 49)',
        level3: 'rgb(44, 46, 56)',
        level4: 'rgb(46, 47, 58)',
        level5: 'rgb(49, 51, 62)',
      },
      surfaceDisabled: 'rgba(228, 225, 230, 0.12)',
      onSurfaceDisabled: 'rgba(228, 225, 230, 0.38)',
      backdrop: 'rgba(47, 48, 56, 0.4)',
    },
  },
};

const ThemeContextProvider = props => {
  const [mode, setMode] = useState(useColorScheme());
  const theme = themes[mode];

  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      <PaperProvider theme={theme}>{props.children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
