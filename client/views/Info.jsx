import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
//import Svg from "react-native-svg";
import tw from "twrnc";
import tempIcon from "../assets/viewInfo/avg-temperature.png";
import continentIcon from "../assets/viewInfo/continent.png";
import directionIcon from "../assets/viewInfo/direction.png";
import hemisphereIcon from "../assets/viewInfo/hemisphere.png";
import populationIcon from "../assets/viewInfo/population.png";
import red from "../assets/viewInfo/red.png";
import green from "../assets/viewInfo/green.png";
import yellow from "../assets/viewInfo/yellow.png";
import arrow_up from "../assets/viewInfo/arrow_up.png";
import arrow_down from "../assets/viewInfo/arrow_down.png";
import { useSelector } from "react-redux";

export default function Info({ navigation }) {
  const isSpanish = useSelector((state) => state.isSpanish);
  return (
    <View style={tw`bg-gray-600`}>
      <ScrollView>
        <View style={tw`w-95% `}>
          <View style={tw`mt-12 ml-5 `}>
            <Text style={tw`text-white font-bold text-xl `}>{isSpanish?"Objetivo":"Target"}</Text>
            <Text style={tw`text-white`}>
              {isSpanish?"Adivina el país que escondemos. Guíate por las pistas para conseguirlo \n en el menor número de intentos posible.":"Guess the country we hide. Be guided by the clues to get \n it in as few attempts as possible."}
            </Text>
          </View>

          <View style={tw`m-4 mt-5`}>
            <Text style={tw`text-white font-bold text-xl`}>{isSpanish?"Las pistas":"The clues"}</Text>

            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={hemisphereIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white `}>{isSpanish?"Hemisferio":"Hemisphere"}</Text>
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-5 text-center`}>
                  {isSpanish?"Hemisferio en el que se encuentra el país que ha seleccionado.":"Hemisphere where the country you have selected is located."}
                </Text>
              </View>
            </View>

            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={continentIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white ml-1.5`}>{isSpanish?"Continente":"Continent"}</Text>
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-10 text-center`}>
                  {isSpanish?"Continente donde se encuentra el país que ha seleccionado.":"Continent where the country you have selected is located."}
                </Text>
              </View>
            </View>

            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={tempIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white w-100% text-center`}>{isSpanish?"Área":"Area"}</Text>
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-5 text-center`}>
                  {isSpanish?"Área del país que ha elegido.":"Area of the country you have chosen."}
                </Text>
              </View>
            </View>

            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={populationIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white ml-1`}>{isSpanish?"Población":"Population"}</Text>
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-10 text-center`}>
                  {isSpanish?"Número de habitantes del país que ha seleccionado.":"Number of inhabitants of the country you have selected."}
                </Text>
              </View>
            </View>

            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={directionIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white`}>{isSpanish?"Coordenadas":"Coordinates"}</Text>
              </View>
              <View style={tw``}>
                <Text style={tw`text-white mt-3 w-60 ml-9 text-center`}>
                  {isSpanish?"Dirección geográfica donde se encuentra el país \n que buscas con respecto al país que ha elegido.":"Geographical address where the country you are looking for is \n located with respect to the country you have chosen."}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={tw`bg-gray-700 px-0.5 py-0.5 rounded-md w-90% m-7 `}
          ></View>

          <View style={tw`ml-3`}>
            <View style={tw`flex-row mt-5`}>
              <View>
                <Image source={continentIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white ml-5.5 `}>Area</Text>
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-12 text-center`}>
                  Extent in km² of the country you have chosen.
                </Text>
              </View>
            </View>

            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={populationIcon} style={tw` w-13 h-13 ml-3`} />
                <Text style={tw`text-white`}>GNP per head</Text>
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-8 text-center`}>
                  Gross Domestic Product per person of the country you have
                  selected.
                </Text>
              </View>
            </View>
          </View>

          <View
            style={tw`bg-gray-700 px-0.5 py-0.5 rounded-md w-90% m-7 mt-15`}
          ></View>

          <View style={tw`ml-2`}>
            <View style={tw`flex-row mt-5`}>
              <View>
                <Image source={red} style={tw` w-13 h-13 ml-3`} />
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-4.5 text-center`}>
                  Wrong. You are far from correct.
                </Text>
              </View>
            </View>
            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={yellow} style={tw` w-13 h-13 ml-3`} />
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-8 text-center`}>
                  This data is similar or close to that of the country you are
                  looking for.
                </Text>
              </View>
            </View>
            <View style={tw`flex-row mt-10`}>
              <View>
                <Image source={green} style={tw` w-13 h-13 ml-3`} />
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-60 ml-9.5 text-center`}>
                  Congratulations, the field matches the country you are looking
                  for.
                </Text>
              </View>
            </View>
          </View>

          <View
            style={tw`bg-gray-700 px-0.5 py-0.5 rounded-md w-90% m-7 mt-15`}
          ></View>

          <View style={tw`ml-6`}>
            <View style={tw`flex-row mt-5`}>
              <View>
                <Image source={arrow_up} style={tw`w-5 h-2  ml-3 mt-8`} />
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-70 ml-5 text-center`}>
                  The data of the country you are looking for is higher than
                  this one.
                </Text>
              </View>
            </View>
            <View style={tw`flex-row mt-3`}>
              <View>
                <Image source={arrow_down} style={tw` w-5 h-2 ml-3 mt-9`} />
              </View>
              <View>
                <Text style={tw`text-white mt-5  w-70 ml-5 text-center`}>
                  The data of the country you are looking for is lower than this
                  one.
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={tw`bg-gray-400 px-8 py-2 rounded-md mt-10 w-95% m-4.5 `}
          >
            <Text
              style={tw`text-white text-center font-bold`}
              onPress={() => navigation.navigate("Home")}
            >
              BACK
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
