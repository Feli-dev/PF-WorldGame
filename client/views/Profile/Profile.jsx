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
    //const userlogin = useSelector((state) => state.login);
    //const userInfo = useSelector((state) => state.userdetail);
    // const userId = userlogin.Request.id;

    // useEffect(() => {
    //   dispatch(getUser(userId))
    // }, [dispatch, userId])
    const password = 'clave123';
    const userName = 'rafacar93';


    return (
        <View style={{ width: '100%', height: '100%', marginTop: 25, backgroundColor: '#111827' }}>
            <View style={{ width: '100%', padding: 10 }}>

                <ProfileBody
                    profileImage={require('../../assets/Worldgame.png')}
                    friends="100"
                    following='8'
                    games="458"
                    id={2}
                    name="Rafa Carreno"
                    userName={userName}
                    country='Argentina'
                    email='rafacarreno93@gmail.com'
                    password={password}
                    premium={false}

                />
                <ProfileButtons
                    id={2}
                    name="Rafa Carreno"
                    userName="rafacar93"
                    profileImage={require('../../assets/Worldgame.png')}
                    premium={false}
                    country='Argentina'
                    email='rafacarreno93@gmail.com'
                    password='clave123'
                />
            </View>

            <BottomTabView />

        </View>
        //40:47

    );
};

export default Profile;
