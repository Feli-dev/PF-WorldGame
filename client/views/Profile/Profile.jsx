import {
    View,
    Text,
} from "react-native";
import React, { useEffect } from "react";
//import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, GetFriends } from "../../redux/actions/index";
import tw from "twrnc";
import BottomTabView from "./BottomTabView";
import { ProfileBody, ProfileButtons } from "./ProfileBody";

//let lengthOfObject = Object.keys(obj).lengt
//<BottomTabView />

const Profile = () => {

    const dispatch = useDispatch();
    //let { friendId } = useParams();

    const userlogin = useSelector((state) => state.login);
    const userInfo = useSelector((state) => state.userdetail);

    const data = Object.keys(userInfo.Request).length > 0 ? userInfo.Request : false;//CAMBIAR PROP REQUEST

    const userId = Object.keys(userlogin.Request).length > 0 ? userlogin.Request.id : 0;

    const avatarFinal = require(`../../assets/avatars/normal_user/avatar_default.png`);



    const countries = [
        { label: "Afghanistan", value: "Afghanistan" },
        {
            label: "Åland Islands",
            value: "Åland Islands",
        },
        { label: "Albania", value: "Albania" },
        { label: "Algeria", value: "Algeria" },
        {
            label: "American Samoa",
            value: "American Samoa",
        },
        { label: "Andorra", value: "Andorra" },
        { label: "Angola", value: "Angola" },
        { label: "Anguilla", value: "Anguilla" },
        { label: "Antarctica", value: "Antarctica" },
        {
            label: "Antigua and Barbuda",
            value: "Antigua and Barbuda",
        },
        { label: "Argentina", value: "Argentina" },
        { label: "Armenia", value: "Armenia" },
        { label: "Aruba", value: "Aruba" },
        { label: "Australia", value: "Australia" },
        { label: "Austria", value: "Austria" },
        { label: "Azerbaijan", value: "Azerbaijan" },
        { label: "Bahamas", value: "Bahamas" },
        { label: "Bahrain", value: "Bahrain" },
        { label: "Bangladesh", value: "Bangladesh" },
        { label: "Barbados", value: "Barbados" },
        { label: "Belarus", value: "Belarus" },
        { label: "Belgium", value: "Belgium" },
        { label: "Belize", value: "Belize" },
        { label: "Benin", value: "Benin" },
        { label: "Bermuda", value: "Bermuda" },
        { label: "Bhutan", value: "Bhutan" },
        {
            label: "Bolivia (Plurinational State of)",
            value: "Bolivia (Plurinational State of)",
        },
        {
            label: "Bonaire, Sint Eustatius and Saba",
            value: "Bonaire, Sint Eustatius and Saba",
        },
        {
            label: "Bosnia and Herzegovina",
            value: "Bosnia and Herzegovina",
        },
        { label: "Botswana", value: "Botswana" },
        {
            label: "Bouvet Island",
            value: "Bouvet Island",
        },
        { label: "Brazil", value: "Brazil" },
        {
            label: "British Indian Ocean Territory",
            value: "British Indian Ocean Territory",
        },
        {
            label: "United States Minor Outlying Islands",
            value: "United States Minor Outlying Islands",
        },
        {
            label: "Virgin Islands (British)",
            value: "Virgin Islands (British)",
        },
        {
            label: "Virgin Islands (U.S.)",
            value: "Virgin Islands (U.S.)",
        },
        {
            label: "Brunei Darussalam",
            value: "Brunei Darussalam",
        },
        { label: "Bulgaria", value: "Bulgaria" },
        { label: "Burkina Faso", value: "Burkina Faso" },
        { label: "Burundi", value: "Burundi" },
        { label: "Cambodia", value: "Cambodia" },
        { label: "Cameroon", value: "Cameroon" },
        { label: "Canada", value: "Canada" },
        { label: "Cabo Verde", value: "Cabo Verde" },
        {
            label: "Cayman Islands",
            value: "Cayman Islands",
        },
        {
            label: "Central African Republic",
            value: "Central African Republic",
        },
        { label: "Chad", value: "Chad" },
        { label: "Chile", value: "Chile" },
        { label: "China", value: "China" },
        {
            label: "Christmas Island",
            value: "Christmas Island",
        },
        {
            label: "Cocos (Keeling) Islands",
            value: "Cocos (Keeling) Islands",
        },
        { label: "Colombia", value: "Colombia" },
        { label: "Comoros", value: "Comoros" },
        { label: "Congo", value: "Congo" },
        {
            label: "Congo (Democratic Republic of the)",
            value: "Congo (Democratic Republic of the)",
        },
        { label: "Cook Islands", value: "Cook Islands" },
        { label: "Costa Rica", value: "Costa Rica" },
        { label: "Croatia", value: "Croatia" },
        { label: "Cuba", value: "Cuba" },
        { label: "Curaçao", value: "Curaçao" },
        { label: "Cyprus", value: "Cyprus" },
        {
            label: "Czech Republic",
            value: "Czech Republic",
        },
        { label: "Denmark", value: "Denmark" },
        { label: "Djibouti", value: "Djibouti" },
        { label: "Dominica", value: "Dominica" },
        {
            label: "Dominican Republic",
            value: "Dominican Republic",
        },
        { label: "Ecuador", value: "Ecuador" },
        { label: "Egypt", value: "Egypt" },
        { label: "El Salvador", value: "El Salvador" },
        {
            label: "Equatorial Guinea",
            value: "Equatorial Guinea",
        },
        { label: "Eritrea", value: "Eritrea" },
        { label: "Estonia", value: "Estonia" },
        { label: "Ethiopia", value: "Ethiopia" },
        {
            label: "Falkland Islands (Malvinas)",
            value: "Falkland Islands (Malvinas)",
        },
        {
            label: "Faroe Islands",
            value: "Faroe Islands",
        },
        { label: "Fiji", value: "Fiji" },
        { label: "Finland", value: "Finland" },
        { label: "France", value: "France" },
        {
            label: "French Guiana",
            value: "French Guiana",
        },
        {
            label: "French Polynesia",
            value: "French Polynesia",
        },
        {
            label: "French Southern Territories",
            value: "French Southern Territories",
        },
        { label: "Gabon", value: "Gabon" },
        { label: "Gambia", value: "Gambia" },
        { label: "Georgia", value: "Georgia" },
        { label: "Germany", value: "Germany" },
        { label: "Ghana", value: "Ghana" },
        { label: "Gibraltar", value: "Gibraltar" },
        { label: "Greece", value: "Greece" },
        { label: "Greenland", value: "Greenland" },
        { label: "Grenada", value: "Grenada" },
        { label: "Guadeloupe", value: "Guadeloupe" },
        { label: "Guam", value: "Guam" },
        { label: "Guatemala", value: "Guatemala" },
        { label: "Guernsey", value: "Guernsey" },
        { label: "Guinea", value: "Guinea" },
        {
            label: "Guinea-Bissau",
            value: "Guinea-Bissau",
        },
        { label: "Guyana", value: "Guyana" },
        { label: "Haiti", value: "Haiti" },
        {
            label: "Heard Island and McDonald Islands",
            value: "Heard Island and McDonald Islands",
        },
        { label: "Vatican City", value: "Vatican City" },
        { label: "Honduras", value: "Honduras" },
        { label: "Hungary", value: "Hungary" },
        { label: "Hong Kong", value: "Hong Kong" },
        { label: "Iceland", value: "Iceland" },
        { label: "India", value: "India" },
        { label: "Indonesia", value: "Indonesia" },
        { label: "Ivory Coast", value: "Ivory Coast" },
        {
            label: "Iran (Islamic Republic of)",
            value: "Iran (Islamic Republic of)",
        },
        { label: "Iraq", value: "Iraq" },
        { label: "Ireland", value: "Ireland" },
        { label: "Isle of Man", value: "Isle of Man" },
        { label: "Israel", value: "Israel" },
        { label: "Italy", value: "Italy" },
        { label: "Jamaica", value: "Jamaica" },
        { label: "Japan", value: "Japan" },
        { label: "Jersey", value: "Jersey" },
        { label: "Jordan", value: "Jordan" },
        { label: "Kazakhstan", value: "Kazakhstan" },
        { label: "Kenya", value: "Kenya" },
        { label: "Kiribati", value: "Kiribati" },
        { label: "Kuwait", value: "Kuwait" },
        { label: "Kyrgyzstan", value: "Kyrgyzstan" },
        {
            label: "Lao People's Democratic Republic",
            value: "Lao People's Democratic Republic",
        },
        { label: "Latvia", value: "Latvia" },
        { label: "Lebanon", value: "Lebanon" },
        { label: "Lesotho", value: "Lesotho" },
        { label: "Liberia", value: "Liberia" },
        { label: "Libya", value: "Libya" },
        {
            label: "Liechtenstein",
            value: "Liechtenstein",
        },
        { label: "Lithuania", value: "Lithuania" },
        { label: "Luxembourg", value: "Luxembourg" },
        { label: "Macao", value: "Macao" },
        {
            label: "North Macedonia",
            value: "North Macedonia",
        },
        { label: "Madagascar", value: "Madagascar" },
        { label: "Malawi", value: "Malawi" },
        { label: "Malaysia", value: "Malaysia" },
        { label: "Maldives", value: "Maldives" },
        { label: "Mali", value: "Mali" },
        { label: "Malta", value: "Malta" },
        {
            label: "Marshall Islands",
            value: "Marshall Islands",
        },
        { label: "Martinique", value: "Martinique" },
        { label: "Mauritania", value: "Mauritania" },
        { label: "Mauritius", value: "Mauritius" },
        { label: "Mayotte", value: "Mayotte" },
        { label: "Mexico", value: "Mexico" },
        {
            label: "Micronesia (Federated States of)",
            value: "Micronesia (Federated States of)",
        },
        {
            label: "Moldova (Republic of)",
            value: "Moldova (Republic of)",
        },
        { label: "Monaco", value: "Monaco" },
        { label: "Mongolia", value: "Mongolia" },
        { label: "Montenegro", value: "Montenegro" },
        { label: "Montserrat", value: "Montserrat" },
        { label: "Morocco", value: "Morocco" },
        { label: "Mozambique", value: "Mozambique" },
        { label: "Myanmar", value: "Myanmar" },
        { label: "Namibia", value: "Namibia" },
        { label: "Nauru", value: "Nauru" },
        { label: "Nepal", value: "Nepal" },
        { label: "Netherlands", value: "Netherlands" },
        {
            label: "New Caledonia",
            value: "New Caledonia",
        },
        { label: "New Zealand", value: "New Zealand" },
        { label: "Nicaragua", value: "Nicaragua" },
        { label: "Niger", value: "Niger" },
        { label: "Nigeria", value: "Nigeria" },
        { label: "Niue", value: "Niue" },
        {
            label: "Norfolk Island",
            value: "Norfolk Island",
        },
        {
            label: "Korea (Democratic People's Republic of)",
            value: "Korea (Democratic People's Republic of)",
        },
        {
            label: "Northern Mariana Islands",
            value: "Northern Mariana Islands",
        },
        { label: "Norway", value: "Norway" },
        { label: "Oman", value: "Oman" },
        { label: "Pakistan", value: "Pakistan" },
        { label: "Palau", value: "Palau" },
        {
            label: "Palestine, State of",
            value: "Palestine, State of",
        },
        { label: "Panama", value: "Panama" },
        {
            label: "Papua New Guinea",
            value: "Papua New Guinea",
        },
        { label: "Paraguay", value: "Paraguay" },
        { label: "Peru", value: "Peru" },
        { label: "Philippines", value: "Philippines" },
        { label: "Pitcairn", value: "Pitcairn" },
        { label: "Poland", value: "Poland" },
        { label: "Portugal", value: "Portugal" },
        { label: "Puerto Rico", value: "Puerto Rico" },
        { label: "Qatar", value: "Qatar" },
        {
            label: "Republic of Kosovo",
            value: "Republic of Kosovo",
        },
        { label: "Réunion", value: "Réunion" },
        { label: "Romania", value: "Romania" },
        {
            label: "Russian Federation",
            value: "Russian Federation",
        },
        { label: "Rwanda", value: "Rwanda" },
        {
            label: "Saint Barthélemy",
            value: "Saint Barthélemy",
        },
        {
            label: "Saint Helena, Ascension and Tristan da Cunha",
            value: "Saint Helena, Ascension and Tristan da Cunha",
        },
        {
            label: "Saint Kitts and Nevis",
            value: "Saint Kitts and Nevis",
        },
        { label: "Saint Lucia", value: "Saint Lucia" },
        {
            label: "Saint Martin (French part)",
            value: "Saint Martin (French part)",
        },
        {
            label: "Saint Pierre and Miquelon",
            value: "Saint Pierre and Miquelon",
        },
        {
            label: "Saint Vincent and the Grenadines",
            value: "Saint Vincent and the Grenadines",
        },
        { label: "Samoa", value: "Samoa" },
        { label: "San Marino", value: "San Marino" },
        {
            label: "Sao Tome and Principe",
            value: "Sao Tome and Principe",
        },
        { label: "Saudi Arabia", value: "Saudi Arabia" },
        { label: "Senegal", value: "Senegal" },
        { label: "Serbia", value: "Serbia" },
        { label: "Seychelles", value: "Seychelles" },
        { label: "Sierra Leone", value: "Sierra Leone" },
        { label: "Singapore", value: "Singapore" },
        {
            label: "Sint Maarten (Dutch part)",
            value: "Sint Maarten (Dutch part)",
        },
        { label: "Slovakia", value: "Slovakia" },
        { label: "Slovenia", value: "Slovenia" },
        {
            label: "Solomon Islands",
            value: "Solomon Islands",
        },
        { label: "Somalia", value: "Somalia" },
        { label: "South Africa", value: "South Africa" },
        {
            label: "South Georgia and the South Sandwich Islands",
            value: "South Georgia and the South Sandwich Islands",
        },
        {
            label: "Korea (Republic of)",
            value: "Korea (Republic of)",
        },
        { label: "Spain", value: "Spain" },
        { label: "Sri Lanka", value: "Sri Lanka" },
        { label: "Sudan", value: "Sudan" },
        { label: "South Sudan", value: "South Sudan" },
        { label: "Suriname", value: "Suriname" },
        {
            label: "Svalbard and Jan Mayen",
            value: "Svalbard and Jan Mayen",
        },
        { label: "Swaziland", value: "Swaziland" },
        { label: "Sweden", value: "Sweden" },
        { label: "Switzerland", value: "Switzerland" },
        {
            label: "Syrian Arab Republic",
            value: "Syrian Arab Republic",
        },
        { label: "Taiwan", value: "Taiwan" },
        { label: "Tajikistan", value: "Tajikistan" },
        {
            label: "Tanzania, United Republic of",
            value: "Tanzania, United Republic of",
        },
        { label: "Thailand", value: "Thailand" },
        { label: "Timor-Leste", value: "Timor-Leste" },
        { label: "Togo", value: "Togo" },
        { label: "Tokelau", value: "Tokelau" },
        { label: "Tonga", value: "Tonga" },
        {
            label: "Trinidad and Tobago",
            value: "Trinidad and Tobago",
        },
        { label: "Tunisia", value: "Tunisia" },
        { label: "Turkey", value: "Turkey" },
        { label: "Turkmenistan", value: "Turkmenistan" },
        {
            label: "Turks and Caicos Islands",
            value: "Turks and Caicos Islands",
        },
        { label: "Tuvalu", value: "Tuvalu" },
        { label: "Uganda", value: "Uganda" },
        { label: "Ukraine", value: "Ukraine" },
        {
            label: "United Arab Emirates",
            value: "United Arab Emirates",
        },
        {
            label: "United Kingdom of Great Britain and Northern Ireland",
            value: "United Kingdom of Great Britain and Northern Ireland",
        },
        {
            label: "United States of America",
            value: "United States of America",
        },
        { label: "Uruguay", value: "Uruguay" },
        { label: "Uzbekistan", value: "Uzbekistan" },
        { label: "Vanuatu", value: "Vanuatu" },
        {
            label: "Venezuela (Bolivarian Republic of)",
            value: "Venezuela (Bolivarian Republic of)",
        },
        { label: "Vietnam", value: "Vietnam" },
        {
            label: "Wallis and Futuna",
            value: "Wallis and Futuna",
        },
        {
            label: "Western Sahara",
            value: "Western Sahara",
        },
        { label: "Yemen", value: "Yemen" },
        { label: "Zambia", value: "Zambia" },
        { label: "Zimbabwe", value: "Zimbabwe" },
    ];

    useEffect(() => {//VER SI SEBA PUEDE HACER QUE ME TRAIGA UN GET FRIEND X ID
        dispatch(getUser(userId))
        dispatch(GetFriends())
    }, [dispatch, userId])

    //navigation.goBack(); AGREGAR BOTON PARA IR ATRAS O HOME

    return (//userInfo
        <View>
            {
                data && Object.keys(userlogin.Request).length > 0 && data.hasOwnProperty('stats') && Object.keys(data?.stats).length > 0 ?

                    <View style={tw`h-full bg-gray-900 flex justify-center items-center`}>
                        <View style={tw`mt-10 p-5`}>

                            <ProfileBody
                                avatar={data.avatar}
                                friends="0"
                                gamesWon={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.wins : 0}
                                games={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.games : 0}
                                id={data !== false ? data.id : 0}
                                name={data !== false ? data.name : ""}
                                userName={data !== false ? data.username : ""}
                                country={data !== false ? data.country : ""}
                                email={data !== false ? data.email : ""}
                                password={data !== false ? data.password : ""}
                                premium={data !== false ? data.premium : false}
                                averageScore={data !== false ? data?.stats.averageScore : 0}
                            />
                            <ProfileButtons
                                id={data !== false ? data.id : 0}
                                name={data !== false ? data.name : ""}
                                userName={data !== false ? data.username : ""}
                                country={data !== false ? data.country : ""}
                                email={data !== false ? data.email : ""}
                                password={data !== false ? data.password : ""}
                                premium={data !== false ? data.premium : false}
                                userAvatar={avatarFinal}
                                countries={countries}
                            />
                        </View>

                        <BottomTabView
                            id={data !== false ? data.id : 0}
                            premium={data !== false ? data.premium : false}
                            averageScore={data !== false ? data?.stats.averageScore : 0}
                            games={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.games : 0}
                            losses={data !== false ? data?.stats.losses : 0}
                            timePaying={data !== false ? data?.stats.timePaying : 0}
                            wins={data !== false && Object.keys(data?.stats).length > 0 ? data?.stats.wins : 0}
                            gamesArr={data !== false ? data.games : false}
                        />

                    </View>
                    :
                    <View>
                        <Text>Wait...</Text>
                    </View>

            }
        </View>

    );
};

export default Profile;
