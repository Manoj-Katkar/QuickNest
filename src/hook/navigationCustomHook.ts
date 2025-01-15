import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { BottomTabScreens } from "../components/bottom-tab";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavScreens } from "../components/drawer-nav";

// Define navigation props for different navigators
type MainStackProps = NativeStackNavigationProp<RootStackParamList>;
type BottomTabProps = BottomTabNavigationProp<BottomTabScreens>;
type DrawerStackProps = DrawerNavigationProp<DrawerNavScreens>;

// Combine all navigation props
type CombinedNavigationProp = MainStackProps & BottomTabProps & DrawerStackProps;

// Define the type for navigation parameters
type NavigateParams<
    T extends keyof RootStackParamList | keyof BottomTabScreens | keyof DrawerNavScreens
> = T extends "BottomTab"
    ? { screen: keyof BottomTabScreens; params?: BottomTabScreens[keyof BottomTabScreens] }
    : T extends "DrawerNav"
    ? { screen: keyof DrawerNavScreens; params?: DrawerNavScreens[keyof DrawerNavScreens] }
    : T extends keyof RootStackParamList
    ? RootStackParamList[T]
    : never;

const customNavigation = () => {
    const navigation = useNavigation<CombinedNavigationProp>();

    const navigateTo = <
        T extends keyof RootStackParamList | keyof BottomTabScreens | keyof DrawerNavScreens
    >(
        module: T,
        params?: NavigateParams<T>
    ) => {
        navigation.navigate(module as any, params as any);
    };

    const navigateReplace = <
        T extends keyof RootStackParamList | keyof BottomTabScreens | keyof DrawerNavScreens
    >(
        module: T,
        params?: NavigateParams<T>
    ) => {
        navigation.replace(module as any, params as any);
    };

    const navigateBack = () => {
        navigation.goBack();
    };

    const navigatePush = <
        T extends keyof RootStackParamList | keyof BottomTabScreens | keyof DrawerNavScreens
    >(
        module: T,
        params?: NavigateParams<T>
    ) => {
        navigation.push(module as any, params as any);
    };

    return {
        navigateTo,
        navigateReplace,
        navigatePush,
        navigateBack,
        navigation,
    };
};

export default customNavigation;
