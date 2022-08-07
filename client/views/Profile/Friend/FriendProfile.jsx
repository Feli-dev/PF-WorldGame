import {
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getFriendDetail, ClearFriendDetail } from "../../../redux/actions/index";

import tw from "twrnc";

import { FriendProfileBody, FriendProfileButtons } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend";
import LoadingWorld from '../../../assets/LoadingWorld.gif';


//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const FriendProfile = (params) => {

    const dispatch = useDispatch();

    const { freId, userId } = params.route.params

    const [open, setOpen] = useState(false);

    const friendInfo = useSelector((state) => state.friendsDetail);



    //EN DATA ME GUARDO UN VALOR BOOLEANO, TRUE INDICA QUE ES AMIGO Y FALSE QUE NO.
    const data = friendInfo.hasOwnProperty('Request') && Object.keys(friendInfo?.Request).length > 0 && Object.keys(friendInfo.Request.stats).length > 0
        ? friendInfo.Request
        : false;

    const following = [];
    if (data && data.hasOwnProperty('friends')) {
        if (data.friends.length > 0) {
            data.friends.map((request) => {
                if (request.FriendId === userId && request.state === "Recibido") {//VER DE BUSCAR LOS ENVIADOS
                    following.push(true)
                }
            })
        }
    }



    // const following = data && data.hasOwnProperty('friends')
    //     ? data.friends.length > 0
    //         ? data.friends.map((request) => {
    //             if (request.FriendId === userId && request.state === "Recibido") {//VER DE BUSCAR LOS ENVIADOS
    //                 return true
    //             }

    //         })
    //         : false
    //     : false;






    //friendSended ES UN FILTRO DE TODO EL ARREGLO DE "FRIENDS" Y SOLO INDICA A LOS ENVIADOS. ESTOS SERIAN LOS AMIGOS DEL PROFILEFRIEND. 
    
    const friendSended = data && data.hasOwnProperty('friends')
        ? data.friends.length > 0
            ? data.friends.filter((friend) => friend.state === "Enviado")
            : false
        : false;



    useEffect(() => {
        dispatch(getFriendDetail(freId))
        setTimeout(()=>setOpen(true), 800)

    }, [dispatch, freId])

    useEffect(() => {
        return () => {
            dispatch(ClearFriendDetail())
        } 
    }, [dispatch])


    //navigation.goBack(); AGREGAR BOTON PARA IR ATRAS O HOME

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                {data && open ?
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
                                UserId={userId}
                                FriendId={freId}
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
                    <View style={{
                        backgroundColor: '#050F1A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                    }}>
                        
                        <Image
                            style={{
                                width: '70%',
                                height: '70%',
                            }}
                            source={LoadingWorld}
                        />
                    </View>

                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default FriendProfile;
