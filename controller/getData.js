const models = require('../models/mongoDb');


module.exports = {
    async list(req, res, next) {
        try {
            if (!req) {
                const error = new Error('Not found params!');
                error.status = 400;
                throw error;
            }

            const {name, age, date, hour} = req.body;

            result = await models.listAgenda(name, age, date, hour);

            return res.json(result);
        } catch (e) {
            e.status = e.status || 500;
            return next(e);
        }
    }
}; 