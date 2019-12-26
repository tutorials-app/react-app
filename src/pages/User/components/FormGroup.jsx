import React from 'react'

export default function FormGroup({ name, label, type, value, disable, onChange }) {
  return (
    <div className="mt-2 flex justify-center">
      <div className="w-32">
        <label className="text-gray-600" htmlFor={name}>{label}</label>
      </div>
      <div>
        <input type={type} name={name} className="border" value={value} disabled={disable} onChange={onChange}/>
      </div>
    </div>
  );
}