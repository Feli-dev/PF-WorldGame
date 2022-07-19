import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

export default function Navbar() {
  return (
    <View
      style={tw`flex h-1/6 items-center justify-center bg-gray-900 mt-35 mb--8`}
    >
      <View style={tw`flex flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md mr-5 w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path fill="#000" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 128c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32 14.3-32 32-32zm40 256h-80c-13.2 0-24-10.7-24-24s10.75-24 24-24h16v-64h-8c-13.25 0-24-10.75-24-24s10.8-24 24-24h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md mr-5 w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <Path fill="#000" d="M495.9 166.6c3.3 8.6.5 18.3-6.3 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4 0 8.6-.6 17.1-1.7 25.4l43.3 39.4c6.8 6.3 9.6 16 6.3 24.6-4.4 11.9-9.7 23.4-15.7 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.3-6 7.1-15.7 9.6-24.5 6.8l-55.7-17.8c-13.4 10.3-29.1 18.9-44 25.5l-12.5 57.1c-2 9-9 15.4-18.2 17.8-13.8 2.3-28 3.5-43.4 3.5-13.6 0-27.8-1.2-41.6-3.5-9.2-2.4-16.2-8.8-18.2-17.8l-12.5-57.1c-15.8-6.6-30.6-15.2-44-25.5l-55.66 17.8c-8.84 2.8-18.59.3-24.51-6.8-8.11-9.9-15.51-20.3-22.11-31.3l-4.68-8.1c-6.07-10.9-11.35-22.4-15.78-34.3-3.24-8.6-.51-18.3 6.35-24.6l43.26-39.4C64.57 273.1 64 264.6 64 256c0-8.6.57-17.1 1.67-25.4l-43.26-39.4c-6.86-6.3-9.59-15.9-6.35-24.6 4.43-11.9 9.72-23.4 15.78-34.3l4.67-8.1c6.61-11 14.01-21.4 22.12-31.25 5.92-7.15 15.67-9.63 24.51-6.81l55.66 17.76c13.4-10.34 28.2-18.94 44-25.47l12.5-57.1c2-9.08 9-16.29 18.2-17.82C227.3 1.201 241.5 0 256 0s28.7 1.201 42.5 3.51c9.2 1.53 16.2 8.74 18.2 17.82l12.5 57.1c14.9 6.53 30.6 15.13 44 25.47l55.7-17.76c8.8-2.82 18.5-.34 24.5 6.81 8.1 9.85 15.5 20.25 22.1 31.25l4.7 8.1c6 10.9 11.3 22.4 15.7 34.3zM256 336c44.2 0 80-35.8 80-80.9 0-43.3-35.8-80-80-80s-80 36.7-80 80c0 45.1 35.8 80.9 80 80.9z" />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md mr-5 w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                <Path fill="#000" d="M464 64c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 01-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9 0 0076.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z" />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <Path fill="#000" d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm50.7 48H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3c0-95.7-77.6-173.3-173.3-173.3z" />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
