import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logOut, PostReview, soundOnOff, setStat, GetLanguages } from "../redux/actions";
import { backSound, playSound } from "../utils/sounds";

export default function Configuration({ navigation }) {
  const dispatch = useDispatch();
  const stat = useSelector((state) => state.stat);
  const isSpanish = useSelector((state) => state.isSpanish);
  const soundOn = useSelector((state) => state.soundOn);
  const login = useSelector((state) => state.login);
  const [err, setErr] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const [reviewMessage, setReviewMessage] = useState("");
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    navigation.navigate("Payment", {
      id: login?.Request?.id,
      email: login?.Request?.email,
      name: login?.Request?.name,
    });
  };
  const [isEnabledMusic, setIsEnabledMusic] = useState(false);
  const musicSwitch = () => {
    setIsEnabledMusic((previousState) => !previousState);
    playSound(dispatch, setStat, stat);
  };
  const [isEnabledSound, setIsEnabledSound] = useState(false);
  const soundSwitch = () => {
    setIsEnabledSound((previousState) => !previousState);
    dispatch(soundOnOff(!soundOn));
  };
  const [modalVisible, setModalVisible] = useState(false);
  const userInfo = useSelector((state) => state.userdetail);

  useEffect(() => {
    console.log(userInfo)
    if (login?.Request?.premium) setIsEnabled(true);
    else setIsEnabled(false);
  }, []);

  async function logout() {
    await AsyncStorage.removeItem("User");
    dispatch(logOut());
    navigation.navigate("Login");
    backSound();
  }

  const handleError = () => {
    if(!isSpanish) setErr({ errAds: "Premium users cannot see ads" })
    else setErr({ errAds: "Los usuarios Premium no pueden ver anuncios" })
    setTimeout(() => {
      setErr({});
    }, 3000);
  };

  return (
    <View
      style={tw`h-full bg-[#005f73] flex flex-col justify-around items-center`}
    >
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-col flex items-center justify-center mb-10`}>
          <Text style={tw`text-white text-xl`}> {isSpanish ? "Cambiar lenguaje" : "Change language"} </Text>
          <View style={tw`flex flex-row justify-around items-center mt-5`}>
            <TouchableOpacity
              style={tw`flex mr-5 items-center justify-center w-12 h-10 bg-gray-300 rounded-lg`}
              onPress={() => {dispatch(GetLanguages(false))}}
            >
              {/* <Text style={tw`text-center font-bold`}>EN</Text> */}
              <Image
                style={tw`w-8 h-6`}
                source={{ uri: "https://flagcdn.com/w2560/gb.png" }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex items-center justify-center w-12 h-10 bg-gray-300 rounded-lg`}
              onPress={() => {dispatch(GetLanguages(true))}}
            >
              {/* <Text style={tw`text-center font-bold`}>ES</Text> */}
              <Image
                style={tw`w-8 h-6`}
                source={{ uri: "https://flagcdn.com/w2560/es.png" }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`flex flex-col items-center justify-center w-8/10 ml--12`}>
          <View style={tw`flex-row flex items-center justify-center`}>
            <View style={tw`flex flex-col justify-center items-center w-8/10 h-10`}>
              <Text style={tw`text-white text-lg`}> {isSpanish ? "Desactivar anuncios" : "Disable Ads"} </Text>
            </View>
            <View style={tw`flex flex-col justify-center items-center w-2/10 h-10`}>
              <Switch
                trackColor={{ false: "#767577", true: "#9ebc63" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={login?.Request?.premium ? handleError : toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <Text style={tw`text-red-500 text-xs mb-3`}>{err.errAds}</Text>
          <View style={tw`flex-row flex items-center justify-center mb-5`}>
            <View style={tw`flex flex-col justify-center items-center w-8/10 h-10`}>
              <Text style={tw`text-white text-lg`}>{ isSpanish ? "Sonido" : "Sound"} </Text>
            </View>
            <View style={tw`flex flex-col justify-center items-center w-2/10 h-10`}>
              <Switch
                trackColor={{ false: "#767577", true: "#9ebc63" }}
                thumbColor={soundOn ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={soundSwitch}
                value={soundOn}
              />
            </View>
          </View>
          <View style={tw`flex-row flex items-center justify-center`}>
            <View style={tw`flex flex-col justify-center items-center w-8/10 h-10`}>
              <Text style={tw`text-white text-lg`}>{ isSpanish ? "Música" : "Music"} </Text>
            </View>
            <View style={tw`flex flex-col justify-center items-center w-2/10 h-10`}>
              <Switch
                trackColor={{ false: "#767577", true: "#9ebc63" }}
                thumbColor={stat.soundObj?.isPlaying ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={musicSwitch}
                value={stat.soundObj?.isPlaying}
              />
            </View>
          </View>
        </View>
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
              <View
                style={tw`flex items-center justify-evenly bg-[#C0D6DF] rounded-2xl w-80 h-90`}
              >
                <TextInput
                  placeholder={ isSpanish ? "Introduzca una reseña..." : "Enter a review..."}
                  placeholderTextColor="#000"
                  multiline={true}
                  style={tw`p-3 w-65 h-65 rounded-md bg-gray-200 text-black text-justify text-base `}
                  onChangeText={(text) => setReviewMessage(text)}
                  autoCapitalize="sentences"
                  value={reviewMessage}
                  underlineColorAndroid="transparent"
                  textAlignVertical="top"
                />
                <TouchableOpacity
                  style={tw`rounded-lg bg-[#9ebc63] pt-1 pb-1 pr-2 pl-2`}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    if (reviewMessage !== "") {
                      dispatch(
                        PostReview({
                          message: reviewMessage,
                          userId: login?.Request?.id,
                        })
                      );
                      setReviewMessage("");
                    }
                  }}
                >
                  <Text style={tw`text-base font-bold text-white`}>{ isSpanish ? "Enviar" : "Send"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
          style={tw`w-30 h-10 bg-[#9ebc63] flex items-center justify-center rounded-md mt-10`}
          onPress={() => setModalVisible(true)}
        >
          <Text style={tw`text-white text-center font-bold`}>{isSpanish ? "Enviar reseña" : "Send review"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`w-40 h-10 bg-red-500 flex items-center justify-center rounded-md`}
        onPress={() => {
          logout();
        }}
      >
        <Text style={tw`text-white text-center font-bold`}>{isSpanish ? "Cerrar Sesión" : "LOG OUT"}</Text>
      </TouchableOpacity>
    </View>
  );
}
