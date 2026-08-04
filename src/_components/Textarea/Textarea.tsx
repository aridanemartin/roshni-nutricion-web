import React from 'react'
import PropTypes from 'prop-types'
import '@components/Textarea/Textarea.scss'

const Textarea = ({ name, value, onChange, placeholder, error }) => (
    <>
      <textarea
        className="textarea"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{ borderColor: error ? 'red' : '' }}
        value={value}
      />
      {error && (
        <p className="textarea__error" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </>
  )

Textarea.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Textarea
