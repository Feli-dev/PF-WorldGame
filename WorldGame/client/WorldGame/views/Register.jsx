import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import Svg, { Path } from "react-native-svg";
import DropDownPicker from "react-native-dropdown-picker";
import validateInput from "../utils/ValidateInput";
import { PostUser } from "../redux/actions";

export default function Register({ navigation }) {
  const dispatch = useDispatch();
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
  
  const [open, setOpen] = useState(false);
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

  function handleSubmit(e) {
    setErr(validateInput(input));
    if(!(Object.keys(err).length > 0)) dispatch(PostUser({
      email: input.email,
      username: input.username,
      password: input.password,
      country: input.country,}))
  }
  
  function handleInputChange(type, text) {
    setInput({
      ...input,
      [type]: text,
    });
  }

  return (
    // <ScrollView style={tw`pt-8 bg-gray-900`}>
    <View
      style={tw`flex h-full items-center justify-center pt-10 bg-gray-900 `}
    >
      <View style={tw`flex`}>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>Mail</Text>
          <TextInput
            type="email"
            onChangeText={(e) => handleInputChange("email", e)}
            placeholder="Email..."
            placeholderTextColor="#6f6f6f"
            style={tw`pl-3 mb-1 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
          <Text style={tw`text-red-500 text-xs text-left mb-1`}>{err.email}</Text>
        </View>

        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>Username</Text>
          <TextInput
            type="username"
            onChangeText={(e) => handleInputChange("username", e)}
            placeholder="Username..."
            placeholderTextColor="#6f6f6f"
            style={tw`pl-3 mb-1 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
          <Text style={tw`text-red-500 text-xs text-left mb-1`}>
            {err.username}
          </Text>
        </View>

        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>Password</Text>
          <TextInput
            type="password"
            secureTextEntry={true}
            onChangeText={(e) => handleInputChange("password", e)}
            placeholder="Password..."
            placeholderTextColor="#6f6f6f"
            style={tw`pl-3 mb-1 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
          <Text style={tw`text-red-500 text-xs text-left mb-1`}>
            {err.password}
          </Text>
        </View>

        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>
            Repeat password
          </Text>
          <TextInput
            type="repeatPassword"
            secureTextEntry={true}
            onChangeText={(e) => handleInputChange("repeatPassword", e)}
            placeholder="Repeat password..."
            placeholderTextColor="#6f6f6f"
            style={tw`pl-3 mb-1 w-70 h-10 rounded-md bg-gray-800 text-white`}
          ></TextInput>
          <Text style={tw`text-red-500 text-xs text-left mb-1`}>
            {err.repeatPassword}
          </Text>
        </View>

        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-lg text-left mb-1`}>Country</Text>
          <DropDownPicker
            style={tw`border-solid border-0 w-3/5 h-8 m-0 flex justify-center items-center bg-gray-800 rounded-md z-0`}
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

      {Object.keys(err).length > 0 ?
      <TouchableOpacity 
        disabled
        onPress={(e) => handleSubmit(e)}
        style={tw`bg-gray-600 px-8 py-2 rounded-md mt-5 w-50`}
      >
        <Text style={tw`text-gray-500 text-center font-bold`}>REGISTER</Text>
      </TouchableOpacity> : <TouchableOpacity 
        onPress={(e) => handleSubmit(e)}
        style={tw`bg-gray-800 px-8 py-2 rounded-md mt-5 w-50`}
      >
        <Text style={tw`text-white text-center font-bold`}>REGISTER</Text>
      </TouchableOpacity>}

      <View style={tw`flex flex-row mt-8  justify-center items-center`}>
        <View
          style={tw`w-30 mr-5 border-b border-solid border-gray-400`}
        ></View>

        <Text style={tw`text-gray-100 text-xs`}>OR</Text>
        <View
          style={tw`w-30 ml-5 border-b border-solid border-gray-400`}
        ></View>
      </View>

      <View style={tw`flex flex-row justify-center items-center mt-8`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#4267B2] px-8 py-2 rounded-md mr-5 w-15 h-15`}
        >
          <View style={tw`w-8 h-8`}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Path
                fill="#FFF"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center bg-[#FFFFFF] px-8 py-2 rounded-md w-15 h-15`}
        >
          <View style={tw`w-8 h-8`}>
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
        </TouchableOpacity>
      </View>

      <View style={tw`mt-10`}>
        <Text style={tw`text-white text-center font-bold`}>
          If you have an account,
          <Text
            style={tw`text-blue-200 text-center font-bold`}
            onPress={() => navigation.navigate("Login")}
          >
            &nbsp;Log in
          </Text>
        </Text>
      </View>
    </View>
    //</ScrollView>
  );
}
