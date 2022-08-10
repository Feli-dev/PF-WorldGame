import {
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Video } from 'expo-av'
import { useDispatch, useSelector } from "react-redux";
import { getFriendDetail, ClearFriendDetail, searchFriend } from "../../../redux/actions/index";
import tw from "twrnc";
import { FriendProfileBody, FriendProfileButtons } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend";

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const FriendProfile = (params) => {
    const dispatch = useDispatch();
    const { freId, userId, userFriends } = params.route.params
    const [open, setOpen] = useState(false);
    const friendInfo = useSelector((state) => state.friendsDetail);
    const video = React.useRef(null);
    //EN DATA ME GUARDO UN VALOR BOOLEANO, TRUE INDICA QUE ES AMIGO Y FALSE QUE NO.
    const data = friendInfo.hasOwnProperty('Request') && Object.keys(friendInfo?.Request).length > 0 && Object.keys(friendInfo.Request.stats).length > 0
        ? friendInfo.Request
        : false;

    const following = [];//TENGO QUE USAR EL ARREGLO DE AMIGOS DE USUARIO
    if (userFriends?.length > 0) {
        userFriends?.map((request) => {
            if (request.FriendId === freId) {//VER DE BUSCAR LOS ENVIADOS
                following.push(true)
            }
        })
        if (!following[0]) {
            following.push(false)
        }
    }
    //friendSended ES UN FILTRO DE TODO EL ARREGLO DE "FRIENDS" Y SOLO INDICA A LOS ENVIADOS. ESTOS SERIAN LOS AMIGOS DEL PROFILEFRIEND. 
    useEffect(() => {
        dispatch(getFriendDetail(freId))
        // dispatch(searchFriend(' '))
        setTimeout(() => setOpen(true), 800)

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
                    <View style={tw`h-full bg-[#005f73] flex justify-center items-center`}>
                        <View style={tw`mt-10 p-5`}>
                            <FriendProfileBody
                                avatar={data.avatar}
                                friends={data ? data.friends.length : 0}
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
                        backgroundColor: '#005f73',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                    }}>
                        <Video
                            ref={video}
                            style={tw`flex items-center justify-center w-full h-full`}
                            // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            source={require("../../../assets/LoadingWorld.mp4")}
                            useNativeControls={false}
                            resizeMode="contain"
                            shouldPlay
                            isLooping={true}
                            isMuted={true}
                            onLoadStart={()=>{}}
                        />
                    </View>
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default FriendProfile;
