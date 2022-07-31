import { View, Image, ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from "../assets/Worldgame.png"
import { getUser, setLogin, getAllCountries } from '../redux/actions'
import tw from "twrnc";

const Landing = ({ navigation }) => {
    const allUser = useSelector((state) => state.users)
    const [al, setAl] = useState(true);
    const dispatch = useDispatch()

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
        if (allUser.Request?.length > 0) {
            var value = await AsyncStorage.getItem("User")
            if (value !== null) {
                value = JSON.parse(value);
                const User = (allUser.Request.find((e) => (e.username.toLowerCase() === value.username.toLowerCase())))
                console.log(User, value)
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
                        }, 1200)
                    }
                } else {
                    setTimeout(()=>{
                        navigation.navigate("Login");
                    }, 1200)
                }
            } else {
                setTimeout(()=>{
                    navigation.navigate("Login");
                }, 1200)
            }
        }else{
            console.log("not users")
            setTimeout(()=>{
                navigation.navigate("Register");
            }, 1200)
        }
        
    }
    
    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getUser());
    }, [dispatch]);


    useEffect(() => {
        if(allUser.Request){
            getLogin();
        }
    }, [allUser]);

    return (
        <View style={tw`h-full bg-gray-900 flex items-center justify-center`}>
            <Image style={tw`h-100 w-100`} source={img}/>
            <ActivityIndicator size="large" color="#FFF"/>
        </View>
    )

}

export default Landing;