import { Text, View, TouchableOpacity,TextInput} from "react-native";
import tw from "twrnc";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Game from "./Game";

export default function Home() {
  return (
    <View style={tw`flex md:container md:mx-auto items-center justify-center bg-gray-900`}>
      <View>
        <Navbar/>
      </View>
      <View style={tw`w-70 mt--10 mb-3 border-b border-solid border-gray-400`}></View>
      <View>
        <Game/>
      </View>
      <View style={tw`w-70 mt--33 mb-12 border-b border-solid border-gray-400`}></View>
      <View>
        <Footer/>
      </View>
    </View>
  );
}
