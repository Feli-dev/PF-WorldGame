import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import React, { useEffect, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { touchSound } from "../../utils/sounds";
import { useDispatch, useSelector } from "react-redux";
import { GetProfileUser, PutUser } from "../../redux/actions/index";
import AvatarOptions from "./AvatarsOptions";
import * as Animatable from "react-native-animatable";
//-----------------select
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function EditProfile({ route, navigation }) {
  const {
    id,
    name,
    avatar,
    premium,
    country,
    email,
    userName,
    password,
    countries,
  } = route.params;
  const userInfo = useSelector((state) => state.profileUser);
  const soundOn = useSelector((state) => state.soundOn);
  useEffect(() => {
    GetProfileUser(id);
    console.log(userInfo);
  }, [ handleUpload ]);

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      } else {
        Alert.alert("");
      }
    } else {
      if(!isSpanish) Alert.alert("Not possible");
      else Alert.alert("No es posible");
    }
  };
  const pickFromGalary = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        aspect: [4, 4],
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      }
    } else {
      if(isSpanish)Alert.alert("No se pudo seleccionar");
      else Alert.alert("Could not be selected");
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "World_game");
    data.append("cloud_name", "dunhnh8mv");
    fetch("https://api.cloudinary.com/v1_1/dunhnh8mv/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        dispatch(
          PutUser({
            id: id,
            username: userName,
            email: email,
            password: password,
            avatar: data.secure_url,
          })
        );
      });
  };

  const TostMessage = () => {
    if(!isSpanish) ToastAndroid.show("Edited Sucessfully!", ToastAndroid.SHORT);
    else ToastAndroid.show("¡Editado con éxito!", ToastAndroid.SHORT);
  };  

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
  const isSpanish = useSelector((state) => state.isSpanish);
  const handleUpdate = () => {
    dispatch(PutUser(userData));
    navigation.navigate("Home");
    TostMessage();
  };
  const handleOnChange = (type, e) => {
    SetUserData({
      ...userData,
      [type]: e,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#111827",
          marginTop: 25,
        }}
      >
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              touchSound(soundOn);
            }}
          >
            <Ionic
              name="close-outline"
              style={{ fontSize: 35, color: "#BE185D" }}
            ></Ionic>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#D1D5DB" }}>
            {isSpanish?"Editar Perfil":"Edit Profile"}
          </Text>
          <TouchableOpacity
            onPress={() => {
              handleUpdate();
              touchSound(soundOn);
            }}
          >
            <Ionic
              name="checkmark"
              style={{ fontSize: 35, color: "#059669" }}
            ></Ionic>
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: userInfo.avatar }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <TouchableOpacity
            style={tw`bg-gray-600 px-8 py-2 rounded-lg mt-3 w-50`}
            onPress={() => {
              pickFromGalary();
              touchSound(soundOn);
            }}
          >
            <Text style={tw`text-white text-center font-bold`}>
              {isSpanish?"Cambiar Imagen":"Change Image"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-gray-600 px-8 py-2 rounded-lg mt-3 w-50`}
            onPress={() => {
              pickFromCamera();
              touchSound(soundOn);
            }}
          >
            <Text style={tw`text-white text-center font-bold`}>{isSpanish?"Tomar Foto":"Take photo"}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20 }}>
              {isSpanish?"Nombre":"Name"}
            </Text>
            <TextInput
              type="name"
              placeholder={isSpanish?"Nombre":"Name"}
              placeholderTextColor="#6B7280"
              defaultValue={name}
              style={{
                fontSize: 25,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
                color: "#D1D5DB",
              }}
              onChangeText={(event) => handleOnChange("name", event)}
            />
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20 }}>
              {isSpanish?"Correo electrónico":"Email"}
            </Text>
            <TextInput
              type="email"
              placeholder={isSpanish?"Correo electrónico":"Email"}
              placeholderTextColor="#6B7280"
              defaultValue={email}
              style={{
                fontSize: 25,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
                color: "#D1D5DB",
              }}
              onChangeText={(event) => handleOnChange("email", event)}
            />
          </View>
        </View>

        <View
          style={{
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ opacity: 0.5, color: "#D1D5DB", fontSize: 20 }}>
              {isSpanish?"País":"Country"}
            </Text>
            <Text style={tw`text-center text-2xl  text-white mb-5`}>
              {userData.country}
            </Text>
            <DropDownPicker
              onPress={Keyboard.dismiss}
              accessible={false}
              style={tw`flex justify-center items-center m-0 rounded-lg bg-[#1F2937] h-8 w-7/7`}
              // style={tw`border-solid border-0 w-3/5 h-8 m-0 flex justify-center items-center bg-gray-800 rounded-md z-0`}
              textStyle={tw`text-gray-600`}
              open={open}
              items={items}
              min={1}
              max={1}
              placeholder={isSpanish ? "Seleccionar país" : "Select a country"}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              arrowIconStyle={{ tintColor: "white" }}
              type="country"
              onSelectItem={(event) => {
                handleOnChange("country", event.value);
                touchSound(soundOn);
              }}
              containerStyle={tw`w-6/12`}
            />
          </View>
        </View>

        {premium ? null : (
          <Animatable.View
            animation="slideInDown"
            iterationCount={8}
            direction="alternate-reverse"
            duration={2000}
            delay={500}
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text //ESTO TIENE QUE APARECER SI NO ES PREMIUM!
              onPress={() => {
                navigation.navigate("Payment", {
                  id: id,
                  name: name,
                  country: country,
                  email: email,
                  userName: userName,
                  password: password,
                });
                touchSound(soundOn);
              }}
              style={{
                fontSize: 20,
                marginVertical: 100,
                padding: 10,
                color: "#D97706",
                // borderTopWidth: 1,
                // borderBottomWidth: 1,
                borderColor: "#EFEFEF",
              }}
            >
              {isSpanish?"Cambiar a cuenta Premium":"Switch to Premium account"}
            </Text>
          </Animatable.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
