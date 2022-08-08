import { View, Text, Platform, TouchableOpacity, Switch, Modal, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logOut, PostReview, soundOnOff, setStat } from "../redux/actions";
import { backSound, playSound } from '../utils/sounds';

export default function Configuration({navigation}) {
  const dispatch = useDispatch()
  const stat = useSelector((state) => state.stat);
  const soundOn = useSelector((state) => state.soundOn);
  const login = useSelector((state) => state.login);
  const [err, setErr] = useState({})
  const [isEnabled, setIsEnabled] = useState(false);
  const [reviewMessage, setReviewMessage] = useState("");
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState); navigation.navigate("Payment",{id:login?.Request?.id, email: login?.Request?.email, name: login?.Request?.name})};
  const [isEnabledMusic, setIsEnabledMusic] = useState(false);
  const musicSwitch = () =>  {setIsEnabledMusic(previousState => !previousState); playSound(dispatch,setStat, stat)}
  const [isEnabledSound, setIsEnabledSound] = useState(false);
  const soundSwitch = () =>  {setIsEnabledSound(previousState => !previousState); dispatch(soundOnOff(!soundOn))}
  const [modalVisible, setModalVisible] = useState(false);
  const userInfo = useSelector((state) => state.userdetail);

  useEffect(()=>{
    if(login?.Request?.premium)setIsEnabled(true)
  },[login])

  async function logout(){
    await AsyncStorage.removeItem("User")
    dispatch(logOut())
    navigation.navigate("Login")
    backSound()
  }

  const handleError = () => {
    setErr({errAds: "Premium users cannot see ads"}); 
    setTimeout(()=>{
      setErr({}); 
    }, 3000)
  }
  
  return (
    <View style={tw`h-full bg-gray-900 flex flex-col justify-around items-center`}>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-row flex items-center justify-center`}>
          <Text style={tw`text-white text-lg`}> Disable Ads </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={login?.Request?.premium ? handleError : toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={tw`text-red-500 text-xs`}>{err.errAds}</Text>
        <View style={tw`flex items-center justify-center rounded-md`}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={tw`flex items-center justify-center mt-35`}>
              <View style={tw`flex items-center justify-evenly bg-gray-300 rounded-md w-80 h-90`}>
                <TextInput
                  placeholder="Enter a review..."
                  placeholderTextColor="#000"
                  multiline={true}
                  style={tw`p-3 w-65 h-65 rounded-md bg-gray-400 text-black text-justify text-base `}
                  onChangeText={(text) => setReviewMessage(text)}
                  autoCapitalize="sentences"
                  value={reviewMessage}
                  underlineColorAndroid='transparent'
                  textAlignVertical="top"
                />
                <TouchableOpacity
                  style={tw`rounded-lg bg-blue-400 pt-1 pb-1 pr-2 pl-2`}
                  onPress={() => {setModalVisible(!modalVisible); if(reviewMessage !== ""){ dispatch(PostReview({message: reviewMessage, userId: login?.Request?.id})); setReviewMessage("")}}}
                >
                  <Text style={tw`text-base font-bold text-white`}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <TouchableOpacity 
          style={tw`w-30 h-10 bg-blue-500 flex items-center justify-center rounded-md mt-20`}
          onPress={()=> setModalVisible(true)} 
        >
          <Text style={tw`text-white text-center font-bold`}>Send review</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={tw`w-40 h-10 bg-red-500 flex items-center justify-center rounded-md`}
        onPress={()=>{logout()}} 
      >
        <Text style={tw`text-white text-center font-bold`}>LOG OUT</Text>
      </TouchableOpacity>
      <View style={tw`flex-row flex items-center justify-center`}>
          <Text style={tw`text-white text-lg`}>Sound </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={soundOn ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={soundSwitch}
            value={soundOn}
          />
        </View>
      <View style={tw`flex-row flex items-center justify-center`}>
          <Text style={tw`text-white text-lg`}>Music </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={stat.soundObj?.isPlaying ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={musicSwitch}
            value={stat.soundObj?.isPlaying}
          />
        </View>
    </View>
  );
}
