db = connect('localhost:27017/db')

var addressData = db.users.aggregate([
    { $unwind: "$addresses" },
    {
        $lookup: {
            from: "addresses",
            localField: "addresses",
            foreignField: "_id",
            as: "addressData"

        }
    },
    { $unwind: "$addressData" },
    { $limit: 10 },
    { $skip: 5 }
])


var sortingUserData = db.users.aggregate([
    {$sort : {name : 1}} , 
    {$lookup : {
        from : "addresses",
        let : {addressIds : "$addresses"},
        pipeline : [
             {$match : {$expr : {$in : ["$_id" , "$$addressIds"]}}} , 
            {$sort : {city : 1}}
        ],
        as : "addressData"
    }} , 
    {$skip : 5},
    {$limit : 5}
    
])


var selectiveFields = db.users.aggregate([
    {$lookup : {
        from : "addresses",
        let : {addressIds : "$addresses"},
        pipeline : [
             {$match : {$expr : {$in : ["$_id" , "$$addressIds"]}}} , 
            {$sort : {city : 1}}
        ],
        as : "AddressData"
    }} ,
    {$unwind : "$AddressData"},
    {$project : {_id : 0 , UserID  : "$_id" , AddressData : 1}}
])


print('===============================QUESTION 1=====================================')


while (addressData.hasNext()) {
    var eachAddress = addressData.next()
   print(JSON.stringify(eachAddress))
}


print('========================QUESTION 2===============================================')



while (sortingUserData.hasNext()) {
    var eachAddress = sortingUserData.next()
    print(JSON.stringify(eachAddress))

}


print('===============================QUESTION 3=========================================')


while (selectiveFields.hasNext()) {
    var eachAddress = selectiveFields.next()
    print(JSON.stringify(eachAddress))

}


print('=====================================Question 4===================================')



db.addresses.createIndex({city : 1 , state  : 1})



var sortedAddress = db.addresses.aggregate([
    {$sort : {city : 1 ,  state : 1}}
])

while(sortedAddress.hasNext())
{
    var eachaddr = sortedAddress.next();
    print(JSON.stringify(eachaddr))
}