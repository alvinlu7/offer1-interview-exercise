const db = require('../../database/models')
const Listing = db.listing
const Property = db.property
const Address = db.address
const SavedListing = db.savedListing
const EscrowCompany = db.escrowCompany
const TitleCompany = db.titleCompany
const ListingAgent = db.listingAgent
const Item = db.item
const IncludedItem = db.includedItem
const ExcludedItem = db.excludedItem
const User = db.user
const Company = db.company



module.exports = {
  getListings: async (where, user) => {
    const listings = await Listing.findAll({
      attributes: ['id','price', 'state'],
      where,
      include:[
        {
          model: Property,
          as: 'property',
          include: [
            {
              model: Address,
              as: 'address'
            }
          ]
        }
      ]
    })

    let savedListings = []

    if(user){
      const listingIds = listings.map(listing => listing.id)
      const saved = await SavedListing.findAll({
        where:{
          listingId: listingIds,
          userId: user.userId
        }
      })
      savedListings = saved.map(save => save.listingId)
      console.log(savedListings)
    }
    

    const results = listings.map(listing => {
      return {
        id: listing.id,
        photoUrl: listing.property.primaryImageUrl,
        saved: savedListings.includes(listing.id),
        price: listing.price,
        address: listing.property.address,
        status: listing.state,
        bedrooms: listing.property.numberBedrooms,
        bathrooms: listing.property.numberBaths, 
        sqft: listing.property.squareFeet
      }
    })

    return results
  },

  getListing: async (id) => {
    const listing = await Listing.findByPk(id, {
      include:[
        {
          model: Property,
          as: 'property',
          include: [
            {
              model: Address,
              as: 'address'
            }
          ]
        },
        {
          model: EscrowCompany,
          as: 'escrowCompany',
          include:[
            {
              model: Company,
              as: 'company'
            }
          ]
        },
        {
          model: TitleCompany,
          as: 'titleCompany',
          include:[
            {
              model: Company,
              as: 'company'
            }
          ]
        },
        {
          model: ListingAgent,
          as: 'listingAgent',
          include:[
            {
              model: User,
              as: 'user'
            }
          ]
        },
        {
          model: IncludedItem,
          as: 'includedItems',
          include:[
            {
              model: Item,
              as: 'item'
            }
          ]
        },
        {
          model: ExcludedItem,
          as: 'excludedItems',
          include:[
            {
              model: Item,
              as: 'item'
            }
          ]
        },
      ]
    })

    return listing
  },

  getFavorites: async (userId) => {
    const savedListings = await SavedListing.findAll({
      where:{
        userId
      },
      include:[
        {
          model: Listing,
          as: 'listing',
          include:[
            {
              model: Property,
              as: 'property',
              include: [
                {
                  model: Address,
                  as: 'address'
                }
              ]
            } 
          ]
        }
      ]
    })

    const results = savedListings.map(saved => {
      const { listing } = saved
      return {
        id: listing.id,
        photoUrl: listing.property.primaryImageUrl,
        saved: true,
        price: listing.price,
        address: listing.property.address,
        status: listing.state,
        bedrooms: listing.property.numberBedrooms,
        bathrooms: listing.property.numberBaths, 
        sqft: listing.property.squareFeet
      }
    })
    console.log(results)
    return results
  },

  toggleSavedHome: async (listingId, userId) => {
    
    const savedListing = await SavedListing.findOne({
      where: {
        listingId,
        userId      
      }
    })

    if(!savedListing){
      await SavedListing.create({listingId, userId})
    }
    else{
      await SavedListing.destroy({
        where: {
          listingId,
          userId
        }
      })
    }
  },
}