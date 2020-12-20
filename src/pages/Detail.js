import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getHome } from '../store/actions/home/homeActions'

const Detail = ({home, getHome}) => {
  const { id } = useParams()

  useEffect(()=> {
    getHome(id)
  },[getHome, id])

  let statusColor
  switch(home.state) {
    case 'Pending': {
      statusColor = "yellow-100"
      break;
    }
    case 'Active': {
      statusColor = "green-500"
      break;
    }
    case 'PreSale': {
      statusColor= "blue-500"
      home.status = "Pre-sale"
      break;
    }
    default: break;
  }

  console.log(home)
  if(!home.property) return null
  return(
    <div className="flex flex-col bg-gray-50">
      <div className="flex flex-col mx-auto bg-white shadow-lg w-1/2 pb-8">
        <img className="w-full" src={home.property.primaryImageUrl} alt="home" />
        
        <div className="flex items-center justify-between p-1 mx-4 mt-2">
          <p className="font-sans text-3xl">${home.price.toLocaleString()}</p>
          <p className="font-sans text-base"> 
            <b>{home.property.numberBedrooms}</b> bds | <b>{home.property.numberBathrooms}</b> ba | <b>{home.property.squareFeet.toLocaleString()}</b> sqft
          </p>
        </div>
        <p className="font-sans text-base font-light mx-4 p-1">
          {home.property.address.addressLine1}, {home.property.address.addressLine2 ? `${home.property.address.addressLine2}, ` : null}{home.property.address.city}, {home.property.address.state} {home.property.address.zip}
        </p>

        <div className="flex items-center p-1 mx-4 mb-1 place-self-end">
          <span className={`h-2 w-2 rounded-full bg-${statusColor}`}></span>
          <p className="ml-2 font-sans text-xs">{home.state}</p>
        </div>
        <button
          type="button"
          className="w-5/6 mx-auto my-4 rounded-md px-4 py-1 bg-yellow-500 text-base font-light text-white hover:opacity-90 focus:outline-none"
        >
          Contact Agent
        </button>

        <p className='font-sans mt-4 mx-4 p-1 text-xl font-medium text-gray-600'>
          Overview
        </p>
        <p className='font-sans mx-4 p-1 text-base font-light'>
          {home.property.description}
        </p>

        <p className='font-sans mt-4 mx-4 p-1 text-xl font-medium text-gray-600'>
          Facts and Features
        </p>
        <p className='font-sans mx-4 p-1 text-lg text-gray-600'>
          Included Items
        </p>
        {home.includedItems.map(includedItem => (
          <p className='font-sans mx-4 p-1 text-base font-light'>
            {includedItem.item.name}
          </p>
        ))}
        <p className='font-sans mx-4 p-1 text-lg text-gray-600'>
          Excluded Items
        </p>
        {home.excludedItems.map(includedItem => (
          <p className='font-sans mx-4 p-1 text-base font-light'>
            {includedItem.item.name}
          </p>
        ))}

        <p className='font-sans mt-4 mx-4 p-1 text-xl font-medium text-gray-600'>
          Listing Agent
        </p>
        <p className="font-sans mx-4 p-1 font-medium">
          {home.listingAgent.user.firstName} {home.listingAgent.user.lastName}
        </p>
        <p className="font-sans text-sm mx-4 p-1 font-light">
          {home.listingAgent.user.email} <br/>
          {home.listingAgent.user.phone} <br/>
        </p>
        <p className="font-sans text-xs mx-4 p-1 font-light">
          License Number: {home.listingAgent.licenseNumber} <br/>
          License State: {home.listingAgent.licenseState}
        </p>

        <p className='font-sans mt-4 mx-4 p-1 text-xl font-medium text-gray-600'>
          Title Company
        </p>
        <p className="font-sans mx-4 p-1 font-medium">
          {home.titleCompany.company.name}
        </p>
        <p className="font-sans text-sm mx-4 p-1 font-light">
          {home.titleCompany.company.officerName} <br/>
          {home.titleCompany.company.email} <br/>
          {home.titleCompany.company.phone} <br/>
        </p>

        <p className='font-sans mt-4 mx-4 p-1 text-xl font-medium text-gray-600'>
          Escrow Company
        </p>
        <p className="font-sans mx-4 p-1 font-medium">
          {home.escrowCompany.company.name}
        </p>
        <p className="font-sans text-sm mx-4 p-1 font-light">
          {home.escrowCompany.company.officerName} <br/>
          {home.escrowCompany.company.email} <br/>
          {home.escrowCompany.company.phone} <br/>
        </p>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({home: state.home.homes.home})

export default connect(mapStateToProps, {getHome})(Detail)