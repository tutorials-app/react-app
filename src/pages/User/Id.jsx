import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import FormGroup from './components/FormGroup'

export default ({ match }) => {
  const { params: { userId }} = match
  const user = useSelector(state => state.user.item)
  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'GET', payload: {id: userId}})

  }, [dispatch, userId])

  const onChange = (e) => {
    dispatch({ type: 'ON_CHANGE', payload: { key: e.target.name, value: e.target.value }})
  }

  const onUpdate = () => {
    dispatch({ type: 'UPDATE' })
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/users" />
  }

  return (
    <div className="mx-2 md:mx-16 lg:mx-32">
      <h1 className="text-center text-xl">Update User</h1>
      <div className="mt-6 w-full px-2 md:px-16 lg:px-32">
        <FormGroup name="id" label="ID" type="text" value={user.id} disable={true}/>
        <FormGroup name="first_name" label="First name" type="text" value={user.first_name} onChange={onChange}/>
        <FormGroup name="last_name" label="Last name" type="text" value={user.last_name} onChange={onChange}/>
        <FormGroup name="email" label="Email" type="text" value={user.email} onChange={onChange}/>
        <FormGroup name="address" label="Address" type="text" value={user.address} onChange={onChange}/>
      </div>
      <div className="text-center mt-6">
        <button className="mx-auto bg-green-500 w-1/4 py-2 rounded" onClick={onUpdate}>Update</button>
      </div>
    </div>
  )
}