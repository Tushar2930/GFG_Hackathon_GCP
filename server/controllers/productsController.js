const db = require("../config/firebase");

module.exports.create = async function (req, res) {
  try {
    const data = req.body.postData;
    const collection = db.collection("products");
    await collection.add(data);
    res.json({
      message: "data added successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllProducts = async function (_, res) {
  try {
    const collection = db.collection("products");
    const data = await collection.isEqual({ name: "tanmay" });
    res.json({
      message: "data added successfully",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
