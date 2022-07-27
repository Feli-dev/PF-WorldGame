import { useStripe } from '@stripe/stripe-react-native';
import React, { useState } from "react";
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';


const Payment = () => {
    const [premiumLevel, setPremiumLevel] = useState('');
    const stripe = useStripe();

    const subscribe = async () => {
        try{
            //sending request
            const response = await fetch('http://192.168.0.179:3001/payment', 
                        {
                method: 'POST',
                body: JSON.stringify({premiumLevel}) ,
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            if (!response.ok) {return Alert.alert(data.message)};
            const clientSecret = data.clientSecret;
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName : 'Premium Service',
            });
            if(initSheet.error){return Alert.alert(initSheet.error.message)};
            const presentSheet = await stripe.presentPaymentSheet({
                clientSecret
            });
            if(presentSheet.error){return Alert.alert(presentSheet.error.message)};
            Alert.alert("Payment complete!");

        } catch (error){
            console.error(error);
            Alert.alert("Something went wrong, try again later!")
        }
    }

    return (
        <View>
            <TextInput 
                value={premiumLevel}
                onChangeText={(text) => setPremiumLevel(text)}//VER SI AGREGO VARIAS OPCIONES DE PREMIUM O UNA SOLA
                placeholder="Premium Option"
                style={{
                    width: 300,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 1,
                }}
            />
            <Button title='Subscribe - $5' onPress={subscribe}/>
        </View>
    );
};

export default Payment;