import React, { useEffect, useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../redux/games/gamesAction";
import { getAllUsers } from "../redux/users/userActions";

// Icons




const Payment = () => {
    const dispatch = useDispatch()
    // let allPays = useSelector((state) => state.paysReducer.allPays)
    
    // useEffect(() => {
    //     //console.log('entro')
    //     dispatch(getAllPays())
    //     
    //   },[dispatch])

      
      
  return (
    <div className="md:max-w-7xl md:mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4 ml-2">
            <h2 className="text-xl font-bold text-gray-800">All Payments</h2>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
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
                Id Usuario
              </th>   
            </tr>
          </thead>
          <tbody>

{/* {allPays.length>0 && allPays.map((pay) =>{

            
            return (
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
            
            <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  {pay.id}
                </span>
              </td>  
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                {pay.createdAt.slice(0,10)}
                </span>
              </td>
              
              
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                {pay.amount}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                  {pay.idUser}
                </span>
              </td>
              
              
            </tr>
        )})} */}

          </tbody>
        </table>
           <h1 className="text-center px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl ">Sin pagos 🥶</h1> 
      </div>

      </div>
  );
};

export default Payment