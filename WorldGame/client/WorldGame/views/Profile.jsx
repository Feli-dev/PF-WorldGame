import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

export default function Profile() {
  return (
    <View
      style={tw`bg-gray-900 h-full flex justify-start items-center flex-col`}
    >
      <View
        style={tw`rounded-md bg-gray-700 flex items-center justify-center w-90 mt-15`}
      >
        <View style={tw`flex flex-row justify-between items-center w-90 h-30`}>
          <TouchableOpacity
            style={tw`w-50 ml-5 bg-gray-600 rounded-md h-10 flex justify-center items-center`}
          >
            <Text style={tw`text-white font-bold text-base`}>Change Photo</Text>
          </TouchableOpacity>
          <View style={tw`w-25 h-25 mr-5 bg-white rounded-md p-2`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <Path
                fill="#000"
                d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm50.7 48H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3c0-95.7-77.6-173.3-173.3-173.3z"
              />
            </Svg>
          </View>
        </View>
      </View>
      <View style={tw`flex justify-center items-center bg-gray-700 rounded-md w-90 h-6/9 mt-12 mb-6`}
      >
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>User</Text>
          <TextInput
            placeholder="Feli-Dev"
            placeholderTextColor="#9f9f9f"
            style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
        </View>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>
            Email Address
          </Text>
          <TextInput
            placeholder="felipetau0@gmail.com"
            placeholderTextColor="#9f9f9f"
            style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
        </View>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>Name</Text>
          <TextInput
            placeholder="Felipe Tau"
            placeholderTextColor="#9f9f9f"
            style={tw`pl-3 mb-5 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={tw`w-50 mt-10 bg-gray-600 rounded-md h-10 flex justify-center items-center`}
        >
          <Text style={tw`text-white font-bold text-base`}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
