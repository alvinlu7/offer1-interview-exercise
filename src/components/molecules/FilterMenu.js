import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { openMenu } from '../../store/actions/home/filterActions'

const useOutsideAlerter = (ref, setOpen) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setOpen])
}

const FilterMenu = ({type, setValues, openMenu, filters}) => {

  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setOpen)
  const [min, setMin] = useState(null)
  const [max, setMax] = useState(null)

  return(
    <div ref={wrapperRef} className="mx-2 relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-yellow-500 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => {
              setOpen(!open)
              openMenu(type)
            }}
          >
            {type}
          </button>
        </span>
      </div>
      {open && filters.openMenu === type ? (
        <div className="origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg z-50">
          <div
            className="bg-white shadow-xs p-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p className="text-sm text-bold my-1">{type} Range</p>
            <div className="flex my-2 justify-between w-56 items-center">
              <input
                className="rounded-sm ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-24 px-2"
                type="number"
                placeholder="Min"
                value={min}
                onChange={(event) => setMin(event.target.value)}
              />
              <p>  -  </p> 
              <input
                className="rounded-sm ring-yellow-500 border-2 focus:ring-2 focus:outline-none w-24 px-2"
                type="number"
                placeholder="Max"
                value={max}
                onChange={(event) => setMax(event.target.value)}
              />
            </div>
          </div>
          <div className="w-full h-12 bg-yellow-500 flex items-center">
            <button
              type="button"
              className="ml-auto mr-4 rounded-md px-4 py-1 bg-white text-sm leading-5 font-medium text-yellow-500 hover:opacity-90 focus:outline-none h-6"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => {
                setOpen(!open)
                setValues(min, max)
              }}
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )

}

const mapStateToProps = (state) => ({filters: state.home.filters})


export default connect(mapStateToProps, {openMenu})(FilterMenu)
