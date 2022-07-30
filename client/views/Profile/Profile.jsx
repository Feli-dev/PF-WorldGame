import {
    View,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, GetFriends } from "../../redux/actions/index";
import tw from "twrnc";
import BottomTabView from "./BottomTabView";
import { ProfileBody, ProfileButtons } from "./ProfileBody";


//<BottomTabView />

const Profile = () => {

    const dispatch = useDispatch();

    const userlogin = useSelector((state) => state.login);
    const userInfo = useSelector((state) => state.userdetail);
    const data = userInfo.Request;
    const stats = userInfo.Request.stats;
    const games = userInfo.Request.games;
    const userId = userlogin.Request?.id;

    
    const avatar = require(`../../assets/avatars/normal_user/avatar_default.png`);
    // const avatar = data.avatar
    //     ? data.premium
    //         ? require(`../../assets/avatars/premium_user/${data.avatar}`)
    //         : require('../../assets/avatars/normal_user/' + data.avatar)
    //     : require(`../../assets/avatars/normal_user/avatar_default.png`)

    useEffect(() => {//VER SI SEBA PUEDE HACER QUE ME TRAIGA UN GET FRIEND X ID
        dispatch(getUser(userId))
        dispatch(GetFriends())
    }, [dispatch, userId])

    //navigation.goBack(); AGREGAR BOTON PARA IR ATRAS O HOME

    return (
        <View style={{ width: '100%', height: '100%', marginTop: 25, backgroundColor: '#111827' }}>
            <View style={{ width: '100%', padding: 10 }}>

                <ProfileBody
                    userAvatar={avatar}
                    friends="100"
                    gamesWon={stats.wins}
                    games={games.length}
                    id={data.id}
                    name={data.name}
                    userName={data.username}
                    country={data.country}
                    email={data.email}
                    password={data.password}
                    premium={data.premium}

                />
                <ProfileButtons
                    id={data.id}
                    name={data.name}
                    userName={data.username}
                    userAvatar={avatar}
                    premium={data.premium}
                    country={data.country}
                    email={data.email}
                    password={data.password}
                />
            </View>

            <BottomTabView
                id={data.id}
                userName={data.username}
                premium={data.premium}
                averageScore={stats.averageScore}
                games={stats.games}
                losses={stats.losses}
                timePaying={stats.timePaying}
                wins={stats.wins}
                gamesArr={games}
            />

        </View>

    );
};

export default Profile;
