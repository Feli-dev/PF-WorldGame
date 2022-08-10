import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons'
import { backSound } from '../../utils/sounds';
import tw from "twrnc";
import io from "socket.io-client";
import { useNavigation } from '@react-navigation/native';
import World from '../../assets/World.png';
import * as Animatable from 'react-native-animatable';
import { useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";

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
    friends,
}) => {
    const isSpanish = useSelector((state) => state.isSpanish);
    const soundOn = useSelector((state) => state.soundOn);
    // const dispatch = useDispatch();
    const allcountries = useSelector((state) => state.countries);
    const countriesAux = [];
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();

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

    const uploadFriend = [];
    // FriendId: friends[i].FriendId,
    // name: friends[i].name,
    // connect: friends[i].connect,
    // country: friends[i].country,
    // UserId: friends[i].UserId,
    for (let i = 0; i < friends.length; i++) {
        allcountries?.map((pais) => {
            if (friends[i].country == pais.name) {
                uploadFriend.push({
                    id:friends[i].id,
                    username: friends[i].username,
                    FriendId: friends[i].FriendId,
                    avatar: friends[i].avatar,
                    flagSvg: pais.flagSvg,
                    country: friends[i].country,
                })

            }
        })
    }

    const Games = () => {
        const translateRegion = (reg) => {
            switch (reg) {
                case "Africa":
                    if (isSpanish) return "África"
                    else return "Africa"
                case "North America":
                    if (isSpanish) return "América del Norte"
                    else return "North America"
                case "South America":
                    if (isSpanish) return "América del Sur"
                    else return "South America"
                case "Asia":
                    if (isSpanish) return "Ásia"
                    else return "Asia"
                case "Oceania":
                    if (isSpanish) return "Oceanía"
                    else return "Oceania"
                case "Europe":
                    if (isSpanish) return "Europa"
                    else return "Europe"
                case "Antarctica":
                    if (isSpanish) return "Antártida"
                    else return "Antarctica"
                    break;
            }
        }
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#005f73", }}
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
                                    <View style={{ height: 200, backgroundColor: perGame.winned ? '#18642C' : "#c94242", marginBottom: 10, borderRadius: 12, }}>
                                        <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', margin: 15, }}>
                                            {/* VER COMO ACOMODAR LAS BANDERAS PARA QUE QUEDEN TODOS EN LA MISMA LINEA */}
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                {/* style={tw`h-7 w-9.33 rounded-sm`} */}
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
                                                    {perGame.population > 1000000 ? (perGame.population / 1000000).toFixed(2).concat('M') : perGame.population}
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 16, }}>
                                                    Area
                                                </Text>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 15, }}>
                                                    {perGame.area > 100000 ? (perGame.area / 100000).toFixed(2).concat('m') : perGame.area}
                                                    {'km²'}
                                                </Text>
                                            </View>

                                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, textAlign: "center" }}>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 16, }}>
                                                    {isSpanish ? "Continente" : "Continent"}
                                                </Text>
                                                <Text style={{ color: 'white', paddingVertical: 5, fontWeight: 'bold', fontSize: 15, textAlign: "center" }}>
                                                    {perGame.continent.length > 13 ? translateRegion(perGame.continent).slice(0, 12).concat('...') : translateRegion(perGame.continent)}
                                                </Text>
                                            </View>



                                            {/* <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Ionic name="earth" style={{ fontSize: 25, color: 'white', display: 'flex', marginRight: 0, }}
                                                // VER DE AGREGAR UN LINK PARA GOOGLE MAPS                                               
                                                />
                                            </View> */}

                                        </View>
                                    </View>
                                </View>
                            )
                        })
                        :
                        <View style={{
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
                                {isSpanish ? "Aún no has jugado ningúna partida." : " You have not yet played any games."}
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
    const Chat = () => {
        const [chatMessage, setChatMessage] = useState("");
        const [Messages, setMessages] = useState([]);
        const scrollViewRef = useRef();
        const socket = io("https://chat-wg.herokuapp.com");

        useEffect(() => {
            if (userName.length) socket.emit("conectado", userName);
        }, []);

        useEffect(() => {
            socket.on("mensajes", (mensaje) => {
                setMessages([...Messages, mensaje]);
            });
            return () => {
                socket.off();
            };
        }, [Messages]);

        function onSubmitChatMessage() {
            if (userName.length && chatMessage.trimStart().trimEnd().length) {
                socket.emit("mensaje", userName, chatMessage.trimStart().trimEnd());
                setChatMessage("");
            }
        }

        function view() {
            let obj = {}
            const send = Messages.length > 0 ? Messages.filter(e => obj[`${userName} ha entrado en la sala del chat`] && obj[`${userName} ha abandonado la sala`] ? false : obj[e.mensaje] = true) : [];
            return send;
        }

        return (
            <View
                style={tw`bg-[#005f73] h-full`}>
                <Text style={tw`text-gray-400 text-center text-2xl mt-3`}>Chat</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    ref={scrollViewRef}
                    onContentSizeChange={() =>
                        scrollViewRef.current.scrollToEnd({ animated: true })
                    }
                    style={tw`mb-5 mt-3 bg-gray-700 rounded-2xl`}
                >
                    {
                        view().length > 0 ? view()?.map((el, i) => {
                            return (el.nombre.toLowerCase() === userName.toLowerCase() ?
                                <View key={i} style={tw.style("ml-3 mt-3 flex items-end justify-center mb-2 bg-gray-100 rounded-lg pl-5 pr-5", { alignSelf: "flex-end" })}>
                                    <Text style={tw`text-base font-bold text-black`}>{`${el.nombre}: ${el.mensaje}`}</Text>
                                </View>
                                :
                                <View key={i} style={tw.style("ml-3 mt-3 flex items-start justify-center mb-2 bg-gray-100 rounded-lg pl-5 pr-5", { alignSelf: "flex-start" })}>
                                    <Text style={tw`text-base font-bold text-black`}>{`${el.nombre}: ${el.mensaje}`}</Text>
                                </View>
                            )
                        }) : <></>
                    }
                </ScrollView>
                <View style={tw`flex flex-row items-center justify-center mb-5`}>
                    <TextInput
                        placeholder={isSpanish ? "Ingrese mensaje..." : "Enter a message..."}
                        placeholderTextColor="#6f6f6f"
                        autoCapitalize="sentences"
                        style={tw`pl-3 w-75 mr-1 h-12 rounded-l-xl bg-white text-black text-lg`}
                        onChangeText={text => setChatMessage(text)}
                        multiline={true}
                        value={chatMessage}
                        textAlignVertical="center"
                    ></TextInput>
                    <TouchableOpacity
                        style={tw`flex items-center justify-center h-12 w-12 bg-white rounded-r-xl`}
                        onPress={() => { onSubmitChatMessage(); }}
                    >
                        <View style={tw`w-8 h-8`}>
                            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <Path
                                    fill="#9ebc63"
                                    d="M374.6 246.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.47 12.55 12.47 32.75-.03 45.25z"
                                />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const Friends = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw`bg-[#005f73]`}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 20,
                    }}
                >
                    <Text style={tw`text-gray-400 text-center flex text-2xl `}>{isSpanish ? "Amigos" : "Friends"}</Text>
                    <Ionic
                        onPress={() => navigation.navigate('SearchFriends', { id, navigation })}
                        name="search"
                        style={{
                            fontSize: 30,
                            color: 'white',
                        }}
                    />
                </View>


                <View style={{
                    //agregar boton busqueda
                }}>
                    {uploadFriend?.map((friend) => {
                        return (
                            <TouchableOpacity
                                key={friend.id}
                                onPress={() => navigation.navigate('FriendProfile', { freId: friend.FriendId, userId: id, userFriends: friends })}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        marginBottom: 15,
                                    }}

                                >
                                    <View
                                        style={{
                                            borderRadius: 20,
                                            backgroundColor: "#C0D6DF",
                                            padding: 15,
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Image
                                            style={{
                                                width: 50,
                                                height: 50,
                                            }}
                                            source={{ uri: friend.avatar }} />

                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 25,
                                                textAlign: 'center',
                                                paddingRight: 10,
                                            }}>
                                            {friend.username ? friend.username : 'Not friends :('}
                                        </Text>
                                        <Image
                                            style={{
                                                width: 60,
                                                height: 40,
                                                borderRadius:5,
                                            }}
                                            source={friend?.flagSvg?.length > 10 && !(friend?.country?.toLowerCase() === "afganistán") ? {
                                                uri: `${friend?.flagSvg?.replace("svg", "png").replace("//", "").replace("/", "/w2560/").replace("https:", "https://")
                                                    }`
                                            }
                                                :
                                                {
                                                    uri: `https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Taliban_%28Variant%29.png`
                                                }
                                            }
                                            
                                            />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
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
                    marginLeft: 20,
                    marginRight: 20,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === "Games") {
                        iconName = focused ? "stats-chart-sharp" : "stats-chart-outline";
                        colour = focused ? "#9ebc63" : "gray";
                    } else if (route.name === "Chat") {
                        iconName = focused ? "chatbubbles-sharp" : "chatbubbles-outline";
                        colour = focused ? "#9ebc63" : "gray";
                    } else if (route.name === "Friends") {
                        iconName = focused ? "people" : "people-outline";
                        colour = focused ? "#9ebc63" : "gray";
                    }
                    return <Ionic name={iconName} color={colour} size={22} />
                }
            })}>

            <Tab.Screen name="Games" component={Games} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Friends" component={Friends} />

        </Tab.Navigator>
    );
};

export default BottomTabView;
