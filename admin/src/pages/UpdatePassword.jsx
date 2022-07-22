import React from "react";

const UpdatePassword = () => {
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
              <div className="md:w-2/3 w-full flex flex-col p-4 justify-center m-auto">
                <div className="py-2 px-16">
                  <label htmlFor="name" className="text-sm text-gray-600">
                    Current Password
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="text"
                    value=""
                    name=""
                    placeholder="123456"
                  />
                </div>
                <div className="py-2 px-16">
                  <label htmlFor="name" className="text-sm text-gray-600">
                    New Password
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="text"
                    value=""
                    name="name"
                    placeholder="1234567"
                  />
                </div>
                <div className="py-2 px-16">
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                    type="email"
                    name="email"
                    value=""
                    placeholder="1234567"
                  />
                </div>
                <input
                  type="submit"
                  className="bg-slate-500 w-1/2 my-3 mx-auto text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
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

export default UpdatePassword;
