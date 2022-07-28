import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./views/Home/Home";
import Instructions from "./views/Instructions";
import Ranking from "./views/Ranking";
import EditProfile from "./views/Profile/EditProfile";
import Configuration from "./views/Configuration";
import Info from "./views/Info";
import Stripe from "./Stripe/Stripe";
import Profile from "./views/Profile/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
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
          <Stack.Screen name="EditProfile" component={EditProfile} />          
          <Stack.Screen name="Configuration" component={Configuration} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Payment" component={Stripe} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
