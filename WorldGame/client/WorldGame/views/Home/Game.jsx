import { Text, View, ScrollView} from "react-native";
import tw from "twrnc";

export default function Game() {
  return (
    <View style={tw`flex h-8/10 items-center justify-center bg-gray-900`}>
      <ScrollView>
        <View style={tw`flex flex-row justify-center items-center mb-3 mt-3`}>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-yellow-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-red-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-red-600 h-10 w-10 rounded-md`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
        </View>
        <View style={tw`flex flex-row justify-center items-center mb-3 mt-3`}>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-yellow-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-yellow-600 h-10 w-10 rounded-md`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
        </View>
        <View style={tw`flex flex-row justify-center items-center mb-3 mt-3`}>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md mr-5`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
            <View style={tw`flex justify-center items-center bg-green-600 h-10 w-10 rounded-md`}>
                <Text style={tw`text-white text-center font-bold`}></Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}