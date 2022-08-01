import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { gameAction, getAllCountries, PostGame, newGame, setCountrie } from "../../redux/actions/index";
import { setTestDeviceIDAsync, AdMobInterstitial } from "expo-ads-admob";
import Autocomplete from 'react-native-autocomplete-input';
//onpress white flag render confirm message

export default function Footer() {
  const dispatch = useDispatch();
  var attemp = {};
  const [input, setInput] = useState("");
  const [countryOfDay, setCountryOfDay] = useState("");
  const countries = useSelector((state) => state.countries);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const login = useSelector((state) => state.login);
  const listOfAttemps = useSelector((state) => state.attemps);
  const [win, setWin] = useState(false)

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  
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
    if (
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
          console.log(login)
          dispatch(PostGame({countrie: countryOfDay.name, winned: true, time: 120, attempts: listOfAttemps.length + 1, UserId: login.Request.id, points: 5000})) 
          setWin(true)
          if(!(login.Request.premium)){
            console.log("a mostrar ads")
            setTimeout(()=>{showAds()}, 1000)
          }
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

  return (
    <View style={tw`flex h-1/6 items-center justify-center bg-gray-900`}>
      <View
        style={tw`w-70 mt--50 mb-5 border-b border-solid border-gray-400`}
      ></View>
      <View style={tw`flex flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-lg mr-5 w-10 h-15`}
        >
          <View style={tw`w-10 h-10`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path
                fill="#000"
                d="M64 496c0 8.8-7.25 16-16 16H16c-8.75 0-16-7.2-16-16V32C0 14.25 14.25 0 32 0s32 14.25 32 32v464zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87C160.9.306 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter a country..."
          placeholderTextColor="#6f6f6f"
          style={tw`pl-3 mr-5 w-45 h-15 rounded-lg bg-gray-800 text-white text-lg`}
          onChangeText={(text) => setInput(text)}
          value={input}
        ></TextInput>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-lg w-10 h-15`}
          onPress={!win ? (e) => handleSubmit(e) : () => {setWin(false); dispatch(newGame());}}
        >
          {win && listOfAttemps.length > 0 ? 
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
