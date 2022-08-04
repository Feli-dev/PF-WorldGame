import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons'
import tw from "twrnc";
import io from "socket.io-client";

import { useSelector } from "react-redux";

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

    // const dispatch = useDispatch();
    const allcountries = useSelector((state) => state.countries);
    const countriesAux = [];
    const Tab = createMaterialTopTabNavigator();
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

    const Games = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#111827',}}
            // style={tw`bg-gray-900`}
            >
                <Text></Text>

                {/* AGREGAR UN LOADING EN LO QUE SE CARGAN LAS CARDS  */}
                
                {/* <Text style={tw`text-gray-400 text-left text-2xl pl-3 pt-3`}>Games</Text> */}
                
                <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                    {countriesAux.length > 0
                        ? countriesAux.map((perGame) => {
                            return (
                                <View key={perGame.id} style={{ width: '100%' }} >
                                    <View style={{ height: 200, backgroundColor: perGame.winned ? '#18642C' : '#9D174D', marginBottom: 10, borderRadius: 8, }}>
                                        <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', margin: 15, }}>
                                            {/* VER COMO ACOMODAR LAS BANDERAS PARA QUE QUEDEN TODOS EN LA MISMA LINEA */}
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                {/* style={tw`h-7 w-9.33 rounded-sm`} */}
                                                <Image style={{
                                                    width: 60, height: 40, borderRadius: 4, justifyContent: 'center', alignItems: 'center',
                                                    
                                                }}
                                                    source={{ uri: `${perGame.flagSvg?.replace("svg", "png").replace("//", "").replace("/", "/w2560/").replace("https:", "https://")}` }}
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
                                                    <Ionic name="skull" style={{ fontSize: 25, color: 'white', display: 'flex', marginRight: 0, }} />
                                                }
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', display: 'flex', width: '100%', paddingRight: 30, paddingLeft: 30, }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 16, }}>
                                                    Population
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
                                                    Continent
                                                </Text>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 15, }}>
                                                    {perGame.continent.length > 13 ? perGame.continent.slice(0, 12).concat('...') : perGame.continent}
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
                        : <View style={{alignContent:'center', justifyContent:'center'}}>
                            <Text>asd</Text>
                        </View>
                    }
                </View>
            </ScrollView>
        )
    }
    const Chat = () => {
        const [chatMessage, setChatMessage] = useState("");
        const [Messages, setMessages] = useState([]);
        const scrollViewRef = useRef();
        const socket = io("http://192.168.1.4:5000");

        useEffect(() => {
            if(userName.length)socket.emit("conectado", userName);
        }, []);

        useEffect(() => {
            socket.on("mensajes", (mensaje) => {
                setMessages([...Messages, mensaje]);
            });
            return () => {
                socket.off();
            };
        },[Messages]);

        function onSubmitChatMessage() {
            if(userName.length){
                socket.emit("mensaje", userName, chatMessage);
                setChatMessage("");
            }
        }

        return (
            <View
                style={tw`bg-gray-900 h-full`}>
                <Text style={tw`text-gray-400 text-center text-2xl mt-3`}>Chat</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    ref={scrollViewRef}
                    onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({ animated: true })
                    }
                    style={tw`mb-5 mt-3 bg-gray-800 rounded-lg`}
                >
                    {Messages.length > 0 ? Messages?.map((el,i) => {
                        return (
                            <View key={i} style={tw.style("ml-3 mt-3 flex items-start justify-center mb-2 bg-gray-100 rounded-lg pl-5 pr-5",{alignSelf: "flex-start" })}>
                                <Text style={tw`text-base font-bold text-black`}>{`${el.nombre}: ${el.mensaje}`}</Text>
                            </View>
                        )
                    }) : <></>}
                </ScrollView>
                <View style={tw`flex flex-row items-center justify-center mb-5`}>
                    <TextInput
                        placeholder="Enter a country..."
                        placeholderTextColor="#6f6f6f"
                        autoCapitalize="sentences"
                        style={tw`pl-3 w-75 mr-1 h-12 rounded-lg bg-white text-black text-lg`}
                        onChangeText={text => setChatMessage(text)}
                        multiline={true}
                        value={chatMessage}
                        textAlignVertical="center"
                    ></TextInput>
                    <TouchableOpacity 
                        style={tw`flex items-center justify-center h-12 w-12 bg-white rounded-lg`}
                        onPress={() => {onSubmitChatMessage();}} //onSubmitChatMessage(chatMessage);
                    >
                        <Text style={tw`text-center`}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
     // const TopGames = () => {
    //     return (
    //         <ScrollView
    //             showsVerticalScrollIndicator={false}
    //             style={tw`bg-gray-900`}>
    //             <Text style={tw`text-gray-400 text-right text-2xl pl-3 pt-3`}>Top Games</Text>

    //         </ScrollView>
    //     )
    // }
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
                    marginLeft: 20,
                    marginRight: 20,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === "Games") {
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

            <Tab.Screen name="Games" component={Games} />
            <Tab.Screen name="Chat" component={Chat} />
            {/* <Tab.Screen name="TopGames" component={TopGames} /> */}

        </Tab.Navigator>
    );
};

export default BottomTabView;
