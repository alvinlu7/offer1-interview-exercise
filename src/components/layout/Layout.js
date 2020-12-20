import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { useCookies } from 'react-cookie'
import { updateLogin } from '../../store/actions/auth/authActions'
import api from '../../services/api'

const Layout = ({children, updateLogin, auth}) => {

  const [cookies, setCookie, removeCookie] = useCookies(['auth'])

  useEffect(()=> {
    if(cookies.auth && cookies.auth.tokenType && cookies.auth.tokenType){
      api.defaults.headers.Authorization = `${cookies.auth.tokenType} ${cookies.auth.token}`
      if(!auth.loggedIn){
        updateLogin(cookies.auth)
      }
    }
  },[auth, cookies, updateLogin])
  
  return(
    <div>
      <Header/>
        {children}
      <Footer/>
    </div>
    
  )
}

const mapStateToProps = state => ({auth: state.auth})


export default connect(mapStateToProps, {updateLogin})(Layout)