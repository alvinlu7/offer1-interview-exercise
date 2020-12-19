import React from 'react'
import Splash from '../assets/images/splash.jpg'
import ActionCard from '../components/molecules/ActionCard'
import { Link } from 'react-router-dom'
import CardImage1 from '../assets/images/buy_home.png'
import CardImage2 from '../assets/images/sell_home.png'
import CardImage3 from '../assets/images/contact_sellers.png'


const Landing = () => {
  return(
    <div className="h-full">
      <div className="bg-black">
        <img className="w-full object-center opacity-80" src={Splash} alt="splash"/>
      </div>
      <div className="absolute inset-y-1/3 w-full h-5/6 flex flex-col">
        <p className="mx-auto mb-6 font-serif text-5xl text-white font-medium">Reimagine Home</p>
        <p className="mx-auto mb-8 font-sans text-lg text-white font-light ">We'll help you find a place you'll love</p>
        <Link className="mx-auto" to="/homes">
          <button className="bg-yellow-500 px-8 py-2 rounded-md text-white hover:opacity-90 focus:outline-none">
            Browse Homes
          </button>
        </Link>
      </div>
      <div className="relative flex flex-col bg-gray-50">
        <p className="mx-auto mt-8 mb-2 font-serif text-xl text-gray-600 font-bold">We have the most listings and constant updates</p>
        <p className="mx-auto mb-6 font-serif text-xl text-gray-600 font-bold">So you'll never miss out</p>
        <div className="flex flex-row justify-center space-x-2">
          <ActionCard 
            image={CardImage1}
            link="/homes"
            buttonText="See Homes"
            title="Buy a home"
            text="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
          />
          <ActionCard 
            image={CardImage2}
            link="/register"
            buttonText="Sign up"
            title="Save your favorites"
            text="Customize your search features and save listings for later that are right for you."
          />
          <ActionCard 
            image={CardImage3}
            link="/login"
            buttonText="Sign in"
            title="Message Agents Directly"
            text="Contact the listing agents for you favorite homes directly and skip the wait. See who's online and don't waste your time."
          />
        </div>
      </div>
    </div>
  )
}

export default Landing