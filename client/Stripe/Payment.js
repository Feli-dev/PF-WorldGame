import { useStripe } from '@stripe/stripe-react-native';
import React, { useState } from "react";
import { PostPayment } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { View, TextInput, Button, Alert, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from "../assets/Worldgame.png"
import worldImg from '../assets/Worldgame.png'
import tw from "twrnc"

const Payment = (
    {
        name,
        id,
        country,
        email,
        userName,
        password,
        isSpanish,
    }

) => {
    const UserId = id;

    const [premiumLevelAUX, setPremiumLevelAUX] = useState({
        userId: id,
        name: name,
        email: email,
    });
    const stripe = useStripe();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleOnChange = (type, e) => {
        setPremiumLevelAUX({
            ...premiumLevelAUX,
            [type]: e,
        });
    };
    const premiumLevel =
        premiumLevelAUX.name === "" || premiumLevelAUX.email === ""
            ? ""
            : `userID:${id}`;
    const subscribe = async () => {
        try {
            //sending request
            const response = await fetch('https://world-game-v9.herokuapp.com/payment',
                {
                    method: 'POST',
                    body: JSON.stringify({ premiumLevel }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            //-------------------------------------------------------------------------->CONSOLEO stripe

            const data = await response.json();
            //-------------------------------------------------------------------------->CONSOLEO DATA 

            if (!response.ok) { return Alert.alert(data.message) };
            const clientSecret = data.clientSecret;
            //-------------------------------------------------------------------------->initSheet 
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName: 'Premium Service',
            });


            if (initSheet.error) { return Alert.alert(initSheet.error.message) };
            const presentSheet = await stripe.presentPaymentSheet({
                clientSecret
            });

            //-------------------------------------------------------------------------->presentSheet Me indica si el pago fue concretado o no

            if (presentSheet.error) { return Alert.alert(presentSheet.error.message) };
            if(!isSpanish) Alert.alert("Payment complete!");
            else Alert.alert("Pago completado!");
            dispatch(PostPayment({ UserId }))
            navigation.navigate("Home");

            //ID Y BOOLEANO TRUE FALSE SI SE CONFIRMO EL PAGO

            // y tengo que mandar data extra del cliente

        } catch (error) {
            console.error(error);
            if(!isSpanish) Alert.alert("Something went wrong, try again later!")
            else Alert.alert("Algo ha ido mal, inténtalo de nuevo más tarde.")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={tw`bg-gray-900 items-center justify-center h-full w-full`}
            >
                <Image
                    source={worldImg}
                    style={tw`h-90 w-90`} />
                <View
                    style={tw`bg-gray-900 items-center justify-center mt-5`}>
                    <Text style={tw`text-white font-bold text-base text-center p-5`}>{isSpanish?"Por favor, introduzca los datos del propietario de la tarjeta.":"Please enter the card owner's information."}</Text>
                    <View>
                        <TextInput
                            // value={premiumLevelAUX.name}
                            onChangeText={(text) => handleOnChange("name", text)}//VER SI AGREGO VARIAS OPCIONES DE PREMIUM O UNA SOLA
                            placeholder={isSpanish?"Nombre":"Name"}
                            placeholderTextColor="white"
                            type="name"
                            defaultValue={premiumLevelAUX.name}
                            required
                            style={tw`w-70 text-lg text-white border-white border-2 rounded-lg p-3 mb-5`}
                        />
                    </View>
                    <View>
                        <TextInput
                            // value={premiumLevelAUX.email}
                            onChangeText={(text) => handleOnChange("email", text)}//VER SI AGREGO VARIAS OPCIONES DE PREMIUM O UNA SOLA
                            placeholder={isSpanish?"Correo Electrónico":"Email"}
                            placeholderTextColor="white"
                            type="email"
                            defaultValue={premiumLevelAUX.email}
                            required
                            style={tw`w-70 text-lg text-white border-white border-2 rounded-lg p-3 mb-5`}
                        />
                    </View>
                    <View>
                        {/* <TouchableOpacity
                        onPress={subscribe} 
                    onPress={subscribe} 
                        onPress={subscribe} 
                        style={{}}                    
                    style={{}}                    
                        style={{}}                    
                        >
                            <Text>Subscribe - $5</Text>
                        </TouchableOpacity> */}
                    <Button title={isSpanish?"Suscribirse - $5":'Subscribe - $5'} onPress={subscribe} />
                </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Payment;