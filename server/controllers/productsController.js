const db = require("../config/firebase");

module.exports.create = async function (req, res) {
  try {
    const data = req.body.postData;
    const collection = db.collection("products");
    var resp = await collection.add(data);
    return res.json({
      message: "data added successfully",
    });
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllProducts = async function (req, res) {
  try {
    const collection = db.collection("products");
    const data = await collection.get();
    var list = [];
    data.forEach((doc) => {
      list.push({
        _id: doc.id,
        descricption: doc.data().descricption,
        ip: doc.data().ip,
        name: `${doc.data().category} ${doc.data().product} ${
          doc.data().species
        }`,
        price: doc.data().price,
        quantity: doc.data().quantity,
      });
      // console.log(list)
    });
    return res.json({
      message: "success",
      data: list,
    });
  } catch (error) {
    console.log(error.message);
  }
};
