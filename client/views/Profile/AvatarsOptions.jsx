import {
    View,
    Text,
    Image,
} from "react-native";
import React from "react";
import tw from "twrnc";

export default function AvatarOptions({ route, navigation, }) {

    const { profileImage, isPremium } = route.params;

    return (
        <View style={{
        }}>
            <Text>Set your new avatar</Text>
        </View>
    )



}