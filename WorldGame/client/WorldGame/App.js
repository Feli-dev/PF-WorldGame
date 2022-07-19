import { View } from 'react-native';
import tw from "twrnc"
import Register from "./views/Register"
import Login from "./views/Login"
import Home from "./views/Home/Home"

export default function App() {
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <Register/>
    </View>
  );
}
