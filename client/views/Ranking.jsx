import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import tw from "twrnc";
import { getRank, getAllCountries, filterByCountry, filterByTop } from "../redux/actions";

export default function Ranking() {
  const isSpanish= useSelector((state) => state.isSpanish);
  const ranked = useSelector((state) => state.rank_filter);
  const rank_total = useSelector((state) => state.rank);
  const allCountries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRank(500));
  }, []);

  const countries = [{ label: isSpanish ? "Todos los paises" : "All Countries", value: "All Countries" },{"value":"Afganistán","label":"Afganistán"},{"value":"Alandia","label":"Alandia"},{"value":"Albania","label":"Albania"},{"value":"Alemania","label":"Alemania"},{"value":"Andorra","label":"Andorra"},{"value":"Angola","label":"Angola"},{"value":"Anguilla","label":"Anguilla"},{"value":"Antigua y Barbuda","label":"Antigua y Barbuda"},{"value":"Antártida","label":"Antártida"},{"value":"Arabia Saudí","label":"Arabia Saudí"},{"value":"Argelia","label":"Argelia"},{"value":"Argentina","label":"Argentina"},{"value":"Armenia","label":"Armenia"},{"value":"Aruba","label":"Aruba"},{"value":"Australia","label":"Australia"},{"value":"Austria","label":"Austria"},{"value":"Azerbaiyán","label":"Azerbaiyán"},{"value":"Bahamas","label":"Bahamas"},{"value":"Bahrein","label":"Bahrein"},{"value":"Bangladesh","label":"Bangladesh"},{"value":"Barbados","label":"Barbados"},{"value":"Belice","label":"Belice"},{"value":"Benín","label":"Benín"},{"value":"Bermudas","label":"Bermudas"},{"value":"Bielorrusia","label":"Bielorrusia"},{"value":"Bolivia","label":"Bolivia"},{"value":"Bosnia y Herzegovina","label":"Bosnia y Herzegovina"},{"value":"Botswana","label":"Botswana"},{"value":"Brasil","label":"Brasil"},{"value":"Brunei","label":"Brunei"},{"value":"Bulgaria","label":"Bulgaria"},{"value":"Burkina Faso","label":"Burkina Faso"},{"value":"Burundi","label":"Burundi"},{"value":"Bután","label":"Bután"},{"value":"Bélgica","label":"Bélgica"},{"value":"Cabo Verde","label":"Cabo Verde"},{"value":"Camboya","label":"Camboya"},{"value":"Camerún","label":"Camerún"},{"value":"Canadá","label":"Canadá"},{"value":"Caribe Neerlandés","label":"Caribe Neerlandés"},{"value":"Catar","label":"Catar"},{"value":"Chad","label":"Chad"},{"value":"Chequia","label":"Chequia"},{"value":"Chile","label":"Chile"},{"value":"China","label":"China"},{"value":"Chipre","label":"Chipre"},{"value":"Ciudad del Vaticano","label":"Ciudad del Vaticano"},{"value":"Colombia","label":"Colombia"},{"value":"Comoras","label":"Comoras"},{"value":"Congo","label":"Congo"},{"value":"Congo (Rep. Dem.)","label":"Congo (Rep. Dem.)"},{"value":"Corea del Norte","label":"Corea del Norte"},{"value":"Corea del Sur","label":"Corea del Sur"},{"value":"Costa Rica","label":"Costa Rica"},{"value":"Costa de Marfil","label":"Costa de Marfil"},{"value":"Croacia","label":"Croacia"},{"value":"Cuba","label":"Cuba"},{"value":"Curazao","label":"Curazao"},{"value":"Dinamarca","label":"Dinamarca"},{"value":"Djibouti","label":"Djibouti"},{"value":"Dominica","label":"Dominica"},{"value":"Ecuador","label":"Ecuador"},{"value":"Egipto","label":"Egipto"},{"value":"El Salvador","label":"El Salvador"},{"value":"Emiratos Árabes Unidos","label":"Emiratos Árabes Unidos"},{"value":"Eritrea","label":"Eritrea"},{"value":"Eslovenia","label":"Eslovenia"},{"value":"España","label":"España"},{"value":"Estados Unidos","label":"Estados Unidos"},{"value":"Estonia","label":"Estonia"},{"value":"Etiopía","label":"Etiopía"},{"value":"Filipinas","label":"Filipinas"},{"value":"Finlandia","label":"Finlandia"},{"value":"Fiyi","label":"Fiyi"},{"value":"Francia","label":"Francia"},{"value":"Gabón","label":"Gabón"},{"value":"Gambia","label":"Gambia"},{"value":"Georgia","label":"Georgia"},{"value":"Ghana","label":"Ghana"},{"value":"Gibraltar","label":"Gibraltar"},{"value":"Grecia","label":"Grecia"},{"value":"Grenada","label":"Grenada"},{"value":"Groenlandia","label":"Groenlandia"},{"value":"Guadalupe","label":"Guadalupe"},{"value":"Guam","label":"Guam"},{"value":"Guatemala","label":"Guatemala"},{"value":"Guayana Francesa","label":"Guayana Francesa"},{"value":"Guernsey","label":"Guernsey"},{"value":"Guinea","label":"Guinea"},{"value":"Guinea Ecuatorial","label":"Guinea Ecuatorial"},{"value":"Guinea-Bisáu","label":"Guinea-Bisáu"},{"value":"Guyana","label":"Guyana"},{"value":"Haití","label":"Haití"},{"value":"Honduras","label":"Honduras"},{"value":"Hong Kong","label":"Hong Kong"},{"value":"Hungría","label":"Hungría"},{"value":"India","label":"India"},{"value":"Indonesia","label":"Indonesia"},{"value":"Irak","label":"Irak"},{"value":"Iran","label":"Iran"},{"value":"Irlanda","label":"Irlanda"},{"value":"Isla Bouvet","label":"Isla Bouvet"},{"value":"Isla de Man","label":"Isla de Man"},{"value":"Isla de Navidad","label":"Isla de Navidad"},{"value":"Isla de Norfolk","label":"Isla de Norfolk"},{"value":"Islandia","label":"Islandia"},{"value":"Islas Caimán","label":"Islas Caimán"},{"value":"Islas Cocos o Islas Keeling","label":"Islas Cocos o Islas Keeling"},{"value":"Islas Cook","label":"Islas Cook"},{"value":"Islas Faroe","label":"Islas Faroe"},{"value":"Islas Georgias del Sur y Sandwich del Sur","label":"Islas Georgias del Sur y Sandwich del Sur"},{"value":"Islas Heard y McDonald","label":"Islas Heard y McDonald"},{"value":"Islas Malvinas","label":"Islas Malvinas"},{"value":"Islas Marianas del Norte","label":"Islas Marianas del Norte"},{"value":"Islas Marshall","label":"Islas Marshall"},{"value":"Islas Pitcairn","label":"Islas Pitcairn"},{"value":"Islas Salomón","label":"Islas Salomón"},{"value":"Islas Svalbard y Jan Mayen","label":"Islas Svalbard y Jan Mayen"},{"value":"Islas Tokelau","label":"Islas Tokelau"},{"value":"Islas Turks y Caicos","label":"Islas Turks y Caicos"},{"value":"Islas Ultramarinas Menores de Estados Unidos","label":"Islas Ultramarinas Menores de Estados Unidos"},{"value":"Islas Vírgenes de los Estados Unidos","label":"Islas Vírgenes de los Estados Unidos"},{"value":"Islas Vírgenes del Reino Unido","label":"Islas Vírgenes del Reino Unido"},{"value":"Israel","label":"Israel"},{"value":"Italia","label":"Italia"},{"value":"Jamaica","label":"Jamaica"},{"value":"Japón","label":"Japón"},{"value":"Jersey","label":"Jersey"},{"value":"Jordania","label":"Jordania"},{"value":"Kazajistán","label":"Kazajistán"},{"value":"Kenia","label":"Kenia"},{"value":"Kirguizistán","label":"Kirguizistán"},{"value":"Kiribati","label":"Kiribati"},{"value":"Kosovo","label":"Kosovo"},{"value":"Kuwait","label":"Kuwait"},{"value":"Laos","label":"Laos"},{"value":"Lesotho","label":"Lesotho"},{"value":"Letonia","label":"Letonia"},{"value":"Liberia","label":"Liberia"},{"value":"Libia","label":"Libia"},{"value":"Liechtenstein","label":"Liechtenstein"},{"value":"Lituania","label":"Lituania"},{"value":"Luxemburgo","label":"Luxemburgo"},{"value":"Líbano","label":"Líbano"},{"value":"Macao","label":"Macao"},{"value":"Macedonia del Norte","label":"Macedonia del Norte"},{"value":"Madagascar","label":"Madagascar"},{"value":"Malasia","label":"Malasia"},{"value":"Malawi","label":"Malawi"},{"value":"Maldivas","label":"Maldivas"},{"value":"Mali","label":"Mali"},{"value":"Malta","label":"Malta"},{"value":"Marruecos","label":"Marruecos"},{"value":"Martinica","label":"Martinica"},{"value":"Mauricio","label":"Mauricio"},{"value":"Mauritania","label":"Mauritania"},{"value":"Mayotte","label":"Mayotte"},{"value":"Micronesia","label":"Micronesia"},{"value":"Moldavia","label":"Moldavia"},{"value":"Mongolia","label":"Mongolia"},{"value":"Montenegro","label":"Montenegro"},{"value":"Montserrat","label":"Montserrat"},{"value":"Mozambique","label":"Mozambique"},{"value":"Myanmar","label":"Myanmar"},{"value":"México","label":"México"},{"value":"Mónaco","label":"Mónaco"},{"value":"Namibia","label":"Namibia"},{"value":"Nauru","label":"Nauru"},{"value":"Nepal","label":"Nepal"},{"value":"Nicaragua","label":"Nicaragua"},{"value":"Nigeria","label":"Nigeria"},{"value":"Niue","label":"Niue"},{"value":"Noruega","label":"Noruega"},{"value":"Nueva Caledonia","label":"Nueva Caledonia"},{"value":"Nueva Zelanda","label":"Nueva Zelanda"},{"value":"Níger","label":"Níger"},{"value":"Omán","label":"Omán"},{"value":"Pakistán","label":"Pakistán"},{"value":"Palau","label":"Palau"},{"value":"Palestina","label":"Palestina"},{"value":"Panamá","label":"Panamá"},{"value":"Papúa Nueva Guinea","label":"Papúa Nueva Guinea"},{"value":"Paraguay","label":"Paraguay"},{"value":"Países Bajos","label":"Países Bajos"},{"value":"Perú","label":"Perú"},{"value":"Polinesia Francesa","label":"Polinesia Francesa"},{"value":"Polonia","label":"Polonia"},{"value":"Portugal","label":"Portugal"},{"value":"Puerto Rico","label":"Puerto Rico"},{"value":"Reino Unido","label":"Reino Unido"},{"value":"República Centroafricana","label":"República Centroafricana"},{"value":"República Dominicana","label":"República Dominicana"},{"value":"República Eslovaca","label":"República Eslovaca"},{"value":"República de Sudáfrica","label":"República de Sudáfrica"},{"value":"Reunión","label":"Reunión"},{"value":"Ruanda","label":"Ruanda"},{"value":"Rumania","label":"Rumania"},{"value":"Rusia","label":"Rusia"},{"value":"Sahara Occidental","label":"Sahara Occidental"},{"value":"Saint Martin","label":"Saint Martin"},{"value":"Samoa","label":"Samoa"},{"value":"Samoa Americana","label":"Samoa Americana"},{"value":"San Bartolomé","label":"San Bartolomé"},{"value":"San Cristóbal y Nieves","label":"San Cristóbal y Nieves"},{"value":"San Marino","label":"San Marino"},{"value":"San Pedro y Miquelón","label":"San Pedro y Miquelón"},{"value":"San Vicente y Granadinas","label":"San Vicente y Granadinas"},{"value":"Santa Elena, Ascensión y Tristán de Acuña","label":"Santa Elena, Ascensión y Tristán de Acuña"},{"value":"Santa Lucía","label":"Santa Lucía"},{"value":"Santo Tomé y Príncipe","label":"Santo Tomé y Príncipe"},{"value":"Senegal","label":"Senegal"},{"value":"Serbia","label":"Serbia"},{"value":"Seychelles","label":"Seychelles"},{"value":"Sierra Leone","label":"Sierra Leone"},{"value":"Singapur","label":"Singapur"},{"value":"Sint Maarten","label":"Sint Maarten"},{"value":"Siria","label":"Siria"},{"value":"Somalia","label":"Somalia"},{"value":"Sri Lanka","label":"Sri Lanka"},{"value":"Suazilandia","label":"Suazilandia"},{"value":"Sudán","label":"Sudán"},{"value":"Sudán del Sur","label":"Sudán del Sur"},{"value":"Suecia","label":"Suecia"},{"value":"Suiza","label":"Suiza"},{"value":"Surinam","label":"Surinam"},{"value":"Tailandia","label":"Tailandia"},{"value":"Taiwán","label":"Taiwán"},{"value":"Tanzania","label":"Tanzania"},{"value":"Tayikistán","label":"Tayikistán"},{"value":"Territorio Británico del Océano Índico","label":"Territorio Británico del Océano Índico"},{"value":"Tierras Australes y Antárticas Francesas","label":"Tierras Australes y Antárticas Francesas"},{"value":"Timor Oriental","label":"Timor Oriental"},{"value":"Togo","label":"Togo"},{"value":"Tonga","label":"Tonga"},{"value":"Trinidad y Tobago","label":"Trinidad y Tobago"},{"value":"Turkmenistán","label":"Turkmenistán"},{"value":"Turquía","label":"Turquía"},{"value":"Tuvalu","label":"Tuvalu"},{"value":"Túnez","label":"Túnez"},{"value":"Ucrania","label":"Ucrania"},{"value":"Uganda","label":"Uganda"},{"value":"Uruguay","label":"Uruguay"},{"value":"Uzbekistán","label":"Uzbekistán"},{"value":"Vanuatu","label":"Vanuatu"},{"value":"Venezuela","label":"Venezuela"},{"value":"Vietnam","label":"Vietnam"},{"value":"Wallis y Futuna","label":"Wallis y Futuna"},{"value":"Yemen","label":"Yemen"},{"value":"Zambia","label":"Zambia"},{"value":"Zimbabue","label":"Zimbabue"}]
  const rank = [{label: isSpanish ? "Ranking completo" : "All Ranks", value: "All Ranks"}, { label: "1 - 5", value: "1 - 5" },{ label: "6 - 10", value: "6 - 10" },{ label: "11 - 15", value: "11 - 15" },{ label: "16 - 20", value: "16 - 20" },{ label: "21 - 25", value: "21 - 25" },{ label: "26 - 30", value: "26 - 30" },{ label: "31 - 35", value: "31 - 35" },{ label: "36 - 40", value: "36 - 40" },{ label: "41 - 45", value: "41 - 45" },{ label: "46 - 50", value: "46 - 50" }];
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState(countries);
  const [items2, setItems2] = useState(rank);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={tw`flex h-full items-center justify-center bg-[#005f73]`}>
        <View style={tw`flex flex-row mt-50 mr-8`}>
          <View style={tw`flex flex-col`}>
            <View style={tw`ml-8 flex items-center justify-center`}>
              <Text style={tw`text-white text-xl text-center font-bold mb-2`}>
              {isSpanish ? 'País' : "Country" }
              </Text>
              <DropDownPicker
                style={tw`border-solid border-0 w-7/7 h-8 m-0 flex justify-center items-center bg-[#C0D6DF] shadow-2xl rounded-lg z-0`}
                textStyle={tw`text-gray-600`}
                open={open}
                value={value}
                items={items}
                min={1}
                max={1}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={isSpanish ? 'Todos los países' : "All countrys" }
                arrowIconStyle={{ tintColor: "black" }}
                containerStyle={tw`w-6/7`}
                onChangeValue={(value) => {
                  dispatch(filterByCountry(value));
                }}
              />
            </View>
          </View>
          <View style={tw`flex flex-col`}>
            <View style={tw`flex items-center justify-center`}>
              <Text style={tw`text-white text-xl text-center font-bold mb-2`}>
              {isSpanish ? 'Top' : "Top" }
              </Text>
              <DropDownPicker
                style={tw`border-solid border-0 w-7/7 h-8 m-0 flex justify-center items-center bg-[#C0D6DF] shadow-2xl rounded-lg z-0`}
                textStyle={tw`text-gray-600`}
                open={open2}
                value={value2}
                items={items2}
                min={1}
                max={1}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                placeholder={isSpanish ? 'Todos los usuarios' : "All users" }
                arrowIconStyle={{ tintColor: "black" }}
                containerStyle={tw`w-6/7`}
                onChangeValue={(value) => {
                  dispatch(filterByTop(value));
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={tw`w-70 mt-15 mb--10`}
        ></View>
        <View>
          <ScrollView style={tw`mt-10 mb-45`}>
            {ranked?.map((player) => {
              return (
                <View
                  key={
                    rank_total?.findIndex((e) => e.username === player.username) + 1
                  }
                  style={tw`flex flex-row justify-center items-center bg-[#C0D6DF] mt-5 rounded-xl shadow-xl p-3`}
                >
                  <View style={tw`w-2/9`}>
                    <Text style={tw`mr-5 text-black text-lg text-center font-bold`}>
                      {" "}
                      {`#${
                        rank_total?.findIndex((e) => e.username === player.username) +
                        1
                      }`}{" "}
                    </Text>
                  </View>
                  <View style={tw`w-3/6`}>
                    <Text style={tw`mr-5 text-black text-base text-center font-bold`}>
                      {" "}
                      {player.username}{" "}
                    </Text>
                  </View>
                  <View
                    style={tw`flex justify-center items-center text-center w-20 h-10`}
                  >
                    <Image style={tw`h-7 w-9.33 rounded-md`}
                      source={!(player?.country?.toLowerCase() === "afganistán") ? { 
                        uri:`${
                          allCountries.find((e) =>e?.name?.toLowerCase() === player?.country?.toLowerCase())?.flagSvg?.replace("svg", "png").replace("//","").replace("/","/w2560/").replace("https:","https://")
                        }`
                      }
                      :
                      { 
                        uri:`https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Taliban_%28Variant%29.png`
                      }
                    }
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
