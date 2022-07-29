import { useStripe } from '@stripe/stripe-react-native';
import React, { useState } from "react";
import { PutUser } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
   
    const [premiumLevel, setPremiumLevel] = useState('');
    const stripe = useStripe();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const clientData = {
        id: id,
        username: userName,
        name: name,
        country: country,
        email: email,
        premium: true,
        password: password,
    }
  
    const subscribe = async () => {
        try {
            //sending request
            const response = await fetch('http://192.168.0.179:3001/payment',
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
            dispatch(PutUser(clientData))
            navigation.navigate("Profile");

            //ID Y BOOLEANO TRUE FALSE SI SE CONFIRMO EL PAGO
           
            // y tengo que mandar data extra del cliente

        } catch (error) {
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
            <Button title='Subscribe - $5' onPress={subscribe} />
        </View>
    );
};

export default Payment;