import tw from "twrnc";
import {
  Text,
  View,
  ScrollView,
  Alert,
  TouchableHighlight,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import img from "../assets/Worldgame.png"
import { useSelector } from "react-redux";

export default function Instructions({ navigation }) {
  //const { height, width } = useWindowDimensions();
  const estiloView = tw`flex h-9/10 items-center justify-between text-white mt-12 w-1/6 `;
  const isSpanish = useSelector((state) => state.isSpanish);
  const styleText = tw`m-5 text-white text-center text-base text-xl`;
  const styleButton = tw`m-5 w-3/4 text-white text-center justify-center bg-blue-400 rounded-lg`;
  const styleTextButton = tw`p-3 text-white text-center text-base font-bold`;

  return (
    <View style={tw`bg-gray-900 h-full`}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ width: `${100 * 6}%` }}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
      >
        <View style={estiloView}>
          <Text style={styleText}>
            {isSpanish?"Bienvenido querido trotamundos, \ndesliza el dedo hacia la izquierda para ver las instrucciones":"Welcome dear globetrotter, swipe left to see instructions"}
          </Text>
          <Image
            source={{
              uri: "https://countryle.com/assets/images/welcome-page/welcome-loading-image-1.png",
            }}
            style={tw`w-80 h-80`}
          />
          <View style={tw`flex items-center justify-center`}>
            <Text style={styleText}>{isSpanish?"Ya sé cómo jugar:":"I already know how to play:"}</Text>
            <TouchableHighlight
              style={tw`w-50`}
              onPress={() => navigation.navigate("Home")}
              underlayColor="withe"
              activeOpacity={0.7}
            >
              <View style={styleButton}>
                <Text style={styleTextButton}>{isSpanish?"Omitir instrucciones":"Skip Instructions"}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={estiloView}>
          <Text style={styleText}>{isSpanish?"Su misión, si la acepta":"Your mission, if you acept it"}</Text>
          <Image
            source={{
              uri: "https://countryle.com/assets/images/welcome-page/welcome-loading-image-2.png",
            }}
            style={tw`w-80 h-80`}
          />
          <Text style={styleText}>
            {isSpanish?"es encontrar un país siguiendo algunas pistas...":"is to find a country following some clues..."}
          </Text>
          <TouchableHighlight>
            <View style={tw``}>
              <Text style={tw``}></Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={estiloView}>
          <Text style={styleText}>
            {isSpanish?"Vaya a la barra de búsqueda de la parte inferior y escriba el nombre de cualquier país":"Go to the search bar on the bottom and write the name of any country"}
          </Text>
          <Image
            source={{
              uri: "https://countryle.com/assets/images/welcome-page/welcome-loading-image-4.png",
            }}
            style={tw`w-80 h-80`}
          />
          <Text style={styleText}>{isSpanish?"Seleccione uno de ellos...":"Select one of them..."}</Text>

          <TouchableHighlight>
            <View style={tw`mb-2`}>
              <Text style={tw``}></Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={estiloView}>
          <Text style={styleText}>{isSpanish?"Guíado por las pistas mostradas":"Guided by the clues showed"}</Text>
          <View style={tw`flex flex-col justify-center items-center`}>
            <View style={tw`flex flex-row justify-evenly items-center h-40`}>
              <View style={tw`h-15 w-22 mr-10`}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <Path
                    fill="#FFF"
                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.1-20.4-4.2-41.8-4.2-64 0-22.2 2.1-43.6 4.2-64h185.4c2.1 20.4 3.3 41.8 3.3 64zm151.9-64c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42.9 3.2-64 0-22-1.1-43.4-3.2-64h123.1zm-10.5-32H376.7c-10-63.86-29.8-117.38-55.3-151.558C399.8 29.09 463.4 85.94 493.4 160zm-149.1 0H167.7c6.1-36.4 15.5-68.62 27-94.65 10.5-23.61 22.2-40.74 33.5-51.54C239.4 3.178 248.7 0 256 0c7.3 0 16.6 3.178 27.8 13.81 11.3 10.8 23 27.93 33.5 51.54 11.5 26.03 20.9 58.25 27 94.65zm-325.69 0C48.59 85.94 112.2 29.09 190.6 8.442 165.1 42.62 145.3 96.14 135.3 160H18.61zm112.59 32c-2.1 20.6-4.1 42-4.1 64 0 21.1 2 43.4 4.1 64H8.065C2.8 299.5 0 278.1 0 256s2.8-43.5 8.065-64H131.2zm63.5 254.6c-11.5-26-20.9-58.2-27-94.6h176.6c-6.1 36.4-15.5 68.6-27 94.6-10.5 23.7-22.2 40.8-33.5 51.6-11.2 10.6-20.5 13.8-28.7 13.8-6.4 0-15.7-3.2-26.9-13.8-11.3-10.8-23-27.9-33.5-51.6zm-4.1 57C112.2 482.9 48.59 426.1 18.61 352H135.3c10 63.9 29.8 117.4 55.3 151.6zm130.8 0c25.5-34.2 45.3-87.7 55.3-151.6h116.7c-30 74.1-93.6 130.9-172 151.6z"
                  />
                </Svg>
                <Text style={tw`mb-1 mt-1 text-center text-white font-bold text-sm`}>{isSpanish?"Hemisferio":"Hemisphere"}</Text>
              </View>
              <View style={tw`h-15 w-22 mr-10`}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <Path
                    fill="#FFF"
                    d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM57.71 192.1l9.36 17.3a64.042 64.042 0 0038.03 29.8l57 16.5c18.1 4.9 29.9 20.6 29.9 38.5v39.9c0 11 6.2 21 16 25 9.8 5.8 16 15.8 16 26.8v39c0 15.6 14.9 26.8 29.9 22.5 16.2-4.6 28.6-18.3 32.7-33.7l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40.1l8.1-4.6c15-8.5 24.2-24.4 24.2-41.7v-8.2c0-12.8-5.1-25-14.1-34l-3.8-3.8c-9-9-21.3-15-34-15h-44c-10.2 0-21.2-2-30.9-7.5l-34.5-19.8c-4.3-2.4-7.6-6.4-9.1-11.1-3.2-9.6 1.1-20 10.1-24.6l6-2.9c6.6-3.3 14.2-3.9 20.4-1.5l24.1 7.7c8.1 2.7 17.1-.4 21.9-7.5 4.7-7.1 4.2-16.4-1.2-22.9l-13.6-16.2c-10-12-9.9-29.5.3-41.3l15.7-18.38c8.8-10.27 10.2-24.96 3.5-36.7l-2.4-4.16c-4.3-.17-6.9-.26-10.4-.26-92.9 0-171.6 60.9-198.29 144.1zm379.89-37.6L412 164.8c-15.7 6.3-23.8 23.7-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 21l29.2 7.2c1.2-9 1.8-18.2 1.8-27.5 0-36.8-9.6-71.4-26.4-101.5z"
                  />
                </Svg>
                <Text style={tw`mb-1 mt-1 text-center text-white font-bold text-sm`}>{isSpanish?"Continente":"Continent"}</Text>
              </View>
              <View style={tw`h-15 w-22`}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.000000 512.000000"
                >
                  <Path
                    fill="#FFF"
                    d="M644 5105c-119-26-172-63-384-265C19 4609 5 4590 5 4500c0-56 4-73 27-106 54-77 138-108 227-84 36 9 67 34 163 127l118 116 2-1674 3-1674 28-90c80-259 283-462 542-542l90-28 1669-3 1668-2-115-119c-92-95-118-128-127-163-42-155 94-290 250-248 38 10 73 41 258 223 196 195 217 218 253 292 75 154 75 301-2 454-34 68-60 98-251 288-185 182-220 213-258 223-89 24-178-10-230-87-20-30-25-49-25-102 0-82 9-97 159-249l111-112-1655 2-1655 3-54 22c-112 46-189 122-233 230l-23 58-3 1660-2 1660 112-111c152-149 167-159 248-159 54 0 72 5 105 28 78 53 109 136 85 227-10 40-36 69-223 253-233 227-286 265-414 292-82 18-129 18-209 0zM1876 5113c-46-12-96-57-122-110-46-93-19-189 71-251l40-27 1360-5 1360-5 38-24c21-13 50-42 65-64l27-41 5-1365 5-1366 27-40c38-54 85-84 146-92 69-8 147 29 188 90l29 42 3 1357c3 1509 6 1435-64 1578-51 103-161 213-264 264-141 69-69 66-1555 65-737-1-1349-4-1359-6z"
                    transform="matrix(.1 0 0 -.1 0 512)"
                  />
                  <Path
                    fill="#FFF"
                    d="M3751 4029c-130-25-257-124-317-244-39-78-61-189-50-247 16-87 104-158 196-158s182 73 195 159c12 72 16 82 40 93 32 14 69 4 84-26 12-21 10-30-15-75-43-80-178-241-337-403-120-122-146-154-157-192-32-115 46-234 164-251 22-4 174-5 336-3 290 3 296 3 333 27 21 13 50 42 65 64 22 34 27 52 27 106 0 117-68 189-190 198-36 3-65 8-65 10 0 3 22 33 49 67 112 141 183 279 196 381 4 28 2 79-4 114-42 258-292 431-550 380zM1472 3329c-46-14-109-80-122-128-7-27-10-253-8-709l3-668 27-41c41-62 90-88 168-88s127 26 168 88l27 41 5 505c5 504 5 506 27 537 59 83 187 83 246 0 22-31 22-33 27-537l5-505 27-41c41-62 90-88 168-88s127 26 168 88l27 41 5 505c5 504 5 506 27 537 65 91 210 80 257-20 14-30 16-92 16-514v-480l28-53c22-43 38-59 81-81 68-36 114-36 182 0 43 22 59 38 81 81l28 53v487c0 304-4 510-11 547-38 208-224 394-437 435-128 24-277-4-392-75l-60-37-66 40c-98 59-159 75-289 75-80 0-123-5-158-18-47-17-49-17-82 4-40 25-125 34-173 19z"
                    transform="matrix(.1 0 0 -.1 0 512)"
                  />
                </Svg>
                <Text style={tw`mb-1 mt-1 text-center text-white font-bold text-sm`}>{isSpanish?"Área":"Area"}</Text>
              </View>
            </View>
            <View style={tw`flex flex-row justify-evenly items-center h-40`}>
              <View style={tw`h-15 w-25 mr-10`}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <Path
                    fill="#FFF"
                    d="M208 48c0 26.51-21.5 48-48 48s-48-21.49-48-48 21.5-48 48-48 48 21.49 48 48zm-56 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l58.277-96.9C80.2 145.7 111.4 128 145.1 128h29.8c33.7 0 64.9 17.7 82.3 46.6l58.2 96.9c9.1 15.2 4.2 34.8-10.9 43.9-15.2 9.1-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"
                  />
                </Svg>
                <Text style={tw`mb-1 mt-1 text-center text-white font-bold text-sm`}>{isSpanish?"Población":"Poblation"}</Text>
              </View>
              <View style={tw`h-15 w-25`}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <Path
                    fill="#FFF"
                    d="M288 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm325.1 50.7l55.5-144.3c7.5-20.3-11.6-38.5-31-31l-144.3 55.5c-8.5 3.2-15.2 9.9-18.4 18.4l-55.5 144.3c-7.5 19.4 10.7 38.5 31 31l144.3-55.5c8.5-3.2 15.2-9.9 18.4-18.4z"
                  />
                </Svg>
                <Text style={tw`mb-1 mt-1 text-center text-white font-bold text-sm`}>{isSpanish?"Coordenadas":"Coordinates"}</Text>
              </View>
            </View>
          </View>
          <Text style={styleText}>{isSpanish?"¡inténtalo con otro país! ":"try with another country! "}</Text>
          <TouchableHighlight>
            <View style={tw`mb-2`}>
              <Text style={tw``}></Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={estiloView}>
          <Text style={styleText}>
            {isSpanish?"Puedes compartir tus resultados una vez que hayas adivinado el país.":"You can share your results once you guess the country!"}{" "}
          </Text>
          <View style={tw`flex flex-col justify-evenly items-center`}>
            <View style={tw`h-30 w-30 mb-30`}>
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <Path fill="#FFF" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </Svg>
            </View>
            <View style={tw`h-30 w-30`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path fill="#FFF" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </Svg>
            </View>
          </View>
          <Text style={tw``}></Text>
        </View>

        <View style={estiloView}>
          <Text style={tw`m-5 text-white text-center text-2xl font-bold`}>
            {isSpanish?"¡Listo!":"Ready!"}{" "}
          </Text>
          <Image style={tw`h-100 w-100`} source={img}/>
          <View style={tw`w-3/5 ml-5`}>
            <TouchableHighlight
              onPress={() => navigation.navigate("Home")}
              underlayColor="withe"
              activeOpacity={0.7}
            >
              <View style={styleButton}>
                <Text style={styleTextButton}>{isSpanish?"Jugar":"Play"}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
