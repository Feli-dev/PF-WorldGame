import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons'



const BottomTabView = ({
    id,
    userName,
    premium,
    averageScore,
    games,
    losses,
    timePaying,
    wins,
    gamesArr,
}) => {

    const Tab = createMaterialTopTabNavigator();

    let squares = [];
    let numberOfSquare = 2;

    for (let i = 0; i < numberOfSquare; i++) {//ACA MAPEARIA gamesArr CALCULO QUE TRAE UN ARREGLO CON TODA LA INFO DE LOS GAMES, ME TRAERIA LOS ULTIMOS 10 O 5 Y LOAS RENDERIZARIA EN UNA CARD CON COUNTRY/INTENTOS/PUNTOS/FECHA
        squares.push(
            <View key={i}>
                <View
                    style={{
                        width: '99%',
                        height: 150,
                        marginVertical: 0.5,
                        backgroundColor: "#9CA3AF",
                        opacity: 0.1,
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
                    backgroundColor: '#111827',
                }}>
                <Text style={{ color: 'grey', fontSize: 30 }}>Stats</Text>
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
    const Chat = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#111827',
                }}>
                <Text style={{ color: 'grey', fontSize: 30 }}>Chat</Text>

            </ScrollView>
        )
    }
    const TopGames = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#111827',
                }}>
                <Text style={{ color: 'grey', fontSize: 30 }}>TopGames</Text>

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
                        iconName = focused ? "stats-chart-sharp" : "stats-chart-outline";
                        colour = focused ? "black" : "gray";
                    } else if (route.name === "Chat") {
                        iconName = focused ? "chatbubbles-sharp" : "chatbubbles-outline";
                        colour = focused ? "black" : "gray";
                    } else if (route.name === "TopGames") {
                        iconName = focused ? "trophy-sharp" : "trophy-outline";
                        colour = focused ? "black" : "gray";
                    }
                    return <Ionic name={iconName} color={colour} size={22} />
                }
            })}>

            <Tab.Screen name="Stats" component={Stats} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="TopGames" component={TopGames} />

        </Tab.Navigator>
    );
};

export default BottomTabView;
