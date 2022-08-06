import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendDetail } from "../../../redux/actions/index";
import tw from "twrnc";
import { FriendProfileBody, FriendProfileButtons } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend";

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const FriendProfile = (params) => {
    const dispatch = useDispatch();
    const { freId, userId } = params.route.params
    const friendInfo = useSelector((state) => state.friendsDetail);

    const data = friendInfo.hasOwnProperty('Request') && Object.keys(friendInfo?.Request).length > 0 && Object.keys(friendInfo.Request.stats).length > 0 ? friendInfo.Request : false;
    const following = data && data.hasOwnProperty('friends')
        ? data.friends.length > 0
            ? data.friends.map((request) => {
                if (request.FriendId === userId && request.state === "Recibido") {
                    return true
                }

            })
            : false
        : false;

    const friendSended = data && data.hasOwnProperty('friends')
        ? data.friends.length > 0
            ? data.friends.map((friend) => friend.state === "Enviado")
            : false
        : false;

    // "friends": [
    //     {
    //         "username": "rafa93",
    //         "id": 1,
    //         "FriendId": 3,
    //         "name": "",
    //         "state": "Enviado",
    //         "connect": false,
    //         "avatar": "",
    //         "UserId": 4
    //     }
    // ],

    useEffect(() => {
        dispatch(getFriendDetail(freId))
    }, [dispatch, freId])


    //navigation.goBack(); AGREGAR BOTON PARA IR ATRAS O HOME

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                {data ?
                    <View style={tw`h-full bg-gray-900 flex justify-center items-center`}>
                        <View style={tw`mt-10 p-5`}>

                            <FriendProfileBody
                                avatar={data.avatar}
                                friends={friendSended ? friendSended.length : 0}
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

                        <FriendProfileButtons
                            friendID={freId}
                            userID={userId}
                            followingUser={following[0] ? true : false}


                        />

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
