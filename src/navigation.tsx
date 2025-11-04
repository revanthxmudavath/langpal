import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer, Theme, useTheme as useNavigationTheme } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import PartnerScreen from './screens/PartnerScreen';
import ProfileScreen from './screens/ProfileScreen';
import SplashScreen from './screens/SplashScreen';

import { Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabs({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) {
    const theme = useNavigationTheme();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                let iconName: string;
                switch (route.name) {
                    case 'Home':
                        iconName = 'home-outline';
                        break;
                    case 'Partner':
                        iconName = 'account-multiple-outline';
                        break;
                    case 'Profile':
                    default:
                        iconName = 'account-circle-outline';
                        break;
                }
                return {
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name={iconName} size={size} color={color} />
                    ),
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.text,
                    tabBarStyle: [styles.tabBar, { backgroundColor: theme.colors.card }],
                };
            }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    headerTitle: () => (
                        <Image
                            source={require('../assets/LangPal_Logo.png')}
                            style={{ width: 110, height: 32, resizeMode: 'contain' }}
                        />
                    ),
                }}
            >
                {() => <HomeScreen />}
            </Tab.Screen>

            <Tab.Screen name="Partner" component={PartnerScreen} />
            <Tab.Screen name="Profile">
                {() => <ProfileScreen dark={dark} toggleTheme={toggleTheme} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default function RootNavigator(props:{dark:boolean; toggleTheme:()=> void; navigationTheme: Theme}) {
    const { dark, toggleTheme, navigationTheme } = props;
    return (
        <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Main">
                    {() => <MainTabs dark={dark} toggleTheme={toggleTheme} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        borderTopWidth: 0,
        elevation: 4,
    },
});
