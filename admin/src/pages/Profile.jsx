import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Components
import Alerta from "../components/Alerta";
import capitalized from "../helpers/capitalized";
import { updateUserAdmin } from "../redux/auth/authActions";

// Logo
import logo from "../assets/logo.png";

const Profile = () => {
  const dispatch = useDispatch();

  const { error, profile } = useSelector((state) => state.authReducer);

  const [user, setUser] = useState({
    email: profile.email,
    username: profile.username,
    name: profile.name,
  });

  const [errorForm, setErrorForm] = useState({
    emailError: false,
    usernameError: false,
    nameError: false,
  });

  const [infoForm, setInfoForm] = useState("");

  const { email, username, name } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && username === "" && name === "") {
      setErrorForm({
        emailError: true,
        nameError: true,
        usernameError: true,
      });
      return;
    } else if (email === "") {
      setErrorForm({
        emailError: true,
        nameError: false,
        usernameError: false,
      });
      return;
    } else if (name === "") {
      setErrorForm({
        emailError: false,
        nameError: true,
        usernameError: false,
      });
      return;
    } else if (username === "") {
      setErrorForm({
        emailError: false,
        nameError: false,
        usernameError: true,
      });
      return;
    }

    setErrorForm({
      emailError: false,
      nameError: false,
      usernameError: false,
    });

    const error = await dispatch(updateUserAdmin(user));

    if (!error) {
      setInfoForm({ message: "User updated successfully", error: false });

      setTimeout(() => {
        setInfoForm({ message: "", error: false });
      }, 3000);

      return;
    }
  };

  const { msg } = error;
  const { message } = infoForm;

  return (
    <>
      <div className="container mx-auto">
        <div className="md:max-w-6xl md:mx-auto px-4 py-7">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Account Settings
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
              <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide text-center">
                  Profile
                </h2>
                <div className=" clearfix flex flex-col ">
                  <span className="text-gray-700 px-6 py-4 flex items-center  ">
                    <div className=" cursor-pointer font-semibold float-left mx-auto w-40 h-40 text-5xl bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
                      {profile?.username.charAt(0).toUpperCase()} 
                    </div>
                  </span>
                  <div className="bg-gray-200 text-gray-500 text-xs  text-center mt-5 ml-3 font-bold px- py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                    <input
                      type="file"
                      name="photo"
                      className="absolute w-full h-full opacity-0 cursor-pointer text-center"
                    />{" "}
                    Chagen Image
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full flex flex-col p-4">
                {msg && <Alerta alerta={error} />}
                {message && (
                  <Alerta alerta={{ ...infoForm, msg: infoForm.message }} />
                )}
                <div className="py-3 px-16">
                  <label
                    htmlFor="name"
                    className={
                      errorForm.usernameError
                        ? "text-sm text-red-700"
                        : "text-sm text-gray-600"
                    }
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleChange}
                    className={
                      errorForm.usernameError
                        ? " mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-red-500 text-red-900"
                        : "mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-gray-300 text-gray-900"
                    }
                  />
                  {errorForm.usernameError && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Username is required</span>
                    </p>
                  )}
                </div>
                <div className="py-3 px-16">
                  <label
                    htmlFor="name"
                    className={
                      errorForm.nameError
                        ? "text-sm text-red-700"
                        : "text-sm text-gray-600"
                    }
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={capitalized(name)}
                    name="name"
                    onChange={handleChange}
                    className={
                      errorForm.nameError
                        ? " mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-red-500 text-red-900"
                        : "mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-gray-300 text-gray-900"
                    }
                  />
                  {errorForm.nameError && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Name is required</span>
                    </p>
                  )}
                </div>

                <div className="py-3 px-16">
                  <label
                    htmlFor="email"
                    className={
                      errorForm.emailError
                        ? "text-sm text-red-700"
                        : "text-sm text-gray-600"
                    }
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    className={
                      errorForm.emailError
                        ? " mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-red-500 text-red-900"
                        : "mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-gray-300 text-gray-900"
                    }
                  />
                  {errorForm.emailError && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Email is required</span>
                    </p>
                  )}
                </div>
                <input
                  type="submit"
                  className="bg-slate-500 w-1/2 mx-auto my-2 text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
                  value="Save"
                />
                {/* <hr className="border-gray-200" /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
