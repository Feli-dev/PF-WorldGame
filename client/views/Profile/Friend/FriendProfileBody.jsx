import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid, } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import tw from "twrnc"

import { PostFriend, deleteFriend, GetProfileUser} from "../../../redux/actions/index";
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

    
    // const touchDelete = () => {
    //     dispatch(deleteFriend({UserId,
    //         FriendId}))
        
    // }
    useEffect(() => {
        return () => dispatch(GetProfileUser(UserId))
    },[dispatch])
        

    return (
        <View>
            {userName ? (
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',


                }}>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                        paddingLeft: 5,
                        paddingRight: 5,


                    }}>
                        {userName.length > 10 ? userName.slice(0, 11).concat('...') : userName}
                    </Text>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>
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
                        <Text style={{ color: 'white', fontSize: 18, }}>{averageScore}</Text>

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
                }}>
                <View
                    style={{

                    }}>
                    <Image
                        source={{ uri: avatar }}
                        style={{

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

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{friends}</Text>
                        <Text style={{ color: 'white' }}>Friends</Text>
                    </View>

                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{games}</Text>
                        <Text style={{ color: 'white' }}>Games</Text>
                    </View>

                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{gamesWon}</Text>
                        <Text style={{ color: 'white' }}>Wins</Text>
                    </View>
                </View>

                {/* <TouchableOpacity
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
                    </TouchableOpacity> */}

            </View>

        </View>
    );
};

export const FriendProfileButtons = ({
    friendID,
    userID,
    followingUser,
    

}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    console.log('followingUser -->',followingUser)

    const [follow, setFollow] = useState( followingUser );
    
    const handledAddOrDeleteFriend =  (status, friendID, userID) => {
            status
                ? dispatch(deleteFriend(
                    {
                        UserId: userID,
                        FriendId: friendID
                    }))
                : dispatch(PostFriend(
                    {
                        UserId: userID,
                        FriendId: friendID
                    }
                ))
        status
            ? ToastAndroid.show('Deleted Friend Sucessfully!', ToastAndroid.SHORT)
            : ToastAndroid.show('Added Friend Sucessfully!', ToastAndroid.SHORT)

    }

    return (
        <View>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    onPress={() => {
                        handledAddOrDeleteFriend(follow, friendID, userID)
                        setFollow(!follow)
                    }}
                    style={{ width: '42%' }}>
                    <View
                        style={{
                            width: '100%',
                            height: 35,
                            borderRadius: 5,
                            backgroundColor: follow ? 'grey' : '#3493D9',
                            borderWidth: follow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: follow ? 'white' : '#111827',
                        }}>
                            {follow ? 'Following' : 'Follow'}
                        </Text>
                    </View>
                </TouchableOpacity>
               

            </View>



        </View>
    );

};