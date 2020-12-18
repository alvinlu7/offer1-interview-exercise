const address = require('../address')
const company = require('../company')
const escrowCompany = require('../escrowCompany')
const excludedItem = require('../excludedItem')
const includedItem = require('../includedItem')
const item = require('../item')
const listing = require('../listing')
const listingAgent = require('../listingAgent')
const message = require('../message')
const owner = require('../owner')
const property = require('../property')
const titleCompany = require('../titleCompany')
const user = require('../user')
const userCredentials = require('../userCredentials')
const ROWS_TO_CREATE = 100

try {
  address.generate(ROWS_TO_CREATE)
  company.generate(ROWS_TO_CREATE)
  escrowCompany.generate(ROWS_TO_CREATE)
  excludedItem.generate(ROWS_TO_CREATE)
  includedItem.generate(ROWS_TO_CREATE)
  item.generate()
  listing.generate(ROWS_TO_CREATE)
  listingAgent.generate(ROWS_TO_CREATE)
  message.generate(ROWS_TO_CREATE)
  owner.generate(ROWS_TO_CREATE)
  property.generate(ROWS_TO_CREATE)
  titleCompany.generate(ROWS_TO_CREATE)
  user.generate(ROWS_TO_CREATE)
  userCredentials.generate(ROWS_TO_CREATE)

  console.log("Successfully finished running fake data generation for all generators")
} catch (error){
  console.log(error)
}



