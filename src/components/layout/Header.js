import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import api from '../../services/api'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import { logout } from '../../store/actions/auth/authActions'

const Header = ({logout, auth}) => {
  
  const [cookies, setCookie, removeCookie] = useCookies(['auth'])
  const history = useHistory()

  const onLogout = () => {
    delete api.defaults.headers.Authorization
    removeCookie('auth')
    history.replace('/')
    logout()
  }

  return (
    <header className="relative lg:px-16 border-b-2 bg-grey-100">
      <div className="grid grid-cols-3 px-4 py-4 gap-10">
        <div className="flex items-center justify-start space-x-6"> 
          <Link to="/homes">
            <p
              className="mx-2 text-sm font-light hover:text-blue-500"
            >
              Homes
            </p>
          </Link>
          <Link to="/favorites">
            <p
              className="mx-2 text-sm font-light hover:text-blue-500"
            >
              Favorites
            </p>
          </Link>
          <Link to="/messages">
            <p
              className="mx-2 text-sm font-light hover:text-blue-500"
            >
              Messages
            </p>
          </Link>
        </div>
        <Link to="/">
          <div className="flex items-center justify-center">
            <img src={Logo} width="50px" alt="logo" />
            <h1 className="font-serif text-4xl px-4 font-large">Offer1</h1>
          </div>
        </Link>
        <div className="flex items-center justify-end">
          {auth.loggedIn ? 
            <button
              className="ml-4 text-sm font-light hover:text-blue-500 hover:cursor-pointer"
              onClick={onLogout}
            >
              Log out
            </button>
            :
            <Link to="/login">
              <p
                className="ml-4 text-sm font-light hover:text-blue-500"
              >
                Sign in
              </p>
            </Link>
          }
          
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({auth: state.auth})


export default connect(mapStateToProps, {logout})(Header)
