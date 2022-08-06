import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import tw from "twrnc"
import { PostFriend, deleteFriend, } from "../../../redux/actions/index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";

export const FriendProfileBody = ({
    name,
    userName,
    avatar,
    games,
    friends,
    gamesWon,
    id,
    country,
    email,
    password,
    premium,
    averageScore,
    UserId,
    FriendId,

}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    
    const touchDelete = () => {
        dispatch(deleteFriend({UserId,
            FriendId}))
        
    }
    useEffect(() => {
        console.log('will')
        return () => dispatch(getUser(UserId))
    },[dispatch])
        
    return (
        <View>
            {userName ? (
                <View style={tw`flex flex-row items-center justify-between`}>
                    <View style={tw`flex flex-row items-center`}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'white',
                            paddingLeft: 5,

                        }}>
                            {userName.length > 10 ? userName.slice(0, 11).concat('...') : userName}
                        </Text>
                        <Ionic
                            name="chevron-down"
                            style={{
                                fontSize: 20,
                                color: 'white',
                                paddingHorizontal: 5,
                                opacity: 0.5,
                            }}
                            onPress={() => navigation.navigate('Configuration')}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 23, }}>
                        <Ionic
                            name="trophy"
                            style={{
                                fontSize: 25,
                                color: 'yellow',
                                fontWeight: 'bold',
                                paddingRight: 5,

                            }}
                            onPress={() => navigation.navigate('Ranking')}
                        />
                        <Text style={{ color: 'white', fontSize: 18, paddingRight: 20, }}>{averageScore}</Text>

                        {premium
                            ? <Animatable.View
                                animation="pulse" easing="ease-out" iterationCount="infinite"
                            >
                                <Ionic
                                    name="star"
                                    style={{
                                        fontSize: 25,
                                        color: 'yellow',
                                        paddingHorizontal: 10,
                                    }}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                </View>
            ) : null}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 20,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Image
                        source={{ uri: avatar }}
                        style={{
                            resizeMode: 'cover',
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                        }} />
                    <Text
                        style={{
                            paddingVertical: 5,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>

                        {name.length > 10 ? name.slice(0, 11).concat('...') : name}

                    </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{friends}</Text>
                    <Text style={{ color: 'white' }}>Friends</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{games}</Text>
                    <Text style={{ color: 'white' }}>Games</Text>
                </View>

                <View style={{ alignItems: 'center', marginRight: 35 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{gamesWon}</Text>
                    <Text style={{ color: 'white' }}>Wins</Text>
                </View>
                <TouchableOpacity
                        onPress={() => touchDelete()
                            }
                        style={tw`w-9/10`}>
                        <View
                            style={tw`h-8 rounded-lg items-center justify-center border-white border-2`}>
                            <Text
                                style={tw`text-base text-white font-bold`}>
                                Dejar de seguir
                            </Text>
                        </View>
                    </TouchableOpacity>


                {/* <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{gamesWon}</Text>gamesWon            <Text>
gamesWon</Text>
                </View> */}

            </View>

        </View>
    );
};

export const ProfileButtons = ({
    id,
    name,
    userName,
    userAvatar,
    premium,
    country,
    email,
    password,
    countries,
}) => {
    const navigation = useNavigation();
    const [follow, setFollow] = useState(follow);
    return (
        <View>
            {id === 1 ? (//ACA COMPARAR EL ID O USERNAME DEL PERFIL CON TU LISTA DE AMIGOS DEL USER LOGIN
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{ width: '42%' }}>
                        <View
                            style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                backgroundColor: follow ? null : '#3493D9',
                                borderWidth: follow ? 1 : 0,
                                borderColor: '#DEDEDE',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ color: follow ? 'white' : '#111827' }}>
                                {follow ? 'Following' : 'Follow'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            // ACA ME QUEDE MIN 08:06
                        }}>

                    </View>

                </View>)
                : (null)

            }
        </View>
    );

};