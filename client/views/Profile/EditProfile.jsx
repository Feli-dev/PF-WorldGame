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
import * as Animatable from 'react-native-animatable';
//-----------------select
import DropDownPicker from "react-native-dropdown-picker";

export default function EditProfile({ route, navigation }) {

  const { id, name, userAvatar, premium, country, email, userName, password, countries } = route.params;

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

  //---------------------------------selectCountry
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(countries);



  const handleUpdate = () => {
    dispatch(PutUser(userData));
    navigation.navigate('Home')
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
          <Text style={{ opacity: 0.5, color: '#D1D5DB',fontSize: 20, }}>Name</Text>
          <TextInput
            placeholder="name"
            placeholderTextColor="#6B7280"
            defaultValue={name}
            style={{
              fontSize: 25,
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
          <Text style={{ opacity: 0.5, color: '#D1D5DB',fontSize: 20, }}>Email</Text>
          <TextInput
            placeholder="email"
            placeholderTextColor="#6B7280"
            defaultValue={email}
            style={{
              fontSize: 25,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: '#D1D5DB',
            }}
            onChangeText={(event) => handleOnChange("email", event)}
          />
        </View>
      </View>

      <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', }}>
        <View style={{justifyContent:'center', alignItems:'center', }}>
          <Text style={{ opacity: 0.5, color: '#D1D5DB',fontSize: 20, }}>Country</Text>
          <Text
            style={{
              fontSize: 25,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: '#D1D5DB',
              
            }}
          >
            {userData.country}
          </Text>
          <DropDownPicker
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              height: 8,
              margin: 0,
              backgroundColor: '#1F2937',
              display: 'flex',
              borderRadius: 6,
            }}
            // style={tw`border-solid border-0 w-3/5 h-8 m-0 flex justify-center items-center bg-gray-800 rounded-md z-0`}
            textStyle={tw`text-gray-600`}
            open={open}
            items={items}
            min={1}
            max={1}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            arrowIconStyle={{ tintColor: "white" }}
            onSelectItem={(event) => handleOnChange("country", event.value)}
          />

        </View>
      </View>

      {premium
        ? null
        : <Animatable.View
          animation="slideInDown" iterationCount={8} direction="alternate-reverse" duration={1000} delay={500}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text //ESTO TIENE QUE APARECER SI NO ES PREMIUM!

            onPress={() => navigation.navigate('Payment', {
              id: id,
              name: name,
              country: country,
              email: email,
              userName: userName,
              password: password,
            })}
            style={{
              fontSize: 20,
              marginVertical: 100,
              padding: 10,
              color: '#D97706',
              // borderTopWidth: 1,
              // borderBottomWidth: 1,
              borderColor: '#EFEFEF',
            }}

          >
            Switch to Premium account

          </Text>
        </Animatable.View>
      }

    </View>
  );
}
