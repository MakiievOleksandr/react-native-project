import { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppLoading from 'expo-app-loading';
import loadFonts from './src/services/fontLoader';

import RegistrationScreen from './Screens/Registration/RegistrationScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import Home from './Screens/MainScreen/Home';
import CreatePostsScreen from './Screens/MainScreen/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './Screens/MainScreen/Profile/ProfileScreen';

const Stack = createStackNavigator();
const MainTabNavi = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Registration'
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Login'
          component={LoginScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTabNavi.Navigator>
      <MainTabNavi.Screen
        name='Posts'
        component={Home}
        options={{
          tabBarStyle: {
            height: 83,
            paddingHorizontal: 70,
          },
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 16 }}>
              <Image source={require('./assets/images/log-out.png')} />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={require('./assets/images/grid.png')} />
          ),
        }}
      />
      <MainTabNavi.Screen
        name='CreatePosts'
        component={CreatePostsScreen}
        options={{
          tabBarStyle: {
            // display: 'none',
            height: 83,
            paddingHorizontal: 70,
          },
          headerTitleAlign: 'center',
          tabBarHideOnKeyboard: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 16 }}
              // onPress={() => navigation.dispatch(CommonActions.goBack())}
            >
              <Image source={require('./assets/images/arrow-left.png')} />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,

          tabBarIcon: () => (
            <Image source={require('./assets/images/add-new.png')} />
          ),
        }}
      />
      <MainTabNavi.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ backgroundColor: 'yellow' }}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={require('./assets/images/user-icon.png')} />
          ),
        }}
      />
    </MainTabNavi.Navigator>
  );
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const routing = useRoute(true);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
