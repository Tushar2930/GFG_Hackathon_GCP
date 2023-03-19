const db = require("../config/firebase");
// const firestore=firebase.firestore();

module.exports.create = async function (req, res) {
  try {
    const data = req.body.postData;
    const collection = db.collection("users");
    var resp = await collection.add(data);
    res.json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
  }
};
