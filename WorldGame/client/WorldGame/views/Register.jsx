import { Text, View, TouchableOpacity,TextInput} from "react-native";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

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
      <View style={tw`flex flex-row mt-10  justify-center items-center`}>
        <View style={tw`w-30 mr-5 border-b border-solid border-gray-400`}>
        </View>
        <Text style={tw`text-gray-100 text-xs`}>OR</Text>
        <View style={tw`w-30 ml-5 border-b border-solid border-gray-400`}>
        </View>
      </View>
      <View style={tw`flex flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#4267B2] px-8 py-2 rounded-md mt-10 mr-5 w-20 h-20`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path
                fill="#FFF"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md mt-10 w-20 h-20`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 326667 333333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <Path
                d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                fill="#4285f4"
              />
              <Path
                d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                fill="#34a853"
              />
              <Path
                d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                fill="#fbbc04"
              />
              <Path
                d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                fill="#ea4335"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-10`}>
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
