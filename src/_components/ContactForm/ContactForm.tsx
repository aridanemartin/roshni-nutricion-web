'use client'

import React, { useState } from 'react'
import '@components/ContactForm/ContactForm.scss'
import Input from '@components/Input/Input'
import Textarea from '@components/Textarea/Textarea'
import checkMark from '@assets/icons/check.webp'
import Image from 'next/image'

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isFatalError, setIsFatalError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: '',
  })

  const [formErrors, setFormErrors] = useState({
    email: '',
    message: '',
    name: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...formErrors }

    const fieldSpanishNames = {
      email: 'email',
      message: 'mensaje',
      name: 'nombre y apellidos',
    }

    // Check if each field is filled
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === '') {
        newErrors[
          field
        ] = `Por favor introduzca su ${fieldSpanishNames[field]}.`
        valid = false
      }
    })

    setFormErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/send-email', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setFormData({
        email: '',
        message: '',
        name: '',
      })
      setIsEmailSent(true)
    } catch {
      setIsFatalError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const renderButton = () => {
    if (isLoading) {
      return (
        <button disabled>
          <span className="contact-form__button-loader"></span>
        </button>
      )
    } else if (isEmailSent) {
      return (
        <button className="contact-form__button-email-sent" disabled>
          Enviado
          <span className="check">
            <Image alt="check" height={25} src={checkMark} width={25} />
          </span>
        </button>
      )
    } else if (isFatalError) {
      return (
        <p className="contact-form__email-error">
          El servicio de envío de emails no está disponible en este momento.
          Recuerde que puede contactarnos por teléfono o whatsapp.
        </p>
      )
    } else {
      return <button type="submit">Enviar</button>
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
         <div className='contact-form__addresses-container'>
        <p className='contact-form__addresses-title'>Reserva tu cita llamando al centro de tu elección o contactando directamente conmigo a través del siguiente formulario. </p>
        <div className='contact-form__addresses'>
        <address>
        <h3 className='contact-form__addresses-clinic'>HPS:</h3>
          <p>C/ León y Castillo, 407</p>
          <p>35007 Las Palmas de Gran Canaria.</p>
          <p>Teléfono:</p>
          <span><a href="tel:+34928499900">928 499 900</a></span>
        </address>
        <address>
        <h3 className='contact-form__addresses-clinic'>Cime:</h3>
          <p>C. Fernando Guanarteme, 28, Bajo</p>
          <p>35010 Las Palmas de Gran Canaria.</p>
          <span>Teléfono:</span> 
          <div className='contact-form__addresses-phones'>
          <span><a href="tel:+34928091419">928 091 419</a></span>
          <span><a href="https://wa.me/34635479745">635 479 745 (WhatsApp)</a></span>
          </div>
        </address>
        </div>
      </div>
      <Input
        error={formErrors.name}
        name="name"
        onChange={handleChange}
        placeholder="Nombre y Apellidos"
        type="text"
        value={formData.name}
      />
      <Input
        error={formErrors.email}
        name="email"
        onChange={handleChange}
        placeholder="email@ejemplo.com"
        type="email"
        value={formData.email}
      />
      <Textarea
        error={formErrors.message}
        name="message"
        onChange={handleChange}
        placeholder="Escribe aquí tu mensaje"
        value={formData.message}
      />
      {renderButton()}
      <p className="contact-form__privacy">
        Utilizaremos sus datos únicamente para responder consultas y realizar
        análisis estadísticos. Para más información sobre el tratamiento y sus
        derechos, consulte la política de privacidad
      </p>
    
    
    </form>
  )
}

export default ContactForm
