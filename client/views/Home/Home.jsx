import { ImageBackground, Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import tw from "twrnc";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Game from "./Game";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import img from "../../assets/Worldgame.png"


export default function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={tw`flex items-center justify-center bg-[#005f73] h-full mt-15`}>
        <View>
          <Navbar navigation={navigation} />
        </View>
        <View>
          {/* <ImageBackground source={img} resizeMode="cover" style={tw`flex justify-center h-30 w-30`}/> */}
          <Game />
        </View>
        <View>
          <Footer />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
