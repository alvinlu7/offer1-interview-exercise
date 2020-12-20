import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/auth/authActions'
import { useCookies } from 'react-cookie'
import api from '../services/api'
import { useHistory, Link } from 'react-router-dom'

const Login = ({login, auth}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(' ')
  const history = useHistory()
  const [cookies, setCookie] = useCookies(['auth'])

  const onLogin = () => {
    if(!email || !password){
      setError('Email and password required')
      return
    }
    try{
      login(email, password)
    } catch(e){
      setError(e.message)
    }
    
  }

  useEffect(()=> {
    if(auth.error){
      setError(auth.error)
    }
  }, [auth.error])

  useEffect(()=> {
    if(auth.loggedIn){
      api.defaults.headers.Authorization = `${auth.tokenType} ${auth.token}`
      setCookie('auth', auth.auth, {
        maxAge: auth.auth.expiresIn,
        path: '/'
      })
      history.replace('/homes')
    }
  },[auth, setCookie, history])

  return(
    <div className="flex h-screen bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col shadow-2xl h-screen w-1/3 bg-gray-50">
        <p className="mt-48 mb-32 mx-auto font-serif text-4xl font-light text-gray-600">
          Sign in to get started
        </p>
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
          onKeyEnter={(event) => {
            if(event.key === 'Enter'){
              onLogin()
            }
          }}
        />
        <button
          className="mx-auto mb-4 rounded-md bg-yellow-500 text-white py-2 px-4 w-64 focus:opacity-90 focus:outline-none"
          onClick={onLogin}
        >
          Sign in
        </button>
        <p className="mx-auto font-sans text-sm mb-8 text-red-500">
          {error}
        </p>
        <p className="mt-16 mx-auto font-serif text-xl font-light text-gray-600">
          Don't have an account? 
          <Link to='/register'>
            <span className="text-blue-500"> Sign up now!</span>
          </Link>
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

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, {login})(Login)