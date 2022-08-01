import { View, TouchableOpacity, Text, Share } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { useSelector } from 'react-redux';

export default function ShareButton() {
    const listOfAttemps = useSelector((state) => state.attemps);
    const countryOfGame = useSelector((state) => state.countrie);
    const login = useSelector((state) => state.login);
    
    const createMessage = ()=>{
        console.log(login)
        let message = ""
        message += `--- *World Game* ---\n`
        message += `User: ${login.Request.username}\n`
        message += `Game: #${login.Request.stats.games +1}\n`
        message += `-------------------------\n`
        listOfAttemps.map((el) => {
            if(el.hemisphere.asserted) message += "🟢"
            else message += "🔴"
            if(el.continent.asserted) message += "🟢"
            else message += "🔴"
            if(el.area.arrowdirection == "up" || el.area.arrowdirection == "down") message += "🔴"
            else message += "🟢"
            if(el.population.arrowDirection == "up" || el.population.arrowDirection == "down") message += "🔴"
            else message += "🟢"
            if(el.coordinates.direction.length > 0) message += "🔴"
            else message += "🟢"
            message += "\n"
        })
        message += `-------------------------\n`
        message += `Country of game: *${countryOfGame.name}*`
        return message
    }

    const onShare = async () => {
        try {
            const result = await Share.share({message:createMessage()});
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
              // shared with activity type of result.activityType
                } else {
              // shared
                }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
          alert(error.message);
        }
    };
    
    return (
        <View style={tw`flex justify-center items-center mt-8 mb-5`}>
            <TouchableOpacity 
                style={tw`w-30 h-9 border-0 m-0 p-0 flex justify-center items-center rounded-lg bg-white`}
                onPress={()=>{onShare()}}
            >
                <View style={tw`w-22 h-10 m-0 p-0 flex flex-row justify-between items-center`}>
                    <View style={tw`h-6 w-6`}>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <Path fill="#000" d="M285.4 197.1l-94.1 47c.5 3.9-.2 7-.2 11.9 0 4 .7 7.1.2 11.9l94.1 47c17.2-16.7 40.7-26.9 66.6-26.9 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-4.9.2-8 .7-11.9l-94.1-47C145.4 341.8 121.9 352 96 352c-53.02 0-96-43-96-96 0-53.9 42.98-96 96-96 25.9 0 49.4 10.2 66.6 26.9l94.1-47c-.5-4.8-.7-7.9-.7-11.9 0-53.02 42.1-96 96-96 53 0 96 42.98 96 96 0 53-43 96-96 96-25.9 0-49.4-10.2-66.6-26.9z" />
                        </Svg>
                    </View>
                    <Text style={tw`font-bold text-xl`}>Share</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}