import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./views/Home/Home";
import Instructions from "./views/Instructions";
import Ranking from "./views/Ranking";
import Profile from "./views/Profile";
import Configuration from "./views/Configuration";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="Ranking" component={Ranking} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Configuration" component={Configuration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
