import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Home from './src/screens/Home';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainDrawer } from './src/routes/MainDrawer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <MainDrawer />
      </NavigationContainer>
    </ThemeProvider>
  );
}
