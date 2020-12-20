import React from 'react'
import HomesDisplay from '../components/organisms/HomesDisplay'
import HomeFilters from '../components/organisms/HomeFilters'
const Homes = () => {
  return(
    <div className="bg-gray-50 h-full">
      <HomeFilters />
      <HomesDisplay />
    </div>
  )
}

export default Homes