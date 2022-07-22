import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="md:max-w-6xl md:mx-auto px-4 py-7">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Account Settings</h2>
          </div>

          <form
            action="{{ route('profile.save') }}"
            method="POST"
       
          >
            <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
              <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">
                  Profile
                </h2>
                <div className=" clearfix flex flex-col ">
                  <img
                    className="rounded-full w-40 h-40 border-4 mt-2 border-gray-200 float-left mx-auto"
                    id="photo"
                    src="https://lh3.googleusercontent.com/ogw/AOh-ky3Ii6IooCwW2Wt4MSNICaWX-Y30xCQGon99Mga6=s64-c-mo"
                    alt="photo"
                  />
                  <div className="bg-gray-200 text-gray-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                    <input
                      type="file"
                      name="photo"
                     
                      className="absolute w-full h-full opacity-0 cursor-pointer"
                    />{" "}
                    Change Photo
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full flex flex-col p-4">
                <div className="py-5 px-16">
                  <label htmlFor="name" className="text-sm text-gray-600">
                    Username
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="text"
                    value=""
                    name="username"
                    placeholder="Andres G"
                  />
                </div>
                <div className="py-5 px-16">
                  <label htmlFor="name" className="text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="text"
                    value=""
                    name="name"
                    placeholder="Andres Guerrero"
                  />
                </div>
                <div className="py-5 px-16">
                  <label htmlFor="lastname" className="text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="text"
                    value=""
                    name="name"
                    placeholder="Andres Guerrero"
                  />
                </div>
                <div className="py-5 px-16">
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="email"
                    name="email"
                    value=""
                    placeholder="correo@correo.com"
                  />
                </div>
                <input
                  type="submit"
                  className="bg-slate-500 w-1/2 mx-auto text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
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
