import React from "react";
import {
    StatusBar,
    StyleSheet,
    View,

} from "react-native";
import { StripeProvider } from '@stripe/stripe-react-native'
import Payment from "./Payment";


export default function Stripe() {
    const PUBLIC_KEY = 'pk_test_51LPZEWEj5haMaN87mnh98XIzQgIXuRKcnN3r3UIHBjicQBUo3LXFXuFHU3cb97MsDzFLU2jo7PLRNQ8NIE1jlBX100VR4LvfAd';


    return (
        <View style={styles.container}>
            <StripeProvider publishableKey={PUBLIC_KEY}>
                <Payment />
            </StripeProvider>
            <StatusBar />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});