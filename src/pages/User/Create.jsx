import React from 'react';
import FormGroup from './components/FormGroup'

export default function CreateUser() {
  return (
    <div className="mx-2 md:mx-16 lg:mx-32">
      <h1 className="text-center text-xl">Create New User</h1>
      <div className="mt-6 w-full px-2 md:px-16 lg:px-32">
        <FormGroup name="first_name" label="First name" type="text" />
        <FormGroup name="last_name" label="Last name" type="text" />
        <FormGroup name="email" label="Email" type="text" />
        <FormGroup name="address" label="Address" type="text" />
      </div>
      <div className="text-center mt-6">
        <button className="mx-auto bg-blue-500 w-1/4 py-2 rounded">Submit</button>
      </div>
    </div>
  )
}