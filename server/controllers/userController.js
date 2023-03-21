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

module.exports.getAllUser = async function (req, res) {
  try {
    const snapsh = db.collection("users");
    var ref = await snapsh.get();
    var list = [];
    ref.forEach((doc) => {
      list.push({ _id: doc.id, email: doc.data().email });
    });
    console.log(list);

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
