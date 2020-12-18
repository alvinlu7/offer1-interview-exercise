npx sequelize-cli model:generate --name listing --attributes state:string,price:integer,propertyId:integer,escrowCompanyId:integer,titleCompanyId:integer,listingAgentId:integer
npx sequelize-cli model:generate --name property --attributes propertyType:string,squareFeet:integer,numberBedrooms:integer,numberBaths:integer,description:text,ownerType:string,ownerId:integer,addressId:integer
npx sequelize-cli model:generate --name listingAgent --attributes licenseNumber:integer,licenseState:string,userId:integer
npx sequelize-cli model:generate --name titleCompany --attributes companyId:integer
npx sequelize-cli model:generate --name escrowCompany --attributes companyId:integer
npx sequelize-cli model:generate --name company --attributes name:string,phone:string,email:string,officerName:string,addressId:integer
npx sequelize-cli model:generate --name address --attributes addressLine1:string,addressLine2:string,city:string,state:string,zip:string
npx sequelize-cli model:generate --name owner --attributes userId:integer
npx sequelize-cli model:generate --name message --attributes message:text,senderId:integer,recieverId:integer
npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string,phone:string,online:boolean
npx sequelize-cli model:generate --name userCredentials --attributes password:string,userId:integer
npx sequelize-cli model:generate --name item --attributes name:string
npx sequelize-cli model:generate --name includedItem --attributes listingId:integer,itemId:integer
npx sequelize-cli model:generate --name excludedItem --attributes listingId:integer,itemId:integer
npx sequelize-cli model:generate --name savedListing --attributes listingId:integer,userId:integer

