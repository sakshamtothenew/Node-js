const { addItem,
    deleteItem,
    getItem,
    updateItem } = require('./Services')

const getItems = async (req, res) => {


    const data = await getItem();
    console.log(data)
    res.send(data)


}

const addItems = async (req, res) => {
    let data;
    const item = await getItem(req.body.name)
    console.log("thhis is item" , item)
    if (!item[0]._id)
        data = await addItem(req.body)
    else {
        data = await updateItem(item[0]._id, {...req.body.quantity})
    }
    console.log(data);
    res.send(data)
}

const deleteItems = async (req, res) => {

    const id = req.params.id;
    const data = await deleteItem(id);
    res.send(data);
}

const updateItems = async (req, res) => {
    const id = req.params.id;
    const data = await updateItem(id, req.body);
    console.log(data);
    res.send("this is updateRequest")
}


module.exports = {
    getItems,
    addItems,
    deleteItems,
    updateItems
}

