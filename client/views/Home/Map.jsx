import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map(lat, long) {
    return (
        <View style={styles.container}>
          <MapView 
          style={styles.map} 
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 9,
            longitudeDelta: 10,
          }}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: 345,
        height: 180,
      },
    });