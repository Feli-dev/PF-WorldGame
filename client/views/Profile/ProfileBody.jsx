import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

export const ProfileBody = ({
    name,
    userName,
    userAvatar,
    games,
    friends,
    gamesWon,
    id,
    country,
    email,
    password,

}) => {
    const navigation = useNavigation();
    return (
        <View>
            {userName ? (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                            {userName}
                        </Text>
                        {/* <Feather name="chevron-down" style={{
                            fontSize: 20,
                            color: 'black',
                            paddingHorizontal: 5,
                            opacity: 0.5,
                        }} /> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionic
                            onPress={() => navigation.navigate('Payment', {
                                id: id,
                                name: name,
                                country: country,
                                email: email,
                                userName: userName,
                                password: password,
                            })}
                            name="card-outline"
                            style={{
                                fontSize: 25,
                                color: 'white',
                                paddingHorizontal: 15,
                                marginTop: 10,
                                marginRight: 20,
                            }}
                        />
                        {/* <Feather
                            name="menu"
                            style={{
                                fontSize: 25,
                            }}
                        /> */}
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
                        source={userAvatar}
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

                        {name}

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
    password }) => {
    const navigation = useNavigation();
    const [follow, setFollow] = useState(follow);
    return (
        <View>
            {id === 2 ? (
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5,
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.push('EditProfile', {
                                id: id,
                                name: name,
                                userAvatar: userAvatar,
                                premium: premium,
                                country: country,
                                email: email,
                                password: password,
                                userName: userName,
                            })}
                        style={{
                            width: '100%',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                borderColor: '#DEDEDE',
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    letterSpacing: 1,
                                    opacity: 0.8,
                                    color: 'white',
                                }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
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
                            <Text style={{ color: follow ? 'black' : '#111827' }}>
                                {follow ? 'gamesWon' : 'Follow'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            // ACA ME QUEDE MIN 08:06
                        }}>

                    </View>

                </View>
            )}
        </View>
    );

};