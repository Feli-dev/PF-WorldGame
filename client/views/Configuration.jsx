import { View, Text, Platform, Button } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { setTestDeviceIDAsync, AdMobInterstitial } from "expo-ads-admob";

export default function Configuration() {
  async function chargeAds(){
    await setTestDeviceIDAsync('EMULATOR');
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/8691691433'); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }
  chargeAds()  
    
  return (
    <View style={tw`h-full bg-gray-900 flex justify-center items-center`}>
      
    </View>
  );
}
