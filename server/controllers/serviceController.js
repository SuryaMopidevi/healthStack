const Query = require('../models/queryModel')
const Transaction = require('../models/transactionModel')

module.exports.query = async (req, res, next) => {
    try {
        const { name, email, ques, sug } = req.body;
        const query = new Query({
            username: name,
            email,
            ques,
            sug
        });
        await query.save();
        return res.json({status: true})
    }
    catch(err) {
        next(err);
    }
}

module.exports.transaction = async (req, res, next) => {
    try {
        const { accountholder, phone, accountnumber, ifsc, amount, pincode, address } = req.body;
        const transaction = new Transaction({
            accountholder,
            phone,
            accountnumber,
            ifsc,
            amount,
            pincode,
            address
        });
        await transaction.save();
        return res.json({status: true})
    }
    catch(err) {
        next(err);
    }
}