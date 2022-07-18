import { text, View, TouchableOpacity } from "react-native";
import tw from "twrnc"

export default function Login() {
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <Text style={tw`text-white text-3xl font-bold`}>World Game</Text>
      
      <TouchableOpacity style={tw`bg-gray-800 px-8 py-2 rounded-full mt-10`}>
        <Text style={tw`text-white`}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-gray-800 px-8 py-2 rounded-full mt-10`}>
        <Text style={tw`text-white`}>Registarse</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-gray-700 px-8 py-2 rounded-full mt-10 w-40`}
      >
        <Text style={tw`text-white text-center`}>GOOGLE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-gray-700 px-8 py-2 rounded-full mt-10 w-40`}
      >
        <Text style={tw`text-white text-center`}>FACEBOOK</Text>
      </TouchableOpacity>
    </View>
  );
}
