const RazorPay=require('razorpay');
const crypto=require('crypto');

module.exports.checkout=async function(req,res){
var instance = new RazorPay({
    key_id: 'rzp_test_Ao3jBTNOJ6GS1R',
    key_secret: 'YWoIvlPh0VmVlAVAKIE0Xjmk',
  });
 
//   console.log(req.body.amount);
  var options = {
    amount: req.body.amount*100,  // amount in the smallest currency unit
    currency: "INR"
  };
  instance.orders.create(options, function(err, order) {
    if(err){
        res.json({
            message:err
        })
    }
    return res.json({
        message:'order Created',
        order:order
    })
  });
}

module.exports.verify=async function(req,res){
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', 'YWoIvlPh0VmVlAVAKIE0Xjmk')
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature) {
        res.send({ code: 200, message: 'Sign Valid' });
    } else {

        res.send({ code: 500, message: 'Sign Invalid' });
    }
}