import { useStripe } from '@stripe/stripe-react-native';
import React, { useState } from "react";
import { PostPayment } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { View, TextInput, Button, Alert, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from "../assets/Worldgame.png"
import title from '../assets/Worldgame-Title.png'
import worldImg from '../assets/World.png'
const Payment = (
    {
        name,
        id,
        country,
        email,
        userName,
        password,
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
            const response = await fetch('https://world-game-v6.herokuapp.com/payment',
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
            Alert.alert("Payment complete!");
            dispatch(PostPayment({ UserId }))
            navigation.navigate("Home");

            //ID Y BOOLEANO TRUE FALSE SI SE CONFIRMO EL PAGO

            // y tengo que mandar data extra del cliente

        } catch (error) {
            console.error(error);
            Alert.alert("Something went wrong, try again later!")
        }
    }

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#111827',
                alignItems: 'center',
            }}
        >
            <Image
                source={title}
                style={{
                    width: '100%',
                    marginTop: 50
                }} />
            <Image
                source={worldImg}
                style={{
                    width: 200,
                    height: 200,
                }} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    marginTop: 40,
                    padding: 40,
                }}>
                <Text style={{ fontSize: 20, padding: 10 }}>Please enter the card owner's information.</Text>
                <View>
                    <TextInput
                        // value={premiumLevelAUX.name}
                        onChangeText={(text) => handleOnChange("name", text)}//VER SI AGREGO VARIAS OPCIONES DE PREMIUM O UNA SOLA
                        placeholder="Name"
                        type="name"
                        defaultValue={premiumLevelAUX.name}
                        required
                        style={{
                            width: 300,
                            fontSize: 20,
                            padding: 10,
                            borderWidth: 1,
                        }}
                    />
                </View>
                <View>
                    <TextInput
                        // value={premiumLevelAUX.email}
                        onChangeText={(text) => handleOnChange("email", text)}//VER SI AGREGO VARIAS OPCIONES DE PREMIUM O UNA SOLA
                        placeholder="Email"
                        type="email"
                        defaultValue={premiumLevelAUX.email}
                        required
                        style={{
                            width: 300,
                            fontSize: 20,
                            padding: 10,
                            borderWidth: 1,
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    {/* <TouchableOpacity
                    onPress={subscribe} 
                    style={{}}                    
                    >
                        <Text>Subscribe - $5</Text>
                    </TouchableOpacity> */}
                    <Button title='Subscribe - $5' onPress={subscribe} />
                </View>

            </View>
        </View>
    );
};

export default Payment;