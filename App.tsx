import React, {useState, useMemo} from 'react';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import RootNavigator from './src/navigation';


export default function App() {
  const [dark, setDark] = useState(false);
  const theme = useMemo(() => (dark ? MD3DarkTheme : MD3LightTheme), [dark]);
  const navigationTheme = useMemo(
    () => (dark ? NavigationDarkTheme : NavigationDefaultTheme),
    [dark],
  );
  return (
    <PaperProvider theme={theme}>
      <RootNavigator
        dark={dark}
        toggleTheme={() => setDark(v => !v)}
        navigationTheme={navigationTheme}
      />
    </PaperProvider>
  );
}

