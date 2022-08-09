import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";
import DropDownPicker from "react-native-dropdown-picker";
import validateInput from "../utils/ValidateInput";
import { PostUser,postLogin,getUser, first } from "../redux/actions";
import { useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { touchSound } from '../utils/sounds';
import { fetchUserInfoAsync } from "expo-auth-session";

export default function Register({ navigation }) {
  const [accessToken, setAccessToken] = useState(null);
  const [userA, setUserA] = useState(null);
  const soundOn = useSelector((state) => state.soundOn);
  const isSpanish= useSelector((state) => state.isSpanish);
  const user= useSelector(state => state.login);
  const allUser = useSelector((state) => state.users)
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1070907696300-0qdljeqakdv1kl2719q67qrrppo9fufi.apps.googleusercontent.com',
    iosClientId: '1070907696300-lqbno53dfsfriamdtv1nbdenijssv5jn.apps.googleusercontent.com',
    androidClientId: '1070907696300-lqbno53dfsfriamdtv1nbdenijssv5jn.apps.googleusercontent.com',
  });
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setAccessToken(authentication.accessToken)
      accessToken && fetchUserInfo()
      }
  }, [response,accessToken]);
  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    dispatch(
      PostUser({
        email: useInfo.email,
        username: `${useInfo.given_name}${useInfo.family_name}`,
        password: `P${useInfo.given_name}2`,
        country: "Not Defined",
        avatar: useInfo.picture
      })
    );
    setLogin({
      email: input.email,
      username: input.username,
      password: input.password,
      country: input.country,
    })
    navigation.navigate("Instructions");
  }



  const dispatch = useDispatch();
  const countries = [{"value":"Afganistán","label":"Afganistán"},{"value":"Alandia","label":"Alandia"},{"value":"Albania","label":"Albania"},{"value":"Alemania","label":"Alemania"},{"value":"Andorra","label":"Andorra"},{"value":"Angola","label":"Angola"},{"value":"Anguilla","label":"Anguilla"},{"value":"Antigua y Barbuda","label":"Antigua y Barbuda"},{"value":"Antártida","label":"Antártida"},{"value":"Arabia Saudí","label":"Arabia Saudí"},{"value":"Argelia","label":"Argelia"},{"value":"Argentina","label":"Argentina"},{"value":"Armenia","label":"Armenia"},{"value":"Aruba","label":"Aruba"},{"value":"Australia","label":"Australia"},{"value":"Austria","label":"Austria"},{"value":"Azerbaiyán","label":"Azerbaiyán"},{"value":"Bahamas","label":"Bahamas"},{"value":"Bahrein","label":"Bahrein"},{"value":"Bangladesh","label":"Bangladesh"},{"value":"Barbados","label":"Barbados"},{"value":"Belice","label":"Belice"},{"value":"Benín","label":"Benín"},{"value":"Bermudas","label":"Bermudas"},{"value":"Bielorrusia","label":"Bielorrusia"},{"value":"Bolivia","label":"Bolivia"},{"value":"Bosnia y Herzegovina","label":"Bosnia y Herzegovina"},{"value":"Botswana","label":"Botswana"},{"value":"Brasil","label":"Brasil"},{"value":"Brunei","label":"Brunei"},{"value":"Bulgaria","label":"Bulgaria"},{"value":"Burkina Faso","label":"Burkina Faso"},{"value":"Burundi","label":"Burundi"},{"value":"Bután","label":"Bután"},{"value":"Bélgica","label":"Bélgica"},{"value":"Cabo Verde","label":"Cabo Verde"},{"value":"Camboya","label":"Camboya"},{"value":"Camerún","label":"Camerún"},{"value":"Canadá","label":"Canadá"},{"value":"Caribe Neerlandés","label":"Caribe Neerlandés"},{"value":"Catar","label":"Catar"},{"value":"Chad","label":"Chad"},{"value":"Chequia","label":"Chequia"},{"value":"Chile","label":"Chile"},{"value":"China","label":"China"},{"value":"Chipre","label":"Chipre"},{"value":"Ciudad del Vaticano","label":"Ciudad del Vaticano"},{"value":"Colombia","label":"Colombia"},{"value":"Comoras","label":"Comoras"},{"value":"Congo","label":"Congo"},{"value":"Congo (Rep. Dem.)","label":"Congo (Rep. Dem.)"},{"value":"Corea del Norte","label":"Corea del Norte"},{"value":"Corea del Sur","label":"Corea del Sur"},{"value":"Costa Rica","label":"Costa Rica"},{"value":"Costa de Marfil","label":"Costa de Marfil"},{"value":"Croacia","label":"Croacia"},{"value":"Cuba","label":"Cuba"},{"value":"Curazao","label":"Curazao"},{"value":"Dinamarca","label":"Dinamarca"},{"value":"Djibouti","label":"Djibouti"},{"value":"Dominica","label":"Dominica"},{"value":"Ecuador","label":"Ecuador"},{"value":"Egipto","label":"Egipto"},{"value":"El Salvador","label":"El Salvador"},{"value":"Emiratos Árabes Unidos","label":"Emiratos Árabes Unidos"},{"value":"Eritrea","label":"Eritrea"},{"value":"Eslovenia","label":"Eslovenia"},{"value":"España","label":"España"},{"value":"Estados Unidos","label":"Estados Unidos"},{"value":"Estonia","label":"Estonia"},{"value":"Etiopía","label":"Etiopía"},{"value":"Filipinas","label":"Filipinas"},{"value":"Finlandia","label":"Finlandia"},{"value":"Fiyi","label":"Fiyi"},{"value":"Francia","label":"Francia"},{"value":"Gabón","label":"Gabón"},{"value":"Gambia","label":"Gambia"},{"value":"Georgia","label":"Georgia"},{"value":"Ghana","label":"Ghana"},{"value":"Gibraltar","label":"Gibraltar"},{"value":"Grecia","label":"Grecia"},{"value":"Grenada","label":"Grenada"},{"value":"Groenlandia","label":"Groenlandia"},{"value":"Guadalupe","label":"Guadalupe"},{"value":"Guam","label":"Guam"},{"value":"Guatemala","label":"Guatemala"},{"value":"Guayana Francesa","label":"Guayana Francesa"},{"value":"Guernsey","label":"Guernsey"},{"value":"Guinea","label":"Guinea"},{"value":"Guinea Ecuatorial","label":"Guinea Ecuatorial"},{"value":"Guinea-Bisáu","label":"Guinea-Bisáu"},{"value":"Guyana","label":"Guyana"},{"value":"Haití","label":"Haití"},{"value":"Honduras","label":"Honduras"},{"value":"Hong Kong","label":"Hong Kong"},{"value":"Hungría","label":"Hungría"},{"value":"India","label":"India"},{"value":"Indonesia","label":"Indonesia"},{"value":"Irak","label":"Irak"},{"value":"Iran","label":"Iran"},{"value":"Irlanda","label":"Irlanda"},{"value":"Isla Bouvet","label":"Isla Bouvet"},{"value":"Isla de Man","label":"Isla de Man"},{"value":"Isla de Navidad","label":"Isla de Navidad"},{"value":"Isla de Norfolk","label":"Isla de Norfolk"},{"value":"Islandia","label":"Islandia"},{"value":"Islas Caimán","label":"Islas Caimán"},{"value":"Islas Cocos o Islas Keeling","label":"Islas Cocos o Islas Keeling"},{"value":"Islas Cook","label":"Islas Cook"},{"value":"Islas Faroe","label":"Islas Faroe"},{"value":"Islas Georgias del Sur y Sandwich del Sur","label":"Islas Georgias del Sur y Sandwich del Sur"},{"value":"Islas Heard y McDonald","label":"Islas Heard y McDonald"},{"value":"Islas Malvinas","label":"Islas Malvinas"},{"value":"Islas Marianas del Norte","label":"Islas Marianas del Norte"},{"value":"Islas Marshall","label":"Islas Marshall"},{"value":"Islas Pitcairn","label":"Islas Pitcairn"},{"value":"Islas Salomón","label":"Islas Salomón"},{"value":"Islas Svalbard y Jan Mayen","label":"Islas Svalbard y Jan Mayen"},{"value":"Islas Tokelau","label":"Islas Tokelau"},{"value":"Islas Turks y Caicos","label":"Islas Turks y Caicos"},{"value":"Islas Ultramarinas Menores de Estados Unidos","label":"Islas Ultramarinas Menores de Estados Unidos"},{"value":"Islas Vírgenes de los Estados Unidos","label":"Islas Vírgenes de los Estados Unidos"},{"value":"Islas Vírgenes del Reino Unido","label":"Islas Vírgenes del Reino Unido"},{"value":"Israel","label":"Israel"},{"value":"Italia","label":"Italia"},{"value":"Jamaica","label":"Jamaica"},{"value":"Japón","label":"Japón"},{"value":"Jersey","label":"Jersey"},{"value":"Jordania","label":"Jordania"},{"value":"Kazajistán","label":"Kazajistán"},{"value":"Kenia","label":"Kenia"},{"value":"Kirguizistán","label":"Kirguizistán"},{"value":"Kiribati","label":"Kiribati"},{"value":"Kosovo","label":"Kosovo"},{"value":"Kuwait","label":"Kuwait"},{"value":"Laos","label":"Laos"},{"value":"Lesotho","label":"Lesotho"},{"value":"Letonia","label":"Letonia"},{"value":"Liberia","label":"Liberia"},{"value":"Libia","label":"Libia"},{"value":"Liechtenstein","label":"Liechtenstein"},{"value":"Lituania","label":"Lituania"},{"value":"Luxemburgo","label":"Luxemburgo"},{"value":"Líbano","label":"Líbano"},{"value":"Macao","label":"Macao"},{"value":"Macedonia del Norte","label":"Macedonia del Norte"},{"value":"Madagascar","label":"Madagascar"},{"value":"Malasia","label":"Malasia"},{"value":"Malawi","label":"Malawi"},{"value":"Maldivas","label":"Maldivas"},{"value":"Mali","label":"Mali"},{"value":"Malta","label":"Malta"},{"value":"Marruecos","label":"Marruecos"},{"value":"Martinica","label":"Martinica"},{"value":"Mauricio","label":"Mauricio"},{"value":"Mauritania","label":"Mauritania"},{"value":"Mayotte","label":"Mayotte"},{"value":"Micronesia","label":"Micronesia"},{"value":"Moldavia","label":"Moldavia"},{"value":"Mongolia","label":"Mongolia"},{"value":"Montenegro","label":"Montenegro"},{"value":"Montserrat","label":"Montserrat"},{"value":"Mozambique","label":"Mozambique"},{"value":"Myanmar","label":"Myanmar"},{"value":"México","label":"México"},{"value":"Mónaco","label":"Mónaco"},{"value":"Namibia","label":"Namibia"},{"value":"Nauru","label":"Nauru"},{"value":"Nepal","label":"Nepal"},{"value":"Nicaragua","label":"Nicaragua"},{"value":"Nigeria","label":"Nigeria"},{"value":"Niue","label":"Niue"},{"value":"Noruega","label":"Noruega"},{"value":"Nueva Caledonia","label":"Nueva Caledonia"},{"value":"Nueva Zelanda","label":"Nueva Zelanda"},{"value":"Níger","label":"Níger"},{"value":"Omán","label":"Omán"},{"value":"Pakistán","label":"Pakistán"},{"value":"Palau","label":"Palau"},{"value":"Palestina","label":"Palestina"},{"value":"Panamá","label":"Panamá"},{"value":"Papúa Nueva Guinea","label":"Papúa Nueva Guinea"},{"value":"Paraguay","label":"Paraguay"},{"value":"Países Bajos","label":"Países Bajos"},{"value":"Perú","label":"Perú"},{"value":"Polinesia Francesa","label":"Polinesia Francesa"},{"value":"Polonia","label":"Polonia"},{"value":"Portugal","label":"Portugal"},{"value":"Puerto Rico","label":"Puerto Rico"},{"value":"Reino Unido","label":"Reino Unido"},{"value":"República Centroafricana","label":"República Centroafricana"},{"value":"República Dominicana","label":"República Dominicana"},{"value":"República Eslovaca","label":"República Eslovaca"},{"value":"República de Sudáfrica","label":"República de Sudáfrica"},{"value":"Reunión","label":"Reunión"},{"value":"Ruanda","label":"Ruanda"},{"value":"Rumania","label":"Rumania"},{"value":"Rusia","label":"Rusia"},{"value":"Sahara Occidental","label":"Sahara Occidental"},{"value":"Saint Martin","label":"Saint Martin"},{"value":"Samoa","label":"Samoa"},{"value":"Samoa Americana","label":"Samoa Americana"},{"value":"San Bartolomé","label":"San Bartolomé"},{"value":"San Cristóbal y Nieves","label":"San Cristóbal y Nieves"},{"value":"San Marino","label":"San Marino"},{"value":"San Pedro y Miquelón","label":"San Pedro y Miquelón"},{"value":"San Vicente y Granadinas","label":"San Vicente y Granadinas"},{"value":"Santa Elena, Ascensión y Tristán de Acuña","label":"Santa Elena, Ascensión y Tristán de Acuña"},{"value":"Santa Lucía","label":"Santa Lucía"},{"value":"Santo Tomé y Príncipe","label":"Santo Tomé y Príncipe"},{"value":"Senegal","label":"Senegal"},{"value":"Serbia","label":"Serbia"},{"value":"Seychelles","label":"Seychelles"},{"value":"Sierra Leone","label":"Sierra Leone"},{"value":"Singapur","label":"Singapur"},{"value":"Sint Maarten","label":"Sint Maarten"},{"value":"Siria","label":"Siria"},{"value":"Somalia","label":"Somalia"},{"value":"Sri Lanka","label":"Sri Lanka"},{"value":"Suazilandia","label":"Suazilandia"},{"value":"Sudán","label":"Sudán"},{"value":"Sudán del Sur","label":"Sudán del Sur"},{"value":"Suecia","label":"Suecia"},{"value":"Suiza","label":"Suiza"},{"value":"Surinam","label":"Surinam"},{"value":"Tailandia","label":"Tailandia"},{"value":"Taiwán","label":"Taiwán"},{"value":"Tanzania","label":"Tanzania"},{"value":"Tayikistán","label":"Tayikistán"},{"value":"Territorio Británico del Océano Índico","label":"Territorio Británico del Océano Índico"},{"value":"Tierras Australes y Antárticas Francesas","label":"Tierras Australes y Antárticas Francesas"},{"value":"Timor Oriental","label":"Timor Oriental"},{"value":"Togo","label":"Togo"},{"value":"Tonga","label":"Tonga"},{"value":"Trinidad y Tobago","label":"Trinidad y Tobago"},{"value":"Turkmenistán","label":"Turkmenistán"},{"value":"Turquía","label":"Turquía"},{"value":"Tuvalu","label":"Tuvalu"},{"value":"Túnez","label":"Túnez"},{"value":"Ucrania","label":"Ucrania"},{"value":"Uganda","label":"Uganda"},{"value":"Uruguay","label":"Uruguay"},{"value":"Uzbekistán","label":"Uzbekistán"},{"value":"Vanuatu","label":"Vanuatu"},{"value":"Venezuela","label":"Venezuela"},{"value":"Vietnam","label":"Vietnam"},{"value":"Wallis y Futuna","label":"Wallis y Futuna"},{"value":"Yemen","label":"Yemen"},{"value":"Zambia","label":"Zambia"},{"value":"Zimbabue","label":"Zimbabue"}]
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(countries);
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    country: "",
  });
  const [err, setErr] = useState({});

  const setLogin = async (value) => {
    try {
        return await AsyncStorage.setItem('User', JSON.stringify(value))
    } catch (error) {
       console.error('AsyncStorage#setItem error: ' + error.message);
    }
  }
  //UseEffect limpiar estados

  function handleSubmit(e) {
    setErr(validateInput(input,isSpanish));
    if (!(Object.keys(err).length > 0)) {
      dispatch(
        PostUser({
          email: input.email,
          username: input.username,
          password: input.password,
          country: input.country,
          first: true,
        })
      );
      dispatch(getUser());
      const User = allUser.Request.find((e) => (e.username.toLowerCase() === input.username.toLowerCase()))
      dispatch(postLogin(User))
      dispatch(first(true))
      navigation.navigate("Login")
    }
  }

  function handleInputChange(type, text) {
    setInput({
      ...input,
      [type]: text,
    });
    setErr(validateInput({ ...input, [type]: text },isSpanish));
    if (!(Object.keys(validateInput({ ...input, [type]: text },isSpanish)).length > 0)) {
      setIsDisabled(false);
    }
  }

  return (
    // <ScrollView style={tw`pt-8 bg-gray-900`}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={tw`flex h-full items-center justify-center pt-10 bg-gray-900 `}
      >
        <View style={tw`flex`}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-white text-lg text-left mb-0.5`}>{isSpanish ? 'Correo electrónico' : "e-Mail" }</Text>
            <TextInput
              type="email"
              onChangeText={(e) => handleInputChange("email", e)}
              placeholder={isSpanish ? 'Correo electrónico...' : "e-Mail..." }
              placeholderTextColor="#6f6f6f"
              style={tw`pl-3 mb-1 w-70 h-10 rounded-lg bg-gray-800 text-white`}
            ></TextInput>
            <Text style={tw`text-red-500 text-xs text-left mb-1`}>
              {err.email}
            </Text>
          </View>

          <View style={tw`flex flex-col`}>
            <Text style={tw`text-white text-lg text-left mb-0.5`}>{isSpanish ? 'Nombre de Usuario' : "Username" }</Text>
            <TextInput
              type="username"
              onChangeText={(e) => handleInputChange("username", e)}
              placeholder={isSpanish ? 'Nombre de Usuario...' : "Username..." }
              placeholderTextColor="#6f6f6f"
              style={tw`pl-3 mb-1 w-70 h-10 rounded-lg bg-gray-800 text-white`}
            ></TextInput>
            <Text style={tw`text-red-500 text-xs text-left mb-1`}>
              {err.username}
            </Text>
          </View>

          <View style={tw`flex flex-col`}>
            <Text style={tw`text-white text-lg text-left mb-0.5`}>{isSpanish ? 'Contraseña' : "Password" }</Text>
            <TextInput
              type="password"
              secureTextEntry={true}
              onChangeText={(e) => handleInputChange("password", e)}
              placeholder={isSpanish ? 'Contraseña...' : "Password..." }
              placeholderTextColor="#6f6f6f"
              style={tw`pl-3 mb-1 w-70 h-10 rounded-lg bg-gray-800 text-white`}
            ></TextInput>
            <Text style={tw`text-red-500 text-xs text-left mb-1`}>
              {err.password}
            </Text>
          </View>

          <View style={tw`flex flex-col`}>
            <Text style={tw`text-white text-lg text-left mb-0.5`}>
            {isSpanish ? 'Repetir Contraseña' : "Repeat Password" }
            </Text>
            <TextInput
              type="repeatPassword"
              secureTextEntry={true}
              onChangeText={(e) => handleInputChange("repeatPassword", e)}
              placeholder={isSpanish ? 'Repetir Contraseña...' : "Repeat Password..." }
              placeholderTextColor="#6f6f6f"
              style={tw`pl-3 mb-1 w-70 h-10 rounded-lg bg-gray-800 text-white`}
            ></TextInput>
            <Text style={tw`text-red-500 text-xs text-left mb-1`}>
              {err.repeatPassword}
            </Text>
          </View>

          <View style={tw`flex flex-col`}>
            <Text style={tw`text-white text-lg text-left mb-0.5`}>{isSpanish ? 'Pais' : "Country" }</Text>
            <DropDownPicker onPress={Keyboard.dismiss} accessible={false}
              style={tw`border-solid border-0 w-3/5 h-8 m-0 flex justify-center items-center bg-gray-800 rounded-lg z-0`}
              textStyle={tw`text-gray-600`}
              open={open}
              value={value}
              items={items}
              min={1}
              max={1}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              arrowIconStyle={{ tintColor: "white" }}
              onSelectItem={(e) => handleInputChange("country", e.value)}
            />
            <Text style={tw`text-red-500 text-xs text-left mt-5`}>
              {err.country}
            </Text>
          </View>
        </View>

        {isDisabled ? (
          <TouchableOpacity
            disabled
            onPress={(e) => handleSubmit(e)}
            style={tw`bg-gray-600 px-8 py-2 rounded-lg mt-5 w-50`}
          >
            <Text style={tw`text-gray-500 text-center font-bold`}>{isSpanish ? 'REGISTRATE' : "REGISTER" }</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={(e) => {handleSubmit(e);touchSound(soundOn);}}
            style={tw`bg-gray-800 px-8 py-2 rounded-lg mt-5 w-50`}
          >
            <Text style={tw`text-white text-center font-bold`}>{isSpanish ? 'REGISTRATE' : "REGISTER" }</Text>
          </TouchableOpacity>
        )}

        <View style={tw`flex flex-row mt-5 justify-center items-center`}>
          <View
            style={tw`w-30 mr-5 border-b border-solid border-gray-400`}
          ></View>

          <Text style={tw`text-gray-100 text-xs`}>{isSpanish ? 'O' : "OR" }</Text>
          <View
            style={tw`w-30 ml-5 border-b border-solid border-gray-400`}
          ></View>
        </View>

        <View style={tw`flex flex-row justify-center items-center mt-5`}>
          {/* <TouchableOpacity
            style={tw`flex justify-center items-center bg-[#4267B2] px-8 py-2 rounded-lg mr-5 w-15 h-15`}
          >
            <View style={tw`w-8 h-8`}>
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <Path
                  fill="#FFF"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </Svg>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={tw`flex flex-row justify-around items-center bg-[#FFFFFF] px-8 py-2 rounded-xl w-60 h-12`}
            disabled={!request}
            onPress={() => {
              promptAsync();
              touchSound(soundOn);
              }}
          >
            <View style={tw`w-6 h-6 mr-5`}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 326667 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <Path
                  d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                  fill="#4285f4"
                />
                <Path
                  d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                  fill="#34a853"
                />
                <Path
                  d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                  fill="#fbbc04"
                />
                <Path
                  d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                  fill="#ea4335"
                />
              </Svg>
            </View>
            <Text style={tw`text-base font-bold`}>{isSpanish ? 'Registrate con google' : "Register whit Google" }</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`mt-5`}>
          <Text style={tw`text-white text-center font-bold`}>
            {isSpanish ? 'Si ya tenes cuenta' : "If you have acount" },
            <Text
              style={tw`text-blue-200 text-center font-bold`}
              onPress={() => {navigation.navigate("Login");touchSound(soundOn);}}
            >
              &nbsp;{isSpanish ? 'Ingresa' : "Login" }
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    //</ScrollView>
  );
}
