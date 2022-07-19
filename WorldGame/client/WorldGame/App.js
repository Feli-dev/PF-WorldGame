
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import tw from "twrnc"


export default function App() {
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <Register/>
    </View>
  );
}
