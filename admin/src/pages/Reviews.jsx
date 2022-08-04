import React, { useState, useEffect } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import UserGraph from "../components/Graphs/UserGraph";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {
  deactivateUser,
  getAllUsers,
  reactivateUser,
  getByFilter,
  orderUsername,
  orderPoints,
  
} from "../redux/users/userActions";
import {getRevs, filterRev, readReview, unreadReview} from '../redux/reviews/reviewActions'

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import ModalMssg from "./ModalMssg";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Reviews = () => {
  const dispatch = useDispatch();
  const [modalMessage, setModalMessage] = useState(false);
  const [review, setReview] = useState({});
  const [inputFilter, setInputFilter] = useState("all");
  let [order, setOrder] = useState(""); //eslint-disable-line

  let allReviews = useSelector((state) => state.reviewReducer.reviews);
  // console.log('revs', allReviews)
  
  useEffect(()=>{
    dispatch(getRevs())
    
  },[dispatch])

  const setRead = (id) => {
    dispatch(readReview(id))
    setOrder(id + 'read')
    
  };

  const setUnread = (id) => {
    dispatch(unreadReview(id))
    setOrder(id + 'unread')
      
  };

  
  
  function filterRead(event) {
    setInputFilter(event.target.value);
    dispatch(filterRev(inputFilter))
    setOrder(event.target.value + 'select')
    
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    // dispatch(getByFilter(inputFilter));
    console.log('yei')
  };

  return (
    
    <div className="md:max-w-8xl md:mx-auto px-4 py-6 ">
      <div className="flex items-center justify-between mb-4 h-1/6">
        <button
          className="ml-1 text-2xl font-bold text-black hover:text-blue-600"
          
        >
          All Reviews
        </button>
      </div>
      <div className="flex mb-4 ml-2 w-full items-center">
        <label className="font-semibold p-1">Filters:</label>
        
          <select
            id="read"
            className="mx-2 p-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={(event) => filterRead(event)}
            defaultValue="Read/Unread"
          >
            <option disabled="Read/Unread">Read/Unread</option>
            <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
            
          </select>
          
        
      </div>
               
      <div className="overflow-x-auto bg-white rounded-lg shadow h-5/6">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Review
              </th>
              
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Username
              </th>
              
              <th className="x-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            
            {allReviews?.length > 0 &&
              allReviews.map((rev) => {
                const handleClickMssg = () => {
                  setReview(rev);
                  setModalMessage(true);
                };
                return (
                  <tr
                    key={rev.id}
                    className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 "
                  >
                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center  ">
                        <div
                          className=" cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                          onClick={handleClickMssg}
                        >
                          msg
                        </div>
                      </span>
                    </td>

                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center">
                        {rev.User.username}
                      </span>
                    </td>

                    <td className="border-t">
                      <div className="text-gray-700  flex items-center ml-4 text-center">
                        {true ? (
                          <RadioButtonUncheckedIcon
                            className="text-blue-500 cursor-pointer"
                            onClick={() => setRead(rev.id)}
                          />
                        ) : (
                          <CheckCircleOutlineIcon
                            className="text-green-500 cursor-pointer"
                            onClick={() => setUnread(rev.id)}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {allReviews?.length < 1 && (
          <h1 className="text-center px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl ">
            Sin reviews para mostrar 🥶
          </h1>
        )}
      </div>
      {modalMessage && (
        <ModalMssg review={review} setModalMessage={setModalMessage} />
      )}    
      
      
    </div>
  );
};

export default Reviews;