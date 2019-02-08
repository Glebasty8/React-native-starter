import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/Details";
import ModalScreen from "../screens/Modal";
import {Animated, Easing} from "react-native";

const MainStack = createStackNavigator(
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

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
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

export default createAppContainer(RootStack);
