const Query = require('../models/queryModel')

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