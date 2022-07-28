import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons'



const BottomTabView = () => {

    const Tab = createMaterialTopTabNavigator();

    let squares = [];
    let numberOfSquare = 2;

    for(let i=0; i<numberOfSquare; i++){
        squares.push(
            <View key={i}>
                <View 
                style={{
                    width:'99%',
                    height:150,
                    marginVertical:0.5,
                    backgroundColor:"#9CA3AF",
                    opacity:0.1,
                }}>

                </View>
            </View>,
        );
    }

    const Stats = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor:'#111827',
                }}>
                    <Text style={{color:'grey', fontSize:30}}>Stats</Text>
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "grey",
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',

                    }}>
                    {squares}
                </View>
            </ScrollView>
        )
    }
    const Information = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor:'#111827',
                }}>
                <Text style={{color:'grey', fontSize:30}}>Chat</Text>
                
            </ScrollView>
        )
    }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'grey',
                    height: 1.5
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === "Stats") {
                        iconName = focused ? "stats-chart-outline" : "stats-chart-outline";
                        colour = focused ? "black" : "gray";
                    } else if (route.name === "Information") {
                        iconName = focused ? "chatbubbles-outline" : "chatbubbles-outline";
                        colour = focused ? "black" : "gray";
                    }
                    return <Ionic name={iconName} color={colour} size={22} />
                }
            })}>

            <Tab.Screen name="Stats" component={Stats} />
            <Tab.Screen name="Information" component={Information} />

        </Tab.Navigator>
    );
};

export default BottomTabView;
