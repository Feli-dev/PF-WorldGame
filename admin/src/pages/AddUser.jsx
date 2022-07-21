import React from "react";

const AddUser = () => {
  return (
    <div class="container mx-auto">
      <div class="md:max-w-6xl md:mx-auto px-4 py-7">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-800">Add User</h2>
        </div>

        <form
          action="{{ route('profile.save') }}"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
            <div class="md:w-2/3 w-full px-2 py-4 justify-center m-auto">
              <h2 className="text-center font-bold text-3xl">New User</h2>
              <div class="p-2 w-1/2 inline-block">
                <label for="name" class="text-sm text-gray-600">
                  Name
                </label>
                <input
                  class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  value=""
                  name=""
                  placeholder="Andres"
                />
              </div>
              <div class="p-2 w-1/2 inline-block">
                <label for="name" class="text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  name="name"
                  placeholder="Guerrero"
                />
              </div>
              <div class="p-2">
                <label for="name" class="text-sm text-gray-600">
                  Username
                </label>
                <input
                  class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="text"
                  name="name"
                  placeholder="AndresG"
                />
              </div>
              <div class="p-2">
                <label for="name" class="text-sm text-gray-600">
                  Email
                </label>
                <input
                  class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="email"
                  name="name"
                  placeholder="correo@correo.com"
                />
              </div>
              <div className="p-2">
                <label for="countries" class="block mb-2  text-gray-600 ">
                  Country
                </label>
                <select
                  id="countries"
                  class=" border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div class="p-2">
                <label for="email" class="text-sm text-gray-600">
                  Password
                </label>
                <input
                  class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="password"
                  name="email"
                  value=""
                  placeholder="1234567"
                />
              </div>
              <div class="p-2">
                <label for="email" class="text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                  type="password"
                  name="email"
                  value=""
                  placeholder="1234567"
                />
              </div>
              <div className="flex flex-col justify-center">
                <input
                  type="submit"
                  class="bg-slate-500 w-1/2 my-3 mx-auto text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
                  value="Create User"
                />
              </div>
              {/* <hr class="border-gray-200" /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
