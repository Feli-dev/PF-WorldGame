import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Configuration({navigation}) {
  async function logout(){
    await AsyncStorage.removeItem("User")
    navigation.navigate("Login")
  }
  return (
    <View style={tw`h-full bg-gray-900 flex justify-center items-center`}>
      <TouchableOpacity 
        style={tw`w-40 h-10 bg-red-500 flex items-center justify-center rounded-md`}
        onPress={()=>{logout()}} 
      >
        <Text style={tw`text-white text-center font-bold`}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
}
