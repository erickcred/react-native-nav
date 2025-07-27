import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { GalleryScreen } from "../screens/GalleryScreen";
import { ContactScreen } from "../screens/bottom-tabs/ContactScreen";

// const stackRouter = createNativeStackNavigator({
//   initialRouteName: "Home",
//   screenOptions: {
//     headerStyle: { backgroundColor: 'tomato' },
//     title: "React-nav",
//     headerShown: true,
//   },
//   screens: {
//     Home: HomeScreen,
//     Gallery: GalleryScreen,
//   }
// });

// export const StackNavigation = createStaticNavigation(stackRouter);


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{
      headerStyle: { backgroundColor: "#b1b1b1ff" },
      // headerShown: true,
      // title: "React-nav",
    }}>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "OI",
          headerShown: false,
        }}
      />
      <Screen name="gallery" component={GalleryScreen} />
    </Navigator>
  )
}
