import React from "react";
import {
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import { StripeProvider } from '@stripe/stripe-react-native'
import Payment from "./Payment";
import { useSelector } from "react-redux";

export default function Stripe({ route }) {
    const PUBLIC_KEY = 'pk_test_51LPZEWEj5haMaN87mnh98XIzQgIXuRKcnN3r3UIHBjicQBUo3LXFXuFHU3cb97MsDzFLU2jo7PLRNQ8NIE1jlBX100VR4LvfAd';
    const { id, name, country, email, userName,password} = route.params;
    const isSpanish = useSelector((state) => state.isSpanish);

    return (
        <View style={styles.container}>
            <StripeProvider publishableKey={PUBLIC_KEY}>
                <Payment
                    id={id}
                    name={name}
                    country={country}
                    email={email}
                    userName={userName}
                    password={password}
                    isSpanish={isSpanish}
                />
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