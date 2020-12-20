import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { useHistory } from 'react-router-dom'

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(' ')
  const history = useHistory()

  const onRegister = () => {
    if(!email || !password){
      setError('Email and password required')
      return
    }
    api.post('/register', {
      firstName,
      lastName,
      phone,
      email, 
      password
    })
      .then(res => {
        history.replace('/login')
      })
      .catch(error => setError(error.message))
  }

  return(
    <div className="flex h-screen bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col shadow-2xl h-screen w-1/3 bg-gray-50">
        <p className="mt-32 mb-24 mx-auto font-serif text-3xl font-light text-gray-600">
          Make an account to get started
        </p>
        <input
          className="mx-auto mb-2 rounded-md ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-64 px-4 py-2"
          type="name"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          className="mx-auto mb-2 rounded-md ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-64 px-4 py-2"
          type="name"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          className="mx-auto mb-2 rounded-md ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-64 px-4 py-2"
          type="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          className="mx-auto mb-2 rounded-md ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-64 px-4 py-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="mx-auto mb-8 rounded-md ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-64 px-4 py-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="mx-auto mb-4 rounded-md bg-yellow-500 text-white py-2 px-4 w-64 focus:opacity-90 focus:outline-none"
          onClick={onRegister}
        >
          Register
        </button>
        <p className="mx-auto font-sans text-sm mb-8 text-red-500">
          {error}
        </p>
      </div>
      <div className="flex flex-col h-screen w-2/3">
        <p className="mt-64 ml-32 mt-8 mb-2 font-serif text-5xl text-white font-medium">
          Reimagine home buying
        </p>
        <p className="mt-8 ml-48 mt-8 mb-2 font-serif text-4xl text-white font-medium">
          Every feature in one place for you
        </p>
        <p className="mt-8 ml-64 mt-8 mb-2 font-serif text-3xl text-white font-medium">
          Connecting buyers and sellers instantly
        </p>
      </div>
    </div>
  )
}

export default Register