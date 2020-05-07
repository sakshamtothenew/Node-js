var db = connect('localhost:27017/db')

var users = db.users.find();

var address1 = db.addresses.find();

var address2 = db.addresses.find().skip(50);



while (users.hasNext()) {
    var eachUser = users.next();
    var addr1 = address1.next();
    var addr2 = address2.next();
    var status = db.users.update({ _id: eachUser._id }, { $set: { addresses: [addr1._id, addr2._id] } })

}