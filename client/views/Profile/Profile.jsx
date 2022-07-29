import {
    View,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/index";
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
    const asd = 'avatar_demo.png'

    const avatar = data.avatar
        ? data.premium
            ? require('../../assets/avatars/premium_user/avatar_batman.png')
            : require(`../../assets/avatars/normal_user/${asd}`)
        : require(`../../assets/avatars/normal_user/avatar_default.png`)

    useEffect(() => {
        dispatch(getUser(userId))
    }, [dispatch, userId,data.premium,avatar])

  

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

            <BottomTabView />

        </View>

    );
};

export default Profile;
