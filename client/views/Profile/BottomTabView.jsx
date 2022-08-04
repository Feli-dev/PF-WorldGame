import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons'
import { backSound } from '../../utils/sounds';
import tw from "twrnc";


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

    const soundOn = useSelector((state) => state.soundOn);
    const Tab = createMaterialTopTabNavigator();

    let squares = [];
    let numberOfSquare = 2;

    for (let i = 0; i < numberOfSquare; i++) {//ACA MAPEARIA gamesArr CALCULO QUE TRAE UN ARREGLO CON TODA LA INFO DE LOS GAMES, ME TRAERIA LOS ULTIMOS 10 O 5 Y LOAS RENDERIZARIA EN UNA CARD CON COUNTRY/INTENTOS/PUNTOS/FECHA
        squares.push(
            <View key={i}>
                <View
                    style={tw``}>
                </View>
            </View>,
        );
    }

    const Stats = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}

                style={tw`bg-gray-900`}>
                <Text style={tw`text-gray-400 text-left text-2xl pl-3 pt-3`}>Stats</Text>
                <View
                    style={tw`w-9/10 h-10/10 bg-gray-900 flex-row flex pt-3 pb-3 justify-between`}>
                    {squares}
                </View>
            </ScrollView>
        )
    }
    const Chat = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw`bg-gray-900`}>
                <Text style={tw`text-gray-400 text-center text-2xl pl-3 pt-3`}>Chat</Text>

            </ScrollView>
        )
    }
    const TopGames = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw`bg-gray-900`}>
                <Text style={tw`text-gray-400 text-right text-2xl pl-3 pt-3`}>Top Games</Text>

            </ScrollView>
        )
    }
    return (
        <Tab.Navigator
                style={tw`rounded-lg w-9/10`}
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                    },
                    tabBarShowLabel: false,
                    tabBarIndicatorStyle: {
                        backgroundColor: 'grey',
                        height: 2,
                        width: 80,
                        marginLeft:20,
                        marginRight:20,
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
