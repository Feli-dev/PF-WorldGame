import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
//utils
import validateEdit from "../utils/ValidateEdit";
//Actions
import { getAllCountries } from "../redux/contries/countriesActions";
import { getUser, postUser } from "../redux/users/userActions";
import capitalized from "../helpers/capitalized";

const EditUser = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();
  let allCountries = useSelector(
    (state) => state.countriesReducer.allCountries
  );
  let [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    country: "",
    premium: false,
    state: true,
    authorization: "",
  });

  let [error, setError] = useState({});

  useEffect(() => {
    const getUserById = async () => {
      const data = await dispatch(getUser(id));
      if (data) {
        const { points, state, games, stats, createdAt, ...userData } = data;

        setInput({
          ...userData,
          country: capitalized(userData.country),
          authorization: capitalized(userData.authorization),
        });
      }
    };
    getUserById();
  }, [id]);

  // console.log('input', input)
  // console.log('error', error)
  // console.log('contires', allCountries)
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function handleChange(event) {
    setInput((previus) => {
      return {
        ...previus,
        [event.target.name]: event.target.value,
      };
    });
    setError(
      validateEdit({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSelectCountry(event) {
    setInput({
      ...input,
      country: event.target.value,
    });
    setError(
      validateEdit({
        ...input,
        country: event.target.value,
      })
    );
  }

  function handleSelectType(event) {
    setInput({
      ...input,
      authorization: event.target.value,
    });
    setError(
      validateEdit({
        ...input,
        authorization: event.target.value,
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(input));
    alert("personaje creado");
    setInput({
      name: "",
      username: "",
      email: "",
      country: "",
      premium: false,
      state: true,
      authorization: "",
    });
    history.push("/dashboard");
  };

  return (
    <div className="container mx-auto">
      <div className="md:max-w-6xl md:mx-auto px-4 py-7">
        <div className="flex flex-col items-left justify-between mb-4">
          <h2 className="text-xl font-bold block text-gray-800">Edit User</h2>
          <h2 className="text-xs font-bold block text-gray-800">
            (*) Required field
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
            <div className="md:w-2/3 w-full px-2 py-4 justify-center m-auto">
              <h2 className="text-center font-bold text-3xl">Edit User</h2>
              <div className="p-2 w-2/2 block">
                <label htmlFor="name" className="text-sm text-gray-600">
                  * Full Name
                </label>
                <input
                  className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  value={input.name}
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
                {error.name && <span> {error.name}</span>}
              </div>
              {/* <div className="p-2 w-1/2 inline-block">
                <label htmlFor="name" className="text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  name="name"
                  placeholder="Guerrero"
                />
              </div> */}
              <div className="p-2">
                <label htmlFor="name" className="text-sm text-gray-600">
                  * Username
                </label>
                <input
                  className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  value={input.username}
                  name="username"
                  placeholder="UserName"
                  onChange={handleChange}
                />
                {error.username && <span> {error.username}</span>}
              </div>
              <div className="p-2">
                <label htmlFor="name" className="text-sm text-gray-600">
                  * Email
                </label>
                <input
                  className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  value={input.email}
                  name="email"
                  placeholder="example@correo.com"
                  onChange={handleChange}
                />
                {error.email && <span> {error.email}</span>}
              </div>
              <div className="p-2">
                <label
                  htmlFor="countries"
                  className="block mb-2  text-gray-600 "
                >
                  * Country
                </label>
                <select
                  id="countries"
                  className=" border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={(event) => handleSelectCountry(event)}
                  defaultValue="Choose a country"
                  value={input.country}
                >
                  <option disabled="Choose a country">Choose a country</option>
                  {allCountries &&
                    allCountries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                </select>
                {error.country && <span>{error.country}</span>}
              </div>
              <div className="p-2">
                <label
                  htmlFor="countries"
                  className="block mb-2  text-gray-600 "
                >
                  * User type
                </label>
                <select
                  id="userType"
                  className=" border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={(event) => handleSelectType(event)}
                  defaultValue="Type user"
                  value={input.authorization}
                >
                  <option disabled="Type user">Type user</option>
                  <option value="Pro-Admin">Pro-Admin</option>
                  <option value="Community-Admin">Community-Admin</option>
                  <option value="Enterprise-Admin">Enterprise-Admin</option>
                  <option value="User">User</option>
                </select>
                {error.authorization && <span>{error.authorization}</span>}
              </div>

              {Object.keys(error).length === 0 && (
                <div className="flex flex-col justify-center">
                  <input
                    type="submit"
                    className="bg-blue-500 w-1/2 my-3 mx-auto text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
                    value="Save Changes"
                  />
                </div>
              )}
              {/* <hr className="border-gray-200" /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
