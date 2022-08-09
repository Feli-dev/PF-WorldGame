import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import avatarDefault from "../../../assets/avatar_default.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchFriend,
  addFriend,
  GetProfileUser,
} from "../../../redux/actions/index";
import tw from "twrnc";
import Ionic from "react-native-vector-icons/Ionicons";
//import * as Animatable from 'react-native-animatable';
import World from "../../../assets/World2.png";
import Loading from "../../../assets/loading.gif";
import * as Animatable from "react-native-animatable";

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const SearchFriends = (params) => {
  let { id, navigation } = params.route.params;
  let findUsers = useSelector((state) => state.searchFriend);
  const userInfo = useSelector((state) => state.profileUser);
  const friends = userInfo.friends;
  const isSpanish = useSelector((state) => state.isSpanish);

  let dispatch = useDispatch();
  console.log("search", friends);
  const [userData, SetUserData] = useState({
    username: "",
    refresher: "",
  });

  const [open, setOpen] = useState(false);
  const [find, setFind] = useState(false);

  const handleOnChange = (type, e) => {
    SetUserData({
      ...userData,
      [type]: e,
      refresher: e,
    });
  };

  //AJUSTAR BOTON AGREGADO Y AGREGAR
  //FOLLOW Y FOLLOWING

  const handleSearch = () => {
    // console.log("hyo", userData.username);
    setOpen(true);
    dispatch(GetProfileUser(id));
    dispatch(searchFriend(userData.username));
    setFind(true);
    setTimeout(() => setFind(false), 1200);
    SetUserData({
      ...userData,
      username: "",
    });
  };

  const sendFriend = (payload) => {
    console.log("hyo", payload);
    dispatch(addFriend(payload));
    dispatch(searchFriend(" "));
    // navigation.navigate('BottomTabView')
    // Alert.alert("hey");
  };

  const handleAdd = (UserId, FriendId) => {
    sendFriend(UserId, FriendId);
    setOpen(false);
  };

  useEffect(() => {
    dispatch(GetProfileUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    
    return () => {
      setOpen(false);
      dispatch(GetProfileUser(id));
      dispatch(searchFriend(" "));
    }
  }, [dispatch]);
  useEffect(() => {
   
    return () => dispatch(searchFriend(" "));
  }, [dispatch]);

  return (
    <View style={{ backgroundColor: "#005f73", height: "100%" }}>
      <View style={{ padding: 50 }}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                padding: 5,
              }}
            >
              {isSpanish ? "Busca a tu amigo" : "Find a friend"}
            </Text>
            <Ionic
              onPress={() => handleSearch()}
              name="search"
              style={{
                fontSize: 30,
                color: "white",
              }}
            />
          </View>
          <TextInput
            type="username"
            placeholder={
              isSpanish ? "Buscar por nombre de usuario" : "Search username"
            }
            placeholderTextColor="#8d99ae"
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
      {find ? (
        <View
          style={{
            backgroundColor: "#005f73",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={Loading}
          />
        </View>
      ) : findUsers.length > 0 ? (
        <ScrollView
          style={{
            backgroundColor: "#005f73",
          }}
        >
          {findUsers.map((user) => {
            if (user.id !== id)
              return (
                <TouchableOpacity
                  key={user.id}
                  onPress={() =>
                    navigation.navigate("FriendProfile", {
                      freId: user.id,
                      userId: id,
                      userFriends: friends,
                    })
                  }
                >
                  <View
                    style={{
                      width: "100%",
                      marginBottom: 15,
                      marginHorizontal: 20,
                      backgroundColor: "#005f73",
                    }}

                    // onPress={() =>
                    //   navigation.navigate("FriendProfile", { freId: friend.FriendId })
                    // }
                  >
                    <View style={{ width: "100%", marginBottom: 15 }}>
                      <View
                        style={{
                          borderRadius: 8,
                          backgroundColor: "#C0D6DF",
                          padding: 15,
                          justifyContent: "space-between",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          marginHorizontal: 10,
                          width: "90%",
                        }}
                      >
                        <Image
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius:5,
                          }}
                          source={{uri:user.avatar}}
                        />

                        <Text
                          style={{
                            color: "#333533",
                            fontSize: 25,
                            textAlign: "center",
                            paddingRight: 10,
                          }}
                        >
                          {user.username
                            ? user.username
                            : isSpanish
                            ? "No definido"
                            : "Unknow"}
                        </Text>
                        {friends.some(
                          (friend) => friend.FriendId === user.id
                        ) ? (
                          <View>
                            <Text> </Text>
                          </View>
                        ) : (
                          <Ionic
                            onPress={() =>
                              handleAdd({ UserId: id, FriendId: user.id })
                            }
                            name="person-add"
                            style={{
                              fontSize: 30,
                              color: "#333533",
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
          })}
        </ScrollView>
      ) : (
        open && 
        
        <View
          style={{
            backgroundColor: "#005f73",
            width: "100%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,

                borderColor: "#CDCDCD",
                color: "#D1D5DB",
                paddingTop: 0,
                paddingBottom: 0,
                textDecorationLine: "none",
              }}
            >
              {isSpanish ? "No encotramos a nadie" : "Didnt find anyone"}
            </Text>
          </View>
          <Animatable.View
            animation="fadeInLeftBig"
            iterationCount={1}
            duration={3000}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={World}
            />
          </Animatable.View>
        </View>
      )}
    </View>
  );
  // findUsers.length > 0 ? (
  //   <ScrollView
  //     style={{
  //       backgroundColor: '#111827',
  //     }}
  //   >
  //     <View style={{
  //       padding: 50,
  //     }}>
  //       <View>
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between'
  //           }}
  //         >
  //           <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20, padding: 5, }}>
  //             {isSpanish ? 'Busca a tu amigo' : "Find a friend"}
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
  //           placeholder={isSpanish ? 'Buscar por nombre de usuario' : "Search username"}
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
  //     {findUsers.map((user) => {
  //       if (user.id !== id) return (
  //         <TouchableOpacity
  //           key={user.id}
  //           onPress={() => navigation.navigate('FriendProfile', { freId: user.id, userId: id, userFriends: friends })}
  //         >

  //           <View style={{ width: "100%", marginBottom: 15, marginHorizontal: 20, backgroundColor: '#111827' }}

  //           // onPress={() =>
  //           //   navigation.navigate("FriendProfile", { freId: friend.FriendId })
  //           // }
  //           >
  //             <View
  //               style={{ width: "100%", marginBottom: 15, }}
  //             >
  //               <View
  //                 style={{
  //                   borderRadius: 8, backgroundColor: "grey", padding: 15,
  //                   justifyContent: "space-between", alignItems: "center", display: "flex",
  //                   flexDirection: "row", marginHorizontal: 10, width: '90%'
  //                 }}
  //               >
  //                 <Image
  //                   style={{
  //                     width: 50,
  //                     height: 50,
  //                   }}
  //                   source={user.avatar ? user.avatar : avatarDefault}
  //                 />

  //                 <Text style={{
  //                   color: "white", fontSize: 25, textAlign: "center", paddingRight: 10,
  //                 }}
  //                 >
  //                   {user.username ? user.username : (isSpanish ? "No definido":"Unknow")}

  //                 </Text>
  //                 {friends.some(friend => friend.FriendId === user.id)
  //                   ? <View><Text>        </Text></View>
  //                   : <Ionic
  //                     onPress={() => handleAdd({ UserId: id, FriendId: user.id })}
  //                     name="person-add"
  //                     style={{
  //                       fontSize: 30,
  //                       color: 'white',
  //                     }}
  //                   />
  //                 }

  //               </View>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //       );
  //     })}
  //   </ScrollView>
  //   ) : (
  //     <View style={{ backgroundColor: '#111827', height: '100%' }}>

  //       <View style={{ padding: 50, }}>
  //         <View>
  //           <View
  //             style={{
  //               display: 'flex',
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',

  //             }}
  //           >
  //             <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20, padding: 5, }}>
  //             {isSpanish ? 'Busca a tu amigo' : "Find a friend"}
  //             </Text>
  //             <Ionic
  //               onPress={() => handleSearch()}
  //               name="search"
  //               style={{
  //                 fontSize: 30,
  //                 color: '#D1D5DB',
  //               }}
  //             />
  //           </View>
  //           <TextInput
  //             type="username"
  //             placeholder={isSpanish ? 'Buscar por nombre de usuario' : "Search username"}
  //             placeholderTextColor="#6B7280"
  //             defaultValue={userData.username}
  //             style={{
  //               fontSize: 25,
  //               borderBottomWidth: 1,
  //               borderColor: "#CDCDCD",
  //               color: "#D1D5DB",
  //               paddingTop: 15,
  //               paddingBottom: 5,
  //             }}
  //             onChangeText={(event) => handleOnChange("username", event)}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   );
};

export default SearchFriends;
