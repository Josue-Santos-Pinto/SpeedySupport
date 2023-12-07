import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Home from './src/screens/Home';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </ThemeProvider>
  );
}
