import { Text, View, TouchableOpacity,TextInput} from "react-native";
import tw from "twrnc";

export default function Register() {
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <View style={tw`flex`}>
      <View style={tw`flex flex-col`}> 
        <Text style={tw`text-white text-lg text-left mb-2`}>Mail</Text>
        <TextInput placeholder='Mail...' placeholderTextColor="#6f6f6f" style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white placeholder-gray-200`}></TextInput>
      </View>
      <View style={tw`flex flex-col`}> 
        <Text style={tw`text-white text-lg text-left mb-2`}>Username</Text>
        <TextInput placeholder='Username...' placeholderTextColor="#6f6f6f" style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white placeholder-gray-200`}></TextInput>
      </View>
      <View style={tw`flex flex-col`}> 
        <Text style={tw`text-white text-lg text-left mb-2`}>Password</Text>
        <TextInput placeholder='Password...' placeholderTextColor="#6f6f6f" style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white placeholder-gray-200`}></TextInput>
      </View>
      <View style={tw`flex flex-col`}> 
        <Text style={tw`text-white text-lg text-left mb-2`}>Repeat password</Text>
        <TextInput placeholder='Repeat password...' placeholderTextColor="#6f6f6f" style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white placeholder-gray-200`}></TextInput>
      </View>
      </View>

      <TouchableOpacity
        style={tw`bg-gray-600 px-8 py-2 rounded-md mt-10 w-50`}
      >
        <Text style={tw`text-white text-center font-bold`}>REGISTER</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-row mt-15 mb-5 justify-center items-center`}>
        <View style={tw`w-30 mr-5 border-b border-solid border-gray-400`}>
        </View>
        <Text style={tw`text-gray-100 text-xs`}>OR</Text>
        <View style={tw`w-30 ml-5 border-b border-solid border-gray-400`}>
        </View>
      </View>
      <View style={tw`flex flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`bg-[#4267B2] px-8 py-2 rounded-md mt-10 mr-5 w-35`}
        >
          <Text style={tw`text-white text-center font-bold`}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-[#FFFFFF] px-8 py-2 rounded-md mt-10 w-35`}
        >
          <Text style={tw`text-black text-center font-bold`}>GOOGLE</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-15`}>
        <Text style={tw`text-white text-center font-bold`}>
          If you have an account,  
          <Text style={tw`text-blue-200 text-center font-bold`}
            onPress={() => Linking.openURL("abre el link a registrarse")}>
             &nbsp;Log in
          </Text>
        </Text>
      </View>
      </View>
  );
}
