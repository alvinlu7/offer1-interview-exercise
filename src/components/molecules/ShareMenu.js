import React, { useState, useEffect, useRef } from 'react'
import { 
  FaShareAlt, 
  FaPinterest,
  FaTelegramPlane,
  FaTumblr
} from 'react-icons/fa'
import { 
  AiOutlineMail, 
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from 'react-icons/ai'

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

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

const FilterMenu = ({link}) => {

  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setOpen)

  return(
    <div ref={wrapperRef} className="mx-2 relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white bg-opacity-20 text-sm leading-5 font-medium text-yellow-500 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <FaShareAlt />
          </button>
        </span>
      </div>
      {open ? (
        <div className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg z-50">
          <div
            className="bg-white bg-opacity-80 shadow-xs p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex justify-between items-center space-x-1">
              <EmailShareButton url={link}><AiOutlineMail /></EmailShareButton>
              <FacebookShareButton url={link}><AiOutlineFacebook/></FacebookShareButton>
              <LinkedinShareButton url={link}><AiOutlineLinkedin/></LinkedinShareButton>
              <PinterestShareButton url={link}><FaPinterest/></PinterestShareButton>
              <TelegramShareButton url={link}><FaTelegramPlane/></TelegramShareButton>
              <TumblrShareButton url={link}><FaTumblr/></TumblrShareButton>
              <TwitterShareButton url={link}><AiOutlineTwitter/></TwitterShareButton>
              <WhatsappShareButton url={link}><AiOutlineWhatsApp/></WhatsappShareButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )

}

export default FilterMenu
