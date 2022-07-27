import { View, Image, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from "../assets/fondo_zoom_pg.png"
import { getUser, setLogin, getAllCountries } from '../redux/actions'
import tw from "twrnc";

const Landing = ({ navigation }) => {
    const allUser = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const getLogin = async () => {
        if (allUser.Request?.length > 0) {
            var value = await AsyncStorage.getItem("User")
            if (value !== null) {
                value = JSON.parse(value);
                const User = (allUser.Request.find((e) => (e.username === value.username)))
                if (User) {
                    dispatch(setLogin(User));
                    navigation.navigate("Home");
                } else {
                    navigation.navigate("Login");
                }
            } else {
                navigation.navigate("Login");
            }
        }else{
            console.log("not users")
        }
        
    }
    
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    useEffect(() => {
        if(allUser.Request){
            getLogin();
        }
    }, [allUser]);

    return (
        <View>
             <Image style={tw`h-10 w-20`}source={{img}}/> 
            <Text>hola que tal </Text>
        </View>
    )

}

export default Landing;