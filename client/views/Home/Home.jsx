import { Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import tw from "twrnc";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Game from "./Game";
import { useSelector } from 'react-redux'
import { useEffect } from "react";


export default function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={tw`flex items-center justify-center bg-gray-900 mb-5`}>
        <View>
          <Navbar navigation={navigation} />
        </View>
        <View>
          <Game />
        </View>
        <View>
          <Footer />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
