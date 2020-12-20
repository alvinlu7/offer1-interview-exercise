import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ShareMenu from './ShareMenu'
import { AiFillHeart } from 'react-icons/ai'
import { toggleSaveHome } from '../../store/actions/home/homeActions'
const ActionCard = ({id, photoUrl, saved, price, address, status, bathrooms, bedrooms, sqft, toggleSaveHome}) => {
  
  if(id === 1){
    console.log(saved)
  }

  const [hovered, setHovered] = useState(false)

  let likeColor
  if(!saved && !hovered){
    likeColor = "white"
  }
  if(!saved && hovered){
    likeColor = "#ffcad1"
  }
  if(saved && !hovered){
    likeColor = "#ffa3af"
  }
  if(saved && hovered){
    likeColor = "pink"
  }

  let statusColor
  if(status === "Pending"){
    statusColor = "yellow-200"
  }
  if(status === "Active"){
    statusColor = "green-500"
  }
  if(status === "PreSale"){
    statusColor = "blue-500"
    status = "Pre-sale"
  }
  
  return (
    <div className="relative m-2">
      <Link to={`/home/${id}`}>
        <div className="flex h-full m-1 flex-col justify-between bg-white border-b-4 border-yellow-500 shadow-lg">
          <div className="h-32 overflow-hidden">
            <img src={photoUrl} className="w-full" alt="home"/> 
          </div>
          <div className="flex items-center justify-between p-1 mx-2 mt-1">
            <p className="font-sans text-xl">${price.toLocaleString()}</p>
            <p className="font-sans text-xs"> 
              <b>{bedrooms}</b> bds | <b>{bathrooms}</b> ba | <b>{sqft.toLocaleString()}</b> sqft
            </p>
          </div>
          <p className="font-sans text-xs font-bold mx-2 p-1">
            {address.addressLine1}, {address.addressLine2 ? `${address.addressLine2}, ` : null}{address.city}, {address.state} {address.zip}
          </p>
          <div className="flex items-center p-1 mx-2 mb-1 place-self-end">
            <span className={`h-2 w-2 rounded-full bg-${statusColor}`}></span>
            <p className="ml-2 font-sans text-xs">{status}</p>
          </div>
        </div>
      </Link>
      <div className="absolute right-12 top-4 opacity-100 bg-transparent">
        <ShareMenu link={`http://localhost:3000/home/${id}`}/>
      </div>
      <div className="absolute w-8 right-4 top-4 opacity-100 bg-transparent">
        <button
          className="bg-transparent focus:outline-none"
        >
          <AiFillHeart 
            color={likeColor} 
            size="sm" 
            onClick={() => toggleSaveHome(id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </button>
      </div>
    </div>
    
  )
}

export default connect(null, {toggleSaveHome})(ActionCard)