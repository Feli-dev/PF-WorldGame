
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import tw from "twrnc";
import Register from "./views/Register";
import Instructions from './views/Instructions';


export default function App() {
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <Instructions />
    </View>
  );
}
