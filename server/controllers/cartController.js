const db = require("../config/firebase");

module.exports.add = async function (req, res) {
  try {
    const id = req.body.id;
    const email = req.body.email;
    const quantity = req.body.inputValue;
    // console.log(req.body);
    if (quantity > 0) {
      const snapsh = db.collection("users");
      var ref = await snapsh.where("email", "==", `${email}`).get();
      var fid;
      var cartArray = [];
      ref.forEach((doc) => {
        fid = doc.id;
        cartArray = doc.data().cartArray;
      });
      if (cartArray === undefined) {
        cartArray = [];
      }
      if (
        cartArray.find((uid) => {
          return uid === id;
        }) === undefined
      ) {
        cartArray.push({ id, quantity });
      }

      const docref = db.collection("users").doc(fid);
      await docref.update({ cartArray });

      return res.json({
        message: "success",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getCart = async function (req, res) {
  try {
    const email = await req.body.email;
    console.log(req.body);
    const snapsh = db.collection("users");
    var ref = await snapsh.where("email", "==", `${email}`).get();

    var temp = ref.docs[0];
    var array = await temp.data().cartArray;
    const collectio = db.collection("products");
    const data = await collectio.get();
    var list = [];
    data.forEach((doc) => {
      list.push({
        _id: doc.id,
        descricption: doc.data().descricption,
        ip: doc.data().ip,
        name: doc.data().name,
        price: doc.data().price,
        quantity: doc.data().quantity,
      });
    });
    var cart = [];
    var kt = 0;
    list?.sort();
    var n = array?.length;
    if (array[0] !== undefined) {
      array?.sort();
      list?.find((e) => {
        if (kt < n && e._id === array[kt].id) {
          cart.push({
            id: e._id,
            descricption: e.descricption,
            ip: e.ip,
            name: e.name,
            price: e.price,
            quantity: array[kt].quantity,
          });
          kt++;
        }
      });
    }
    // console.log(cart);
    return res.json({
      message: "success",
      cart: cart,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.updateUserCartItem = async function (req, res) {
  try {
    const data = req.body.postData;
    const docref = await db
      .collection("users")
      .where("email", "==", `${data.email}`)
      .get();
    let list = [];
    docref.forEach((doc) => {
      list.push(doc.id);
    });

    await db
      .collection("users")
      .doc(list[0])
      .update({ cartArray: data.cartArray });

    res.json({
      message: "cart updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
