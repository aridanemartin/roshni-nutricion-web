import React from 'react'
import './Textarea.scss'

const Textarea = ({ name, value, onChange, placeholder, error }) => {
  return (
    <>
      <textarea
        className="textarea"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ borderColor: error ? 'red' : '' }}
      />
      {error && (
        <p className="textarea__error" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </>
  )
}

export default Textarea
