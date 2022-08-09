import React from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import tw from "twrnc";

export default function Map({lat, long}) {
  return (
    <View style={tw`mt-5 w-full shadow-lg flex items-center justify-center overflow-hidden rounded-lg`}>
      <MapView
        style={tw`w-75 h-50`}
        initialRegion={{
          latitude: parseFloat(lat),
          longitude: parseFloat(long),
          latitudeDelta: 2.3,
          longitudeDelta: 2.3,
        }}
      />
    </View>
  );
}
