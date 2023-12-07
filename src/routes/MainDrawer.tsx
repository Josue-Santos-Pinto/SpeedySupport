import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AddNewCard from '../screens/AddNewCard';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import CardHistory from '../screens/CardHistory';

export type RootMainDrawer = {
  Home: undefined;
  AddNewCard: undefined;
  CardHistory: undefined;
};

const Drawer = createDrawerNavigator<RootMainDrawer>();

export const MainDrawer = () => {
  const theme = useTheme<Theme>();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.darkPrimary },
        headerTintColor: theme.colors.white,
        drawerStyle: { backgroundColor: theme.colors.darkPrimary },
        drawerActiveTintColor: theme.colors.white,
        drawerInactiveTintColor: theme.colors.textSecondary,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="AddNewCard"
        component={AddNewCard}
        options={{
          drawerIcon: ({ focused, color }) => <FontAwesome name="plus" size={24} color={color} />,
          title: 'Adicionar Chamado',
        }}
      />
      <Drawer.Screen
        name="CardHistory"
        component={CardHistory}
        options={{
          drawerIcon: ({ focused, color }) => <FontAwesome name="book" size={24} color={color} />,
          title: 'Histórico de Chamados',
        }}
      />
    </Drawer.Navigator>
  );
};
