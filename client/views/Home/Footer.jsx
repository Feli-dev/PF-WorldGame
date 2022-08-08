import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { gameAction, getAllCountries, PostGame, giveUp,newGame, setCountrie } from "../../redux/actions/index";
import { setTestDeviceIDAsync, AdMobInterstitial } from "expo-ads-admob";
import { touchSound, backSound, looseSound, winSound} from '../../utils/sounds';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

export default function Footer() {
  const dispatch = useDispatch();
  var attemp = {};
  const isSpanish = useSelector((state) => state.isSpanish);
  const [input, setInput] = useState("");
  const [countryOfDay, setCountryOfDay] = useState("");
  const countries = useSelector((state) => state.countries);
  const soundOn = useSelector((state) => state.soundOn);
  const login = useSelector((state) => state.login);
  const listOfAttemps = useSelector((state) => state.attemps);
  const [win, setWin] = useState(false)
  const GV = useSelector((state) => state.giveUp);
  const [modalVisible, setModalVisible] = useState(false);
  const arrAutocomplete = [
    { "id": 214, "title": "Argentina" },
    { "id": 221, "title": "Uruguay" },
    { "id": 1, "title": "Etiopía" },
    { "id": 2, "title": "Montserrat" },
    { "id": 3, "title": "Argelia" },
    { "id": 4, "title": "Mayotte" },
    { "id": 5, "title": "Perú" },
    { "id": 6, "title": "Azerbaiyán" },
    { "id": 7, "title": "Sudán del Sur" },
    { "id": 8, "title": "Samoa" },
    { "id": 9, "title": "Irlanda" },
    { "id": 10, "title": "Camerún" },
    { "id": 11, "title": "Vietnam" },
    { "id": 12, "title": "Chipre" },
    { "id": 13, "title": "Omán" },
    { "id": 14, "title": "Lesotho" },
    { "id": 15, "title": "Rumania" },
    { "id": 16, "title": "Islas Ultramarinas Menores de Estados Unidos" },
    { "id": 17, "title": "Bosnia y Herzegovina" },
    { "id": 18, "title": "Santa Elena, Ascensión y Tristán de Acuña" },
    { "id": 19, "title": "Islas Heard y McDonald" },
    { "id": 20, "title": "Isla de Man" },
    { "id": 21, "title": "Antártida" },
    { "id": 22, "title": "Botswana" },
    { "id": 23, "title": "Kenia" },
    { "id": 24, "title": "Papúa Nueva Guinea" },
    { "id": 25, "title": "Burkina Faso" },
    { "id": 26, "title": "Burundi" },
    { "id": 27, "title": "Siria" },
    { "id": 28, "title": "Anguilla" },
    { "id": 29, "title": "Benín" },
    { "id": 30, "title": "Bután" },
    { "id": 31, "title": "Guadalupe" },
    { "id": 32, "title": "Libia" },
    { "id": 33, "title": "República Eslovaca" },
    { "id": 34, "title": "San Cristóbal y Nieves" },
    { "id": 35, "title": "Dinamarca" },
    { "id": 36, "title": "Groenlandia" },
    { "id": 37, "title": "Corea del Sur" },
    { "id": 38, "title": "Irak" },
    { "id": 39, "title": "Alemania" },
    { "id": 40, "title": "Islas Turks y Caicos" },
    { "id": 41, "title": "Comoras" },
    { "id": 42, "title": "Túnez" },
    { "id": 43, "title": "Estonia" },
    { "id": 44, "title": "Australia" },
    { "id": 45, "title": "Francia" },
    { "id": 46, "title": "Luxemburgo" },
    { "id": 47, "title": "Macao" },
    { "id": 48, "title": "Israel" },
    { "id": 49, "title": "Reunión" },
    { "id": 50, "title": "México" },
    { "id": 51, "title": "Bermudas" },
    { "id": 52, "title": "Aruba" },
    { "id": 53, "title": "Mauricio" },
    { "id": 54, "title": "Dominica" },
    { "id": 55, "title": "Alandia" },
    { "id": 56, "title": "Turquía" },
    { "id": 57, "title": "Arabia Saudí" },
    { "id": 58, "title": "Italia" },
    { "id": 59, "title": "Sri Lanka" },
    { "id": 60, "title": "Moldavia" },
    { "id": 61, "title": "Islas Cook" },
    { "id": 62, "title": "Nueva Caledonia" },
    { "id": 63, "title": "San Pedro y Miquelón" },
    { "id": 64, "title": "Puerto Rico" },
    { "id": 65, "title": "Albania" },
    { "id": 66, "title": "Santo Tomé y Príncipe" },
    { "id": 67, "title": "Sierra Leone" },
    { "id": 68, "title": "Wallis y Futuna" },
    { "id": 69, "title": "Guyana" },
    { "id": 70, "title": "Curazao" },
    { "id": 71, "title": "Iran" },
    { "id": 72, "title": "Suecia" },
    { "id": 73, "title": "Estados Unidos" },
    { "id": 74, "title": "Singapur" },
    { "id": 75, "title": "San Vicente y Granadinas" },
    { "id": 76, "title": "Islas Vírgenes del Reino Unido" },
    { "id": 77, "title": "Vanuatu" },
    { "id": 78, "title": "Gabón" },
    { "id": 79, "title": "Isla Bouvet" },
    { "id": 80, "title": "Islandia" },
    { "id": 81, "title": "Kiribati" },
    { "id": 82, "title": "Niue" },
    { "id": 83, "title": "Seychelles" },
    { "id": 84, "title": "Tayikistán" },
    { "id": 85, "title": "Zambia" },
    { "id": 86, "title": "Fiyi" },
    { "id": 87, "title": "Kazajistán" },
    { "id": 88, "title": "Bahamas" },
    { "id": 89, "title": "Jersey" },
    { "id": 90, "title": "Islas Malvinas" },
    { "id": 91, "title": "Costa Rica" },
    { "id": 92, "title": "Saint Martin" },
    { "id": 93, "title": "Myanmar" },
    { "id": 94, "title": "Canadá" },
    { "id": 95, "title": "Marruecos" },
    { "id": 96, "title": "Mongolia" },
    { "id": 97, "title": "Suiza" },
    { "id": 98, "title": "Guinea-Bisáu" },
    { "id": 99, "title": "Liechtenstein" },
    { "id": 100, "title": "Palau" },
    { "id": 101, "title": "Kirguizistán" },
    { "id": 102, "title": "Haití" },
    { "id": 103, "title": "Bélgica" },
    { "id": 104, "title": "Malawi" },
    { "id": 105, "title": "India" },
    { "id": 106, "title": "Zimbabue" },
    { "id": 107, "title": "Suazilandia" },
    { "id": 108, "title": "Hong Kong" },
    { "id": 109, "title": "Uganda" },
    { "id": 110, "title": "Pakistán" },
    { "id": 111, "title": "Grecia" },
    { "id": 112, "title": "Madagascar" },
    { "id": 113, "title": "El Salvador" },
    { "id": 114, "title": "Guayana Francesa" },
    { "id": 115, "title": "Brasil" },
    { "id": 116, "title": "Islas Caimán" },
    { "id": 117, "title": "China" },
    { "id": 118, "title": "Chequia" },
    { "id": 119, "title": "Afganistán" },
    { "id": 120, "title": "Antigua y Barbuda" },
    { "id": 121, "title": "Congo" },
    { "id": 122, "title": "Gambia" },
    { "id": 123, "title": "Filipinas" },
    { "id": 124, "title": "Austria" },
    { "id": 125, "title": "Islas Svalbard y Jan Mayen" },
    { "id": 126, "title": "Yemen" },
    { "id": 127, "title": "Santa Lucía" },
    { "id": 128, "title": "Islas Faroe" },
    { "id": 129, "title": "Georgia" },
    { "id": 130, "title": "Ruanda" },
    { "id": 131, "title": "Djibouti" },
    { "id": 132, "title": "Angola" },
    { "id": 133, "title": "Países Bajos" },
    { "id": 134, "title": "Bulgaria" },
    { "id": 135, "title": "Paraguay" },
    { "id": 136, "title": "Congo (Rep. Dem.)" },
    { "id": 137, "title": "Sudán" },
    { "id": 138, "title": "Somalia" },
    { "id": 139, "title": "San Bartolomé" },
    { "id": 140, "title": "Finlandia" },
    { "id": 141, "title": "Bangladesh" },
    { "id": 142, "title": "Palestina" },
    { "id": 143, "title": "Togo" },
    { "id": 144, "title": "Malasia" },
    { "id": 145, "title": "Jordania" },
    { "id": 146, "title": "Letonia" },
    { "id": 147, "title": "Barbados" },
    { "id": 148, "title": "República Dominicana" },
    { "id": 149, "title": "Cabo Verde" },
    { "id": 150, "title": "Tierras Australes y Antárticas Francesas" },
    { "id": 151, "title": "Guatemala" },
    { "id": 152, "title": "Sahara Occidental" },
    { "id": 153, "title": "Malta" },
    { "id": 154, "title": "Andorra" },
    { "id": 155, "title": "Emiratos Árabes Unidos" },
    { "id": 156, "title": "Maldivas" },
    { "id": 157, "title": "Costa de Marfil" },
    { "id": 158, "title": "Camboya" },
    { "id": 159, "title": "Brunei" },
    { "id": 160, "title": "Mónaco" },
    { "id": 161, "title": "Guernsey" },
    { "id": 162, "title": "Namibia" },
    { "id": 163, "title": "Timor Oriental" },
    { "id": 164, "title": "Nueva Zelanda" },
    { "id": 165, "title": "Ciudad del Vaticano" },
    { "id": 166, "title": "Ecuador" },
    { "id": 167, "title": "Ghana" },
    { "id": 168, "title": "Líbano" },
    { "id": 169, "title": "Japón" },
    { "id": 170, "title": "Chile" },
    { "id": 171, "title": "Mali" },
    { "id": 172, "title": "Macedonia del Norte" },
    { "id": 173, "title": "Sint Maarten" },
    { "id": 174, "title": "Polinesia Francesa" },
    { "id": 175, "title": "Trinidad y Tobago" },
    { "id": 176, "title": "Croacia" },
    { "id": 177, "title": "Laos" },
    { "id": 178, "title": "Níger" },
    { "id": 179, "title": "Corea del Norte" },
    { "id": 180, "title": "Indonesia" },
    { "id": 181, "title": "Guinea Ecuatorial" },
    { "id": 182, "title": "Noruega" },
    { "id": 183, "title": "Catar" },
    { "id": 184, "title": "Eritrea" },
    { "id": 185, "title": "Islas Georgias del Sur y Sandwich del Sur" },
    { "id": 186, "title": "Chad" },
    { "id": 187, "title": "Hungría" },
    { "id": 188, "title": "Bielorrusia" },
    { "id": 189, "title": "Islas Vírgenes de los Estados Unidos" },
    { "id": 190, "title": "Islas Marianas del Norte" },
    { "id": 191, "title": "Venezuela" },
    { "id": 192, "title": "San Marino" },
    { "id": 193, "title": "Bolivia" },
    { "id": 194, "title": "Serbia" },
    { "id": 195, "title": "República de Sudáfrica" },
    { "id": 196, "title": "Colombia" },
    { "id": 197, "title": "Gibraltar" },
    { "id": 198, "title": "Mozambique" },
    { "id": 199, "title": "Nicaragua" },
    { "id": 200, "title": "Rusia" },
    { "id": 201, "title": "Panamá" },
    { "id": 202, "title": "Tuvalu" },
    { "id": 203, "title": "Montenegro" },
    { "id": 204, "title": "Turkmenistán" },
    { "id": 205, "title": "Kosovo" },
    { "id": 206, "title": "Eslovenia" },
    { "id": 207, "title": "Armenia" },
    { "id": 208, "title": "Senegal" },
    { "id": 209, "title": "Taiwán" },
    { "id": 210, "title": "Portugal" },
    { "id": 211, "title": "Martinica" },
    { "id": 212, "title": "República Centroafricana" },
    { "id": 213, "title": "Cuba" },
    { "id": 215, "title": "Tonga" },
    { "id": 216, "title": "Nepal" },
    { "id": 217, "title": "Islas Tokelau" },
    { "id": 218, "title": "Tanzania" },
    { "id": 219, "title": "Nigeria" },
    { "id": 220, "title": "Kuwait" },
    { "id": 222, "title": "Islas Pitcairn" },
    { "id": 223, "title": "Guam" },
    { "id": 224, "title": "Reino Unido" },
    { "id": 225, "title": "Mauritania" },
    { "id": 226, "title": "Surinam" },
    { "id": 227, "title": "España" },
    { "id": 228, "title": "Liberia" },
    { "id": 229, "title": "Egipto" },
    { "id": 230, "title": "Belice" },
    { "id": 231, "title": "Grenada" },
    { "id": 232, "title": "Ucrania" },
    { "id": 233, "title": "Lituania" },
    { "id": 234, "title": "Micronesia" },
    { "id": 235, "title": "Polonia" },
    { "id": 236, "title": "Territorio Británico del Océano Índico" },
    { "id": 237, "title": "Islas Salomón" },
    { "id": 238, "title": "Tailandia" },
    { "id": 239, "title": "Isla de Navidad" },
    { "id": 240, "title": "Uzbekistán" },
    { "id": 241, "title": "Islas Marshall" },
    { "id": 242, "title": "Samoa Americana" },
    { "id": 243, "title": "Islas Cocos o Islas Keeling" },
    { "id": 244, "title": "Caribe Neerlandés" },
    { "id": 245, "title": "Nauru" },
    { "id": 246, "title": "Isla de Norfolk" },
    { "id": 247, "title": "Guinea" },
    { "id": 248, "title": "Jamaica" },
    { "id": 249, "title": "Honduras" },
    { "id": 250, "title": "Bahrein" }
  ]

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  useEffect(() => {
    if(login.length === 0){
        setWin(false);
        dispatch(newGame());
        dispatch(giveUp(false));
    }
  }, [login]);
  
  useEffect(() => {
    if(win===false){
      let countrie = countries[Math.floor(Math.random() * 249)];
      setCountryOfDay(countrie);
      dispatch(setCountrie(countrie));
    }
  }, [win]);

  async function chargeAds(){
    await setTestDeviceIDAsync('EMULATOR').then(()=>{},()=>{});
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/8691691433').then(()=>{},()=>{});
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false}).then(()=>{},()=>{});
  }
  
  async function showAds(){
    await AdMobInterstitial.showAdAsync().then(()=>{},()=>{});
  }

  if(!(login?.Request?.premium)){
    chargeAds()
  }
  // const handleChange = (e)=>{
  //   e.preventDefault();
  //   setInput(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('countryOfDay---->',countryOfDay);
    if ((input !== "") &&
      countries.some((el) => {
        if (el.name.toLowerCase() === input.trim().toLowerCase()) {
          attemp = el;
          return true;
        }
      })
    ) {
      if (
        !listOfAttemps.some(
          (el) => el.name.toLowerCase() === attemp.name.toLowerCase()
        )
      ) {
        if (!listOfAttemps.some((el) => el.name.toLowerCase() === countryOfDay.name.toLowerCase())){
          dispatch(gameAction(countryOfDay, attemp));
        }
        if(attemp.name.toLowerCase() === countryOfDay.name.toLowerCase()){
          dispatch(PostGame({countrie: countryOfDay.name, winned: true, time: 120, attempts: listOfAttemps.length + 1, UserId: login.Request.id, points: 5000})) 
          setWin(true)
          if(!(login.Request.premium)){
            console.log("a mostrar ads")
            setTimeout(()=>{showAds()}, 1000)
          }
          // winSound();
          console.log("Ya encontraste el país, felicitaciones!");
        }
      } else {
        console.log("Ya has probado con ese país, intenta con otra opción!");
      }
      setInput("");
      attemp = {};
    } else {
      console.log("No encontré el país");
    }
  };

  const handleGiveUp = (e) =>{
    e.preventDefault();
    dispatch(
      PostGame({countrie: countryOfDay.name, winned: false, time: 120, attempts: listOfAttemps.length , UserId: login.Request.id, points:5000})
      );
      setWin(true)
      if(!(login.Request.premium)){
        console.log("a mostrar ads")
        setTimeout(()=>{showAds()}, 1000)
      }
      dispatch(giveUp(true));
      // looseSound();
    }
    
  return (
    <View style={tw`flex h-1/6 items-center justify-center bg-gray-900`}>
      <View
        style={tw`w-70 mt--50 mb-5 border-b border-solid border-gray-400`}
      ></View>
      <View style={tw`flex flex-row justify-center items-center`}>
          <View style={tw`flex items-center justify-center rounded-lg`}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={tw`flex items-center justify-center mt-75`}>
                <View style={tw`flex items-center justify-evenly bg-gray-300 rounded-md w-60 h-40`}>
                  <Text style={tw`text-center text-lg text-black font-bold`}> {isSpanish?"¿Seguro que quieres rendirte?":"Sure you want to give up?"} </Text>
                  <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity
                      style={tw`rounded-lg bg-green-400 pt-1 pb-1 pr-2 pl-2 mr-10`}
                      onPress={(e) => {setModalVisible(!modalVisible); handleGiveUp(e); touchSound(soundOn);}}
                    >
                      <Text style={tw`text-sm font-bold text-white`}>{isSpanish?"Si":"Yes"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`rounded-lg bg-red-400 pt-1 pb-1 pr-2 pl-2`}
                      onPress={() => {setModalVisible(!modalVisible); backSound(soundOn)}}
                    >
                      <Text style={tw`text-sm font-bold text-white`}>{isSpanish?"No":"No"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-lg mr-5 w-10 h-15`}
          onPress={!win ? (e) => {setModalVisible(true); touchSound(soundOn);} : () => {backSound(soundOn); setWin(false); dispatch(newGame()); dispatch(giveUp(false));}}
        >
          { win ?
            <View style={tw`w-10 h-10`}>
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                <Path fill="#000" d="M496 48v144c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94 14.22-10.53 34.22-7.75 44.81 6.375 10.59 14.16 7.75 34.22-6.375 44.81-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256S132.5 32.1 255.9 32.1c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32s32 14.31 32 32z" />
              </Svg>
            </View>
            :
            <View style={tw`w-10 h-10`}>
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <Path
                  fill="#000"
                  d="M64 496c0 8.8-7.25 16-16 16H16c-8.75 0-16-7.2-16-16V32C0 14.25 14.25 0 32 0s32 14.25 32 32v464zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87C160.9.306 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
                />
              </Svg>
            </View>
          }
        </TouchableOpacity>
        {/* <TextInput
          placeholder="Enter a country..."
          placeholderTextColor="#6f6f6f"
          style={tw`pl-3 mr-5 w-45 h-15 rounded-lg bg-gray-800 text-white text-lg`}
          onChangeText={(text) => setInput(text)}
          value={input}
        ></TextInput> */}
        <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={true}
            textInputProps={{
              placeholder: isSpanish?"Introduzca un país":"Enter a country...",
              style: {color: "#000"},
            }}
            direction={"up"}
            onSelectItem={el => setInput(el?.title)}
            onChangeText={text => setInput(text)}
            suggestionsListMaxHeight={100}
            debounce={200}
            dataSet={arrAutocomplete}
            showChevron={false}
            emptyResultText={"Intenta nuevamente..."}
            containerStyle={tw`mr-5 w-40 h-10 rounded-lg bg-white text-lg`}
        />
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-lg w-10 h-15`}
          onPress={!win ? (e) => {handleSubmit(e); touchSound(soundOn);}: () => {console.log(12); backSound(soundOn); setWin(false); dispatch(newGame()); dispatch(giveUp(false));}}
        >
          {GV || (win && listOfAttemps.length > 0) ? 
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
              <Path fill="#000" d="M496 48v144c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94 14.22-10.53 34.22-7.75 44.81 6.375 10.59 14.16 7.75 34.22-6.375 44.81-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256S132.5 32.1 255.9 32.1c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32s32 14.31 32 32z" />
            </Svg>
          </View> :
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <Path
                fill="#000"
                d="M374.6 246.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.47 12.55 12.47 32.75-.03 45.25z"
              />
            </Svg>
          </View>
          }
        </TouchableOpacity>
      </View>
    </View>
  );
}
