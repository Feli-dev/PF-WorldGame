import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//utils
import validateAdd from "../utils/ValidateAdd";
//Actions
import { getAllCountries } from "../redux/contries/countriesActions";
import { postUser } from "../redux/users/userActions";

const AddUser = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let allCountries = useSelector(
    (state) => state.countriesReducer.allCountries
  );
  let [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
    country: "",
    premium: false,
    state: true,
    authorization: "",
  });

  let [error, setError] = useState({ active: true });

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
      validateAdd({
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
      validateAdd({
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
      validateAdd({
        ...input,
        authorization: event.target.value,
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(input))
      .then((res) => {
        alert("User created");
        history.push("/");
      })
      .catch((err) => {
        alert(`Error on creating user, verify credentials`);
        
      });
    setInput({
      name: "",
      username: "",
      password: "",
      repeatPassword: "",
      email: "",
      country: "",
      premium: false,
      state: true,
      authorization: "",
    });
  };

  return (
    <div className="container mx-auto">
      <div className="md:max-w-6xl md:mx-auto px-4 py-7">
        <div className="flex flex-col items-left justify-between mb-4">
          <h2 className="text-xl font-bold block text-gray-800">Add User</h2>
          <h2 className="text-xs font-bold block text-gray-800">
            (*) Required field
          </h2>
        </div>

        <form
          action="{{ route('profile.save') }}"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
            <div className="md:w-2/3 w-full px-2 py-4 justify-center m-auto">
              <h2 className="text-center font-bold text-3xl">New User</h2>
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
                {error.name && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {" "}
                    {error.name}
                  </span>
                )}
              </div>

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
                {error.username && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {" "}
                    {error.username}
                  </span>
                )}
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
                {error.email && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {" "}
                    {error.email}
                  </span>
                )}
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
                >
                  <option disabled="Choose a country">Choose a country</option>
                  {allCountries &&
                    allCountries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                </select>
                {error.country && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {error.country}
                  </span>
                )}
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
                >
                  <option disabled="Type user">Type user</option>
                  <option value="Pro-Admin">Pro-Admin</option>
                  <option value="Community-Admin">Community-Admin</option>
                  <option value="Enterprise-Admin">Enterprise-Admin</option>
                  <option value="User">User</option>
                </select>
                {error.authorization && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {error.authorization}
                  </span>
                )}
              </div>

              <div className="p-2">
                <label htmlFor="email" className="text-sm text-gray-600">
                  * Password
                </label>
                <input
                  className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="password"
                  value={input.password}
                  name="password"
                  placeholder="1234567"
                  onChange={handleChange}
                />
                {error.password && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {error.password}
                  </span>
                )}
              </div>
              <div className="p-2">
                <label htmlFor="email" className="text-sm text-gray-600">
                  * Confirm Password
                </label>
                <input
                  className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="password"
                  value={input.repeatPassword}
                  name="repeatPassword"
                  placeholder="1234567"
                  onChange={handleChange}
                />
                {error.repeatPassword && (
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    {error.repeatPassword}
                  </span>
                )}
              </div>
              {Object.keys(error).length === 0 && (
                <div className="flex flex-col justify-center">
                  <input
                    type="submit"
                    className="bg-blue-500 w-1/2 my-3 mx-auto text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
                    value="Create User"
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

export default AddUser;
