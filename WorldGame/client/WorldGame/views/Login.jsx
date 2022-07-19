import { Text, View, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";

export default function Login() {
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <View style={tw`flex flex-col`}> 
        <Text style={tw`text-white text-lg text-left`}>User</Text>
        <TextInput placeholder='User...' placeholderTextColor="#6f6f6f" style={tw`pl-3 mb-5 w-70 h-10 rounded bg-gray-600 text-white placeholder-gray-200`}></TextInput>
      </View>
      <View>
        <Text style={tw`text-white text-lg text-left`}>Password</Text>
        <TextInput placeholder='Password...' placeholderTextColor="#6f6f6f" style={tw`pl-3 w-70 h-10 rounded bg-gray-600 text-white content-center`}></TextInput>
      </View>
      <View style={tw`flex flex-row mt-20 justify-center items-center`}>
        <View style={tw`w-30 mr-5 border-b border-solid border-gray-400`}>
        </View>
        <Text style={tw`text-gray-100 text-xs`}>OR</Text>
        <View style={tw`w-30 ml-5 border-b border-solid border-gray-400`}>
        </View>
      </View>
    </View>
  );
}
