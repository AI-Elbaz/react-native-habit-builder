import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './src/pages/main';
import History from './src/pages/history';
import ThemeContextProvider from './src/contexts/themeContext';
import UserDataContextProvider from './src/contexts/userDataContext';
import dayjs from 'dayjs';

var duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <UserDataContextProvider>
      <ThemeContextProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="History" component={History} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContextProvider>
    </UserDataContextProvider>
  );
};

export default App;
