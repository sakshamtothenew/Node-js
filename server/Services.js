const itemModel = require('./model/item.model')


const convertDate = (date) => {

    return new Date(date)
} 
const addItem = async ({
    name,
    quantity,
    isSanitized,
    expirydate,
    category,
    location,

}) => {
    return new Promise((resolve, reject) => {
            const expiry = convertDate(expirydate);
        itemModel.create({
            name: name,
            quantity: quantity,
            isSanitized: isSanitized,
            expirydate : expiry,
            category: category,
            location: location
        }, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

const getItem = async (name) => {
    return new Promise((resolve, reject) => {
        if (!name) {
            itemModel.find()
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
        else {
            itemModel.find({ name: name })
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }


    })
}

const deleteItem = async (id) => {
    return new Promise((resolve, reject) => {
        itemModel.deleteOne({ _id: id })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}


const updateItem = async (id, updatingItems) => {
    return new Promise((resolve, reject) => {
        itemModel.updateOne({ _id: id }, { ...updatingItems })
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}
module.exports = {
    addItem,
    getItem,
    deleteItem,
    updateItem
}
