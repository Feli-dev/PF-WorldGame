import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import tw from "twrnc";
import Svg, { Path, G, Use, Circle, Defs, RadialGradient, Stop } from "react-native-svg";
import { getRank } from "../redux/actions";

export default function Ranking() {
  const ranking = useSelector((state) => state.rank)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getRank(10))
  },[])
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
  const rank = [
    { label: "1 - 50", value: "1 - 50" },
    { label: "51 - 100", value: "51 - 100" },
    { label: "101 - 150", value: "101 - 150" },
    { label: "151 - 200", value: "151 - 200" },
    { label: "201 - 250", value: "201 - 250" },
    { label: "251 - 300", value: "251 - 300" },
    { label: "301 - 350", value: "301 - 350" },
    { label: "351 - 400", value: "351 - 400" },
    { label: "401 - 450", value: "401 - 450" },
    { label: "451 - 500", value: "451 - 500" },
  ];
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState(countries);
  const [items2, setItems2] = useState(rank);

    const aux = [
    {pos:1,name:"Felipe Tau", country: "ARG"},
    {pos:2,name:"Matias Mazzia", country: "ARG"},
    {pos:3,name:"Emmanuel Ávila", country: "MEX"},
    {pos:4,name:"Pedro Romano", country: "ARG"},
    {pos:5,name:"Fermín Schachner", country: "ARG"},
    {pos:6,name:"Sebastian Goyas", country: "PER"},
    {pos:7,name:"Rafael Carreño", country: "ARG"},
    {pos:8,name:"Andres Guerrero", country: "ARG"},
    {pos:9,name:"Prueba", country: "ARG"},
    {pos:10,name:"Prueba", country: "ARG"},
    {pos:11,name:"Prueba", country: "ARG"},
    {pos:12,name:"Prueba", country: "ARG"},
    {pos:13,name:"Prueba", country: "ARG"},
    {pos:14,name:"Prueba", country: "ARG"},
    {pos:15,name:"Prueba", country: "ARG"},
    {pos:16,name:"Prueba", country: "ARG"},
    ]

    const Arg_Flag = () => <View style={tw`w-1/6 flex items-center justify-center`}>
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="25px"
    viewBox="0 0 40 25"
  >
    <Path
      d="M0 0H40V25H0z"
      fill="#74acdf"
      fillOpacity={1}
      stroke="none"
    />
    <Path
      d="M0 8.332h40v8.336H0zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#fff"
      fillOpacity={1}
    />
    <Path
      d="M396.875 251.328l28.438 61.953s.468 1.172 1.25.86c.78-.313.312-1.485.312-1.485l-23.75-63.984m-.625 24.14c-.39 9.454 5.469 14.61 4.688 23.047-.782 8.438 3.828 13.204 4.921 16.407 1.094 3.28-1.171 5.234-.234 5.703 1.016.469 3.125-2.11 2.422-6.719-.703-4.688-4.219-6.094-3.36-16.328.782-10.313-4.218-12.735-3.046-22.11"
      transform="scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.824 251.315l28.452 61.953s.509 1.227 1.303.898c.794-.329.285-1.556.285-1.556l-23.688-63.925m-.664 24.12c-.392 9.465 5.372 14.603 4.634 23.027-.74 8.424 3.86 13.2 4.96 16.465 1.098 3.266-1.141 5.208-.193 5.66.979.526 3.094-2.126 2.37-6.731-.651-4.635-4.194-6.043-3.391-16.353.832-10.239-4.217-12.63-2.953-22.032"
      transform="rotate(22.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.851 251.27l28.45 62.038s.497 1.16 1.27.829c.774-.332.277-1.492.277-1.492l-23.7-63.916m-.662 24.086c-.387 9.447 5.469 14.64 4.696 23.036-.774 8.397 3.867 13.148 4.916 16.408 1.105 3.314-1.16 5.248-.22 5.745.994.442 3.093-2.1 2.43-6.74-.718-4.695-4.199-6.077-3.425-16.352.884-10.275-4.199-12.705-2.928-22.042"
      transform="rotate(45 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.836 251.31l28.435 62.009s.537 1.152 1.324.886c.744-.368.309-1.563.309-1.563l-23.74-63.953m-.7 24.148c-.347 9.412 5.45 14.604 4.681 22.996-.697 8.42 3.916 13.206 4.95 16.425 1.077 3.322-1.166 5.267-.186 5.758.98.49 3.073-2.11 2.39-6.79-.683-4.68-4.25-6.073-3.4-16.29.808-10.321-4.197-12.732-2.937-22.104"
      transform="rotate(67.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M20.215 13.719c.023.453.281.656.23 1.066.11-.324-.156-.578-.14-1.058m-.383-1.188l.973 2.129-.817-2.195"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.73 13.71c-.152.427.008.712-.195 1.071.227-.258.078-.594.277-1.031m.102-1.246l.086 2.34.082-2.34"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.29 13.516c-.306.336-.267.66-.59.914.308-.153.296-.52.648-.848m.57-1.113l-.816 2.195.972-2.129"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M18.953 13.168c-.406.191-.496.508-.894.617.343-.023.476-.367.925-.535m.95-.809l-1.594 1.715 1.715-1.594"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M396.875 251.328l28.438 61.953s.468 1.172 1.25.86c.78-.313.312-1.485.312-1.485l-23.75-63.984m-.625 24.14c-.39 9.454 5.469 14.61 4.688 23.047-.782 8.438 3.828 13.204 4.921 16.407 1.094 3.28-1.171 5.234-.234 5.703 1.016.469 3.125-2.11 2.422-6.719-.703-4.688-4.219-6.094-3.36-16.328.782-10.313-4.218-12.735-3.046-22.11"
      transform="rotate(90 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.824 251.315l28.452 61.953s.509 1.227 1.303.898c.794-.329.285-1.556.285-1.556l-23.688-63.925m-.664 24.12c-.392 9.465 5.372 14.603 4.634 23.027-.74 8.424 3.86 13.2 4.96 16.465 1.098 3.266-1.141 5.208-.193 5.66.979.526 3.094-2.126 2.37-6.731-.651-4.635-4.194-6.043-3.391-16.353.832-10.239-4.217-12.63-2.953-22.032"
      transform="rotate(112.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.851 251.27l28.45 62.038s.497 1.16 1.27.829c.774-.332.277-1.492.277-1.492l-23.7-63.916m-.662 24.086c-.387 9.447 5.469 14.64 4.696 23.036-.774 8.397 3.867 13.148 4.916 16.408 1.105 3.314-1.16 5.248-.22 5.745.994.442 3.093-2.1 2.43-6.74-.718-4.695-4.199-6.077-3.425-16.352.884-10.275-4.199-12.705-2.928-22.042"
      transform="rotate(135 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.836 251.31l28.435 62.009s.537 1.152 1.324.886c.744-.368.309-1.563.309-1.563l-23.74-63.953m-.7 24.148c-.347 9.412 5.45 14.604 4.681 22.996-.697 8.42 3.916 13.206 4.95 16.425 1.077 3.322-1.166 5.267-.186 5.758.98.49 3.073-2.11 2.39-6.79-.683-4.68-4.25-6.073-3.4-16.29.808-10.321-4.197-12.732-2.937-22.104"
      transform="rotate(157.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M18.781 12.715c-.453.023-.656.281-1.066.23.324.11.578-.156 1.058-.14m1.188-.383l-2.129.973 2.195-.817"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M18.79 12.23c-.427-.152-.712.008-1.071-.195.258.227.593.078 1.031.277m1.246.102l-2.34.086 2.34.082"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M18.984 11.79c-.336-.306-.66-.267-.914-.59.153.308.52.296.848.648m1.113.57l-2.195-.816 2.129.972"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.332 11.453c-.191-.406-.508-.496-.617-.894.023.343.367.476.535.925m.809.95l-1.715-1.594 1.593 1.715"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M396.875 251.328l28.438 61.953s.468 1.172 1.25.86c.78-.313.312-1.485.312-1.485l-23.75-63.984m-.625 24.14c-.39 9.454 5.469 14.61 4.688 23.047-.782 8.438 3.828 13.204 4.921 16.407 1.094 3.28-1.171 5.234-.234 5.703 1.016.469 3.125-2.11 2.422-6.719-.703-4.688-4.219-6.094-3.36-16.328.782-10.313-4.218-12.735-3.046-22.11"
      transform="matrix(-.05 0 0 -.05 40 25)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.824 251.315l28.452 61.953s.509 1.227 1.303.898c.794-.329.285-1.556.285-1.556l-23.688-63.925m-.664 24.12c-.392 9.465 5.372 14.603 4.634 23.027-.74 8.424 3.86 13.2 4.96 16.465 1.098 3.266-1.141 5.208-.193 5.66.979.526 3.094-2.126 2.37-6.731-.651-4.635-4.194-6.043-3.391-16.353.832-10.239-4.217-12.63-2.953-22.032"
      transform="rotate(-157.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.851 251.27l28.45 62.038s.497 1.16 1.27.829c.774-.332.277-1.492.277-1.492l-23.7-63.916m-.662 24.086c-.387 9.447 5.469 14.64 4.696 23.036-.774 8.397 3.867 13.148 4.916 16.408 1.105 3.314-1.16 5.248-.22 5.745.994.442 3.093-2.1 2.43-6.74-.718-4.695-4.199-6.077-3.425-16.352.884-10.275-4.199-12.705-2.928-22.042"
      transform="rotate(-135 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.836 251.31l28.435 62.009s.537 1.152 1.324.886c.744-.368.309-1.563.309-1.563l-23.74-63.953m-.7 24.148c-.347 9.412 5.45 14.604 4.681 22.996-.697 8.42 3.916 13.206 4.95 16.425 1.077 3.322-1.166 5.267-.186 5.758.98.49 3.073-2.11 2.39-6.79-.683-4.68-4.25-6.073-3.4-16.29.808-10.321-4.197-12.732-2.937-22.104"
      transform="rotate(-112.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M19.785 11.281c-.023-.453-.281-.656-.23-1.066-.11.324.156.578.14 1.058m.383 1.188l-.973-2.129.817 2.195"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M20.27 11.29c.152-.427-.008-.712.195-1.071-.227.258-.078.594-.277 1.031m-.102 1.246L20 10.156l-.082 2.34"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M20.71 11.484c.306-.336.267-.66.59-.914-.308.153-.296.52-.648.848m-.57 1.113l.816-2.195-.972 2.129"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M21.047 11.832c.406-.191.496-.508.894-.617-.343.023-.476.367-.925.535m-.95.809l1.594-1.715-1.715 1.594"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M396.875 251.328l28.438 61.953s.468 1.172 1.25.86c.78-.313.312-1.485.312-1.485l-23.75-63.984m-.625 24.14c-.39 9.454 5.469 14.61 4.688 23.047-.782 8.438 3.828 13.204 4.921 16.407 1.094 3.28-1.171 5.234-.234 5.703 1.016.469 3.125-2.11 2.422-6.719-.703-4.688-4.219-6.094-3.36-16.328.782-10.313-4.218-12.735-3.046-22.11"
      transform="matrix(0 -.05 .05 0 7.5 32.5)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.824 251.315l28.452 61.953s.509 1.227 1.303.898c.794-.329.285-1.556.285-1.556l-23.688-63.925m-.664 24.12c-.392 9.465 5.372 14.603 4.634 23.027-.74 8.424 3.86 13.2 4.96 16.465 1.098 3.266-1.141 5.208-.193 5.66.979.526 3.094-2.126 2.37-6.731-.651-4.635-4.194-6.043-3.391-16.353.832-10.239-4.217-12.63-2.953-22.032"
      transform="rotate(-67.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.851 251.27l28.45 62.038s.497 1.16 1.27.829c.774-.332.277-1.492.277-1.492l-23.7-63.916m-.662 24.086c-.387 9.447 5.469 14.64 4.696 23.036-.774 8.397 3.867 13.148 4.916 16.408 1.105 3.314-1.16 5.248-.22 5.745.994.442 3.093-2.1 2.43-6.74-.718-4.695-4.199-6.077-3.425-16.352.884-10.275-4.199-12.705-2.928-22.042"
      transform="rotate(-45 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M396.836 251.31l28.435 62.009s.537 1.152 1.324.886c.744-.368.309-1.563.309-1.563l-23.74-63.953m-.7 24.148c-.347 9.412 5.45 14.604 4.681 22.996-.697 8.42 3.916 13.206 4.95 16.425 1.077 3.322-1.166 5.267-.186 5.758.98.49 3.073-2.11 2.39-6.79-.683-4.68-4.25-6.073-3.4-16.29.808-10.321-4.197-12.732-2.937-22.104"
      transform="rotate(-22.5 20 12.5) scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.1116}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M21.219 12.285c.453-.023.656-.281 1.066-.23-.324-.11-.578.156-1.058.14m-1.188.383l2.129-.973-2.195.817"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M21.21 12.77c.427.152.712-.008 1.071.195-.258-.227-.593-.078-1.031-.277m-1.246-.102l2.34-.086-2.34-.082"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M21.016 13.21c.336.306.66.267.914.59-.153-.308-.52-.296-.848-.648m-1.113-.57l2.195.816-2.129-.972"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M20.668 13.547c.191.406.508.496.617.894-.023-.343-.367-.476-.535-.925m-.809-.95l1.715 1.594-1.593-1.715"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M427.813 250c0 15.313-12.5 27.813-27.813 27.813-15.313 0-27.813-12.5-27.813-27.813 0-15.313 12.5-27.813 27.813-27.813 15.313 0 27.813 12.5 27.813 27.813zm0 0"
      transform="scale(.05)"
      fillRule="nonzero"
      fill="#f6b40e"
      fillOpacity={1}
      strokeWidth={1.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#85340a"
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <Path
      d="M20.473 12.203a.274.274 0 00-.239.125c.106.098.344.11.504-.008a.362.362 0 00-.265-.117zm0 .024c.09-.004.18.039.191.082-.11.117-.277.105-.387.02a.22.22 0 01.196-.102zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#843511"
      fillOpacity={1}
    />
    <Path
      d="M20.492 12.137c-.14 0-.172.031-.234.086-.067.054-.098.043-.11.054-.007.008 0 .043.024.032.02-.012.062-.032.129-.086.062-.055.125-.055.191-.055.192 0 .297.16.32.152.02-.011-.109-.183-.32-.183zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M20.875 12.2c-.246-.212-.555-.243-.727-.083a.443.443 0 00-.078.176c-.023.121.016.254.114.39-.012 0-.036.008-.043.02a.762.762 0 01-.09-.488.708.708 0 01.035-.121c.234-.192.555-.215.789.105zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M20.566 12.309a.096.096 0 01-.191 0c0-.055.043-.098.094-.098.054 0 .097.043.097.098zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M20.746 12.371c-.18.14-.363.129-.469.066-.105-.066-.105-.085-.086-.085.024 0 .043.02.13.062.085.043.214.043.425-.043zm0 0M19.79 12.691a.097.097 0 00-.08.098.095.095 0 00.173.055c.039.027.09.027.117.031h.012c.027-.004.078-.004.117-.031.016.023.047.039.078.039.05 0 .098-.043.098-.094a.1.1 0 00-.078-.098c.023.008.039.036.039.063a.062.062 0 01-.063.062c-.035 0-.062-.027-.062-.058-.012.02-.055.082-.133.086a.157.157 0 01-.133-.086.068.068 0 01-.066.058.062.062 0 01-.063-.062c0-.027.016-.055.043-.063zm0 0M19.89 12.977c-.105 0-.148.097-.242.16.051-.02.094-.063.168-.106.075-.043.141.008.184.008.043 0 .105-.05.18-.008.078.043.12.086.172.106-.094-.063-.137-.16-.247-.16a.324.324 0 00-.105.03.316.316 0 00-.11-.03zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.855 13.102a.854.854 0 00-.175.035c.191-.043.234.023.32.023s.129-.066.32-.023c-.215-.063-.258-.02-.32-.02-.043 0-.074-.015-.145-.015zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.688 13.137h-.04c.223.023.114.152.352.152.234 0 .129-.129.352-.152-.235-.02-.16.117-.352.117-.184 0-.125-.121-.313-.117zm0 0M20.191 13.484A.193.193 0 0020 13.29a.193.193 0 00-.191.195.196.196 0 01.191-.152c.094 0 .172.063.191.152zm0 0M19.137 12.2c.246-.212.554-.243.726-.083.043.055.07.113.078.176.024.121-.015.254-.109.39.008 0 .031.008.043.02a.785.785 0 00.086-.488.708.708 0 00-.035-.121c-.235-.192-.555-.215-.79.105zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.52 12.137c.14 0 .171.031.238.086.062.054.094.043.105.054.012.008 0 .043-.023.032-.02-.012-.063-.032-.125-.086-.067-.055-.13-.055-.195-.055-.192 0-.297.16-.32.152-.02-.011.109-.183.32-.183zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.516 12.203a.276.276 0 00-.243.125c.11.098.344.11.504-.008a.348.348 0 00-.261-.117zm-.004.024c.093-.004.18.039.191.082-.105.117-.277.105-.383.02a.218.218 0 01.192-.102zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#843511"
      fillOpacity={1}
    />
    <Path
      d="M19.625 12.309c0 .05-.043.093-.098.093a.096.096 0 01-.097-.093c0-.055.043-.098.097-.098.055 0 .098.043.098.098zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
    <Path
      d="M19.266 12.371c.18.14.363.129.468.066.106-.066.106-.085.086-.085-.023 0-.043.02-.129.062-.086.043-.214.043-.425-.043zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill="#85340a"
      fillOpacity={1}
    />
  </Svg>
                   </View>

    const Mex_Flag = () => <View style={tw`w-1/6 flex items-center justify-center`}>
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="23px"
      viewBox="0 0 40 23"
    >
      <Defs>
        <RadialGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          cx={842.31}
          cy={103.66}
          fx={842.31}
          fy={103.66}
          r={25.859}
          gradientTransform="matrix(.00842 .00358 -.00348 .00851 11.628 8.522)"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={1} />
          <Stop offset={1} stopColor="#f15770" stopOpacity={1} />
        </RadialGradient>
        <RadialGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          cx={651.52}
          cy={550.46}
          fx={651.52}
          fy={550.46}
          r={25.859}
          gradientTransform="matrix(-.00083 -.00908 .00837 -.0008 12.664 17.998)"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={1} />
          <Stop offset={1} stopColor="#f15770" stopOpacity={1} />
        </RadialGradient>
        <RadialGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          cx={380.84}
          cy={740.37}
          fx={380.84}
          fy={740.37}
          r={25.859}
          gradientTransform="matrix(.00303 .00364 -.00701 .0061 26.741 7.037)"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={1} />
          <Stop offset={1} stopColor="#f15770" stopOpacity={1} />
        </RadialGradient>
      </Defs>
      <Path d="M0 0H40V23H0z" fill="#ce1126" fillOpacity={1} stroke="none" />
      <Path
        d="M0 0h26.668v23H0zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M0 0h13.332v23H0zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#006847"
        fillOpacity={1}
      />
      <Path
        d="M466.937 303.525l.328 5.861 2.212-1.465-1.72-4.803zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M468.576 301.897c0 1.058-.82 1.954-1.884 1.954-1.065 0-1.884-.896-1.884-1.954 0-.977.819-1.872 1.884-1.872 1.064 0 1.884.895 1.884 1.872zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M473.982 312.724l-4.26-4.152-1.966 1.547 5.816 3.42zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M473.654 315.003c-.655-.814-.41-2.035.41-2.686.9-.651 2.048-.488 2.621.326.655.814.41 2.035-.41 2.686-.819.651-2.047.488-2.62-.326zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M507.075 251.181l4.342 4.396.573-2.198-4.095-2.686zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M508.304 250.123c0 .977-.819 1.791-1.884 1.791-.983 0-1.802-.814-1.802-1.79 0-1.06.82-1.873 1.802-1.873 1.065 0 1.884.814 1.884 1.872zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M518.625 253.786l-6.717 1.954.574-2.198 5.816-.57zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M521.574 252.89c0 .978-.819 1.792-1.802 1.792-1.065 0-1.802-.814-1.802-1.791s.737-1.791 1.802-1.791c.983 0 1.802.814 1.802 1.79zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M496.017 287l-4.096-6.431.656-.326 4.669 5.536zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M493.396 279.104c0 1.058-.82 1.953-1.884 1.953-1.065 0-1.884-.895-1.884-1.953 0-1.059.819-1.873 1.884-1.873s1.884.814 1.884 1.873zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M496.263 287.163l5.242.977.164-.733-4.341-1.71zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.028 288.14c0 1.058-.902 1.953-1.966 1.953-.983 0-1.884-.895-1.884-1.953 0-.977.9-1.873 1.884-1.873 1.064 0 1.966.896 1.966 1.873zm0 0M373.555 301.734c0 .896-.655 1.547-1.393 1.547-.655 0-1.147-.733-1.147-1.628 0-.896.492-1.628 1.147-1.628.738 0 1.393.814 1.393 1.71zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M373.555 304.665l1.229 6.512-1.639-.57-.573-5.698zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M375.03 302.386c.737 1.058-.574 2.523-1.967 2.93-1.31.407-3.03-.244-3.03-1.547 0-1.383 1.965-.65 2.539-.814.819-.244 1.638-1.628 2.457-.57zm0 0M365.61 312.48c0-.814-.902-1.465-2.049-1.465-1.147 0-2.048.65-2.048 1.465 0 .814.901 1.465 2.048 1.465s2.048-.651 2.048-1.465zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M367.002 312.154l6.307-.325-1.065-1.221-5.16.488zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M367.575 311.422c.492 1.546.573 3.744-1.229 3.5-1.802-.163-1.474-1.79-1.556-2.442-.328-1.058-1.31-2.117-.246-3.175 1.065-1.14 2.458.488 3.031 2.117zm0 0M348.243 276.987c0-1.058-.573-1.872-1.228-1.872-.656 0-1.23.814-1.23 1.872 0 .977.574 1.872 1.23 1.872.655 0 1.228-.895 1.228-1.872zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M347.015 281.139l.163 6.105-1.556-1.465.082-4.885zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M349.39 279.266c.328 1.384-1.72 2.198-3.113 1.954-1.474-.244-2.539-.977-2.293-2.28.245-1.302 1.966-1.058 2.54-.65.572.325 2.457-.977 2.866.976zm0 0M338.332 286.511c0-.57-.901-.976-2.13-.976-1.147 0-2.13.407-2.13.976 0 .489.983.977 2.13.977 1.229 0 2.13-.488 2.13-.977zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.052 286.511l4.833-.325 2.048 1.547-6.963-.245zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.332 283.906c1.228.082 2.13 1.466 1.966 3.012-.164 1.547-1.311 2.768-2.54 2.524-1.228-.163-1.065-1.14-1.065-1.465 0-.326.656-.896.738-1.384.081-.489-.328-1.547-.164-2.035.164-.489.491-.652 1.065-.652zm-3.932-37.202c-.492.896-1.557 1.547-2.048 1.221-.492-.325-.328-1.547.246-2.36.491-.896 1.31-1.303 1.884-.977.491.325.491 1.302-.082 2.116zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M329.075 256.31l2.703-6.268-.41-.326-3.03 4.396zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M331.287 250.042c-1.31-.977-1.638-1.954-1.229-2.93.41-.978 1.475-.327 1.475-.327s.655.733 1.065.977c.491.245 1.31-.081 1.884.733.573.733.163 1.547-.246 1.79-.492.164-1.884.57-2.949-.243zm-11.14-.814c.983.57 1.474 1.465 1.146 2.035-.327.57-1.392.651-2.375.081-.901-.488-1.393-1.465-1.065-2.035.328-.57 1.31-.651 2.294-.081zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M322.932 251.995l4.915 2.931-.164 2.36-5.325-4.64zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M322.85 252.565c-1.065 1.221-2.048 1.384-2.95.814-.982-.488-.245-1.465-.245-1.465s.82-.57 1.147-.977c.328-.488 0-1.302.901-1.79.82-.49 1.556 0 1.72.488.164.488.41 1.872-.573 2.93zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M22.29 14.633s-.017.012-.024.031c-.012.02-.02.055-.02.055v-.09l.031-.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M22.305 14.578s-.024.035-.07.031c-.051 0-.079-.023-.083-.05-.007-.024-.007-.043.008-.075.02-.027-.023.028-.023.028v.058l.039.043.031.012h.031l.04-.012.023-.02zm.261.461s-.023.016-.043.008c-.117-.043-.218-.113-.218-.113l.238.148zm.149.07s-.004.043-.047.063c-.047.02-.078.012-.098-.008a.11.11 0 01-.023-.07c.004-.035-.008.035-.008.035l.027.05.051.02.031-.004.028-.011.031-.032.012-.03zm1.52-2.996s-.008.008-.008.024v.043l-.051-.059.027-.031zm-.028-.078c.004.043-.059.102-.102.082-.046-.015-.078-.062-.054-.11.027-.046-.012.016-.012.016l.008.07.043.04.05.004.044-.024.023-.047zm.629.113s-.012-.027-.008.004c.008.032-.035.102-.082.094-.047-.004-.07-.047-.066-.086.004-.039-.008.016-.008.016l.008.05.027.024.035.023.043-.007.04-.028.015-.035v-.027zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M24.621 12.2s0 .019-.027.034c-.032.016-.082.047-.082.047l.175-.05-.015-.043zm-1.07 1.41s-.012.007-.012.03c0 .016 0 .032.004.047l-.098-.156.028-.02zm-.055-.15c-.02.04-.09.067-.125.048-.035-.02-.062-.098-.023-.13l-.02.02-.012.043.016.043.035.04.031.011.051-.012.035-.027s.028-.078.012-.035zm.348.36s0 .02-.032.02h-.101l.164.031.008-.031zm0 0M24.047 13.86a.075.075 0 01-.098.09c-.062-.02-.078-.083-.058-.118l-.016.043.012.05.035.036.043.008.039-.012.039-.039.012-.047zm-6.195.703c.015.019-.012.09-.082.12-.07.028-.106 0-.125-.023-.02-.023-.02-.05-.02-.05l-.008.011.008.04.035.03.067.012.046-.008.043-.023.047-.055v-.039l-.011-.02-.004.005zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M17.785 14.719s-.012.004-.02.023c-.011.016-.015.047-.015.047l-.008-.082.04-.02zm-.234.254s-.008.02.012.027c.019.012.062.02.062.02l-.117.003-.012-.043zm-.04.074v.012c0 .007-.003.02-.007.03-.016.032-.02.063-.063.056-.043-.008-.058-.04-.062-.067-.004-.027-.016-.039-.016-.039v.035l.028.063.039.02h.039l.027-.012.016-.036.004-.03zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M17.215 15.04s.015.05.074.054c.059 0 .074-.02.074-.02l.008.024-.023.011-.051.004-.047-.008-.02-.015-.015-.031zm-.59-1.602s.004.007 0 .027-.043.066-.11.066c-.07 0-.097-.023-.117-.047a.127.127 0 01-.02-.054l-.003.035.027.043.067.031h.066l.063-.02.03-.03.005-.036zm-.105.144s-.028.004-.04.016a.12.12 0 00-.023.023v-.082l.063.004zm-.293.215s-.008.004.027.023c.035.016.2.032.2.032l-.259-.008.008-.043zm-.032.004s0 .011-.011.039c-.016.023-.047.094-.102.086-.055-.012-.047-.047-.047-.055v-.02l-.012.04.016.027.02.016.046.004.028-.012.035-.031.031-.07zm-.136.008s-.004.011-.047.015a.4.4 0 01-.102-.02l.02.028.035.008h.043l.035-.004zm-.133-1.82s.008.03-.016.046c-.023.02-.078.031-.11.012a.58.58 0 01-.093-.082l.027.05.043.036.063.02.058-.008.028-.028.008-.015zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M15.746 12.074v.035a.75.75 0 01-.016.07l.055-.12-.02-.02zm-.336.094s-.008-.008.008.027.148.164.148.164l-.21-.18.023-.034zm-.07.02s-.027.019-.055.019c-.023 0-.062 0-.07-.031-.004-.028.008-.04.008-.04l-.016.04.008.023.031.016.043.004.04-.02zm-.086-.09s0 .007-.04.004c-.038-.008-.085-.051-.085-.051l.031.047.067.03zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M24.996 11.512c-.016.238-.254.363-.379.453-.125.09-.183.203-.183.203l-.043.14-.02.09-.004.032a.41.41 0 01.02.133c.004.109-.004.265-.004.265l.164-.117.121-.047.039-.008s-.137.137-.187.281c-.055.145-.153.454-.336.551-.18.102-.293.059-.356.114-.062.054-.062.07-.062.07l-.078.105-.063.082-.059.04-.035.027c0 .031-.004.07-.015.105l-.043.149s.035-.02.082-.028c.043-.004.086-.004.086-.004s-.036.043-.047.082c-.016.043.008.293-.23.442-.235.148-.837.125-.837.125l-.113.047-.105.078-.098.11-.008.027s-.074.093-.125.129l-.176.113s.102-.004.137.008l.219.097s-.133-.004-.227.031c-.09.04-.511.278-.715.27-.203-.008-.492-.305-.492-.305l-.133-.093-.214-.043-.27-.016.004-.035.004-.043s.09-.012.238.008c.125.015.168.054.274.07a.428.428 0 00.222-.023c.04-.016.363-.293.363-.293l.368-.13.14.02.063.016.055.015s-.02.032-.06.07c-.038.04-.089.063-.089.063l.043.04.23-.04.079.02s.004 0 .02.012a.255.255 0 01.034-.079 1.31 1.31 0 01.215-.183.437.437 0 00.086-.063c.02-.02.094-.215.094-.215l.008-.097.257-.246.172-.188.075-.21-.008-.04s.062.063.05.192c-.011.132-.039.18-.039.18s.176-.122.27-.165c.074-.035.129-.031.148-.031a.39.39 0 00.133-.113c.051-.075.063-.098.063-.13 0-.027.008-.171.008-.171l-.016-.445.152-.336.219-.2.04-.023s-.017.047-.02.078c-.004.031-.004.09-.004.09s.113-.152.168-.18c.015-.008.027-.011.035-.015a.484.484 0 00.047-.125c.015-.082.02-.196.02-.196l.003-.187-.035-.14-.102-.278-.004-.36-.078-.105s.075-.004.16.125c.09.129.118.313.118.313l.207-.641s.058.074.097.203c.04.125.051.211.051.211l.082-.176s-.004.012.008.063c.016.058.14.133.121.375zm-4.21 4.093s-.04-.097-.24-.199c-.198-.097-.347-.117-.347-.117l-.004.074.317.137.156.129zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#9ca168"
        fillOpacity={1}
      />
      <Path
        d="M22.215 15.004c.02-.027.187-.18.273-.223.086-.043.2-.054.2-.054.12-.02.14-.004.414-.157.273-.152.335-.324.386-.367.055-.043.149-.055.149-.055s-.114.137-.215.247c-.098.113-.207.183-.363.289-.153.101-.473.109-.473.109a.487.487 0 00-.258.129c-.047.043-.086.09-.125.14 0 0-.008-.035.012-.058zm.754-.8c-.254.233-.336.448-.336.448s.226-.195.34-.304c.117-.114.28-.168.351-.235.074-.07.078-.129.125-.172.047-.043.082-.062.082-.062s-.113-.086-.562.324zm-.535.538s.109-.047.152-.144c.027-.075.012-.09.059-.176 0 0 .265-.254.359-.367.164-.196.09-.356.09-.356s.02.082-.051.168c-.07.086-.41.32-.45.457-.042.133-.019.14-.038.211-.04.164-.121.207-.121.207zm-.176.664s-.133-.09-.281-.078c-.301.02-.559.207-.758.211-.203.004-.282-.094-.434-.203-.168-.113-.574-.094-.574-.094l-.004.008-.004.012s.281.004.402.035c.227.066.352.305.614.289.336-.02.613-.227.75-.227.238.004.289.047.289.047zm-1.504-.156s.234.043.418-.09c.183-.137.402-.316.52-.324a.834.834 0 01.245.02s-.152-.067-.273-.067a.702.702 0 00-.36.09c-.113.066-.167.191-.292.27-.125.078-.258.101-.258.101zm-.043.32c-.031 0-.066.02-.078.02-.012-.004-.086-.078-.184-.133-.101-.05-.254-.086-.254-.086s-.015.004.016.016c.035.011.16.054.238.093.078.036.16.122.164.133.008.016.04.055.098.051.059 0 .082-.035.074-.059-.004-.023-.043-.035-.074-.035zm.168-.23s.094.055.246.05c.328-.007.535-.234.754-.32.215-.082.324-.008.324-.008s.004-.011 0-.019a.43.43 0 00-.242-.074c-.36.004-.7.234-.848.297-.14.058-.234.074-.234.074zm3.5-2.508c-.113.113-.277.484-.352.582-.07.102-.164.133-.203.172a3.534 3.534 0 00-.199.262c-.027.043-.04.03-.059.047-.023.02-.035.02.004.011.035-.008.043-.031.098-.094.059-.062.055-.09.14-.167.087-.079.247-.168.325-.266.078-.098.238-.473.324-.563.09-.097.246-.16.246-.16s-.125-.035-.324.176zm-.563.7s-.003-.067.075-.165c.082-.097.113-.086.175-.23.067-.14.094-.282.149-.434.05-.148.144-.3.144-.3s-.086.007-.175.128a2.3 2.3 0 00-.297.543c-.07.215-.07.457-.07.457zm-.105.136s.031-.016.035-.2c.004-.187-.012-.445.043-.573.05-.13.332-.438.332-.438s-.113.031-.277.16c-.164.13-.23.293-.223.418.008.125.078.266.082.39.008.122.008.243.008.243zm.66-1.27s.07-.25.098-.312c.027-.059.031-.094.172-.254.078-.09.16-.148.191-.277.035-.13.035-.48.035-.48s-.039.03-.066.093c-.031.062-.008.293-.063.398-.05.11-.172.36-.23.41 0 0-.012-.18.008-.359.023-.18.082-.234.109-.355.027-.117.012-.426.012-.426s-.094.101-.145.215a1.47 1.47 0 00-.074.476c-.004.153.035.282.039.368.004.09.012.128-.023.226-.036.098-.016.031-.04.125-.019.094-.042.164-.042.164zm-.219-1.359s.082.11.07.23c-.011.122-.058.282-.011.41.047.126.117.137.137.212.02.074.02.214.02.214s.038-.27.01-.343c-.026-.075-.038-.04-.077-.121-.04-.079 0-.293-.028-.418-.03-.125-.12-.184-.12-.184zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#717732"
        fillOpacity={1}
      />
      <Path
        d="M19.168 15.582s.023-.07.195-.152c.172-.086.43-.2.453-.184.024.016-.015.11-.015.11l-.164.05-.133.074-.152.102zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#9ca168"
        fillOpacity={1}
      />
      <Path
        d="M19.602 15.133c-.22.008-.336.062-.38.07-.011.004-.042.024-.07.012a.353.353 0 01-.097-.098l-.047-.039-.008.16-.32-.277-.032.184-.043.082-.316-.301.016.234s-.082.012-.086.008l-.227-.156-.066.02.074.136-.285.023s-.024.012-.059.047a.735.735 0 00-.062.07s-.008.016.004.024a.356.356 0 00.109-.004c.027-.012.043-.047.047-.031.008.015.02.078.055.07.039-.004.171-.105.265-.062.106.05-.137.12-.113.195.027.074.2.043.242.02.047-.024.18-.188.23-.125.079.085-.156.156-.113.242s.172.066.235.027c.062-.035.21-.262.242-.21.055.081-.125.163-.078.23.047.066.144-.004.21-.051.067-.047.094-.156.184-.207.09-.055.086-.031.11-.031.027-.004.097-.075.097-.075l.215-.09.106.008.054.028.106.011.012-.09s-.125-.058-.211-.054zm-1.72 0l.048-.082-.028-.04s-.074-.042-.144-.113a.445.445 0 00-.125-.101c-.031-.016-.137-.086-.137-.086l-.05-.176-.028-.055-.082.036-.11-.383-.019-.07-.047-.004-.086.234-.101-.145-.024-.32-.062.07-.078.082-.141-.289s-.012-.007-.02.02a.526.526 0 00-.011.168 1.537 1.537 0 01-.188-.145.824.824 0 01-.18-.191l-.066-.148.063-.137.03-.16-.136.058-.027-.36-.02-.116-.168.242s-.062-.094-.062-.106v-.226l-.043-.012-.067.125s-.066-.129-.097-.16a.81.81 0 00-.016-.281c-.039-.13-.086-.196-.07-.301.015-.102.058-.113.055-.16-.004-.047-.075.031-.051-.031.023-.063.242-.2.195-.274-.047-.074-.254.113-.207-.012.05-.125.25-.129.262-.304.008-.11-.192.07-.207.015-.02-.054.12-.168.12-.238-.003-.074.024-.082-.015-.121-.039-.035-.16.152-.16.152l-.129-.05-.047.187-.039.16-.164-.094.043.196.04.191-.169-.043.09.16.117.121.07.098.055.027.067.07.027.106s.039.113.039.117l.008.114v.074l-.004.058v.024l-.004.023-.004.07c-.031 0-.082-.05-.101-.019-.02.035.097.129.074.152-.02.02-.196-.035-.203.02-.012.055.015.133.117.16.098.024.328.078.289.125-.04.043-.29-.14-.277-.004.007.133.097.188.16.215.066.024.32-.004.304.055-.011.062-.207-.02-.226.07-.016.086.137.098.168.098s.137-.004.18.027c.039.031.183.184.273.258.074.066.238.18.285.215-.05-.004-.148-.016-.164.02-.02.046.379.19.266.234-.118.047-.239-.121-.274-.02-.035.102.078.192.14.227.063.039.419.008.349.09-.07.082-.329-.055-.333.043 0 .093.172.246.262.242.09-.004.188-.149.23-.07.04.078-.07.109.016.132.086.02.149-.09.246-.07.102.02.258.082.348.164.059.055.117.113.176.172zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#9ca168"
        fillOpacity={1}
      />
      <Path
        d="M19.273 15.54c.059 0 .067.034.075.034.011-.004.113-.09.21-.144.098-.055.247-.086.247-.086l.008.011s-.176.047-.262.106c-.106.074-.188.121-.196.137-.003.011-.043.039-.101.039-.063 0-.086-.035-.086-.055 0-.016.043-.043.105-.043zm.532-.27s-.055.003-.082-.024a.27.27 0 00-.16-.05.407.407 0 00-.247.113c-.007.007-.023.039-.093.086.023.003.07-.028.12-.07.075-.06.169-.075.231-.087.067-.008.106.028.137.047.031.024.09.016.09.016zm-3.16-1.301c.007-.004.007-.016.003-.043a.81.81 0 01-.14-.074 4.795 4.795 0 01-.317-.235s.09.09.176.168c.09.082.25.18.25.18l.004.004h.024zm2.23 1.59s.031-.043.09-.137c.058-.094.113-.125.12-.137.009-.012-.023-.055-.038-.09-.02-.035-.016-.074-.016-.078 0 0 .02.055.063.09a.466.466 0 01.07.059s.086-.012.086-.028c.004-.02 0-.031-.016-.035-.015-.008-.03.012-.07-.004-.078-.035-.113-.16-.16-.164-.047-.004-.012.133-.035.133-.074.008-.133-.27-.309-.281-.125-.008-.148.015-.152.043-.008.027.148.195.097.218-.054.024-.218-.261-.343-.265-.121-.004-.13.043-.121.07.007.027.132.05.105.14-.027.087-.152-.132-.266-.12-.113.011-.125.02-.128.05-.004.032.039.079.023.09-.016.012-.086.008-.145.051-.054.04-.136.145-.136.145s.074-.106.172-.118c.101-.011.347.004.347.004l-.07-.054c-.035-.036-.066-.102-.066-.102s.054.05.109.094c.05.047.117.078.117.078s.106.012.113.023c.008.012-.003.036-.046.086-.043.047-.106.102-.106.102l.125-.098c.02-.02.094-.074.094-.074s.078.012.086.008c.008 0 .004-.028-.051-.106-.05-.074-.098-.16-.098-.16s.063.059.125.145c.067.086.055.125.082.129.028.004.07.011.09.011.024-.004.02.036-.027.106-.043.066-.07.156-.07.156s.046-.074.093-.125c.051-.05.075-.113.094-.113.02-.004.086.004.094 0 .012-.004-.016-.031-.051-.102-.031-.07-.043-.168-.043-.168s.031.09.086.156c.05.067.074.122.082.122.012 0 .055-.004.082-.004.016 0 .02-.004.02.004.003.03-.008.046-.043.117-.036.066-.059.133-.059.133zm-1.348-.79a.36.36 0 00.106.028s-.106-.063-.133-.149c-.027-.09-.004-.273-.047-.273-.047.004-.07.137-.117.11-.043-.028.016-.274-.031-.38-.051-.105-.164-.18-.192-.14-.023.039-.02.265-.09.215-.07-.051.004-.242-.015-.332-.02-.09-.074-.157-.117-.133-.04.023.015.187-.047.191-.063 0-.055-.117-.082-.129-.028-.011-.035.024-.051 0-.016-.023-.008-.105-.043-.097-.031.008-.027.074-.016.11a.487.487 0 00.043.112c.016.024.067.051.063.07-.008.02-.031.04-.067.04-.035 0-.113-.004-.113-.004s.082.027.113.031c.032.004.094-.016.11.016.015.027.09.125.09.125s.015-.051.023-.14c.012-.095.008-.173.008-.173s.023.106.02.168c-.005.063-.028.188-.028.188s.07.058.05.074c-.019.015-.093.012-.175.012-.086 0-.207-.032-.207-.032s.11.051.184.067c.074.011.238.015.238.015l.113.125s.051-.09.059-.183c.008-.09 0-.2 0-.2s.023.098.027.18a.85.85 0 01-.035.239.337.337 0 01-.121.062c-.07.02-.219.035-.219.035s.137.02.235-.004c.097-.023.109-.05.136-.035a.33.33 0 01.051.047s.059.047.086.059c.004.011-.047.03-.07.046-.024.016-.09.047-.09.047s.094-.035.137-.047l.074-.023.027.012s.004-.02-.004-.078c-.008-.036-.012-.075-.023-.114 0 0 .035.055.047.102.007.05.007.101.007.101s.008.016.086.04zm-1.945-2.242s.02-.105.02-.226a.861.861 0 00-.098-.328c-.008-.012-.016-.024-.02-.036l.055-.09-.07.06s-.043-.009-.078-.032c-.036-.023-.051-.055-.051-.055a.4.4 0 00.07.043c.035.016.047.008.047.008l-.027-.121s-.04-.016-.121-.063c-.082-.046-.16-.117-.16-.117s.113.067.175.094c.067.027.102.027.102.027s.066-.02.101-.039c.032-.02.102-.074.102-.074s-.066.04-.11.047c-.042.012-.101.02-.101.02l-.02-.149-.066-.074c-.059-.074-.098-.18-.098-.18s.055.074.102.11c.047.035.086.09.086.09s.055-.028.105-.063l.172-.125s-.07.039-.168.086c-.101.043-.101.039-.101.039s-.012-.063.004-.094c.015-.027.046-.074.043-.101-.008-.028-.028-.02-.036-.04-.007-.023.028-.167.028-.167s.008.05.008.078c0 .027-.012.062.023.062s.203-.168.223-.199c.023-.031.054-.117-.036-.082-.085.031-.066.11-.14.101-.02 0-.043-.093-.07-.07-.028.024-.09.078-.102.145-.012.066.016.168-.023.199-.04.031-.07-.113-.145-.094-.07.02-.086.121-.078.16.012.04.172.227.121.25-.05.024-.172-.16-.238-.035-.067.121.207.246.242.278.035.03.004.039.05.101.051.059.114.074.15.117.034.04.136.239.136.364 0 .128-.008.175-.008.175zm.734 1.078s-.07-.082-.046-.21c.023-.13.113-.36.082-.391-.032-.027-.125.14-.153.101-.023-.039.055-.27.016-.363-.04-.097-.047-.156-.125-.148-.082.008-.117.277-.156.23-.04-.047.023-.168-.004-.23-.028-.067-.04-.09-.082-.078-.04.011-.059.132-.086.132-.028-.003-.075-.148-.133-.128-.059.02.137.28.137.28s.039-.03.054-.073l.04-.094s.015.086 0 .117c-.012.035-.024.113-.024.113s-.05.016-.129 0c-.082-.011-.148-.043-.148-.043s.054.035.136.059c.059.012.114.031.168.047 0 0 .024.027.059.074.023.031.047.063.07.09 0 0 .024-.047.047-.13.023-.081.078-.218.078-.218s-.015.164-.035.242c-.02.082-.043.196-.043.196s-.07-.008-.164-.028c-.098-.015-.227-.05-.227-.05s.114.046.227.078c.11.027.18.047.18.047l.086.117s.023-.043.058-.09a.577.577 0 00.059-.117s-.016.09-.04.144c-.027.055-.046.086-.046.086s-.055.016-.106.012h-.16a1.539 1.539 0 00.281.059s.004.03.043.085a.263.263 0 00.086.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#717732"
        fillOpacity={1}
      />
      <Path
        d="M19.652 15.96s-.039-.042-.093-.07c-.051-.027-.07-.019-.07-.019l-.024-.008.047-.12.347-.337.055-.336h.012l.199-.004v.461l.063.028.39.234-.004.102s-.02.007-.054.023c-.04.016-.047.027-.047.027l-.149.012-.254-.187-.105-.11-.195.246zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M19.926 15.07s-.008.016-.008.07c-.004.051.004.32-.012.36-.011.035-.199.113-.304.207-.11.094-.114.164-.114.164s-.035.004-.101.027c-.067.024-.094.063-.094.063s.039-.168.21-.324c.173-.153.259-.168.278-.192.02-.027 0-.324.004-.347.004-.024.024-.028.04-.028a.87.87 0 01.1 0zm.441.989s.028-.051.047-.07c.016-.02.059-.048.059-.048s.007-.007-.09-.05c-.094-.04-.14-.028-.211-.075-.067-.05-.133-.132-.133-.132l-.094.082s.055.078.106.129c.05.046.168.066.219.093.054.028.097.07.097.07zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#016848"
        fillOpacity={1}
      />
      <Path
        d="M20.094 15.066s.105-.004.117.012c.016.016.012.035.016.04 0 .003.003.25-.016.331a.52.52 0 01-.086.192c-.023.027-.18.16-.25.234-.074.07-.148.172-.148.172l-.051-.059c-.024-.027-.047-.039-.04-.058a.596.596 0 01.204-.215c.125-.082.226-.176.25-.309.023-.133.004-.34.004-.34zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cd202a"
        fillOpacity={1}
      />
      <Path
        d="M20.781 15.906s-.023-.023-.113-.027c-.086 0-.094.012-.094.012s-.047-.059-.125-.11c-.074-.05-.133-.043-.215-.097-.082-.055-.125-.137-.125-.137l.063-.129s.07.102.144.156c.075.055.239.11.29.153.05.046.175.18.175.18zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cd202a"
        fillOpacity={1}
      />
      <Path
        d="M452.766 299.455s-4.75-1.791-4.423-3.42c.41-1.627 10.894-4.395 10.894-4.395l.164-2.768s-1.556-.081-4.177.733c-2.704.895-6.881 2.035-11.387 2.035-2.703 0-4.177-.326-4.914-.57-.492-.081-36.944-2.28-38.173-2.28-.491.082-1.146 0-1.966 0-4.832-.406-8.027-7.814-8.027-7.814l-2.294.407s.738 3.663-.491 3.989c-2.376.651-18.185-7.815-18.185-7.815l-.901 3.419s9.666 5.128 9.42 7.082c-.328 1.954-3.195 1.791-3.195 1.791l1.229 2.28c.41.08 15.973.813 16.219 5.454.082 1.872-3.85 3.012-3.85 3.012l1.31 1.628v.732s8.684.082 11.06 1.384c2.375 1.384 3.603 3.257 6.47 4.966 2.95 1.71 22.773 1.303 25.885.407 3.523-.977 5.652-4.966 11.305-6.675 5.734-1.71 7.536-1.791 7.536-1.791zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#30c2dc"
        fillOpacity={1}
        strokeWidth={0.7}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#0872a7"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M376.176 292.047c0 1.547-1.229 2.768-2.785 2.768-1.474 0-2.703-1.221-2.703-2.768 0-1.547 1.229-2.768 2.703-2.768 1.556 0 2.785 1.221 2.785 2.768zm0 0M391.822 279.266c0 1.547-1.229 2.768-2.703 2.768-1.557 0-2.786-1.221-2.786-2.768 0-1.546 1.23-2.767 2.786-2.767 1.474 0 2.703 1.22 2.703 2.767zm0 0M457.6 299.78c0 1.547-1.23 2.768-2.786 2.768s-2.785-1.22-2.785-2.767c0-1.629 1.229-2.85 2.785-2.85s2.785 1.221 2.785 2.85zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={1.37}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#0872a7"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M17.191 13.25c-.043.102.125.29.243.313.12.019.183-.012.203-.067a.172.172 0 00-.02-.16c-.078-.102-.383-.184-.426-.086zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
      />
      <Path
        d="M17.563 13.402c-.004-.058-.102-.117-.165-.117-.062 0-.125-.004-.117.031.012.032.176.079.18.094.004.02-.05.043-.023.067.027.027.058.007.085-.012.028-.02.043-.024.04-.063zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M18.602 14.54c.027.089-.04.132-.125.17-.09.04-.266.017-.309-.054-.04-.07.066-.183.172-.21.11-.028.238.015.262.093zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
      />
      <Path
        d="M18.422 14.59c.035-.004.035.055.066.05.032-.003.055-.054.047-.09-.008-.03-.062-.077-.113-.073-.047.003-.192.128-.176.16.016.035.047.031.074.015.028-.011.067-.054.102-.062zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M21.828 14.086c.078.105.223.008.262-.035.035-.04.152-.106.105-.176-.047-.07-.129-.063-.183-.063a.34.34 0 00-.184.122c-.02.039-.035.105 0 .152zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
      />
      <Path
        d="M21.855 14.016s.008-.118.114-.121c.062 0 .062.015.11.043.046.027.062-.036.062-.036s.004.082-.07.086c-.075.004-.048-.035-.122-.043-.062-.011-.094.07-.094.07zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M492.871 335.829l-1.34-.856s-2.584-.19-4.306-.095c-1.819 0-5.264.19-5.264.19l5.168 15.122 6.316 8.94 2.297.856 4.881-.285.861-2.378-1.818-14.551zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f9aa51"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#953220"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M475.645 336.78l.287-1.712s1.148-.19 2.775-.285c1.627 0 3.063.19 3.254.285.191.095 3.637 4.375 4.785 7.133 1.244 2.758 2.584 7.419 4.211 10.272 1.531 2.758 4.88 7.513 4.88 7.513s-1.722.096-3.157.096c-1.532 0-3.159.095-3.159.095l-2.775-1.142-8.805-13.6zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f9aa51"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#953220"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M472.008 334.878s3.54-.095 3.924.095c.287.285 4.306 3.804 5.838 8.18 1.626 4.374.86 4.945 2.87 9.51 2.106 4.47 4.881 7.514 4.881 7.514s-5.933.285-9.283-.286c-3.445-.57-4.593-.57-5.455-1.521-.765-.952-2.584-2.093-2.584-2.093h-3.445l.861-4.66-.957-10.557.192-5.517zm35.793 2.758l-5.742-2.283-10.623-.57s.478 2.853.86 5.42c.384 2.664 2.202 8.846 3.925 11.89 1.722 3.043 3.445 6.752 4.402 7.608.957.856 7.082-1.712 7.082-1.712l3.924-.57-.479-4.376-.574-1.331.957-12.364-.957-1.902zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f9aa51"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#953220"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M470.285 337.731c0 1.332 1.34 1.427 1.723 1.332.383 0 1.627-.476 1.627-2.378 0-1.807-1.149-3.139-3.35-3.329-2.201-.095-3.924 2.663-3.924 4.565 0 1.902 1.914 2.853 1.914 3.52 0 0-1.914 1.806-1.818 4.85.096 3.043 2.584 5.421 2.584 5.421s-2.68 2.092-2.68 4.28c0 2.092 2.106 3.519 3.924 3.519 1.914 0 4.307-1.237 4.307-2.853 0-1.617-1.436-2.568-2.584-2.568-1.244 0-1.723.665-1.723 1.236m39.334-16.739c0 1.331-.861 1.331-1.627 1.331-.67 0-1.722-.38-1.722-1.997 0-1.712 2.2-2.568 3.636-2.568 1.34 0 3.733 1.902 3.733 4.185 0 2.378-1.627 3.9-1.627 3.9s.957.475.957 3.423c0 2.949-1.819 5.041-1.819 5.041s2.393.951 2.393 3.995c0 3.043-2.01 3.994-3.541 3.994-1.436 0-3.924-.856-3.924-2.853 0-2.092 1.34-2.853 2.297-2.853.957 0 2.01 1.141 2.01 2.282"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f9aa51"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#953220"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M19.344 14.563s.015.011.027.035c.012.023.02.066.043.09.055.046.457.062.578.062.121 0 .488.016.559-.027.066-.04.074-.11.117-.141.043-.031.055-.027.055-.027l-.051.043-.004.09.031.046s-.008.024-.05.051a.314.314 0 01-.141.043c-.059.004-.828.004-.953-.015-.121-.024-.114-.02-.153-.047a.362.362 0 01-.054-.055l.015-.059zm1.246-.743l.07.032s-.058.02-.101.14c-.047.121-.008.16-.04.176-.03.012-.363 0-.363 0l-.058-.137zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#953220"
        fillOpacity={1}
      />
      <Path
        d="M21.652 13.773s-.054-.023-.082-.07c-.027-.047-.047-.105-.027-.121.02-.012.062.031.059.066-.004.04.05.125.05.125zm.653-.183s.043.074.054.086l.078.035s-.09 0-.117-.024c-.03-.027-.07-.093-.07-.093zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M22.5 13.652s-.055.032-.102.016c-.046-.02-.082-.047-.062-.066.016-.024.031-.016.055.011.023.028.109.04.109.04zm.332-.28s-.043.038-.078.038c-.031 0-.098-.012-.098-.027 0-.016.086-.024.102-.02.015 0 .074.008.074.008zm-.496-.665s-.074.023-.098.063c-.023.035-.015.078.012.074.031 0 .04-.043.04-.055a.51.51 0 01.046-.082zm-.324.184s-.055.035-.07.066c-.016.027-.028.094.003.098.035.004.043-.051.047-.078 0-.028.02-.086.02-.086zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M524.932 323.465l-4.403 4.66s10.145 5.707 17.897 5.421c7.752-.285 16.556-6.277 17.226-7.608.575-1.237.096-6.658-.957-8.37-.957-1.712-6.316-5.897-8.422-5.707-2.01.19-5.55 2.949-8.9 6.182-3.35 3.234-3.062 5.992-7.656 5.707-4.594-.285-4.785-.285-4.785-.285zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#04534e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M21.379 13.363s.441.067.57-.047c.125-.113.266-.336.356-.382.086-.051.129-.051.129-.051s.066.043.093.066c.032.028.114.094.114.094l.035.21.004.118-.137.113-.254.118-.242.078-.207-.008-.418-.121-.106-.074-.027-.024zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#0c8489"
        fillOpacity={1}
      />
      <Path
        d="M22.05 13.105c0-.035.028-.035.06-.035.035 0 .07.008.07.047 0 .035-.035.09-.07.09-.032 0-.06-.062-.06-.102zm.18.114c0-.035.024-.051.067-.051.039 0 .078.043.078.078s-.035.063-.074.063c-.04 0-.07-.055-.07-.09zm-.062.265c0-.043.027-.05.066-.05.04 0 .067.02.067.062a.074.074 0 01-.074.074c-.04 0-.059-.043-.059-.086zm-.23-.082c0-.043.042-.058.078-.058.035 0 .066.035.066.082s-.031.082-.066.082c-.036 0-.078-.059-.078-.106zm-.372.047a.092.092 0 01.137-.082c.027.02.047.047.043.082 0 .051-.039.09-.09.09a.09.09 0 01-.09-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M22.23 13.219c0-.031.04-.051.067-.051.023 0 .043.023.043.055 0 .03-.02.054-.043.054-.027 0-.067-.027-.067-.058zm-.058.254c0-.036.031-.047.066-.047.04 0 .067.011.067.047a.068.068 0 01-.067.066.066.066 0 01-.066-.066zm-.235-.078c0-.04.063-.055.09-.055.028 0 .02.027.02.066 0 .04-.02.07-.047.07-.023 0-.063-.042-.063-.081zm.11-.293c0-.036.027-.036.05-.036.024 0 .04.008.04.047 0 .035-.02.063-.043.063-.02 0-.047-.04-.047-.074zm-.48.32c0-.043.035-.082.09-.082.05 0 .105.02.105.058 0 .043-.067.114-.117.114-.055 0-.079-.051-.079-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M21.734 13.348s-.058.011-.093.043c-.032.03-.036.066-.016.078.016.008.04-.024.047-.04a.552.552 0 01.062-.081zm.293-.063s-.058.043-.062.082c-.008.043 0 .063.015.067.016 0 .024-.055.02-.079-.008-.02.027-.07.027-.07zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M22.078 13.348s-.039 0-.066.027c-.028.023-.051.055-.032.059.016 0 .047-.016.047-.032.004-.015.051-.054.051-.054zm.063-.344l-.047.039c-.016.016-.04.059-.016.066.02.012.031-.007.047-.035.016-.031.016-.07.016-.07zm.222.144s-.058.008-.078.032c-.015.027-.031.054-.004.054.024 0 .028-.011.04-.035.011-.023.042-.05.042-.05zm-.035.262s-.015.04-.047.059c-.035.02-.047.035-.058.011-.016-.027.004-.039.02-.043l.085-.027zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M22.68 13.234s.023.121-.082.18c-.106.063-.403.274-.68.246-.281-.023-.602-.183-.602-.183l-.043.02.07.03.22.09.246.074.156.012.133-.02.246-.081.21-.11.11-.086.027-.035v-.121zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M17.176 11.64s.066.055.058.102c-.004.047-.023.067-.039.059-.02-.008-.02-.059-.015-.078a.429.429 0 00-.004-.082zm.48.45s-.02.082-.05.09c-.032.008-.055-.028-.051-.043.008-.012.03 0 .047-.012.015-.012.054-.035.054-.035zm-1.047.062s.024.047.067.055c.043.012.062-.02.054-.035-.003-.012-.023-.008-.046-.008-.02 0-.075-.012-.075-.012zm.188.371s.039.043.094.051a.083.083 0 00.082-.047c.004-.015-.063-.011-.082.004-.02.016-.094-.008-.094-.008zm.332.282s.086-.016.098-.04c.015-.023.039-.062.02-.085-.02-.02-.032.035-.044.058-.012.024-.074.067-.074.067zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M432.674 306.345s1.435-9.416-6.125-15.978c-7.56-6.658-12.537-5.04-15.121-2.568-2.584 2.378-4.785 10.367 3.254 17.31 7.943 6.943 17.896 4.755 17.896 4.755zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#04534e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M16.719 12.172s-.004-.211.093-.274a.429.429 0 01.586.196c.16.312.165.469.125.625h-.171l-.27-.11-.219-.164zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#0c8489"
        fillOpacity={1}
      />
      <Path
        d="M17.621 12.637s-.055.058-.168.054c-.11-.007-.625-.14-.758-.609l.008.102.008.035.031.094.11.16.136.117.172.09.125.035.16.027h.094zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M17.352 12.5c0-.043.02-.043.054-.043.032 0 .055-.016.055.027s-.02.102-.055.102c-.031 0-.054-.043-.054-.086zm.02-.246c0-.027.026-.05.058-.05.035 0 .058.023.058.05 0 .027-.023.05-.058.05-.032 0-.059-.023-.059-.05zm-.235.273c0-.023.031-.043.066-.043s.067.02.067.043c0 .02-.067.051-.102.051-.035 0-.031-.031-.031-.05zm-.02-.293c0-.035.016-.023.047-.023.035 0 .074.008.074.047 0 .035-.039.086-.074.086-.031 0-.047-.074-.047-.11zm-.219.051c0-.031.02-.074.059-.074.04 0 .082.043.082.074s-.031.055-.07.055c-.04 0-.07-.024-.07-.055zm.04-.258c0-.035.023-.03.062-.03.04 0 .07.015.07.046 0 .035-.047.074-.086.074-.039 0-.047-.058-.047-.09zm.234-.027c0-.031.027-.02.066-.02.035 0 .067.024.067.055s-.047.067-.086.067c-.035 0-.047-.07-.047-.102zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M16.938 12.02c.003-.024.019-.04.046-.04.032 0 .055.008.055.04 0 .03-.023.058-.05.058-.028 0-.06-.027-.052-.058zm-.043.253c0-.03.015-.062.046-.062.032 0 .059.004.059.035 0 .031-.031.066-.063.066-.03 0-.042-.007-.042-.039zm.277-.27c0-.023.02-.026.05-.026.032 0 .051.007.051.03 0 .028-.023.048-.054.048-.032 0-.047-.024-.047-.051zm-.055.243c0 .035.024.063.055.063s.066-.028.066-.059c0-.035-.035-.066-.066-.066s-.055.03-.055.062zm.266-.035a.06.06 0 00.058.059.06.06 0 00.059-.06c0-.03-.027-.054-.059-.054-.03 0-.058.024-.058.055zm-.254.312c0-.027.027-.054.055-.054.027 0 .054.02.054.047s-.05.062-.078.062c-.027 0-.031-.027-.031-.055zm.223-.039c0-.035.027-.035.058-.035.035 0 .055 0 .055.035 0 .032-.031.059-.063.059-.035 0-.05-.027-.05-.059zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M17.414 12.094s.035.043.04.078c.007.031.007.07-.005.074-.015.004-.035-.02-.039-.05-.008-.032.004-.102.004-.102zm-.2-.211s.024.035.024.066-.004.067-.02.067c-.015 0-.015-.032-.015-.055 0-.024.012-.078.012-.078zm-.23.031s.024.035.024.066c0 .032-.004.067-.024.067-.015 0-.015-.031-.015-.055 0-.023.015-.078.015-.078zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M16.902 11.957s.032.008.059.031c.027.02.035.043.027.059-.011.012-.035-.008-.043-.024-.004-.015-.043-.066-.043-.066zm.176.246s.047 0 .07.024c.024.023.043.043.032.058-.016.016-.051-.012-.063-.027l-.039-.055zm-.215-.008s.043.008.063.024c.02.015.027.043.015.05-.011.004-.023-.003-.043-.023a.23.23 0 01-.035-.05zm.52.164s.015.047.015.082c0 .036.004.067-.011.067-.016 0-.024-.043-.024-.07 0-.028.02-.079.02-.079zm-.059.079s.04.015.055.03c.016.012.02.036.008.04-.012.004-.02-.02-.032-.031-.007-.012-.03-.04-.03-.04zm-.23.015s.039.004.054.016c.02.011.02.066.02.074-.004.008-.027 0-.04-.023a.296.296 0 00-.034-.067zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M17.004 11.742s-.203.043-.242.176c-.035.133-.04.281-.04.281l-.027-.168.04-.11.058-.1.09-.06.082-.027zm.64.79s.02-.055-.039-.216a3.276 3.276 0 00-.183-.375l.094.11.078.125.035.113.027.106v.101zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M17.852 12.266s.07.046.078.074c.004.023.008.035-.012.039-.016.008-.047-.02-.055-.04-.008-.019-.011-.073-.011-.073zm-.301.812s.031-.062.078-.086c.043-.027.078-.023.09-.008.011.016-.032.047-.059.059-.031.012-.11.035-.11.035zm.504.192s.05-.024.082-.06c.031-.034.035-.058.023-.07-.012-.011-.05.008-.07.036-.02.027-.035.094-.035.094zM18 13.223s.016-.063.035-.086c.016-.02.04-.032.059-.02.02.012.008.04-.008.055-.012.015-.086.05-.086.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M461.576 312.527s-7.656-11.128-19.619-11.698c-9.57-.476-12.537 8.084-12.25 10.652.383 2.568 4.02 8.084 16.748 9.035 12.729.951 14.738-5.992 15.313-6.372.478-.285-.192-1.617-.192-1.617zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#04534e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.473 12.523s.129.102.183.18c.055.078.067.137.035.145-.035.011-.316-.25-.546-.309-.23-.055-.434-.004-.477.11-.047.113-.031.28.074.347.11.07.602.149.602.149s.226-.032.234-.036l.145-.078.03-.082.036-.101.016-.043-.117-.133zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#0c8489"
        fillOpacity={1}
      />
      <Path
        d="M18.074 12.59c0 .027-.031.043-.062.043-.032 0-.055-.016-.055-.047 0-.027.023-.05.055-.05.031 0 .062.023.062.054zm-.289.101c0-.027.035-.027.067-.027.035 0 .058.024.058.05 0 .032-.05.071-.078.06-.039-.02-.047-.051-.047-.083zm.309.168c0-.035.031-.066.07-.066.04 0 .07.031.07.066 0 .04-.05.079-.09.079-.039 0-.05-.04-.05-.079zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M17.863 12.93c0-.032.032-.04.059-.04.031 0 .066.032.066.063 0 .035-.035.055-.066.055-.027 0-.059-.047-.059-.078zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M18.277 13.043c0-.027.016-.05.043-.05.028 0 .059.015.059.042 0 .027-.024.059-.05.059a.052.052 0 01-.052-.051zm.188-.145c0-.03.02-.027.05-.027.036 0 .067.02.067.05 0 .036-.039.056-.074.056-.031 0-.043-.043-.043-.079zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M18.055 12.563c0 .023-.012.039-.035.039-.028 0-.06-.016-.06-.04 0-.027.013-.035.04-.035.023 0 .055.008.055.036zm-.149.12c0 .028-.043.047-.07.047a.045.045 0 01-.047-.046c0-.028.023-.04.05-.04.028 0 .067.012.067.04zm.067.243c0 .023-.012.043-.04.043-.03 0-.066-.02-.066-.043 0-.028.008-.043.04-.043.027 0 .066.015.066.043zm.246-.082c0 .027-.051.054-.078.054-.028 0-.04-.046-.04-.074 0-.027.024-.047.051-.047.028 0 .067.04.067.067zm.363.078c0 .027-.043.023-.07.023-.024 0-.047-.027-.047-.054 0-.028.008-.055.07-.047.024.004.047.05.047.078zm-.215.11c0 .027-.02.05-.047.05-.023 0-.047-.023-.047-.05 0-.028.024-.04.047-.04.028 0 .047.012.047.04zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M18.398 12.879s.051-.016.09-.012c.04.004.043.02.043.028 0 .003-.031.015-.047.011l-.086-.027zm-.21.184s.042-.028.074-.032c.027-.008.054.004.05.02 0 .02-.011.023-.042.023-.032 0-.082-.011-.082-.011zm-.133-.317s.086.035.105.074c.016.035.024.043.008.051-.02.012-.04-.012-.05-.027-.013-.016-.063-.098-.063-.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M18.031 12.86s.067-.02.098-.02.039 0 .043.015c.004.016-.008.02-.031.02-.028 0-.11-.016-.11-.016zm-.215.003s.075.008.09.028c.02.02.02.039.012.046-.008.012-.043.004-.05-.003a.932.932 0 01-.052-.07zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M17.805 12.969c.004-.004.03-.043.054-.051.028-.008.059-.008.063.004.008.015-.024.035-.04.039-.019.004-.077.008-.077.008zm-.055-.324l.074.023c.024.02.031.035.024.043-.004.008-.032.012-.051-.004-.031-.023-.047-.062-.047-.062zm.16-.184s.074.02.098.055c.023.035.02.054.008.058-.012.008-.04-.008-.055-.023-.02-.016-.05-.09-.05-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M18.754 12.996s-.152.129-.488.113c-.34-.011-.649-.156-.727-.316l.031.078.075.102.238.125.265.058.215.012.196-.035.156-.074c.008-.004.023-.04.023-.04zm.043-.164s-.055-.07-.137-.145c-.078-.074-.387-.277-.387-.277l.25.117.165.137.117.133zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M18.813 12.531s.085.031.097.051c.016.023.035.043.035.043s-.023.055-.043.031c-.02-.023-.023-.023-.047-.054-.023-.032-.043-.07-.043-.07zm.253-.136s.079.03.11.07c.027.039.02.074.008.078-.012.004-.067-.043-.075-.059a2.339 2.339 0 00-.043-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M19.145 12.375s.078.059.09.082c.011.027.035.059.011.066-.023.008-.058-.027-.07-.05l-.031-.098zm.43.102s.058.023.066.07c.004.05-.008.086-.008.086s-.04-.035-.04-.043c0-.012.005-.02 0-.043-.007-.024-.011-.047-.019-.07zm.113.043s.046.046.054.078c.004.03.012.05-.015.054-.028.004-.04-.027-.04-.054v-.078zm-.766.94s.035.017.07.005c.035-.016.063-.043.055-.067-.004-.02-.024-.039-.05-.011-.024.027-.013.039-.032.05zm.422.114s.054-.008.093-.05c.04-.04.055-.07.028-.079a.048.048 0 00-.067.032c-.003.035-.054.097-.054.097zm.347.012s.043-.024.075-.055c.03-.031.05-.05.027-.07-.023-.024-.04-.008-.047.004-.012.008 0 .008-.012.043-.015.031-.043.078-.043.078zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M19.797 13.586s.043-.055.055-.086c.011-.031.015-.066-.004-.066-.02.004-.047.03-.047.054-.004.024-.004.098-.004.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M459.088 316.997c.096-3.709 5.36-12.364 11.484-12.269 2.584 0 7.56 1.332 11.58 3.139 3.446 1.522 4.498 3.234 6.795 3.804 2.201.57 5.551.095 5.551.095l7.656-.856-5.933 8.75-2.201 1.902s-1.915 3.71-7.274 5.802c-5.455 2.188-14.642.57-18.758-.38-4.115-1.046-8.996-4.946-8.9-9.987zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#04534e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.738 13.02h.016a.497.497 0 01.039-.137.725.725 0 01.168-.235.357.357 0 01.242-.117h.004c.05 0 .125.016.211.04.086.023.172.054.258.09.066.03.11.062.152.089.04.027.074.055.125.066a.677.677 0 00.235.004l.273-.03-.223.327-.086.082a.566.566 0 01-.293.23.766.766 0 01-.277.044c-.18 0-.371-.036-.477-.063a.502.502 0 01-.234-.137.343.343 0 01-.117-.246v-.007h-.031v.007c0 .106.05.2.125.274.07.07.164.12.25.144.109.024.3.063.484.063a.75.75 0 00.29-.047c.226-.09.308-.242.308-.246l-.016-.008.012.012.09-.078.265-.391-.347.04h-.008c-.016.003-.055.003-.098.003-.039 0-.082 0-.117-.008-.043-.012-.074-.035-.117-.062a.878.878 0 00-.157-.09 1.61 1.61 0 00-.261-.094.927.927 0 00-.219-.039h-.004a.341.341 0 00-.183.059.688.688 0 00-.211.226.525.525 0 00-.086.235zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M20.25 13.066c-.027.024-.055.024-.09.024-.031 0-.723-.426-.941-.41-.215.02-.418.113-.426.336-.004.222.05.222.094.285.047.062.468.156.468.156l.258-.004.207-.023.184-.098.098-.082.066-.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#0c8489"
        fillOpacity={1}
      />
      <Path
        d="M19.152 12.953c0 .043-.015.074-.058.074-.04 0-.07-.02-.07-.062 0-.043.023-.059.062-.059.043 0 .066.004.066.047zm.075-.191c0-.04.035-.055.074-.055.039 0 .07.016.07.05 0 .036-.031.067-.07.067-.04 0-.074-.027-.074-.062zm.414.113c0-.031.027-.059.062-.059a.06.06 0 01.059.059c0 .031-.028.055-.059.055-.035 0-.062-.024-.062-.055zm.086.254c0-.04.027-.074.062-.074s.07.02.07.058c0 .04-.011.078-.05.078-.036 0-.082-.023-.082-.062zm-.204.164c0-.035.032-.063.067-.063.039 0 .07.028.07.063s-.027.059-.066.059c-.035 0-.07-.024-.07-.059zm-.378-.066c0-.036.027-.059.058-.059.024-.004.043.008.055.027a.06.06 0 010 .063c-.012.02-.031.031-.055.027a.058.058 0 01-.058-.058zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M19.152 12.945c0 .035-.03.063-.066.063a.062.062 0 01-.063-.063c0-.035.028-.047.063-.047s.066.012.066.047zm.2-.199c0 .035-.008.055-.043.055-.036 0-.082-.02-.082-.055 0-.031.027-.059.062-.059s.063.028.063.06zm.402.11c0 .027-.027.05-.059.05-.03 0-.058-.023-.058-.05 0-.028.027-.051.058-.051.032 0 .059.023.059.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M19.543 13.027c0 .043-.02.075-.059.075-.043 0-.074-.02-.074-.063s.024-.062.067-.062c.039 0 .066.007.066.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M19.25 13.21a.062.062 0 01-.063.063c-.039 0-.066-.027-.066-.062 0-.031.043-.05.078-.05s.051.019.051.05zm.277-.19a.062.062 0 01-.062.062.062.062 0 01-.063-.062c0-.036.028-.063.063-.063s.062.027.062.063zm.332.085c0 .04-.023.067-.062.067-.04 0-.07-.031-.07-.067 0-.039.007-.05.046-.05.04 0 .086.011.086.05zm-.21.172c0 .036-.024.059-.063.059-.035 0-.07-.024-.07-.059 0-.035.03-.05.07-.05.035 0 .062.015.062.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M19.672 13.07s.101-.008.121.008c.02.02.016.047.008.055s-.047.012-.059-.004a.393.393 0 00-.07-.059zm-.102-.336s.078.02.114.055c.03.035.023.066.02.074-.009.004-.036.012-.06-.015a1.702 1.702 0 01-.074-.114zm-.234.164s.09.051.113.079c.02.027.024.05.016.062-.012.016-.055 0-.063-.016a15.355 15.355 0 00-.066-.125zm-.043.07s.105.012.129.032c.027.02.047.023.043.04-.004.015-.012.026-.031.023a.163.163 0 01-.07-.032 4.512 4.512 0 00-.071-.062zm-.117-.304s.105.016.125.031c.023.02.027.067.004.078-.024.016-.051-.011-.059-.03a.499.499 0 00-.07-.079zm-.23.16s.097.047.128.09c.016.024.031.043 0 .055-.027.008-.058-.043-.058-.055 0-.012-.07-.09-.07-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M18.926 12.953s.062-.015.094-.015c.027 0 .07-.012.07.015 0 .024-.035.027-.059.02-.02-.008-.105-.02-.105-.02zm.539.348s.066-.043.101-.035c.032.007.043.004.043.023 0 .024-.039.02-.05.02-.012 0-.094-.008-.094-.008zm-.38-.055s.028-.039.056-.043c.03-.004.043-.004.047.008.003.016-.028.035-.04.035h-.062zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M20.164 13.176s-.105.125-.25.187a.862.862 0 01-.453.07.919.919 0 01-.434-.113c-.136-.07-.246-.172-.265-.215-.02-.043.023.07.023.07l.125.165.145.066.218.055.207.023.157-.004.183-.027.121-.043.082-.05.063-.051zm-.195-.371s-.055.02-.18-.059c-.125-.074-.273-.176-.55-.176-.282-.004-.372.192-.391.203-.016.016.129-.168.129-.168l.125-.066.101-.016.094.004.125.032.113.035.13.043.112.062.137.074zm.379.086s-.164-.004-.211 0c-.047.004-.051.011-.059.023-.004.016-.015.031-.015.031l-.051-.11.222-.03.121.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M491.053 342.01c.287.667.957 1.332 1.722 1.428.766 0 2.489-.096 2.489-.096l5.455-.285 1.914-2.187 1.148-4.946s1.531-1.807 1.531-1.902l5.073-2.758 4.306-1.237 2.871-.38 3.829-1.237 2.87-1.521 1.245-1.807 1.244-2.854-1.244-3.709-3.063-4.09-5.072-2.092h-4.307l-4.785 1.712-8.422 1.997s-4.593 1.997-6.507 5.612c-1.914 3.614-1.914 4.565-2.202 9.32-.287 4.756-.095 11.033-.095 11.033zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#0c8489"
        fillOpacity={1}
        strokeWidth={0.700994}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#04534e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M20.137 13.969c.066 0 .015-.11.09-.239.074-.132.164-.289.187-.289.023 0 .027.024.055.016.027-.008.074-.05.074-.062.004-.008.004-.082.059-.13.058-.046.14-.113.175-.12.04-.008.055-.016.063 0 .008.02-.02.043.004.05.027.012.086.008.101-.03.016-.04.012-.06.012-.06s.04-.039.113-.023c.075.016.082.012.09.043.008.027-.035.031-.027.05.008.024-.004.02.004.036.008.016.02.062.07.059.05 0 .07-.032.07-.032l.016-.023s.012-.031-.004-.047c-.02-.012-.016-.027.004-.02.02.012.098.118.121.07.027-.042.027-.105.016-.12a19.22 19.22 0 01-.121-.176l-.192-.067-.254.024-.242.14-.226.122s-.012.183-.051.152c-.043-.035-.102-.125-.117-.098-.02.032-.059.168-.082.235-.024.07-.09.277-.082.355.007.078.05.184.074.184zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M20.363 13.668a.095.095 0 00-.05.031c-.008.012-.02.031-.016.055.008.027.043.05.047.05h.027l.063-.015s.02-.023.02-.055c0-.027-.017-.035-.024-.039a.381.381 0 01-.067-.027zm.387-.32c-.035-.012-.05.011-.055.02-.008.01-.004.038-.004.038s.008.047.024.055c.02.008.066.027.082.008.015-.016.031-.028.031-.059-.004-.031-.047-.047-.047-.047zm.313.074c-.004-.012-.032-.02-.055-.016-.02.004-.047.028-.035.07.007.04.047.044.074.036.031-.008.023-.051.023-.059l-.008-.031zm-.903.062c0 .02.031.059.078.055.043-.004.07-.035.075-.062.003-.028-.024.023-.06.03-.03.009-.05.016-.066-.003-.011-.016-.027-.02-.027-.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8cbebf"
        fillOpacity={1}
      />
      <Path
        d="M20.453 13.734s.004.043-.023.063c-.028.02-.047.02-.063.02-.015 0-.035-.005-.047-.02l-.023-.043s.035.055.082.039c.05-.012.074-.059.074-.059zm.84-.52s0 .04-.031.056c-.032.015-.047.023-.063.02a.061.061 0 01-.05-.028c-.036-.055-.016-.094-.016-.094s.027.102.078.094c.05-.008.082-.047.082-.047zm-.746.18s-.027.079-.078.079c-.051 0-.047-.016-.043-.028.004-.008.023.012.043.004a.417.417 0 00.078-.054zm.144-.015s-.007.059.012.078a.09.09 0 00.063.027c.023 0 .039-.004.054-.027.016-.023.008-.047.008-.047s0 .012-.015.031c-.02.016-.032.02-.047.02-.016 0-.043-.004-.055-.024-.008-.019-.02-.058-.02-.058zm.266-.274s.016.043-.02.079c-.03.03-.093.015-.093.015s.05.012.074-.015c.027-.028.039-.079.039-.079zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M20.11 14.09s.328-.008.355-.05c.023-.048-.031-.227.168-.368.199-.14.355-.137.46-.149.106-.007.333-.078.376-.28.023-.126-.145-.134-.207-.255-.063-.117-.227-.07-.235-.07-.007 0-.187-.004-.273.082-.05.047-.043.11-.07.14-.024.028-.243 0-.266.036-.023.035.008.11-.008.125-.015.015-.07-.047-.07-.047l.02-.176.277-.164.316-.176s.207.008.215.004c.008-.004.215.11.219.11.008.003.11.125.11.125a.584.584 0 00.019.27.453.453 0 01-.418.316.91.91 0 00-.446.16c-.086.062-.129.336-.129.37 0 .032-.41.012-.41.012zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#04534e"
        fillOpacity={1}
      />
      <Path
        d="M20.246 13.441c-.016.016-.043.016-.047-.004-.015-.054.016-.136.016-.136s0 .086.008.097c.004.016.023.012.03.024 0 .004.009.012-.007.02zm.207-.043c-.015-.003-.012-.054 0-.078.012-.02.106-.09.106-.09l-.043.094c-.012.028-.043.082-.063.074zm-.082.34c-.012 0-.016-.027-.016-.062 0-.04.063-.106.063-.106s-.02.059-.02.078c-.003.02.008.036.008.059-.004.02-.02.027-.035.031zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M20.527 13.645s-.03.035-.066.05c-.031.02-.066.047-.09.043-.02-.008.016-.05.027-.054.055-.024.13-.04.13-.04zm.282-.407s-.04.032-.055.075c-.02.046-.027.082-.008.09.016.007.043-.051.047-.071 0-.02.016-.094.016-.094zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M20.91 13.379s-.023-.024-.07-.035c-.047-.012-.07 0-.074.011-.004.016-.04.036-.024.047.02.008.04-.02.051-.023.016 0 .031-.012.059-.008l.058.008zm-.058-.277c.015.015.043-.012.066-.04.02-.027.039-.074.039-.074s-.047.024-.066.043c-.024.016-.051.063-.04.07zm.43-.008s-.055.023-.075.05c-.02.024-.043.051-.023.067.02.012.035-.016.05-.035.016-.02.047-.082.047-.082zm-.122.289s-.02.039-.055.062c-.035.024-.078.035-.085.02-.004-.012.007-.04.02-.043.015-.008.023-.008.054-.016s.066-.023.066-.023zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#231f20"
        fillOpacity={1}
      />
      <Path
        d="M18.535 12.45c.024-.15-.039-.282-.137-.298-.097-.015-.195.094-.218.243-.024.144.039.277.136.293.098.015.196-.094.22-.239zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="url(#a)"
      />
      <Path
        d="M387.644 247.762l-2.212 5.536 1.803-.244 1.064-4.885zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M388.709 245.32c-.82-.081-1.556.57-1.638 1.384-.082.896.491 1.628 1.228 1.71.82.081 1.557-.489 1.639-1.303.082-.895-.41-1.628-1.229-1.79zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M485.204 259.322l-5.488 5.21 2.294.57 3.768-4.966zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M487.662 257.205c-.901-.488-2.048-.162-2.622.733a1.812 1.812 0 00.574 2.524c.9.488 2.048.162 2.621-.733s.328-2.035-.573-2.524zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M344.885 229.446l2.949 6.431 1.228-1.79-3.276-4.885zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M343.738 226.678c-.737.57-.82 1.71-.164 2.442.574.814 1.72.896 2.458.326.655-.57.737-1.71.163-2.524-.655-.732-1.72-.895-2.457-.244zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#fcca3e"
        fillOpacity={1}
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#aa8c30"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.535 11.832s.02.012-.004.004c-.027-.008-.086.02-.086.062 0 .043.032.067.063.067s-.012.004-.012.004l-.039-.012-.016-.023-.015-.036.012-.035.023-.031.031-.012.02.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M18.473 12.012s-.016-.004-.032.02l-.046.066.058-.149.035.02zm4.78.402s.02.024-.007.004c-.023-.02-.11-.016-.129.027-.023.047 0 .09.04.106.034.015-.016 0-.016 0l-.043-.031-.008-.036.004-.046.031-.036.043-.023.043.004.02.012zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M23.09 12.586s-.02-.012-.05.008c-.028.02-.087.05-.087.05l.145-.136.03.035zm-6.7-1.676s.028-.012 0 .004c-.023.016-.046.09-.011.125s.078.024.101 0c.028-.027-.003.012-.003.012l-.043.027-.032-.008-.039-.011-.023-.04-.008-.046.016-.036.02-.015zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M16.496 11.105s-.02.012-.012.047l.02.09-.078-.168.043-.015zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#aa8c30"
        fillOpacity={1}
      />
      <Path
        d="M16.863 11.902c.098-.05.114-.207.043-.347-.074-.145-.21-.22-.304-.172-.098.05-.118.207-.043.347.074.145.21.22.304.172zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="url(#b)"
      />
      <Path
        d="M16.406 11.578s.059.012.094-.004c.031-.015.035-.043.043-.05.012-.008.02-.04.016-.06a.256.256 0 00-.059-.089c-.016-.004-.063 0-.07-.008-.008-.008.008-.027-.008-.031-.02-.004-.11.101-.094.117s.027-.008.031.004c.004.016 0 .055 0 .07 0 .016.047.051.047.051zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M16.496 11.383c.008.015.04.058.055.066a.19.19 0 00.066 0c.012-.004.055-.047.059-.066 0-.016 0-.031-.008-.047-.008-.02-.004-.066-.02-.07-.015-.004-.023-.004-.03-.016-.009-.008.003-.027-.009-.043-.011-.02-.156.066-.148.082.012.02.027 0 .031.012.008.011-.004.066.004.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M16.824 11.348c.008-.024.004-.098-.012-.11-.015-.015-.039-.02-.039-.027-.003-.012.016-.016.016-.031 0-.016-.16.004-.148.023.011.02.039.008.035.02 0 .011-.028.023-.028.039a.221.221 0 00.012.07c.008.012 0 .023.016.031.02.008.02.008.035.012.02.008.082.004.09-.004.008-.008.015-.004.023-.023zm1.367.808s.028.047.059.055c.027.012.047 0 .055.004.011 0 .035-.016.043-.027a.193.193 0 00.023-.09c-.008-.012-.035-.04-.035-.051 0-.008.02-.008.012-.024-.008-.011-.125-.011-.125.008 0 .024.02.012.015.024-.008.011-.031.03-.043.043-.008.007-.004.058-.004.058zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M18.363 12.098a.24.24 0 00-.008.074c.004.012.028.039.04.043.011.004.062.008.074 0 .011-.012.02-.02.023-.035.008-.016.04-.043.031-.055-.007-.012-.011-.016-.007-.027 0-.012.015-.012.02-.032.003-.02-.134-.058-.138-.043-.003.016.016.016.016.024-.004.012-.047.035-.05.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M18.578 12.285c.016-.008.059-.05.059-.07.004-.02-.012-.035-.008-.043.008-.004.02.004.031-.004.008-.012-.098-.102-.101-.082-.008.016.015.027.007.035-.007.004-.03-.004-.039.004-.011.004-.035.04-.035.05-.004.009-.02.012-.012.028a.142.142 0 01.012.027.18.18 0 00.055.055c.012.004.012.008.031 0zm4.137.348s0 .05.02.074c.019.023.038.023.05.027a.094.094 0 00.047 0c.012-.007.055-.054.055-.066.004-.012-.012-.05-.008-.059.004-.007.023 0 .023-.015-.004-.016-.101-.067-.109-.051-.012.016.012.02 0 .027-.008.008-.04.012-.05.016-.013.004-.028.047-.028.047zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M22.875 12.668c-.012.004-.043.039-.043.047-.004.012 0 .043.008.05.008.012.043.036.058.036.016-.004.024-.004.04-.016.011-.008.05-.012.05-.023 0-.012 0-.02.004-.028.008-.007.024 0 .035-.011.012-.012-.074-.106-.086-.094-.011.008.004.016-.003.023-.008.004-.051.004-.063.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M22.906 12.902c.02.004.074.004.086-.007.016-.008.016-.028.024-.028.007 0 .011.012.023.012s0-.121-.016-.113c-.011.007-.007.027-.015.027s-.02-.02-.031-.023c-.008-.004-.047.003-.055.007-.008.008-.02 0-.024.012-.007.016-.007.012-.011.027a.188.188 0 000 .067c.004.008.004.012.02.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#e92736"
        fillOpacity={1}
      />
      <Path
        d="M16.504 11.441c.016.02-.004.07-.012.082-.012.016-.086-.003-.086-.02 0-.01-.008-.034.004-.046.008-.016.031-.043.05-.039.02.004.04.02.044.023zm.02-.09c-.008.02.003.04.015.051.008.008.059.024.074.012.016-.008.035-.09.028-.101-.012-.012-.04-.012-.047-.012a.215.215 0 00-.07.05zm.175-.081c-.008.015-.008.039 0 .046.004.008.04.032.059.032.02-.004.031-.059.031-.07 0-.012-.008-.016-.02-.02-.015-.008-.07.012-.07.012zm1.633.87c-.004.02-.043.036-.059.04-.015 0-.046-.059-.039-.067.008-.008.02-.027.036-.027.011 0 .043-.004.05.012.012.011.012.035.012.043zm.066-.042c-.015.007-.02.027-.023.039 0 .011.023.05.035.054.016.004.078-.027.078-.043.004-.011-.011-.03-.02-.035-.003-.008-.058-.015-.07-.015zm.153.062c-.016.008-.028.02-.028.031-.003.008.004.043.016.055.012.012.05-.016.059-.023.007-.004.004-.012 0-.024-.004-.011-.047-.039-.047-.039zm4.289.52c-.012.011-.05.008-.067.004-.011-.008-.011-.07 0-.075.008-.004.024-.011.036-.007.011.003.039.02.043.035a.113.113 0 01-.012.043zm.062.004c-.015-.004-.03.007-.039.015-.004.012-.008.051 0 .059.012.012.078.012.086.004.008-.008.004-.032.004-.035a.269.269 0 00-.05-.043zm.067.125c-.012-.008-.032-.004-.035 0-.004.004-.028.027-.024.043 0 .015.043.023.05.023.009 0 .013-.004.02-.012.004-.011-.011-.054-.011-.054zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f7e204"
        fillOpacity={1}
      />
      <Path
        d="M22.797 13.04c.113-.102.164-.235.113-.294-.05-.059-.187-.02-.3.086-.114.105-.165.234-.114.293.05.059.188.02.3-.086zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="url(#c)"
      />
      <Path
        d="M17.86 8.938s-.239.019-.407-.008c-.168-.032-.129-.457-.133-.47-.004-.015-.101-.116-.086-.214.016-.094.325-.344.368-.36.027-.007.085.016.085.016s.079-.074.102-.074c.023 0 .059.043.047.063-.008.02-.113.082-.121.129-.008.046 0 .093-.031.14-.028.047-.09.11-.094.149-.008.039-.027.074.004.09.031.015.129.003.215-.04.086-.039.125-.09.136-.086.012.004-.05.11-.148.149-.094.043-.156.09-.203.082 0 0-.055.125.11.133.163.008.253-.035.253-.035zm-.938 1.003s.129.051.129.192c0 .14-.14.258-.137.508.004.25.043.25.371.52a.347.347 0 01.098.16c.02.077.078.554.39.554.317-.004.36-.203.36-.203l-.137-.2s-.11.032-.168.02c-.058-.015-.11-.055-.144-.133-.036-.074-.043-.257-.098-.34-.133-.199-.367-.23-.371-.44 0-.208.144-.231.105-.481-.043-.25-.336-.368-.336-.368l-.12-.05-.04.25zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M17.79 8.2c.105-.024.046-.302.046-.302l-.074.063s.047.059.047.121c0 .066-.02.117-.02.117zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f1a720"
        fillOpacity={1}
      />
      <Path
        d="M17.984 10.965l-.054-.047c-.04-.023-.203-.156-.176-.559.027-.449.683-.687.726-.867.047-.199.196-.289-.328-.695l-.12.144.214.16s.047-.027.05.036c0 .058-.058.11-.073.16-.012.043-.336.27-.364.293-.023.02-.183.148-.183.148s-.086.082-.164.258c-.078.176-.04.402-.04.402s.005.477.512.567zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M17.664 11.215l.04.172-.106.039-.043-.004-.035.015-.079.079-.02-.008s-.015.004-.019-.043l-.007-.094.093.04.035.003.028-.012.039-.09zm-.3.031s-.036-.039-.052-.062c-.011-.02-.019-.024-.054-.055l.07-.04h.074l-.011.095zm.171-.27s.047.024.063.06c.015.034.039.081.039.081l-.121-.012-.094-.027.058-.086zm-.047.75s-.023-.015-.039-.054c-.015-.04-.027-.102-.027-.102l.082-.015.094.039h.027s-.023.047-.027.05l-.09.079zm.32-.261s-.07-.02-.081-.055c-.012-.035-.024-.027-.024-.027l-.02.094-.03.09s.007.015.011.015l.07-.016c.004-.004.055-.054.055-.058a.38.38 0 00.02-.043zm-.3.305s.035.02.086.046c.05.032.078.032.078.032l.039-.043.039-.075.004-.011-.192.02zm.277-.075l.164-.097.012-.09-.031-.028s.004.004-.04.004h-.054l-.031.11zm-.113.157s.113.046.312-.024c.09-.035.106-.078.106-.078l-.078-.031-.078.066zm-.16-1.282l-.02-.082c-.012-.05-.012-.07-.012-.07l.06.031.085.063-.063.047zm.14.239s-.03-.032-.054-.067c-.024-.039-.04-.074-.04-.074l.063.012.07.035-.03.094zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M17.281 8.168c-.008.039-.023.113.032.125.03.008.148 0 .285-.156.062-.075.066-.149.066-.149l.023-.086s-.05-.035-.136.016c-.078.05-.27.25-.27.25zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#c6c7a6"
        fillOpacity={1}
      />
      <Path
        d="M17.676 7.95c0-.016-.012-.028-.024-.028-.011 0-.023.012-.023.027 0 .016.012.024.023.024.012 0 .024-.008.024-.024zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#1c242f"
        fillOpacity={1}
      />
      <Path
        d="M17.48 7.973c-.058.047-.113.105-.113.105s.094-.027.164-.094a.238.238 0 01.164-.043c.024.008.016-.023.004-.03-.023-.016-.09-.028-.101-.016-.004 0-.059.035-.118.078zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M17.754 10.523s-.004-.02-.004-.066c-.004-.047 0-.07 0-.07l-.055.047-.05.07.082.031zm-.281-.16s-.004-.074 0-.144c.004-.07.03-.2.03-.2l.036.086.098.157.031.023-.082.059-.086.031zm.285-.039s.004-.035.012-.07a.482.482 0 01.035-.082s0 .004-.004.008c-.004 0-.086.07-.09.07a.298.298 0 01-.035.035l.05.04h.032m-.227-.368s.012-.047.055-.102l.086-.113.039.149.02.129.003.027s-.027.012-.043.012c-.011 0-.101-.004-.113-.02a1.2 1.2 0 01-.047-.082zm.293.176s.028-.031.055-.055c.023-.023.062-.066.062-.066l-.203.039.032.066zm-.12-.418s.019-.008.073-.063c.055-.054.082-.047.082-.047l.02.215-.106-.03zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M17.953 10l.121-.125-.199-.059.035.145zm.086-.328l.012-.207s-.04.015-.094.062a.45.45 0 01-.074.055l.023.04.07.046zm.18-.203v-.164l-.008.004s-.027.043-.063.07a.256.256 0 00-.046.05l.05.036zm.074.222l.098-.082c.062-.046.093-.101.093-.101l-.261-.02.011.102zm-.605-.867l-.008.114h.215l-.051-.075-.067-.039-.062-.066zm.417 1.024a.652.652 0 00.094-.078c.031-.032.078-.063.078-.063l-.207-.023.004.14zm.395-.375s.02-.082.02-.164c-.004-.079-.016-.114-.016-.114l-.156.106.023.078.059.062zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M18.234 9.281s.047-.054.051-.09v-.02h.121l.074.009.008.008-.054.062-.075.047-.093.012zm.246-.12s-.046-.083-.074-.13a.266.266 0 00-.05-.066l-.063.176-.004.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M16.973 10.379l-.024.05s.082-.042.145-.042c.062.004.133.082.133.082l.015-.059s-.082-.082-.137-.086c-.054-.004-.132.055-.132.055zm.043-.367s.015.023.02.027c.003.008.007-.059.089-.094.082-.039.125-.008.125-.008s-.016-.05-.05-.058c-.04-.012-.075-.004-.118.027-.047.031-.066.106-.066.106zm.277.277s-.04-.082-.105-.101c-.067-.016-.153.035-.153.035l-.015.047s.093-.055.16-.028c.066.028.093.106.093.106zm-.313-.32c.004.011.02.031.02.031s-.008-.09.031-.133a.252.252 0 01.07-.062l-.035-.02s-.054.035-.074.074a.192.192 0 00-.012.11zm-.039-.149c.02-.043.079-.062.079-.062s-.008-.012-.02-.016c-.012-.008-.027 0-.027 0s-.035.02-.055.067c-.023.05-.02.125-.02.125l.032.015s-.004-.082.011-.129zm.497-1.203c.05-.027.09-.02.09-.02s-.079.079-.044.18c-.043.082-.054.149-.054.149h.039s.015-.067.031-.117c.043.086.117.132.117.132l.063-.004s0-.082.03-.156l.009.008c.066.074.125.09.125.09v-.024s-.07-.039-.114-.097l-.003-.004.003-.004c.047-.074.114-.102.114-.102l.043.036.011-.012-.035-.043h-.035s-.07.059-.113.11a.48.48 0 01-.047-.102l-.031-.008s-.067.008-.125.105c-.008-.074.074-.152.074-.152l-.004-.027s-.082.015-.148.035c-.067.02-.106.078-.106.078l-.004.047s.059-.07.113-.098zm.09.133a.305.305 0 01.12-.09s0 .043.047.106c-.03.054-.047.14-.047.14s-.062-.043-.12-.125a.03.03 0 01-.008-.02c0-.003.003-.007.007-.011zm-.477 1.332l.004.05s.05-.054.125-.058c.074 0 .14.059.14.059s0-.067-.011-.07a.25.25 0 00-.13-.043c-.054 0-.128.062-.128.062zm1.34-.707l-.028-.063a.884.884 0 00.14-.117l-.023-.035h-.101c-.02 0-.063-.008-.086-.012.004-.015.02-.058.031-.101.02-.059.035-.09.035-.09l-.035-.035s.012.031-.05.039c-.063.012-.172-.047-.172-.047v.024s.097.03.152.039a.11.11 0 00.078-.016c-.008.02-.027.055-.035.086-.008.027-.016.043-.016.055 0 .007.012.015.012.015l-.008.055s.063.008.09.008c.031 0 .105.004.105.004s-.054.066-.105.09a.056.056 0 01-.023.007c-.004-.008-.063-.097-.063-.097l-.008.035.051.07a.418.418 0 01-.098-.008l-.023.028v.156l-.11-.035-.023.015v-.004l-.027.024s-.024.09-.02.2v.003c-.097-.023-.148-.086-.148-.086l-.024.023s-.02.09.004.2c-.086-.016-.16-.09-.16-.09l-.031.027s.02.176.039.274c.004.007.004.015.008.023-.016.004-.032.004-.047.004-.09-.004-.14-.086-.14-.086l-.028.063s.031.171.129.25l.02.015c-.079.067-.176.078-.176.078l.003.055.118.086c.004.004.011.004.015.008-.047.043-.101.058-.101.058l.015.035s.075-.05.11-.082c.05.024.117.032.117.032v-.032s-.047-.003-.094-.02l.008-.003c.027-.027.082-.113.082-.113l.008-.063s-.035-.008-.074-.035c.117-.082.12-.117.12-.117l.02-.04s-.039-.019-.066-.073a1.56 1.56 0 00.183-.047c0-.004.012-.012.012-.012s-.043-.074-.062-.164c.09.023.183.039.183.039l.031-.023s-.023-.075-.03-.157l.198.016.02-.02s-.063-.117-.059-.183V9.5c.02.004.04.008.059.008.09-.004.191 0 .191 0l.016-.035s-.086-.059-.11-.098zm-.657.977s-.027.058-.086.128a.03.03 0 00-.015.016.117.117 0 00-.031-.016c-.07-.039-.086-.085-.086-.085s.039-.02.152-.098c.062.05.066.055.066.055zm.055-.2s-.035.043-.121.121l-.027-.027c-.055-.074-.121-.133-.114-.238 0 0 .043.074.137.066.016-.004.04-.008.063-.011a.2.2 0 00.062.09zm.125-.156s-.086.027-.168.04c0-.009-.004-.016-.008-.028-.031-.098-.031-.25-.031-.25s.066.047.164.074c.027.113.043.164.043.164zm-.027-.187c-.016-.09.004-.184.004-.184s.05.05.144.066c.008.086.016.13.016.13s-.07.003-.164-.012zm.363-.141s-.059.023-.176.008c0-.012-.004-.024-.004-.035-.004-.106.008-.192.008-.192.016.008.078.031.137.047v.008a.649.649 0 00.035.164zm-.008-.195l-.008-.004c.004-.067.004-.164.004-.164s.059.015.102.008c.012.027.004.035.031.082.027.043.07.078.07.078s-.144.011-.199 0zm-.472 1.172l-.008-.036s-.055.043-.07.086c-.008 0-.016 0-.02-.004l-.129-.046.016.023s.09.043.117.05h.008c-.012.032-.02.06-.032.09l.016.02s.008-.062.031-.11c.031.005.074.009.074.009s-.003.023-.011.05l-.024.094.028.016.129.004-.024-.028s-.004-.004-.047-.008a.266.266 0 00-.066.008l.023-.078c.016-.055.016-.05.016-.05l-.016-.047s-.043.011-.07.011a.196.196 0 01.059-.054zm-.707-.082c.082 0 .148.054.148.054l-.004-.039s-.062-.086-.133-.086c-.07 0-.156.074-.156.074v.079s.066-.082.145-.082zm.835 1.222c-.082.035-.171.035-.171.035s.023-.035.046-.097c.16-.043.192-.153.192-.153l-.008-.039s-.039.098-.168.153c.023-.075.047-.204.047-.204l-.043-.011s-.063.078-.121.101c.039-.082.047-.172.047-.172l-.02-.03s-.043.034-.113.05h-.031c.039-.055.105-.203.105-.203l-.012-.027s-.05.132-.105.199l-.023.023c-.055-.015-.137-.066-.137-.066l.012.027s.043.035.109.055c-.04.043-.082.082-.082.082l.004.062s.101.02.187.028a.468.468 0 01-.125.129l.028.043s.082 0 .234-.04a.637.637 0 01-.074.118s.137.007.23-.04c.094-.046.121-.097.121-.097L18 11.684s-.02.066-.102.101zm-.433-.258s.043-.047.074-.09h.008c.094.02.121-.007.121-.007s.016.05-.043.144c-.066-.004-.16-.047-.16-.047zm.086.192l.086-.098c.004-.008.011-.016.015-.023.094-.004.149-.078.149-.078s.008.078-.031.171c-.122.043-.22.028-.22.028zm-.117-.617c.09.007.207.046.207.046l-.016-.046s-.11-.028-.176-.036c.028-.07.098-.101.098-.101l-.031-.016s-.04.004-.09.094c-.004.004-.008.012-.012.02h-.016c-.082-.004-.152.046-.152.046l.012.024s.074-.031.14-.031c-.023.07-.043.148-.043.148l.02.043.059-.191zm-.188-.387l-.02-.05s-.093-.032-.167.003c-.07.035-.125.117-.125.117l.027.059s.05-.094.117-.117c.07-.02.168-.012.168-.012zm.188.148l-.063-.035s-.105.031-.14.067c-.036.039-.067.132-.055.16.008.027.043.047.043.047s.015-.102.066-.149c.05-.05.149-.09.149-.09zm-.243-.031c.043-.043.122-.059.122-.059l-.04-.035s-.093.012-.144.055c-.047.047-.11.137-.11.137l.055.05s.074-.109.117-.148zm.32-2.816l.005-.004c.05-.067.097-.067.117-.059.008 0 .02 0 .027-.004v.004-.004h.008c.004 0 .004 0 .004.004a.606.606 0 00-.047.149c-.016.07-.047.078-.066.125-.024.043-.07.113-.07.175-.005.063.011.098.027.106.015.008.047-.028.047-.043-.004-.02-.02 0-.032 0-.011 0-.011-.02-.015-.059-.008-.035.043-.14.062-.172.02-.035.055-.074.067-.129.003-.05.043-.16.043-.16 0-.004-.028-.011-.083-.015-.039 0-.093.035-.12.074-.024.039-.106.07-.106.07s.09 0 .133-.058zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M17.82 8.633l-.152.004.043.117zm-.183-.004l-.032-.027-.02-.02-.054.035-.035.117.016.016zm-.02.312l-.113-.168-.067.141.032.012.078.008c.05.007.07.007.07.007zm.465 2.82l-.008.005c-.027.015-.144.09-.293.09a.413.413 0 01-.215-.06.276.276 0 01-.097-.112c-.032-.07-.047-.16-.063-.246a.788.788 0 00-.066-.235c-.05-.082-.149-.133-.235-.207a.453.453 0 01-.18-.328c-.003-.016-.003-.031-.003-.05a.73.73 0 01.07-.286c.035-.082.07-.152.07-.215v-.031c-.011-.05-.054-.09-.093-.121-.04-.031-.074-.05-.074-.05h-.004l-.059-.017-.004.02.059.016v-.012l-.004.012s.004 0 .008.004a.36.36 0 01.078.054c.035.028.066.063.074.098v.027c0 .055-.031.125-.066.207-.036.086-.075.18-.075.293 0 .02 0 .035.004.051.016.172.098.27.188.344.086.074.18.129.226.203.047.074.063.195.082.312a.73.73 0 00.051.164c.024.051.055.094.102.121.07.043.148.063.226.063a.573.573 0 00.309-.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M17.945 11.45c-.008.003-.039.023-.078.023-.035 0-.07-.012-.11-.051a.259.259 0 01-.073-.145c-.012-.054-.02-.12-.059-.207-.035-.09-.133-.16-.219-.23-.09-.07-.168-.14-.183-.215-.004-.012-.004-.027-.004-.043 0-.062.027-.125.054-.2a.674.674 0 00.055-.25v-.05c-.015-.125-.11-.219-.2-.277a.787.787 0 00-.179-.094l-.004.016s.004.003.016.007c.031.012.113.051.191.11.075.058.145.14.157.242v.047a.65.65 0 01-.055.242c-.027.074-.055.14-.055.207 0 .016 0 .031.004.047.02.086.102.156.192.226.085.07.18.141.214.223.036.086.043.149.055.203a.271.271 0 00.078.156.17.17 0 00.125.055.152.152 0 00.09-.027zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M18.52 10.969s.109.027.105.117c-.004.086-.05.21-.05.21l-.153-.136.086-.074.031-.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M349.636 205.269s-2.294.732-2.785-.245c-.41-.977-.246-1.79-.246-2.035-.082-.163-1.393-.244-1.229-1.546.082-1.303 1.802-1.222 2.13-1.222.328 0 .41-1.953 1.556-1.872 1.147.081 1.72 1.384 1.72 1.384zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M352.093 205.838s-1.884.977-2.457.082c-.655-.977 0-2.198-.246-2.442-.246-.163-1.392-.57-1.147-1.71.246-1.14 1.393-.733 1.802-.977.492-.244.738-1.872 1.966-1.628 1.147.326 1.393 1.303 1.393 1.303s-.983 4.477-1.31 5.372zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M355.37 206.245s-.574 1.222-1.966.977c-1.31-.244-.901-2.279-1.147-2.605-.164-.325-1.147-.57-.983-1.872.164-1.221 1.393-1.058 1.884-1.221.492-.163.983-2.117 1.884-1.791.901.244 1.72 1.384 1.557 1.872 0 0-1.884.652-2.212 1.954-.246 1.303.983 2.686.983 2.686zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.35}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.355 10.95s-.082-.09-.136-.169c-.059-.082-.149-.172-.149-.172l-.136-.07-.09-.148-.012-.172.04-.102.054-.078s-.29.106-.145.66c.063.239.223.274.223.274l.266-.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#af7029"
        fillOpacity={1}
      />
      <Path
        d="M18.223 9.09c.027 0 .039.008.047.02a.079.079 0 01.011.042v.024h-.004l.012.004-.008-.004c-.097.21-.3.312-.48.445a.726.726 0 00-.344.648v.028c.008.32.129.492.262.582a.61.61 0 00.328.101h.023s.04-.007.09-.011c.055-.004.125-.008.188-.008.039 0 .078 0 .109.004.031.008.055.015.059.023a.063.063 0 01.011.035c0 .024-.015.051-.039.075a.211.211 0 01-.054.043l.007.015a.183.183 0 00.063-.047c.023-.023.043-.054.043-.086 0-.02-.004-.035-.016-.046-.011-.016-.039-.024-.07-.032-.031-.004-.07-.004-.113-.004-.13 0-.278.016-.278.016v.012-.012h-.008c-.003.004-.007.004-.015.004a.59.59 0 01-.317-.098c-.128-.086-.246-.25-.253-.566v-.027c0-.172.039-.297.101-.395.09-.148.23-.238.371-.332.137-.098.274-.195.348-.36V9.18s.004-.012.004-.028a.107.107 0 00-.016-.054c-.012-.016-.031-.028-.062-.028zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#816c2a"
        fillOpacity={1}
      />
      <Path
        d="M18.613 11.04s-.07.124-.086.128c-.02 0 .059.02.075.047l-.016.031s-.074-.055-.125-.055l-.004-.046s.04-.016.07-.043a.239.239 0 00.055-.11zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M18.879 11.121l-.172.047-.086-.055s.008-.07-.031-.101c-.04-.032-.063-.04-.098-.055-.035-.016-.156-.016-.156-.016l-.309-.336.114.012.183-.023.168-.016.09.016.098.027.047.043.054.047.051.086.035.098.012.105zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fcca3d"
        fillOpacity={1}
      />
      <Path
        d="M18.887 11.11s-.063.019-.14.019c-.079-.004-.126-.016-.126-.016s.004.008-.012.059a.704.704 0 01-.03.082l.003.203.16.031.086-.035.043-.219zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#af7029"
        fillOpacity={1}
      />
      <Path
        d="M18.84 11.027l.008.078.03.008v-.07zm-.152-1.886l-.02-.137-.055-.094-.066-.094-.074-.078-.04-.035-.015-.027-.18.008-.093.109s.242.176.335.363c.079.024.141.074.176.11l.008-.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fcca3d"
        fillOpacity={1}
      />
      <Path
        d="M18.516 9.293c-.004.14-.028.207-.047.238l.11-.125.077-.14a.439.439 0 00-.176-.11c.02.047.036.09.036.137zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#af7029"
        fillOpacity={1}
      />
      <Path
        d="M18.766 11.367s-.051-.062-.086-.101a.282.282 0 00-.086-.055l-.008.016s.004 0 .008.003a.272.272 0 01.07.051l.059.063.027.035zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#816c2a"
        fillOpacity={1}
      />
      <Path
        d="M18.871 11.215s-.016.062-.078.117c-.063.055-.137.094-.137.094l.172.062.117-.11zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#6f5b24"
        fillOpacity={1}
      />
      <Path
        d="M18.895 11.363l-.008.02-.035.031-.024.027.043-.18.031.052.004.03zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#404118"
        fillOpacity={1}
      />
      <Path
        d="M375.111 185.243s-4.997.407-8.519-.163c-3.522-.651-2.703-9.524-2.785-9.769-.082-.325-2.13-2.442-1.802-4.477.328-1.954 6.799-7.164 7.7-7.49.573-.162 1.802.326 1.802.326s1.638-1.546 2.13-1.546c.491 0 1.228.895.983 1.302-.164.407-2.376 1.71-2.54 2.686-.163.977 0 1.954-.655 2.931-.573.977-1.884 2.28-1.966 3.093-.164.815-.573 1.547.082 1.873.655.325 2.703.081 4.505-.814 1.802-.814 2.622-1.873 2.867-1.791.246.081-1.065 2.28-3.112 3.093-1.966.896-3.277 1.873-4.26 1.71 0 0-1.147 2.605 2.294 2.768 3.44.162 5.324-.733 5.324-.733zm0 0"
        transform="matrix(.04769 0 0 .04798 -.029 .049)"
        fill="none"
        strokeWidth={0.3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#78732e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M487.895 173.573s-10.72-1.997-10.528 6.943c.096 2.854.67 3.805 2.967 4.47 2.297.571 6.795.856 10.719 4.28 3.828 3.52 4.115 5.992 4.115 8.085 0 2.092-.957 3.994-.957 3.994l2.393 11.794 2.488 8.75 7.273-4.185 4.307-12.935-5.455-23.397zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
        strokeWidth={0.510724}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#4d2a15"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M20.352 8.977s.152-.055.191-.18c.012-.035-.152-.184-.156-.184-.004 0 .082.043.125.078.039.04.07.055.082.047.011-.004.082-.168.054-.207-.027-.035-.066-.117-.132-.16-.063-.043-.145-.039-.145-.039s.113-.035.172-.004c.059.035.066.07.07.059a.659.659 0 00-.039-.235c-.023-.054-.05-.082-.12-.093-.071-.016-.15-.008-.15-.008s.102-.059.18-.04c.078.02.075.06.082.052a.846.846 0 00-.054-.188.422.422 0 00-.137-.117c-.027-.008-.11-.012-.11-.012l-.042.004s.058-.043.132-.035c.075.008.082.031.09.027.012-.004-.008-.015-.05-.047-.047-.03-.266-.125-.266-.125l-.2-.004s-.003-.05.055-.058c.059-.012.075.008.07-.008-.003-.016-.167-.05-.167-.05s-.094 0-.137.003c-.04 0-.188.016-.188.016s.012-.032.043-.055a.2.2 0 01.082-.039c.067-.02-.035-.07-.035-.07l.055-.082.242.02.516.3.242.21.152.392-.047.675-.343.285s-.153.024-.153.02c0-.008.036-.148.036-.148zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.902 7.3s-.015-.046-.015-.105c0-.062.011-.058.011-.058s-.164-.024-.285.074c-.12.094-.05.258-.05.258s.05-.051.117-.074c.066-.028.187-.024.187-.024.012-.008-.023-.055-.07-.066-.043-.012-.133-.012-.133-.012s.05-.035.14-.027c.087.011.098.035.098.035zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M20.418 9.035l-.113.04.07.468.445.77.23-.043.079-.141.062.027c.028.028.114.176.188.207.074.032.11.02.176.07.066.055.304.41.316.426.012.012-.016-.156-.016-.156l-.07-.21-.09-.15-.015-.038h.125l.074.047.117.097.063.074.03.075.013.066.035.102.062.14.078.133.024-.055-.035-.156-.121-.383-.07-.129s.093.07.12.079a.99.99 0 01.114.14l.054.137.04.125.027.11.039.116.07-.039-.012-.086-.058-.261-.028-.282s.036-.003.075.043c.039.043.078.145.078.145l.031.258.04.234.073.242.082.153.051.086v-.13l-.098-1.003.016-.043s.012-.008.043.043a.693.693 0 01.066.12l.032.157.011.11.02.203.027.222.102.239.055.129.03-.153-.046-1.078.023-.031s.055.047.075.082c.02.031.054.066.054.066l.032.235.03.68.024.175.2-1.777.12-.028.016-.035-.09-.07-.199-.313-.137-.304-.238-.438-.414-.508s-.254-.218-.32-.27c-.063-.05-.117-.081-.117-.081l.019-.063.07-.109-.011-.008-.055.004-.137.02-.14-.04-.274-.19-.293-.141-.172-.063-.414-.105-.41-.055-.187-.004-.168.031s-.086.035-.114.09c-.023.05-.027.09-.02.168.009.078.055.117.173.164.117.05.386.23.386.23l.133.133.047.063.008.05.09.7-.176.383zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M20.863 10.125s.075.129.18.031c.105-.097-.047-.379-.043-.394 0-.016.047-.024.047-.024l.078.145s.047.078.027.199c-.015.125-.132.23-.132.23l-.137-.03zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M23.457 11.766l-.094-.282s-.031-.183-.031-.222c0-.035-.016-.5-.023-.586-.008-.086-.004-.188-.016-.2-.031-.046-.066-.09-.102-.136l-.043-.043.032-.02s.035.04.043.016c.011-.02 0-.121-.04-.277-.038-.16-.242-.528-.242-.528l.024.02.055.055.117.093.258.098.136.02.09.18s.063.308.059.464a1.166 1.166 0 01-.075.441c-.058.157-.074.653-.082.73-.007.079-.039.157-.039.157zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M23.457 10.945s.055-.062.078-.152c.024-.086.031-.777-.047-.863a.6.6 0 00-.258-.145c-.007.004.067.223.067.223s.027.031.05.09c.016.03.036.09.036.109.012.059.058.2.066.379.008.18.008.36.008.36zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M23.086 11.379s.035-.328.016-.566c-.016-.239-.036-.27-.059-.313a1.965 1.965 0 01-.156-.398c-.059-.2-.094-.352-.13-.391-.034-.04-.105-.125-.12-.102-.02.024-.02.07-.02.07l-.097-.023-.02-.066.031-.102-.008-.043-.011-.07.125.102.261.175.13.543.12.336.016.567-.012.504zm.152-1.559s.067.067.106.086c.039.024.113.07.097.074-.011.008-.082-.02-.125-.046a.365.365 0 01-.074-.055zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M22.73 11.25s.055-.117.047-.262a2.958 2.958 0 00-.101-.539c-.02-.043-.125-.11-.215-.304-.094-.2-.082-.239-.145-.31-.043-.05-.082-.1-.125-.151l.02-.211.32.16.114.55.101.157.043.219.055.511.031.41-.016.036zm-.257-.234s.007-.16-.035-.305c-.04-.145-.067-.254-.114-.3a2.234 2.234 0 01-.258-.317c-.101-.153-.242-.317-.242-.317l.004-.203s.067.063.125.09c.055.027.14.078.14.078l.063.235.078.171.114.153.07.066.047.254.023.14.063.208-.02.101zm-.188.004l-.062-.063s.035-.039.02-.121a1.085 1.085 0 00-.075-.234c-.04-.079-.047-.125-.07-.145a12.766 12.766 0 00-.278-.258c-.066-.058-.168-.16-.23-.203-.067-.039-.11-.05-.11-.05l-.035-.255s.082.114.133.133c.047.02.129.043.129.043l.176.317.062.078.164.133.067.136.05.156.06.215.01.13zm-.348-.07s-.101-.122-.12-.2c-.016-.078.011-.078-.02-.164a.84.84 0 00-.23-.293c-.09-.07-.215-.176-.208-.234.008-.059.024-.059.024-.059l.055.047.277.297.086.156.066.195.043.09.04.117zm1.008-1.47s.192.243.242.02c.02-.098-.066-.285-.066-.285s-.18-.313-.242-.39l-.36-.458-.214-.105.074.129s.16.164.367.523c.207.363.168.563.168.563l.031.007zm-1.117-1.445s.383.328.629.684c.246.355.344.59.29.64-.056.047-.212-.027-.274-.129-.063-.097-.118-.273-.348-.539-.23-.265-.344-.304-.344-.304l-.164-.27zm-.2.785s.227.192.368.344c.145.152.215.262.215.262l.094.094s-.055-.098-.024-.133c.028-.032.067-.016.067-.016l-.72-.758zm-.046.024s.074.14.195.258l.25.246.051.183s-.328-.254-.328-.191c-.004.062.078.191.078.191l-.098-.054-.14-.2-.082-.175-.094-.239zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.594 9.621s.172.156.265.008c.094-.152.02-.324.02-.324s.242.36.308.023c.012-.058-.144-.293-.144-.293l.055-.055.12.211s.114-.054.114-.195c0-.144-.117-.328-.117-.328l.113.125s.223.004.227-.133c.004-.137-.188-.277-.188-.277s.153.008.153-.082c-.004-.086-.207-.149-.211-.207-.004-.055.058-.153.152-.098.094.05.223.094.277-.008.051-.101-.004-.125-.004-.125s-.12-.023-.132-.027c-.012-.004-.215-.113-.215-.113l-.168-.067-.172-.023.062.133.047.359v.164l.032.363-.083.297-.046.055-.032.043-.074.156-.105.113-.133.172zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M21.805 10.297s-.043-.11-.137-.18a.505.505 0 00-.238-.078l.25.266zm.347.062s-.078-.164-.175-.265c-.094-.098-.157-.227-.18-.227-.027 0-.047.004-.047.004l.023.207.176.168s.16.121.203.113zm.29-.015s-.04-.188-.137-.371a.762.762 0 00-.196-.258l.024.195.078.188.125.187zm.238-.106s.066-.39.004-.496c-.059-.11-.176-.129-.176-.129l-.035.055.035.277.094.215zm.23-.648s.055.027.125.16c.07.129.168.52.164.54 0 .019-.035.015-.043.01a8.76 8.76 0 01-.246-.374l-.035-.344zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M21.273 10.043s.125-.027.125-.07c0-.043-.148-.133-.136-.203.008-.036.125.007.133-.02.007-.023-.122-.23-.082-.277.039-.047.152.222.152.222s.066.13.043.203c-.074.223-.235.145-.235.145zm.293-.285c.004-.016.192.027.196.015.008-.046-.172-.183-.172-.183s-.04-.078-.027-.09c.011-.016.125.012.132-.004.004-.02-.129-.2-.129-.23 0-.036.036-.004.036-.004s.105.11.164.203c.058.09.109.164.09.308-.02.157-.31.036-.29-.015zm.852-.285s-.031-.13-.012-.145c.02-.015.067-.031.067-.031s-.102-.063-.149-.063c-.047-.004-.054-.015-.066.004-.012.02.086.145.086.145zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M21.844 9.574s.289.07.3.051c.012-.02-.23-.25-.23-.25s-.016-.04-.012-.055.106-.015.137.008c.031.024 0 .074.008.09.012.02.101.16.121.137.016-.02-.02-.192-.012-.207.008-.012.114.097.14.117.028.02.192.148.208.086.016-.059.027-.07.02-.106-.008-.035.054.168-.024.192-.074.027-.16-.028-.16-.028l-.067-.05-.043-.043s.047.156-.003.171c-.051.02-.114.012-.114.012l-.12-.015zm.668-.199s.308.188.34.152c.03-.03-.082-.472-.063-.52.012-.034.25.5.137.575-.09.055-.133.016-.133.016l-.152-.082zm.86.785s.03.024.07.035c.011.004.05.016.038.016a.625.625 0 00-.09.012c-.003 0-.019-.063-.019-.063zM23.07 9.13s.032.02.051.023c.016.004.04.016.04.02s-.024.012-.04.012a.056.056 0 01-.023-.008zm-.086-.152s.032.015.07-.016c.044-.027.044-.047.04-.063 0-.015-.067-.015-.086-.027-.024-.016-.024-.043-.024-.043h-.066l-.027.008zm.274.906s.094.055.12.062c.024.004.071.028.063.035-.003.008-.074.016-.109-.003-.035-.024-.047-.008-.047-.008zm-.512-1.422a.06.06 0 00.04.004c.019 0 .03-.012.038-.004.012.012.004.078-.023.098a.174.174 0 01-.063.035c-.004-.004-.097-.14-.097-.14zm-.445-.399s.062-.003.094-.003c.03 0 .066.023.093.039.028.02.059.207.043.242-.015.035-.226-.121-.23-.137-.008-.015-.098-.156-.098-.156zm-.196-.085s.153.007.137-.09a.184.184 0 00-.082-.137l-.183.129zm-.406-.18s.04.023.086.004c.043-.016.164-.172.25-.192.086-.02.106-.02.121 0 .016.02.008.11-.011.137-.02.024-.274.133-.274.133s-.05-.004-.094-.016a.673.673 0 01-.082-.027zm-.05-.281c-.036-.09-.106-.13-.13-.121-.027.003.086.093.102.218a.98.98 0 01.012.215c0 .008.055.008.055.008l.007-.047.008-.035v-.027l-.008-.067-.011-.05-.012-.04s0-.008-.024-.054zm-.36-.13a.994.994 0 00-.34-.234c-.015 0 .246.157.305.258.058.102.058.238.086.258.027.02.05-.008.055-.012 0-.004.02-.031.015-.039 0-.008-.015-.066-.015-.066l-.04-.067-.023-.043zm-.344-.144c-.148-.129-.414-.191-.633-.195-.214-.004-.324.016-.292.137.03.117.128.171.312.171.18 0 .227-.02.324.012a.634.634 0 01.223.121c.035.04-.067-.09-.16-.16-.094-.07-.157-.105-.157-.105s-.015-.04.11-.024c.125.02.293.102.34.207.047.106.039.164.039.188-.004.02.043-.016.043-.016l.02-.05s.003-.044-.02-.09c-.024-.043-.028-.06-.086-.13-.055-.066-.063-.066-.063-.066zm-.601 1.797c.093-.004.3-.18.328-.426.031-.246-.121-.746-.156-.8-.036-.051.054-.024.105.027.05.055.156.41.156.672 0 .258-.054.332-.191.465-.137.132-.25.12-.25.12zm.32.73s.047.06.098.04c.093-.036.242-.106.242-.246 0-.086-.113-.165-.121-.2-.004-.031 0-.058 0-.058l.101.023.028.14s.039.04.082.024c.039-.015.156-.101.14-.183-.015-.086-.129-.188-.14-.227-.008-.043.004-.078.004-.078l.093.016.032.12s.023.044.078.032c.054-.012.148-.11.129-.156-.024-.047-.094-.16-.098-.172-.008-.008-.004-.051-.004-.051l.04.02s.034.015.109-.004c.074-.024.144-.075.14-.125 0-.051-.055-.098-.058-.125-.004-.032 0-.04 0-.04l.046.004.06.075.015.09-.02.074-.09.097-.09.04-.023-.004.055.093-.02.125-.078.075-.105.062-.008.117-.055.13-.137.077h-.039l-.015.078-.082.118-.149.097-.105.02-.059-.086zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M21.465 8.441s.246.067.238-.086c-.008-.09-.238-.289-.254-.32-.015-.035-.012-.082-.012-.082l.122.113s.156.04.199-.05c.043-.09.008-.149 0-.149-.008-.004.035-.008.035-.008l.07.012-.008.14-.078.348s.02.137-.086.145c-.105.012-.226-.063-.226-.063zm.23 1.856s.004-.07-.05-.121c-.051-.047-.157-.094-.172-.106-.02-.011.172.22.172.22zm.352.012s-.121-.153-.149-.204c-.023-.054-.085-.168-.136-.171-.051-.008.047.187.047.187l.195.184zm.336-.004s-.106-.2-.13-.258c-.026-.059-.081-.219-.144-.262-.062-.043.008.074.008.074l.067.207.117.18zm.246-.145s-.008-.172-.027-.289a.387.387 0 00-.118-.21c-.007.003.004.21.004.21zm.508.13s-.086-.208-.121-.302a1.313 1.313 0 00-.13-.261c-.007-.004.028.187.028.187l.102.297zm.441-.536s-.078-.082-.25-.149c-.168-.066-.336-.074-.336-.074l.02.024.078.062.176.094.23.055zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M21.766 9.852s.004.148.078.238.254.254.289.289c.035.031.066.215.117.367.055.152.066.277.09.32.023.043.07.11.035.106-.035-.008-.066-.05-.09-.106-.023-.054-.015-.054-.012-.132.004-.075-.117-.465-.168-.508-.054-.043-.304-.25-.402-.395-.094-.144-.074-.176-.074-.176zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M22.168 10.828c-.05-.11-.063-.207-.078-.273-.016-.063-.227-.239-.277-.262-.036-.02-.118.004-.149-.02a8.166 8.166 0 01-.23-.253s-.028.03-.02.039c.012.007.215.23.29.304.073.07.116.23.171.356.05.125.031.097.035.16.008.059.043.094.082.094.04 0 .047-.016.035-.028a.624.624 0 01-.136-.218c-.043-.11-.094-.309-.16-.383-.004-.004-.008-.012-.016-.016a.355.355 0 01.082-.008c.05-.004.258.188.277.246.016.055-.004.079.082.266.09.191.13.234.13.234h.015s-.078-.129-.133-.238zm-.324-1.254s.148.094.195.106l.074.02s.024.273.133.429c.11.156.2.21.2.21s.003.302.085.509c.082.207.098.46.078.5-.015.039-.086-.125-.129-.266-.046-.145-.09-.3-.12-.395a.742.742 0 00-.16-.277c-.048-.039-.009-.035.019-.012a.725.725 0 01.156.282c.05.16.07.32.102.32.027 0 .046-.023.046-.059-.003-.03-.035-.113-.062-.261a1.105 1.105 0 00-.074-.293c-.024-.04-.059-.047-.157-.215a1.41 1.41 0 01-.152-.332c-.015-.078.004-.07-.012-.082-.015-.012-.027 0-.101-.04a.381.381 0 01-.121-.144zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M22.234 9.516s.09.074.141.093c.05.024.129.028.129.028s-.02.261.082.433c.102.168.207.27.207.27s.016.062.047.426c.035.367.035.37.043.52.012.144.015.663-.004.648-.082-.059-.016-.34-.055-.457-.039-.118-.101-.137-.176-.465-.078-.328-.027-.403-.082-.528-.054-.12-.125-.132-.125-.132s.098.02.141.12c.043.106.047.38.082.516.078.309.184.465.184.465s-.024-.387-.055-.605c-.027-.223-.027-.407-.066-.489-.043-.086-.13-.152-.184-.265-.05-.11-.07-.332-.098-.387-.023-.059-.039-.039-.074-.055-.121-.047-.137-.136-.137-.136zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M22.512 9.375s.078.09.191.156c.117.07.172.047.192.063.015.011-.024.246.093.46.121.216.164.22.168.247 0 .027.024.66.04.875.011.215.03.933-.06.933-.085 0-.007-.53-.05-.656-.043-.125-.043-.086-.086-.187-.04-.098-.04-.493-.105-.727-.051-.172-.102-.2-.102-.2s.082.044.121.188c.04.145.05.625.098.703.047.079.113.172.129.247.015.07-.012-.918-.032-.977-.02-.059-.218-.418-.23-.613-.016-.2-.024-.219-.04-.235-.019-.015-.077-.004-.167-.09-.094-.09-.16-.187-.16-.187zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M22.957 9.488c.004-.02.063.106.238.176.176.07.348.059.367.078.024.016.137.285.141.64.004.36-.062.325-.117.634-.055.304-.059.93-.09 1.023-.02.035-.035.05-.055.11-.02.062.016.175-.039.18-.054 0-.062-.09-.062-.138 0-.046.058-.218.058-.386 0-.172-.039-.192-.062-.395s-.027-.851-.047-.914a1.133 1.133 0 00-.133-.195s.117.078.145.164c.027.086.031.805.062.95.035.148.024-.032.035-.118.012-.082.055-.434.051-.621-.008-.192-.086-.598-.152-.668 0 0 .035.039.07.129 0 .004.024.027.051.043.027.015.062.023.062.027s-.035-.004-.066-.016c-.02-.007-.035-.027-.035-.023.039.105.082.27.086.504.004.324-.047 1.031.004 1.039.05.008.039-.387.093-.707.051-.316.122-.363.102-.625-.023-.262-.094-.543-.148-.578-.055-.035-.211-.024-.348-.114-.14-.085-.215-.18-.211-.199zm-2.238.36s.05.023.11-.008c.058-.027.214-.152.214-.203V9.53s.004.024.047.031c.047.004.176-.093.183-.156.012-.062.012-.172-.003-.195-.012-.02.039.023.066 0 .027-.024.148-.106.148-.188-.004-.085-.07-.16-.07-.16s.063.008.098 0 .16-.082.156-.156c-.004-.074-.047-.187-.145-.2 0 0 .07.02.141-.007.07-.023.094-.063.094-.14 0-.079-.14-.25-.164-.266-.024-.012.148.05.195-.02.043-.07.05-.12.04-.16a.081.081 0 00-.052-.05s.075.023.176-.032c.102-.05.192-.117.238-.117.047.004-.148.105-.156.164-.004.023.05.066.14.129l.016.015c.04.02.192.028.204.036.011.007-.149.004-.133.015.105.082.238.192.355.34a.17.17 0 00.059.035c.035.012.078.008.082.012.004.008-.102 0-.098.004.07.098.14.195.203.297.004.004.032.035.059.047.031.015.066.011.07.02.008.01-.086 0-.078.01.074.122.14.25.207.38 0 0-.191-.34-.426-.602-.234-.265-.289-.3-.3-.277-.012.027.171.258.273.422.098.164.191.367.191.367s-.234-.488-.566-.79c-.328-.3-.363-.35-.398-.339-.04.016-.067.234-.043.281.023.047.261.227.464.473.207.242.47.656.47.656s-.188-.3-.5-.633c-.313-.336-.434-.41-.458-.41-.023.004-.027.063-.062.113-.036.051-.114.043-.114.067-.004.023.266.27.317.297.054.031.082.015.12.039a.527.527 0 01.087.062s-.055-.023-.098-.035c-.039-.012-.082-.015-.082-.004 0 .016.215.281.254.297.035.016.055.008.105.027.047.016.118.067.118.067s-.075-.043-.13-.055c-.05-.008-.073 0-.07.016 0 .015.165.222.157.23-.008.004-.254-.293-.461-.476-.207-.184-.301-.223-.309-.219-.012.008-.008.062-.058.078-.051.02-.098.027-.098.047 0 .016.187.191.32.34.086.094.168.191.246.285 0 0-.133-.133-.28-.273-.145-.137-.22-.192-.235-.184-.016.008-.016.078-.004.098.015.02.285.34.277.347-.008.008-.316-.386-.34-.386-.02 0-.031.05-.05.074-.02.023-.11.023-.11.054 0 .032.442.465.426.473 0 0-.363-.312-.375-.297-.012.02.152.324.144.328-.011.008-.214-.316-.234-.312-.016 0-.016.035-.066.082-.055.05-.121.027-.125.05 0 .02.304.36.297.368-.008.004-.31-.324-.317-.305-.004.004-.02.016-.012.047.024.078.09.223.082.234 0 0-.097-.199-.125-.191-.023.008-.023.047-.07.078-.043.027-.082.02-.086.043-.004.02.055.055.078.102a.8.8 0 01.043.152s-.027-.086-.07-.145c-.043-.054-.082-.093-.113-.093-.035 0-.055.031-.055.031zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M23.563 9.742s.101-.008.113-.027c.012-.024-.035-.008-.125-.106-.09-.097-.32-.761-.567-1.097-.41-.547-.793-.797-.793-.797s.457.265.809.781c.355.527.445.938.543 1.047.102.105.2.125.191.156-.004.031-.02.055-.058.059l-.13.015zm-3-.144s0 .007.019.007c.02.004.14-.12.137-.156 0 0-.055-.02-.102-.066a.26.26 0 01-.055-.117s.043.078.075.101c.035.024.09.035.113.02.02-.016.2-.153.188-.207 0 0-.055.004-.11-.035-.05-.04-.062-.122-.062-.122s.035.067.09.09c.054.028.105.016.12-.004.016-.02.133-.183.122-.23 0 0-.063.008-.114-.031-.054-.04-.086-.137-.086-.137s.04.082.11.098c.07.011.125-.032.137-.079.011-.05.05-.234-.008-.28 0 0-.09.027-.153-.009-.066-.03-.09-.113-.09-.113s.055.074.13.086c.07.008.101-.031.113-.059a.361.361 0 00-.008-.19c-.02-.06-.067-.056-.074-.142 0 0-.024.032-.117.032-.094 0-.141-.106-.141-.106s.074.07.144.063c.075-.004.102-.067.102-.114.004-.046-.035-.085-.055-.136-.02-.047-.023-.106-.035-.098-.015.008-.031.05-.125.035-.098-.015-.117-.078-.117-.078s.07.047.121.043c.055-.004.09-.031.09-.066s-.024-.102-.14-.203c-.071-.063-.145-.118-.22-.172 0 0 .157.086.258.168.098.086.157.168.157.168s.109.035.12-.004c.012-.035.012-.082-.023-.149-.035-.066-.129-.164-.129-.164s.098.082.145.168c.047.086.027.145.031.164.004.024.207.102.254.074.047-.027.023-.09-.016-.148l-.07-.113s.05.054.082.113c.035.059.067.11.05.137-.01.027-.042.039-.038.05.004.012.07.047.14.083.07.039.149.07.16.05.012-.02.016-.066.012-.136a.905.905 0 00-.047-.168s.047.097.055.168c.008.07-.008.125.008.148.016.027.066.031.066.031s-.039.032-.129.004c-.09-.027-.48-.222-.5-.207-.015.02.184.14.274.227.094.09.137.18.137.18s-.07-.06-.141-.098c-.07-.04-.277-.145-.29-.133-.01.016.079.035.087.05.008.016-.067.083-.067.11 0 .027.297.234.29.258-.012.02-.079.074-.09.07-.012 0-.157-.113-.157-.097 0 .02.082.09.082.105 0 .016-.054.055-.046.09.011.035.164.16.164.203 0 .047-.086.082-.07.11.015.027.093.128.093.128s-.086-.058-.113-.09c-.028-.027-.082-.093-.09-.082a.437.437 0 00-.063.157c.008.027.075.07.09.144a.292.292 0 01-.015.149c-.008 0-.106-.125-.125-.13a.067.067 0 00-.059.04c-.016.031-.074.133-.066.152.007.016.101.04.105.117.004.075-.058.149-.066.149-.004 0-.117-.153-.13-.153-.01 0-.14.141-.144.16 0 .016.09.083.075.106-.02.027-.079-.008-.114.012a.408.408 0 01-.11.043c-.01 0-.026-.04-.026-.04zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M22.191 7.723s.008-.043.028-.063c.02-.02.097-.11.07-.125-.031-.02-.129.016-.195.008-.063-.004-.102.012-.285-.14 0 0-.582-.41-1.477-.462-.285-.015-.414.086-.426.141-.004.012.074-.117.36-.113.125 0 1.03.074 1.5.445.023.02.18.168.324.152.144-.015.176-.03.172-.011-.004.02-.047.074-.059.097-.012.028-.02.07-.02.07zm-1.57.12v-.007a.686.686 0 00-.164-.2c-.117-.109-.484-.261-.504-.269-.015-.008.375.184.488.29.176.167.18.187.18.187zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.621 8.492s-.023-.043-.101-.09a.54.54 0 00-.153-.07l.176.043c.055.047.078.117.078.117zm-.047-.34s-.023-.035-.133-.07c-.109-.035-.136-.031-.136-.031s.101-.047.18-.004c.078.039.09.105.09.105zm-.062-.277s-.024-.05-.121-.086c-.098-.035-.168-.039-.168-.039s.101-.031.199.008.09.117.09.117zm-.117-.18s-.032-.039-.211-.082c-.184-.043-.258-.047-.258-.047s.262-.02.332.012a.447.447 0 01.137.117zm-.336-.191s-.114-.031-.22-.04c-.109-.007-.276.005-.276.005s.312-.047.394-.032c.086.02.102.067.102.067zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M466.17 277.527s1.435 2.378 4.115 2.568c2.68.095 4.785 3.9 4.785 3.9l-2.966 2.853-7.178.38-2.201-3.709zm.191-2.378c.192-.475-2.105-5.135-3.732-5.896-1.627-.761.574 1.521.191 2.473-.382.95-.574 2.092-.478 2.282.096.095 1.34 2.093.67 2.949-.67.856 3.35-1.808 3.35-1.808zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M465.117 282.092s1.244.666 2.201.38c1.053-.284 1.914-1.33 1.914-1.33m-5.455-.857s4.02-2.853 3.637-4.375c-.287-1.617-1.053-1.521-1.627-1.331-.478.095-2.967 2.092-3.062 2.568-.192.475 1.052 3.138 1.052 3.138zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M461.002 282.283s.67 1.902 2.01 1.902c1.34 0 3.158-1.046 3.158-1.807.096-.761-1.244-2.188-2.106-2.568-.86-.38-2.87.666-2.87.666zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M464.639 279.715c-.192.57-2.776 1.712-3.541 1.807-.862.095-2.584-1.998-1.819-2.378.67-.285 1.532-.19 2.106-.57.67-.381.861-1.142 1.244-1.237.287 0 1.34.285 1.627.856.287.666.574.856.383 1.522zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M462.055 281.332s-3.924 5.326-5.551 5.04c-1.627-.285.67-7.513.67-7.513s.574.38 1.914.856c1.244.38 2.584.856 2.967 1.617zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M455.068 277.622s5.073.856 5.264 1.617c.191.856-2.393 1.902-3.828 1.902-1.436 0-1.436-3.519-1.436-3.519zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.063 11.715s.027.101.117.105c.086.004.172-.093.172-.093l-.211-.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202220"
        fillOpacity={1}
      />
      <Path
        d="M18.063 11.715h-.004a.12.12 0 00.023.055c.02.023.05.054.098.054h.004c.09 0 .171-.094.171-.094l.004-.007-.218-.086-.086.078h.008l.003.004.075-.07.207.081.004-.003-.004-.004s-.004.007-.012.015c-.027.028-.09.078-.152.078h-.004a.12.12 0 01-.09-.054c-.008-.008-.012-.02-.02-.032 0-.007 0-.011-.004-.011v-.004h-.003l.003.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M18.121 11.688s.035.074.152.078c.118.004.207-.094.207-.094l-.183-.149zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202220"
        fillOpacity={1}
      />
      <Path
        d="M18.121 11.688l-.004.003s.035.075.156.079h.004c.118 0 .207-.094.207-.094l.004-.004-.191-.152-.184.168.004.003.004-.004.004.004.172-.16.18.145.003-.004-.003-.004-.004.004c-.016.015-.098.09-.196.09h-.004a.226.226 0 01-.117-.04c-.008-.007-.015-.015-.023-.027-.004 0-.004-.004-.004-.008l-.004-.003-.004.004.004.003zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M18.137 11.703s.05.043.113.047c.059.004.137-.016.137-.016l-.07.028-.051.004-.047-.008-.043-.016-.031-.023zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M18.273 11.602s.051.128.16.113c.106-.016.11-.078.11-.078l-.121-.176zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202220"
        fillOpacity={1}
      />
      <Path
        d="M18.273 11.602h-.003c0 .003.011.03.035.058a.145.145 0 00.113.063c.004 0 .008-.004.016-.004a.162.162 0 00.097-.043c.016-.02.016-.04.016-.04l-.125-.183-.156.149h.007l.004.003.145-.136.117.172.004-.004h-.004v.004c-.004.007-.016.058-.105.07h-.016a.14.14 0 01-.105-.055c-.012-.011-.02-.027-.028-.039-.004-.004-.004-.012-.008-.012v-.007l-.004.004.004.003zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M18.29 11.625s.062.082.12.078c.055 0 .094-.023.094-.023v.011l-.027.016-.051.008-.055-.004-.043-.027zm-.208.129s.05.05.098.055c.047 0 .117-.04.117-.04h.008l-.012.008-.047.028-.058.015-.047-.008-.036-.019-.02-.027zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M454.781 277.337c1.149-.19 3.637 3.234 3.637 4.946 0 1.616-.67 4.184-1.914 4.09-1.244-.096-4.02-2.569-4.69-3.805-.574-1.332-1.244-2.188-.765-2.853.478-.666 3.732-2.378 3.732-2.378zm-12.441.285s-1.914-1.521-2.776-.76c-.765.855-.478 3.518 0 4.09.575.475 2.967-1.332 2.967-1.332zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M442.148 279.524s-2.68.286-2.68 1.427c0 1.236 1.245 2.568 1.532 2.758.287.286 2.68-1.046 2.68-1.046zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M443.201 281.712s-2.775.856-2.775 1.807c0 .856 1.244 2.663 2.105 2.663.862 0 1.531-1.712 1.819-1.997.382-.38-1.149-2.473-1.149-2.473zm1.34-7.894s-.574-.666-1.723-.19c-1.148.475-2.392 1.617-2.2 3.424.19 1.807.86 3.043.86 3.043l4.116-1.427zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M444.828 277.052s-3.54 1.14-3.637 2.472c-.095 1.332.766 2.663 1.723 2.949.957.285 3.924-2.663 3.924-2.663zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M447.89 282.663s-3.445 2.283-3.923 2.283c-.479 0-1.723-1.903-1.436-3.044.192-1.236 2.584-2.092 3.446-2.473.957-.285 1.914 3.234 1.914 3.234zm3.063-12.554s-1.148-.951-3.254-.761c-2.105.095-3.637 2.853-3.828 4.185-.287 1.426-.096 3.994.67 4.375.861.38 5.168-3.044 5.168-3.044zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M446.646 280.476c-1.435-.19-2.68-2.283-2.488-3.52.287-1.236 3.158-3.423 4.594-3.138 1.531.19 1.244 3.9 1.244 3.9s-1.914 2.853-3.35 2.758zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M451.24 280.095s-.67 1.712-2.2 2.473c-1.436.76-2.298.095-3.16-1.141-.86-1.142.384-1.712 1.054-2.283.67-.666 2.584-1.141 2.584-1.141zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M448.943 275.72s-1.627 1.237-.67 2.758c.862 1.522 1.627 2.093 2.776 2.283 1.148.19 1.914-.285 2.87-1.427.958-1.046 2.298-1.522 2.202-2.948-.191-1.427-.67-2.473-1.531-2.853-.861-.38-3.35 0-5.647 2.187zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.512 11.055s-.067-.024-.121.008a.185.185 0 00-.09.148.688.688 0 00.012.14s.07-.019.117-.058c.047-.04.062-.05.054-.07-.004-.012-.023-.028-.023-.075 0-.085.05-.093.05-.093zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202220"
        fillOpacity={1}
      />
      <Path
        d="M18.512 11.055s-.078-.012-.117.011a.203.203 0 00-.086.118c-.016.05-.004.066-.004.066s-.008-.047.004-.09c.015-.047.058-.098.097-.11a.195.195 0 01.106.005zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M503.494 305.965s1.436-.571 2.393-1.142c.957-.475 3.062-1.902 3.062-1.902l.67 3.52-2.68 2.092h-2.296l-1.436-1.047zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M499.762 306.345s.095 0 1.722.095c1.627 0 1.723-.57 2.01-.475.287.19.766 1.902.766 1.902l-.574 1.046-2.393 1.332-1.914-1.047-.192-2.758zm18.662-1.141s-.479-.761-1.436-1.617l-3.254-2.853-.095 7.513 3.54-.095 1.628-2.282zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M499.762 306.345s-.479-.76-2.01-.666c-1.436.19-2.967 1.427-3.158 2.378-.192 1.046 0 3.995.765 4.565.862.57 1.819.856 3.446.476 1.53-.38 9.666-5.421 9.666-5.421s-.957.19-2.01.475c-1.149.19-2.201-.285-2.201-.285s-1.053 1.236-2.393 1.426c-1.244.19-1.627-.57-1.818-1.14-.287-.667-.287-1.808-.287-1.808zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.217 308.913s-1.244.476-1.627.856c-.479.285-2.106.856-2.106.856l.67 2.473 3.446.856 2.105-1.807.096-2.473zm16.078-1.712s-.574-.475-1.244-1.236c-.574-.761-1.436-.856-1.627-.761-.192.095-1.914 2.282-1.914 2.282l-.096 1.522 1.914 1.046 1.34.286 1.818-1.142zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M509.428 305.965s-1.532.76-2.297 1.331c-.766.666-1.914 1.332-1.914 1.617 0 .285 1.722 2.092 1.722 2.092l1.723.19 3.828-2.757-.191-2.378zm14.547 3.233s-.288-.665-.862-1.236c-.67-.476-1.34-.856-1.818-.76-.479 0-1.914 2.282-1.914 2.282l-.192.57 1.34 1.617 2.489.666 1.627-1.712zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M517.658 311.861l1.723.286s0 .475.478.856c.479.38.479.095.479.095s.287 1.712 2.105 3.043c0 0 2.202.761 3.254.19 1.149-.665.957.096.957.096l3.063-3.805s0-.76-.766-.76c0 0 .574-2.378-1.435-2.854-1.914-.57-3.541.19-3.541.19s-1.532 2.759-2.489 2.378a4.581 4.581 0 01-1.052-.76c-.862-.857-1.053-1.332-1.053-1.332s-.67.19-1.436-.286c-.765-.57-1.435-1.712-1.435-1.712s-1.149-.285-1.531-.665c-.383-.38-.766-1.142-.766-1.142l-2.871 1.998s-.096.95-1.723 2.092c-1.723 1.236-2.68 1.236-2.68 1.236s-.478 2.473-2.296 2.093c-1.914-.38-3.159-2.473-3.159-2.473s-1.34-.19-2.2.951c-.862 1.141-1.245 1.522-1.245 2.663 0 1.141.766 2.758 1.34 3.329.574.475 2.488 1.997 4.69.856 2.105-1.141 1.435-3.044 1.435-3.044s-.096.19 1.244-.76c1.34-.856 2.775-2.188 3.732-2.568"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M514.213 296.644v4.85s.67 4.376-.287 5.707c-.957 1.332-4.403 1.046-4.881-.095-.479-1.141-.287-4.946-.287-4.946zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M510.385 311.386s-.766 1.331 1.531 1.522c.67.095 1.053-.19 1.34-.476.574-.666.478-1.236.478-1.236s-.191 1.807 1.819 1.807c2.297.095 2.105-2.093 2.105-2.093"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f8c83c"
        fillOpacity={1}
        strokeWidth={0.350497}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#977c2e"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M20.074 12.957s-.05-.09.008-.121c.063-.031.094 0 .133.004.035 0 .023-.094.015-.113a.232.232 0 00-.043-.075c-.015-.007-.214.012-.214.149 0 .129.101.156.101.156zm.317.324s-.067-.094-.032-.148c.036-.055.063-.024.082-.024.016-.004.024-.043-.003-.101-.032-.063-.067-.094-.09-.098-.024 0-.145.09-.121.203.03.14.164.168.164.168zm1.136-.113s.22.094.235-.129c.008-.121-.098-.203-.133-.203-.024.004-.04.016-.078.062-.043.047-.07.082-.055.102.016.016.082-.02.11.05.05.118-.079.118-.079.118zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202220"
        fillOpacity={1}
      />
      <Path
        d="M20.39 13.281s-.171-.039-.171-.207c.004-.113.125-.16.125-.16s-.114.059-.117.156c0 .172.164.211.164.211zm-.312-.328s-.101-.02-.11-.164c-.011-.14.223-.137.223-.137s-.226.012-.214.149c.011.14.101.156.101.156zm1.45.215s.042.023.093.02c.05 0 .11-.016.129-.098.023-.086.016-.125-.043-.2-.039-.054-.074-.05-.074-.05s.039.008.07.055c.027.046.07.097.043.19-.031.099-.121.099-.156.095a.177.177 0 01-.063-.012zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4b4139"
        fillOpacity={1}
      />
      <Path
        d="M18.914 8.5l-.043-.008.031-.07.114-.043.117-.004.12-.004.056.04.062.144-.23.136-.036.012-.015-.058-.035-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M21.059 11.844l-.016-.344-.926.285.367.348zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M19.34 11.242l-.078-.062s-.055-.04-.086-.047c-.031-.012-.07-.004-.07-.004l-.016.02.012.03.085.098s.137.075.141.075c.004 0 .05.05.05.05l.032.012zm-.024.149l.055.004.055.062.031.066.043.086.016.051-.106-.023-.3-.094.027-.074.05-.047.043-.02.063-.007zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M19.512 11.637l.05-.004.036-.028-.016-.113.016-.363-.243-.29-.05.165.07.297.055.176zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M19.34 10.973s-.016.03.004.129c.02.093.054.308.136.453.086.144-.078-.117-.078-.117s-.132-.293-.109-.516c.02-.223.047.05.047.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.516 11.156s-.051.07-.063.121a.58.58 0 00.008.141s-.012-.066.043-.082c.055-.016.047.148.05.164.005.016.032-.297.032-.297zm.027.61l-.273-.063c-.145-.062-.22-.113-.215-.148 0-.035.25.008.289.015.035.008.148.067.148.067h.063l.117-.051.015.125zm-.461-.051s.07.047.035.066c-.031.024-.117.024-.144.02.09.02.175.043.265.062 0 0 .059-.047.055-.05l-.211-.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.012 11.64c.011-.015.02.04.113.051.094.012.137-.015.137-.015l.043.027.05.012-.046.066-.172-.05-.094-.051zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M19.629 11.516l.05.07.028-.152v-.16l-.102-.067zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.355 11.258l-.082-.137-.105-.195.066-.114.078.118s-.023.078-.007.152c.011.074.05.176.05.176zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M18.797 11.754s.035-.059.121-.066a.597.597 0 01.148.011l.168.09.032.055-.317-.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M19.621 11.191s.008.192.016.25c.004.059.039.118.035.145-.008.023-.02.035-.059.05-.043.016-.12 0-.12 0s.077-.011.081-.027c.004-.015-.023-.09-.027-.156s.004-.137-.02-.137c-.023 0-.047.028-.05.036-.004.007.023-.235.046-.262.028-.027.098.101.098.101zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.043 11.691s-.031-.03-.031-.05c0-.02.039.101.21.093.176-.007.165-.011.165-.011h.082s-.02.078-.032.086a1.47 1.47 0 00-.14.09l-.043.023.004-.012h-.008l-.016-.133-.148-.058zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.355 11.258s-.203-.211-.27-.348c-.065-.14-.026-.332-.026-.332l.191.25s-.023.047-.016.125c.008.078.121.305.121.305zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.227 12.02c-.008-.016-.016-.06.023-.11.121-.148.422-.258.422-.258v.184l-.387.187zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.25 11.883c.016-.016.082-.063.086-.086.004-.024-.047-.027-.133-.047a.562.562 0 01-.16-.059s.105.086.148.102.04.031.036.043c-.008.012.02.047.023.047zm.52.043s-.06-.086-.075-.137c-.02-.05-.02-.137-.023-.137-.004 0-.035.028-.063.04a1.193 1.193 0 01-.117.042c-.008.004.121 0 .121.043 0 .047-.183.067-.183.067-.004.004.144-.031.136.004-.007.039-.074.043-.152.074-.082.035-.117.05-.144.066-.032.02-.043.032-.043.032s.035.02.09.02c.054-.005.18-.036.18-.036l.241-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.77 11.926s-.067-.028-.118-.305c-.047-.281-.03-.36-.03-.36l.112.083.102.183zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.805 11.457s-.055.156-.055.25c0 .09-.008.152.02.215a.503.503 0 00.113.148l.039-.043.02-.129.011-.21zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.965 11.672s.023.394-.074.406c-.051.004-.121-.148-.121-.156-.004-.004.085.144.117.133.062-.028.047-.414.047-.414zm-.195.254s-.02-.008-.047-.055c-.028-.043-.004.04-.211.113-.211.079-.285.036-.285.036s.066.054.28-.008c.212-.063.192-.075.22-.082.03-.004.043-.004.043-.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M19.379 11.418s.031.027.07.105c.035.079.063.133.063.133l.011-.011s-.027-.075-.062-.133c-.035-.055-.137-.2-.137-.2zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.25 11.91s.02-.074 0-.086c-.023-.015-.043 0-.188-.02a2.12 2.12 0 01-.265-.05s.098.062.191.086c.094.023.215.05.215.05l.035.008zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.25 11.91s.004-.015-.016-.035c-.015-.016-.043.008-.218-.04-.172-.05-.22-.081-.22-.081s.063.055.216.094c.156.039.238.062.238.062zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M19.328 11.387s-.133.008-.176.043c-.039.035-.097.125-.097.125l.086.011s-.012-.082.027-.12c.043-.04.102-.044.16-.06zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.078 11.137s.055.07.11.093c.054.028.109.047.136.075a.55.55 0 01.055.113s-.192-.086-.227-.125c-.039-.043-.074-.156-.074-.156zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.262 11.18s-.016-.028-.07-.051c-.051-.024-.09-.02-.102-.012-.016.012-.012.02-.012.02l.07.105.04-.012s-.106-.062-.079-.082c.047-.046.153.032.153.032zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.77 10.941l1.058-.55.5.703-.914.246-.484.039-.235-.172zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M21.188 11.242l1.32 1.149-.149.101-.308-.09-.64-.636-.24-.243zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M22.875 12.164s-.324-.262-.75-.578c-.426-.32-.953-.719-.953-.719l.023.344 1.09 1.004.36.176.18-.055.093-.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M21.184 11.352s.382.43.668.648c.289.223.566.46.625.43.054-.035.035-.07.035-.07l-1.336-1.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#803f1d"
        fillOpacity={1}
      />
      <Path
        d="M22.117 12.453l-.133.106-.156-.063-.808-.836.039-.152.113.015zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M22.875 12.164s-.098.234-.309.18c-.21-.055-1.375-1.168-1.375-1.168l-.003.117s1.18 1.086 1.406 1.129c.23.047.414-.152.39-.176-.015-.016-.109-.082-.109-.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M21.055 11.523s.375.489.574.665c.2.18.371.32.453.304.078-.02-.05-.11-.05-.11l-.567-.562-.293-.297s-.113-.043-.117 0zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#803f1d"
        fillOpacity={1}
      />
      <Path
        d="M21.148 11.523s.954.98 1.032 1.004c.16.047.386-.12.386-.12l-.086-.052-.011.032s-.04.101-.246.054c-.203-.043-1.043-.949-1.043-.949zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M21.508 12.46l-.348-.401-.078-.133-.02-.168.692.699-.098.066-.082-.027zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M22.137 12.477s-.086.125-.2.097c-.113-.023-.18-.105-.18-.105l-.663-.656-.016-.102s.73.777.86.812c.093.024.164-.093.164-.093zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M21.766 12.453s-.032.098-.13.082c-.097-.012-.128-.05-.128-.05l-.406-.489-.008-.129s.422.59.52.621c.097.035.124-.066.124-.066zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M21.332 11.176s.395.34.426.36c.031.015.172.019.18.038.007.024-.09 0-.098.024-.008.02.2.187.23.195.035.004.2.004.196.023-.004.02-.114 0-.118.024-.003.027.18.172.211.176.032.004.243.004.243.023 0 .024-.168-.004-.165.035.004.035.29.215.278.239-.016.027-.344-.223-.352-.211-.008.011-.02.093-.039.105-.02.012 0-.105-.015-.156-.02-.047-.207-.196-.23-.176-.02.016-.005.102-.024.102-.02 0 .004-.106-.016-.145a.964.964 0 00-.223-.187c-.027 0-.007.082-.027.093-.016.012-.012-.093-.035-.125-.024-.035-.438-.41-.422-.437zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#b07229"
        fillOpacity={1}
      />
      <Path
        d="M20.656 12.277s.004.153-.062.172c-.07.024-.196-.273-.196-.273l-.03-.278.198.184zm.528-.074s.003-.047 0-.082l-.02-.09-.012-.156-.035-.102-.031-.066-.043.004-.102.074-.035.098.055.187.05.172.075.028zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M21.047 12.465c.023-.008-.02-.215-.02-.215l-.12-.305-.036-.105-.098-.04-.066.075.016.121s.097.203.14.274c.047.07.145.207.184.195zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.938 11.82c.039.024.078.106.085.16 0 0 .082.223.07.247-.007.023-.058.023-.058.023s.11.113.14.102c.032-.016.02-.125.009-.149-.012-.027-.047-.008-.059-.035a1.054 1.054 0 01-.059-.262c0-.09-.003-.148.008-.172.012-.023.09.184.09.297l.035.04s-.02-.153-.035-.2c-.012-.047-.043-.125-.043-.14 0-.02.016-.06.016-.094v-.067s.043.032.058.028c.016 0 .04-.024.051-.121.012-.098-.012-.38-.012-.38l-.422.563zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.938 11.77s-.016.152.042.304c.055.156.07.164.079.184.011.023.011.187-.008.207 0 0-.11-.277-.145-.414-.039-.137-.047-.192-.066-.203-.02-.008-.05-.012-.05-.012zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.898 12.574c.012-.004.004-.066.004-.066l-.015-.145-.149-.304-.164-.149-.086-.133-.011.254s.12.25.195.324c.078.075.207.223.226.22zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.293 11.883s.023.066.023.113v.082s.063.125.114.219c.054.098.105.2.152.176.047-.024.063-.094.066-.102.004-.008-.05.082-.078.066-.027-.011-.148-.406-.148-.414.004-.007-.031-.027-.059-.054a.997.997 0 01-.07-.086zm.441.344s-.082-.137-.109-.2c-.027-.058-.074-.109-.09-.109-.012 0-.031-.121-.031-.121s.047.082.101.11c.06.027.094.05.122.038 0 0 .015.063.015.125 0 .067-.008.157-.008.157zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.465 12.023s.027.086.082.168c.055.086.148.184.148.184s-.101-.098-.152-.176a.847.847 0 01-.09-.18zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#5c3a1d"
        fillOpacity={1}
      />
      <Path
        d="M20.754 11.922s.027-.078.05-.082c.024-.004.071-.016.071-.016s-.043-.011-.074-.05c-.035-.044-.043-.04-.082-.083 0 0 .02.082.027.121.008.04.008.11.008.11zm-.027.023s.12.258.152.348c.031.086.023.215.023.215s-.011-.09-.039-.168c-.027-.074-.136-.29-.148-.313-.008-.023.012-.082.012-.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.89 11.777l.028-.382-.027-.137-.172-.38s-.008.056-.051.052a.352.352 0 01-.195-.114s.023.09.015.176-.023.13-.023.13l.332.624zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.238 12.027s.051.063.078.055c.032-.012.02-.129-.02-.195-.034-.067-.437-.606-.495-.64-.059-.032.437.78.437.78zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8b441f"
        fillOpacity={1}
      />
      <Path
        d="M502.537 287.418c.192.571.861 4.756-.861 5.136-2.297.571-13.112-14.361-14.738-16.358 0 0-6.795-4.28-6.987-5.326-.096-1.142 7.37 1.426 7.37 1.426l14.45 13.886s.479.57.766 1.236zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#8b441f"
        fillOpacity={1}
        strokeWidth={0.0700994}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#5c3a1d"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M20.238 12.027s-.05-.09-.054-.152c-.004-.059-.024-.094-.028-.113a6.257 6.257 0 00-.36-.52c-.03-.027-.14-.09-.14-.09s.012.075.012.106c0 .035.004.043.004.043s.101.195.246.363c.105.121.21.242.32.363zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.727 11.945c.043-.027.023-.175.007-.222-.015-.047-.277-.598-.277-.598l-.078.031-.152-.117-.082-.09s.03.13.027.196l-.008.101.211.367zm.296-.332l.063-.082-.035-.273-.172-.598s-.043.012-.086-.015c-.043-.032-.09-.082-.09-.082l.043.355.18.5.008.152zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.48 11.754s-.175-.191-.23-.29c-.059-.093-.105-.183-.105-.183s-.051.02-.11-.004c-.062-.027-.144-.113-.144-.113s-.047.094.203.352c.289.293.386.238.386.238zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.902 11.816c.07-.027.07-.34 0-.55a2.074 2.074 0 00-.183-.387s.144.336.176.473c.027.136 0 .234-.028.226-.023-.012-.023-.082-.082-.215-.055-.133-.094-.168-.094-.168s.204.555.145.543c-.059-.008-.336-.62-.348-.64-.015-.016-.023.023-.023.023s.25.77.437.695zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8b441f"
        fillOpacity={1}
      />
      <Path
        d="M21.063 10.32l.125.266.039.277.007.235s.008.464-.047.476c-.058.012-.085-.043-.085-.054a62.742 62.742 0 01-.106-.524l-.11-.535.04-.035.012-.078.085-.008zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.727 11.945c.05-.008 0-.133 0-.133s-.04.06-.075.02a1.19 1.19 0 01-.082-.195l-.035-.094s-.035.102-.078.102c-.047 0-.285-.407-.285-.407l-.027.043s.335.7.582.664zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8b441f"
        fillOpacity={1}
      />
      <Path
        d="M20.57 11.637s.04-.102.024-.192a1.868 1.868 0 00-.137-.32s-.039.012-.086-.008c-.05-.015-.144-.078-.144-.078s.066.172.14.293c.074.125.203.305.203.305zm.196-.14s-.032-.216-.13-.415a1.088 1.088 0 00-.163-.266s.007.043.007.125a.492.492 0 000 .098s.09.031.157.152c.066.121.129.305.129.305zm.265-.372s-.015-.23-.05-.363c-.04-.133-.075-.309-.075-.309s.004-.02.02-.027c.008-.008.023-.008.039-.004.05.02.07.14.07.14s-.008-.187-.012-.195c-.003-.012-.015-.031-.015-.031s-.016.008-.04.004c-.015 0-.03-.004-.046-.004 0 0 .015.055-.012.082-.015.02-.031-.016-.043-.023-.004 0-.008.027-.008.027s.016.066.02.125c.004.035 0 .07-.004.105 0 0 .035.141.074.227.04.082.082.246.082.246zm.203-.027s.043-.332-.03-.547c-.079-.211-.142-.27-.142-.27l-.035.043s.114.18.149.352c.035.176.058.422.058.422zm-.332.168s-.035-.258-.082-.426c-.047-.168-.062-.23-.062-.23l-.07-.067s.042.18.039.23l-.008.086s.035.09.082.164c.043.075.101.243.101.243zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M21.078 11.684c.063 0 .008-.38-.02-.473-.027-.098-.183-.55-.183-.55s.188.644.172.675c-.024.047-.094-.195-.11-.191-.011 0 .141.433.086.44-.054.005-.082-.093-.082-.093l.004.098s.035.09.133.094zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M21.156 11.492c.047 0-.011-.36-.043-.515-.035-.157-.125-.473-.125-.473s.094.219.145.469c.05.254.086.578.039.582-.05.004-.074-.047-.074-.047l-.008-.059s.02.043.066.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M20.547 11.91c.008.024.008.149-.059.14-.062-.01-.183-.12-.207-.19 0 0 .14.156.188.152.05 0 .05-.16.043-.2-.008-.042.035.098.035.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#312317"
        fillOpacity={1}
      />
      <Path
        d="M20.883 10.21s.086.056.152.017c.067-.04.113-.137.11-.188-.004-.05-.004-.098-.043-.152-.043-.051.062.047.062.148-.004.098.004.27-.152.309-.16.035-.09-.008-.09-.008zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M20.758 9.906s.101.164.14.313c.04.148.032.207.008.21-.027.005-.035-.019-.043-.054-.004-.04-.105-.469-.105-.469zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.004 10.11l.664.964.828-.941-.523-.543zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#1e2121"
        fillOpacity={1}
      />
      <Path
        d="M19.844 9.516l-.04.152.083.258.136.14.16.11.036-.121.039-.14.043-.017.101.043.067-.097.105-.196-.02-.078-.027-.05-.168-.297-.054.113-.055.031-.098-.055-.117.153-.144-.067zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.184 10.176s.027-.02.039-.098a1.548 1.548 0 00-.004-.402c-.02-.094-.082-.278-.094-.266-.012.016.094.203.078.434-.015.23-.008.297-.055.316-.05.024.036.016.036.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#5c3818"
        fillOpacity={1}
      />
      <Path
        d="M20.223 9.79s.109.155.16.1c.055-.054.027-.257-.008-.335-.031-.078-.07-.196-.07-.196l.035-.03s.035.132.055.214c.02.082.082.328.007.371-.074.043-.18-.09-.18-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#5c3818"
        fillOpacity={1}
      />
      <Path
        d="M19.867 9.898s.04-.054.086-.062c.05-.004.063.02.063.02l.043.128.074.133.066.067-.039.039-.05.007s-.16-.082-.16-.085l-.044-.06zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M20.129 11.27c-.05.027-.172-.032-.238-.094-.067-.059-.422-.422-.422-.422l-.047-.2.137.036.238-.102.047-.086.285-.152.164-.086.348-.008.082-.172s.117.207.136.29c.02.081.016.34-.015.355-.028.02-.14-.074-.16-.082-.016-.004.086.363 0 .375-.082.015-.227-.137-.227-.137s.059.328-.008.332a.605.605 0 01-.316-.164s.082.27-.004.317zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M20.059 10.844s.058.082.074.11c.02.026-.004.183-.012.21-.023.059-.101-.07-.144-.187 0 0-.13-.211-.137-.239-.008-.027.219.106.219.106zm.68-.813s.124.512.066.531c-.063.02-.23-.164-.25-.187-.02-.027-.254-.406-.254-.406l-.051-.051.016-.023.101.039zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.867 11.016c-.027.02-.078-.067-.105-.09-.024-.02-.106-.125-.188-.207-.078-.082-.14-.145-.14-.16 0-.016-.047-.07-.047-.07l.043-.055.054-.008s.336.27.36.312c.023.043.039.266.023.278zm.508.004c-.016.011-.238-.149-.332-.282-.094-.136-.191-.254-.215-.316-.015-.04-.027-.078-.043-.117l.067.015s.546.68.523.7zm.078-.235c-.012.012-.11-.058-.168-.14-.062-.079-.031-.176-.031-.176s.21.3.2.316zm.125-.031c-.031.012-.16-.14-.265-.316-.079-.13-.098-.149-.114-.16-.031-.016-.086-.024-.086-.024l-.011-.02.058-.011.043-.051.067-.086.261.539s.067.117.047.129zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.89 11.176c.005.02 0 .039-.074.035-.07-.008-.445-.211-.617-.488-.062-.106-.129-.211-.191-.317l.074-.086.598.684zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.89 11.176c.008.035-.027.043-.066.031-.039-.008-.187-.062-.43-.332a2.061 2.061 0 01-.331-.465l-.012-.113.07-.031.41.632zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M20.293 10.906s-.125-.09-.203-.183c-.082-.098-.242-.317-.238-.364.003-.043.07-.043.07-.043l-.004-.109.023-.039.114.047.148.18.05.074s.099.23.079.25c-.02.023-.152-.13-.168-.11-.016.02.152.282.129.297zm-.234-.062s.043.062.023.105c-.02.043-.035.067-.098-.023-.058-.094-.132-.196-.14-.188-.004.008.008.14-.024.14-.027 0-.125-.112-.183-.202-.063-.094-.157-.246-.157-.246s.008-.032.004-.133a1.528 1.528 0 00-.011-.156s.007.03.02.054a.274.274 0 00.027.043l.222.266.063-.047.133.262zm-.848-.387s.176.305.336.477c.16.168.344.242.344.242l-.52-.621zm1.324.184a1.04 1.04 0 01-.18-.215c-.07-.106-.12-.25-.117-.313a5.18 5.18 0 01.024-.222s.18.187.21.273c.036.09.11.207.094.223-.015.015-.136-.082-.152-.059-.012.024.14.297.121.313zm.203-.196c-.02.012-.11-.097-.133-.164-.027-.066-.035-.195-.035-.195l-.078-.188.008-.21.078-.012.121.164s.047.098.043.238c0 .14.024.352-.004.367zm-1.406.512c-.16-.2-.258-.387-.258-.387l-.05-.18.027.024s.047.207.293.45c.25.245.304.265.304.265s.047.137.024.184c0 0-.18-.157-.34-.356zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.602 11.242s-.215-.187-.383-.402c-.168-.211-.274-.418-.274-.418l.075-.067s.14.329.242.457c.097.13.34.43.34.43zm.289-.066s-.246-.242-.368-.383c-.125-.137-.195-.277-.195-.277l.102.039s.043.11.133.222c.085.11.328.399.328.399zm-.047-.438s-.133-.164-.196-.27c-.066-.1-.128-.234-.128-.234s.18.207.23.223c.055.012.055-.004.055-.004s-.024.074-.008.137l.047.148zm.054-.668s.024.117.008.184c-.015.07-.05.07-.05.07s.07.098.109.137c.043.043.144.113.144.113s-.082-.113-.117-.168c-.031-.058-.078-.125-.058-.18.02-.058.132.04.16.063.035.027.16.18.16.18s-.047-.156-.11-.215c-.062-.059-.246-.184-.246-.184zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.441 10.418s-.07-.164-.109-.27a5.245 5.245 0 01-.102-.324s.004.102 0 .18c-.007.074-.03.187-.066.203-.031.016-.039.02-.098.004-.062-.016.04.027.04.027s.062 0 .09-.031c.027-.031.03-.094.058-.086.031.008.062.106.086.149.02.043.101.148.101.148zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M20.23 9.824s.13.145.184.078c.055-.062.023-.25.023-.25s.079.032.102.012c.023-.02.016-.094.016-.094s.136.207.203.336c.066.133.101.367.101.367s-.113-.187-.172-.367c-.054-.16-.132-.234-.144-.219-.016.016-.035.13-.02.188.02.059.067.137.098.219.031.086.07.215.07.215s-.066-.098-.105-.153c-.04-.054-.078-.078-.106-.105-.027-.024-.066-.07-.105-.086-.04-.016-.113-.055-.113-.027 0 .03-.016-.06-.016-.06zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#202020"
        fillOpacity={1}
      />
      <Path
        d="M19.797 10.445s.07.145.129.22c.047.058.09.12.133.179 0 0-.122-.114-.168-.184-.051-.07-.094-.215-.094-.215zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#171717"
        fillOpacity={1}
      />
      <Path
        d="M20.637 10.484c-.02.008-.078-.015-.082.008-.008.02.03.106.074.149.047.046.062.046.074.043.008-.004-.004-.043-.012-.09-.007-.047-.003-.094-.007-.11-.004-.015-.047 0-.047 0zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.117 9.57l-.074.051-.086.18.023.336.133.191c.051.074.219.266.262.254.043-.012.09-.145.094-.215.008-.074.011-.207.011-.207s.04.074.114.152c.07.075.129.149.16.141.031-.004.129-.2.133-.226.004-.024-.242-.633-.242-.633l-.11-.055zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M19.672 10.078s.043.152.07.23c.024.079-.004.145.012.145.016.004.144-.172.144-.25.004-.078.004-.16-.03-.398-.036-.242.01-.313.01-.313l-.073-.058-.13.257zm-.434-.137s.028.235.047.309c.016.078.059.207.082.207.028-.004.102-.207.106-.277 0 0-.055-.102-.051-.352 0-.25-.024-.277-.024-.277zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M18.906 9.457s-.195.285-.191.441c.004.157.027.122.074.262.043.14.07.348.07.367.004.02.032-.007.036-.03.003-.02.011-1.04.011-1.04zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#45392d"
        fillOpacity={1}
      />
      <Path
        d="M18.902 9.488s-.168.266-.156.414c.012.145.035.141.082.274.05.133.055.344.055.344s.055-.016.113-.06c.063-.042.117-.132.117-.132l-.058-.133a.734.734 0 01-.047-.12l-.047-.071.012-.254.047-.184v-.07zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.824 9.945s-.082-.015-.117-.039c-.035-.02-.05-.07-.05-.07l.019-.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M18.938 9.52s-.122.265-.106.449c.012.183.113.418.125.422.008.004.004-.02.008-.059l-.008-.55.059-.177.004-.093zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d2a567"
        fillOpacity={1}
      />
      <Path
        d="M19.238 9.578s.016.078.004.113c-.012.032-.074.075-.101.13-.028.05-.067.171-.067.171s.031-.07.07-.113c.04-.043.06-.074.067-.05.008.026.02.132.012.151-.008.02-.04.051-.063.122-.023.078.004.152.004.152s.016-.09.027-.137c.012-.039.047-.062.047-.062l.067.148s0-.07.011-.121c.012-.055.067-.129.086-.129.016 0 .047-.008-.023-.043-.024-.015-.008-.27.012-.281.015-.012.113-.016.101-.05a.59.59 0 00-.101-.138c-.008-.007-.153.137-.153.137zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.813 10.121s-.06-.012-.094-.016c-.032-.007-.035-.039-.035-.039l.011-.039.075.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.027 10.152c-.004.028-.023.055-.035.094a.583.583 0 00-.023.102s-.02-.125-.028-.211a.456.456 0 00-.02-.149c-.01-.004-.042.043-.042.043s0-.097.02-.144c.019-.047.035-.114.015-.121-.016-.012-.05.015-.062.043a1.955 1.955 0 00-.047.078s.02-.082.039-.117c.02-.032.113-.137.129-.18.015-.043.015-.086.015-.086l.067-.004s.066.055.066.098c0 .027-.062.054-.066.058-.004.008-.051-.004-.067.211-.011.211.043.195.04.285zm.582-.547s.016.114.004.149c-.011.035-.047.066-.07.113-.027.043-.023.153-.023.153s.011-.051.03-.086c.02-.032.04-.063.048-.063.007 0 .03.043.047.102.015.062.05.164.05.164s-.015-.082.004-.082c.02 0 .031-.004.055.015.02.016.039.032.058.051 0 0-.003-.031-.042-.07-.036-.043-.06-.04-.07-.098-.012-.055-.02-.11-.012-.133.003-.023.03.016.054.043.02.024.094.086.094.086l-.04-.062a.92.92 0 010-.184c0-.062-.003-.121.02-.137.024-.02.028-.097.016-.113-.012-.015-.223.152-.223.152zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M20.29 9.367s.007.13.023.207c.019.074.07.242.07.242s-.07-.125-.098-.23c-.031-.106-.058-.223-.086-.23-.027-.008-.058.05-.058.093 0 .047.027.211.066.27.035.058-.059-.074-.082-.149-.023-.07-.047-.133-.047-.133s-.023.06-.012.126c.008.07.067.167.067.167s-.04-.035-.059-.062c-.015-.016-.031-.031-.047-.043 0 0 .004.094.032.133.023.039.07.105.07.105s-.055-.043-.078-.07a.095.095 0 01-.028-.043s.012.133.04.203c.027.07.09.188.09.188s-.075-.059-.126-.176a1.768 1.768 0 01-.062-.516l.074-.117c.035-.05.082-.293.082-.293s.055.227.094.27a.207.207 0 00.074.058zm-.536-.07s.027.062.047.09l.035.058s-.066.075-.14.133c-.079.059-.176.121-.2.09-.02-.035-.02-.063-.02-.063s.083-.05.149-.117a.485.485 0 00.102-.136c.011-.036.027-.055.027-.055zm-.684.223s.012.144.07.14c.06-.004.235-.18.247-.187.011-.008.023-.055.023-.067 0-.015-.012-.05-.012-.05s-.187.195-.253.203c-.051.004-.075-.04-.075-.04zm.004-.184s-.023.098-.02.129c.005.015.009.031.012.047 0 0-.132.05-.156.008-.023-.043-.008-.102-.008-.102s.063 0 .098-.008.074-.074.074-.074zm1.274-.2s.054.145.09.204c.035.058.09.18.09.18s-.09-.106-.118-.13c-.031-.023-.078-.066-.078-.066s.016-.039.016-.066v-.121zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#1e2121"
        fillOpacity={1}
      />
      <Path
        d="M18.883 9.418s.05.008.078.008a.187.187 0 00.055-.016l.05-.078s-.027.094-.007.156c.015.067.054.075.066.075a.266.266 0 00.145-.07c.054-.06.128-.122.128-.122s-.015.086.012.168c.031.082.078.082.14.031.063-.054.13-.14.165-.18.02-.023.043-.066.043-.066l.07-.054.059-.344-.032-.043-.09.043-.105-.043-.031-.043-.059.101-.062.043-.031.004-.075.016-.035-.066-.02-.051-.035-.02-.152.156-.082-.003-.09.132-.058.086-.067.153zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.617 9.074s.012.086-.031.227a1.263 1.263 0 01-.102.246s.153-.094.227-.262c.074-.168.055-.36.055-.36zm.184-.156s.02.023.004.152c-.016.13-.047.254-.047.254s.015.031.039.074c.02.04.07.114.105.102a.269.269 0 00.133-.145c.04-.082.074-.168.086-.18.016-.01.024.009.027.016.008.008.02.079.055.11s.086.082.106.066c.023-.015.046-.058.043-.078-.004-.02-.082-.254-.082-.254l-.098-.25-.063-.098-.18.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M20.11 8.688s.05.109.054.222c0 .117-.023.238-.023.238s.007-.144-.008-.23c-.016-.09-.043-.145-.04-.168.005-.027.016-.063.016-.063zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M20.352 9.14s.007.102 0 .15c-.012.046-.082-.032-.125-.188-.043-.16-.032-.196-.067-.27-.031-.078-.05-.145-.05-.145l.09-.011zm-.438.294s.172-.098.191-.387c.012-.137-.078-.36-.078-.36s0 .235-.062.391a4.143 4.143 0 01-.113.254s.039-.02.062-.043c.02-.027.047-.07.047-.07s.008.047-.004.101a.684.684 0 01-.043.114zm-.148-.508s-.004.062-.075.12c-.074.06-.199.122-.199.122s.094-.086.125-.164c.035-.074.008-.125.008-.125s-.012.039-.05.07a.236.236 0 01-.102.04s.007-.04.043-.083c.007-.008.007-.027.011-.043.02-.062.075-.148.075-.148s.039.09.078.129c.043.039.086.082.086.082zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M20.297 8.578s.039.106.055.25c.02.145 0 .313 0 .313s-.09-.137-.11-.192c-.023-.054-.023-.136-.039-.18-.012-.023-.043-.046-.066-.066-.016-.008-.063-.008-.063-.008s.047-.023.051-.066c.004-.043 0-.07 0-.07s.035.02.086.027c.055.004.086-.008.086-.008zm-.379.617s.09-.133.113-.293c.028-.16-.004-.214-.004-.214s-.035-.004-.066-.036c-.031-.03-.082-.109-.082-.109s.016.082-.004.184c-.016.101-.11.195-.11.195s.051.02.094-.008c.09-.05.086-.156.086-.156s.02.015.016.14c-.004.13-.043.297-.043.297zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#1e2121"
        fillOpacity={1}
      />
      <Path
        d="M18.824 9.414c-.02 0 .059-.129.113-.215l.133-.21s.016.015.047.015c.031-.004.117-.04.149-.106a.683.683 0 00.066-.156c0-.02-.008.113.055.188.062.07.062.066.09.058 0 0-.004.09-.028.176-.023.086-.05.207-.05.207s.011-.16-.016-.203c-.028-.047-.04.004-.063.062-.023.055-.07.098-.07.098s.035-.07.059-.144c.027-.075.015-.079.007-.079-.007-.003-.02-.003-.043.028a.128.128 0 01-.054.039s.031-.027.043-.067a.361.361 0 01.058-.109c.02-.023.032-.047.032-.062 0-.016-.004-.047-.016-.047s-.031.02-.09.078c-.058.055-.066.058-.078.078-.012.023-.02.047-.055.164s-.062.164-.066.176c-.008.008-.035.027-.035.027s.023-.066.05-.152c.032-.082.075-.195.063-.215-.012-.016-.035-.016-.043 0-.008.02-.07.09-.129.176-.058.09-.058.195-.07.199 0 0-.04 0-.059-.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M20.355 8.484c-.003.012.004.075-.058.094a.229.229 0 01-.149-.008c-.007-.008-.007-.09-.007-.09zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#874f20"
        fillOpacity={1}
      />
      <Path
        d="M19.121 8.688s-.012.058-.047.132c-.035.075-.09.137-.086.145a.123.123 0 00.094.043c.05 0 .066-.305.066-.305l-.007-.012zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#b27129"
        fillOpacity={1}
      />
      <Path
        d="M19.902 8.52s-.023.406-.136.406c-.114-.004-.164-.207-.164-.207s-.008.273-.153.273c-.066 0-.133-.21-.117-.25 0 0-.027.149-.098.2-.132.109-.218.054-.222.038-.004-.015.113-.128.129-.289 0 0 .02.008.054-.039.032-.047.051-.101.082-.09.032.008.196-.066.196-.066l.086-.11s.007.036.07-.007c.062-.043.086-.106.086-.106l.168.141zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.46 8.137s.102.152.173.238c.004.008.035-.031.035-.031.023.031.035.058.027.074-.027.062-.082.148-.035.238 0 0-.015-.05.008-.117.027-.062.043-.086.059-.082.015 0 .039.367.062.367.023-.004.059-.168.059-.285 0-.113.023-.02.03.004.013.023.114.187.196.16.086-.023.074-.176.074-.207-.003-.035-.062-.234-.062-.234l-.383-.242s-.012.027-.031.097c-.02.07-.211.02-.211.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#b27129"
        fillOpacity={1}
      />
      <Path
        d="M20.004 8.102s.023.02.058.117c.04.094.043.402-.007.402-.047-.004-.145-.059-.16-.101-.02-.043.003-.196-.028-.235a.632.632 0 01-.074-.176c0-.027.008-.12.008-.12l.086-.032zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.977 8.004l.164.246.144.207s.07.023.07.027a.157.157 0 01-.199.032c-.054-.032-.027-.13-.097-.286-.07-.16-.2-.226-.2-.226l.047-.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.887 7.871s.144.098.199.203c.05.106.078.168.14.27.063.101.13.136.13.14-.004.008-.047.02-.079-.004a.333.333 0 01-.09-.101 2.962 2.962 0 00-.148-.262.633.633 0 00-.144-.117c-.004.008.03.031.093.133a.448.448 0 01.075.195c-.004 0-.016-.039-.07-.129-.055-.094-.173-.21-.18-.191-.008.015.058.12.09.183.035.063.085.207.081.207-.004 0-.043-.078-.109-.18-.063-.1-.078-.09-.102-.12a11.863 11.863 0 01-.085-.114s.058.02.113-.015c.058-.04.086-.098.086-.098zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#1e2121"
        fillOpacity={1}
      />
      <Path
        d="M19.52 8.14a.5.5 0 00.144.016l.066-.004s.032.043.032.09-.035.137-.047.137c-.016.004-.012-.078-.035-.11a2.099 2.099 0 00-.16-.128zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.566 8.387s.032.101.008.246c-.023.14-.105.289-.125.289-.02 0-.012-.16-.023-.246 0-.008 0-.02-.004-.028 0-.011-.031.11-.031.098 0-.012.027-.152.027-.16-.004-.035-.008-.055-.008-.055l.106-.125zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#b27129"
        fillOpacity={1}
      />
      <Path
        d="M19.39 8.492c-.027.035-.074.028-.113.04-.039.011-.05.07-.05.07s.03-.024.043-.016c.015.004.03.004.003.074-.027.07-.14.192-.132.192a.842.842 0 00.16-.16c.039-.055.035-.09.043-.114a.174.174 0 01.066-.047c.012 0 .031.004.043.043.008.043.027.16.035.164a.674.674 0 00.047-.164c.012-.054.012-.18.012-.18s-.008 0-.035-.007c-.028-.004-.098-.055-.098-.055s.016.113-.023.16zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M19.89 7.77s.04.097-.038.164a.127.127 0 01-.09.035c-.043.004-.11-.032-.11-.032l-.242-.101-.129-.043-.062-.016.011-.07.188.008.187.07.082.027.07.012h.055l.043-.011s.02-.008.028-.02l.008-.023zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.89 7.77c.008.02-.015.07-.03.082-.02.007-.051.02-.126.003-.074-.015-.148-.062-.23-.085-.078-.024-.14-.043-.203-.043-.063.003-.035-.028-.035-.028s.144-.015.273.031c.125.051.18.082.242.082.094-.003.11-.042.11-.042zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.227 7.695s.027.004.054 0a.138.138 0 00.043-.015s.004.03-.015.043c-.016.007-.063.004-.07.004-.009 0-.012-.032-.012-.032zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.703 7.996s.086.082.063.156l-.164-.074-.266-.113-.145-.043-.02-.024s.028-.027.044-.05c.012-.024.008-.047.008-.047l.175.023.188.055zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.523 8.117s.153.195.118.262l-.356-.227-.125.207-.293-.144s.235-.18.262-.215c.027-.035.031-.047.031-.047l.13.024.21.066zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.441 7.824s.125.031.204.07c.078.043.19.051.19.051s-.042.047-.132.051c-.023 0-.086-.05-.129-.078-.039-.031-.156-.063-.156-.063zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.223 7.758s.086.015.14.043c.055.023.063.02.075.011.015-.007.015-.011.015-.011s.012.054-.031.054-.059-.015-.113-.039c-.055-.027-.094 0-.094 0zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.715 8.105s.062.04.05.047a.207.207 0 01-.097.028.193.193 0 01-.121-.024c-.04-.015-.067-.086-.16-.12-.094-.04-.11-.044-.176-.063-.066-.016-.078-.012-.078-.012l.058-.027.204.043.175.05.106.051zm-.344.122l.04.16-.02.097-.055.036-.05-.02-.016-.031s.023-.035 0-.07c-.024-.032-.125-.075-.125-.075s.039-.078.085-.097c.047-.02.024-.079.024-.079zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.172 7.895s.031.027.098.035a.644.644 0 01.136.03c.02.005.063-.019.067-.019l-.04.024c.06.015.133.043.16.055.071.03.126.082.122.085 0 0-.04-.023-.121-.058a1.328 1.328 0 00-.192-.059c-.12-.023-.242-.015-.27-.023-.023-.008.013-.012.028-.024.012-.015.012-.046.012-.046zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.629 8.34s.035.043-.004.055c-.04.015-.152.011-.203-.043 0 0-.016-.055-.035-.079a.867.867 0 00-.149-.105c-.047-.031.016-.035.016-.035s.168.066.23.097c.059.036.145.11.145.11zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.629 8.344s-.082-.114-.309-.203c-.008-.004.078-.016.07-.02-.011-.004-.109.004-.12 0-.016-.008-.036-.012-.055-.02-.117-.035-.13-.03-.137-.046-.008-.02-.02 0-.035.023a.372.372 0 01-.043.059.334.334 0 01.156-.008c.07.02.067.043.059.07-.004.024-.086.125-.078.13.011.003.058-.095.12-.083.063.016.083.047.083.047s0-.035-.012-.05c-.015-.016-.082-.079-.062-.079.015 0 .093.016.207.074.105.055.125.07.156.106zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M19.258 8.164s.176.05.168.234c-.012.188-.145.153-.156.086-.012-.066.015.032.062.024.055-.008.066-.063.063-.137-.004-.066-.02-.101-.06-.14a.575.575 0 00-.077-.067zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M18.5 7.715s.02.012-.031.144a.589.589 0 01-.153.262c-.14.156-.203.16-.187.227.016.066.07.047.082.05.012 0 .266-.375.266-.375l.058-.226-.015-.063zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#6c3f18"
        fillOpacity={1}
      />
      <Path
        d="M19.133 7.445s.07.11.047.32c-.02.208-.293.391-.293.391l-.403.278-.164-.012s-.027.004-.05 0c-.028-.008-.051-.035-.06-.035-.007 0-.03-.07-.03-.07l.054-.067.145-.145.09-.132s.043-.075.047-.149c.004-.074-.012-.11-.012-.11l.031.052.02.113-.016.121.106-.07.136-.063s.04-.004.067-.082a.96.96 0 00.05-.242c0-.05-.007-.113-.007-.113s.011 0 .02.008a.207.207 0 01.042.105c0 .035.024.172.024.172l.066-.067s.047-.058.059-.09c.011-.03.03-.081.03-.113zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#dbad6c"
        fillOpacity={1}
      />
      <Path
        d="M19.176 8.488s.027.024.015.102c-.007.074-.07.117-.101.117l.004-.105-.09-.07-.094-.032s.008-.004.02-.016c.008-.011.105-.05.105-.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M19.105 8.492s.028.024.075.016c.043-.012.058-.082.035-.113-.024-.028-.012.07-.04.078-.03.011-.058-.07-.097-.078-.039-.008-.101.02-.117.043-.012.027.062.007.062.007l.043.012.032.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M18.531 8.2s.051.015.106.007c.058-.008.195-.062.195-.062s.063-.04.11-.082c.046-.047.195-.141.21-.325.016-.183-.02-.293-.02-.293s.22.239.028.516c-.125.18-.234.23-.234.23s.21-.062.23-.007c.02.05-.011.129-.015.14 0 0 .12.028.136.09.012.035-.136-.043-.246-.016a.302.302 0 00-.16.094s-.02-.031-.117-.035c-.102 0-.145.047-.2.047-.058-.004-.234-.043-.265-.09l.117-.137c.051-.097.125-.078.125-.078zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M18.984 7.703s.086-.082.114-.144c.027-.063.035-.114.035-.114s.008.067-.043.145a.843.843 0 01-.106.129zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M18.96 7.516s.071.273-.003.382c-.074.114-.398.258-.398.258s.242-.133.32-.289c.078-.152.074-.281.074-.281zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M18.637 8.207s.105 0 .164-.035c.058-.035.14-.11.14-.11s-.074.067-.097.067c-.024 0-.043-.035-.032-.063 0 0-.019.055-.066.09-.047.035-.11.051-.11.051zm.242-.34s.086-.09.086-.281c-.004-.191-.074-.156-.074-.156s.058.047.047.191a.798.798 0 01-.06.246zm.105.02s.098-.024.133-.082c.035-.059.035-.168.035-.168s-.011.101-.039.136c-.027.04-.129.114-.129.114zm-.054.597s.047-.093.113-.07c.062.024.062.078.062.078s-.023-.043-.074-.047a.217.217 0 00-.101.04zm-.188-.171s.145-.036.23-.063c.087-.027.184-.066.184-.066s-.07.086-.176.148c-.105.059-.195.063-.195.063s.2-.086.215-.122c0 0-.191.051-.258.04zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#1e2121"
        fillOpacity={1}
      />
      <Path
        d="M18.512 8.09a.167.167 0 01.027.219.17.17 0 01-.215.054"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M18.504 8.105c.055.051.062.133.02.192a.153.153 0 01-.192.05"
        stroke="none"
        fillRule="nonzero"
        fill="#f16e16"
        fillOpacity={1}
      />
      <Path
        d="M18.441 8.188a.062.062 0 01.051.05c0 .028-.015.055-.039.063-.027.011-.055 0-.07-.024"
        stroke="none"
        fillRule="nonzero"
        fill="#000"
        fillOpacity={1}
      />
      <Path
        d="M18.45 8.262c-.005.008-.009.015-.012.015-.008.004-.016 0-.02-.004-.008-.003-.008-.011-.008-.015 0-.008.004-.012.008-.016.004 0 .008-.004.016 0 .007 0 .015.012.015.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d5d3ca"
        fillOpacity={1}
      />
      <Path
        d="M18.55 7.984s.095-.093.118-.218c.02-.13.008-.2.008-.2l.05.055.024.098-.035.156.105-.047a.791.791 0 00.07-.398s.032.058-.007.242c-.04.18-.07.2-.203.277a.558.558 0 00-.239.266c-.035.066-.132.176-.144.191-.004 0 .066-.097.101-.172.051-.109.106-.171.106-.171zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M18.504 8.063s.043-.13.043-.196c0-.07-.047-.152-.047-.152s.063-.008.066.14c.008.153-.027.16-.062.207zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#904720"
        fillOpacity={1}
      />
      <Path
        d="M18.7 7.898s.042-.109.038-.187c-.004-.074-.062-.145-.062-.145s.074.016.082.153c.004.133-.02.136-.059.18zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#4d2a15"
        fillOpacity={1}
      />
      <Path
        d="M18.254 8.41s-.035-.047-.031-.082c.004-.035.004-.043.09-.133A.754.754 0 0018.465 8c.023-.05.094-.184.039-.285 0 0 .035.148-.05.27-.087.117-.138.18-.208.234-.07.05-.078.078-.074.105 0 .031.008.063.02.07a.223.223 0 00.062.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#ab6d29"
        fillOpacity={1}
      />
      <Path
        d="M19.09 8.707s.02 0 .031-.023c.012-.02.012-.059-.016-.098a.205.205 0 00-.109-.074c-.043-.012-.125-.02-.125-.02s.027.047.082.078c.027.016.074-.004.106.028.027.027.03.109.03.109zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#6c4119"
        fillOpacity={1}
      />
      <Path
        d="M19.09 8.707s.098-.031.105-.125c.004-.059-.011-.078-.011-.078s.015.031.054.043l.035-.016s-.058.18-.183.176zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#6c4119"
        fillOpacity={1}
      />
      <Path
        d="M18.422 8.688s.02.007.055.05c.035.04.05.055.05.055l.235-.059.074-.078-.063-.097h-.168zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#bf802d"
        fillOpacity={1}
      />
      <Path
        d="M465.117 209.62l-1.053-1.522s-.287-.57-1.052-.951c-.862-.476-4.307-.476-4.307-.476l-2.488.57s-.67.571-2.01.381c-1.244-.285-4.02-1.426-4.02-1.426l-2.775-1.237s-2.105-.856-2.584-.666c-.478.096-2.201 1.998-2.201 1.998s-.287 1.046.383 1.046c.67 0-.957.38-.957.38s-4.307 2.378-5.073 6.563c-.67 4.28 7.178 10.557 10.05 7.323 0 0-4.212-3.138-3.35-5.706.765-2.663 2.775-4.28 6.029-4.47 3.35-.19 3.541-.571 4.977-1.617 1.53-1.046 4.21-1.617 6.125.475 2.01 1.998-7.561 3.995-7.561 3.995l1.053 1.522s11.867-3.995 10.814-6.182zm0 0"
        transform="scale(.04082 .04107)"
        fillRule="nonzero"
        fill="#f9c83a"
        fillOpacity={1}
        strokeWidth={0.480682}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#8f4620"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M18.086 9.023s-.195-.05-.18-.23c.016-.18.18-.246.207-.254.028-.008.024-.101.055-.11.031-.011.094 0 .125.028.027.027.086.05.086.05s-.344.157-.348.356c0 .133.055.16.055.16zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fcf3d8"
        fillOpacity={1}
      />
      <Path
        d="M18.984 8.59s-.023.015-.03.004c-.036-.07-.122-.09-.192-.086-.086 0-.145.031-.207.031-.059 0-.043-.008-.114-.012-.07 0-.218-.113-.253-.101-.036.011-.047.05-.043.074.003.02-.063.02-.07.004-.012-.016.05-.113.113-.113.164 0 .285.113.363.113.078 0 .105-.047.21-.047.106 0 .22.047.223.133zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fdeaaf"
        fillOpacity={1}
      />
      <Path
        d="M18.45 8.719s.077-.016.136-.043c.059-.028.137-.047.137-.047l-.121.074c-.051.024-.133.035-.133.035zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#513625"
        fillOpacity={1}
      />
      <Path
        d="M18.172 9.125c-.016.008-.082.004-.192-.07-.109-.075-.136-.2-.136-.2s-.028-.117.086-.238c.113-.12.133-.086.136-.082.008.008-.003.012-.003.012l-.098.082-.05.082-.044.078.004.09.047.086.156.101zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f9c83a"
        fillOpacity={1}
      />
      <Path
        d="M18.113 8.441l-.008-.015v.02c.004 0 .008-.005.008-.005l-.008-.015v.02-.02l-.011.011c.004.004.008.008.011.008v-.02l-.011.012.011-.011h-.015c0 .008 0 .011.004.011l.011-.011h-.015.015l-.015-.004v.004h.015l-.015-.004.015.004-.011-.008-.004.004.015.004-.011-.008v.004-.004.004-.004c-.004 0-.004.004-.012.012-.004.008-.016.015-.02.027a.082.082 0 00-.015.04v.007c0 .016.012.027.023.035a.108.108 0 00.035.004c.028 0 .051-.008.051-.008.012 0 .016-.012.012-.02a.008.008 0 00-.008-.007c-.004-.004-.008-.004-.012-.004-.003.004-.023.008-.043.008-.007 0-.015 0-.02-.004-.003-.004-.007-.004-.007-.008v-.004s0-.004.004-.012l.023-.03.008-.009.004-.004v-.004h.004v-.003-.008c0-.004 0-.008-.004-.012-.004 0-.008-.004-.012-.004h-.007a.019.019 0 00-.008.024c.004.004.004.007.008.007.007.004.011.004.015 0zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8b5122"
        fillOpacity={1}
      />
      <Path
        d="M18.445 8.61s-.234.066-.242.07c-.015.011.074 0 .149-.004.027 0 .054.004.082.011 0 0 .03 0 .058-.011.09-.035.278-.106.293-.024.016.07-.258.13-.258.13l-.004.027.223-.055.113-.059.036-.058-.11-.078h-.16l-.074.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f9c83a"
        fillOpacity={1}
      />
      <Path
        d="M18.102 8.95c.02.05.058.12.101.144 0 0 .008 0 .004.004s-.035.027-.11.007c-.074-.02-.187-.05-.257-.261l.004.047.039.082.074.074.113.074.078.02.067-.02.031-.02-.07-.062-.082-.144s-.004.02.008.054zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M18.879 11.035l-.004.078-.04-.004.005-.097zm-.293-2.168l-.074-.086-.051.008.074.11zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fcca3d"
        fillOpacity={1}
      />
      <Path
        d="M18.875 11.215s-.047-.031-.105-.059c-.063-.027-.149-.043-.149-.043l-.004.02s.004.004.016.004a.458.458 0 01.129.039.84.84 0 01.101.054zm-.008-.195s-.043-.004-.086-.004a.497.497 0 00-.086.007c-.054.012-.086.04-.086.04l.012.015a.282.282 0 01.078-.035.268.268 0 01.082-.004c.028-.004.059 0 .086 0zm-.02-.168s-.109.054-.16.085a1.93 1.93 0 00-.101.075l.016.015s.011-.007.03-.023c.02-.016.044-.035.067-.05.024-.017.063-.036.094-.052l.062-.03zm-.105-.172v.004c0 .004 0 .043-.02.074-.003.008-.019.023-.038.047a2.417 2.417 0 01-.102.11l-.055.058.012.015c.004 0 .047-.047.094-.097.02-.024.043-.047.066-.075.02-.02.035-.039.04-.05.023-.036.023-.079.023-.082v-.004zm-.133-.075v.004c0 .008.004.024.004.047a.256.256 0 01-.015.09c-.012.04-.04.09-.059.137-.012.02-.023.043-.031.055l-.012.023.016.012s.078-.141.105-.22a.27.27 0 00.016-.097c0-.031-.008-.054-.008-.054zm-.132-.015s0 .008.003.02v.05c0 .04-.003.082-.011.11-.012.035-.032.078-.043.113l-.024.062.02.008.062-.176a.386.386 0 00.016-.117.758.758 0 00-.004-.074zm-.102 0v.074l-.012.121c-.015.067-.031.16-.031.16h.02l.007-.054a.93.93 0 01.02-.102c.016-.066.016-.2.016-.2zm-.105.015v.032a.38.38 0 01.003.07.403.403 0 01-.007.078c-.016.063-.024.156-.024.156l.02.004s0-.023.004-.054a.72.72 0 01.02-.098c.007-.023.007-.055.007-.086 0-.05-.004-.102-.004-.102zm-.086.012v.012a.559.559 0 01-.02.137c-.012.039-.023.086-.035.12-.008.04-.016.063-.016.063l.02.008s.027-.105.05-.184a.663.663 0 00.02-.144v-.012zm-.098 0s0 .004.004.012v.031a.28.28 0 01-.027.133.329.329 0 01-.086.094l-.043.031c-.004.004-.008.004-.012.008l-.004.004.012.015s.105-.062.148-.144a.272.272 0 00.031-.14c0-.028-.004-.044-.004-.044zm-.059-.015s0 .003-.004.011c-.007.024-.027.082-.058.117-.02.028-.055.051-.082.07a.092.092 0 01-.035.024c-.008.008-.012.008-.012.008l.008.02s.093-.051.136-.11c.043-.055.067-.137.067-.137zm-.09-.047l-.007.008a.16.16 0 01-.024.042c-.008.016-.02.028-.027.036l-.063.043-.039.023.008.016.043-.024c.02-.011.047-.027.063-.043a.205.205 0 00.043-.054l.02-.04zm-.046-.059s-.008.004-.016.016c-.016.015-.035.043-.059.062-.011.012-.023.02-.03.028-.013.007-.02.015-.024.015l.004.02a.19.19 0 00.043-.028c.043-.039.097-.101.097-.101zm-.024-.043s-.004.008-.012.012c-.015.012-.035.027-.054.039-.024.012-.043.023-.055.023v.02c.012 0 .027-.008.043-.012.043-.023.09-.066.09-.066zm-.015-.039l-.047.024a.182.182 0 01-.04.019c-.011.004-.019.008-.027.008l.004.02a.12.12 0 00.031-.008c.04-.02.086-.047.086-.047zm-.02-.09l-.004.004a.122.122 0 01-.035.027c-.016.012-.035.024-.05.024v.02c.027 0 .05-.016.07-.032.019-.015.03-.027.03-.027zm.004-.136l-.035.035a.164.164 0 00-.047.058l-.008.008-.004.004v.004-.004.004-.004.02a.03.03 0 00.02-.008c.004-.008.008-.012.008-.016.003-.016.027-.035.043-.055.011-.007.019-.015.027-.023l.008-.008zm.672-.805h.097l.004-.004v-.012l-.004-.004h-.003v.02-.008l-.004.008h.004v-.008l-.004.008.004-.008-.004.008.004-.008-.004.008.004-.012-.004.012.004-.012-.004.012.004-.012-.008.008.004.004.004-.012-.008.008.008-.008h-.012l.004.008.008-.008h-.012l.008-.008.004.008-.004-.008.004.008-.004-.008.004.008v-.008h-.004l.004.008v-.008h-.094zm0-.059h.008c.015 0 .027-.008.043-.011.02-.012.043-.032.062-.043.008-.008.02-.012.027-.016.008-.004.012-.008.02-.008l-.004-.02c-.012 0-.023.008-.035.012-.02.012-.04.032-.063.043-.02.012-.039.024-.05.024h-.004zM18.5 9.23c.016-.003.031-.011.047-.02l.074-.046a.147.147 0 01.059-.027v-.02a.073.073 0 00-.043.016c-.024.012-.051.031-.075.047a.23.23 0 01-.062.03zm-.035-.09c.023-.011.058-.038.098-.066A.655.655 0 0118.663 9l-.012-.02c-.027.016-.066.047-.101.075a.716.716 0 01-.094.07zm-.063-.1c.043-.032.16-.114.203-.142l-.011-.015c-.043.027-.157.11-.203.14zm-.09-.095a.688.688 0 01.118-.082 1.9 1.9 0 01.093-.062l-.011-.016c-.016.012-.055.035-.094.063a.89.89 0 00-.117.082zm-.066-.058s.043-.035.094-.07c.027-.02.05-.036.074-.051a.31.31 0 01.047-.032l-.008-.015c-.012.004-.027.015-.05.031a4.648 4.648 0 00-.169.117zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#816c2a"
        fillOpacity={1}
      />
      <Path
        d="M18.402 8.691l.012.008c.027.024.094.082.152.156a.428.428 0 01.114.262v.028a.607.607 0 01-.157.316c-.125.148-.296.273-.441.402a1.062 1.062 0 00-.184.196.393.393 0 00-.078.218v.012c.004.07.028.149.07.215.047.062.114.11.2.117.015.004.031.004.043.004.113 0 .238-.035.355-.035.098 0 .192.023.274.113.078.09.105.23.105.363 0 .098-.012.192-.027.262a.623.623 0 01-.024.117l.02.004s.05-.183.05-.383c0-.136-.023-.28-.109-.375a.363.363 0 00-.289-.12c-.12 0-.246.034-.355.034-.012 0-.028 0-.04-.003a.259.259 0 01-.187-.11.446.446 0 01-.066-.203v-.012c0-.097.05-.183.125-.273.113-.129.285-.25.433-.387.149-.137.278-.285.301-.472v-.028c0-.113-.074-.222-.144-.305a.928.928 0 00-.14-.136zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M18.254 8.883l-.024-.02-.02.008.036.031zm.062.058l-.015-.015-.012.004.016.02zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M18.406 9.04l-.015-.02-.012.011.016.02zm.063.1l-.008-.019h-.02l.024.027zm.039.09l-.008-.023-.004.004v.02zm.004.094v-.023l-.012-.008.004.035zm-.004.063l.004-.032-.008-.003v.039zm-.762.93s.004-.024.012-.047c.004-.02-.02.011-.02.011l-.004.028zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M17.742 10.375l-.012.004.004.027.008-.008v-.023zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M17.742 10.484v-.027h-.008v.043zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#78732e"
        fillOpacity={1}
      />
      <Path
        d="M17.75 10.547l-.004-.024h-.008v.024zm.016.09l-.004-.024-.004.004.004.028zm.023.093l-.008-.035-.008.004.012.031zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M17.852 10.852l-.016-.02-.012-.004.016.027zm.09.09s-.016-.008-.032-.024c-.02-.012-.008.016-.008.016l.028.011zm.609.046s-.012-.011-.024-.015c-.011-.004.004 0 .016.02.008.023.008-.005.008-.005zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M18.605 11.031s-.011-.015-.02-.02c-.007-.007-.007.012-.007.012l.016.008zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M18.613 11.055c-.004-.008-.011.011-.011.011l.02.02s0-.024-.009-.031zm.004.086s.004-.02.004-.032c0-.011-.012.004-.012.004l.004.028zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#a8ac71"
        fillOpacity={1}
      />
      <Path
        d="M18.59 11.23l.004-.023h-.008l-.004.023zm-.934-3.28s.035-.009.008.03c-.023.043.02-.035.02-.035l-.016-.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M18.41 8.664l.024.024s-.02-.004-.028-.008c-.011 0 .004-.016.004-.016zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#f9c83a"
        fillOpacity={1}
      />
      <Path
        d="M18.434 8.688l-.043.003c-.008.004.011-.011.011-.011zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#8f4620"
        fillOpacity={1}
      />
      <Path
        d="M18.805 11.441s.027 0 .039-.015c.011-.016-.008.023-.008.023l-.016.008zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#977c2e"
        fillOpacity={1}
      />
    </Svg>
    </View>

    const Per_Flag = () => <View style={tw`w-1/6 flex items-center justify-center`}>
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="27px"
      viewBox="0 0 40 27"
    >
      <Path d="M0 0H40V27H0z" fill="#d91023" fillOpacity={1} stroke="none" />
      <Path
        d="M13.332 0h13.336v27H13.332zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
      <Path
        d="M479.964 566.67c32.019 33.045 62.777 68.273 79.316 111.79 24.982 69.743 18.069 151.157-22.87 213.897-34.215 51.093-85.108 91.587-141.74 116.151-51.752 21.559-111.94 23.689-164.908 3.783-19.958-7.64-38.824-18.533-57.521-28.358-8.336-1.9-13.63 8.63-6.975 13.443 62.583 40.014 130.856 41.582 202.565 27.664 35.432-9.63 69.089-27.077 98.11-50.113 44.502-33.508 83.1-77.218 100.225-131.386 26.024-79.115 9.272-171.281-45.252-234.787-13.315-16.423-28.65-32.07-44.406-46.99zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M170.472 982.912c-7.577-.492-11.943 12.515-4.786 13.736 4.209-.482 10.512-11.4 4.786-13.736zm0 0M474.984 552.15c-4.635-5.588-14.313-2.441-17.77-7.348-3.875-4.179 2.773-6.163-.513-10.002-3.118-2.77-7.747-1.56-12.212-6.08-4.046-5.247-.345-8.934-4.052-12.045-3.287-3.838-3.619.823-8.085-3.697-4.466-4.52-2.032-12.82-6.247-19.135-4.635-5.587-3.042-12.432 2.516-11.164 3.368.974 5.055 4.86 10.612 6.127 5.557 1.267 7.069-2.713 11.365.738 3.287 3.839-.075 9.662 3.801 13.841 3.456 4.907 5.557 1.267 8.423 5.834 2.867 4.566.007 6.797 1.863 11.751 1.857 4.954 8.505 2.97 11.29 10.4 2.364 8.16-.991 20.78-.991 20.78zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M478.026 564.581c-5.244-26.32-27.158-56.441-52.686-78.944 15.248 11.715 44.99 40.533 54.285 78.897zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M460.395 524.316c-4.717-2.723-7.915-2.629-10.694-3.262 3.199-.095 5.808-.53 9.345 1.513zm0 0M445.141 505.804c-4.547-1.655-7.577-.492-10.775-.398 2.609-.435 5.638-1.597 9.427-1.35zm0 0M449.438 509.255c-2.026-6.022-2.114-9.955-2.791-14.228.087 3.933.175 7.866 1.442 12.48zm0 0M462.923 526.746c-2.446-5.294-2.534-9.227-2.202-13.888-.922 4.32-.834 8.253.433 12.867zm0 0M554.99 681.806c-7.915-2.629-16.583.13-23.91-2.158-6.905-3.016 1.255-8.98-4.302-10.248-5.137-1.996-10.349 5.67-17.675 3.382-7.915-2.629-6.491-10.541-12.638-12.15-5.978-.539-6.222 8.055-14.138 5.426-7.326-2.289-6.83-12.678-15.335-15.648-8.085-3.697-9.27-11.175-1.612-13.547 5.219-.87 10.525 2.194 18.183-.178 7.828-1.303 7.232-8.441 12.79-7.174 6.146 1.608 4.891 10.589 11.797 13.605 6.906 3.017 11.528-4.99 16.245-2.267 5.306 3.064.514 10.002 4.39 14.181 4.886 3.792 8.248-2.031 15.072 3.85 6.404 6.608 11.133 22.926 11.133 22.926zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M563.501 691.573c-22.836-25.802-58.544-41.565-101.652-49.955 24.668 3.567 76.871 15.266 105.44 50.2zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M524.414 661.241c-6.988-.152-11.027 1.398-15.066 2.948 3.45-1.89 6.9-3.78 12.707-4.31zm0 0M496.54 650.971c-6.818.917-10.098 3.875-13.968 6.493 3.28-2.958 5.971-6.257 11.61-7.854zm0 0M503.527 651.123c-5.475-4.132-6.742-8.745-9.019-12.971 1.267 4.613 2.954 8.499 6.41 13.406zm0 0M528.96 662.896c-5.054-4.86-7.331-9.086-9.188-14.04 1.267 4.614 2.954 8.5 6.41 13.406zm0 0M554.587 885.382c7.15-5.577 9.414-14.945 15.135-19.407 5.72-4.461 5.814 6.269 10.524 2.194 4.29-3.346.747-12.185 6.887-17.375 6.14-5.19 11.365.739 15.907-4.403 4.12-4.415-2.534-9.227 3.017-14.757 6.14-5.19 13.974.304 21.124-5.273 6.73-4.85 13.805-.764 11.792 6.808-2.352 5.435-7.822 8.1-9.835 15.673-3.023 7.96 2.873 11.364-1.838 15.438-4.12 4.414-10.525-2.195-16.245 2.267-5.72 4.461-1.756 12.573-7.646 15.966-4.88 3.006-7.244-5.153-13.472-3.896-5.639 1.597-1.424 7.912-10.262 9.604-8.837 1.69-25.088-2.84-25.088-2.84zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M542.55 887.167c32.91-5.262 64.29-26.936 93.808-60.36-15.556 20.134-52.813 58.795-95.489 63.272zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M587.572 870.458c3.952-5.483 4.874-9.803 5.626-15.191-.332 4.66-.665 9.32-3.186 13.688zm0 0M611.463 852.224c2.183-6.503 1.505-10.777 1.248-15.778 1.267 4.614 1.945 8.887.602 13.935zm0 0M606.502 858.095c6.648-1.985 10.606-.67 15.404-.812-4.378-.586-8.336-1.9-13.554-1.032zm0 0M584.292 873.417c6.228-1.257 10.606-.67 15.574.257-3.958-1.315-8.505-2.97-13.724-2.1zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M584.696 802.44c5.802-7.326 5.877-16.987 10.419-22.13 4.96-5.87 7.664 4.426 11.195-.33 3.532-4.754-1.273-11.41 3.52-18.349 4.96-5.87 11.446-2.125 14.977-6.88 3.362-5.823-4.133-9.18.239-15.39 5.381-6.599 14.056-2.561 20.027-8.819 6.391-6.986 13.717-4.697 12.463 4.284-.753 5.388-5.043 8.735-6.467 16.647-1.424 7.913 4.892 10.589 1.36 15.344-3.95 5.482-11.195.33-15.736 5.472-4.962 5.87.012 13.594-4.278 16.94-4.71 4.074-9.095-3.31-14.144-1.372-5.469 2.665-.834 8.253-8.743 12.421-8.079 3.1-24.832 2.162-24.832 2.162zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.308 7.25)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M572.999 806.362c31.304-12.012 58.049-39.273 81.501-77.17-12.018 22.176-41.272 67.4-83.182 80.082zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.308 7.25)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M614.477 780.814c2.772-6.164 2.515-11.165 2.847-15.826.258 5.001.345 8.934-.997 13.982zm0 0M633.902 758.06c1.173-6.116-.094-10.73-.351-15.73 1.267 4.613 2.364 8.158 2.201 13.887zm0 0M630.71 764.952c5.889-3.393 10.267-2.807 15.065-2.948-4.378-.587-8.756-1.173-13.805.764zm0 0M611.366 784.84c5.89-3.393 10.267-2.806 15.486-3.675-4.799.14-9.176-.446-14.226 1.492zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.308 7.25)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M567.082 741.195c-7.834-5.493-18.44-4.823-24.505-9.295-6.655-4.813 3.444-8.688-1.863-11.751-4.886-3.792-12.456 2.513-19.531-1.572-7.244-5.153-3.632-12.772-10.537-15.789-5.896-3.403-8.75 5.624-15.825 1.54-7.244-5.153-4.56-15.25-12.394-20.743-8.003-6.562-6.579-14.474 2.428-15.097 5.977.54 10.443 5.059 19.03 5.163 8.166.833 4.71-4.074 11.195-.33 5.896 3.405 5.062 11.658 11.717 16.47 6.234 5.54 14.896-4.016 19.782-.224 5.055 4.86-2.684 10.096.94 16.071 3.036 5.635 9.008-.623 14.15 8.17 4.554 8.452 5.413 27.387 5.413 27.387zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M573.323 753.533c-17.035-33.127-50.647-59.327-94.188-80.584 25.853 11.045 77.649 37.067 98.146 81.899zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.37 711.215c-6.906-3.017-11.535-1.807-17.343-1.278 4.629-1.21 9.258-2.42 15.404-.812zm0 0M513.75 691.964c-7.576-.492-11.615 1.058-16.665 2.995 4.46-2.277 7.91-4.168 14.307-4.356zm0 0M520.656 694.98c-3.625-5.974-4.472-11.316-5.318-16.657.257 5 .514 10.002 2.96 15.296zm0 0M544.497 713.598c-3.626-5.975-4.472-11.317-5.32-16.658.258 5 .515 10.002 2.961 15.296zm0 0M587.8 750.245c4.622-8.007 3.098-17.621 6.46-23.445 3.782-6.55 7.915 2.63 10.857-2.466 2.352-5.435-3.462-11.704-.27-18.595 4.203-7.28 11.108-4.263 13.291-10.767 2.352-5.435-5.983-7.336-2.37-14.956 3.782-6.55 13.127-5.037 17.75-13.044 4.202-7.279 12.369-6.446 13.134 1.76-.163 5.729-3.695 10.484-3.52 18.35.766 8.205 7.333 9.085 4.98 14.52-2.772 6.164-10.856 2.467-14.638 9.018-4.372 6.21 2.452 12.091-1.5 17.574-3.531 4.755-8.925-2.241-13.635 1.833-4.88 3.005.765 8.206-5.965 13.055-7.74 5.236-24.575 7.163-24.575 7.163zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M577.62 756.984c28.268-17.647 49.199-51.177 64.566-92.771-7.89 24.56-27.29 74.501-65.658 96.023zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M612.945 723.03c1.593-6.844.915-11.117-.351-15.73 1.266 4.613 2.954 8.499 2.2 13.887zm0 0M627.653 697.554c.414-7.525-1.863-11.75-3.55-15.636 1.687 3.885 4.384 7.383 5.231 12.725zm0 0M626.06 704.399c4.71-4.074 9.34-5.284 13.968-6.494-4.209.482-8.417.964-13.297 3.97zm0 0M611.013 727.738c5.3-3.733 9.929-4.943 13.968-6.493-4.209.482-8.417.963-13.297 3.97zm0 0M557.813 638.792c3.444-8.688.32-18.255 2.923-25.487 3.613-7.62 8.925 2.242 11.108-4.262 2.352-5.436-5.482-10.93-2.458-18.889 3.023-7.96 10.77-6.399 11.942-12.515 1.593-6.845-6.573-7.677-4.14-15.978 2.604-7.231 13.38-6.833 16.823-15.52 3.443-8.688 12.03-8.583 13.385-.037 1.436 5.682-2.095 10.437-.74 18.983 1.354 8.546 8.341 8.698 6.579 14.474-1.594 6.845-11.108 4.263-13.711 11.494-3.613 7.62 4.22 13.113 1.279 18.208-3.952 5.483-10.186-.057-14.897 4.017-4.12 4.414 2.365 8.158-4.616 14.804-6.981 6.645-23.477 10.708-23.477 10.708zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M547.382 647.328c27.423-22.989 45.067-60.357 54.958-106.084-4.353 26.602-18.698 81.404-55.46 109.676zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M580.092 607.011c.584-6.457-1.273-11.41-2.54-16.024 1.687 3.886 3.964 8.112 3.8 13.84zm0 0M592.104 578.037c-.596-7.138-3.883-10.976-6.16-15.202 2.698 3.498 5.395 6.996 7.42 13.018zm0 0M590.68 585.95c4.54-5.143 9.59-7.08 13.63-8.63-3.62.822-8.249 2.031-12.959 6.105zm0 0M578.75 612.06c4.541-5.143 9.17-6.353 13.63-8.63-4.63 1.21-8.669 2.76-13.549 5.765zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M533.201 605.172c4.372-6.21-.859-18.936 2.083-24.031 3.952-5.483 7.495 3.357 10.437-1.738 2.521-4.368-.514-10.002 2.848-15.826 3.782-6.55 8.248-2.031 10.6-7.467 2.352-5.435-1.857-4.954 1.505-10.777 3.193-6.891 12.118-4.65 16.49-10.86 4.792-6.939 11.359-6.059 11.534 1.807.257 5-2.603 7.231-2.597 14.029.176 7.865 4.723 9.52 2.371 14.956-2.941 5.095-8.837 1.69-12.789 7.174-3.951 5.482.176 7.865-2.935 11.892-3.7 3.686-6.229 1.257-11.108 4.262-4.88 3.006-.916 11.118-7.226 15.239-7.32 4.509-21.213 1.34-21.213 1.34zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M521.843 611.23c24.486-11.095 48.954-42.583 64.158-78.449-7.389 20.968-27.974 63.432-63.23 80.927zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M557.005 583.006c1.173-6.117.495-10.39.407-14.323a34.15 34.15 0 011.443 12.48zm0 0M571.631 560.394c-.426-6.07-2.113-9.955-3.8-13.84 2.107 3.157 3.794 7.043 5.061 11.656zm0 0M568.86 566.558c5.3-3.734 9.508-4.216 13.127-5.038-3.199.094-7.408.576-11.867 2.854zm0 0M554.903 586.645c5.3-3.733 8.92-4.556 13.128-5.037-3.788-.246-7.407.576-11.867 2.854zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M394.475 1006.72c3.864-9.416 1.16-19.711 4.184-27.671 2.603-7.232 8.505 2.97 10.268-2.807 2.182-6.504-5.231-12.725-1.788-21.412 2.434-8.3 10.35-5.672 11.353-12.856 1.593-6.845-6.153-8.405-3.72-16.705 2.434-8.3 12.37-6.446 16.233-15.862 3.444-8.687 11.44-8.923 12.965.692 1.436 5.682-2.515 11.164-.571 20.05.934 9.275 7.922 9.427 6.328 16.271-2.182 6.504-10.687 3.535-13.71 11.495-3.614 7.619 3.8 13.84.858 18.935-3.362 5.824-9.176-.445-13.886 3.63-4.121 4.414 1.944 8.886-4.447 15.871-6.981 6.646-24.067 10.369-24.067 10.369zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.284 7.357)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M388.165 1010.84c26.413-22.6 41.197-57.738 51.17-106.329-4.604 28.398-15.33 82.378-51.671 109.922zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.284 7.357)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M416.585 973.87c1.004-7.184-.433-12.866-1.7-17.48 1.687 3.886 3.544 8.84 3.55 15.637zm0 0M428.847 943.1c-.595-7.138-3.462-11.704-5.318-16.658 2.276 4.226 4.973 7.724 6.579 14.474zm0 0M428.013 951.353c4.541-5.142 8.58-6.692 13.63-8.63-4.63 1.21-9.258 2.42-13.548 5.765zm0 0M415.832 979.259c4.541-5.142 8.58-6.692 13.04-8.97-4.04 1.55-8.248 2.031-12.958 6.105zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.284 7.357)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M561.104 831.884c-6.993-6.95-19.287-10.165-25.521-15.705-5.815-6.269 7.57-6.305 2.515-11.165-5.055-4.86-15.743-1.325-22.147-7.934-6.824-5.88-.263-11.798-6.328-16.27-6.655-4.813-12.037 1.785-18.86-4.096-6.994-6.949-.183-14.662-7.345-22.68-7.163-8.017-2.371-14.956 7.733-12.034 6.316 2.676 9.772 7.583 19.457 11.233 10.104 2.923 13.886-3.628 19.531 1.572 6.065 4.472-1.926 11.505 3.889 17.773 5.814 6.269 15.912 2.394 19.958 7.64 4.635 5.589-5.633 8.395-3.607 14.417 2.026 6.023 10.525 2.195 13.059 11.422 2.533 9.227-2.334 25.827-2.334 25.827zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.532 796.714c-7.075-4.085-13.053-4.624-19.2-6.232 5.978.54 10.946 1.467 17.262 4.143zm0 0M516.265 772.028c-8.505-2.97-13.893-3.169-20.29-2.98 5.807-.529 11.026-1.398 17.762.55zm0 0M523.93 776.453c-3.206-6.703-2.284-11.023-1.53-16.412-1.343 5.048-2.855 9.028-1.418 14.71zm0 0M544.408 800.893c-2.195-7.09-1.273-11.41-.94-16.071-1.512 3.98-2.435 8.3-.998 13.982zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M561.87 840.09c-8.618-34.09-35.752-63.344-78.966-96.058 25.86 17.842 74.211 52.552 82.503 98.1zm0 0M527.064 890.843c-3.123-9.567-19.794-13.37-22.58-20.8-2.784-7.431 9.34-5.284 6.894-10.578-3.036-5.635-13.473-3.897-16.847-11.668-3.964-8.112 4.955-12.667 1.33-18.643-4.046-5.247-12.206.718-15.58-7.054-3.374-7.771 5.626-15.191 2.083-24.03-2.534-9.228 4.447-15.873 12.28-10.38 5.307 3.064 6.323 9.474 13.987 13.899 7.245 5.153 13.805-.764 16.42 5.598 3.626 5.975-6.303 10.919-3.518 18.35 2.785 7.43 13.222 5.692 15.247 11.714 1.017 6.41-9 7.42-10.173 13.537-.583 6.457 8.254 4.765 7.169 14.814-1.675 9.71-6.712 25.241-6.712 25.241zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M519.958 852.772c-4.635-5.587-13.14-8.557-17.856-11.28 4.547 1.655 13.052 4.624 17.938 8.416zm0 0M509.666 828.39c.414-7.525 3.525-11.552 5.877-16.987-2.521 4.367-5.632 8.394-6.805 14.51zm0 0M522.317 854.134c.414-7.525.075-9.662 2.007-14.37-2.522 4.368-2.183 6.504-3.356 12.62zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M525.226 906.28c6.618-35.97-12.95-78.324-38.578-118.354 16.35 22.057 52.428 73.943 40.686 121.513zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.451 822.075c-6.065-4.473-12.042-5.012-17.6-6.28 5.388.2 10.776.399 16.672 3.803zm0 0M493.769 565.907c-2.195-7.09-11.541-8.604-13.987-13.899-1.436-5.682 5.72-4.461 3.864-9.415-1.267-4.614-6.065-4.473-8.091-10.495-2.026-6.022 2.854-9.028.577-13.254-1.857-4.954-3.958-1.314-5.984-7.336-1.436-5.682 3.525-11.553 1.75-19.37-2.195-7.091 1.757-12.574 6.643-8.783 2.948 1.702 3.035 5.635 7.332 9.086 4.296 3.451 7.746 1.56 10.023 5.787 1.267 4.613-3.444 8.687-2.008 14.37 1.606 6.75 4.886 3.79 5.733 9.132.257 5.001-2.183 6.504-2.515 11.165-.753 5.388 6.404 6.609 5.57 14.861-.835 8.253-8.907 18.15-8.907 18.15zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M491.592 579.208c5.363-26.99-2.583-63.605-16.67-95.03 9.107 16.904 24.969 56.148 18.27 94.983zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M490.878 534.151c-2.277-4.226-5.645-5.2-8.173-7.63 2.948 1.702 5.727 2.336 8.424 5.834zm0 0M484.963 510.356c-3.707-3.11-6.905-3.017-10.274-3.99 3.2-.095 5.978.539 8.926 2.24zm0 0M487.41 515.65c.162-5.729 1.674-9.709 3.186-13.689-1.681 2.912-3.193 6.892-4.535 11.94zm0 0M492.565 538.037c.163-5.729 1.675-9.709 3.186-13.689-1.68 2.912-3.192 6.892-4.114 11.212zm0 0M509.687 575.097c-.006-6.797-7.08-10.882-6.918-16.61-.426-6.07 14.307-4.357 14.05-9.358-.677-4.273-5.475-4.132-5.902-10.201-1.016-6.41 5.043-8.735 4.366-13.008-1.267-4.614-4.378-.587-4.805-6.656-.426-6.07 1.757-12.573 1.75-19.37-.006-6.798 5.545-12.328 9.252-9.217 2.528 2.43 2.026 6.022 5.312 9.86 3.707 3.112 8.167.834 11.453 4.672 2.697 3.498 2.026 6.022 2.453 12.092-.164 5.729 3.706 3.11 2.954 8.499-.333 4.66-3.362 5.823-5.125 11.6-1.932 4.707 5.225 5.927 2.202 13.887-3.024 7.96-31.042 23.81-31.042 23.81zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M499.006 585.43c24.982-21.486 36.56-63.327 18.855-93.93 7.758 15.154 11.898 31.131 7.959 50.209-3.187 13.688-11.253 30.383-25.045 44.741zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M522.376 550.396c-1.687-3.885-6.322-9.473-8.68-10.835 2.778.634 6.824 5.881 8.931 9.039zm0 0M526.73 523.794c-3.118-2.77-6.486-3.744-9.685-3.65 3.199-.094 6.398-.189 9.346 1.513zm0 0M527.319 524.134c1.763-5.776 4.874-9.803 6.975-13.442-2.691 3.299-5.382 6.598-7.314 11.306zm0 0M523.135 551.805c1.763-5.776 7.91-4.168 12.538-5.378-3.199.094-10.945-1.466-12.876 3.241zm0 0M478.71 575.652c-6.066-4.472-4.56-15.25-9.447-19.041-5.475-4.132-6.899 3.78-11.195.33-3.707-3.111-2.365-8.16-8.01-13.36-5.475-4.131-9.007.624-13.303-2.827-3.876-4.18.753-5.389-4.723-9.52-5.475-4.133-14.144-1.373-21.219-5.458-6.065-4.472-13.723-2.1-11.697 3.922 1.687 3.886 5.645 5.2 7.67 11.223 2.026 6.022-1.844 8.64 2.033 12.819 4.296 3.451 10.016-1.01 15.492 3.121 5.475 4.132 1.605 6.75 6.742 8.746 5.307 3.063 6.988.152 13.134 1.76 5.557 1.267 4.134 9.18 12.47 11.08 8.504 2.97 22.052-2.795 22.052-2.795zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M492.602 578.82c-29.046-4.153-64.17-26.373-91.385-52.761 14.915 16.375 48.195 47.236 91.134 54.557zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M447.55 561.543c-3.877-4.178-3.965-8.111-5.062-11.656.508 3.204.006 6.797 2.283 11.023zm0 0M425.227 545.744c-1.857-4.954-.765-8.206-.853-12.139-.502 3.593-1.593 6.845-.916 11.118zm0 0M429.272 550.991c-5.726-2.335-10.524-2.194-15.323-2.053 4.209-.482 8.418-.963 13.975.304zm0 0M450.666 564.314c-6.736-1.948-10.944-1.467-15.743-1.325 4.209-.482 8.418-.964 13.385-.037zm0 0M500.624 605.774c-8.085-3.698-6.749-15.543-13.065-18.22-6.906-3.016-7.74 5.237-12.456 2.514-5.727-2.335-4.554-8.452-11.04-12.196-6.905-3.017-11.446 2.126-16.163-.598-5.306-3.063-.257-5-6.742-8.745-6.486-3.744-16.245 2.267-24.92-1.77-8.505-2.97-16.414 1.198-13.968 6.493 2.277 4.226 6.655 4.812 9.69 10.447 3.036 5.635-1.674 9.709 3.632 12.772 5.306 3.064 11.447-2.125 18.773.163 6.905 3.017 2.615 6.363 8.762 7.97 5.726 2.336 8.417-.963 15.404-.81 6.567.88 5.733 9.132 15.919 9.19 9.766.786 26.174-7.21 26.174-7.21zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M517.207 605.643c-34.597 1.377-78.301-14.151-112.415-36.759 18.365 14.485 60.984 40.062 112.165 38.555zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M461.724 596.902c-4.296-3.451-5.394-6.996-6.492-10.542.508 3.205 1.016 6.41 3.713 9.908zm0 0M434.691 585.176c-2.866-4.566-2.365-8.158-1.863-11.75-1.091 3.251-2.182 6.503-.916 11.117zm0 0M440.167 589.308c-8.167-.833-13.216 1.105-19.024 1.634 5.639-1.597 10.268-2.807 16.665-2.995zm0 0M465.851 599.285c-7.577-.493-12.795.376-18.434 1.973 5.05-1.937 9.678-3.147 16.076-3.335zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M517.314 629.967c-8.085-3.697-7.759-15.155-14.075-17.83-6.905-3.017-7.15 5.576-12.287 3.58-5.137-1.994-4.553-8.451-11.88-10.74-6.905-3.016-10.856 2.466-16.163-.597-4.716-2.723-.257-5.001-7.162-8.018-6.906-3.016-16.076 3.336-24.581.366-8.505-2.969-16.414 1.2-13.799 7.562 2.107 3.158 7.075 4.085 10.11 9.72 3.457 4.906-.664 9.32 4.642 12.384 5.137 1.995 11.277-3.194 18.603-.905 7.326 2.288 3.036 5.634 9.183 7.242 6.146 1.608 8.248-2.032 15.235-1.88 6.987.153 6.153 8.405 16.759 7.735 10.186.058 25.415-8.619 25.415-8.619zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M533.728 628.769c-34.259 3.513-78.465-8.423-114.429-29.187 19.625 12.301 63.505 35.695 114.768 31.323zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M478.332 623.96c-4.886-3.791-5.983-7.337-7.08-10.882.507 3.205 1.015 6.41 4.302 10.248zm0 0M450.459 613.69c-2.866-4.566-2.365-8.158-2.452-12.091-1.092 3.252-2.014 7.572-.327 11.458zm0 0M455.934 617.822c-7.576-.492-13.215 1.105-18.433 1.974 4.628-1.21 9.678-3.147 16.075-3.335zm0 0M482.46 626.343c-7.577-.493-13.216 1.105-18.435 1.974 4.63-1.21 9.678-3.147 16.076-3.336zm0 0M207.02 997.22c6.899-3.781 15.065-2.949 20.955-6.342 5.3-3.733-2.785-7.43 1.675-9.709 3.87-2.618 10.104 2.923 15.994-.47 6.31-4.122 3.274-9.756 8.743-12.422 5.05-1.937 7.245 5.153 13.134 1.76 5.89-3.393 3.946-12.28 10.845-16.06 6.73-4.85 5.124-11.6-1.863-11.752-4.967-.927-9.088 3.488-16.075 3.336-6.988-.152-8.004-6.562-12.883-3.556-5.05 1.937-1.675 9.708-7.565 13.102-5.3 3.733-10.524-2.195-14.815 1.151-3.7 3.687 1.945 8.887-1.166 12.914-2.522 4.367-7.577-.492-11.36 6.059-4.202 7.279-5.62 21.988-5.62 21.988zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M202.146 1007.022c14.119-25.816 42.47-46.328 78.654-61.346-21.376 7.07-64.29 26.936-81.683 62.509zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M230.064 973.644c5.638-1.597 9.596-.282 13.974.304-3.958-1.314-7.326-2.288-12.544-1.419zm0 0M252.443 959.39c5.808-.528 9.346 1.514 13.893 3.17-3.538-2.043-7.075-4.086-12.463-4.285zm0 0M245.795 961.375c3.53-4.755 4.033-8.347 4.955-12.667.087 3.932-.414 7.525-2.346 12.233zm0 0M225.604 975.922c3.532-4.755 4.454-9.075 5.376-13.395.087 3.933-.835 8.253-2.346 12.233zm0 0M210.243 1024.314c9.095 3.31 19.362.503 26.688 2.792 7.916 2.629-1.675 9.708 4.052 12.044 6.147 1.608 12.369-6.446 20.284-3.817 8.505 2.97 6.661 11.61 13.818 12.83 6.736 1.948 7.232-8.441 15.737-5.472 7.915 2.63 7.589 14.087 16.683 17.397 9.264 4.378 9.61 13.312.351 15.73-5.638 1.598-11.114-2.534-20.372-.115-8.247 2.032-8.072 9.897-14.808 7.95-6.737-1.95-4.052-12.045-11.547-15.402-7.916-2.63-13.548 5.765-18.854 2.702-5.896-3.404-.094-10.73-4.56-15.25-4.635-5.587-9.258 2.42-15.83-5.258-6.574-7.677-11.642-26.131-11.642-26.131zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M201.563 1013.48c23.934 29.346 63.179 47.152 111.255 56.469-27.867-3.473-85.207-17.168-115.044-56.716zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M243.937 1047.65c7.577.492 12.036-1.786 16.665-2.996-4.46 2.278-8.33 4.896-14.727 5.085zm0 0M274.338 1060.349c7.238-1.644 11.528-4.99 16.408-7.996-4.29 3.346-7.99 7.033-13.63 8.63zm0 0M266.592 1058.788c5.645 5.2 6.912 9.814 9.358 15.108-1.857-4.954-3.124-9.567-6.58-14.474zm0 0M238.38 1046.382c5.645 5.2 7.501 10.154 9.358 15.108-1.267-4.614-2.534-9.227-6.58-14.474zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M207.122 997.512c6.31-4.121 15.486-3.676 20.365-6.682 5.89-3.393-2.784-7.43 1.675-9.709 4.46-2.278 10.694 3.263 16.584-.13 6.31-4.121 3.694-10.484 8.743-12.421 5.05-1.938 7.245 5.153 13.134 1.76 5.89-3.394 3.946-12.28 10.676-17.13 6.31-4.12 5.714-11.258-2.283-11.023-4.378-.586-8.079 3.1-15.486 3.676-7.577-.492-8.004-6.562-13.473-3.896-4.46 2.277-1.085 10.049-6.975 13.442-5.3 3.734-11.114-2.535-14.815 1.152-4.29 3.346 1.775 7.818-1.166 12.913-3.111 4.027-7.577-.492-11.36 6.059-4.791 6.938-5.62 21.989-5.62 21.989zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.601 7.271)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M201.658 1006.974c15.13-26.204 43.06-45.987 79.244-61.005-21.376 7.069-64.29 26.936-82.273 62.168zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.601 7.271)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M230.166 973.937c5.638-1.597 10.016-1.01 13.805-.765-3.789-.246-7.746-1.56-12.544-1.42zm0 0M251.955 959.342c6.398-.188 9.936 1.854 13.893 3.169-3.537-2.042-6.485-3.744-11.873-3.944zm0 0M245.896 961.667c3.532-4.754 4.454-9.075 5.376-13.395-.922 4.32-.834 8.253-3.356 12.62zm0 0M226.126 975.487c3.532-4.755 4.034-8.348 4.956-12.668-.502 3.593-.414 7.525-2.936 11.893zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.601 7.271)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M210.584 1024.198c8.674 4.038 18.772.163 26.688 2.792 7.495 3.357-2.095 10.436 4.052 12.044 6.146 1.608 11.779-6.786 20.284-3.817 7.915 2.629 6.071 11.27 12.807 13.218 7.157 1.22 7.822-8.101 16.158-6.2 8.505 2.97 7.589 14.087 16.853 18.465 9.094 3.31 10.029 12.584.771 15.003-5.639 1.597-11.114-2.535-20.372-.116-8.837 1.691-8.072 9.897-14.809 7.95-6.736-1.95-4.472-11.317-11.967-14.674-8.085-3.698-13.128 5.037-19.023 1.633-5.896-3.404.495-10.39-4.56-15.25-4.466-4.519-8.668 2.76-15.241-4.917-6.994-6.949-11.641-26.131-11.641-26.131zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.66 7.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M201.483 1014.091c24.355 28.619 63.6 46.425 111.675 55.742-28.456-3.813-85.627-16.44-115.463-55.988zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.66 7.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M243.268 1047.92c7.577.493 12.626-1.444 17.675-3.382-4.46 2.278-8.92 4.556-14.727 5.085zm0 0M274.09 1059.893c7.827-1.304 12.117-4.65 15.987-7.269-3.28 2.959-6.981 6.646-13.04 8.97zm0 0M265.923 1059.06c5.645 5.2 7.501 10.154 9.358 15.108-.847-5.342-2.114-9.955-5.99-14.134zm0 0M238.72 1046.266c5.645 5.2 6.492 10.542 9.358 15.108-1.267-4.614-3.123-9.568-6.579-14.474zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.66 7.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M353.192 1034.057c10.355 1.126 18.936-5.566 27.102-4.733 8.167.833.514 10.002 6.912 9.814 6.567.88 9.841-8.876 19.017-8.431 8.587.105 8.932 9.039 16.34 8.463 6.817-.916 4.873-9.803 13.46-9.698 9.176.445 11.459 11.468 21.224 12.254 10.356 1.126 12.3 10.013 4.39 14.181-4.88 3.006-11.615 1.058-19.525 5.226-8.33 4.896-5.544 12.327-12.532 12.175-7.407.576-7.501-10.154-15.667-10.987-8.167-.833-11.44 8.923-17.588 7.315-6.736-1.948-2.703-10.295-8.009-13.359-5.896-3.404-8.33 4.896-16.753-.937-8.254-4.766-18.37-21.283-18.37-21.283zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M342.241 1025.794c30.746 21.633 73.516 27.886 122.59 23.222-28.282 4.052-87.121 7.931-126.21-22.4zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M391.76 1047.59c7.238-1.644 11.528-4.99 16.408-7.996-4.29 3.346-7.571 6.304-13.63 8.63zm0 0M424.845 1050.193c7.069-2.712 10.18-6.74 13.711-11.494-2.521 4.367-5.632 8.394-10.932 12.128zm0 0M417.017 1051.497c6.486 3.744 9.772 7.583 12.639 12.15-2.277-4.227-5.143-8.793-9.44-12.244zm0 0M386.372 1047.39c6.905 3.017 9.772 7.583 13.058 11.422-2.697-3.498-4.973-7.724-9.86-11.516zm0 0M292.741 1024.39c5.13-4.803 12.958-6.107 17.669-10.18 4.12-4.415-5.055-4.86-1.355-8.547 3.28-2.959 10.186.058 14.897-4.016 4.71-4.074.665-9.321 4.534-11.94 4.29-3.346 8.336 1.901 13.047-2.173 4.71-4.074.495-10.39 5.457-16.26 5.13-4.801 2.095-10.436-4.554-8.451-4.629 1.21-7.32 4.508-13.968 6.493-6.228 1.256-9.095-3.31-13.385.036-3.28 2.959 1.355 8.546-2.766 12.96-4.12 4.415-10.606.67-13.717 4.698-2.691 3.299 3.625 5.975 2.703 10.295-1.932 4.708-7.238 1.644-9.421 8.148-2.183 6.504.859 18.936.859 18.936zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M292.158 1030.846c6.711-25.24 25.465-45.47 54.825-66.369-17.5 11.248-50.309 34.038-57.435 66.803zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M307.619 999.981c4.88-3.005 8.668-2.76 13.297-3.969-4.209.482-7.997.236-12.036 1.786zm0 0M324.692 982.664c5.639-1.597 9.007-.623 13.215-1.105-3.788-.246-7.156-1.22-12.375-.35zm0 0M319.392 986.398c2.352-5.436 1.254-8.981 1.336-11.846.508 3.205 1.436 5.682.514 10.002zm0 0M304.759 1002.212c1.932-4.708 1.424-7.913 1.336-11.845.508 3.205 1.016 6.41.094 10.73zm0 0M345.684 1017.106c3.362-5.823 11.441-8.923 14.972-13.678 3.952-5.483-5.055-4.86-2.954-8.5 3.111-4.026 10.857-2.465 14.809-7.948 3.951-5.483-.935-9.274 2.176-13.301 3.701-3.687 8.756 1.173 12.708-4.31 3.951-5.482-1.273-11.41 2.509-17.961 3.782-6.551-.094-10.73-7.163-8.018-4.04 1.55-5.971 6.258-12.45 9.31-6.48 3.053-9.346-1.513-12.877 3.242-3.7 3.686 2.365 8.159-.577 13.254-3.362 5.823-10.688 3.534-13.21 7.902-1.931 4.707 5.225 5.928 4.893 10.588-.922 4.32-7.069 2.713-8.073 9.898-.414 7.525 5.237 19.522 5.237 19.522zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M346.11 1023.175c1.576-27.236 17.043-51.303 42.609-79.245-15.813 15.133-44.659 46.034-44.879 81.816zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M355.676 988.907c4.71-4.074 8.33-4.896 12.37-6.446-3.62.822-7.829 1.303-11.699 3.922zm0 0M368.873 967.41c5.47-2.665 9.258-2.419 13.887-3.628-4.209.481-7.997.235-12.036 1.785zm0 0M364.752 971.825c.753-5.389-.345-8.934-1.442-12.48 1.097 3.546 3.205 6.704 2.872 11.364zm0 0M352.986 992.206c.752-5.389-.345-8.934-1.023-13.207 1.098 3.545 2.616 6.362 2.873 11.363zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.852 949.147c7.32-4.508 11.183-13.924 17.662-16.977 6.31-4.12 4.805 6.656 9.685 3.65 5.469-2.665 2.935-11.892 9.834-15.673 6.31-4.12 11.535 1.807 16.245-2.267 5.3-3.733-.934-9.274 5.376-13.395 7.32-4.509 14.313 2.44 22.222-1.728 7.49-3.44 13.554 1.032 9.941 8.652-2.521 4.367-8.16 5.964-11.773 13.583-4.202 7.28 1.274 11.411-4.026 15.145-5.3 3.733-10.274-3.991-16.753-.938-6.31 4.121-3.946 12.28-9.415 14.945-5.639 1.597-6.993-6.95-12.802-6.42-5.808.529-3.612 7.619-12.62 8.242-8.586-.105-23.576-6.819-23.576-6.819zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.357 7.25)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M493.477 948.796c33.167-.26 67.583-16.3 102.324-43.797-19.262 17.024-60.903 48.302-104.595 46.368zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.357 7.25)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.694 939.177c5.13-4.801 6.053-9.122 7.984-13.83-.922 4.32-1.844 8.641-5.375 13.396zm0 0M566.861 925.17c3.362-5.823 3.695-10.484 4.027-15.144.257 5 .345 8.933-2.007 14.369zm0 0M561.31 930.7c6.229-1.257 10.776.398 15.323 2.053-4.127-2.383-8.084-3.697-13.472-3.897zm0 0M536.824 941.796c6.397-.189 10.945 1.466 14.902 2.78-3.537-2.042-7.074-4.084-12.462-4.283zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.357 7.25)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M582.97 716.4c3.443-8.687.74-18.983 3.933-25.874 2.603-7.232 8.336 1.9 10.688-3.535 1.762-5.776-5.651-11.997-2.628-19.957 3.023-7.96 10.349-5.67 11.942-12.515 2.183-6.504-6.573-7.677-3.97-14.909 2.434-8.3 12.79-7.174 16.653-16.59 4.033-8.347 12.03-8.582 13.385-.036 1.436 5.682-2.516 11.165-1.16 19.711 1.354 8.546 8.761 7.97 7.168 14.815-2.183 6.504-10.688 3.534-14.3 11.154-3.193 6.89 4.64 12.384 1.279 18.207-2.942 5.096-9.766-.785-13.887 3.63-4.71 4.073 1.944 8.886-5.206 14.463-6.98 6.645-23.897 11.436-23.897 11.436zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M572.96 724.208c27.001-22.26 44.645-59.63 55.547-105.743-5.363 26.99-19.118 82.131-56.05 109.335zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M605.249 684.62c1.004-7.185-.853-12.14-2.12-16.753 2.277 4.226 3.544 8.84 3.97 14.909zm0 0M617.26 655.645c-.595-7.138-2.872-11.364-5.738-15.93 2.697 3.498 5.983 7.337 7.42 13.018zm0 0M616.257 662.83c5.13-4.802 9.17-6.352 14.219-8.29-4.629 1.21-9.258 2.42-13.548 5.766zm0 0M603.907 689.667c4.54-5.142 9.59-7.08 13.63-8.63-3.62.823-8.249 2.032-12.96 6.106zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M572.239 672.354c4.622-8.007 3.098-17.621 6.88-24.172 3.193-6.892 7.496 3.357 9.848-2.079 2.942-5.095-3.462-11.704.74-18.983 3.193-6.891 10.098-3.875 12.87-10.038 2.184-6.504-5.563-8.065-2.37-14.956 3.193-6.892 13.128-5.038 17.75-13.044 4.623-8.007 11.78-6.787 12.545 1.419.846 5.341-3.274 9.756-2.93 18.69.176 7.865 6.743 8.745 4.39 14.18-2.772 6.164-10.856 2.467-14.639 9.018-3.782 6.55 3.042 12.432-1.078 16.846-3.532 4.755-8.756-1.173-13.636 1.833-4.71 4.074 1.355 8.546-6.385 13.783-7.74 5.236-23.985 7.503-23.985 7.503zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M561.47 678.753c28.688-18.375 49.788-50.836 64.986-93.5-7.3 24.901-27.711 75.23-65.488 97.093zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M597.384 645.14c1.593-6.845.326-11.458-.35-15.731 1.097 3.545 2.364 8.159 2.2 13.887zm0 0M612.513 618.936c-.006-6.797-2.283-11.023-4.56-15.25 2.697 3.499 4.974 7.725 5.82 13.066zm0 0M609.91 626.168c5.72-4.462 9.929-4.944 13.968-6.494-3.619.822-8.417.964-13.297 3.97zm0 0M595.452 649.847c5.131-4.801 9.34-5.283 13.968-6.493-4.208.482-8.417.964-13.297 3.97zm0 0M566.693 775.91c-7.834-5.494-18.44-4.824-24.505-9.296-6.655-4.813 3.443-8.688-1.863-11.751-5.475-4.132-12.456 2.513-20.121-1.912-6.655-4.813-3.631-12.773-9.947-15.449-6.317-2.676-8.75 5.624-15.825 1.54-7.244-5.153-4.56-15.25-12.983-21.083-7.414-6.222-5.99-14.134 2.596-14.03 5.808-.528 10.864 4.331 19.03 5.164 8.587.105 5.13-4.802 11.027-1.398 6.485 3.745 4.64 12.385 11.296 17.198 7.244 5.153 15.316-4.744 20.372.115 4.886 3.792-2.265 9.369 1.36 15.344 3.036 5.635 9.007-.623 13.56 7.83 5.144 8.792 6.003 27.727 6.003 27.727zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M572.934 788.247c-17.035-33.127-50.647-59.327-94.189-80.584 25.265 10.704 77.65 37.067 97.557 81.558zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M539.98 745.929c-7.326-2.289-12.124-2.147-17.342-1.278 4.629-1.21 9.257-2.42 14.815-1.152zm0 0M513.361 726.678c-7.576-.492-12.036 1.786-16.665 2.995 4.04-1.55 7.91-4.168 13.717-4.697zm0 0M520.267 729.695c-4.215-6.316-4.472-11.317-5.319-16.658.257 5 .515 10.002 2.96 15.296zm0 0M544.107 748.312c-4.215-6.316-4.472-11.317-5.318-16.658.257 5 .514 10.002 2.96 15.296zm0 0M574.752 843.646c5.802-7.326 6.467-16.647 11.008-21.79 4.961-5.87 7.075 4.085 10.606-.67 4.121-4.414-1.273-11.41 4.109-18.008 4.371-6.211 11.446-2.126 14.388-7.222 3.362-5.823-4.133-9.18.828-15.05 4.792-6.938 14.056-2.56 19.438-9.158 6.391-6.986 13.297-3.97 12.463 4.284-.753 5.388-5.043 8.734-6.467 16.647-.835 8.253 4.892 10.589 1.36 15.343-3.361 5.823-10.606.67-16.157 6.2-4.54 5.143.433 12.867-3.857 16.213-4.71 4.074-8.505-2.97-14.144-1.372-5.47 2.665-.665 9.32-8.743 12.42-8.5 3.829-24.832 2.163-24.832 2.163zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M563.054 847.568c31.305-12.012 58.05-39.274 81.502-77.171-12.018 22.177-41.272 67.4-82.593 80.423zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M604.533 822.02c2.772-6.164 2.515-11.165 2.847-15.826.257 5.001.935 9.274-.408 14.322zm0 0M624.547 799.607c.584-6.457-.094-10.73-.94-16.072 1.267 4.614 2.954 8.5 2.79 14.228zm0 0M620.765 806.158c5.47-2.666 10.268-2.807 15.066-2.948-4.378-.587-8.756-1.174-13.805.764zm0 0M601.422 826.046c6.479-3.053 10.267-2.807 15.065-2.948-4.378-.586-8.166-.833-13.805.764zm0 0"
        transform="matrix(.00497 -.00232 .00287 .00402 16.333 7.303)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M527.271 890.845c-3.233-9.105-19.703-13.716-22.704-20.22-2.709-8.158 9.213-5.202 6.737-10.76-3.001-6.503-13.642-4.966-17.167-12.415-3.526-7.45 4.87-11.943 1.053-17.737-3-6.503-11.69-.354-15.215-7.803-3.525-7.45 6.125-15.136 2.892-24.24-3.234-9.106 4.113-15.491 11.575-10.762 5.596 3.547 6.586 9.696 14.048 14.426 7.315 5.557 13.846-.119 16.993 5.557 3.001 6.503-6.736 10.76-4.027 18.919 2.855 7.331 13.642 4.966 15.156 12.06.99 6.15-8.835 6.977-9.856 12.771-.497 6.74 8.132 4.848 7.051 14.899-.935 9.223-6.536 25.305-6.536 25.305zm0 0"
        transform="matrix(.00565 -.0008 .001 .00458 17.477 6.516)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M520.138 852.888c-4.634-5.084-13.058-8.276-18.13-10.878 4.548 1.656 13.118 4.02 17.897 8.277zm0 0M510 828.057c.496-6.74 3.383-11.352 5.746-16.91-2.887 4.613-5.628 8.396-7.466 14.9zm0 0M522.674 854.189c-.027-7.686-.406-9.46 1.956-15.017-2.887 4.611-2.508 6.385-3.676 13.007zm0 0"
        transform="matrix(.00565 -.0008 .001 .00458 17.477 6.516)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M525.169 906.69c7.092-36.302-13.158-78.278-38.54-118.599 16.087 22.466 52.747 73.31 40.784 121.555zm0 0"
        transform="matrix(.00565 -.0008 .001 .00458 17.477 6.516)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.511 822.145c-6.12-4.493-11.484-5.439-17.518-6.503 5.51.118 10.873 1.064 16.615 3.783zm0 0"
        transform="matrix(.00565 -.0008 .001 .00458 17.477 6.516)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M527.05 890.857c-3.329-8.971-19.203-13.591-22.624-20.75-2.805-6.873 9.105-5.029 6.562-10.852-2.543-5.822-13.05-4.23-16.473-11.39-3.683-8.21 4.45-12.764.934-18.113-3.777-6.398-12.003-.033-15.07-7.954-4.038-7.448 6.132-14.761 2.187-24.02-2.711-8.683 4.28-15.624 12.208-10.072 5.554 2.589 6.152 9.36 13.818 13.862 7.31 5.264 13.592-.153 17.108 5.195 3.16 6.11-6.918 11.613-4.113 18.485 3.067 7.922 13.574 6.33 14.528 12.339 1.57 6.297-8.581 7.127-9.217 13.322-.99 6.957 8.283 4.79 6.844 14.32-1.44 9.53-6.692 25.628-6.692 25.628zm0 0"
        transform="matrix(.0052 -.00196 .00242 .00421 16.568 7.162)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M519.831 853.178c-4.75-5.924-13.126-8.903-18.062-11.205 5.292 1.54 13.05 4.231 17.894 8.344zm0 0M510.37 828.363c-.244-7.532 2.504-11.815 5.608-16.86-3.366 3.996-6.114 8.278-7.366 14.186zm0 0M522.299 854.329c.374-7.245.205-10.106 2.336-14.676-2.748 4.282-2.224 6.381-3.477 12.29zm0 0"
        transform="matrix(.0052 -.00196 .00242 .00421 16.568 7.162)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M524.975 906.582c7.253-36.495-12.4-78.117-37.791-118.707 15.911 22.258 51.774 74.222 40.166 121.67zm0 0"
        transform="matrix(.0052 -.00196 .00242 .00421 16.568 7.162)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.358 821.39c-6.432-3.927-11.461-4.417-17.37-6.245 5.647.778 10.677 1.269 16.23 3.858zm0 0"
        transform="matrix(.0052 -.00196 .00242 .00421 16.568 7.162)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M353.29 1034.346c10.04.744 19.15-5.875 27.066-4.718 8.457.512.893 9.526 6.705 10.014 6.873.282 10.227-10.07 19.205-9.12 8.457.513 9.369 8.959 16.261 8.159 6.874.281 5.459-9.683 13.916-9.17 8.456.513 10.914 11.352 20.954 12.097 9.5 1.388 12.535 9.42 4.506 14.753-5.346 3.194-11.66 1.187-19.67 5.438-8.01 4.25-6.019 11.408-12.37 11.564-7.414.362-7.767-9.809-15.683-10.965-8.457-.513-11.792 8.757-17.585 7.188-6.855-1.363-2.998-10.196-8.232-13.49-6.296-3.089-8.55 4.894-16.932.055-8.363-5.92-18.14-21.805-18.14-21.805zm0 0"
        transform="matrix(.0044 -.00299 .00369 .00356 15.925 7.806)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M342.32 1026.238c30.323 21.055 73.593 27.74 122.88 23.015-28.648 4.488-87.957 7.386-127.127-22.19zm0 0"
        transform="matrix(.0044 -.00299 .00369 .00356 15.925 7.806)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M392.22 1047.263c7.432-1.444 11.195-4.87 15.48-7.858-3.763 3.426-7.526 6.851-12.854 8.964zm0 0M424.966 1050.602c6.408-3.4 10.19-7.907 13.431-11.77-2.72 4.3-5.44 8.6-10.786 11.795zm0 0M417.012 1051.608c6.817 3.526 9.387 7.877 13.02 12.022-2.57-4.351-5.14-8.702-10.375-11.997zm0 0M386.93 1047.212c6.817 3.526 9.387 7.877 13.019 12.022-2.57-4.35-5.14-8.702-10.374-11.996zm0 0"
        transform="matrix(.0044 -.00299 .00369 .00356 15.925 7.806)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M506.253 948.703c7.418-4.456 11.22-12.911 17.07-17.043 6.203-3.108 5.312 7.3 9.948 4.516 4.924-3.575 3.033-12.313 9.523-16.212 6.49-3.898 11.45 2.38 16.662-1.985 4.923-3.575-.964-9.295 5.814-13.984 6.49-3.899 13.37 3.077 21.426-1.145 8.058-4.223 13.945 1.497 10.078 8.14-2.652 5.296-8.28 6.825-11.794 14.49-3.867 6.643 1.029 11.108-3.895 14.682-4.923 3.575-10.236-3.725-16.438-.616-7.13 3.665-4.312 11.847-10.228 14.166-4.988 1.762-6.527-5.954-12.22-6.237-5.98.507-3.514 7.665-12.34 8.03-8.827.366-23.606-6.802-23.606-6.802zm0 0"
        transform="matrix(.0054 -.00159 .00196 .00437 16.866 6.865)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M493.94 948.693c32.525.211 67.601-16.539 101.36-43.606-18.349 16.576-60.453 48.656-104.429 46.067zm0 0"
        transform="matrix(.0054 -.00159 .00196 .00437 16.866 6.865)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.66 939.76c4.86-5.387 6.297-9.336 8.021-14.075-.797 4.182-2.234 8.13-5.526 13.194zm0 0M566.975 925.188c3.579-5.853 3.737-10.268 4.182-15.472-.158 4.414.324 9.062-2.328 14.358zm0 0M561.476 930.342c6.268-1.297 10.459 1.123 15.224 1.963-3.838-1.397-8.029-3.817-13.082-3.867zm0 0M536.952 941.988c6.62-.274 10.458 1.123 15.224 1.963-3.838-1.397-7.677-2.794-13.082-3.867zm0 0"
        transform="matrix(.0054 -.00159 .00196 .00437 16.866 6.865)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M480.243 566.516c31.009 33.432 62.357 69 78.727 111.449 25.57 70.083 18.658 151.497-22.281 214.237-34.636 51.821-85.698 91.247-141.74 116.152-52.341 21.217-111.94 23.688-164.908 3.782-19.958-7.64-39.245-17.805-57.522-28.358-8.755-1.173-14.219 8.29-6.974 13.443 62.163 40.742 130.435 42.31 201.555 28.052 36.442-10.017 70.099-27.465 99.12-50.5 44.501-33.51 82.511-77.56 99.804-130.659 26.024-79.115 9.272-171.28-45.251-234.787-13.905-16.763-28.651-32.07-44.407-46.99zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M170.33 983.485c-8.166-.833-12.111 11.447-4.785 13.736 4.039-1.55 10.343-12.469 4.785-13.736zm0 0M474.842 552.723c-4.635-5.588-13.892-3.169-17.769-7.348-4.045-5.247 3.193-6.891-.514-10.002-2.697-3.498-7.326-2.289-11.791-6.808-4.466-4.52-.345-8.934-4.052-12.044-3.707-3.111-4.209.481-8.085-3.698-4.466-4.519-2.032-12.82-6.667-18.407s-3.042-12.432 2.515-11.164c3.789.246 5.476 4.132 10.443 5.059 5.137 1.995 7.659-2.372 10.945 1.466 3.707 3.11.345 8.934 4.39 14.181 3.877 4.18 5.558 1.268 8.844 5.106 2.277 4.226.007 6.797 1.863 11.751 1.857 4.954 8.505 2.97 10.87 11.128 2.784 7.431-.992 20.78-.992 20.78zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M478.304 564.427c-5.663-25.592-27.157-56.442-52.685-78.944 15.248 11.714 44.99 40.532 54.285 78.896zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M460.254 524.89c-4.297-3.452-7.496-3.358-10.274-3.991 2.189.293 5.808-.53 9.345 1.513zm0 0M444.83 505.309c-3.957-1.314-6.987-.152-10.606.67 3.03-1.162 5.47-2.665 9.258-2.42zm0 0M449.127 508.76c-1.857-4.954-2.114-9.955-2.201-13.888.087 3.933-.414 7.525.432 12.867zm0 0M462.781 527.32c-2.026-6.023-2.113-9.956-2.79-14.229.087 3.933.175 7.866 1.442 12.48zm0 0M555.27 681.651c-8.506-2.97-17.594.518-23.91-2.158-7.326-2.288.834-8.253-4.303-10.248-6.147-1.608-10.35 5.671-17.675 3.382-7.915-2.629-6.492-10.541-13.059-11.421-6.146-1.608-6.391 6.986-13.717 4.697-7.326-2.289-7.25-11.95-15.925-15.988-8.505-2.97-9.27-11.175-1.022-13.207 4.629-1.21 9.935 1.854 17.763.55 7.658-2.372 6.642-8.781 12.789-7.174 6.147 1.608 4.302 10.249 11.628 12.537 6.906 3.017 11.108-4.262 16.835-1.926 5.306 3.063-.076 9.661 4.39 14.18 4.466 4.52 7.659-2.372 14.062 4.237 6.404 6.61 12.143 22.54 12.143 22.54zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M563.78 691.418c-23.257-25.074-58.964-40.837-102.072-49.227 25.088 2.839 76.702 14.198 104.85 49.86zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M524.272 661.814c-6.567-.88-10.606.67-15.655 2.608 4.46-2.278 7.91-4.169 13.717-4.697zm0 0M496.23 650.476c-6.229 1.257-9.51 4.215-13.38 6.834 3.281-2.959 5.972-6.258 10.6-7.468zm0 0M503.386 651.696c-5.055-4.86-6.742-8.745-9.02-12.971 1.688 3.886 2.955 8.5 6.241 12.338zm0 0M529.24 662.741c-5.056-4.86-7.332-9.086-9.61-13.312 1.688 3.886 2.955 8.5 6.831 12.678zm0 0M554.866 885.227c6.73-4.849 8.994-14.217 14.125-19.02 6.14-5.189 6.824 5.882 11.114 2.536 4.12-4.415.746-12.186 6.887-17.376 5.55-5.53 11.196-.33 15.317-4.744 4.54-5.142-2.114-9.955 4.027-15.144 5.72-4.462 13.554 1.032 20.704-4.545s14.225-1.492 11.202 6.467c-1.342 5.049-6.812 7.714-9.415 14.946-2.433 8.3 3.462 11.704-1.248 15.778-4.12 4.414-10.525-2.195-16.245 2.267-6.73 4.849-2.766 12.96-7.646 15.966-4.88 3.006-7.834-5.493-13.472-3.896-5.64 1.597-2.434 8.3-10.682 10.332-8.838 1.691-24.668-3.567-24.668-3.567zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M542.409 887.74c32.91-5.262 64.71-27.664 93.807-60.36-16.145 19.794-52.392 58.068-95.488 63.272zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M587.851 870.303c3.952-5.483 4.284-10.143 5.626-15.191-.332 4.66-.665 9.321-3.606 14.416zm0 0M610.732 852.457c2.772-6.163 2.515-11.164 2.258-16.165.678 4.273 1.355 8.546.182 14.662zm0 0M606.78 857.94c6.06-2.325 10.607-.67 14.985-.084-3.958-1.314-7.916-2.629-13.134-1.76zm0 0M584.15 873.99c6.649-1.985 11.027-1.398 15.405-.812-4.378-.586-8.336-1.9-13.554-1.032zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M584.386 801.945c5.97-6.258 6.466-16.647 11.007-21.79 4.962-5.87 7.665 4.426 10.776.399 3.531-4.755-1.442-12.48 3.94-19.077 4.96-5.87 11.026-1.398 14.388-7.221 3.951-5.483-3.544-8.84.828-15.05 4.961-5.87 13.635-1.833 20.027-8.819 5.97-6.257 13.297-3.969 12.462 4.284-.752 5.389-5.632 8.394-6.887 17.375-1.423 7.913 5.313 9.861 1.361 15.344-3.53 4.755-10.775-.398-15.737 5.472-5.55 5.53-.156 12.526-4.867 16.6-3.7 3.686-8.085-3.697-13.554-1.032-5.05 1.937-.834 8.253-8.913 11.353-7.91 4.168-24.831 2.162-24.831 2.162zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.705 7.251)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M573.277 806.208c30.885-11.285 58.05-39.274 81.502-77.172-12.018 22.177-41.861 67.06-83.182 80.083zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.705 7.251)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M614.166 780.318c3.362-5.823 2.685-10.096 3.437-15.485-.332 4.661.345 8.934-1.417 14.71zm0 0M633.76 758.634c1.594-6.845.327-11.458-.94-16.072 1.687 3.886 2.954 8.5 2.79 14.228zm0 0M630.988 764.797c5.47-2.665 10.268-2.807 14.476-3.288-3.788-.246-8.166-.833-13.215 1.104zm0 0M611.645 784.686c5.469-2.666 10.267-2.807 15.065-2.948-4.378-.587-8.756-1.174-13.805.764zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.705 7.251)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M567.361 741.04c-7.834-5.493-18.44-4.823-24.505-9.295-7.075-4.085 3.443-8.688-1.863-11.751-5.896-3.404-12.877 3.241-20.12-1.912-7.665-4.425-4.053-12.044-9.948-15.448-6.316-2.676-8.75 5.624-15.825 1.539-7.665-4.425-4.56-15.25-12.983-21.083-7.834-5.494-5.99-14.134 2.597-14.03 5.808-.528 10.443 5.06 19.03 5.165 8.586.104 5.13-4.802 11.026-1.398s4.641 12.384 11.296 17.197c6.654 4.813 15.316-4.744 20.372.116 4.465 4.519-2.265 9.368 1.36 15.343 3.036 5.635 8.587.105 13.14 8.557 5.144 8.793 6.423 27 6.423 27zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M573.602 753.378c-17.035-33.127-50.647-59.327-94.188-80.584 25.264 10.705 77.228 37.795 97.556 81.558zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.648 711.06c-7.326-2.288-12.544-1.42-17.342-1.278 4.629-1.21 9.258-2.42 14.815-1.152zm0 0M514.03 691.81c-7.577-.493-12.037 1.785-16.666 2.995 4.04-1.55 7.91-4.169 13.718-4.697zm0 0M520.935 694.826c-4.215-6.316-4.472-11.317-5.739-15.93.678 4.273.935 9.274 3.38 14.568zm0 0M544.775 713.443c-4.214-6.316-4.472-11.317-5.738-15.93.677 4.273.934 9.274 3.38 14.568zm0 0M588.078 750.09c4.202-7.279 2.678-16.893 6.46-23.444 3.783-6.551 7.916 2.629 10.858-2.467 2.352-5.435-3.883-10.976-.27-18.595 3.613-7.62 10.519-4.603 12.87-10.039 2.184-6.503-5.562-8.064-1.95-15.683 3.193-6.892 12.708-4.31 17.33-12.317 4.623-8.006 12.79-7.174 13.555 1.032-.163 5.73-4.284 10.144-3.52 18.35.176 7.865 6.743 8.745 3.97 14.908-1.762 5.776-10.436 1.739-14.218 8.29-3.782 6.55 2.621 13.16-.91 17.914-3.531 4.755-9.345-1.513-13.636 1.833-5.3 3.734.766 8.206-6.974 13.442-6.73 4.85-23.565 6.776-23.565 6.776zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M577.898 756.83c27.68-17.988 49.2-51.178 64.567-92.772-7.89 24.56-27.291 74.501-65.658 96.023zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M612.803 723.603c1.593-6.844.326-11.457.07-16.458 1.266 4.613 2.364 8.158 1.78 14.615zm0 0M627.932 697.4c-.006-6.798-2.283-11.024-3.55-15.637 1.687 3.885 4.384 7.383 4.81 13.453zm0 0M626.339 704.244c4.71-4.074 9.34-5.284 13.968-6.493-4.629 1.21-8.838 1.69-13.297 3.969zm0 0M611.292 727.583c4.71-4.074 9.339-5.283 13.968-6.493-4.63 1.21-8.838 1.691-13.297 3.97zm0 0M557.082 639.025c4.033-8.347 1.33-18.643 3.933-25.875 2.603-7.231 8.925 2.242 10.688-3.534 1.762-5.776-5.062-11.657-2.038-19.617 2.433-8.3 10.349-5.67 11.942-12.515 1.593-6.844-7.163-8.018-4.56-15.25 3.024-7.96 12.79-7.173 17.243-16.249 3.443-8.687 11.44-8.923 13.384-.036.847 5.342-2.515 11.165-1.16 19.71 1.775 7.82 8.762 7.971 6.58 14.475-2.184 6.504-10.689 3.535-14.301 11.154-2.603 7.232 4.64 12.385 1.279 18.208-2.942 5.095-9.176-.445-13.887 3.629-4.12 4.414 1.945 8.886-4.616 14.804-6.981 6.645-24.487 11.096-24.487 11.096zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M547.661 647.173c26.413-22.601 44.646-59.63 54.958-106.084-4.773 27.33-18.698 81.404-55.46 109.676zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M579.95 607.584c.415-7.525-.852-12.138-2.119-16.752 1.687 3.886 3.374 7.771 3.8 13.84zm0 0M592.383 577.882c-1.606-6.75-3.883-10.976-6.16-15.202 2.697 3.498 5.394 6.996 6.83 12.678zm0 0M590.959 585.795c4.54-5.143 9.17-6.352 13.63-8.63-4.63 1.21-8.249 2.032-13.549 5.765zm0 0M578.019 612.292c5.55-5.53 9.59-7.08 14.64-9.017-4.63 1.21-9.258 2.419-13.549 5.765zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M533.48 605.017c4.372-6.21-1.279-18.208 2.083-24.03 3.951-5.484 7.495 3.356 10.017-1.011 2.521-4.368-.684-11.07 2.678-16.894 3.362-5.823 8.837-1.691 11.19-7.127 1.931-4.707-1.857-4.954.915-11.117 3.362-5.823 12.288-3.582 17.08-10.52 3.782-6.551 10.938-5.33 11.534 1.807.257 5-2.603 7.231-3.017 14.757.596 7.137 4.723 9.52 2.791 14.228-2.942 5.095-9.427 1.35-12.789 7.174-3.951 5.482.176 7.865-3.525 11.552-3.111 4.027-6.649 1.984-10.518 4.603-4.88 3.005-.916 11.117-7.646 15.966-6.9 3.78-20.793.612-20.793.612zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M522.121 611.076c24.067-10.368 48.535-41.856 63.57-78.79-7.81 21.696-27.385 63.772-62.641 81.267zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M556.694 582.51c1.762-5.776 1.085-10.049.408-14.322.677 4.273 2.364 8.159 1.442 12.48zm0 0M570.9 560.627c.584-6.457-1.103-10.343-2.79-14.228 1.687 3.885 3.794 7.043 4.64 12.384zm0 0M569.138 566.403c4.88-3.006 9.088-3.488 13.128-5.038-4.209.482-7.408.576-11.867 2.854zm0 0M555.182 586.49c4.29-3.346 8.5-3.827 13.128-5.037-4.209.482-7.997.235-12.457 2.513zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M394.754 1006.565c3.864-9.416 1.16-19.711 3.764-26.943 3.023-7.96 8.335 1.901 10.687-3.534 2.183-6.504-5.23-12.726-2.797-21.026 3.444-8.687 10.35-5.67 12.363-13.243 1.593-6.844-7.163-8.018-4.14-15.977 2.434-8.3 12.79-7.174 16.653-16.59 3.444-8.687 11.44-8.923 12.965.692 1.016 6.41-2.516 11.164-.992 20.779 1.355 8.546 8.342 8.698 6.329 16.27-2.183 6.504-10.268 2.807-13.88 10.426-3.024 7.96 4.39 14.181 1.028 20.005-2.942 5.095-9.346-1.514-13.466 2.9-4.542 5.143 1.524 9.615-5.037 15.532-6.981 6.645-23.477 10.709-23.477 10.709zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.728 7.358)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M388.444 1010.686c26.413-22.601 40.187-57.351 50.75-105.602-4.184 27.67-14.91 81.65-51.252 109.194zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.728 7.358)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M416.864 973.716c1.003-7.185-.853-12.14-2.29-17.821 1.857 4.954 4.134 9.18 4.14 15.977zm0 0M428.706 943.673c-.176-7.866-3.042-12.432-5.908-16.998 3.286 3.838 5.563 8.064 7.589 14.086zm0 0M427.872 951.926c4.961-5.87 9-7.42 13.04-8.97-4.04 1.55-8.248 2.031-12.539 5.378zm0 0M415.521 978.764c4.542-5.143 9.17-6.352 13.63-8.63-4.04 1.55-8.668 2.76-12.958 6.106zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.728 7.358)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M560.963 832.457c-7.163-8.017-19.287-10.165-25.101-16.433-5.815-6.268 6.98-6.645 2.515-11.165-5.476-4.131-15.743-1.325-22.567-7.206-6.994-6.949.157-12.526-6.498-17.339-6.065-4.472-11.447 2.126-18.86-4.095-6.825-5.88.407-14.322-6.755-22.34-7.583-7.29-2.791-14.228 6.723-11.646 6.737 1.948 10.362 7.923 20.466 10.846 10.105 2.922 13.467-2.901 19.532 1.571 5.645 5.2-2.515 11.165 3.889 17.773 5.814 6.269 15.912 2.394 19.957 7.641 3.626 5.975-6.222 8.054-4.196 14.076 2.616 6.363 10.105 2.922 13.228 12.49 2.954 8.5-2.333 25.827-2.333 25.827zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.39 797.287c-7.664-4.425-13.221-5.692-18.779-6.96 4.968.927 10.945 1.467 17.261 4.143zm0 0M516.544 771.873c-8.505-2.97-14.313-2.44-20.29-2.98 5.387.2 10.606-.67 17.762.55zm0 0M523.788 777.026c-2.785-7.43-1.863-11.751-1.53-16.412-.922 4.32-2.434 8.3-.998 13.982zm0 0M544.687 800.738c-2.616-6.362-1.863-11.75-1.53-16.412-.923 4.32-1.845 8.641-1.418 14.71zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M562.148 839.935c-9.207-34.431-36.34-63.684-78.966-96.058 25.86 17.842 73.623 52.211 82.503 98.1zm0 0M527.343 890.688c-3.543-8.84-19.795-13.37-23-20.072-2.784-7.431 9.34-5.284 6.724-11.647-2.446-5.294-13.472-3.896-16.847-11.667-3.374-7.772 4.535-11.94 1.5-17.575-3.626-5.975-12.375-.35-15.75-8.122-3.374-7.771 6.216-14.851 2.672-23.69-2.954-8.5 4.027-15.145 11.692-10.72 5.306 3.064 6.322 9.473 14.156 14.967 7.665 4.425 13.805-.764 16.84 4.87 3.626 5.975-6.303 10.919-3.518 18.35 2.364 8.158 13.222 5.692 14.238 12.102 1.605 6.75-8.58 6.692-9.164 13.149-1.004 7.185 8.254 4.766 7.169 14.815-1.675 9.708-6.712 25.24-6.712 25.24zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M519.817 853.345c-4.635-5.587-12.72-9.285-17.857-11.28 4.968.927 13.473 3.897 17.939 8.416zm0 0M509.945 828.235c.414-7.525 3.525-11.552 5.877-16.987-3.111 4.027-5.632 8.394-7.395 14.17zm0 0M522.596 853.98c-.007-6.798.075-9.663 2.007-14.37-2.522 4.367-2.183 6.504-3.946 12.28zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M525.085 906.854c7.038-36.699-12.951-78.325-38.159-119.083 15.931 22.785 52.429 73.943 40.687 121.513zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.73 821.92c-6.655-4.813-12.042-5.012-17.6-6.28 5.388.2 10.776.399 16.082 3.462zm0 0M493.627 566.48c-2.195-7.09-12.13-8.945-13.566-14.627-1.436-5.681 5.13-4.802 3.864-9.415-1.688-3.886-6.655-4.813-8.681-10.835-2.026-6.022 3.023-7.96 1.167-12.914-2.277-4.226-4.378-.586-6.404-6.608-2.026-6.023 3.945-12.28 1.75-19.37-1.775-7.82 2.177-13.302 6.473-9.85 3.117 2.77 3.205 6.702 7.501 10.153 4.297 3.451 8.167.833 9.434 5.447 2.277 4.226-3.024 7.96-1.418 14.71 1.436 5.681 4.886 3.79 5.563 8.064.847 5.341-2.182 6.504-2.345 12.233-.333 4.66 6.824 5.88 5.99 14.134-.835 8.253-9.328 18.878-9.328 18.878zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M491.871 579.053c4.943-26.262-2.583-63.605-17.26-95.37 9.276 17.972 25.559 56.488 18.86 95.323zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M491.156 533.997c-2.276-4.227-5.644-5.2-8.592-6.903 2.778.634 5.726 2.336 8.254 4.766zm0 0M484.822 510.929c-3.707-3.11-6.486-3.745-9.854-4.719 2.779.634 5.978.54 8.926 2.242zm0 0M487.688 515.495c-.426-6.07 1.675-9.709 2.597-14.029-1.512 3.98-3.193 6.892-3.945 12.28zm0 0M492.844 537.882c-.427-6.07 1.674-9.709 2.596-14.029-1.511 3.98-3.192 6.892-3.945 12.28zm0 0M509.966 574.942c-.006-6.797-7.08-10.881-7.507-16.95.163-5.73 14.896-4.017 14.219-8.29-.257-5.001-5.645-5.2-6.072-11.27-.426-6.069 5.213-7.666 4.535-11.94-1.267-4.613-3.957-1.314-4.384-7.383-.847-5.341 1.336-11.845 1.75-19.37-.595-7.138 5.545-12.327 9.252-9.217 2.527 2.43 1.016 6.41 5.312 9.861 3.707 3.11 8.167.833 10.864 4.331 3.286 3.839 2.615 6.363 2.452 12.092.426 6.069 4.296 3.45 3.544 8.84-.333 4.66-3.783 6.55-5.714 11.258-1.343 5.048 5.814 6.268 2.79 14.228-3.023 7.96-31.04 23.81-31.04 23.81zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M499.285 585.274c23.972-21.098 36.14-62.598 17.845-93.542 8.768 14.767 12.908 30.745 8.548 50.55-3.186 13.688-10.832 29.655-24.625 44.013zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M522.235 550.97c-1.267-4.614-5.902-10.202-8.85-11.904 2.948 1.702 7.414 6.221 9.521 9.38zm0 0M525.998 524.027c-2.697-3.499-5.895-3.404-9.263-4.378 3.788.246 6.987.152 9.514 2.581zm0 0M527.598 523.98c1.762-5.776 3.864-9.416 6.975-13.443-2.691 3.3-5.382 6.598-7.734 12.034zm0 0M523.414 551.65c1.763-5.776 7.49-3.44 12.538-5.378-4.208.482-10.945-1.466-13.297 3.97zm0 0M478.988 575.497c-6.485-3.744-4.56-15.25-9.446-19.04-5.475-4.133-6.9 3.78-11.195.329-3.707-3.11-2.955-8.5-8.43-12.631-5.055-4.86-9.597.282-13.473-3.897-3.286-3.838.922-4.32-4.723-9.52-5.475-4.132-13.974-.304-20.629-5.117-6.654-4.812-13.723-2.1-11.697 3.922 1.097 3.546 5.055 4.86 7.08 10.882 2.027 6.023-2.263 9.369 2.033 12.82 4.296 3.45 10.186.058 16.082 3.462 5.475 4.131 1.605 6.75 6.322 9.473 5.137 1.995 7.407-.576 13.134 1.76 5.557 1.267 4.133 9.18 12.469 11.08 8.336 1.902 22.473-3.523 22.473-3.523zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M492.88 578.665c-29.046-4.153-64.59-25.645-91.384-52.761 14.325 16.035 48.195 47.236 91.134 54.558zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M446.818 561.776c-2.866-4.566-3.374-7.771-4.051-12.044.087 3.932.006 6.797 2.282 11.023zm0 0M425.085 546.317c-1.856-4.954-1.354-8.546-.853-12.139-1.09 3.252-2.182 6.504-.495 10.39zm0 0M429.551 550.836c-6.736-1.948-10.945-1.466-15.743-1.325 4.209-.482 8.837-1.691 13.805-.764zm0 0M450.525 564.887c-6.316-2.676-10.525-2.195-15.323-2.053 4.209-.482 8.417-.964 13.385-.037zm0 0M500.313 605.278c-7.495-3.357-6.159-15.202-13.065-18.218-6.316-2.676-7.15 5.577-12.876 3.24-4.717-2.722-3.544-8.839-10.45-11.855-7.075-4.085-11.446 2.126-16.332-1.666-4.717-2.723.332-4.66-6.153-8.405-6.906-3.016-16.835 1.927-25.34-1.042-8.085-3.698-16.584.13-13.548 5.765 1.687 3.886 6.655 4.813 9.69 10.447 2.616 6.363-1.674 9.709 3.632 12.773 4.717 2.723 11.447-2.126 18.352.89 6.906 3.017 2.616 6.363 8.762 7.97 6.147 1.608 8.838-1.69 15.405-.81 6.987.151 5.563 8.064 15.919 9.19 10.186.058 26.004-8.279 26.004-8.279zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M516.897 605.148c-34.428 2.445-78.133-13.083-112.247-35.69 18.785 13.757 61.404 39.333 112.165 38.554zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M461.583 597.475c-4.466-4.52-4.974-7.724-6.072-11.27.508 3.205.596 7.138 3.293 10.636zm0 0M434.55 585.75c-2.446-5.295-1.945-8.887-2.032-12.82-.502 3.592-2.014 7.572-.327 11.458zm0 0M439.436 589.54c-7.157-1.22-12.796.378-18.014 1.247 4.629-1.21 10.267-2.807 16.245-2.267zm0 0M465.71 599.858c-7.157-1.22-12.796.376-18.604.905 5.219-.869 10.268-2.806 16.666-2.995zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M517.593 629.813c-8.505-2.97-7.759-15.156-14.075-17.832-7.326-2.288-7.57 6.305-12.707 4.31-5.307-3.064-4.554-8.452-11.46-11.469-7.495-3.357-11.277 3.194-16.583.13-5.306-3.063.163-5.728-7.163-8.017-6.905-3.016-16.245 2.268-24.75-.702-8.505-2.97-16.834 1.927-13.21 7.902 1.688 3.886 6.486 3.744 10.112 9.72 3.035 5.634-1.255 8.98 4.051 12.044 5.307 3.063 11.867-2.854 18.604-.906 7.325 2.289 3.205 6.703 9.771 7.583 6.147 1.608 8.248-2.031 15.236-1.88 6.987.153 6.153 8.406 16.339 8.463 10.186.058 25.835-9.346 25.835-9.346zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M534.007 628.614c-34.259 3.513-79.054-8.763-114.43-29.187 19.206 13.03 63.506 35.695 114.769 31.323zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M478.611 623.805c-4.886-3.791-5.983-7.336-7.08-10.882.087 3.933.595 7.138 3.881 10.976zm0 0M450.318 614.263c-3.456-4.906-2.955-8.499-3.042-12.432-.502 3.593-1.004 7.185.683 11.07zm0 0M455.624 617.327c-6.987-.152-12.626 1.445-18.265 3.042 5.05-1.937 10.098-3.875 16.496-4.063zm0 0M482.149 625.848c-6.987-.152-12.626 1.445-17.845 2.314 4.63-1.21 9.678-3.147 16.076-3.336zm0 0M207.298 997.065c6.31-4.122 15.066-2.948 20.366-6.682 5.89-3.393-2.615-6.363 1.675-9.709 4.46-2.278 10.694 3.263 16.584-.13 5.89-3.394 3.274-9.756 8.323-11.694 5.47-2.665 7.664 4.425 13.554 1.032 5.89-3.393 3.525-11.552 10.255-16.4 6.9-3.782 5.714-11.26-1.862-11.752-4.799.141-8.5 3.828-15.486 3.676-6.988-.152-8.424-5.834-13.473-3.897-4.88 3.006-1.085 10.05-6.975 13.443-5.3 3.734-10.945-1.467-15.235 1.88-4.29 3.346 1.775 7.818-.746 12.185-3.532 4.755-7.577-.492-11.78 6.787-4.371 6.21-5.2 21.26-5.2 21.26zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M202.425 1006.867c14.119-25.816 42.47-46.327 78.654-61.345-21.796 7.796-64.29 26.936-82.273 62.168zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M229.922 974.217c5.64-1.597 10.017-1.01 14.395-.423-3.958-1.315-7.915-2.63-12.544-1.42zm0 0M251.712 959.623c6.398-.188 10.355 1.126 13.893 3.169-2.948-1.702-6.485-3.745-11.453-4.672zm0 0M246.073 961.22c3.532-4.755 4.033-8.347 4.956-12.667.087 3.933-.415 7.525-2.936 11.892zm0 0M225.883 975.767c3.531-4.754 4.453-9.075 4.955-12.667.088 3.933-.414 7.525-2.935 11.892zm0 0M210.522 1024.16c8.674 4.037 18.773.162 26.688 2.79 7.495 3.358-2.095 10.438 4.052 12.045 6.147 1.608 11.779-6.786 20.284-3.817 8.505 2.97 6.661 11.61 12.808 13.218 7.156 1.22 7.821-8.101 16.746-5.86 7.916 2.63 7 13.747 16.264 18.125 9.095 3.31 10.03 12.584.771 15.003-5.638 1.597-11.114-2.535-20.372-.116-8.248 2.032-8.072 9.897-14.808 7.95-6.737-1.949-4.472-11.317-11.968-14.674-7.495-3.357-13.127 5.037-19.023 1.633-5.306-3.063.496-10.39-4.56-15.249-4.465-4.52-8.668 2.76-15.241-4.918-6.993-6.949-11.64-26.13-11.64-26.13zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M201.421 1014.052c24.355 28.62 63.6 46.425 111.676 55.742-28.457-3.813-85.628-16.44-115.464-55.988zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M243.796 1048.222c7.576.493 12.036-1.785 17.085-3.722-4.46 2.277-8.919 4.555-14.727 5.084zm0 0M274.027 1059.854c7.828-1.304 12.118-4.65 15.988-7.268-3.28 2.958-6.98 6.645-13.04 8.97zm0 0M266.45 1059.361c5.056 4.86 6.912 9.814 8.769 14.768-.847-5.341-2.114-9.955-5.99-14.134zm0 0M238.659 1046.227c5.645 5.2 7.081 10.882 9.358 15.108-1.267-4.613-2.534-9.227-6.58-14.474zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M207.4 997.357c6.31-4.121 15.066-2.948 20.366-6.682 5.89-3.393-3.205-6.703 1.675-9.709 4.46-2.277 10.104 2.923 16.584-.13 5.89-3.393 3.274-9.756 8.154-12.762 5.049-1.937 7.244 5.153 13.723 2.1 5.89-3.393 3.945-12.28 10.255-16.4 6.73-4.85 5.714-11.26-1.862-11.752-4.799.142-8.5 3.828-16.076 3.336-6.987-.152-7.414-6.222-12.883-3.556-5.05 1.937-1.675 9.709-6.975 13.442-5.3 3.734-11.534-1.807-15.235 1.88-4.29 3.346 1.775 7.818-.746 12.186-3.112 4.026-7.577-.493-11.949 5.718-4.202 7.279-5.03 22.329-5.03 22.329zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.411 7.272)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M201.937 1006.82c14.709-25.477 42.47-46.329 78.654-61.347-20.786 7.41-64.29 26.936-81.683 62.509zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.411 7.272)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M229.435 974.17c6.648-1.985 10.016-1.011 14.394-.425-3.368-.974-7.325-2.288-12.544-1.419zm0 0M252.234 959.188c5.978.54 9.935 1.854 13.893 3.168-3.958-1.314-7.495-3.357-11.873-3.943zm0 0M246.175 961.513c3.532-4.755 4.033-8.348 4.956-12.668-.502 3.593-.415 7.525-2.936 11.893zm0 0M225.985 976.06c3.531-4.755 4.453-9.075 5.375-13.396-.922 4.32-.834 8.253-2.935 11.893zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.411 7.272)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M210.442 1024.771c9.095 3.31 19.193-.565 26.688 2.792 7.916 2.629-2.264 9.368 4.472 11.316 5.727 2.336 11.36-6.058 19.864-3.089 8.336 1.901 6.072 11.27 13.228 12.49 7.157 1.22 7.822-8.101 15.737-5.472 8.505 2.97 7.59 14.087 17.274 17.737 8.674 4.038 9.019 12.971.77 15.003-6.227 1.257-11.534-1.807-20.371-.116-9.258 2.42-8.662 9.557-15.229 8.677-6.736-1.948-4.641-12.385-12.137-15.742-7.495-3.356-12.958 6.106-18.854 2.702-5.895-3.404.496-10.39-4.14-15.977-4.465-4.52-8.667 2.76-15.66-4.19-6.574-7.677-11.642-26.131-11.642-26.131zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.353 7.212)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M201.762 1013.936c23.765 28.279 62.59 46.812 110.665 56.13-27.447-4.201-84.617-16.828-114.454-56.376zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.353 7.212)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M243.547 1047.766c7.576.492 12.626-1.445 17.675-3.383-4.46 2.278-8.92 4.556-14.727 5.085zm0 0M274.368 1059.738c7.407-.576 11.108-4.263 15.988-7.268-3.7 3.686-7.57 6.304-13.63 8.63zm0 0M266.202 1058.905c5.645 5.2 7.501 10.154 9.358 15.108-1.267-4.614-2.534-9.227-6.58-14.474zm0 0M238.58 1046.839c5.054 4.86 6.911 9.814 9.357 15.108-1.856-4.954-2.703-10.295-6.58-14.474zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.353 7.212)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M353.471 1033.902c9.766.786 18.515-4.838 27.102-4.733 8.166.833.514 10.002 6.492 10.542 6.987.152 10.261-9.604 18.848-9.5 9.176.446 9.52 9.38 16.339 8.464 6.987.152 5.463-9.463 14.05-9.358 8.586.105 10.869 11.128 21.224 12.254 9.346 1.514 12.3 10.013 4.39 14.181-5.3 3.734-11.616 1.058-19.945 5.954-7.91 4.168-5.714 11.259-12.112 11.447-7.407.576-7.501-10.154-15.667-10.987-8.167-.833-11.441 8.923-17.588 7.315-7.156-1.22-2.703-10.295-8.599-13.699-5.896-3.404-7.74 5.237-16.583.13-7.834-5.493-17.951-22.01-17.951-22.01zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M342.1 1026.367c31.166 20.905 73.936 27.159 122.589 23.222-28.281 4.052-87.29 6.863-126.208-22.4zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M392.038 1047.435c7.238-1.644 11.529-4.99 15.819-8.337-3.7 3.687-7.401 7.373-13.04 8.97zm0 0M424.704 1050.766c6.9-3.78 10.01-7.808 14.131-12.222-3.11 4.027-5.632 8.394-10.932 12.128zm0 0M416.876 1052.07c6.906 3.016 9.183 7.242 13.059 11.421-2.867-4.566-5.143-8.792-10.45-11.856zm0 0M386.65 1047.236c6.486 3.744 9.773 7.583 12.639 12.15-2.277-4.227-4.554-8.453-9.44-12.244zm0 0M292.6 1024.962c4.961-5.87 13.378-6.833 17.079-10.52 4.71-4.074-4.046-5.247-.765-8.206 3.7-3.686 10.186.058 15.316-4.744 4.71-4.074.245-8.593 4.535-11.94 4.29-3.346 7.916 2.63 12.626-1.445 5.13-4.801.327-11.457 5.457-16.26 5.551-5.53 2.515-11.164-4.723-9.52-4.629 1.21-6.73 4.85-13.378 6.834-7.238 1.644-9.095-3.31-13.385.036-4.29 3.346 1.355 8.547-2.766 12.961s-10.606.67-13.717 4.697c-3.112 4.027 3.625 5.975 1.693 10.683-.922 4.32-6.228 1.257-8.411 7.76-2.183 6.504.859 18.936.859 18.936zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M291.847 1030.35c6.711-25.24 26.055-45.128 55.415-66.027-17.5 11.248-50.31 34.037-57.855 67.53zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M307.898 999.826c4.88-3.005 8.668-2.76 12.287-3.581-3.199.094-6.987-.152-11.447 2.126zm0 0M323.96 982.897c5.64-1.597 10.018-1.01 13.806-.765-3.368-.974-7.157-1.22-11.955-1.079zm0 0M319.081 985.902c1.932-4.707 1.424-7.912 1.336-11.845 1.098 3.545 1.606 6.75.684 11.07zm0 0M304.617 1002.785c2.352-5.436 1.255-8.98 1.336-11.845.508 3.205 1.437 5.682.515 10.002zm0 0M345.543 1017.68c3.782-6.552 11.86-9.652 15.392-14.407 3.362-5.823-6.065-4.472-2.954-8.499s10.437-1.738 14.388-7.221c3.952-5.483-1.524-9.615 2.597-14.029 3.7-3.687 8.756 1.173 12.708-4.31 3.531-4.754-2.283-11.023 2.089-17.233 3.782-6.551-.264-11.799-6.743-8.746-4.04 1.55-5.971 6.258-12.45 9.31-6.48 3.054-9.766-.785-13.467 2.902-3.11 4.027 2.954 8.499-.407 14.322-3.532 4.755-10.858 2.466-12.79 7.174-1.931 4.708 5.225 5.928 4.303 10.248-.753 5.389-6.48 3.053-7.483 10.238-1.003 7.184 4.817 20.25 4.817 20.25zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M345.97 1023.748c1.574-27.236 16.452-51.643 42.607-79.245-15.812 15.133-44.238 45.306-45.047 80.748zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M355.955 988.752c3.7-3.687 8.33-4.896 12.369-6.446-4.629 1.21-8.248 2.031-12.118 4.65zm0 0M369.152 967.256c5.47-2.666 9.258-2.42 13.466-2.901-3.788-.246-7.576-.493-12.625 1.445zm0 0M364.611 972.398c1.173-6.116-.345-8.934-1.022-13.207 1.097 3.545 2.615 6.363 2.283 11.023zm0 0M352.675 991.71c1.342-5.048.245-8.593-.853-12.138a22.92 22.92 0 012.703 10.295zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M506.13 948.992c7.32-4.508 10.764-13.196 17.074-17.317 6.479-3.053 5.394 6.996 10.273 3.99 4.88-3.005 2.936-11.892 9.835-15.672 6.31-4.122 11.115 2.534 15.825-1.54 5.3-3.733-.514-10.002 5.796-14.123 6.31-4.121 13.303 2.828 21.212-1.34 7.91-4.168 14.564.644 10.951 8.264-2.941 5.095-8.58 6.692-12.362 13.243-3.613 7.62 1.862 11.751-3.438 15.485-5.3 3.733-10.273-3.99-17.173-.21-6.479 3.053-3.945 12.28-9.584 13.877-5.049 1.937-6.404-6.609-12.212-6.08-5.808.529-3.612 7.62-12.62 8.242-9.006.623-23.576-6.819-23.576-6.819zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.656 7.251)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M493.756 948.641c33.167-.26 67.582-16.3 102.324-43.797-19.262 17.024-61.323 49.03-104.595 46.369zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.656 7.251)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.973 939.023c4.12-4.415 6.052-9.123 7.564-13.102-.922 4.32-1.844 8.64-4.955 12.667zm0 0M566.72 925.743c3.362-5.823 3.694-10.484 4.447-15.872-.332 4.66.345 8.933-2.007 14.37zm0 0M561 930.204c6.818-.916 11.365.74 15.912 2.394-4.547-1.655-8.085-3.697-13.472-3.896zm0 0M536.682 942.369c6.818-.917 10.776.398 15.323 2.053-3.537-2.043-8.084-3.697-13.472-3.897zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.656 7.251)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M583.249 716.245c3.443-8.687.32-18.255 2.923-25.487 3.613-7.619 9.345 1.514 11.108-4.262 2.352-5.436-5.062-11.657-2.459-18.889 3.024-7.96 10.77-6.399 12.363-13.243 1.173-6.116-6.993-6.95-4.56-15.25 3.024-7.959 13.379-6.833 16.822-15.52 3.444-8.688 12.03-8.583 13.806-.765 1.016 6.41-2.516 11.165-1.161 19.711s8.762 7.97 6.58 14.474c-1.594 6.845-11.109 4.263-13.712 11.495-3.613 7.619 4.642 12.385 1.28 18.208-3.362 5.823-9.766-.786-14.477 3.288-4.54 5.142 1.945 8.887-5.036 15.532s-23.477 10.708-23.477 10.708zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M572.818 724.78c27.422-22.988 45.066-60.356 55.548-105.742-4.943 26.262-18.699 81.404-56.05 109.335zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M605.528 684.464c1.004-7.184-1.273-11.41-2.12-16.752 1.267 4.614 3.544 8.84 3.38 14.569zm0 0M617.54 655.49c-.596-7.137-3.883-10.976-5.74-15.93 2.277 4.226 4.974 7.724 7.42 13.019zm0 0M616.536 662.675c4.54-5.142 9.17-6.352 13.63-8.63-4.04 1.55-8.669 2.76-12.96 6.106zm0 0M604.186 689.513c4.54-5.143 9.17-6.352 13.63-8.63-4.63 1.21-8.249 2.031-12.96 6.105zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M572.518 672.2c4.622-8.007 3.098-17.622 5.87-23.785 3.783-6.551 8.506 2.969 10.858-2.467 2.941-5.095-3.462-11.704-.27-18.595 4.203-7.279 11.108-4.263 13.291-10.766 2.352-5.436-5.983-7.337-1.781-14.616 3.193-6.891 12.538-5.378 17.75-13.044 4.203-7.28 11.78-6.787 12.545 1.42.426 6.068-3.695 10.483-3.52 18.348.766 8.206 7.333 9.086 4.98 14.522-2.772 6.163-10.856 2.466-14.639 9.017-3.782 6.551 2.032 12.82-1.499 17.574-3.531 4.755-8.336-1.9-13.636 1.833-4.88 3.006.766 8.206-5.965 13.055-7.74 5.236-23.984 7.503-23.984 7.503zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M561.748 678.598c28.27-17.647 49.79-50.836 64.567-92.771-7.301 24.9-27.291 74.501-65.658 96.023zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M597.073 644.645c2.183-6.504.916-11.118-.35-15.731 1.266 4.613 2.953 8.499 2.2 13.887zm0 0M611.782 619.168c.414-7.525-1.693-10.682-3.55-15.636 2.277 4.226 4.384 7.383 5.82 13.065zm0 0M610.189 626.013c4.71-4.074 9.339-5.284 13.968-6.493-4.209.481-8.417.963-13.297 3.969zm0 0M595.142 649.352c5.3-3.733 9.928-4.943 14.557-6.153-4.208.482-8.417.964-13.297 3.97zm0 0M566.972 775.755c-7.834-5.494-18.44-4.824-24.505-9.296-7.665-4.425 3.443-8.688-1.863-11.751-5.896-3.404-12.877 3.241-20.121-1.912-7.665-4.425-4.052-12.044-9.948-15.448-6.316-2.677-8.75 5.624-16.414 1.198-7.075-4.084-3.97-14.908-12.393-20.742-7.834-5.494-6.58-14.475 2.596-14.03 5.388.2 9.854 4.72 19.03 5.164 8.587.105 5.13-4.801 11.027-1.398 5.895 3.404 4.64 12.385 11.296 17.198 6.654 4.813 15.316-4.744 20.372.116 4.465 4.519-2.685 10.096.77 15.003 3.626 5.975 9.177.445 13.73 8.897 5.144 8.793 6.423 27 6.423 27zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M573.213 788.092c-17.035-33.127-51.237-59.667-94.189-80.584 25.264 10.705 76.64 37.455 97.557 81.558zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M539.67 745.434c-6.737-1.949-11.955-1.08-16.753-.938 4.628-1.21 8.837-1.691 14.814-1.152zm0 0M513.64 726.523c-7.577-.492-12.036 1.786-17.675 3.383 4.46-2.278 8.92-4.556 14.727-5.085zm0 0M520.546 729.54c-4.215-6.316-4.472-11.317-5.739-15.93.257 5 .345 8.934 3.38 14.568zm0 0M544.386 748.157c-4.215-6.316-4.472-11.317-5.739-15.93.257 5 .345 8.933 3.38 14.568zm0 0M574.441 843.15c5.972-6.257 6.467-16.647 11.008-21.789 4.962-5.87 7.665 4.425 10.776.398 3.531-4.754-.853-12.138 3.519-18.349 5.381-6.598 11.446-2.126 15.398-7.608 2.942-5.096-4.133-9.18.238-15.391 4.962-5.87 13.636-1.833 20.028-8.818 5.97-6.258 13.297-3.97 12.462 4.284-.752 5.388-5.463 9.462-6.887 17.375-1.424 7.912 5.313 9.86 1.361 15.343-3.531 4.755-10.775-.398-15.737 5.472-4.961 5.87.433 12.867-4.277 16.94-4.29 3.347-8.675-4.037-14.144-1.371-5.47 2.665-.834 8.253-8.323 11.693-8.5 3.828-25.422 1.822-25.422 1.822zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M563.333 847.413c30.885-11.284 58.05-39.274 81.502-77.171-12.438 22.905-41.272 67.4-83.183 80.083zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M604.391 822.592c3.193-6.891 2.515-11.164 2.848-15.825.677 4.273.765 8.206-.997 13.982zm0 0M623.816 799.84c1.594-6.845.327-11.459-.35-15.732 1.686 3.886 2.364 8.16 2.2 13.888zm0 0M620.624 806.73c5.89-3.393 10.688-3.534 15.486-3.675-4.378-.587-8.756-1.173-13.805.764zm0 0M601.7 825.891c5.47-2.665 10.268-2.806 15.066-2.948-4.378-.586-8.756-1.173-13.805.765zm0 0"
        transform="matrix(-.00497 -.00232 -.00287 .00402 23.68 7.305)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M527.48 890.604c-3.233-9.105-19.848-12.888-22.704-20.22-3.525-7.449 9.213-5.202 6.066-10.878-2.476-5.557-13.117-4.02-16.496-12.297-3.526-7.45 4.87-11.943 1.053-17.737-3.817-5.794-11.69-.354-15.215-7.803-3.525-7.45 5.98-14.308 2.746-23.413-3.234-9.105 3.443-15.609 11.575-10.76 5.742 2.719 5.916 9.577 14.048 14.425 7.461 4.73 13.992-.947 16.993 5.556 3.147 5.676-6.736 10.761-3.88 18.092 2.854 7.331 13.495 5.794 14.485 11.942 1.66 6.267-8.835 6.977-9.332 13.717-.497 6.74 8.278 4.02 7.197 14.071-1.751 9.933-6.536 25.305-6.536 25.305zm0 0"
        transform="matrix(-.00565 -.0008 -.001 .00458 22.536 6.517)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M520.201 853.475c-5.158-6.03-12.912-9.104-17.983-11.705 4.547 1.655 12.97 4.847 17.897 8.276zm0 0M510.062 828.644c-.027-7.686 2.86-12.298 5.747-16.91-2.741 3.785-6.299 8.278-7.32 14.072zm0 0M522.883 853.948c-.173-6.858-.406-9.46 1.81-14.19-2.74 3.784-2.508 6.386-3.53 12.18zm0 0"
        transform="matrix(-.00565 -.0008 -.001 .00458 22.536 6.517)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M525.378 906.449c6.421-36.42-13.158-78.278-38.54-118.599 16.087 22.466 51.93 74.02 40.784 121.555zm0 0"
        transform="matrix(-.00565 -.0008 -.001 .00458 22.536 6.517)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.72 821.904c-6.79-4.611-12.154-5.557-17.518-6.503 5.364.946 10.203.946 15.945 3.665zm0 0"
        transform="matrix(-.00565 -.0008 -.001 .00458 22.536 6.517)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M527.314 890.678c-3.329-8.97-20.174-13.117-22.624-20.75-3.422-7.16 9.105-5.029 6.562-10.851-2.898-5.061-13.406-3.47-17.09-11.679-3.066-7.921 5.067-12.475 1.552-17.824-3.777-6.398-12.004-.033-16.042-7.48-3.067-7.922 6.131-14.762 3.158-24.494-3.328-8.972 3.926-14.863 11.592-10.36 5.198 3.35 6.151 9.36 14.08 14.911 7.665 4.502 13.947-.915 17.107 5.195s-6.562 10.851-4.113 18.485c2.45 7.634 13.313 5.28 14.883 11.577 1.571 6.297-8.581 7.127-9.216 13.323-.991 6.957 7.665 4.502 6.843 14.32-1.794 10.291-6.692 25.627-6.692 25.627zm0 0"
        transform="matrix(-.0052 -.00196 -.00242 .00421 23.445 7.163)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M520.095 853c-4.749-5.925-13.125-8.903-18.061-11.205 4.674 1.252 13.05 4.23 17.893 8.344zm0 0M510.017 827.897c.373-7.245 3.121-11.527 5.608-16.86-2.748 4.283-5.497 8.566-7.104 15.235zm0 0M522.563 854.15c.374-7.245-.15-9.344 2.337-14.676-2.749 4.283-2.842 6.094-4.094 12.002zm0 0"
        transform="matrix(-.0052 -.00196 -.00242 .00421 23.445 7.163)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M525.24 906.404c6.635-36.783-13.017-78.405-38.41-118.995 16.175 23.308 52.392 74.51 40.784 121.957zm0 0"
        transform="matrix(-.0052 -.00196 -.00242 .00421 23.445 7.163)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.267 821.973c-6.076-4.688-11.723-5.467-17.37-6.245 5.647.778 11.032.507 16.585 3.097zm0 0"
        transform="matrix(-.0052 -.00196 -.00242 .00421 23.445 7.163)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M353.592 1034.242c10.04.744 18.61-5.231 26.544-5.156 8.457.513.353 10.17 7.226 10.452 6.352-.156 9.688-9.426 18.685-9.557 8.978.95 9.35 10.04 16.241 9.24 7.414-.363 5.46-9.683 14.456-9.814 8.457.513 10.914 11.352 20.954 12.097 9.5 1.388 11.995 10.065 4.507 14.753-5.868 2.756-12.183.75-20.193 5-7.488 4.688-5.496 11.846-12.91 12.208-6.352.156-6.704-10.015-14.62-11.171-8.979-.95-11.793 8.757-18.647 7.394-5.793-1.57-1.936-10.402-8.232-13.49-5.234-3.295-7.489 4.688-15.87-.15-8.904-5.277-18.141-21.806-18.141-21.806zm0 0"
        transform="matrix(-.0044 -.00299 -.00369 .00356 24.087 7.808)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M342.621 1026.134c30.323 21.055 73.072 27.302 122.341 23.659-28.109 3.843-87.418 6.742-126.588-22.834zm0 0"
        transform="matrix(-.0044 -.00299 -.00369 .00356 24.087 7.808)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M392 1046.721c7.432-1.444 11.717-4.432 16.001-7.42-3.763 3.426-7.526 6.851-12.853 8.964zm0 0M425.268 1050.498c6.408-3.4 9.65-7.264 13.431-11.77-2.72 4.3-5.44 8.6-10.786 11.795zm0 0M416.773 1052.148c6.836 2.444 9.928 7.233 13.038 10.94-2.57-4.35-4.618-8.264-9.852-11.559zm0 0M386.691 1047.752c6.296 3.089 9.928 7.233 12.498 11.584-2.57-4.35-4.619-8.264-9.313-12.203zm0 0"
        transform="matrix(-.0044 -.00299 -.00369 .00356 24.087 7.808)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M505.574 949.059c8.057-4.223 11.507-13.7 17.71-16.81 6.49-3.898 5.6 6.51 10.235 3.726 4.636-2.785 2.745-11.523 9.523-16.212 6.49-3.898 11.45 2.38 16.374-1.195 5.21-4.365-1.316-10.318 5.174-14.217 6.778-4.688 14.297 2.52 22.067-.913 7.417-4.455 13.592.475 10.078 8.14-2.365 4.507-7.993 6.036-12.147 13.468-3.227 6.876 1.668 11.34-3.255 14.915-4.923 3.575-10.236-3.725-17.078-.85-6.49 3.9-3.96 12.87-9.588 14.4-5.276 2.552-6.527-5.953-12.507-5.447-5.98.507-3.515 7.665-12.341 8.03-8.827.366-24.245-7.035-24.245-7.035zm0 0"
        transform="matrix(-.0054 -.00159 -.00196 .00437 23.147 6.866)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M493.548 948.26c33.165.443 68.24-16.307 102-43.374-18.35 16.576-61.093 48.424-104.429 46.067zm0 0"
        transform="matrix(-.0054 -.00159 -.00196 .00437 23.147 6.866)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M540.909 939.559c4.57-4.597 5.656-9.57 8.02-14.075-1.725 4.739-2.522 8.92-5.526 13.194zm0 0M566.295 925.544c3.58-5.853 4.025-11.058 4.822-15.24-.158 4.415-.316 8.83-2.04 13.569zm0 0M561.084 929.908c6.62-.274 11.098 1.356 15.576 2.986-4.19-2.42-8.029-3.817-13.721-4.1zm0 0M536.912 942.576c6.268-1.296 10.746.334 15.224 1.964-3.55-2.187-8.029-3.817-13.082-3.867zm0 0"
        transform="matrix(-.0054 -.00159 -.00196 .00437 23.147 6.866)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={4.33}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M257.008 233.525l-79.101 98.264c26.367 25 41.133 66.666 41.133 100.694 0 42.361-7.032 71.875-15.47 98.611 0 .347-.35.695-.35 1.042h216.913V235.608c-47.812 29.514-113.554 41.32-163.125-2.083zm0 0"
        transform="matrix(.01111 0 0 .01125 15.34 8.06)"
        fillRule="nonzero"
        fill="#007ea8"
        fillOpacity={1}
        strokeWidth={3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M582.907 233.525c-49.57 43.403-115.313 31.597-162.774 2.083v296.528h216.563c0-.347 0-.695-.352-1.042-8.437-26.736-15.468-56.25-15.468-98.61 0-34.029 15.117-75.695 41.132-100.695zm0 0"
        transform="matrix(.01111 0 0 .01125 15.34 8.06)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M203.22 532.136c-11.602 36.458-26.72 68.403-31.29 121.528-6.68 78.472 56.25 121.18 82.266 133.333 40.078 19.097 82.266 12.5 125.156 18.056 19.688 2.43 30.938 15.277 40.781 25.347 9.493-10.07 20.743-22.917 40.782-25.347 42.89-5.556 84.726 1.041 124.804-18.056 26.016-12.153 88.946-54.861 82.266-133.333-4.57-53.125-19.336-85.07-31.29-121.528zm0 0"
        transform="matrix(.01111 0 0 .01125 15.34 8.06)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.324 1.818s-39.495 52.637-39.971 99.316c-.477 46.68 33.227 73.64 39.769 100.605 7.732-26.038 39.494-52.637 39.97-99.317.477-46.679-39.768-100.604-39.768-100.604zm0 0M341.192 192.254c-11.419-26.22-28.112-34.028-38.46-69.733M339.884 161.383c-10.031-24.361-29.857-32.726-38.46-69.733M340.678 126.048c-8.287-25.663-25.694-27.148-32.91-62.295M340.084 88.853c-6.899-23.803-21.887-18.407-21.45-50.58M338.776 57.982c-4.48-16.923-13.878-18.595-8.247-40.168M341.192 192.254c9.12-24.178 24.466-32.736 35.014-69.56M339.884 161.383c9.12-24.178 30.731-31.621 38.147-69.003M340.678 126.048c5.988-24.736 23.752-26.412 31.168-63.794M340.084 88.853c7.376-22.876 21.293-18.787 21.73-50.96M338.776 57.982c6.662-16.553 16.416-18.042 10.905-39.986"
        transform="matrix(.001 .00144 .00135 -.00107 19.885 12.352)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.368 222.568s-.197-54.862-.435-95.218c1.508-41.658 1.39-125.532 1.39-125.532s.118 83.874 1.743 126.09c-1.508 41.657-.954 93.357-.954 93.357"
        transform="matrix(.001 .00144 .00135 -.00107 19.885 12.352)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.802.962S298.96 54.73 299.586 101.893c.627 47.164 34.296 74.204 41.058 99.439 5.008-26.135 38.601-53.167 38.538-98.228C380.797 55.34 339.802.962 339.802.962zm0 0M340.631 192.32c-11.244-24.034-25.831-33.649-38.215-70.9M340.03 163.18c-9.567-26.737-30.877-34.55-38.215-70.9M339.98 127.132c-6.762-25.235-24.142-27.34-32.043-65.792M339.929 91.083c-6.762-25.234-22.45-21.03-21.374-52.873M340.442 57.138c-6.186-14.12-14.037-16.524-10.143-37.852M340.631 192.32c10.054-25.233 24.616-33.643 36.335-70.59M340.03 163.18c10.054-25.232 29.662-32.74 38.576-71.19M339.98 127.132c7.249-26.735 24.064-26.733 32.979-65.184M339.929 91.083c7.249-26.735 22.95-21.926 21.786-53.168M340.442 57.138c5.584-15.02 14.549-17.422 8.914-38.45"
        transform="matrix(-.00163 .00046 .00044 .00173 20.958 12.028)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.991 222.06s-.076-54.073.988-94.928c-1.177-40.254.387-124.067.387-124.067s.677 83.212-.387 124.067c1.741 42.357 1.254 94.327 1.254 94.327"
        transform="matrix(-.00163 .00046 .00044 .00173 20.958 12.028)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.796 2.33s-39.165 51.063-40.78 98.827c.627 47.164 34.297 74.204 41.622 101.542 7.25-26.735 38.601-53.167 40.216-100.931-.627-47.164-41.058-99.439-41.058-99.439zm0 0M340.062 191.584c-9.003-24.635-25.832-33.649-37.652-68.797M339.46 162.444c-9.003-24.634-28.072-33.047-38.215-70.9M339.41 126.396c-6.762-25.235-24.141-27.34-31.479-63.69M339.36 90.347c-6.762-25.234-22.451-21.03-21.375-52.873M340.436 58.505c-6.75-16.223-14.6-18.627-10.706-39.955M340.062 191.584c10.054-25.233 25.179-31.54 36.898-68.488M339.46 162.444c10.054-25.232 29.662-32.74 39.14-69.088M339.41 126.396c7.813-24.632 26.306-27.334 32.98-65.184M339.36 90.347c7.812-24.632 22.95-21.926 22.349-51.066M340.436 58.505c5.02-17.123 13.985-19.525 8.35-40.554"
        transform="matrix(-.00163 .00046 .00044 .00173 21.477 12.338)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.422 221.323s.487-51.97.988-94.927c-1.178-40.254.386-124.067.386-124.067s.678 83.212 2.418 125.57c-1.063 40.854-.988 94.927-.988 94.927"
        transform="matrix(-.00163 .00046 .00044 .00173 21.477 12.338)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.47 1.37s-39.62 52.746-38.102 100.448c-1.66 47.6 30.951 74.054 38.121 99.698 7.09-26.778 39.62-52.746 41.281-100.346.122-46.062-41.3-99.8-41.3-99.8zm0 0M339.186 191.976c-8.71-24.105-26.454-32.612-35.57-69.437M339.814 161.815c-8.71-24.104-29.634-32.713-38.75-69.538M340.239 125.294c-8.71-24.104-26.251-26.251-32.186-62.975M339.125 90.313c-7.17-25.644-21.33-21.33-20.701-51.49M341.292 58.613c-6.866-16.104-16.508-19.588-12.396-40.107M339.186 191.976c11.91-25.036 25.967-32.53 37.473-70.287M339.814 161.815c10.37-23.497 29.147-32.43 39.113-68.646M340.239 125.294c7.19-23.598 24.63-24.63 32.956-62.488M339.125 90.313c8.73-25.138 23.193-19.912 22.18-51.713M341.292 58.613c4.213-17.34 12.113-18.676 8.224-41.038"
        transform="matrix(.00119 .00127 .00119 -.00127 20.329 12.774)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.558 222.136s-.081-52.421.141-95.302c1.864-41.24 2.41-123.823 2.41-123.823s-.546 82.582.77 123.924c-.222 42.881-.141 95.302-.141 95.302"
        transform="matrix(.00119 .00127 .00119 -.00127 20.329 12.774)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.616 1.957s-41.662 52.805-40.159 98.912c.587 48.239 32.004 74.375 39.756 100.439 6.081-25.167 38.745-51.533 40.158-98.912-.586-48.24-39.755-100.439-39.755-100.439zm0 0M339.879 191.062c-10.668-24.792-26.668-31.672-36.754-68.84M339.96 163.315c-9.751-26.924-30.668-33.391-38.753-69.7M339.708 125.322c-8.668-23.932-24.501-25.688-31.67-64.13M340.538 90.32c-8.668-23.931-22.333-19.705-22.419-52.574M340.453 57.45c-5.418-14.957-16.334-17.125-11.17-40.16M339.879 191.062c10.081-23.448 25.58-31.937 37.16-69.894M339.96 163.315c10.998-25.579 29.413-35.34 40.077-71.165M339.708 125.322c8.08-24.307 25.747-26.814 31.494-62.227M340.538 90.32c8.082-24.306 20.998-21.279 21.996-51.157M340.453 57.45c4.415-15.78 14.248-16.604 9.58-38.815"
        transform="matrix(-.00067 .00165 .00155 .0007 20.36 11.843)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.88 220.94s1.247-52.502-.089-93.486c1.58-42.256 1.825-125.497 1.825-125.497s-.245 83.24.175 126.356c1.336 40.985.09 93.487.09 93.487"
        transform="matrix(-.00067 .00165 .00155 .0007 20.36 11.843)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.001 2.783s-40.515 50.951-39.446 100.102c.712 46.858 33.331 72.291 39.78 99.465 6.815-26.898 40.158-53.244 39.447-100.102 1.44-47.195-39.78-99.465-39.78-99.465zm0 0M341.054 192.844c-10.752-26.502-27.241-33.32-37.633-71.62M340.7 162.37c-10.394-24.21-31.544-32.647-39.426-68.991M339.628 127.31c-8.6-26.838-24.374-29.07-32.256-65.414M340.35 89.621c-8.243-24.545-22.942-19.9-23.296-50.374M339.995 59.147c-5.017-18.004-13.98-18.952-10.75-40.593M341.054 192.844c9.324-24.942 25.457-34.508 35.14-71.248M340.7 162.37c9.323-24.942 30.116-32.888 37.649-69.292M339.628 127.31c8.965-27.234 24.38-27.295 31.555-65.991M340.35 89.621c7.172-24.605 21.153-19.744 20.798-50.219M339.995 59.147c6.096-17.392 14.7-18.736 8.967-41.325"
        transform="matrix(.00026 .00177 .00166 -.00028 20.126 11.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.9 221.362s.723-51.78.728-94.052C339.633 85.036 340 2.783 340 2.783s-.368 82.253 1.778 124.19c-.005 42.274-.728 94.053-.728 94.053"
        transform="matrix(.00026 .00177 .00166 -.00028 20.126 11.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.106 2.243s-40.376 52.616-40.164 99.38c.212 46.766 32.636 74.948 41.177 100.6 4.74-26.571 39.179-54.436 38.967-101.2-.212-46.766-39.98-98.78-39.98-98.78zm0 0M340.21 192.397c-10.479-24.377-26.608-32.008-37.254-69.303M339.423 161.645c-10.48-24.376-29.743-32.551-37.254-69.303M341.317 126.524c-8.542-25.65-26.155-27.094-33.666-63.846M340.075 90.86c-8.541-25.651-22.565-21.638-23.352-52.39M341.226 58.833c-5.694-17.1-15.099-18.732-9.904-40.39M340.21 192.397c9.072-24.208 25.777-32.59 36.62-70.992M339.423 161.645c11.01-25.483 30.85-33.321 39.755-70.448M341.317 126.524c5.936-24.751 24.291-26.402 30.061-64.072M340.075 90.86c7.875-26.027 21.611-22.033 20.824-52.785M341.226 58.833c3.71-15.47 12.66-18.751 9.647-40.22"
        transform="matrix(-.0014 .00099 .00093 .0015 20.851 11.075)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.802 221.33s-.666-51.678-.424-93.53l.728-125.557s-.485 83.704 1.21 124.281c-.242 41.853-.318 96.624-.318 96.624"
        transform="matrix(-.0014 .00099 .00093 .0015 20.851 11.075)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.997 1.432s-38.601 53.167-37.975 100.33c-1.614 47.764 32.055 74.805 38.816 100.04 7.25-26.736 40.843-53.768 40.216-100.932-.063-45.06-41.057-99.438-41.057-99.438zm0 0M339.826 192.79c-9.003-24.635-25.831-33.65-35.974-71.501M339.224 163.65c-9.566-26.737-28.635-35.15-38.214-70.9M339.174 127.602c-7.325-27.338-24.14-27.34-32.042-65.793M339.123 91.553c-6.761-25.235-20.209-21.632-21.374-52.874M339.636 57.607c-3.944-14.72-14.6-18.626-10.706-39.955M339.826 192.79c10.054-25.233 26.857-34.244 36.335-70.591M339.224 163.65c10.054-25.233 31.34-35.444 40.818-71.792M339.174 127.602c9.49-27.336 26.306-27.334 32.98-65.184M339.123 91.553c9.49-27.336 22.951-21.927 21.786-53.169M339.636 57.607c5.584-15.02 14.55-17.421 11.156-39.05"
        transform="matrix(-.00163 .00046 .00044 .00173 21.515 11.551)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.186 222.53s-.076-54.074.988-94.928c.5-42.958.386-124.067.386-124.067s.678 83.212 1.855 123.466c-.5 42.958-.988 94.928-.988 94.928"
        transform="matrix(-.00163 .00046 .00044 .00173 21.515 11.551)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.883 2.646s-40.03 52.583-41.047 98.717c2.029 47.055 33.064 74.685 40.17 100.054 7.687-25.872 40.03-52.583 41.046-98.717-.143-48.144-40.17-100.054-40.17-100.054zm0 0M339.296 193.212c-10.151-26.29-24.654-33.993-35.675-70.498M339.732 163.488c-10.151-26.29-29.585-33.825-38.72-71.419M340.458 125.56c-8.99-24.282-24.944-25.788-32.194-64.47M340.46 90.728c-7.106-25.37-22.624-21.769-22.188-51.492M339.736 58.995c-4.35-16.243-13.487-19.006-10.296-39.603M339.296 193.212c10.733-24.952 27.701-34.749 37.565-69.915M339.732 163.488c9.573-26.96 30.747-33.827 39.45-71.003M340.458 125.56c8.848-23.864 24.366-27.465 31.184-63.552M340.46 90.728c7.687-25.872 22.915-21.268 22.19-53.001M339.736 58.995c5.511-16.579 14.213-18.923 9.428-40.274"
        transform="matrix(.00084 .00155 .00146 -.0009 20.429 11.787)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.86 222.936s-.579-53.252-.287-96.288c1.452-41.027 1.31-124.002 1.31-124.002s.142 82.975 1.736 124.923c-1.452 41.027-.874 94.278-.874 94.278"
        transform="matrix(.00084 .00155 .00146 -.0009 20.429 11.787)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.27 1.235s-39.488 54.21-38.402 100.177c-1.621 47.637 31.958 73.556 38.502 99.366 6.67-24.636 40.983-51.402 40.503-99.608 1.015-45.398-40.603-99.935-40.603-99.935zm0 0M339.694 191.25c-9.251-24.14-24.85-33.17-37.373-70.215M340.667 162.668c-11.353-24.708-31.76-32.638-39.475-70.784M339.257 126.229c-6.544-25.81-24.568-25.883-32.283-64.029M339.948 90.359c-6.544-25.81-21.578-20.265-22.1-51.656M339.426 58.968c-4.767-15.713-15.274-18.558-9.21-40.954M339.694 191.25c10.874-23.497 26.514-31.282 36.823-69.355M340.667 162.668c9.379-26.306 29.222-32.952 39.53-71.026M339.257 126.229c8.772-24.067 25.3-26.803 32.902-63.205M339.948 90.359c6.67-24.636 21.38-20.653 22.959-51.475M339.426 58.968c6.952-17.348 14.47-20.12 10.915-40.313"
        transform="matrix(-.00044 .00173 .00163 .00047 20.944 10.896)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.115 222.072s.733-52.685.535-93.603c.409-43.158 2.115-124.426 2.115-124.426l.593 122.755c-.409 43.158-1.142 95.843-1.142 95.843"
        transform="matrix(-.00044 .00173 .00163 .00047 20.944 10.896)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.26 2.282s-39.321 52.686-38.857 100.111c.463 47.426 32.043 74.485 39.009 100.609 8.36-27.389 41.333-53.841 40.87-101.267-.464-47.426-41.022-99.453-41.022-99.453zm0 0M341.115 191.984c-10.991-23.814-26.626-32.412-36.997-69.132M340.186 162.396c-8.978-24.969-29.722-33.146-40.093-69.865M341.116 126.721c-8.978-24.969-26.471-27.48-33.747-63.467M338.95 90.313c-6.967-26.123-20.125-21.082-21.053-50.67M340.033 59.57c-4.644-17.416-13.932-19.616-10.526-41.651M341.115 191.984c9.443-25.5 24.614-31.696 34.677-70.102M340.186 162.396c9.444-25.5 29.723-32.118 39.786-70.524M341.116 126.721c6.347-26.233 24.769-26.764 29.723-64.749M338.95 90.313c9.443-25.5 22.91-20.678 23.995-51.421M340.033 59.57c5.573-18.259 14.707-20.99 10.992-41.45"
        transform="matrix(-.00146 .0009 .00084 .00156 21.466 10.87)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.947 220.839s-.618-52.357.156-92.963c-.309-42.494.157-125.594.157-125.594s2.63 83.833 1.856 124.44c.309 42.493.927 94.85.927 94.85"
        transform="matrix(-.00146 .0009 .00084 .00156 21.466 10.87)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.223 2.302s-38.601 53.167-37.974 100.33c-2.179 45.662 31.49 72.702 38.816 100.04 7.25-26.735 40.842-53.768 40.216-100.931-.627-47.164-41.058-99.439-41.058-99.439zm0 0M339.489 191.557c-9.003-24.634-25.832-33.648-35.41-69.398M338.887 162.418c-9.003-24.635-28.072-33.048-38.215-70.9M338.837 126.37c-6.762-25.236-24.141-27.34-31.479-63.69M341.027 89.72c-9.002-24.634-22.45-21.03-23.615-52.273M339.863 58.478c-4.508-16.823-14.6-18.627-10.706-39.955M339.489 191.557c10.054-25.233 27.42-32.14 36.898-68.488M338.887 162.418c10.054-25.233 31.903-33.341 41.381-69.69M338.837 126.37c10.054-25.234 26.306-27.334 33.543-63.082M341.027 89.72c7.813-24.632 21.273-19.223 20.108-50.465M339.863 58.478c5.02-17.122 13.985-19.525 10.592-41.154"
        transform="matrix(-.00163 .00046 .00044 .00173 21.308 12.237)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M337.849 221.297s.487-51.97.988-94.928c1.064-40.855.386-124.067.386-124.067s.678 83.212 2.418 125.57c-1.063 40.854-.988 94.927-.988 94.927"
        transform="matrix(-.00163 .00046 .00044 .00173 21.308 12.237)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.733 1.88s-39.62 52.746-39.742 98.807c-.02 49.241 32.591 75.695 39.762 101.339 7.09-26.778 39.62-52.746 41.28-100.347-1.518-47.702-41.3-99.8-41.3-99.8zm0 0M339.449 192.485c-10.35-25.745-24.914-34.15-35.569-69.436M340.077 162.325c-10.35-25.745-29.634-32.713-38.75-69.538M340.502 125.804c-8.71-24.104-26.251-26.252-32.186-62.975M339.388 90.822c-7.17-25.643-21.329-21.329-22.342-53.13M339.915 57.482c-5.226-14.463-14.868-17.947-10.756-38.466M339.449 192.485c11.91-25.036 27.507-34.07 37.473-70.287M340.077 162.325c8.73-25.138 29.148-32.43 39.113-68.647M340.502 125.804c7.191-23.598 22.99-26.272 31.315-64.13M339.388 90.822c8.73-25.137 21.552-21.552 22.18-51.712M339.915 57.482c5.854-15.699 15.293-18.575 9.864-39.398"
        transform="matrix(.00119 .00127 .00119 -.00127 20.16 12.673)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.821 222.646s-.081-52.422.142-95.303c.223-42.881.77-125.463.77-125.463s1.093 84.223 2.41 125.564c-1.864 41.24-1.783 93.662-1.783 93.662"
        transform="matrix(.00119 .00127 .00119 -.00127 20.16 12.673)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.892 1.675s-40.843 53.767-40.216 100.93c.626 47.164 31.49 72.703 38.816 100.04 7.249-26.735 40.842-53.767 40.216-100.93-.627-47.164-38.816-100.04-38.816-100.04zm0 0M338.916 191.53c-9.003-24.634-25.268-31.545-35.41-69.397M340.556 161.79c-11.245-24.033-30.314-32.447-40.457-70.3M340.505 125.742c-9.003-24.634-26.382-26.74-31.479-63.69M340.454 89.693c-9.002-24.634-22.45-21.03-23.051-50.17M339.29 58.451c-4.508-16.823-14.6-18.627-8.465-40.555M338.916 191.53c10.617-23.13 27.42-32.14 39.14-69.088M340.556 161.79c10.054-25.232 29.661-32.74 39.14-69.088M340.505 125.742c7.813-24.632 24.065-26.733 31.302-62.48M340.454 89.693c7.813-24.632 21.273-19.223 22.35-51.066M339.29 58.451c5.584-15.02 14.549-17.422 10.592-41.154"
        transform="matrix(-.00163 .00046 .00044 .00173 21.14 12.136)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.517 220.67s-1.754-51.37-.69-92.225c.5-42.957-.177-126.17-.177-126.17s2.919 82.612 2.418 125.57c-1.063 40.855-.988 94.927-.988 94.927"
        transform="matrix(-.00163 .00046 .00044 .00173 21.14 12.136)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.996 2.39s-39.62 52.745-39.742 98.806c-.02 49.242 32.592 75.696 39.762 101.34 7.09-26.779 39.62-52.746 41.281-100.347-1.52-47.702-41.301-99.8-41.301-99.8zm0 0M339.712 192.995c-10.35-25.745-24.914-34.151-37.21-71.077M340.34 162.834c-10.35-25.745-29.634-32.713-38.749-69.537M340.766 126.313c-8.71-24.104-26.252-26.25-32.187-62.974M339.651 91.332c-7.17-25.644-21.329-21.33-22.341-53.13M340.178 57.991c-6.867-16.103-14.867-17.946-9.216-40.005M339.712 192.995c10.27-26.677 27.507-34.07 37.473-70.287M340.34 162.834c8.73-25.137 29.148-32.429 37.473-70.287M340.766 126.313c7.19-23.597 24.53-27.81 31.315-64.129M339.651 91.332c8.73-25.137 21.552-21.552 22.18-51.713M340.178 57.991c5.854-15.698 15.293-18.574 9.865-39.397"
        transform="matrix(.00119 .00127 .00119 -.00127 19.99 12.572)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.084 223.155s-1.721-54.062.142-95.302c.223-42.881.77-125.463.77-125.463s1.094 84.222.77 123.923c-.223 42.882-.142 95.303-.142 95.303"
        transform="matrix(.00119 .00127 .00119 -.00127 19.99 12.572)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.853 2.555s-39.165 51.064-40.78 98.828c.627 47.163 34.296 74.204 41.058 99.438 7.813-24.632 39.165-51.064 40.78-98.828-.627-47.163-41.058-99.438-41.058-99.438zm0 0M340.118 191.81c-9.003-24.635-25.83-33.649-37.651-68.798M339.517 162.67c-9.003-24.634-28.072-33.048-38.215-70.9M339.466 126.622c-6.761-25.235-24.14-27.34-31.478-63.69M339.416 90.573c-6.762-25.235-22.45-21.03-21.374-52.874M340.492 58.73c-6.749-16.222-14.6-18.626-10.706-39.955M340.118 191.81c10.054-25.233 25.18-31.54 36.899-68.488M339.517 162.67c10.054-25.233 29.662-32.74 38.576-71.191M339.466 126.622c7.813-24.633 26.307-27.334 32.98-65.184M339.416 90.573c7.813-24.632 22.95-21.927 22.35-51.066M340.492 58.73c5.021-17.122 13.986-19.524 8.351-40.553"
        transform="matrix(-.00163 .00046 .00044 .00173 21.188 11.326)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.478 221.55s.488-51.97.988-94.928c-1.177-40.255.387-124.067.387-124.067s.677 83.212 2.418 125.569c-1.064 40.855-1.551 92.825-1.551 92.825"
        transform="matrix(-.00163 .00046 .00044 .00173 21.188 11.326)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.746 1.528S298.83 55.2 300.859 102.255c-1.016 46.134 31.904 72.675 40.17 100.054 4.642-26.793 38.87-54.592 39.886-100.727-2.029-47.055-40.17-100.054-40.17-100.054zm0 0M340.159 192.094c-8.991-24.28-26.54-32.904-37.56-69.41M340.595 162.37c-10.151-26.29-31.47-32.736-40.605-70.33M339.436 125.53c-7.105-25.37-24.944-25.787-31.034-62.46M339.437 90.699c-7.105-25.37-22.623-21.769-22.187-51.492M340.599 57.877c-6.236-15.154-15.373-17.917-10.296-39.603M340.159 192.094c10.733-24.951 25.816-33.66 37.565-69.914M340.595 162.37c10.733-24.95 28.862-32.738 37.565-69.914M339.436 125.53c8.848-23.863 25.526-25.454 31.183-63.551M339.437 90.699c7.688-25.872 22.916-21.268 22.192-53.001M340.599 57.877c5.511-16.578 14.213-18.923 9.428-40.273"
        transform="matrix(.00084 .00155 .00146 -.0009 20.102 11.562)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.723 221.818l-1.012-93.19c.291-43.036.15-126.011.15-126.011s2.027 81.886 1.735 124.923c1.594 41.948-.873 94.278-.873 94.278"
        transform="matrix(.00084 .00155 .00146 -.0009 20.102 11.562)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.707 3.045s-39.165 51.064-40.78 98.828c.627 47.163 34.296 74.204 41.058 99.438 7.812-24.632 39.165-51.064 40.78-98.828-.627-47.163-41.058-99.438-41.058-99.438zm0 0M339.972 192.3c-9.003-24.635-25.831-33.65-37.651-68.798M339.37 163.16c-9.566-26.737-28.072-33.048-38.214-70.9M339.32 127.112c-6.761-25.235-24.14-27.34-31.478-63.69M339.27 91.063c-6.762-25.235-22.45-21.03-21.374-52.874M340.346 59.22c-6.749-16.222-14.6-18.626-10.706-39.955M339.972 192.3c10.054-25.233 26.857-34.244 36.335-70.591M339.37 163.16c10.055-25.233 29.662-32.74 38.577-71.191M339.32 127.112c7.813-24.633 26.306-27.334 32.98-65.184M339.27 91.063c7.812-24.632 22.95-21.927 21.785-53.169M340.346 59.22c5.02-17.122 13.986-19.524 10.592-41.154"
        transform="matrix(-.00163 .00046 .00044 .00173 21.352 11.439)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.332 222.04s.488-51.97.988-94.928c1.064-40.855.387-124.067.387-124.067s.677 83.212 1.854 123.466c-.5 42.958-.988 94.928-.988 94.928"
        transform="matrix(-.00163 .00046 .00044 .00173 21.352 11.439)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.372 2.631s-40.03 52.583-38.001 99.638c-1.017 46.135 31.903 72.676 37.123 99.134 7.688-25.873 40.03-52.583 41.047-98.718-.144-48.144-40.17-100.054-40.17-100.054zm0 0M340.67 192.109c-12.036-25.202-26.539-32.905-37.56-69.41M341.106 162.385c-12.036-25.202-31.47-32.737-40.605-70.33M339.947 125.545c-8.99-24.281-24.944-25.788-31.034-62.46M339.949 90.714c-7.106-25.37-22.624-21.77-22.188-51.493M339.225 58.98c-4.35-16.243-13.487-19.006-8.41-40.691M340.67 192.109c8.848-23.863 25.816-33.66 35.68-68.826M341.106 162.385c8.848-23.863 28.862-32.739 37.565-69.915M339.947 125.545c8.848-23.863 25.526-25.455 31.184-63.552M339.949 90.714c7.687-25.873 22.915-21.268 22.19-53.001M339.225 58.98c5.511-16.578 16.098-20.011 11.313-41.362"
        transform="matrix(.00084 .00155 .00146 -.0009 20.265 11.674)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.234 221.832s-.578-53.25-2.172-95.199c1.452-41.027 1.31-124.002 1.31-124.002s2.027 81.887 1.735 124.923c-1.451 41.027-.873 94.278-.873 94.278"
        transform="matrix(.00084 .00155 .00146 -.0009 20.265 11.674)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.078 1.49s-39.494 52.637-39.97 99.316c.91 48.538 33.226 73.64 39.768 100.604 7.733-26.038 39.494-52.637 39.971-99.316.477-46.68-39.769-100.604-39.769-100.604zm0 0M340.947 191.925c-10.031-24.36-26.725-32.168-38.46-69.733M341.027 162.913c-11.42-26.22-31.245-34.585-39.849-71.592M340.433 125.72c-8.287-25.664-25.694-27.148-32.91-62.296M341.227 90.384c-8.287-25.663-23.276-20.267-22.839-52.44M339.919 59.513c-4.48-16.923-15.266-20.454-9.635-42.028M340.947 191.925c9.12-24.178 24.466-32.735 35.014-69.56M341.027 162.913c7.732-26.037 29.343-33.48 36.758-70.861M340.433 125.72c5.988-24.736 23.752-26.413 31.167-63.795M341.227 90.384c5.987-24.735 19.905-20.646 20.342-52.82M339.919 59.513c5.274-18.412 15.028-19.902 9.517-41.845"
        transform="matrix(-.001 .00144 -.00135 -.00107 22.43 12.352)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.122 222.239s1.191-53.002-.434-95.218c1.508-41.658 1.39-125.531 1.39-125.531s.118 83.873 1.743 126.089c-1.508 41.658-.954 93.358-.954 93.358"
        transform="matrix(-.001 .00144 -.00135 -.00107 22.43 12.352)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.199.856s-40.843 53.768-40.217 100.931c.627 47.164 32.055 74.804 38.817 100.04 7.249-26.736 40.842-53.768 40.78-98.829C381.192 55.234 340.198.856 340.198.856zm0 0M341.027 192.214c-11.244-24.034-28.072-33.048-38.215-70.9M340.426 163.074c-9.566-26.737-30.877-34.55-40.456-70.3M340.375 127.026c-9.002-24.634-24.14-27.34-32.042-65.793M340.325 90.977c-9.003-24.634-22.45-21.03-21.374-52.873M340.838 57.032c-6.186-14.12-14.036-16.524-10.143-37.852M341.027 192.214c10.054-25.233 24.616-33.643 36.335-70.591M340.426 163.074c10.054-25.232 29.662-32.74 38.576-71.19M340.375 127.026c7.25-26.735 24.065-26.733 30.739-64.583M340.325 90.977c7.25-26.735 22.95-21.926 21.786-53.169M340.838 57.032c5.584-15.02 14.549-17.422 8.914-38.45"
        transform="matrix(.00163 .00046 -.00044 .00173 21.357 12.028)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.387 221.953s-.075-54.072-1.253-94.327c1.064-40.854 2.628-124.667 2.628-124.667s.677 83.212-.387 124.067c1.741 42.357 1.254 94.327 1.254 94.327"
        transform="matrix(.00163 .00046 -.00044 .00173 21.357 12.028)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.193 2.223s-41.407 51.664-40.78 98.828c.627 47.164 34.296 74.204 41.62 101.542 5.009-26.135 38.602-53.167 37.976-100.33 1.614-47.765-38.816-100.04-38.816-100.04zm0 0M340.458 191.478c-11.244-24.034-25.831-33.649-37.652-68.798M339.856 162.338c-9.002-24.634-30.313-32.447-38.214-70.9M339.806 126.29c-6.762-25.235-24.14-27.34-31.479-63.69M339.755 90.241c-6.761-25.234-22.45-21.03-21.374-52.873M340.832 58.399c-6.75-16.223-14.6-18.627-10.706-39.955M340.458 191.478c10.054-25.233 25.18-31.54 36.898-68.488M339.856 162.338c10.054-25.232 29.662-32.74 39.14-69.088M339.806 126.29c7.813-24.632 24.065-26.733 32.98-65.184M339.755 90.241c7.813-24.632 22.951-21.926 22.35-51.066M340.832 58.399c5.02-17.123 13.985-19.525 8.35-40.554"
        transform="matrix(.00163 .00046 -.00044 .00173 20.838 12.338)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.818 221.217s.488-51.97.988-94.927c-1.178-40.255.387-124.067.387-124.067s.677 83.212.176 126.17c1.178 40.254 1.254 94.327 1.254 94.327"
        transform="matrix(.00163 .00046 -.00044 .00173 20.838 12.338)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.18 1.08s-39.62 52.746-38.102 100.448c-1.66 47.6 30.951 74.054 38.121 99.698 8.73-25.137 39.62-52.746 41.281-100.346.122-46.062-41.3-99.8-41.3-99.8zm0 0M340.536 193.326c-10.35-25.745-28.094-34.252-37.21-71.077M339.524 161.525c-8.71-24.104-29.634-32.713-38.75-69.538M339.949 125.004c-8.71-24.104-24.61-24.61-32.186-62.975M338.835 90.023c-7.17-25.644-21.33-21.33-20.701-51.49M341.002 58.323c-6.866-16.104-14.867-17.947-12.396-40.106M340.536 193.326c10.27-26.676 24.327-34.17 35.833-71.927M339.524 161.525c10.37-23.497 29.147-32.43 39.113-68.646M339.949 125.004c7.19-23.598 24.63-24.63 32.956-62.488M338.835 90.023c8.73-25.138 23.193-19.912 22.18-51.713M341.002 58.323c4.213-17.34 12.113-18.676 9.865-39.398"
        transform="matrix(-.00119 .00127 -.00119 -.00127 21.987 12.774)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.268 221.846s-.081-52.421.141-95.302c1.864-41.24 2.41-123.823 2.41-123.823s-.546 82.582.77 123.924c-.222 42.881-.141 95.302-.141 95.302"
        transform="matrix(-.00119 .00127 -.00119 -.00127 21.987 12.774)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.778 1.58s-41.662 52.805-41.075 101.044c1.503 46.107 32.92 72.243 40.672 98.307 6.081-25.167 38.745-51.533 40.158-98.912-.586-48.239-39.755-100.438-39.755-100.438zm0 0M339.124 192.816c-9.751-26.923-25.751-33.802-35.837-70.972M340.122 162.938c-10.668-24.792-30.668-33.39-38.753-69.7M338.953 127.077c-7.751-26.064-23.584-27.82-31.67-64.13M340.7 89.944c-8.668-23.932-22.333-19.705-22.419-52.575M339.698 59.206c-4.5-17.09-15.417-19.257-10.252-42.293M339.124 192.816c10.998-25.578 26.497-34.068 37.16-69.893M340.122 162.938c10.998-25.579 28.497-33.209 40.077-71.165M338.953 127.077c8.998-26.439 25.747-26.814 32.411-64.359M340.7 89.944c8.082-24.307 20.998-21.28 21.996-51.158M339.698 59.206c5.332-17.913 15.165-18.736 10.497-40.948"
        transform="matrix(.00067 .00165 -.00155 .0007 21.956 11.843)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.126 222.695s1.247-52.502.827-95.618c.664-40.125.908-123.365.908-123.365s.672 81.109 1.092 124.225c1.336 40.984.09 93.486.09 93.486"
        transform="matrix(.00067 .00165 -.00155 .0007 21.956 11.843)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.938 2.378s-40.157 53.244-39.446 100.102c.712 46.858 33.331 72.29 39.78 99.465 6.815-26.898 40.158-53.244 39.446-100.103 1.44-47.194-39.78-99.464-39.78-99.464zm0 0M340.99 192.439c-10.393-24.21-27.24-33.32-37.274-69.327M340.636 161.964c-10.393-24.21-31.543-32.647-39.426-68.99M339.565 126.904c-8.243-24.545-24.016-26.777-32.257-65.413M340.286 89.216c-8.242-24.545-22.94-19.9-23.296-50.374M339.931 58.742c-4.658-15.712-13.979-18.952-10.75-40.593M340.99 192.439c9.324-24.942 25.458-34.508 35.5-68.956M340.636 161.964c9.324-24.942 30.117-32.888 37.65-69.292M339.565 126.904c9.323-24.941 24.38-27.294 31.913-63.698M340.286 89.216c7.173-24.605 21.153-19.744 20.798-50.219M339.931 58.742c6.097-17.392 14.7-18.737 8.967-41.325"
        transform="matrix(-.00026 .00177 -.00166 -.00028 22.19 11.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.836 220.957s.724-51.78.729-94.053c.005-42.273.373-124.526.373-124.526s-.01 84.546 1.778 124.19c-.005 42.273-.37 96.345-.37 96.345"
        transform="matrix(-.00026 .00177 -.00166 -.00028 22.19 11.21)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.448 2.017s-40.375 52.616-40.163 99.381c.212 46.765 32.636 74.948 41.177 100.599 4.74-26.57 37.24-53.16 38.967-101.2-.212-46.765-39.98-98.78-39.98-98.78zm0 0M340.553 192.171c-10.48-24.376-26.608-32.007-37.254-69.303M339.766 161.42c-10.48-24.376-29.743-32.552-39.193-68.028M339.72 127.574c-6.602-26.926-24.215-28.37-31.726-65.122M340.418 90.635c-8.542-25.652-22.565-21.639-23.353-52.39M339.63 59.883c-5.694-17.1-13.16-20.007-9.904-40.39M340.553 192.171c9.072-24.208 25.776-32.59 36.62-70.992M339.766 161.42c9.072-24.208 28.91-32.046 37.816-69.174M339.72 127.574c7.876-26.026 26.23-27.677 32.001-65.348M340.418 90.635c7.875-26.027 21.61-22.033 20.823-52.785M339.63 59.883c5.649-16.745 14.6-20.026 11.586-41.496"
        transform="matrix(.0014 .00099 -.00093 .0015 21.464 11.075)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.206 222.38s1.272-52.954 1.515-94.806l.727-125.557s-.485 83.705 1.211 124.282c-.242 41.852-.318 96.624-.318 96.624"
        transform="matrix(.0014 .00099 -.00093 .0015 21.464 11.075)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.393 1.326s-38.601 53.167-40.216 100.93c.627 47.164 34.296 74.204 41.058 99.44 7.249-26.736 38.601-53.168 40.216-100.932-.064-45.06-41.058-99.438-41.058-99.438zm0 0M340.222 192.683c-9.003-24.634-25.831-33.648-38.215-70.9M339.62 163.544c-9.566-26.737-28.635-35.15-38.214-70.9M339.57 127.495c-7.325-27.337-24.14-27.34-32.042-65.792M339.52 91.447c-6.762-25.235-22.45-21.031-21.374-52.874M340.032 57.501c-6.185-14.12-14.6-18.627-10.706-39.955M340.222 192.683c10.054-25.233 26.857-34.243 36.335-70.59M339.62 163.544c10.055-25.233 29.099-34.844 38.577-71.191M339.57 127.495c7.25-26.735 26.306-27.333 32.98-65.183M339.52 91.447c7.249-26.735 22.95-21.927 21.785-53.17M340.032 57.501c5.585-15.02 14.55-17.421 11.156-39.05"
        transform="matrix(.00163 .00046 -.00044 .00173 20.8 11.551)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.582 222.423s-.076-54.073.988-94.928c-1.741-42.357.387-124.066.387-124.066s.677 83.212 1.854 123.466c-.5 42.958-.988 94.927-.988 94.927"
        transform="matrix(.00163 .00046 -.00044 .00173 20.8 11.551)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.678 2.29s-40.03 52.583-39.887 100.727c.869 45.046 31.904 72.676 40.17 100.055 6.527-27.882 38.869-54.593 39.886-100.727C379.704 54.2 339.677 2.29 339.677 2.29zm0 0M339.09 192.857c-10.15-26.29-24.653-33.993-35.674-70.499M339.527 163.133c-10.151-26.29-29.585-33.825-38.72-71.42M340.253 125.204c-8.99-24.281-24.944-25.788-31.033-62.46M340.255 90.373c-7.106-25.37-22.624-21.769-22.188-51.492M339.53 58.64c-4.35-16.243-13.486-19.006-10.295-39.604M339.09 192.857c10.734-24.952 27.702-34.749 37.566-69.915M339.527 163.133c10.733-24.951 30.747-33.827 39.45-71.003M340.253 125.204c8.848-23.863 25.526-25.454 31.184-63.551M340.255 90.373c7.687-25.873 22.915-21.268 22.19-53.001M339.53 58.64c5.512-16.579 14.214-18.923 9.429-40.274"
        transform="matrix(-.00084 .00155 -.00146 -.0009 21.887 11.787)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.655 222.58s-.579-53.251.873-94.278c.292-43.037.15-126.012.15-126.012s.142 82.975 1.736 124.923c-.292 43.037-.874 94.279-.874 94.279"
        transform="matrix(-.00084 .00155 -.00146 -.0009 21.887 11.787)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.377.839s-39.488 54.21-38.402 100.177c-1.621 47.637 31.352 75.795 37.896 101.605 7.277-26.875 41.59-53.641 41.11-101.847C380.996 55.376 339.377.839 339.377.839zm0 0M339.195 193.094c-8.645-26.379-24.85-33.17-37.373-70.215M340.774 162.272c-11.353-24.708-31.76-32.638-39.474-70.784M339.364 125.833c-7.15-23.57-24.568-25.882-32.282-64.028M340.055 89.963c-7.15-23.57-21.578-20.265-22.1-51.656M339.533 58.572c-4.767-15.713-15.274-18.558-9.21-40.954M339.195 193.094c11.48-25.737 27.12-33.521 37.43-71.595M340.774 162.272c8.772-24.067 29.222-32.952 38.924-68.786M339.364 125.833c8.772-24.067 25.3-26.802 32.902-63.205M340.055 89.963c6.67-24.636 21.38-20.653 22.96-51.474M339.533 58.572c6.346-15.108 14.47-20.12 10.915-40.313"
        transform="matrix(.00044 .00173 -.00163 .00047 21.372 10.896)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.222 221.676s.733-52.685.535-93.603c.41-43.158 2.115-124.425 2.115-124.425l.593 122.754c-.408 43.158-1.141 95.843-1.141 95.843"
        transform="matrix(.00044 .00173 -.00163 .00047 21.372 10.896)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.616 2.077s-39.321 52.687-38.858 100.112c.464 47.426 32.044 74.485 39.01 100.609 6.347-26.234 41.333-53.841 40.87-101.267-.464-47.426-41.022-99.454-41.022-99.454zm0 0M339.458 192.935c-8.978-24.969-24.613-33.567-34.985-70.287M340.542 162.192c-10.99-23.814-29.722-33.146-40.093-69.866M339.459 127.672C332.493 101.548 315 99.036 307.725 63.05M339.305 90.11c-6.966-26.125-22.137-19.929-21.053-50.672M340.389 59.366c-6.656-16.261-13.932-19.616-10.526-41.651M339.458 192.935c9.443-25.5 26.627-32.851 36.69-71.257M340.542 162.192c9.444-25.5 29.723-32.118 37.773-69.369M339.459 127.672c8.36-27.388 26.782-27.92 31.736-65.904M339.305 90.11c9.443-25.5 22.911-20.68 23.995-51.422M340.389 59.366c5.573-18.259 12.694-19.835 8.98-40.294"
        transform="matrix(.00146 .0009 -.00084 .00156 20.85 10.87)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.303 220.635s-.619-52.357.156-92.963c-.309-42.494.157-125.595.157-125.595s2.63 83.834 1.855 124.44c.31 42.494-1.085 96.006-1.085 96.006"
        transform="matrix(.00146 .0009 -.00084 .00156 20.85 10.87)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.62 2.196s-38.602 53.167-40.217 100.931c.064 45.06 33.733 72.101 41.058 99.439 7.25-26.735 38.601-53.167 40.216-100.931-.627-47.164-41.058-99.439-41.058-99.439zm0 0M339.885 191.45c-9.003-24.633-25.831-33.648-37.652-68.796M339.283 162.311c-9.002-24.634-28.072-33.047-38.214-70.9M339.233 126.263c-6.762-25.235-24.14-27.34-31.479-63.69M339.182 90.214c-6.761-25.234-22.45-21.03-21.374-52.873M340.259 58.372c-6.75-16.223-14.6-18.627-10.706-39.955M339.885 191.45c10.054-25.232 27.42-32.14 36.898-68.487M339.283 162.311c10.054-25.232 29.662-32.74 39.14-69.088M339.233 126.263c7.813-24.632 26.306-27.334 33.543-63.08M339.182 90.214c7.813-24.632 23.514-19.823 22.35-51.066M340.259 58.372c5.02-17.123 13.985-19.525 10.592-41.154"
        transform="matrix(.00163 .00046 -.00044 .00173 21.007 12.237)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.245 221.19s.488-51.97.988-94.927c-1.178-40.254.386-124.067.386-124.067s.678 83.212 2.419 125.57c-1.064 40.854-.988 94.927-.988 94.927"
        transform="matrix(.00163 .00046 -.00044 .00173 21.007 12.237)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.443 1.59s-39.62 52.746-38.101 100.447c-1.661 47.601 30.95 74.055 38.12 99.699 7.09-26.778 39.62-52.746 41.282-100.347.121-46.061-41.301-99.8-41.301-99.8zm0 0M339.159 192.195c-8.71-24.104-24.914-34.15-35.569-69.436M339.787 162.035c-10.35-25.745-29.634-32.713-38.75-69.538M340.212 125.514c-8.71-24.104-26.251-26.252-32.186-62.975M339.098 90.532c-7.17-25.643-21.329-21.329-20.701-51.49M339.625 57.192c-5.226-14.463-14.868-17.947-10.756-38.466M339.159 192.195c11.91-25.036 27.507-34.07 37.473-70.287M339.787 162.035c10.37-23.497 29.148-32.43 39.113-68.647M340.212 125.514c7.191-23.598 24.631-24.631 31.315-64.13M339.098 90.532c8.73-25.137 23.193-19.911 22.18-51.712M339.625 57.192c5.854-15.699 15.293-18.575 9.864-39.398"
        transform="matrix(-.00119 .00127 -.00119 -.00127 22.156 12.673)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.531 222.356s-.081-52.422.142-95.303c1.863-41.24 2.41-123.822 2.41-123.822s-.547 82.582.77 123.923c-.223 42.882-.142 95.303-.142 95.303"
        transform="matrix(-.00119 .00127 -.00119 -.00127 22.156 12.673)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.046 2.17s-38.601 53.166-37.974 100.33c-1.615 47.764 31.49 72.701 38.816 100.039 7.25-26.735 40.843-53.767 40.216-100.93-.627-47.164-41.058-99.44-41.058-99.44zm0 0M339.312 191.424c-9.003-24.634-25.268-31.545-35.41-69.398M340.952 161.684c-11.244-24.033-30.314-32.447-40.456-70.3M340.901 125.636c-9.003-24.635-26.382-26.74-33.72-63.09M340.85 89.587c-9.002-24.634-22.45-21.03-23.051-50.17M339.686 58.345c-4.508-16.823-14.6-18.627-10.706-39.955M339.312 191.424c10.617-23.13 27.42-32.14 36.898-68.488M340.952 161.684c10.054-25.233 29.661-32.74 39.14-69.088M340.901 125.636c7.813-24.633 24.065-26.733 31.302-62.48M340.85 89.587c7.813-24.632 21.273-19.223 22.35-51.066M339.686 58.345c5.584-15.02 14.549-17.422 10.592-41.154"
        transform="matrix(.00163 .00046 -.00044 .00173 21.176 12.136)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M337.672 221.164s.488-51.97 1.551-92.825c.5-42.958-.177-126.17-.177-126.17s.678 83.212 2.419 125.57c-1.064 40.854-.988 94.927-.988 94.927"
        transform="matrix(.00163 .00046 -.00044 .00173 21.176 12.136)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.706 2.1s-39.62 52.745-39.742 98.806c-.02 49.242 32.592 75.696 39.762 101.34 7.09-26.779 39.62-52.746 41.281-100.347-1.52-47.702-41.301-99.8-41.301-99.8zm0 0M339.422 192.705c-10.35-25.745-24.914-34.151-37.21-71.077M340.05 162.544c-10.35-25.745-29.634-32.713-38.749-69.537M340.476 126.023c-8.71-24.104-26.252-26.25-32.187-62.974M339.362 91.042c-7.171-25.644-21.33-21.33-22.342-53.13M339.888 57.701c-5.226-14.462-14.867-17.946-9.216-40.005M339.422 192.705c10.27-26.677 27.507-34.07 37.473-70.287M340.05 162.544c8.73-25.137 29.148-32.429 37.473-70.287M340.476 126.023c7.19-23.597 24.53-27.81 31.315-64.129M339.362 91.042c8.73-25.137 21.551-21.552 22.18-51.713M339.888 57.701c5.854-15.698 15.293-18.574 9.865-39.397"
        transform="matrix(-.00119 .00127 -.00119 -.00127 22.325 12.572)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.794 222.865s-.08-52.421.142-95.302c.223-42.881.77-125.463.77-125.463s1.094 84.222 2.41 125.564c-1.863 41.24-1.782 93.662-1.782 93.662"
        transform="matrix(-.00119 .00127 -.00119 -.00127 22.325 12.572)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.25 2.449s-41.407 51.664-40.78 98.828c.626 47.163 34.295 74.204 41.057 99.438 5.572-24.031 39.165-51.064 38.538-98.227C380.68 54.724 340.25 2.448 340.25 2.448zm0 0M340.514 191.703c-11.244-24.034-25.83-33.648-37.65-68.797M339.913 162.564c-9.003-24.634-30.314-32.447-38.215-70.9M339.863 126.515c-6.762-25.234-24.141-27.34-31.479-63.689M339.812 90.467c-6.762-25.235-22.45-21.031-21.374-52.874M340.888 58.624c-6.749-16.222-14.6-18.627-10.705-39.955M340.514 191.703c10.054-25.233 25.18-31.54 36.899-68.488M339.913 162.564c10.054-25.233 29.662-32.74 38.576-71.191M339.863 126.515c7.812-24.632 24.065-26.733 32.979-65.183M339.812 90.467c7.813-24.632 22.95-21.927 22.35-51.066M340.888 58.624c5.021-17.122 13.986-19.524 8.351-40.553"
        transform="matrix(.00163 .00046 -.00044 .00173 21.127 11.326)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.875 221.443s.487-51.97.988-94.928c-1.178-40.254.386-124.066.386-124.066s.677 83.212.177 126.17c1.178 40.254.69 92.223.69 92.223"
        transform="matrix(.00163 .00046 -.00044 .00173 21.127 11.326)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.54 1.173S298.627 54.844 300.655 101.9c-1.016 46.134 33.064 74.685 40.17 100.054 5.802-24.784 40.03-52.583 39.886-100.727-.869-45.046-40.17-100.054-40.17-100.054zm0 0M339.954 191.74c-8.991-24.282-26.54-32.905-37.56-69.41M340.39 162.015c-8.99-24.28-31.47-32.736-39.445-68.32M340.391 127.184c-7.105-25.37-26.104-27.797-32.194-64.47M339.232 90.344c-7.105-25.37-21.463-19.76-22.187-51.492M340.394 57.522c-6.236-15.154-15.373-17.917-10.296-39.603M339.954 191.74c10.733-24.952 25.816-33.66 37.565-69.916M340.39 162.015c10.733-24.951 28.862-32.738 37.565-69.914M340.391 127.184c7.688-25.872 24.366-27.463 31.184-63.55M339.232 90.344c7.688-25.873 22.916-21.268 23.352-50.992M340.394 57.522c5.511-16.578 14.213-18.923 9.428-40.274"
        transform="matrix(-.00084 .00155 -.00146 -.0009 22.214 11.562)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.518 221.463l-1.012-93.19c.291-43.037 1.31-124.002 1.31-124.002s2.027 81.886.575 122.913c1.594 41.948-.873 94.279-.873 94.279"
        transform="matrix(-.00084 .00155 -.00146 -.0009 22.214 11.562)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.103 2.939s-41.406 51.664-40.78 98.828c.627 47.163 34.296 74.204 41.058 99.438 7.813-24.632 39.165-51.064 40.78-98.828-.627-47.163-41.058-99.438-41.058-99.438zm0 0M340.368 192.193c-11.244-24.034-25.831-33.648-37.651-68.797M339.767 163.054c-9.567-26.737-30.314-32.447-38.215-70.9M339.716 127.005c-6.761-25.234-24.14-27.34-31.478-63.69M339.666 90.957c-6.762-25.235-22.45-21.031-21.374-52.874M340.742 59.114c-6.749-16.222-14.6-18.627-10.706-39.955M340.368 192.193c10.054-25.233 24.616-33.642 36.335-70.59M339.767 163.054c10.054-25.233 29.662-32.74 38.576-71.191M339.716 127.005c7.813-24.632 26.306-27.333 32.98-65.183M339.666 90.957c7.813-24.632 22.95-21.927 21.786-53.169M340.742 59.114c5.02-17.122 13.986-19.524 8.351-40.553"
        transform="matrix(.00163 .00046 -.00044 .00173 20.964 11.439)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.728 221.933s.488-51.97.988-94.928c-1.177-40.254.387-124.066.387-124.066s.677 83.212-.387 124.066c1.741 42.358 1.254 94.327 1.254 94.327"
        transform="matrix(.00163 .00046 -.00044 .00173 20.964 11.439)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M339.166 2.276s-40.03 52.583-38 99.638c-1.017 46.135 31.903 72.676 38.283 101.143 6.528-27.882 40.03-52.583 39.887-100.727-.144-48.144-40.17-100.054-40.17-100.054zm0 0M340.465 191.754c-10.876-23.193-26.539-32.905-37.56-69.41M340.901 162.03c-12.036-25.202-31.47-32.737-40.605-70.33M339.742 125.19c-8.99-24.282-24.944-25.788-31.034-62.461M339.743 90.358c-7.105-25.37-22.623-21.768-22.187-51.492M339.02 58.625c-4.35-16.243-13.487-19.006-8.41-40.692M340.465 191.754c8.848-23.863 25.816-33.66 35.68-68.827M340.901 162.03c8.848-23.863 28.862-32.739 37.565-69.915M339.742 125.19c8.848-23.864 25.526-25.455 32.344-61.542M339.743 90.358c7.688-25.872 22.916-21.268 22.192-53M339.02 58.625c5.511-16.578 16.098-20.011 11.313-41.362"
        transform="matrix(-.00084 .00155 -.00146 -.0009 22.05 11.674)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.029 221.477l-1.012-93.19c.292-43.036.15-126.011.15-126.011s2.027 81.886 1.735 124.923c-.291 43.036-.873 94.278-.873 94.278"
        transform="matrix(-.00084 .00155 -.00146 -.0009 22.05 11.674)"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
        strokeWidth={9.649}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M1250.195-437.423c-8.141 41.667-8.141 79.167-8.141 79.167-.74 13.889-7.401 24.306-14.063 20.139-54.77-31.25-59.95-37.5-88.815-59.722 24.424 26.389 31.085 38.194 86.595 70.139 10.362 6.25 11.842 16.666 11.842 29.86l-2.22 61.806c0 9.028 5.92 50-22.204 34.028-65.132-36.806-63.652-33.333-95.477-51.389 38.487 31.945 24.424 22.917 91.036 61.111 11.842 6.945 24.424 25 24.424 33.334 0 124.305 1.48 101.388-12.582 138.888h59.95c-14.802-37.5-12.582-14.583-12.582-138.888 0-8.334 12.583-26.39 24.425-33.334 66.612-38.194 51.81-29.166 89.556-61.11-31.086 18.055-28.865 14.582-93.997 51.388-28.125 15.972-22.204-25-22.944-34.028l-1.48-61.805c0-13.195.74-23.611 11.842-29.861 55.51-31.945 62.17-43.75 86.595-70.14-28.865 22.223-34.046 28.473-88.816 59.723-6.66 4.167-13.322-6.25-14.062-20.139 0 0 0-37.5-8.882-79.167zm0 0"
        transform="matrix(.00528 0 0 .00562 14.558 13.972)"
        fillRule="nonzero"
        fill="#947245"
        fillOpacity={1}
        strokeWidth={6.156}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M264.396 424.777c-.321.944 1.603 12.27.64 15.417-.64 4.72-.64 5.349-1.602 11.327-1.283 5.663-2.565 17.304-4.489 23.91-.32.63-.32 1.574-.641 2.203-.32 3.461-.32 5.978 0 10.383l3.527 19.507s1.603 1.887 1.923 2.517c0 .943-.32 2.202 0 2.202.642 1.573.962 2.832 1.924 4.09.32 0 .962 0 1.282.315l1.603.314c.962.944.642 1.259 1.283 2.517h-6.412c0-2.831-2.245-4.09-2.245-4.09 0-.314-2.564-.944-2.885-2.517-.641-2.517 0-2.831 0-2.831s-2.244-9.125-3.206-11.327c-.32-1.888-.641-2.517-.962-4.09-.641-4.405-.962-6.292-3.206-12.585-.641-.944-1.924-1.258-1.924-2.832.32-.629.641-.943.641-1.573l.321-.944c.32-5.348.641-10.382.962-15.73 0 0 .32-.315.32-.63.642-8.81-4.167-16.99-7.053-24.855-.641-1.573-.32-3.147-.962-4.405-3.206-1.259-5.13-6.607-6.412-9.753-1.282-3.461-1.603-8.495-.641-11.641 0-1.259.32-1.888.962-2.517M300.304 443.655c.962 0 1.282-.315 2.565-.315 0 0 .641 1.259.962 1.573 1.603 2.832 3.206 15.417 4.488 21.08.32 1.888.962 5.978 1.283 7.866 0 0-.321 2.202.32 4.405.32.629.32 1.573.641 2.202.642 3.146 1.604 3.775 1.604 3.775.32.63 1.603 6.608 1.923 7.551 1.603 8.18 2.565 13.215 2.565 16.675-.32 4.72-.32 4.09.32 4.405.963 1.259 1.604.63 3.527 6.293.321.314.321-.315.642.314.32.315.64.315 1.282.315.641.315.641.315.962.315h7.053c-.64-1.888-2.885-3.147-4.809-3.147-.641-.629-1.603-1.258-1.923-2.517-1.283-1.887-1.604-2.202-2.245-3.146 0-.944-.641-1.888-.641-2.517l-2.244-23.282s.641-2.202.641-4.72c-.32-12.899.32-25.484.962-38.384 0-1.258 3.847-4.719 3.847-4.719"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="nonzero"
        fill="#e3e4e5"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M356.731 323.783c-1.923 0-4.168.944-5.45 2.517-1.603 2.517-2.885 7.551-3.206 10.697 0 .63.32 1.259.32 2.203-.961 2.202-1.602 4.404-1.923 4.72-.641 4.404-.641 19.82-1.924 25.798-.962 5.978-6.091 14.473-8.015 17.305-.962 1.573-3.527 2.202-4.489 2.202-.64.315-7.053-.315-7.053-.315-8.657-.629-21.16-5.348-29.496-6.607-8.657-.944-18.596-.314-26.61-1.258 0 0-9.94-3.776-19.238-.944-8.977 2.517-14.106 7.236-21.801 19.507 0 0-3.527 4.09-3.527 5.348 0 4.405 1.603 10.068 5.13 12.9 1.282.944.962 0 .641-.315v.315c.32.629.962 2.202 1.283 2.831 1.282 1.573 2.244 3.461 3.206 5.349.962 1.258.32 3.146 1.282 4.72 3.848 8.18 1.924 16.674 1.924 26.428 0 .314 0 .629-.32.944 0 5.663-5.451 13.214-5.451 18.877v1.259c-.32.314-.641.943-.641 1.573-.321 1.573-2.245 1.887-1.603 2.831 2.885 6.922 3.206 8.81 4.488 13.53.32 1.572.641 2.516 1.283 4.404.961 2.202 3.847 11.956 3.847 11.956s-.32.629.32 3.146c.642 1.888 3.527 2.202 3.527 2.517 0 0 2.886 1.573 2.886 4.72 0 .628 2.565.314 2.885.314.962 0 1.924-.315 2.886-.315 0-1.258-.32-1.888-1.283-2.517-.32-.314-1.603-.63-1.603-.944-.32-.314-.641-.629-.641-.944-1.282-.943-1.603-2.517-2.565-3.775-.32-.315 0-1.888-.32-2.517-.321-.944-2.245-2.832-2.245-2.832l-5.13-20.765c-.64-4.72 2.886-7.55 3.207-11.326 0-.944 4.488-12.27 4.809-12.9 3.206-8.81 8.656-22.967 8.656-28.63 0-6.608-.32 1.258.32-3.776.642-3.776-1.602-13.844-1.602-14.788 12.504 20.766 24.687 28.317 44.565 26.114h2.565s.32 1.259.64 1.573c.642 3.147-1.282 15.417-1.923 21.395 0 1.573-.641 5.663-.641 7.55 0 0-1.283 2.203-1.283 4.406 0 .629.321 1.258 0 2.202 0 2.832.642 3.775.642 3.775 0 .63-.32 6.608-.32 7.551-.642 8.18-1.283 11.956-2.245 15.417-.32.63-.641 1.258-1.283 1.573-.64.315-1.603 1.259-1.603 2.202v1.888c.32.315.642.944.962 1.259.32 1.887 0 3.775 0 5.663 0 .315.32.944.32 1.573.321.63.642.63 1.283.63.641.314.32.629.962.943h6.732c0-1.888-1.923-3.146-3.205-4.09-.962-.63-.641-.63-.641-1.573 0-1.573-.321-2.832-.321-4.09 0-.63.32-.944.641-1.573.32-.63 0-1.888 0-2.517.962-6.922 2.244-13.844 4.168-20.765 1.282-1.888 1.924-4.09 2.565-6.608 0 0 .962-3.146.641-4.719l4.81-30.204c.64-1.258 1.602-1.888 2.564-2.202 6.092-2.832 12.183-4.72 17.954-8.81 6.413-4.404 10.26-11.326 14.749-17.933.961-1.888 2.244-3.461 3.206-5.349 3.847-5.663 8.656-20.136 9.939-27.058 1.603-8.494.961-16.99 3.526-27.057.32-2.203 2.245-3.776 2.565-6.293v-.314h1.283c1.282-.315 2.885-.63 3.847-.63h3.206c.32 0 1.282.315 1.924.315.32 0 1.282.315 1.923.315.321 0 .962 0 1.283-.315.641-.944.641-.63.962-1.573h.32c.32 0 .962-.63 1.283-.944.32 0 .64 0 .962-.63v-1.258c0-.944 0-.944-.642-1.258h-.32c-.642-.315.32-1.259.32-1.888 0-.63 0-1.258-.32-1.573-.32-.63-.32-.944-.962-1.259-.32-.314-.32-.629-.641-.943-2.886-2.203-4.168-4.09-6.092-5.978.32-.315.32-.63 0-1.259-.962-2.831-2.565-3.146-5.45-5.348-2.886-1.573-6.413-3.461-10.26-3.776h-1.603-.32zm0 0"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M19.5 11.313a.09.09 0 00-.066.03.375.375 0 00-.04.134c0 .007.004.015.004.027-.011.027-.02.055-.023.059-.008.054-.008.246-.023.32a.58.58 0 01-.098.215c-.012.02-.043.027-.055.027-.008.004-.086-.004-.086-.004-.105-.008-.258-.066-.36-.082-.105-.012-.226-.008-.323-.016 0 0-.121-.046-.235-.011-.11.031-.172.09-.265.242 0 0-.043.05-.043.066 0 .055.02.121.062.157 0 .003.012.011.012.011.004-.09.016-.129.016-.129 0 .043.007.086.023.125.008.028.027.051.043.079.023.058.039.23.047.304a.679.679 0 01-.04.215c-.034.11-.05.207-.007.137.02-.035.09-.172.125-.301s.074-.203.062-.227a3.571 3.571 0 01-.015-.195c-.004-.004-.004-.008-.004-.012s-.004-.007 0-.02l.016-.093c.18.34.464.383.656.145-.028.097-.028.238-.028.296.004.06.004.032.004.055l-.035.32-.004.008s-.008.02-.008.035v.028c0 .015 0 .023.004.023l.004.008v.047l.004-.004a.148.148 0 00.024-.066v-.004-.004l.007-.016v-.035l.063-.375c0-.004 0-.008.004-.012a.162.162 0 01.047-.043.905.905 0 00.039-.257c-.012-.22.27-.282.363-.172a.296.296 0 00.09-.082.487.487 0 00.066-.133c.004-.024.012-.04.012-.055.004-.015.004-.027.008-.043 0-.012.004-.023.004-.039 0-.027.004-.05.004-.078l.011-.086c0-.016.004-.027.004-.043l.012-.047c0-.008.004-.012.008-.02 0-.007.004-.011.008-.019.004-.004.007-.012.011-.015.004-.008.004-.016.004-.024v-.004h.012c-.047.008-.027 0-.07.008-.012 0-.024-.004-.035-.008a.163.163 0 01-.051-.062c0-.032.011-.09.02-.106.027-.05.05-.012.105.004a.49.49 0 01.156.082c.004.004.043.008.047.004h.012v-.004-.004c0-.004.003-.008.003-.011v-.012c-.003-.004-.003-.008-.003-.008 0-.004 0-.004-.004-.008l-.008-.008-.008-.011c-.035-.028-.05-.051-.074-.075.004-.004.004-.007 0-.015-.012-.035-.031-.04-.067-.067a.32.32 0 00-.125-.046h-.02-.003zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d18219"
        fillOpacity={1}
      />
      <Path
        d="M356.731 323.783c-1.923 0-4.168.944-5.45 2.517-1.603 2.517-2.885 7.551-3.206 10.697 0 .63.32 1.259.32 2.203-.961 2.202-1.602 4.404-1.923 4.72-.641 4.404-.641 19.82-1.924 25.798-.962 5.978-6.091 14.473-8.015 17.305-.962 1.573-3.527 2.202-4.489 2.202-.64.315-7.053-.315-7.053-.315-8.657-.629-21.16-5.348-29.496-6.607-8.657-.944-18.596-.314-26.61-1.258 0 0-9.94-3.776-19.238-.944-8.977 2.517-14.106 7.236-21.801 19.507 0 0-3.527 4.09-3.527 5.348 0 4.405 1.603 10.068 5.13 12.9 1.282.944.962 0 .641-.315v.315c.32.629.962 2.202 1.283 2.831 1.282 1.573 2.244 3.461 3.206 5.349.962 1.258.32 3.146 1.282 4.72 3.848 8.18 1.924 16.674 1.924 26.428 0 .314 0 .629-.32.944 0 5.663-5.451 13.214-5.451 18.877v1.259c-.32.314-.641.943-.641 1.573-.321 1.573-2.245 1.887-1.603 2.831 2.885 6.922 3.206 8.81 4.488 13.53.32 1.572.641 2.516 1.283 4.404.961 2.202 3.847 11.956 3.847 11.956s-.32.629.32 3.146c.642 1.888 3.527 2.202 3.527 2.517 0 0 2.886 1.573 2.886 4.72 0 .628 2.565.314 2.885.314.962 0 1.924-.315 2.886-.315 0-1.258-.32-1.888-1.283-2.517-.32-.314-1.603-.63-1.603-.944-.32-.314-.641-.629-.641-.944-1.282-.943-1.603-2.517-2.565-3.775-.32-.315 0-1.888-.32-2.517-.321-.944-2.245-2.832-2.245-2.832l-5.13-20.765c-.64-4.72 2.886-7.55 3.207-11.326 0-.944 4.488-12.27 4.809-12.9 3.206-8.81 8.656-22.967 8.656-28.63 0-6.608-.32 1.258.32-3.776.642-3.776-1.602-13.844-1.602-14.788 12.504 20.766 24.687 28.317 44.565 26.114h2.565s.32 1.259.64 1.573c.642 3.147-1.282 15.417-1.923 21.395 0 1.573-.641 5.663-.641 7.55 0 0-1.283 2.203-1.283 4.406 0 .629.321 1.258 0 2.202 0 2.832.642 3.775.642 3.775 0 .63-.32 6.608-.32 7.551-.642 8.18-1.283 11.956-2.245 15.417-.32.63-.641 1.258-1.283 1.573-.64.315-1.603 1.259-1.603 2.202v1.888c.32.315.642.944.962 1.259.32 1.887 0 3.775 0 5.663 0 .315.32.944.32 1.573.321.63.642.63 1.283.63.641.314.32.629.962.943h6.732c0-1.888-1.923-3.146-3.205-4.09-.962-.63-.641-.63-.641-1.573 0-1.573-.321-2.832-.321-4.09 0-.63.32-.944.641-1.573.32-.63 0-1.888 0-2.517.962-6.922 2.244-13.844 4.168-20.765 1.282-1.888 1.924-4.09 2.565-6.608 0 0 .962-3.146.641-4.719l4.81-30.204c.64-1.258 1.602-1.888 2.564-2.202 6.092-2.832 12.183-4.72 17.954-8.81 6.413-4.404 10.26-11.326 14.749-17.933.961-1.888 2.244-3.461 3.206-5.349 3.847-5.663 8.656-20.136 9.939-27.058 1.603-8.494.961-16.99 3.526-27.057.32-2.203 2.245-3.776 2.565-6.293v-.314h1.283c1.282-.315 2.885-.63 3.847-.63h3.206c.32 0 1.282.315 1.924.315.32 0 1.282.315 1.923.315.321 0 .962 0 1.283-.315.641-.944.641-.63.962-1.573h.32c.32 0 .962-.63 1.283-.944.32 0 .64 0 .962-.63v-1.258c0-.944 0-.944-.642-1.258h-.32c-.642-.315.32-1.259.32-1.888 0-.63 0-1.258-.32-1.573-.32-.63-.32-.944-.962-1.259-.32-.314-.32-.629-.641-.943-2.886-2.203-4.168-4.09-6.092-5.978.32-.315.32-.63 0-1.259-.962-2.831-2.565-3.146-5.45-5.348-2.886-1.573-6.413-3.461-10.26-3.776h-1.603-.32zm0 0"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fill="none"
        strokeWidth={2.727}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M382.38 343.92c0 .314-.32.628-.32.943v.315c0-.315.32-.944.32-1.259zm0 0"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="nonzero"
        fill="#d39044"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M334.93 432.958c-1.924 8.18-7.054 10.068-3.527 16.99 0 0-1.603 0-2.565-2.832-.32-1.259-.64-3.461-.64-6.293 0-1.573.32-3.146.64-5.348 0-.944.32-1.888.642-3.147"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M338.777 429.497c-2.244 8.18-7.374 10.068-3.526 16.99 0 0-1.924 0-2.886-2.832-.641-1.259-.962-3.461-.962-5.349 0-1.573.641-4.72.962-5.978.32-.943 1.282-3.146 1.282-3.146"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M345.83 418.485c-2.885 5.349-5.45 10.068-6.732 14.158-.962 4.09-1.924 6.293.32 10.697 0 0-1.282-.944-3.526-4.72-.641-1.258-.962-3.775-.641-6.606 0-1.573.32-2.832.64-4.405.321-.63.642-1.573.963-2.517"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M348.396 415.024c-1.603 2.517-2.245 5.349-3.207 7.551-2.244 4.72-3.206 7.866-3.206 10.383 0 2.202-.32 3.775 1.924 7.236 0 0-.962 0-1.603-.63-.962-.314-1.603-.943-2.565-2.516-.641-1.573-.962-3.461-1.282-6.607 0-1.573.64-3.776.961-5.034.321-1.573 1.924-4.72 1.924-4.72"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M353.205 334.48c.32-.314-11.542-3.46-13.145-13.843 2.244-2.202 14.107 5.663 14.427 12.9"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#d18219"
        fillOpacity={1}
        strokeWidth={1.364}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M340.38 320.952s6.413 0 11.222 10.382c-1.283-1.258-6.092 1.888-11.222-10.068"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#000"
        fillOpacity={0.501961}
        strokeWidth={1.364}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M368.594 335.424c.32 0 .641-.314.32-.629-5.13-3.146-4.809.63-8.656.63 1.924 0 1.924.314 2.565.943 2.244 2.517 3.847 2.202 5.771 0"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#000"
        fillOpacity={1}
        strokeWidth={1.364}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M381.098 349.897c-.32.63-2.565-.944-3.847-.944"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fill="none"
        strokeWidth={2.727}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M382.38 345.807s-.64-.315-4.488-.944c0 .315 2.565-2.517 2.885.315"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#000"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M302.548 436.733c-.32.63-.641 1.259-.641 1.888-1.282 2.517-1.603 4.72.32 8.18 0 0-1.602 0-2.564-2.831-.641-1.259-.962-3.461-.641-6.293v-2.517"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fillRule="evenodd"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={2.727}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M230.731 419.114s-1.603-6.292 1.924-12.9"
        transform="matrix(.01218 0 0 .01242 15.154 7.293)"
        fill="none"
        strokeWidth={2.727}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M401.288 879.362c-1.907-1.538-3.83-6.196-3.04-8.817-2.711-2.037-9.695 2.253-6.344 8.774 3.326 6.239 7.856 5.849 9.636.021zm0 0M420.566 885.363c.464-3.444-.824-9.575-7.01-10.745-6.16-.888-8.217 4.68-6.953 10.528 4.515-3.51 11.756-1.863 13.963.217zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M407.343 881.962c1.122-4.636 5.831-5.893 10.686-5.46-3.084-3.422-6.085-8.838-10.373-5.632-3.33 2.556-5.555 6.152-.313 11.092zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M404.836 879.34c.44-3.726 2.065-8.405 5.946-10.442-3.562-3.097-11.843-2.101-12.316 4.182-.725 6.304 2.92 7.409 6.37 6.26zm0 0M389.006 919.289c5.154.974 12.283-1.625 10.234-13.649-1.976-11.178-10.32-13.865-10.858-11.265 4.7 1.582 4.044 17.526.372 24.935zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M396.759 918.054c5.406.953 13.769-2.037 9.982-13.627-3.786-11.59-12.294-10.29-12.807-7.409 4.724 1.863 6.449 13.063 2.825 21.036zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M376.732 918.075c3.862 3.64 13.847 4.766 16.904-6.845 3.13-10.767.298-14.212-3.42-16.162 1.768 5.806-5.228 21.73-13.484 23.007zm0 0M402.271 917.296c3.127-1.972 10.459-5.156 5.714-16.097-4.072-9.012-10.073-5.09-11.737-3.813 4.22 1.907 8.089 11.504 6.023 19.91zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M409.148 914.718c3.102-2.253 10.792-7.171 4.538-17.981-5.98-10.55-14.003-3.618-13.988-.499 3.369.845 9.478 9.966 9.45 18.48zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M416.62 907.265c2.047-2.73 7.278-9.705-.675-16.68-7.701-6.998-12.787 1.667-12.065 4.158 3.247-.563 10.6 5.33 12.74 12.522zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M421.26 896.368c.44-3.726 1.953-12.651-7.098-14.71-8.799-2.08-9.663 8.493-7.984 10.334 2.347-2.188 10.546-1.191 15.082 4.376zm0 0M370.88 914.89c3.408 4.247 13.538 7.063 18.657-4.159 4.915-10.637 2.79-14.71-.976-17.222 1.037 6.152-8.8 21.468-17.681 21.382zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M360.792 906.68c3.35 6.52 19.454 13.93 25.53 2.058 5.85-11.568 1.13-22.227-3.788-26.343 2.277 11.72-12.148 29.701-21.742 24.285zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M352.466 898.318c7.82 17.201 24.032 14.103 29.558 1.711 5.322-11.806 3.71-18.76-2.11-24.501-4.251 15.403-12.405 23.765-27.7 22.811zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M341.87 884.193c5.893 21.339 27.212 18.653 36.31 6.52 6.343-8.773 4-15.38.892-19.085-7.147 8.276-19.197 15.555-37.226 12.283zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M337.938 870.913c.632 22.075 26.187 24.415 37.525 11.807 7.854-8.904 7.296-15.381 5.195-19.173-8.43 8.103-25.295 18.35-42.72 7.366zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M332.597 850.094c-3.892 28.423 29.364 37.76 43.634 20.927 7.578-9.163 7.272-15.663 5.17-19.454-14.348 10.03-39.084 11.309-48.804-1.473zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M329.539 823.404c-9.51 30.893 19.312 41.746 38.066 38.714 14.752-2.405 23.136-19.866 21.011-23.939-18.636 13.237-55.358 1.928-59.053-14.493zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M329.012 799.617c-12.627 30.026 15.495 47.466 38.673 45.754 15.1-1.3 27.775-7.214 27.211-19.649-22.872 8.21-58.277-5.48-65.884-26.105zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M329.924 774.855c-12.58 30.59 14.687 55.763 43.392 56.413 14.743.433 21.498-3.553 27.242-13.41-20.719 3.77-64.771-27.903-70.634-43.003zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M329.603 765.236c-11.364 35.876 80.198 80.482 85.055 33.818-22.077 11.547-81.903-20.754-85.055-33.818zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M327.496 755.488c-15.286 19.757 93.188 78.228 95.49 28.38-9.704 5.09-29.843.866-49.112-7.973-19.52-8.817-33.16-22.964-46.354-20.126zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M310.904 751.241c19.548.304 61.466 30.742 89.3 36.006 18.03 3.272 32.597-4.224 24.32-35.572-28.676 29.138-82.918-17.83-111.888-6.824-2.914-1.452.727 8.449-1.732 6.39zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M314.815 755.444c19.034-11.568 58.187 10.313 86.161 11.31 17.056.8 38.203-18.61 24.357-46.925-21.86 37.63-83.026 7.43-108.704 27.231-1.901 4.42-.913 10.01-1.814 8.384zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M307.062 756.68c20.277-14.797 61.586-6.153 88.036-8.146 17.617-1.517 43.883-32.15 19.888-57.604-14.894 53.77-64.598 27.123-107.296 58.318-2.08 5.286.752 8.73-.628 7.431zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M314.273 752.086c16.884-15.922 57.79-14.904 82.085-27.21 16.28-8.21 32.75-43.673 4.351-61.373-2.977 56.716-55.202 39.082-87.342 81.001-1.001 6.044 2.489 8.297.906 7.582zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M316.16 744.547c12.299-22.053 50.359-27.6 70.824-46.1 18.37-16.335 23.399-46.274-7.592-55.806-2.76 59.25-43.906 46.62-60.879 82.127-3.12 7.93-1.526 20.56-2.354 19.78zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M325.618 721.887c12.47-20.082 21.932-13.237 42.228-33.709 17.469-17.96 22.69-60.399-7.826-61.46 4.688 51.516-15.291 52.101-29.143 79.68.533 6.195-3.7 15.922-5.26 15.489zm0 0"
        transform="matrix(.00119 -.0154 .01377 .00133 9.077 19.876)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M310.48 602.524l-10.546 5.797-49.888 153.84 18.023 40.177 17.243 2.223 20.593-1.33 30.702-138.73 8.79-56.34-21.079-12.529zm0 0"
        transform="matrix(.0008 -.01263 .00956 .00129 11.918 18.745)"
        fillRule="evenodd"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={3.041}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M309.329 597.307c.207 2.027.762 4.433 1.275 6.433 9.81-6.96 20.37-.494 23.251 15.616 2.84 15.704-2.86 38.67-13.74 56.35-6.527 14.86-14.647 32.308-16.807 56.61-1.82 18.55 1.766 41.55-2.3 62.334-2.689 10.04-8.027 9.264-18.315 8.497 4.118 7.011 9.44 10.65 16.23 10.485 14.21-3.244 24.625-16.388 28.519-44.926-4.323-24.164-3.348-47.957 9.672-71.95 11.767-12.033 22.447-25.608 26.448-50.066 1.868-12.013-.724-25.285-9.882-39.23-11.33-17.03-20.697-17.874-29.51-16.312-5.05 2.062-9.792 4.097-14.841 6.16zm0 0"
        transform="matrix(.0008 -.01263 .00956 .00129 11.918 18.745)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={3.041}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M-325.644 629.665c-.002-3.078 1.987-5.591 4.47-5.61 2.46.036 4.513 2.506 4.49 5.638l-4.495-.05zm0 0"
        transform="matrix(.06312 .02156 .02663 -.0622 23.087 62.432)"
        fillRule="evenodd"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={0.5}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M295.57 723.105c-3.893 7.144-11.282 10.618-16.776 7.402-5.495-3.215-6.732-11.62-2.856-19.047 3.64-7.122 11.281-10.617 16.524-7.38 5.494 3.215 6.732 11.62 3.107 19.025zm0 0M276.477 641.052c-2.474-3.475-6.143-5.713-10.153-5.084-2.5.5-4.702 1.823-6.854 3.995l-.064-1.13c-1.441-7.536 4.87-16.59 11.366-18.001 3.004-.542 5.853.631 7.995 2.716-1.098 2.932-1.692 5.82-1.263 8.904.316 1.108.648 2.498 1.216 3.584-.926 1.498-1.585 3.257-2.243 5.016zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M300.267 632.479c-2.742-3.736-6.662-5.952-10.924-5.302-4.01.63-8.144 3.539-10.687 7.73-.584-1.369-.916-2.759-1.249-4.149-1.27-8.97 6.253-18.98 13.77-20.194 2.014-.173 3.792-.043 5.618.935-.187 1.151-.107 2.563-.026 3.974.728 3.91 2.447 7.45 5.125 10.057-.878 2.345-1.504 4.669-1.627 6.949zm0 0M258.055 677.251c-.236.304-.22.587-.455.89-3.32-.565-6.201-2.303-8.627-4.931 2.677 2.607 5.794 4.04 9.082 4.041zm0 0M264.865 663.614c-4.172-2.194-7.466-6.734-8.275-12.055-1.253-8.687 6.017-18.676 13.3-19.586.738-.347 1.51-.13 2.265-.195-2.576 3.626-4.315 8.6-3.555 13.073.413 2.802 1.564 5.256 2.952 7.406-3.127 2.823-5.922 7.036-6.687 11.357zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M258.227 689.153c-1.98.738-4.026.346-5.852-.631-4.22-3.042-5.41-10.6-2.492-17.093s8.829-9.271 13.3-6.252c1.826.978 2.946 2.868 3.578 5.083-1.81-.695-3.572-.544-5.285.455-4.685 2.106-7.1 8.555-5.52 14.094.6 1.65 1.2 3.3 2.271 4.344zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M262.292 693.91c-2.833-.891-5.762-3.476-7.246-7.32-2.919-6.842-.885-15.529 4.727-19.133 2.923-1.954 5.96-1.931 9.06-.78-.578 3.17-.385 6.559 1.05 9.556 1.2 3.301 3.61 5.647 6.207 6.843-2.565-.63-5.333-.393-7.77 1.236-3.175 1.975-5.247 5.558-6.028 9.598zm0 0M257.274 743.424c-7.084-4.497-11.423-14.053-9.544-21.024 1.172-6.06 6.596-8.512 12.278-6.448-2.495 5.038-3.115 11.9-1.235 18.265 1.296 4.995 4.306 8.992 7.974 11.23-2.736.802-6.056.237-9.473-2.023zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M251.708 770.006c-.268-.261-.552-.804-1.071-1.043-5.42-6.343-7.022-16.702-3.081-23 3.72-5.71 10.532-6.013 16.155-.54-2.918 6.494-2.167 15.224 1.758 21.98-3.368-1.413-6.907-1.392-10.35.323-1.242.39-2.453 1.346-3.41 2.28zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M268.18 783.908c-5.584-.37-10.736-6.452-12.461-14.531-2.041-9.187 1.267-17.7 7.259-19.067l.251-.021c2.807 4.865 7.01 7.624 11.573 7.799 0 0 .251-.022.268.26-6.822 4.56-10.002 15.33-7.173 25.017 0 0 .016.283.284.543zm0 0M265.154 717.495c-6.447 2.258-14.303-2.457-17.302-10.71-3.235-7.95-.163-16.158 6.3-18.133 1.73-.716 3.492-.868 5.285-.455 1.532 4.692 4.274 8.428 7.69 10.687-1.268 4.365-1.481 9.49-.185 14.486.316 1.107.616 1.933 1.168 2.736-.975.651-1.966 1.02-2.956 1.39zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M270.044 727.856c-7.085-4.497-11.423-14.054-9.796-21.003 1.61-7.232 8.829-9.272 15.914-4.775 1.842 1.26 3.716 3.085 5.339 4.931-4.24 5.472-5.787 13.833-3.575 21.587.032.565.316 1.108.348 1.672-2.516.217-5.333-.392-8.23-2.412zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M284.766 750.988c-3.876 7.427-11.297 10.335-16.84 6.273-5.542-4.063-6.86-13.88-3.236-21.284 3.608-7.687 11.281-10.617 16.824-6.555 5.29 4.084 6.86 13.879 3.252 21.566zm0 0M275.471 703.273c-3.695 1.736-7.973 2.105-11.373.128-5.998-3.172-7.536-12.403-3.172-20.155 3.217-5.668 8.577-9.25 13.375-9.38 2.377 1.782 5.226 2.956 7.978 2.435l.536.521c-7.892 3.517-12.143 13.245-9.363 22.085.332 1.39 1.184 3.019 2.003 4.083zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M284.217 665.92c1.222 8.123-4.18 15.397-10.456 16.221-6.276.824-12.418-4.889-13.624-12.73-1.077-5.58 1.857-11.791 5.723-14.961 2.522 4.322 6.962 6.777 11.475 6.105 1.51-.13 2.988-.825 4.45-1.802 1.152 2.454 2.035 4.648 2.432 7.167zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M287.24 705.664c-5.643 3.04-12.208-1.219-14.452-9.537-2.245-8.318.26-17.613 6.172-20.391 1.713-.999 3.475-1.15 5.268-.738-.69 1.195-1.13 2.367-1.568 3.54-3.528 9.099-1.894 20.023 3.665 24.368 1.039.478 1.842 1.26 2.865 1.456-.487.325-1.21.955-1.95 1.302zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M304.56 667.858c.412 2.801-.182 5.69-1.06 8.035-5.242-3.237-12.144-.09-16.036 7.055-4.14-1.63-7.433-6.17-8.243-11.49-1.19-7.559 5.14-16.331 11.65-17.46l.065 1.13c1.173 7.276 7.048 12.728 13.608 12.447zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M303.417 696.611c-4.283 9.164-12.899 13.31-19.196 9.313-6.314-4.28-7.948-15.204-3.665-24.368 4.283-9.164 12.898-13.31 19.196-9.312 6.313 4.28 7.947 15.204 3.665 24.367zm0 0M289.426 655.258c-1.35 2.954-3.737 5.429-6.441 6.796-6.147 3.083-13.922-.22-17.125-7.604-2.951-7.407.967-18.525 7.35-21.912 2.704-1.367 5.504-1.041 8.101.154l.032.565c-1.734 9.512 1.85 19.133 8.083 22.001zm0 0M320.726 614.262c.396 2.52.038 5.104-1.108 7.189-2.442-2.911-5.843-4.888-9.35-4.303-4.262.651-8.6 4.429-10.59 9.424-2.41-2.346-3.846-5.344-4.558-8.97-1.19-7.559 5.374-16.635 11.901-17.48 6.78-.868 12.499 6.3 13.688 13.858zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M322.414 630.572c1.141 6.711-3.067 12.748-8.523 14.636-2.475-3.475-5.891-5.734-9.65-5.127-1.007.087-1.997.455-2.72 1.085-1.639-2.129-2.79-4.583-3.187-7.102-.922-7.297 4.92-15.744 11.447-16.59 6.26-1.106 11.711 5.801 12.633 13.098zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M293.169 654.369c-2.924 1.954-6.447 2.257-9.344.236-5.243-3.237-6.513-12.206-3.156-19.872 3.624-7.405 10.51-10.835 15.517-7.293 2.881 1.738 4.584 4.996 5.061 8.927-5.343 3.864-8.984 10.987-8.094 17.72zm0 0M256.37 798.543c-5.692 2.193-12.022-2.37-14.25-10.405-2.513-8.58.48-18.2 6.627-21.282 5.643-3.04 12.192.936 14.892 8.364-6.067 4.495-9.294 14.419-7.27 23.323zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M270.582 803.846c-6.163 2.8-13.216-1.133-15.428-8.886-2.464-7.732.844-16.245 7.259-19.067 5.424-2.453 11.373-.128 14.48 5.563-6.05 4.777-8.808 14.093-6.311 22.39zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M267.595 818.005c-5.676 2.474-11.941-.958-14.105-7.865-1.28-4.713-.563-9.882 2.028-13.226 3.984 3.346 9.098 4.324 13.767 1.936.99-.369 2.217-1.042 2.924-1.954.82 1.065 1.403 2.433 1.735 3.823.9 2.476 1.029 4.735.418 7.34-1.9 2.15-3.501 5.125-4.582 8.34-.472.607-1.446 1.258-2.185 1.606zm0 0M276.096 847.347c-6.415 2.822-13.467-1.11-15.931-8.843-2.213-7.753 1.08-16.548 7.494-19.37.488-.326.991-.369 1.478-.695-.326 3.15-.133 6.537.8 9.578 2.18 7.189 6.999 11.881 12.38 13.12a14.137 14.137 0 01-6.221 6.21zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M285.269 848.543c-6.163 2.8-12.964-1.153-15.412-8.603-.948-3.323-.89-6.733.192-9.947 4 3.628 9.114 4.606 14.05 2.48 2.705-1.368 4.857-3.54 6.474-6.232.82 1.064 1.135 2.172 1.72 3.54 2.195 7.471-.861 15.962-7.024 18.762zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M293.2 863.465c-6.162 2.8-12.963-1.154-15.16-8.625-.616-1.933-.996-4.17-.857-6.168 2.549.348 5.066.131 7.282-.91 4.182-2.063 7.48-6.319 8.952-11.552 2.865 1.455 5.559 4.344 6.807 8.493 2.196 7.47-.86 15.962-7.023 18.762zm0 0M272.856 786.06c-2.63-1.76-4.82-4.693-6.052-8.559-2.496-8.296 1.015-17.678 7.682-20.521 6.902-3.148 14.474 1.024 16.97 9.32 1.864 6.082.237 13.031-3.565 17.33-3.148-1.998-6.972-2.52-10.666-.784-1.478.695-2.924 1.954-4.37 3.213zm0 0M319.814 651.508c1.14 6.71-5.359 16.916-12.106 18.348-6.746 1.432-10.966-1.61-14.008-6.17-3.026-4.28-4.355-9.84-2.63-15.095 1.723-5.255 6.231-10.466 10.429-12.246 4.433-2.084 7.518-1.215 10.967 1.61 3.464 3.106 6.222 7.124 7.348 13.553zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M285.265 808.54c-6.163 2.8-12.948-.872-15.396-8.321-2.196-7.472 1.112-15.984 7.024-18.763 6.163-2.8 12.947.872 15.395 8.321 2.196 7.472-1.112 15.984-7.023 18.763zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M283.19 834.253c-6.163 2.8-12.964-1.154-15.144-8.343-2.197-7.471.876-15.68 7.04-18.48 6.162-2.8 12.695.893 14.892 8.364 2.196 7.472-.877 15.68-6.788 18.459zm0 0"
        transform="matrix(.00119 -.01545 .01377 .00088 9.147 19.956)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={2.294}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M336.657 229.858l-2.11 2.43-79.101 98.265-1.758 2.083 2.11 2.083c25.312 23.959 40.078 65.278 40.078 98.264.351 42.014-6.68 71.18-15.118 97.917-11.953 36.805-27.07 69.097-31.64 122.916-3.516 39.931 10.898 71.181 29.18 93.75 18.632 22.57 41.132 36.459 54.492 42.709 41.132 19.444 83.672 12.847 126.21 18.055 18.633 2.43 29.18 14.236 38.672 24.653l2.461 2.43 2.11-2.43c9.844-10.417 20.039-22.222 39.023-24.653 42.188-5.208 84.727 1.39 125.86-18.055 13.359-6.25 35.859-20.14 54.492-42.709 18.281-22.569 32.695-53.819 29.531-93.75-4.922-53.819-20.039-86.11-31.992-122.916-8.438-26.736-15.117-55.903-15.117-97.917 0-32.986 14.765-74.305 40.078-98.264l2.11-2.083-1.759-2.083-79.101-98.264-2.11-2.43-2.109 1.735c-24.258 21.528-52.383 29.167-80.156 27.778-28.125-1.042-55.899-11.458-79.453-26.042l-1.407-.694-1.757.694c-23.555 14.584-51.329 25-79.454 26.042-27.773 1.389-55.898-6.25-80.156-27.778zm.703 8.333c24.96 20.834 53.789 28.473 81.914 27.084 27.422-1.042 54.492-10.417 77.695-23.959v288.195H287.44c8.085-26.042 14.765-55.208 14.413-96.528 0-34.028-14.414-74.653-40.078-100.694zm325.195 0l75.586 94.098c-25.664 26.041-40.078 66.666-40.078 100.694 0 41.32 6.328 70.486 14.766 96.528H502.946V241.316c23.203 13.542 50.273 22.917 77.695 23.959 28.477 1.389 56.953-6.25 81.914-27.084zM285.33 535.414h429.258c11.601 36.11 26.015 67.36 30.585 119.097 3.165 38.194-10.546 67.708-28.125 89.236-17.93 21.528-40.078 35.07-52.382 41.32-39.375 18.402-80.86 11.805-124.102 17.36-19.687 2.778-31.289 14.237-40.43 24.306-9.492-10.07-21.093-21.528-40.43-24.305-43.593-5.556-85.077 1.041-124.1-17.362-12.657-6.25-34.806-19.791-52.384-41.319-17.93-21.528-31.64-51.042-28.125-89.236 4.57-51.736 18.633-82.986 30.235-119.097zm0 0"
        transform="matrix(.01111 0 0 .01125 14.45 8.055)"
        fillRule="nonzero"
        fill="#e7ca00"
        fillOpacity={1}
        strokeWidth={3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M23.348 9.102c-.004 0-.02.062-.02.062-.008.02-.023.14-.043.266-.015.12-.023.226-.023.226.004 0-.07-.039-.149-.074-.195-.086-.601-.152-.625-.094-.015.04.035.285.106.532.015.054-.012.054-.125.09a.697.697 0 00-.184.1c-.055.04-.047.052.09.18l.129.126-.059.05c-.066.055-.058.07.184.305.266.254.402.328.586.328.055 0 .117.012.16 0 .07-.004.117-.011.25-.047.16.016.316.094.379.125.012.036.016.063.027.086-.113-.12-.355-.168-.406-.168-.05-.004-.078.012-.133.028-.058.02-.078.043-.133.12-.035.098.04.2.13.212.116.015.202-.047.202-.153 0-.086-.05-.148-.011-.144.14.012.351.12.39.265.028.168.016.176-.047.067-.078-.106-.195-.227-.23-.227-.031 0-.102.164-.102.239 0 .046-.015.054-.054.039-.032-.016-.102-.059-.157-.067l-.097.012.023.16c.016.086.055.215.09.285l.055.121-.14-.039c-.329-.101-.321-.133-.298.043.008.086.043.211.055.239.02.046-.02.035-.129.035-.074 0-.137-.004-.137.008 0 .07.282.453.41.554.157.121.45.254.567.254.035 0 .14.027.238.066l.164.075.012.18c.016.21-.063.632-.098.632-.011 0-.066-.09-.125-.199-.129-.242-.125-.238-.16-.184-.023.04-.031.036-.031-.02 0-.089-.145-.366-.238-.456l-.067-.074-.047.09-.039.082-.168-.192c-.097-.105-.183-.184-.199-.176-.016.008-.035.094-.047.188-.054.265-.043.293-.148.191l-.09-.086-.023.086c-.051.149.011.688.078.875.035.102.078.281.101.406.04.239.176.512.344.684.059.063.07.086.031.086-.027 0-.07.027-.097.059-.125.136-.012.316.175.28.094-.015.114-.01.145.06.047.101.05.285.004.367-.032.058-.219.136-.25.105a.965.965 0 01-.012-.238l.004-.219-.164.086c-.39.21-.695.723-.817 1.129-.043.137-.296.379-.41.52-.011.058-.07.25.051.078a.345.345 0 01.117-.082c.07-.028.317.011.325 0 .011-.028-.122.062-.227.093a.8.8 0 01-.234.055c-.004 0-.012-.008-.012-.016v-.004c0-.003 0-.003.004-.007v-.004c.011-.012 0-.051-.008-.07 0-.036-.016-.028-.016-.044-.16.157-.265.239-.5.301-.293.07-.918.172-1.386.223-.41.039-1.7.25-1.778.285-.035.016-.117.05-.183.074a.446.446 0 00-.168.133c-.047.07-.059.102-.024.168.086.16.258.145.614-.023.152-.075.343-.141.484-.16.125-.02.308-.06.402-.083.094-.023.364-.07.586-.109 1.281-.207 1.754-.309 2.278-.492.347-.125.343-.125.664-.094.363.035.82-.078 1.007-.25.04-.039.149-.172.243-.3.093-.126.207-.255.253-.282.118-.078.051-.11-.261-.11l-.258-.003.086-.192c.101-.23.207-.53.187-.55a.948.948 0 00-.199.03c-.105.024-.195.04-.199.036a.343.343 0 01.027-.105c.024-.07.059-.11.117-.122.047-.011.106-.027.13-.03a.399.399 0 01.163.019c.118.031.122.035.106.136-.02.122.047.211.16.211.082 0 .176-.093.176-.168 0-.086-.121-.187-.2-.168a.78.78 0 01-.238-.043l-.172-.058.165-.035c.25-.055.332-.047.367.035.023.05.062.074.133.082.199.02.265-.266.074-.328-.07-.024-.223.054-.223.113 0 .02-.055.031-.117.031-.133 0-.262.028-.371.07l.242-.12c.145-.047.336-.118.422-.157.281-.133.562-.465.664-.777.066-.203.168-.828.137-.828-.016 0-.121.043-.23.094-.204.093-.208.093-.208.023a4.29 4.29 0 01.078-.57c.02-.035.012-.055-.015-.055-.098 0-.407.172-.61.336-.195.16-.215.168-.215.101 0-.039.032-.12.063-.175.059-.098.074-.102.187-.082.114.015.133.008.18-.067.067-.101.027-.222-.078-.258-.062-.02-.055-.027.059-.085.144-.067.297-.23.41-.442l.07-.137-.11.008c-.062.008-.113.024-.113.02s.024-.067.047-.14a.903.903 0 00.047-.263c0-.136-.117-.656-.164-.707-.015-.02-.078.028-.152.102-.043.023-.051.027-.11.07l-.128-.23c-.063-.133-.125-.266-.13-.274-.007-.007-.046.02-.093.063-.098.09-.106.043-.02-.145.078-.168.114-.191.2-.129.109.07.23.004.242-.129.008-.082-.004-.113-.067-.152-.039-.027-.097-.043-.12-.035-.028.012-.055-.016-.083-.074-.023-.063-.062-.102-.117-.117-.164-.043-.277.168-.16.289.05.043.05.078.015.312-.058.375-.078.406-.12.238-.051-.187-.028-.707.038-.859.114-.266.051-.695-.14-.91-.156-.18-.633-.543-.66-.527zm-.23.925c.027 0 .144.11.335.34.16.192.344.504.465.75-.043-.05-.047-.058-.176-.234-.101-.145-.285-.465-.449-.633-.145-.148-.2-.219-.18-.223h.004zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
      />
      <Path
        d="M23.91 13.438c-.027.12-.055.144.008.234.031.047.086.07.137.07.086 0 .136.063.207.285.011.036.015.036.015-.007a.444.444 0 00-.058-.18c-.04-.078-.051-.133-.032-.145.06-.039.036-.199-.039-.25-.097-.07-.128-.05-.238-.008zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#008f4c"
        fillOpacity={1}
      />
      <Path
        d="M18.047 18.648c-.067.055-.086.141-.035.192.07.07.32.008.347-.09.036-.14-.175-.207-.312-.102zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#9eab05"
        fillOpacity={1}
      />
      <Path
        d="M23.414 9.422c.023.156.176.48.29.617.046.055.093.098.1.09.009-.008-.081-.2-.199-.422-.164-.316-.21-.383-.19-.285zm0 0M22.355 10.277c.036.036.508.172.508.145 0-.059-.152-.125-.332-.145-.105-.011-.183-.011-.176 0zm0 0M22.55 10.664c.04.04.595.293.747.344.094.035.215.05.27.047.097-.012.085-.016-.114-.082a3.098 3.098 0 01-.363-.153c-.195-.097-.594-.215-.54-.156zm0 0M24.36 11.48c-.051.145-.126.633-.15.954-.015.207-.01.277.028.324.04.055.047.031.082-.254.047-.406.098-1.106.086-1.121-.008-.004-.031.039-.047.097zm0 0M23.824 11.742c.016.254.125.528.164.406.012-.035-.02-.175-.078-.343l-.098-.285zm0 0M23.469 11.75c.023.031.078.098.113.145l.074.093v-.082c0-.047-.031-.105-.082-.144-.101-.082-.16-.086-.105-.012zm0 0M23.023 12.535c0 .016.344.281.457.356.094.058.094.058-.023-.082-.121-.145-.316-.286-.395-.286-.023 0-.039.004-.039.012zm0 0M23.195 13.223c.082.351.149.55.184.574.02.012.043.02.047.015.015-.015-.149-.5-.2-.59l-.05-.081zm0 0M23.563 13.496c0 .047.027.149.062.219.035.066.059.101.05.074a1.38 1.38 0 01-.034-.2c-.024-.163-.078-.23-.078-.093zm0 0M22.918 13.734c.059.204.215.524.434.883.164.274.164.274.171.16.008-.09-.027-.168-.144-.367-.082-.14-.219-.39-.309-.547-.086-.164-.168-.293-.18-.293-.015 0 0 .075.028.164zm0 0M24.887 13.781a5.22 5.22 0 00-.512.73.266.266 0 00-.027.177c.02.074.062.015.379-.485.191-.316.343-.57.328-.57-.016 0-.086.066-.168.148zm0 0M24.387 16.145c-.047.09.011.19.113.19.094 0 .148-.112.102-.202-.04-.07-.176-.07-.215.012zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#75b52b"
        fillOpacity={1}
      />
      <Path
        d="M23.453 11.293c-.121.086.008.3.133.227.078-.051.09-.176.02-.227a.266.266 0 00-.075-.043.227.227 0 00-.078.043zm0 0M24.285 10.605c-.074.02-.101.118-.058.2.066.117.222.07.222-.067 0-.093-.074-.152-.164-.133zm0 0M24.496 10.852a.238.238 0 00-.008.12c.008.055.028.071.102.071.113 0 .176-.086.125-.168-.043-.07-.195-.09-.219-.023zm0 0M23.305 15.602c-.117.093-.008.261.14.207.067-.028.09-.102.051-.172-.043-.086-.113-.102-.191-.035zm0 0M23.95 13.469c-.036.035-.024.152.015.195.098.094.238 0 .203-.137-.016-.058-.04-.078-.11-.078-.046 0-.097.008-.109.02zm0 0M24.54 13.465c-.024.094.03.176.112.176.078 0 .133-.075.121-.164-.007-.059-.03-.079-.113-.082-.086-.012-.101 0-.12.07zm0 0M24.621 15.809c-.023.093.031.175.113.175.078 0 .133-.074.121-.164-.007-.058-.03-.078-.109-.082-.09-.011-.105.004-.125.07zm0 0M24.43 16.105c-.117.094-.008.262.136.207.067-.027.094-.101.055-.171-.043-.086-.113-.102-.191-.036zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
      />
      <Path
        d="M23.113 10.055c.012.02.075.093.133.16.121.129.215.265.395.543.125.199.28.402.28.363 0-.035-.28-.516-.39-.664-.148-.2-.383-.441-.426-.441-.007 0-.007.011.008.039zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#75b52b"
        fillOpacity={1}
      />
      <Path
        d="M23.922 14.07c-.004.02-.035.235-.047.485-.035.582-.063.894-.129 1.27-.027.163-.055.323-.058.359l.007.05.051-.074a.845.845 0 01.2-.191c.03-.02.12-.106.199-.192.406-.433.515-.566.863-1.03.324-.434.402-.544.394-.552-.011-.011-.113.086-.511.586-.114.14-.301.36-.414.489-.282.312-.594.601-.676.714a.597.597 0 01.027-.136c.07-.305.102-.641.11-1.297.003-.29.003-.524 0-.524-.004 0-.008.02-.016.043zm0 0M23.14 16.168c-.023.043-.1.176-.167.3-.215.387-.465.739-.653.923-.066.066-.047.07-.062.086-.074.078.226.132.453.156.305.031.477-.031 1.297-.469.191-.102.242-.133.203-.129-.074.016-.195.043-.55.215-.349.164-.5.238-.661.273-.121.028-.3.032-.406.004l-.074-.004.039-.011c.03-.008.082-.012.097-.024a.766.766 0 01.145-.093c.14-.075.297-.207.512-.403.167-.148.484-.469.484-.492 0-.012-.149.11-.34.281-.395.352-.781.614-.945.64l-.047.009.05-.047.141-.211c.157-.227.215-.332.356-.629.133-.273.187-.434.18-.441-.005-.004-.028.027-.051.066zm0 0M23.148 12.07c-.003.02.165.227.36.45.195.23.312.32.469.52.16.202.175.218.351.378.219-.293.352-.691.445-.941.09-.25.165-.465.168-.797-.125.277-.128.375-.226.675-.102.305-.32.829-.402.942-.008.008-.465-.559-.665-.793-.21-.246-.5-.461-.5-.434zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#eac102"
        fillOpacity={0.501961}
      />
      <Path
        d="M23.3 9.371l-.034.285-.121-.054a1.861 1.861 0 00-.582-.125c-.083 0-.086.007-.07.101.019.102.1.395.128.457.008.02-.047.05-.121.074a.577.577 0 00-.195.086c-.055.04-.051.051.07.157.145.132.156.168.078.226-.05.035-.031.063.18.266.133.129.293.258.355.289.164.09.48.09.649 0 .117-.059.129-.059.203-.008.078.047.078.047.039-.004a2.045 2.045 0 00-.332-.2 2.027 2.027 0 01-.953-1.073c-.074-.223-.074-.34.004-.34.132 0 .41.07.562.14.235.11.649.512.762.743.086.164.094.222.098.464 0 .278.043.399.05.141.012-.32.024-.394.07-.516.094-.234.047-.593-.105-.808a2.193 2.193 0 00-.375-.324c-.152-.11-.289-.211-.297-.23-.011-.016-.043.097-.062.253zm.407.047c.211.152.273.215.34.352.101.214.133.472.078.664l-.047.144-.082-.18c-.055-.12-.168-.265-.355-.453-.153-.152-.29-.277-.309-.277-.035 0-.023-.219.023-.406.02-.082 0-.09.352.156zm-1.023.781c.03.051.082.106.109.13.031.023.062.07.074.105.016.058 0 .062-.152.062-.149 0-.172-.008-.29-.125-.066-.07-.116-.137-.109-.14.028-.028.235-.114.274-.118.02 0 .062.04.094.086zm.425.496c.184.172.239.207.461.297.117.047.125.055.075.102-.07.07-.422.094-.582.039-.137-.043-.633-.496-.583-.528a.897.897 0 01.34-.074c.086-.004.14.031.29.164zm0 0M24.027 11.281c-.011.016 0 .086.028.156.054.165.054.211-.004.32a.577.577 0 00-.047.22.73.73 0 01-.04.23l-.034.102-.106-.067a.342.342 0 01-.12-.137c-.028-.093-.017-.296.023-.492.027-.136.05-.175.093-.172.336.371.227.22.016-.043-.031-.039-.043-.039-.078.012a.483.483 0 00-.063.156c-.015.106-.015.106-.11.063-.136-.074-.187-.063-.187.043a.86.86 0 00.122.383c.074.11.074.062.003-.082-.085-.176-.117-.36-.058-.36.023 0 .074.024.113.047.059.043.067.078.063.266-.004.254-.028.265-.325.164a.791.791 0 00-.199-.05c-.012.015.04.284.074.37.012.04-.011.047-.132.035l-.149-.011.09.156c.195.348.484.555.879.637.125.023.273.07.328.097.074.043.09.043.059.008a.4.4 0 00-.157-.09c-.183-.066-.359-.195-.586-.441-.23-.242-.347-.453-.347-.61 0-.086.008-.101.047-.086.027.008.136.04.246.07.265.067.336.106.508.294.183.191.242.308.296.57.024.113.051.211.059.223.043.043.055-.102.02-.227-.055-.21.03-.617.21-.98.083-.157.325-.399.364-.356.012.012.054.149.097.301.086.328.07.422-.082.746-.109.227-.214.363-.382.484-.122.09-.086.118.086.075.152-.043.394-.27.53-.492l.071-.122-.125.024-.121.015.059-.168c.07-.214.07-.3 0-.562-.036-.117-.07-.254-.086-.3l-.02-.09-.101.074a.876.876 0 00-.122.097c-.035.055-.082-.004-.19-.25-.056-.129-.114-.238-.126-.238-.016 0-.062.039-.113.086l-.082.09.02-.09c.015-.059.007-.082-.012-.07-.016.011-.032.05-.032.09 0 .152-.054.152-.101.003-.028-.082-.055-.136-.067-.12zm.461.805c-.09.184-.156.375-.18.523l-.038.227-.051-.125a1.152 1.152 0 00-.137-.234c-.086-.098-.086-.106-.05-.332.054-.36.124-.555.25-.696l.116-.129.235.47zm-1.207.523c.39.41.524.57.457.547a1.089 1.089 0 01-.644-.476 1.053 1.053 0 01-.11-.192c0-.008.04-.015.082-.015.059 0 .13.047.215.136zm1.813.254c-.125.203-.203.282-.344.352l-.125.066.125-.14c.07-.079.164-.196.203-.258.063-.102.106-.137.207-.153.012 0-.015.06-.066.133zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M23.094 13.2a6.755 6.755 0 01-.051.241l-.031.121-.18-.171-.027.152c-.028.207.008.516.097.805.04.136.086.316.098.406.04.293.277.637.586.851.059.04.078.094.098.239l.027.183-.008-.175a4.816 4.816 0 00-.082-.524c-.098-.465-.07-.656.16-1.129l.164-.34.168.344c.227.453.25.61.13.98-.048.149-.102.29-.118.31-.016.023-.023.05-.016.066.008.015 0 .046-.015.07-.028.039-.032.035-.016-.016.016-.035-.031-.004-.105.082a.73.73 0 00-.141.207c-.016.055-.016.055.035-.007.031-.04.082-.11.113-.153.032-.043.07-.074.082-.062.047.023.094-.059.2-.356.144-.414.238-.578.437-.781.133-.133.266-.219.488-.328.168-.078.313-.149.317-.149.027 0-.067.555-.121.72a1.7 1.7 0 01-.371.597c-.133.125-.403.258-.653.328-.109.031-.207.066-.214.082-.02.027.234-.043.464-.129.34-.125.657-.457.79-.809.054-.152.18-.816.156-.84a1.26 1.26 0 00-.239.102l-.226.106.02-.211a2.83 2.83 0 01.054-.367c.04-.149.04-.153-.027-.133-.16.05-.446.226-.617.383l-.188.171.008-.296c.012-.196.004-.274-.016-.227a.64.64 0 00-.031.207c-.004.16-.07.477-.102.477-.011 0-.07-.09-.128-.207-.106-.196-.153-.25-.16-.168 0 .023-.032-.047-.071-.153a1.455 1.455 0 00-.164-.312l-.094-.121-.101.195-.121-.156a.873.873 0 00-.18-.192c-.05-.031-.063-.02-.078.086zm.218.097c.122.148.383.652.418.805l.02.078-.055-.078a2.265 2.265 0 00-.55-.5c-.082-.047-.086-.063-.063-.168.012-.063.031-.153.047-.204.008-.05.027-.085.039-.085.012.003.078.07.145.152zm.442.308c.094.196.113.317.062.395-.043.066-.304-.488-.277-.59.02-.07.027-.074.07-.039a.916.916 0 01.145.234zm-.563.102c.204.137.41.344.465.469.028.058.02.101-.031.203-.086.172-.137.52-.102.746.012.105.012.188 0 .188-.043 0-.273-.297-.378-.485-.207-.371-.36-.98-.31-1.25l.024-.121.07.059c.04.035.157.12.262.191zm1.922 0a4.168 4.168 0 00-.043.328c-.02.172-.023.18-.207.293a1.45 1.45 0 00-.324.293c-.074.098-.144.172-.156.16-.016-.004-.035-.082-.051-.164-.008-.082-.039-.199-.062-.258-.04-.097-.04-.117.023-.203.133-.187.7-.597.828-.597.008 0 .004.066-.008.148zm-1.71 1.559c.12.12.19.218.179.254-.008.043-.043.023-.172-.102-.176-.164-.316-.379-.348-.535-.019-.086-.007-.078.067.047.043.078.168.23.273.336zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M23.094 16.059c-.344.23-.637.714-.723 1.105-.008.098-.113.18-.098.172.016.047.114-.004.157-.16.082-.297.316-.832.617-1.043.094-.067.183-.121.2-.121.019 0 .023.12.019.277-.008.215-.032.316-.086.434-.098.195-.356.484-.535.59-.157.085-.168.125-.028.07.156-.059.528-.445.625-.653.051-.105.094-.21.094-.234 0-.02.035-.055.086-.074.117-.047.687-.188.7-.172.023.023-.22.54-.298.645-.12.156-.41.378-.554.425-.067.02-.211.098-.317.117-.117.024-.152.024-.285.04l-.113.066.11-.02c.062-.007.214-.027.335-.039.352-.125.484-.203.715-.379l.148-.128.285.015.235.02-.11.129c-.082.101-.168.203-.25.308-.07.094-.175.196-.23.227-.152.09-.488.164-.77.164-.253.004-.257 0-.386-.113-.13-.122-.18-.141-.2-.09-.003.015-.117.062-.238.11-.25.085-.304.066-.16-.071.055-.051.11-.051.223-.055 0 0 .242.055.246.004 0-.05-.242-.047-.242-.047-.114.008-.137.004-.051-.113.105-.067.148-.195.09-.168-.137.168-.23.238-.438.445-.203.14-.222.156-.496.23-.176.044-.469.09-.64.114-.336.039-.477.117-.153.059.16-.032.371-.055.637-.106.387-.094.414-.102.601-.203.157-.16.184-.18.102-.047-.031.098.02.094.324-.023.242-.094.246-.094.309-.036.058.063.058.067-.063.118-.258.105-.761.246-1.273.347-.293.063-.543.121-.55.133-.028.024.339-.031.417-.066.035-.012.305-.067.598-.137.289-.066.617-.172.734-.219.2-.078.23-.086.398-.054.215.039.57.015.829-.07.195-.067.332-.184.535-.47.082-.117.187-.242.23-.273l.082-.059-.277-.02a1.808 1.808 0 01-.293-.034c-.008-.008.008-.059.035-.113a4.47 4.47 0 00.145-.356l.097-.262-.113.024c-.059.008-.164.027-.223.035l-.113.023.05-.117c.024-.062.04-.117.032-.117a.439.439 0 00-.062.113c-.051.125-.118.149-.094.04.008-.051 0-.044-.04.03a.34.34 0 01-.136.133l-.144.051c-.051.027-.055.012-.043-.215.007-.156 0-.246-.024-.246a.696.696 0 00-.191.11zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M20.117 18.172c-.183.015-.555.074-1.176.176l-.628.097c-.024 0-.032.012-.024.028.008.011-.035.03-.098.039-.14.031-.3.164-.3.258 0 .09.105.187.18.168.05-.012.046-.016-.009-.02-.136-.008-.19-.172-.085-.27.09-.082.511-.207.75-.226.3-.024 1.175-.145 1.214-.172.016-.008.133-.035.258-.055.207-.035.168-.05-.082-.023zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M19.594 18.48c-.574.114-.93.204-1.102.293-.222.114-.191.122.047.012.11-.05.3-.105.422-.125.117-.02.383-.07.582-.113.203-.04.45-.09.543-.106l.176-.027-.145-.004c-.078 0-.312.031-.523.07zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M367.735 432.43c-1.574.423-2.519.95-9.131.423-4.513-.317-10.181-1.056-13.12-1.161-5.563-.106-5.563.316-15.534 7.073-6.927 4.751-15.953 4.435-22.67 2.957-3.989-1.795-5.773-2.218-5.143-1.267 1.154 1.9 9.026 4.434 13.33 4.434 7.136 0 12.28-1.795 20.78-7.074 6.508-4.117 9.447-4.54 18.473-2.428 10.601 2.006 12.176 1.161 20.887-2.745-2.624-.106-3.254 0-4.093.317 1.47-1.584 1.574-3.168 1.889-4.118.42-.634-.735.105-2.1 1.161-1.469.95-3.043 2.112-3.568 2.429zm0 0"
        transform="matrix(.03722 0 0 .037 8.841 2.29)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M353.986 429.791c-4.828-.739-8.187-1.372-11.23-1.056-3.464.423-5.878 2.112-9.867 4.646-4.093 2.534-7.767 4.434-8.186 4.434-.525 0-5.773 1.267-9.762 1.267-1.889 0-5.877-1.267-8.606-2.217-5.773-2.217-7.767 1.267-1.89 3.8 5.249 1.796 10.601 2.535 15.64 1.796 4.932-.74 9.656-2.957 13.434-5.807 7.662-5.596 3.149-2.85 6.192-4.223 3.044-1.267 5.878-.845 5.878-.845 3.989.211 11.86 1.478 15.849 1.584 7.347-.634 6.087-.634 8.501-2.006.84-.528 3.464-2.323 3.569-2.64.21-.422 1.47-2.745 1.154-2.85-7.452 5.173-11.125 5.173-20.676 4.117zm0 0"
        transform="matrix(.03722 0 0 .037 8.841 2.29)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M341.076 435.387c-1.05.422-4.303 2.323-7.137 4.012-6.193 3.8-11.965 5.596-18.788 5.596-3.043.528-16.478-8.552-15.009-8.13 1.26 3.8 7.347 8.869 13.12 9.502 3.989.74 6.612.211 11.02-.844 5.039-.528 7.138-2.851 9.027-4.224 4.303-3.273 11.86-5.384 13.96-5.384.944 0 4.723 2.111 8.92 2.956 4.094.95 6.088 1.161 10.392.422 4.303-.633 8.711-4.117 12.91-6.862-.735.21-2.205.21-4.199.21-5.877 3.485-15.848 4.857-21.096 2.43-5.353-1.268-10.496-.951-13.12.316zm0 0"
        transform="matrix(.03722 0 0 .037 8.841 2.29)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M17.273 9.453c-.406.133-.82.473-1.085.848-.06.078-.11.14-.118.133a3.98 3.98 0 01.07-.364c.047-.191.083-.383.079-.43 0-.074-.008-.07-.13.067-.151.172-.355.555-.433.816-.039.141-.054.301-.054.59v.403l-.075-.282c-.082-.3-.164-.507-.25-.613-.039-.055-.05-.059-.082-.016-.074.09-.02.489.082.786.012.035-.027-.016-.086-.114-.082-.156-.152-.172-.175-.172-.067 0-.012.344.03.477.032.094.032.094-.077-.031-.18-.207-.223-.223-.223-.078 0 .054.024.148.05.214.024.06.048.118.048.122a.47.47 0 01-.102.027c-.14.031-.203.059-.203.176 0 .129.098.449.14.476.051.032.083.004.114-.187l.039-.168.117.152c.168.227.422.738.551 1.121.137.406.14.489.016.239-.051-.102-.141-.25-.196-.336-.12-.172-.812-.907-.855-.907-.047 0 .02.25.105.434.043.09.168.266.274.394.11.125.187.23.18.23a.967.967 0 01-.169-.112c-.164-.125-.328-.22-.351-.2-.008.008.059.145.144.305l.133.285-.082-.011a.343.343 0 00-.172.02c-.058.03-.09.062-.09.214 0 .207.075.43.122.43.043 0 .125-.2.125-.309 0-.09.004-.086.164.07.226.223.52.621.832 1.047l.254.375-.297-.222c-.285-.211-.89-.555-.989-.555-.023 0-.043.031-.043.047 0 .015.204.203.434.426l.418.398-.219-.074c-.12-.04-.328-.121-.367-.11-.105-.004-.09.024.152.25.137.13.399.305.563.41.164.102.27.169.234.16-.293-.081-.746-.152-.746-.116 0 .046.246.222.403.304.085.04.304.13.488.192.37.132.598.25.785.418l.129.113-.227-.098c-.254-.117-.949-.351-1.03-.351-.079 0 .241.32.55.554.285.22.828.508 1.219.614.328.105.601.16 1.12.23.231.027.454.074.493.082.039.016.32.059.625.094.89.105 1.543.258 1.922.457.101.05.215.07.449.082.355.016.367.008.262-.188-.082-.16-.23-.242-.543-.3-.157-.032-.418-.082-.578-.118-.336-.07-.985-.183-1.805-.316-.879-.145-1.262-.297-1.676-.672-.613-.555-.933-1.45-.832-2.336.024-.187.035-.344.027-.351-.027-.028-.234.402-.289.593l-.054.211.011-.34c.024-.53.223-1.015.516-1.3a.438.438 0 00.113-.145c0-.012-.062-.004-.136.016-.094.02-.188.082-.305.199l-.164.168.074-.152c.121-.235.324-.473.52-.606l.183-.117-.097-.035c-.165-.086-.606.277-.817.613-.125.195-.117.137.008-.16.117-.293.3-.578.5-.793.11-.117.129-.16.086-.16-.164 0-.445.223-.68.535-.066.094-.066.086.008-.098.098-.218.246-.46.383-.617.098-.113.07-.129-.098-.055-.148.075-.39.348-.535.614-.066.12-.113.191-.105.156.011-.035.035-.129.05-.21a2.94 2.94 0 01.797-1.435c.149-.144.188-.203.149-.203-.121 0-.41.164-.598.344-.195.188-.2.188-.121.059.27-.457.672-.875 1.137-1.176.148-.094.27-.18.273-.191 0-.047-.488.101-.707.21-.055.032-.18.11-.285.192-.152.125-.145.14-.094.05.11-.152.469-.476.613-.55.11-.059.149-.11.094-.117-.144-.024-.582.226-.902.496l-.14.125.073-.13c.25-.413.57-.734.93-.968.129-.086.246-.172.266-.18.02-.007.035-.023.023-.035a.63.63 0 00-.262.047zm4.825 9.195a.39.39 0 01.086.11c0 .02-.07.031-.16.031-.157 0-.16-.004-.16-.09 0-.164.1-.183.234-.05zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#00a854"
        fillOpacity={1}
      />
      <Path
        d="M21.875 18.57c-.074.07-.043.215.043.239.137.035.312.023.312-.028 0-.047-.207-.242-.257-.242-.016 0-.07 0-.098.031zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#9eab05"
        fillOpacity={1}
      />
      <Path
        d="M17.45 9.414c-.34.059-.634.262-.895.48l-.059.06c-.016.023-.187.179-.293.327-.047.067-.125.16-.16.223.008-.063.05-.242.098-.45.05-.245.074-.44.066-.452-.031-.028-.266.28-.379.515-.172.336-.223.57-.223 1.055v.402l-.078-.308c-.086-.317-.23-.649-.297-.668-.023-.008-.046.039-.062.105-.02.106 0 .211.137.758.008.043-.028.004-.082-.094-.121-.215-.176-.246-.211-.222l.097.105c.051.074.137.238.196.375.156.379.39 1.176.351 1.215-.008.004-.027-.02-.043-.063-.015-.043-.062-.164-.101-.27a3.504 3.504 0 00-.192-.421c-.152-.281-.261-.59-.28-.805l-.02-.152c-.043.031-.028.219.039.426.03.11.054.195.05.195-.004 0-.074-.09-.16-.195-.113-.149-.16-.188-.183-.157-.028.047-.012.145.058.325l.043.125h-.105a.375.375 0 00-.164.039c-.055.039-.059.066-.028.238.04.21.09.363.13.367.062.004.062-.062.093-.246.012-.055.016-.086.039-.117.016.02.035.043.063.07.27.375.511.887.625 1.23.09.274.257.993.238 1.012-.008.012-.047-.109-.082-.27-.13-.546-.309-.87-.871-1.429 0 0-.196-.234-.352-.324.004.129.031.152.031.152.04.2.137.375.434.727.133.156.238.297.238.308 0 .012-.074-.05-.168-.132-.168-.153-.433-.325-.46-.297-.008.004.054.148.14.312.11.203.145.29.11.278-.126-.055-.173-.055-.25 0-.087.054-.087.058-.067.277.012.121.035.254.055.293.039.062.039.066.078-.012a.805.805 0 00.058-.199c.016-.066.036-.121.043-.121.012 0 .176.172.254.25.031.043.067.074.106.121.195.219.715.926.851 1.145l.067.109-.11-.086c-.363-.313-.957-.664-1.183-.734-.055-.012-.067.011-.051.035h-.004c.156.21.61.594.73.695.118.102.118.14.114.149-.008.003-.09-.036-.23-.086-.364-.13-.458-.133-.41-.075.023.028.077.047.128.047.188.004.66.215.988.438.211.144.72.633.785.761.036.07.024.067-.105-.043-.172-.14-.656-.418-.691-.394a.933.933 0 01-.25-.043 3.142 3.142 0 00-.418-.082l-.192-.023.114.105c.148.133.398.254.808.402.184.063.395.149.465.192.152.09.473.34.457.36a1.469 1.469 0 01-.262-.102 8.013 8.013 0 00-.992-.352c-.074-.016-.047.016.145.21.129.122.347.302.488.4.683.452 1.3.648 2.453.785.184.035.332.07.313.066-.012-.008.277.058.59.098.835.09 1.35.203 1.835.41.211.086.332.105.555.117.203 0 .281-.008.273-.047a.68.68 0 00-.191-.277c-.094-.082-.16-.125-.54-.192a4.642 4.642 0 01-.487-.093c-.028-.016-.512-.102-1.043-.196-1.188-.172-1.559-.265-1.88-.43-.788-.386-1.323-1.23-1.366-2.206a3.343 3.343 0 01.015-.579c.016-.125.031-.23.024-.234-.028-.031-.262.46-.301.652l-.035.125v-.226a2.166 2.166 0 01.422-1.309s.18-.176.203-.222v-.004c.004-.004.004-.004 0-.008-.004 0-.004 0-.004-.004-.125-.04-.266.066-.45.234-.113.117-.128.149-.136.137.008-.082.332-.582.398-.61 0 0 .078-.097.133-.113.04-.097-.2.121-.363.36-.375.508-.461 1.02-.442 1.699.004.21-.011.375-.011.375-.02 0-.114-.242-.164-.402-.121-.399.066-1.23.382-1.653.055-.07.188-.226.211-.261.043-.086-.218.214-.316.363-.023.047-.05.074-.059.062a.49.49 0 01.04-.136c.117-.352.324-.715.581-.996.098-.106.102-.106.02-.083-.187.055-.36.204-.547.418-.043.07-.086.106-.137.168-.007-.093.168-.441.329-.644.085-.121.168-.2.164-.227-.004-.027-.094 0-.223.102-.195.144-.309.297-.477.574-.078.156-.07.117-.097.149.09-.446.156-.66.3-.95.133-.261.262-.437.508-.699.172-.18.207-.23.149-.21-.192.054-.39.183-.574.366-.11.11-.153.145-.153.13 0-.02.055-.11.16-.274.223-.348.551-.707.883-.93.164-.113.422-.242.395-.262-.121 0-.207.043-.32.067-.227.07-.47.21-.715.402-.106.098-.082.016.152-.223.125-.128.305-.296.402-.351.16-.098.16-.106.059-.082-.242.047-.692.336-.84.484 0 0-.016.012-.02.012-.066.059-.144.145-.128.102.015-.047.054-.082.14-.223.258-.426.606-.734 1.047-1 .106-.066.113-.098.035-.09zm-2.438 1.73s.07.024.047.008c-.012-.011-.028-.027-.04-.023zm2.183-1.609c.004 0 .008 0 .008.004.008.008-.031.043-.094.078-.12.078-.52.477-.648.653a3.922 3.922 0 00-.461.835c-.059.153-.102.25-.102.227-.003-.074.09-.547.125-.672.008-.031.016-.062.02-.094.016-.007.039-.039.082-.105.05-.074.105-.149.164-.223.117-.129.219-.281.36-.386.21-.16.488-.32.546-.317zm-1.058.172c.004 0 .008 0 .008.004.003.02-.036.3-.11.625-.148.687-.254 1.223-.289 1.59-.02.226-.027.246-.047.148a7.044 7.044 0 01-.047-.695c-.023-.629.004-.816.164-1.164.09-.203.286-.504.32-.508zm.867.527c.012 0-.074.09-.188.2-.46.43-.796 1.011-.988 1.718l-.062.227.02-.211a6.25 6.25 0 01.054-.402c.031-.13.098-.34.168-.532.07-.191.137-.351.277-.496.031-.031.09-.097.113-.113.028-.027.082-.066.172-.137.13-.101.387-.254.434-.254zm.383.164c.011 0 .02.004.02.012 0 .004-.083.067-.184.133-.243.16-.696.637-.868.89-.156.231-.386.688-.488.977-.09.266-.086.121.012-.262.086-.335.305-.84.465-1.085l.093-.13c.043-.05.055-.074.075-.066.015.012.086-.035.164-.101.168-.141.605-.36.71-.368zm-2.157.243c.008-.004.02.011.04.039.023.03.082.18.136.328.149.422.344 1.539.285 1.601-.011.012-.02-.007-.02-.043 0-.035-.07-.293-.16-.566-.25-.777-.335-1.164-.304-1.305.012-.035.016-.054.023-.054zm1.657.691c.008 0-.067.078-.157.168-.433.441-.714 1.04-.82 1.746-.027.18-.062.336-.078.352-.016.015-.039-.059-.05-.16-.044-.336.07-.88.261-1.278.043-.09.047-.125.082-.18.023-.02.043-.066.082-.117.145-.16.383-.402.535-.472.074-.032.137-.059.145-.059zm-2.086.078l.066.082c.035.043.125.168.195.274.133.199.489.906.524 1.046.012.047-.031-.023-.098-.152a4.66 4.66 0 00-.332-.512c-.261-.347-.355-.515-.355-.64zm-.07.469h.03c.094 0 .294.176.47.418.203.277.437.86.55 1.351.055.254.149.899.149 1.043v.102l-.055-.098a1.674 1.674 0 01-.094-.363 6.535 6.535 0 00-.332-1.203c-.14-.363-.445-.879-.578-1.016a.338.338 0 00-.047-.035.53.53 0 00-.094-.094c-.07-.062-.07-.097 0-.105zm-.16.055l.077.046c.106.079.149.11.122.207a.71.71 0 01-.047.215c-.024.047-.051.012-.075-.09a3.3 3.3 0 01-.054-.253zm2.113.43c.007 0 .007.011-.008.034a1.613 1.613 0 00-.14.176c-.208.281-.505 1.055-.563 1.5-.032.23-.07.125-.075-.195-.007-.461.196-.977.508-1.293.13-.133.25-.223.278-.223zm-2.145.202c.027.004.121.094.332.313.2.203.414.453.477.555.12.21.25.515.28.675.017.09-.015.051-.198-.203a9.674 9.674 0 00-.383-.496c-.348-.406-.477-.605-.52-.805-.004-.027-.004-.043.012-.039zm2.379.086a3.4 3.4 0 01-.172.215c-.094.121-.226.32-.289.45-.129.257-.32.84-.387 1.203-.07.375-.078.367-.062-.047.027-.801.312-1.446.754-1.73.082-.048.148-.09.156-.09zm-2.348.575l.098.05c.055.028.184.121.289.211.105.09.211.16.227.145.015-.012.007-.02 0 0-.012.015.07.156.183.305.215.285.453.73.563 1.046a.72.72 0 01.05.2c0 .007-.097-.141-.21-.329-.243-.41-.532-.773-.739-.937-.113-.09-.195-.2-.308-.406zm2.535.421h.004c-.054.051-.175.188-.175.188a1.99 1.99 0 00-.414.805c-.075.332-.051 1.195.046 1.554.036.133.063.242.055.246-.02.024-.21-.511-.246-.695-.055-.281-.05-.937 0-1.16.063-.254.2-.547.324-.688.11-.125.309-.25.406-.25zm-2.46.114c.046 0 .105.027.195.086.344.218.777.797 1.277 1.703.403.73.633 1.281.305.73-.465-.781-1.223-1.82-1.524-2.136-.02-.016-.039-.036-.054-.051a1.742 1.742 0 00-.223-.192c-.129-.078-.133-.109-.023-.136.015-.004.03-.008.047-.004zm-.122.144a.12.12 0 01.082.047c.04.047.016.297-.03.324-.036.028-.052-.011-.079-.203-.02-.133-.012-.168.027-.168zm2.254.871l-.007.38c-.028.894.277 1.648.886 2.195.364.328.774.503 1.43.617.219.039.418.07.445.082.024.008.328.039.309.074-.012.012.02.02.062.008.13-.024.528.066.637.07.164.004 1.234.227 1.48.317.086.035.278.257.278.324 0 .02-.102.027-.281.011a1.321 1.321 0 01-.532-.136c-.414-.188-.992-.32-1.695-.383-.371-.04-1.55-.25-1.883-.309a4.15 4.15 0 01-1.11-.382c-.413-.204-.644-.36-.901-.606l-.207-.2.175.052c.52.152.938.34 1.465.672.414.261.55.328.777.386.207.055.266.059.266.024 0-.012-.105-.059-.234-.098-.899-.277-1.575-1.215-1.575-2.18 0-.16.016-.355.04-.433a3.34 3.34 0 01.175-.485zm-2.086.106c.016.004.032.012.047.015.188.028.953.516 1.211.778.09.09.211.254.27.363l.101.195-.175-.144a4.239 4.239 0 00-.399-.277c-.129-.075-.394-.313-.625-.536-.164-.156-.34-.324-.43-.394zm.524 1.355c.015 0 .039 0 .074.008.059.008.223.047.363.082.512.117 1.118.508 1.426.91l.14.18-.144-.074c-.074-.04-.137-.078-.129-.094.02-.031-.304-.3-.476-.395a5.374 5.374 0 00-.547-.23c-.395-.14-.625-.258-.703-.348-.02-.027-.024-.039-.004-.039zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M17.02 13.129c-.07.027-.18.129-.25.184-.141.105-.16.144-.024.046.098-.07.266-.195.414-.214.012 0-.058.074-.098.113-.054.062-.039.058.083-.024a.697.697 0 00.148-.109c0-.027-.152-.043-.273.004zm0 0M14.852 15.531c0 .082.984.817 1.03.774.005-.008-.124-.098-.288-.2a4.175 4.175 0 01-.489-.37c-.105-.098-.238-.255-.253-.204zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#cab313"
        fillOpacity={0.501961}
      />
      <Path
        d="M246.194 432.325c-5.563 1.69-12.91 2.006-16.373.634-1.26-.423-5.248-.106-6.193 0 3.569 2.428 2.1 1.372 2.834 1.9 1.26.739.735.633 3.044 1.584-.42.528-.63.633-2.414 1.267 2.414.633 5.458.844 8.291.739 2.94-.106 5.878-.634 8.712-1.478 3.778-1.056 7.872-1.795 9.026-1.795 1.155 0 5.353 1.267 9.447 3.484 8.501 4.645 14.484 5.912 20.466 5.912 4.199 0 8.502-.95 13.33-4.117 3.673-2.323.63-2.323-3.044-.74-4.933 2.007-15.114 2.851-26.87-3.167-7.136-3.695-12.699-5.807-14.693-5.701-.315 0-2.939.739-5.563 1.478zm0 0"
        transform="matrix(.03722 0 0 .037 8.841 2.29)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M219.85 429.474c1.47 1.267 1.26 1.478 3.778 3.59 3.569.317 10.706 1.056 13.33 1.056 2.309 0 6.822-.422 9.866-1.267 6.192-1.267 9.236-.95 20.572 4.118 13.12 6.757 20.571 5.49 27.289 2.217 9.446-3.59.21-2.112-3.15-3.062-1.154.422-2.623 1.795-5.247 2.85-3.779 1.373-5.773 1.268-10.286-1.055-2.834-1.373-5.353-2.112-7.977-3.484-2.519-1.478-3.148-1.373-7.347-2.745l-6.192-1.162-9.341-.528c-8.187 1.69-16.164.423-21.517-1.267-5.458-1.689-6.402-1.372-3.778.74zm0 0"
        transform="matrix(.03722 0 0 .037 8.841 2.29)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M244.305 436.865c-6.403 1.9-14.274 2.006-17.213.95-1.575.528 0-.105-3.884 1.373-5.038 1.689-5.038 1.689-2.938 2.322 1.364.423 6.402.74 11.335.634 8.502 0 9.341-.211 14.064-2.428 2.73-1.479 5.773-2.534 6.823-2.534 1.05 0 4.618 2.111 7.766 3.695 8.817 4.646 12.176 6.018 19.418 5.912 7.347-.105 19.312-8.13 20.466-9.924-5.562 1.9-12.804 8.024-19.837 7.707-7.137-.316-12.595-2.85-19.837-6.862-5.772-3.273-7.767-3.379-16.163-.845zm0 0"
        transform="matrix(.03722 0 0 .037 8.841 2.29)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M293.513 417.711c1.115-1.433.858-1.926-2.53-2.383-8.283-1.325-18.907-6.321-23.17-10.928-2.052-2.288-3.043-2.541-3.07-.67.005 1.934 6.797 8.096 11.662 10.56 4.193 2.274 11.646 4.758 14.49 4.72.864.007 1.917-.445 2.618-1.299zm0 0"
        transform="matrix(-.01312 -.02727 -.05654 .01421 46.378 19.525)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.807}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M290.71 421.402c.223-.397-.39-2.397-3.14-3.002-6.715-1.343-14.205-5.27-19.011-9.82-3.525-3.466-5.284-3.818-4.06-.647 1.64 4.524 14.315 10.98 19.273 12.523 4.99 1.606 6.238 2.076 6.938.946zm0 0"
        transform="matrix(-.01312 -.02727 -.05654 .01421 46.378 19.525)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.807}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M295.457 415.395l.827-1.436-4.033-2.518c-4.604-.59-12.923-3.634-18.556-6.748-2.465-1.432-5.217-2.59-6.08-2.597-1.566.018-1.598-.043.133 1.904 3.975 4.329 14.344 9.384 21.762 10.426 2.334.357 4.767 2.003 5.947.969zm0 0"
        transform="matrix(-.01312 -.02727 -.05654 .01421 46.378 19.525)"
        fillRule="nonzero"
        fill="#ed1c24"
        fillOpacity={1}
        strokeWidth={0.807}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M293.474 417.66c1.153-1.363.79-1.9-2.483-2.361-8.284-1.304-18.897-6.277-23.159-10.837-2.066-2.403-3.1-2.62-3.018-.742-.043 1.912 6.636 8.078 11.569 10.559 4.189 2.258 11.657 4.765 14.442 4.723.914.038 1.922-.443 2.65-1.341zm0 0"
        transform="matrix(.01484 -.02638 .0555 .0178 -6.36 17.822)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.807}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M288.96 420.627c.13-.246 1.283-1.61-1.363-2.24-6.703-1.373-14.182-5.214-18.902-9.793-4.302-4.62-6.402-5.537-4.182-.712 1.642 4.628 14.26 11.036 19.297 12.574 4.951 1.632 4.419 1.282 5.15.171zm0 0"
        transform="matrix(.01484 -.02638 .0555 .0178 -6.36 17.822)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.807}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M295.48 415.365l.82-1.416-4.058-2.503c-4.56-.61-12.97-3.64-18.512-6.802-2.546-1.36-5.263-2.534-6.177-2.57-1.456.037-1.621.01.123 1.937 3.976 4.355 14.338 9.396 21.839 10.416 2.32.365 4.776 2.03 5.964.938zm0 0"
        transform="matrix(.01484 -.02638 .0555 .0178 -6.36 17.822)"
        fillRule="nonzero"
        fill="#ed1c24"
        fillOpacity={1}
        strokeWidth={0.807}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M319.696 402.677c-6.348 1.789-11.469 5.862-16.698 13.108-2.008 2.917-4.048 4.779-2.661 5.473.95.181 2.998-1.47 5.747-4.199 7.022-6.987 12.38-10.223 19.936-10.36l5.987.018-1.76-2.479c-2.195-2.992-4.618-3.231-10.55-1.561zm0 0"
        transform="matrix(.0372 .0012 -.00119 .03698 9.379 2.123)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M269.261 405.041c-1.316 1.522-.88 2.036 2.602 2.557 8.653 1.306 19.741 6.547 24.2 11.369 2.51 2.982 4.213 3.667 3.594.729-.487-2.097-7.41-8.423-12.536-11.11-4.483-2.286-12.232-4.888-15.173-4.899-.839.027-1.98.486-2.687 1.354zm0 0"
        transform="matrix(.0372 .0012 -.00119 .03698 9.379 2.123)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M318.546 399.545c-1.661.582-4.044 1.61-5.387 2.286-3.611 2.018-8.973 8.423-9.88 9.614-.799 1.294-2.115 2.815-2.91 4.214-1.3 2.049-1.582 3.114-.945 3.305.737.082 2.179-.81 3.587-2.757 6.032-8.433 11.582-12.204 19.72-13.84 4.278-.876 4.908-.897 6.427.639 1.083 1.021-.322-.2-.555-.933-.585-1.882-1.98-2.788-4.619-3.231-1.265-.17-3.674.012-5.438.703zm0 0"
        transform="matrix(.0372 .0012 -.00119 .03698 9.379 2.123)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M271.938 403.37c-.2.324 1.926 1.1 4.568 1.65 6.66 1.37 14.134 5.248 18.902 9.848 3.58 3.582 5.092 4.906 4.223.709-1.617-4.596-14.32-11.053-19.304-12.582-4.987-1.635-7.586-.812-8.389.376zm0 0M320.477 407.405c-4.88 1.742-9.72 4.75-13.591 8.466-4.075 3.934-8.089 6.493-4.208 6.368.315-.01 2.776-1.885 4.305-3.307 7.054-6.037 19.862-9.408 25.493-7.371 2.656.97 1.408-1.947-.466-4.738-1.106-1.76-8.003-.693-11.533.582zm0 0M267.437 407.107l-3.364 3.172 4.96.79c5.063.683 14.304 3.977 20.506 7.474 2.778 1.495 5.867 2.874 6.812 2.844 1.678-.054 1.783-.058-.173-2.107-4.354-4.825-15.872-10.37-23.997-11.586-2.636-.338-3.417-1.792-4.744-.587zm0 0"
        transform="matrix(.0372 .0012 -.00119 .03698 9.379 2.123)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M304.516 422.353c-1.673 5.44-.628 6.677-.105 10.386 1.568-.124 2.3-.247 4.914-.247.21-2.102.105-1.484 0-4.08.419-3.71.419-2.35 2.614-5.317-2.3-.742-3.346-.247-7.423-.742zm0 0"
        transform="matrix(.03736 0 0 .0316 8.76 4.762)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M296.36 428.782c-.21 1.608 0 2.597.418 3.957 0 0 8.156.247 7.32 0 0 0-.523-3.091-.523-4.698.104-1.855.836-5.564.836-5.564l-3.555-.495c-.836-.247-2.196.248-3.241.371zm0 0"
        transform="matrix(.03736 0 0 .0316 8.76 4.762)"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <Path
        d="M291.027 428.782c.105 3.339-.522 2.72-.104 4.575 1.045.37 5.855-.618 5.855-.618-.209-1.113-.209-2.102-.209-3.091-.21-2.473 1.255-7.295 1.255-7.295l-3.555.247s-2.3-.618-3.764-.741c1.254 2.349.522 6.923.522 6.923zm0 0"
        transform="matrix(.03736 0 0 .0316 8.76 4.762)"
        fillRule="nonzero"
        fill="#d91023"
        fillOpacity={1}
        strokeWidth={0.904}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        stroke="#d4af37"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
    </Svg>
    </View>
 
  return (
    <View style={tw`flex h-full items-center justify-center bg-gray-900`}>
      <View style={tw`flex flex-row mt-50 mr-8`}>
        <View style={tw`flex flex-col`}>
          <View style={tw`ml-8 flex items-center justify-center`}>
            <Text style={tw`text-white text-lg text-center font-bold mb-2`}>
              Country
            </Text>
            <DropDownPicker
              style={tw`border-solid border-0 w-7/7 h-8 m-0 flex justify-center items-center bg-gray-800 rounded-md z-0`}
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
              containerStyle={tw`w-6/7`}
            />
          </View>
        </View>
        <View style={tw`flex flex-col`}>
          <View style={tw`flex items-center justify-center`}>
            <Text style={tw`text-white text-lg text-center font-bold mb-2`}>
              Top
            </Text>
            <DropDownPicker
              style={tw`border-solid border-0 w-7/7 h-8 m-0 flex justify-center items-center bg-gray-800 rounded-md z-0`}
              textStyle={tw`text-gray-600`}
              open={open2}
              value={value2}
              items={items2}
              min={1}
              max={1}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              arrowIconStyle={{ tintColor: "white" }}
              containerStyle={tw`w-6/7`}
            />
          </View>
        </View>
      </View>
      <View style={tw`w-70 mt-15 mb--10 border-b border-solid border-gray-400`}></View>
      <View>
        <ScrollView style={tw`mt-15 mb-45`}>
            {ranking?.map(player => {
                return(
                    <View key={(ranking?.findIndex((e)=>e.username===player.username)+1)}  style={tw`flex flex-row justify-center items-center bg-gray-700 mt-5 rounded-md p-3`}>
                        <View style={tw`w-1/6`}>
                            <Text style={tw`mr-5 text-white text-center font-bold`}> {`#${(ranking.findIndex((e)=>e.username===player.username)+1)}`} </Text>
                        </View>
                        <View style={tw`w-3/6`}>
                            <Text style={tw`mr-5 text-white text-center font-bold`}> {player.name} </Text>
                        </View>
                          <Text>{player.country}</Text>
                    </View>
                )
            })}
        </ScrollView>
      </View>
    </View>
  );
}
