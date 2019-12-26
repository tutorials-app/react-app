import React, { /* useEffect */ } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function User() {
  const users = useSelector(state => state.user.items);
  const dispatch = useDispatch()

  function handleDelete(id) {
    dispatch({ type: 'DELETE', payload: { id }})
  }

  return (
    <div className="mx-6">
      <div className="flex mx-10">
        <div className="flex-grow"></div>
        <div>
          <Link to="/users/create" className="bg-blue-500 px-4 py-2 rounded">Add</Link>
        </div>
      </div>
      <div className="mt-5">
        {users.map(user => (
          <div className="flex justify-center shadow py-2 pl-2 mt-2" key={user.id}>
            <div className="w-1/12">{user.id}</div>
            <div className="w-2/12">{user.first_name}</div>
            <div className="w-2/12">{user.last_name}</div>
            <div className="w-1/12">{user.gender}</div>
            <div className="w-3/12">{user.email}</div>
            <div className="w-2/12">{user.address}</div>
            <div className="w-1/12 text-sm">
              <Link to={`/users/${user.id}`} className="text-green-500 ml-1 border-r pr-1">Edit</Link>
              <button onClick={() => handleDelete(user.id)} className="text-red-500 ml-1">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}