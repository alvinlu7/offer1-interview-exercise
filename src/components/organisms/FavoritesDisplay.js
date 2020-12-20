import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getFavorites } from '../../store/actions/home/homeActions'
import HomeCard from '../molecules/HomeCard'
import { useHistory } from 'react-router'

const HomesDisplay = ({homes, getFavorites, auth}) => {
  const history = useHistory()

  useEffect(()=> {
    if(auth.loggedIn){
      getFavorites()
    }
    else{
      history.replace('/login')
    }
  },[auth, getFavorites, history])

  console.log(homes)
  return(
    <div className="min-h-screen">
      <div className="mr-2 pt-2 ml-2 grid grid-cols-5">
        {
          homes.favorites.length > 0 ?
          homes.favorites.map(home => (
            <HomeCard
              key={home.id}
              {...home}
            />
          )) :
          <p>
            No results found
          </p>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({auth: state.auth, homes: state.home.homes})

export default connect(mapStateToProps, {getFavorites})(HomesDisplay)