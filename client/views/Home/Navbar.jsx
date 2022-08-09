import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setStat, soundOnOff } from '../../redux/actions'
import red from "../../assets/viewInfo/red.png";
import { touchSound, playSound } from '../../utils/sounds';
import green from "../../assets/viewInfo/green.png";

export default function Navbar({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const isSpanish= useSelector((state) => state.isSpanish);
  const stat = useSelector((state) => state.stat);
  const soundOn = useSelector((state) => state.soundOn);
  const dispatch = useDispatch()
  return (
    <View
      style={tw`flex h-1/6 items-center justify-center`}
    >
      <View style={tw`flex items-center justify-center rounded-lg`}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={tw`flex items-center justify-center mt-35`}>
              <View style={tw`flex items-center justify-center bg-[#C0D6DF] rounded-2xl w-80 h-90`}>
                <Text style={tw`text-base font-bold text-center mt-2 mb--2`}>{isSpanish ? '' :"INFO"}</Text>
                <View style={tw`h-3/10 w-8/10 flex flex-row items-center justify-evenly`}>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-22 rounded-lg mr-5`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <Path
                          fill="#000"
                          d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.1-20.4-4.2-41.8-4.2-64 0-22.2 2.1-43.6 4.2-64h185.4c2.1 20.4 3.3 41.8 3.3 64zm151.9-64c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42.9 3.2-64 0-22-1.1-43.4-3.2-64h123.1zm-10.5-32H376.7c-10-63.86-29.8-117.38-55.3-151.558C399.8 29.09 463.4 85.94 493.4 160zm-149.1 0H167.7c6.1-36.4 15.5-68.62 27-94.65 10.5-23.61 22.2-40.74 33.5-51.54C239.4 3.178 248.7 0 256 0c7.3 0 16.6 3.178 27.8 13.81 11.3 10.8 23 27.93 33.5 51.54 11.5 26.03 20.9 58.25 27 94.65zm-325.69 0C48.59 85.94 112.2 29.09 190.6 8.442 165.1 42.62 145.3 96.14 135.3 160H18.61zm112.59 32c-2.1 20.6-4.1 42-4.1 64 0 21.1 2 43.4 4.1 64H8.065C2.8 299.5 0 278.1 0 256s2.8-43.5 8.065-64H131.2zm63.5 254.6c-11.5-26-20.9-58.2-27-94.6h176.6c-6.1 36.4-15.5 68.6-27 94.6-10.5 23.7-22.2 40.8-33.5 51.6-11.2 10.6-20.5 13.8-28.7 13.8-6.4 0-15.7-3.2-26.9-13.8-11.3-10.8-23-27.9-33.5-51.6zm-4.1 57C112.2 482.9 48.59 426.1 18.61 352H135.3c10 63.9 29.8 117.4 55.3 151.6zm130.8 0c25.5-34.2 45.3-87.7 55.3-151.6h116.7c-30 74.1-93.6 130.9-172 151.6z"
                        />
                      </Svg>
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish ? "Hemisferio" : "Hemisphere"}</Text>
                  </View>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-22 rounded-lg mr-5`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <Path
                          fill="#000"
                          d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM57.71 192.1l9.36 17.3a64.042 64.042 0 0038.03 29.8l57 16.5c18.1 4.9 29.9 20.6 29.9 38.5v39.9c0 11 6.2 21 16 25 9.8 5.8 16 15.8 16 26.8v39c0 15.6 14.9 26.8 29.9 22.5 16.2-4.6 28.6-18.3 32.7-33.7l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40.1l8.1-4.6c15-8.5 24.2-24.4 24.2-41.7v-8.2c0-12.8-5.1-25-14.1-34l-3.8-3.8c-9-9-21.3-15-34-15h-44c-10.2 0-21.2-2-30.9-7.5l-34.5-19.8c-4.3-2.4-7.6-6.4-9.1-11.1-3.2-9.6 1.1-20 10.1-24.6l6-2.9c6.6-3.3 14.2-3.9 20.4-1.5l24.1 7.7c8.1 2.7 17.1-.4 21.9-7.5 4.7-7.1 4.2-16.4-1.2-22.9l-13.6-16.2c-10-12-9.9-29.5.3-41.3l15.7-18.38c8.8-10.27 10.2-24.96 3.5-36.7l-2.4-4.16c-4.3-.17-6.9-.26-10.4-.26-92.9 0-171.6 60.9-198.29 144.1zm379.89-37.6L412 164.8c-15.7 6.3-23.8 23.7-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 21l29.2 7.2c1.2-9 1.8-18.2 1.8-27.5 0-36.8-9.6-71.4-26.4-101.5z"
                        />
                      </Svg>
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish? "Continente":"Continent"}</Text>
                  </View>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-22 rounded-lg`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.000000 512.000000"
                      >
                        <Path
                          fill="#000"
                          d="M644 5105c-119-26-172-63-384-265C19 4609 5 4590 5 4500c0-56 4-73 27-106 54-77 138-108 227-84 36 9 67 34 163 127l118 116 2-1674 3-1674 28-90c80-259 283-462 542-542l90-28 1669-3 1668-2-115-119c-92-95-118-128-127-163-42-155 94-290 250-248 38 10 73 41 258 223 196 195 217 218 253 292 75 154 75 301-2 454-34 68-60 98-251 288-185 182-220 213-258 223-89 24-178-10-230-87-20-30-25-49-25-102 0-82 9-97 159-249l111-112-1655 2-1655 3-54 22c-112 46-189 122-233 230l-23 58-3 1660-2 1660 112-111c152-149 167-159 248-159 54 0 72 5 105 28 78 53 109 136 85 227-10 40-36 69-223 253-233 227-286 265-414 292-82 18-129 18-209 0zM1876 5113c-46-12-96-57-122-110-46-93-19-189 71-251l40-27 1360-5 1360-5 38-24c21-13 50-42 65-64l27-41 5-1365 5-1366 27-40c38-54 85-84 146-92 69-8 147 29 188 90l29 42 3 1357c3 1509 6 1435-64 1578-51 103-161 213-264 264-141 69-69 66-1555 65-737-1-1349-4-1359-6z"
                          transform="matrix(.1 0 0 -.1 0 512)"
                        />
                        <Path
                          fill="#000"
                          d="M3751 4029c-130-25-257-124-317-244-39-78-61-189-50-247 16-87 104-158 196-158s182 73 195 159c12 72 16 82 40 93 32 14 69 4 84-26 12-21 10-30-15-75-43-80-178-241-337-403-120-122-146-154-157-192-32-115 46-234 164-251 22-4 174-5 336-3 290 3 296 3 333 27 21 13 50 42 65 64 22 34 27 52 27 106 0 117-68 189-190 198-36 3-65 8-65 10 0 3 22 33 49 67 112 141 183 279 196 381 4 28 2 79-4 114-42 258-292 431-550 380zM1472 3329c-46-14-109-80-122-128-7-27-10-253-8-709l3-668 27-41c41-62 90-88 168-88s127 26 168 88l27 41 5 505c5 504 5 506 27 537 59 83 187 83 246 0 22-31 22-33 27-537l5-505 27-41c41-62 90-88 168-88s127 26 168 88l27 41 5 505c5 504 5 506 27 537 65 91 210 80 257-20 14-30 16-92 16-514v-480l28-53c22-43 38-59 81-81 68-36 114-36 182 0 43 22 59 38 81 81l28 53v487c0 304-4 510-11 547-38 208-224 394-437 435-128 24-277-4-392-75l-60-37-66 40c-98 59-159 75-289 75-80 0-123-5-158-18-47-17-49-17-82 4-40 25-125 34-173 19z"
                          transform="matrix(.1 0 0 -.1 0 512)"
                        />
                      </Svg>
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish ? "Area" : "Area"}</Text>
                  </View>
                </View>
                <View style={tw`h-3/10 w-8/10 flex flex-row items-center justify-evenly`}>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-25 rounded-lg mr-5`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <Path
                          fill="#000"
                          d="M208 48c0 26.51-21.5 48-48 48s-48-21.49-48-48 21.5-48 48-48 48 21.49 48 48zm-56 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l58.277-96.9C80.2 145.7 111.4 128 145.1 128h29.8c33.7 0 64.9 17.7 82.3 46.6l58.2 96.9c9.1 15.2 4.2 34.8-10.9 43.9-15.2 9.1-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"
                        />
                      </Svg>
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish? "Población":"Poblation"}</Text>
                  </View>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-25 rounded-lg`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <Path
                          fill="#000"
                          d="M288 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm325.1 50.7l55.5-144.3c7.5-20.3-11.6-38.5-31-31l-144.3 55.5c-8.5 3.2-15.2 9.9-18.4 18.4l-55.5 144.3c-7.5 19.4 10.7 38.5 31 31l144.3-55.5c8.5-3.2 15.2-9.9 18.4-18.4z"
                        />
                      </Svg>
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish ? "Coordenadas" : "Coordinates"}</Text>
                  </View>
                </View>
                <View style={tw`h-2/10 w-8/10 flex flex-row items-center justify-evenly`}>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-25 rounded-lg mr-5`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Image source={red} style={tw`w-7 h-7`} />
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish ? "Equivocado" :"Wrong"}</Text>
                  </View>
                  <View
                    style={tw`flex flex-col justify-center items-center h-25 w-25 rounded-lg`}
                  >
                    <View style={tw`h-7 w-7`}>
                      <Image source={green} style={tw`w-7 h-7`} />
                    </View>
                    <Text style={tw`mb-0.5 mt-0.5 font-bold text-sm`}>{isSpanish ? "Correcto":"Correct"}</Text>
                  </View>
                </View>
                <View style={tw`h-1/10 flex flex-col items-center justify-center mb-2`}>
                  <View
                    style={tw`w-70 mb-2 mt-1 border-b border-solid border-gray-400`}
                  ></View>
                  <TouchableOpacity
                    style={tw`w-35 pt-1 rounded-lg`}
                    onPress={() => {setModalVisible(!modalVisible);touchSound(soundOn);}}
                  >
                    <Text style={tw`text-center font-bold`}> {isSpanish ? "Cerrar":"Close"} </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
      </View>
      <View style={tw`flex flex-row justify-evenly w-full items-end pb-2 bg-[#C0D6DF] h-30 shadow-xl rounded-b-3xl`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-white px-8 py-2 rounded-full mr-3 w-20 h-13`}
          onPress={()=> {setModalVisible(true);touchSound(soundOn);}}
          // onPress={() => navigation.navigate("Info")}
        >
          <View style={tw`w-9 h-9`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path
                fill="#9ebc63"
                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 128c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32 14.3-32 32-32zm40 256h-80c-13.2 0-24-10.7-24-24s10.75-24 24-24h16v-64h-8c-13.25 0-24-10.75-24-24s10.8-24 24-24h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-white px-8 py-2 rounded-full mr-3 w-20 h-13`}
          onPress={() => {navigation.navigate("Configuration");touchSound(soundOn);}}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path
                fill="#9ebc63"
                d="M495.9 166.6c3.3 8.6.5 18.3-6.3 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4 0 8.6-.6 17.1-1.7 25.4l43.3 39.4c6.8 6.3 9.6 16 6.3 24.6-4.4 11.9-9.7 23.4-15.7 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.3-6 7.1-15.7 9.6-24.5 6.8l-55.7-17.8c-13.4 10.3-29.1 18.9-44 25.5l-12.5 57.1c-2 9-9 15.4-18.2 17.8-13.8 2.3-28 3.5-43.4 3.5-13.6 0-27.8-1.2-41.6-3.5-9.2-2.4-16.2-8.8-18.2-17.8l-12.5-57.1c-15.8-6.6-30.6-15.2-44-25.5l-55.66 17.8c-8.84 2.8-18.59.3-24.51-6.8-8.11-9.9-15.51-20.3-22.11-31.3l-4.68-8.1c-6.07-10.9-11.35-22.4-15.78-34.3-3.24-8.6-.51-18.3 6.35-24.6l43.26-39.4C64.57 273.1 64 264.6 64 256c0-8.6.57-17.1 1.67-25.4l-43.26-39.4c-6.86-6.3-9.59-15.9-6.35-24.6 4.43-11.9 9.72-23.4 15.78-34.3l4.67-8.1c6.61-11 14.01-21.4 22.12-31.25 5.92-7.15 15.67-9.63 24.51-6.81l55.66 17.76c13.4-10.34 28.2-18.94 44-25.47l12.5-57.1c2-9.08 9-16.29 18.2-17.82C227.3 1.201 241.5 0 256 0s28.7 1.201 42.5 3.51c9.2 1.53 16.2 8.74 18.2 17.82l12.5 57.1c14.9 6.53 30.6 15.13 44 25.47l55.7-17.76c8.8-2.82 18.5-.34 24.5 6.81 8.1 9.85 15.5 20.25 22.1 31.25l4.7 8.1c6 10.9 11.3 22.4 15.7 34.3zM256 336c44.2 0 80-35.8 80-80.9 0-43.3-35.8-80-80-80s-80 36.7-80 80c0 45.1 35.8 80.9 80 80.9z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-white px-8 py-2 rounded-full mr-3 w-20 h-13`}
          onPress={() => {navigation.navigate("Ranking");touchSound(soundOn);}}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <Path
                fill="#9ebc63"
                d="M406.1 61.65c9.3 1.44 13.3 12.94 6.5 19.76l-38 36.69 9 52c.5 9.4-8.3 16.6-16.9 12.3l-46.5-24.5-46.9 24.8c-8.6 4.3-18.3-2.9-16.9-12.2l9-52.1-38-36.99c-6.8-6.82-2.8-18.32 6.5-19.76l52.3-7.54 23.6-47.778c4.3-8.621 16.5-8.262 20.4 0l23.6 47.778 52.3 7.54zM384 256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V288c0-17.7 14.3-32 32-32h128zm-224 64c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V352c0-17.7 14.33-32 32-32h128zm288 96c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32v-64z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-white px-8 py-2 rounded-full w-20 h-13`}
          onPress={() => {navigation.navigate("Profile");touchSound(soundOn);}}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <Path
                fill="#9ebc63"
                d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm50.7 48H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3c0-95.7-77.6-173.3-173.3-173.3z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
