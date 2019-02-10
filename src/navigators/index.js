import React from "react";
import {Animated, Easing} from "react-native";

import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/Details";
import DetailScreen from "../screens/Detail";
import ModalScreen from "../screens/Modal";
import WelcomeScreen from "../screens/Welcome";
import FeedScreen from "../screens/Feed";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import NotificationsScreen from "../screens/Notifications";
import Icon from 'react-native-vector-icons/Ionicons';

const FeedStack = createStackNavigator(
    {
        Feed: {
            screen: FeedScreen,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={navigation.openDrawer}
                        name="md-menu" size={30}
                    />
                }
            }
        },
        Detail: DetailScreen,
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false,
        }
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={navigation.openDrawer}
                        name="md-menu" size={30}
                    />
                }
            }
        },
    },
);

const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: SettingsScreen,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={navigation.openDrawer}
                        name="md-menu" size={30}
                    />
                }
            }
        },
    },
);

const NotificationStack = createStackNavigator(
    {
        Notification: {
            screen: NotificationsScreen,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={navigation.openDrawer}
                        name="md-menu" size={30}
                    />
                }
            }
        },
    },

);


const DashboardTabNavigator = createBottomTabNavigator(
    {
        Feed: FeedStack,
        Profile: ProfileStack,
        Settings: SettingsStack,
        Notification: NotificationStack
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                header: null,
                headerTitle: routeName
            }
        }
    }
);

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: DashboardTabNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={navigation.openDrawer}
                    name="md-menu" size={30}
                />
             }
        }
    }
);


const AppDrewerNavigator = createDrawerNavigator(
    {
        Dashboard: { screen: DashboardStackNavigator }
    }
);

const appSwitchNavigator = createSwitchNavigator(
    {
        Welcome: { screen: WelcomeScreen },
        Dashboard: { screen: AppDrewerNavigator },
        Modal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: 'Welcome',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 750,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const thisSceneIndex = scene.index;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [1, 1, 0.5],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

const MainAppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const RootNavigator = createStackNavigator(
    {
        Main: {
            screen: MainAppStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: 'Main',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 750,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const thisSceneIndex = scene.index;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [1, 1, 0.5],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

export default createAppContainer(appSwitchNavigator);
