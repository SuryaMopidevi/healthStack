const Query = require('../models/queryModel')
const Transaction = require ('../models/transactionModel')

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

module.exports.allQueries = async(req,res,next) => {
    try{
        const queries = await Query.find({})
        const queryArray = []
        for(let i=0; i<queries.length; i++){
            queryArray.push({...queries[i], id : i + 1})
        }
        // console.log(queryArray)
        return res.json(queryArray)
    }
    catch(err){
       next(err);
   }
}

module.exports.allTransactions = async(req,res,next) => {
    try{
        const transactions = await Transaction.find({})
        const transactionArray = []
        for(let i=0; i<transactions.length; i++){
            transactionArray.push({...transactions[i], id : i + 1})
        }
        // console.log(queryArray)
        return res.json(transactionArray)
    }
    catch(err){
       next(err);
   }
}