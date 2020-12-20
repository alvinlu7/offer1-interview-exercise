import React, {useState} from 'react'
import { connect } from 'react-redux'
import { setCity, setPrice, setBedrooms, setBathrooms, setSqft } from '../../store/actions/home/filterActions'
import FilterMenu from '../molecules/FilterMenu'

const HomeFilters = ({setCity, setPrice, setBedrooms, setBathrooms, setSqft}) => {
  
  const [cityInput, setCityInput] = useState('')
  
  return(
    <div className="flex px-4 py-2 border-b-2 space-x-4 w-full">
      <input
        className="rounded-sm ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-64 px-2"
        placeholder="City"
        value={cityInput}
        onKeyDown={(event) => {
          if(event.key === "Enter"){
            setCity(cityInput)
          }
        }}
        onChange={(event)=>setCityInput(event.target.value)}
      />
      <FilterMenu
        type="Price"
        setValues={setPrice}
      />
      <FilterMenu
        type="Bedrooms"
        setValues={setBedrooms}
      />
      <FilterMenu
        type="Bathrooms"
        setValues={setBathrooms}
      />
      <FilterMenu
        type="Square Feet"
        setValues={setSqft}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({filters: state.home.filters})

export default connect(mapStateToProps, {setCity, setPrice, setBedrooms, setBathrooms, setSqft})(HomeFilters)