import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { GalleryScreen } from "../screens/GalleryScreen";

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

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Navigator screenOptions={{
      headerStyle: { backgroundColor: 'tomato' },
      headerShown: true,
      title: "React-nav",
    }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="gallery" component={GalleryScreen} />
    </Navigator>
  )
}

// export const StackNavigation = createStaticNavigation(stackRouter);