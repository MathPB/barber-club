
module.exports = {
    async list(req, res, next) {
        const result = req.body;

        console.log(result);

        return res.json(result);
    },
};