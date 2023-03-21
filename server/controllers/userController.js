const db = require("../config/firebase");

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

module.exports.getUser = async function (req, res) {
  try {
    const data = req.body.postData;
    console.log(data);
    const snapsh = db.collection("users");
    var ref = await snapsh.where("email", "==", `${data.email}`).get();
    var list = [];
    ref.forEach((doc) => {
      list.push(doc);
    });

    res.json({
      message: "success",
      list,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.updateUser = async function (req, res) {
  try {
    const data = req.body.postData;

    const docref = db.collection("users").doc(data._id);
    await docref.update({ data });

    res.json({
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
