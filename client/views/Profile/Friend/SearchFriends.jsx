import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import avatarDefault from '../../../assets/avatar_default.png';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFriend, addFriend, GetProfileUser } from "../../../redux/actions/index";
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { FriendProfileBody } from "./FriendProfileBody";
import BottomTabViewFriend from "./BottomTabViewFriend";
import Ionic from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import World from '../../../assets/World2.png';
import Loading from '../../../assets/loading.gif';


//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const SearchFriends = (params) => {
  let { id, navigation } = params.route.params
  let findUsers = useSelector((state) => state.searchFriend);
  const userInfo = useSelector((state) => state.profileUser);
  const friends = userInfo.friends


  let dispatch = useDispatch();
  console.log("search", friends);
  const [userData, SetUserData] = useState({
    username: "",
    refresher: ""
  });

  const [open, setOpen] = useState(true);
  const [find, setFind] = useState(false);



  const handleOnChange = (type, e) => {
    SetUserData({
      ...userData,
      [type]: e,
      refresher: e
    });
  };

  //AJUSTAR BOTON AGREGADO Y AGREGAR
  //FOLLOW Y FOLLOWING

  const handleSearch = () => {
    // console.log("hyo", userData.username);
    dispatch(GetProfileUser(id))
    dispatch(searchFriend(userData.username));
    setFind(true);
    setTimeout(() => setOpen(false), 1200)
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

  const handleAdd = (UserId, FriendId) => {
    sendFriend(UserId, FriendId)
  };


  useEffect(() => {
    dispatch(GetProfileUser(id));

  }, [dispatch, id]);

  useEffect(() => {
    console.log('will')
    return () => dispatch(GetProfileUser(id))
  }, [dispatch])
  useEffect(() => {
    console.log('will')
    return () => dispatch(searchFriend(' '))
  }, [dispatch])



  return (//findUsers.length > 0 && open ? 
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
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
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
              paddingBottom: 5,
            }}
            onChangeText={(event) => handleOnChange("username", event)}
          />
        </View>
      </View>

{/* 

find -> true -> che el arreglo de usuarios esta vacio? -si / no
        
NO MEZCLAR CON LAS COMPROBACIONES. DIFERENCIAR ENTRE TOCAR EL BOTON Y NO Y LUEGO 

      false -> false




*/}



      {findUsers.length > 0 && !open
        ? (findUsers.map((user) => {
          if (user.id !== id) return (
            <TouchableOpacity
              key={user.id}
              onPress={() => navigation.navigate('FriendProfile', { freId: user.id, userId: id, userFriends: friends })}
            >

              <View style={{ width: "100%", marginBottom: 15, marginHorizontal: 20, backgroundColor: '#111827' }}

              >
                <View
                  style={{ width: "100%", marginBottom: 15, }}
                >
                  <View
                    style={{
                      borderRadius: 8, backgroundColor: "grey", padding: 15,
                      justifyContent: "space-between", alignItems: "center", display: "flex",
                      flexDirection: "row", marginHorizontal: 10, width: '90%', paddingHorizontal: 30,
                    }}
                  >
                    <Image
                      source={{ uri: user.avatar }}
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    />
                    <Text style={{
                      color: "white", fontSize: 25, textAlign: "center", paddingRight: 10,
                    }}
                    >
                      {user.username ? user.username : "Unknow"}

                    </Text>

                    {friends.some(friend => friend.FriendId === user.id)
                      ? <View><Text>        </Text></View>
                      : <Ionic
                        onPress={() => handleAdd({ UserId: id, FriendId: user.id })}
                        name="person-add"
                        style={{
                          fontSize: 30,
                          color: 'white',
                        }}
                      />
                    }

                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }))
        :
        find && findUsers.length === 0
          ? (
            <View style={{
              marginTop: 100,
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',

            }}>
              <Text style={{ color: "#D1D5DB", fontSize: 30, padding: 5, textAlign: 'center' }}>
                No results...   😥
              </Text>
              <Animatable.View
                animation="fadeInLeftBig" iterationCount={1} duration={3000}
                style={{
                  marginTop: 30,
                  paddingHorizontal: 45,
                }}
              >
                <Image
                  source={World}
                />
              </Animatable.View>
            </View>)

          : find && open?
          <View>
            <Image
            source={Loading}
            style={{
              width:90,
              height:90,
            }}
            />
          </View>

          :<View><Text></Text></View>

      }


    </ScrollView>
  )
  // : (  find
  //   <View style={{ backgroundColor: '#111827', height: '100%' }}>

  //     <View style={{ padding: 50, }}>
  //       <View>
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',

  //           }}
  //         >
  //           <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20, padding: 5, }}>
  //             Find a friend
  //           </Text>
  //           <Ionic
  //             onPress={() => handleSearch()}
  //             name="search"
  //             style={{
  //               fontSize: 30,
  //               color: '#D1D5DB',
  //             }}
  //           />
  //         </View>
  //         <TextInput
  //           type="username"
  //           placeholder="Search username"
  //           placeholderTextColor="#6B7280"
  //           defaultValue={userData.username}
  //           style={{
  //             fontSize: 25,
  //             borderBottomWidth: 1,
  //             borderColor: "#CDCDCD",
  //             color: "#D1D5DB",
  //             paddingTop: 15,
  //             paddingBottom: 5,
  //           }}
  //           onChangeText={(event) => handleOnChange("username", event)}
  //         />



  //       </View>
  //     </View>
  //   </View>
  // );
};

export default SearchFriends;
