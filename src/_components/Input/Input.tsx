import React from 'react'
import PropTypes from 'prop-types'
import '@components/Input/Input.scss'

const Input = ({ name, type, value, onChange, placeholder, error }) => (
    <>
      <input
        className="input"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{ borderColor: error ? 'red' : '' }}
        type={type}
        value={value}
      />
      {error && (
        <p className="input__error" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </>
  )

Input.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input
