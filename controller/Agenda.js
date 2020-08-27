
module.exports = {
    
    async list(req, res, next) {
        console.log(req);
        const result = req.body;

        console.log(result);

        return res.json(result);
    },
};