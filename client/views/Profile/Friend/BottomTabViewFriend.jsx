import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons'
import tw from "twrnc";
import World from '../../../assets/World.png';
import * as Animatable from 'react-native-animatable';
import { useSelector } from "react-redux";

const BottomTabViewFriend = ({ games, gamesArr }) => {
    const Tab = createMaterialTopTabNavigator();
    const isSpanish= useSelector((state) => state.isSpanish);

    const Games = () => {
        const allcountries = useSelector((state) => state.countries);
        const countriesAux = [];
        for (let i = 0; i < games; i++) {
            allcountries?.map((country) => {
                if (gamesArr[i].countrie === country.name) {
                    countriesAux.push({
                        id: gamesArr[i].id,
                        countrie: gamesArr[i].countrie,
                        winned: gamesArr[i].winned,
                        time: gamesArr[i].time,
                        attempts: gamesArr[i].attempts,
                        points: gamesArr[i].points,
                        continent: country.continent,
                        population: country.population,
                        googleMap: country.googleMap,
                        area: country.area,
                        flagSvg: country.flagSvg,
                    })
                }
            })
        }

        const translateRegion = (reg)=>{
            switch (reg) {
              case "Africa":
                if(isSpanish) return "África"
                else return "Africa"
              case "North America":
                if(isSpanish) return "América del Norte"
                else return "North America"
              case "South America":
                if(isSpanish) return "América del Sur"
                else return "South America"
              case "Asia":
                if(isSpanish) return "Ásia"
                else return "Asia"
              case "Oceania":
                if(isSpanish) return "Oceanía"
                else return "Oceania"
              case "Europe":
                if(isSpanish) return "Europa"
                else return "Europe"
              case "Antarctica":
                if(isSpanish) return "Antártida"
                else return "Antarctica"
              break;
            }
          }
    
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#005f73" }}
            // style={tw`bg-gray-900`}
            >
                {/* AGREGAR UN LOADING EN LO QUE SE CARGAN LAS CARDS  */}
                <Text style={tw`text-gray-300 text-left text-2xl pl-3 pt-3 text-center`}>{isSpanish ? 'Partidas' : "Games"} </Text>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    {countriesAux.length > 0
                        ? countriesAux.map((perGame) => {
                            return (
                                <View key={perGame.id} style={{ width: '100%' }} >
                                    <View style={{ height: 200, backgroundColor: perGame.winned ? '#18642C' : "#c94242", marginBottom: 10, borderRadius: 8, }}>
                                        <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', margin: 15, }}>
                                            {/* VER COMO ACOMODAR LAS BANDERAS PARA QUE QUEDEN TODOS EN LA MISMA LINEA */}
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                {/* style={tw`h-7 w-9.33 rounded-sm`} */}
                                                {/* <Image style={{
                                                    width: 60, height: 40, borderRadius: 4, justifyContent: 'center', alignItems: 'center',

                                                }}
                                                    source={{ uri: `${perGame.flagSvg?.replace("svg", "png").replace("//", "").replace("/", "/w2560/").replace("https:", "https://")}` }}
                                                /> */}
                                                 <Image style={tw.style('shadow-2xl', {
                                                    width: 60, height: 40, borderRadius: 4, justifyContent: 'center', alignItems: 'center',

                                                })}
                                                    source={perGame?.flagSvg?.length > 10 && !(perGame?.countrie?.toLowerCase() === "afganistán") ? {
                                                        uri: `${perGame?.flagSvg?.replace("svg", "png").replace("//", "").replace("/", "/w2560/").replace("https:", "https://")
                                                            }`
                                                    }
                                                        :
                                                        {
                                                            uri: `https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Taliban_%28Variant%29.png`
                                                        }
                                                    }
                                                />
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 13, }}>
                                                    {perGame.countrie.length > 13 ? perGame.countrie.slice(0, 12).concat('...') : perGame.countrie}
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                {perGame.points ?
                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Ionic
                                                            name="medal" style={{ fontSize: 25, color: '#FFC300', display: 'flex', marginRight: 0, }}
                                                        />
                                                        <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 13, }}>
                                                            {perGame.points}
                                                        </Text>
                                                    </View>
                                                    :
                                                    <Ionic name="flag" style={{ fontSize: 25, color: 'white', display: 'flex', marginRight: 0, }} />
                                                }
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', display: 'flex', width: '100%', paddingRight: 30, paddingLeft: 30, }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 16, }}>
                                                    {isSpanish ? "Población" : "Population"}
                                                </Text>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 15, }}>
                                                    {perGame.population > 1000000 ? (perGame.population / 1000000).toFixed(2).concat(' M') : perGame.population}
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 16, }}>
                                                    Area
                                                </Text>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 15, }}>
                                                    {perGame.area > 100000 ? (perGame.area / 100000).toFixed(2).concat(' m ') : perGame.area}
                                                    {' km²'}
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 16, }}>
                                                    {isSpanish?"Continente":"Continent"}
                                                </Text>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 15, }}>
                                                    {perGame.continent.length > 13 ? translateRegion(perGame.continent).slice(0, 12).concat('...') : translateRegion(perGame.continent)}
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Ionic name="earth" style={{ fontSize: 25, color: 'white', display: 'flex', marginRight: 0, }}
                                                // VER DE AGREGAR UN LINK PARA GOOGLE MAPS                                               
                                                />
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            )
                        })
                        : <View style={{
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center',

                        }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: 20,
                                    padding: 25,
                                }}
                            >
                            {isSpanish? "El jugador aún no ha jugado ningúna partida." : "The player has not yet played any game."}
                            </Text>
                            <Animatable.View
                                animation="fadeInLeftBig" iterationCount={1} duration={3000} 
                                style={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginTop: 30,
                                }}
                            >
                                <Image
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    source={World}
                                />
                            </Animatable.View>
                        </View>
                    }
                </View>
            </ScrollView>
        )
    }

    return (
        <Tab.Navigator
            style={tw`rounded-lg w-9/10 `}
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
                    width: '90%',
                    borderRadius: 10,
                    marginLeft: 20,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === "Games") {
                        iconName = focused ? "stats-chart-sharp" : "stats-chart-outline";
                        colour = focused ? "black" : "gray";
                    }
                    return <Ionic name={iconName} color={colour} size={22} />
                }
            })}>
            <Tab.Screen name="Games" component={Games} />
        </Tab.Navigator>
    );
};

export default BottomTabViewFriend;
