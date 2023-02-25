import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsScreen} from 'modules/Restaurants/screens/restaurants.screen';
import Icon from 'shared/components/Icon/icon.component';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components/native';
import {ITheme} from 'shared/infrastructure/theme';
import {useColorScheme} from 'react-native';

const Tab = createBottomTabNavigator();

export const ScreenName = {
  Restaurants: 'Restaurants',
  Favorites: 'Favorites',
  Cart: 'Cart',
  Account: 'Account',
};

const getTabBarIconName = (routeName: string) => {
  switch (routeName) {
    case ScreenName.Restaurants:
      return 'home';
    case ScreenName.Favorites:
      return 'heart';
    case ScreenName.Cart:
      return 'cart';
    case ScreenName.Account:
      return 'user';
    default:
      return 'home';
  }
};

export const Navigation = () => {
  const theme = useTheme() as ITheme;
  const scheme = useColorScheme();

  const navigationTheme =
    scheme === 'dark'
      ? DarkTheme
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: theme.colors.ui.lightBackground,
          },
        };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Tab.Navigator
          initialRouteName={ScreenName.Restaurants}
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              return (
                <Icon
                  name={getTabBarIconName(route.name)}
                  width={size}
                  height={size}
                  fill={color}
                />
              );
            },
            tabBarActiveTintColor: theme.colors.text.darker,
            tabBarInactiveTintColor: theme.colors.text.dark,
            headerShown: false,
          })}>
          <Tab.Screen
            name={ScreenName.Restaurants}
            component={RestaurantsScreen}
          />
          <Tab.Screen
            name={ScreenName.Favorites}
            component={RestaurantsScreen}
          />
          <Tab.Screen name={ScreenName.Cart} component={RestaurantsScreen} />
          <Tab.Screen name={ScreenName.Account} component={RestaurantsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
