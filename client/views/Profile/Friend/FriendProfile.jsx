import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../../redux/actions/index";

import tw from "twrnc";

import { FriendProfileBody } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend"

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const FriendProfile = (params) => {

    const dispatch = useDispatch();

    const { freId } = params.route.params

    const userInfo = useSelector((state) => state.userdetail);

    const data = Object.keys(userInfo.Request).length > 0 && Object.keys(userInfo.Request.stats).length > 0 ? userInfo.Request : false;

    useEffect(() => {
        dispatch(getUser(freId))
    }, [dispatch])


    console.log('data---->', data)
    //navigation.goBack(); AGREGAR BOTON PARA IR ATRAS O HOME

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                {data ?
                    <View style={tw`h-full bg-gray-900 flex justify-center items-center`}>
                        <View style={tw`mt-10 p-5`}>

                            <FriendProfileBody
                                avatar={data.avatar}
                                friends={data.friends.length}
                                gamesWon={data.stats.wins}
                                games={data.stats.games}
                                id={data.id}
                                name={data.name}
                                userName={data.username}
                                country={data.country}
                                email={data.email}
                                password={data.password}
                                premium={data.premium}
                                averageScore={data?.stats.averageScore}
                            />
                        </View>

                        <BottomTabViewFriend                            
                            games={data.stats.games}                            
                            gamesArr={data.games}

                        />

                    </View>
                    :
                    <View>
                        <Text>Wait...</Text>
                    </View>

                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default FriendProfile;
