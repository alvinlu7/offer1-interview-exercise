const ListingController = require('../controllers/ListingController')
const { Op } = require('sequelize')

exports.getHomes = async (req, res) => {
  console.log(req.user)
  let {
    city,
    priceMin,
    priceMax,
    bedroomsMin,
    bedroomsMax,
    bathroomsMin, 
    bathroomsMax,
    sqftMin,
    sqftMax
  } = req.query

  let where = {}

  if(city) {
    where['$property.address.city$'] = { 
      [Op.substring]: city 
    }
  }
  if(priceMin && priceMax) {
    where.price = { 
      [Op.between]: [Number.parseInt(priceMin), Number.parseInt(priceMax)] 
    }
  }
  if(bedroomsMin && bedroomsMax){
    where['$property.numberBedrooms$'] = { 
      [Op.between]: [Number.parseInt(bedroomsMin), Number.parseInt(bedroomsMax)] 
    }
  }
  if(bathroomsMin && bathroomsMax){
    where['$property.numberBathrooms$'] = { 
      [Op.between]: [Number.parseInt(bathroomsMin), Number.parseInt(bathroomsMax)] 
    }
  }
  if(sqftMin && sqftMax){
    where['$property.squareFeet$'] = { 
      [Op.between]: [Number.parseInt(sqftMin), Number.parseInt(sqftMax)] 
    }
  }

  try{
    const result = await ListingController.getListings(where, req.user)
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

exports.getFavorites = async (req, res) => {
  try{
    const result = await ListingController.getFavorites(req.user.userId)
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

exports.getHome = async (req, res) => {
  const { id  } = req.query
  try{
    const result = await ListingController.getListing(Number.parseInt(id))
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

exports.toggleSavedHome = async (req, res) => {
  const { id } = req.body
  try{
    const result = await ListingController.toggleSavedHome(Number.parseInt(id), req.user.userId)
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}