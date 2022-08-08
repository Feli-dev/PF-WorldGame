import React from "react";
import { useSelector } from "react-redux";

import PaysGraph from "../components/Graphs/PaysGraph";

// Icons

const Payment = () => {
  let allPays = useSelector((state) => state.payReducer.pays);

  return (
    <div className="md:max-w-7xl md:mx-auto px-4 py-7 min-h-screen">
      <div className="flex items-center justify-between mb-4 ml-2 h-1/8">
        <h2 className="text-2xl font-bold text-black hover:text-blue-600">All Payments</h2>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow h-4/8">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Payments ID
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Payment Date
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Amount
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                User
              </th>
            </tr>
          </thead>
          <tbody>
            {allPays?.length > 0 &&
              allPays?.map((pay) => {
                return (
                  <tr
                    key={pay.id}
                    className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 "
                  >
                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center">
                        {pay.payment.id}
                      </span>
                    </td>
                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center">
                        {pay.payment.createdAt.slice(0, 10)}
                      </span>
                    </td>

                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center">
                        {`$${pay.payment.amount} USD`}
                      </span>
                    </td>

                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                        {pay.username}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {allPays.length < 1 && (
          <h1 className="text-center px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl ">
            Sin pagos 🥶
          </h1>
        )}
      </div>
      <h1 className="text-center px-6 pt-3 mb-4 mt-2 text-gray-500 font-bold tracking-wider uppercase text-xl ">
        Users premium vs normal
      </h1>
      <div className="bg-white p-5 lg:p-10 rounded-lg" style={{ height: "600px" }}>
        <PaysGraph />
      </div>
    </div>
  );
};

export default Payment;
