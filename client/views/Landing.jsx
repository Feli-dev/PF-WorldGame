import React from 'react';
import { View, Image, ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from "../assets/Worldgame.png"
import { getUser, setLogin, setStat, getAllCountries } from '../redux/actions'
import { playSound } from '../utils/sounds';
import tw from "twrnc";
import { Video } from 'expo-av'

const Landing = ({ navigation }) => {
    const allUser = useSelector((state) => state.users)
    const stat = useSelector((state) => state.stat)
    const [al, setAl] = useState(true);
    let [first , setFirst] = useState(true);
    const dispatch = useDispatch()
    const video = React.useRef(null);


    
    const createAlert = () =>
    Alert.alert(
      "You have been banned",
      "For more information, contact support",
      [
        {
          text: "Register",
          onPress: () => navigation.navigate("Register")
        },
        { text: "Login", onPress: () => navigation.navigate("Login") }
      ]
    );
    const getLogin = async () => {
        if(first === true){
        if (allUser.Request?.length > 0) {
            var value = await AsyncStorage.getItem("User")
            if (value !== null) {
                value = JSON.parse(value);
                const User = (allUser.Request.find((e) => (e.username.toLowerCase() === value.username.toLowerCase())))
                if (User) {
                    if(User.state === false){
                        dispatch(setLogin(User));
                        if(al === true){
                            createAlert();
                            setAl(false);
                        } 
                    } else {
                        dispatch(setLogin(User));
                        setTimeout(()=>{
                            navigation.navigate("Home");
                        }, 6000)
                    }
                } else {
                    setTimeout(()=>{
                        navigation.navigate("Login");
                    }, 6000)
                }
            } else {
                setTimeout(()=>{
                    navigation.navigate("Login");
                }, 6000)
            }
        }else{
            console.log("not users")
            setTimeout(()=>{
                navigation.navigate("Register");
            }, 6000)
        }
        setFirst(false);
    }
    }
    useEffect(() => {
        playSound(dispatch,setStat, stat);
        dispatch(getAllCountries());
        dispatch(getUser());
    }, [dispatch]);
    useEffect(() => {
        if(allUser.Request){
            getLogin();
        }
        //console.log(allUser);
    }, [allUser]);

    return (
        <View style={tw`h-full bg-[#005f73] flex items-center justify-center`}>
            {/* <Image style={tw`h-100 w-100`} source={img}/> */}
            <Video
                ref={video}
                style={tw`flex items-center justify-center w-full h-full`}
                // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                source={require("../assets/worldgame_animation.mp4")}
                useNativeControls={false}
                resizeMode="contain"
                shouldPlay
                isLooping={true}
                isMuted={true}
                onLoadStart={()=>{}}
            />
            {/* <ActivityIndicator size="large" color="#FFF"/> */}
        </View>
    )

}

export default Landing;