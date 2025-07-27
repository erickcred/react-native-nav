import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactScreen } from "../screens/bottom-tabs/ContactScreen";
import { AboutScreen } from "../screens/bottom-tabs/AboutScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name="contact"
        component={ContactScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-account-phone-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="about"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-account-details-outline"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  );
}