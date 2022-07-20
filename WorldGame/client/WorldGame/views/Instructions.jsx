import tw from "twrnc";
import { Text, View, ScrollView, Alert, TouchableHighlight, Image} from "react-native";
//import "../assets/pistas.png"


export default function Instructions() {
    //const { height, width } = useWindowDimensions();
    const estiloView = tw`flex items-center justify-between text-white mt-15 mb-10 w-1/6 `

    const styleText = tw`m-5 text-white text-center text-base`
    const styleButton = tw`m-5 w-3/4 text-white justify-center bg-teal-700 rounded-full`
    const styleTextButton = tw`p-3 text-white text-center text-base `
    

    const onPress = () => Alert.alert('vamo a jugar');
    
    return(
        <View>
        <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: `${100 * 6}%` }}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
            >
            <View style={estiloView}>
            <Text style={styleText} >Welcome dear globetrotter, swipe left to see instructions</Text>
            <Image source={{uri: 'https://countryle.com/assets/images/welcome-page/welcome-loading-image-1.png'}}
                style={{width: 200, height: 200}} />
            <View>
            <Text style={styleText} >I already know how to play:</Text>
            <TouchableHighlight onPress={onPress} underlayColor="withe" activeOpacity={0.7}>
                <View style={styleButton} >
                    <Text style={styleTextButton}>Skip</Text>
                </View>   
            </TouchableHighlight>
            
            </View>
            </View>

            <View style={estiloView}>
            <Text style={styleText}>Your mission, if you acept it</Text>
            <Image source={{uri: 'https://countryle.com/assets/images/welcome-page/welcome-loading-image-2.png'}}
                style={{width: 200, height: 200}} />
            <Text style={styleText}>is to find a country following some clues...</Text>
            <TouchableHighlight >
                <View style={tw`invisible`} >
                    <Text style={tw`invisible`}></Text>
                </View>   
            </TouchableHighlight>
            </View>

            <View style={estiloView}>
            <Text style={styleText}>Go to the search bar on the bottom and write the name of any contry</Text>
            <Image source={{uri: 'https://countryle.com/assets/images/welcome-page/welcome-loading-image-4.png'}}
                style={{width: 200, height: 200}} />
            <Text style={styleText}>Select one of them...</Text>
            
            <TouchableHighlight >
                <View style={tw`invisible mb-2`} >
                    <Text style={tw`invisible`}></Text>
                </View>   
            </TouchableHighlight>
            </View>

            <View style={estiloView}>
            <Text style={styleText}>Guided by the clues showed</Text>
            <Image source={require('../assets/pistas.png')}
                style={{width: 300, height: 75, marginBottom: 62.5, marginTop:62.5}} />
            <Text style={styleText}>try with another country  </Text>
            <TouchableHighlight >
                <View style={tw`invisible mb-2`} >
                    <Text style={tw`invisible`}></Text>
                </View>   
            </TouchableHighlight>
            </View>
            
            <View style={estiloView}>
                
            <Text style={styleText}>You can share your results once you guess the country! </Text>
            <Image source={{uri: 'https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png'}}
                style={{width: 100, height: 100}} />
            <Image source={{uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'}}
                style={{width: 180, height: 100}} />
             <Text style={tw`invisible`}></Text>
            
            </View>

            <View style={estiloView}>
            <Text style={styleText}>Ready!!! </Text>    
            <Image source={{uri: 'https://countryle.com/assets/images/welcome-page/welcome-loading-image-5.png'}}
                style={{width: 200, height: 200}} />
                <View style={tw`w-3/5 ml-5`}>
               
                    <TouchableHighlight onPress={onPress} underlayColor="withe" activeOpacity={0.7}>
                        <View style={styleButton} >
                            <Text style={styleTextButton}>Let's play</Text>
                        </View>   
                    </TouchableHighlight>

                </View>

            
            </View>
        
        </ScrollView>
        </View>
    )
}
