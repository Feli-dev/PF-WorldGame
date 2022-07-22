import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { gameAction, getCountrie, getAllCountries} from "../../redux/actions/index"

//onpress white flag render confirm message

export default function Footer() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)
  
  useEffect(()=>{
    dispatch(getAllCountries(true))
  },[])

  return (
    <View style={tw`flex h-1/6 items-center justify-center bg-gray-900`}>
      <View style={tw`flex flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md mr-5 w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path
                fill="#000"
                d="M64 496c0 8.8-7.25 16-16 16H16c-8.75 0-16-7.2-16-16V32C0 14.25 14.25 0 32 0s32 14.25 32 32v464zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87C160.9.306 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Country..."
          placeholderTextColor="#6f6f6f"
          style={tw`pl-3 mr-5 w-45 h-15 rounded-md bg-gray-800 text-white text-lg `}
        ></TextInput>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <Path
                fill="#000"
                d="M374.6 246.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.47 12.55 12.47 32.75-.03 45.25z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
