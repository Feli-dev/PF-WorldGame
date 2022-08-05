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
import BottomTabView from "../BottomTabView";
import { FriendProfileBody, BottomTabViewFriend } from "./FriendProfileBody";

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const FriendProfile = () => {

    const dispatch = useDispatch();
 
    const userlogin = useSelector((state) => state.login);
    const userInfo = useSelector((state) => state.userdetail);

    const data = Object.keys(userInfo.Request).length > 0 ? userInfo.Request : false;//CAMBIAR PROP REQUEST

    const userId = Object.keys(userlogin.Request).length > 0 ? userlogin.Request.id : 0;


    useEffect(() => {//VER SI SEBA PUEDE HACER QUE ME TRAIGA UN GET FRIEND X ID
        dispatch(getUser(userId))
    }, [dispatch, userId])

    //navigation.goBack(); AGREGAR BOTON PARA IR ATRAS O HOME

    return (//userInfo
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                {
                    data && Object.keys(userlogin.Request).length > 0 && data.hasOwnProperty('stats') && Object.keys(data?.stats).length > 0 ?

                        <View style={tw`h-full bg-gray-900 flex justify-center items-center`}>
                            <View style={tw`mt-10 p-5`}>

                                <FriendProfileBody
                                    avatar={data.avatar}
                                    friends={data.friends.length}
                                    gamesWon={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.wins : 0}
                                    games={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.games : 0}
                                    id={data !== false ? data.id : 0}
                                    name={data !== false ? data.name : ""}
                                    userName={data !== false ? data.username : ""}
                                    country={data !== false ? data.country : ""}
                                    email={data !== false ? data.email : ""}
                                    password={data !== false ? data.password : ""}
                                    premium={data !== false ? data.premium : false}
                                    averageScore={data !== false ? data?.stats.averageScore : 0}
                                />
                            </View>

                            <BottomTabViewFriend
                                id={data !== false ? data.id : 0}
                                userName={data !== false ? data.username : ""}
                                premium={data !== false ? data.premium : false}
                                averageScore={data !== false ? data?.stats.averageScore : 0}
                                games={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.games : 0}
                                losses={data !== false ? data?.stats.losses : 0}
                                timePaying={data !== false ? data?.stats.timePaying : 0}
                                wins={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.wins : 0}
                                gamesArr={data !== false ? data.games : false}
                                
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
