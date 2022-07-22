import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllUsers } from '../../../redux/users/userActions'

const User = () => {
  let dispatch = useDispatch()
  let allUsers = useSelector((state) => state.userReducer.users)
 
 
  useEffect(() => {
    console.log('entro')
    dispatch(getAllUsers())
  },[])

  console.log('usua', allUsers)
  // const despachar = () =>{
  //   dispatchgetAllUsers()
  // }
  return (
    <div>User
      <button>ddddd</button>
    </div>

  )
}

export default User