import {
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Video } from 'expo-av'
import { GetProfileUser } from "../../redux/actions/index";
import tw from "twrnc";
import BottomTabView from "./BottomTabView";
import { ProfileBody, ProfileButtons } from "./ProfileBody";
import { countries } from "../../utils/countries";

const Profile = () => {
    const dispatch = useDispatch();
    const userlogin = useSelector((state) => state.login);
    const userInfo = useSelector((state) => state.profileUser);
    const video = React.useRef(null);
    const [open, setOpen] = useState(false);
    const data =
        typeof (userInfo) !== 'string'
            && userInfo?.hasOwnProperty('username')
            ? userInfo
            : false;

    const userId =
        Object.keys(userlogin?.Request).length > 0
            ? userlogin.Request.id : 0;

    useEffect(() => {
        dispatch(GetProfileUser(userId));
        setTimeout(() => setOpen(true), 1200)
    }, [dispatch, userId]);

    useEffect(() => {
        return () => dispatch(GetProfileUser(userId));
    }, [dispatch, userId]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                {
                    data && open ?
                        <View style={tw`h-full bg-[#005f73] flex justify-center items-center`}>
                            <View style={tw`mt-10 p-5`}>
                                <ProfileBody
                                    avatar={data.avatar}
                                    friends={data ? data.friends.length : 0}
                                    gamesWon={Object.keys(data.stats).length > 0 ? data.stats.wins : 0}
                                    games={Object.keys(data.stats).length > 0 ? data.stats.games : 0}
                                    id={data.id}
                                    name={data.name}
                                    userName={data.username}
                                    country={data.country}
                                    email={data.email}
                                    password={data.password}
                                    premium={data.premium}
                                    averageScore={data.stats.averageScore}
                                    friendId="1"
                                />
                                <ProfileButtons
                                    id={data.id}
                                    name={data.name}
                                    userName={data.username}
                                    country={data.country}
                                    email={data.email}
                                    password={data.password}
                                    premium={data.premium}
                                    countries={countries}
                                />
                            </View>

                            <BottomTabView
                                id={data.id}
                                userName={data.username}
                                premium={data.premium}
                                averageScore={data.stats.averageScore}
                                games={Object.keys(data.stats).length > 0 ? data.stats.games : 0}
                                losses={data.stats.losses}
                                timePaying={data.stats.timePaying}
                                wins={Object.keys(data.stats).length > 0 ? data.stats.wins : 0}
                                gamesArr={data.games}
                                friends={data.friends}
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
                                source={require("../../assets/LoadingWorld.mp4")}
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

export default Profile;
