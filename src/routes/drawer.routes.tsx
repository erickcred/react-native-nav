import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AccountScreen } from "../screens/drawer/AccountScreen";
import { GroupPersonScreen } from "../screens/drawer/GroupPersonScreen";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator
      screenOptions={{
        drawerActiveTintColor: "#283b17",
        drawerActiveBackgroundColor: "#59a51a57",
        drawerLabelStyle: {fontSize: 16 },
        overlayColor: "transparent"
      }}
    >
      <Screen
        name="account"
        component={AccountScreen}
        options={{
          drawerIcon: ({ size, color}) => (
            <MaterialCommunityIcons
              name="account"
              size={30}
            />
          )
        }}
      />
      <Screen
        name="group-person"
        component={GroupPersonScreen}
      />
    </Navigator>
  );
}