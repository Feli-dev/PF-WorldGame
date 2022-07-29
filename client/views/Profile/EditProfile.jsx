import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Image,
} from "react-native";

import React, { useState } from "react";
import Ionic from 'react-native-vector-icons/Ionicons'
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { PutUser } from "../../redux/actions/index";
import AvatarOptions from './AvatarsOptions'

export default function EditProfile({ route, navigation }) {

  const { id, name, userAvatar, premium, country, email, userName, password } = route.params;

  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully!', ToastAndroid.SHORT);
  }

  const dispatch = useDispatch();

  const [userData, SetUserData] = useState({
    id: id,
    username: userName,
    name: name,
    country: country,
    email: email,
    password: password,
  });

  const handleUpdate = () => {
    console.log('EditProfile---->userData',userData)
    dispatch(PutUser(userData));
    navigation.navigate('Profile')
    //navigation.goBack();
    TostMessage();
  };
  const handleOnChange = (type, e) => {
    SetUserData({
      ...userData,
      [type]: e,
    });
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#111827',
        marginTop: 25,
      }}>
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name='close-outline' style={{ fontSize: 35, color: '#BE185D' }}></Ionic>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#D1D5DB' }}>Edit Profile</Text>
        <TouchableOpacity onPress={() => handleUpdate()}>
          <Ionic name='checkmark' style={{ fontSize: 35, color: '#059669' }}></Ionic>
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 20, alignItems: 'center'
        }}>
        <Image
          source={userAvatar}
          style={{ width: 100, height: 100, borderRadius: 100 }}
          onPress={
            <View>
              <AvatarOptions
                userAvatar={userAvatar}
                isPremium={premium}
              />
            </View>
          }
        />
        <Text style={{ color: '#D1D5DB' }}> Change avatar</Text>
      </View>

      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5, color: '#D1D5DB' }}>Name</Text>
          <TextInput
            placeholder="name"
            placeholderTextColor="#6B7280"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: '#D1D5DB',
            }}
            onChangeText={(event) => handleOnChange("name", event)}
          />
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5, color: '#D1D5DB' }}>Email</Text>
          <TextInput
            placeholder="email"
            placeholderTextColor="#6B7280"
            defaultValue={email}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: '#D1D5DB',
            }}
            onChangeText={(event) => handleOnChange("email", event)}
          />
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5, color: '#D1D5DB' }}>Country</Text>
          <TextInput
            placeholder="country"
            placeholderTextColor="#6B7280"
            defaultValue={country}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: '#D1D5DB',
            }}
            onChangeText={(event) => handleOnChange("country", event)}
          />
        </View>
      </View>

      {premium
        ? null
        : <View>
          <Text //ESTO TIENE QUE APARECER SI NO ES PREMIUM!
            style={{
              marginVertical: 10,
              padding: 10,
              color: '#D97706',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#EFEFEF',
            }}
            onPress={() => navigation.navigate('Payment')}
          >
            Switch to Premium account

          </Text>
        </View>
      }

    </View>
  );
}
