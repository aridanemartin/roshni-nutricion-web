import React from 'react'
import './Input.scss'

const Input = ({ name, type, value, onChange, placeholder, error }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ borderColor: error ? 'red' : '' }}
      />
      {error && (
        <p className="input__error" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </>
  )
}

export default Input
