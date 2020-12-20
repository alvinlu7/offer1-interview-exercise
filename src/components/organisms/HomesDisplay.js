import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getHomes } from '../../store/actions/home/homeActions'
import HomeCard from '../molecules/HomeCard'

const HomesDisplay = ({homes, getHomes, filters, auth}) => {

  useEffect(()=> {
    getHomes(filters)
  },[auth, getHomes, filters])

  console.log(homes)
  return(
    <div className="min-h-screen">
      <div className="pt-2 mr-2 ml-2 grid grid-cols-5">
        {
          homes.data.length > 0 ?
          homes.data.map(home => (
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

const mapStateToProps = (state) => ({auth: state.auth, homes: state.home.homes, filters: state.home.filters})

export default connect(mapStateToProps, {getHomes})(HomesDisplay)