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
import tw from "twrnc";
import { FriendProfileBody } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend";

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const SearchFriends = (params) => {
    let {id, friends} = params.route.params
  let findUsers = useSelector((state) => state.searchFriend);
  let dispatch = useDispatch();
//   console.log("search", id, friends);
  const [userData, SetUserData] = useState({
    username: "",
  });

  const handleOnChange = (type, e) => {
    SetUserData({
      ...userData,
      [type]: e,
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
    // Alert.alert("hey");
  };

  
  

  useEffect(() => {
    console.log('will')
    return () => dispatch(getUser(id))
},[dispatch])

 

  return findUsers.length > 0 ? (
    <ScrollView>
      <View style={{ padding: 50 }}>
        <View>
          <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20 }}>
            Busca un amigo
          </Text>
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
            }}
            onChangeText={(event) => handleOnChange("username", event)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => handleSearch()}>
            <Text>buscar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {findUsers.map((user) => {
        return (
          <View style={{width: "100%", marginBottom: 15, marginHorizontal: 20,}}
            key={user.id}
            // onPress={() =>
            //   navigation.navigate("FriendProfile", { freId: friend.FriendId })
            // }
          >
            <View
              style={{width: "100%", marginBottom: 15,}}
            >
              <View
                style={{borderRadius: 8,backgroundColor: "grey",padding: 15,
                  justifyContent: "space-between",alignItems: "center",display: "flex",
                  flexDirection: "row", marginHorizontal: 20,
                }}
              >
                <Image
                        style={{
                          width: 50,
                          height: 50,
                        }}
                        source={user.avatar? user.avatar :avatarDefault }
                      />

                <Text style={{color: "white", fontSize: 25,textAlign: "center", paddingRight: 10,
                  }}
                >
                  {user.username ? user.username : "Unknow"}
                 
                </Text>

                <TouchableOpacity onPress={() => sendFriend({UserId:id, FriendId:user.id})}>
                  <Text>agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <View>

    <View style={{ padding: 50 }}>
        <View>
          <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20 }}>
            Busca un amigo
          </Text>
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
            }}
            onChangeText={(event) => handleOnChange("username", event)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => handleSearch()}>
            <Text>buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>No hemos econtrado personas para agregar a amigos</Text>
    </View>
  );
};

export default SearchFriends;
