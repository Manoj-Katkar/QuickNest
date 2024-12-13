import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";
import { RootStackParamList } from "../../App";

const mainStackNavigationRef = createRef<NavigationContainerRef<RootStackParamList>>();

export { mainStackNavigationRef };


