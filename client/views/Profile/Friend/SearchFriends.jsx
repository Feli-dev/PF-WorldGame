import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import avatarDefault from '../../../assets/avatar_default.png';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFriend, addFriend, getUser } from "../../../redux/actions/index";
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { FriendProfileBody } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend";
import Ionic from 'react-native-vector-icons/Ionicons'

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const SearchFriends = (params) => {
  let { id, friends, navigation } = params.route.params
  let findUsers = useSelector((state) => state.searchFriend);

  let dispatch = useDispatch();
  console.log("search", friends);
  const [userData, SetUserData] = useState({
    username: "",
    refresher: ""
  });



  const handleOnChange = (type, e) => {
    SetUserData({
      ...userData,
      [type]: e,
      refresher: e
    });
  };

  const handleSearch = () => {
    // console.log("hyo", userData.username);
    dispatch(searchFriend(userData.username));

    SetUserData({
      ...userData,
      username: "",
    });


  };

  const sendFriend = (payload) => {
    console.log("hyo", payload);
    dispatch(addFriend(payload));
    dispatch(searchFriend(' '))
    // navigation.navigate('BottomTabView')
    // Alert.alert("hey");
  };




  useEffect(() => {
    console.log('will')
    return () => dispatch(getUser(id))
  }, [dispatch])
  useEffect(() => {
    console.log('will')
    return () => dispatch(searchFriend(' '))
  }, [dispatch])



  return findUsers.length > 0 ? (
    <ScrollView
    style={{
      backgroundColor: '#111827',
    }}
    >
      <View style={{
        padding: 50,
      }}>
        <View>
          <View
          style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
          }}
          >
            <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20, padding: 5, }}>
              Find a friend
            </Text>
            <Ionic
              onPress={() => handleSearch()}
              name="search"
              style={{
                fontSize: 30,
                color: '#D1D5DB',
              }}
            />
          </View>

          <TextInput
            type="username"
            placeholder="Search username"
            placeholderTextColor="#6B7280"
            defaultValue={userData.username}
            style={{
              fontSize: 25,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
              color: "#D1D5DB",
              paddingTop: 15,
              paddingBottom:5,
            }}
            onChangeText={(event) => handleOnChange("username", event)}
          />
        </View>
      </View>

      {findUsers.map((user) => {
        if (user.id !== id) return (
          <View style={{ width: "100%", marginBottom: 15, marginHorizontal: 20, backgroundColor: '#111827' }}
            key={user.id}
          // onPress={() =>
          //   navigation.navigate("FriendProfile", { freId: friend.FriendId })
          // }
          >
            <View
              style={{ width: "100%", marginBottom: 15, }}
            >
              <View
                style={{
                  borderRadius: 8, backgroundColor: "grey", padding: 15,
                  justifyContent: "space-between", alignItems: "center", display: "flex",
                  flexDirection: "row", marginHorizontal: 10,width:'90%'
                }}
              >
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={user.avatar ? user.avatar : avatarDefault}
                />

                <Text style={{
                  color: "white", fontSize: 25, textAlign: "center", paddingRight: 10,
                }}
                >
                  {user.username ? user.username : "Unknow"}

                </Text>
                {user.friends.some(friend => friend.FriendId === id && friend.state === "Recibido") ? <View><Text>Agregado</Text></View> : <TouchableOpacity onPress={() => sendFriend({ UserId: id, FriendId: user.id })}>
                  <Text>agregar</Text>
                </TouchableOpacity>}

              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <View style={{ backgroundColor: '#111827', height:'100%' }}>

      <View style={{ padding: 50,  }}>
        <View>
          <View
          style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            
          }}
          >
            <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20, padding: 5, }}>
              Find a friend
            </Text>
            <Ionic
              onPress={() => handleSearch()}
              name="search"
              style={{
                fontSize: 30,
                color: '#D1D5DB',
              }}
            />
          </View>
          <TextInput
            type="username"
            placeholder="Search username"
            placeholderTextColor="#6B7280"
            defaultValue={userData.username}
            style={{
              fontSize: 25,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
              color: "#D1D5DB",
              paddingTop: 15,
              paddingBottom:5,
            }}
            onChangeText={(event) => handleOnChange("username", event)}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchFriends;
