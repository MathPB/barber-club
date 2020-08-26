
module.exports = {
    async list(req, res, next) {
        try {
            if (!req) {
                const error = new Error('Not found params!');
                error.status = 400;
                throw error;
            }

            const result = req.body;


            return res.json(result);
        } catch (e) {
            e.status = e.status || 500;
            return next(e);
        }
    },

    async insert(req, res, next) {
        try {
            if (!req) {
                const error = new Error('Not found params!');
                error.status = 400;
                throw error;
            }

            const result = req.body;

            return res.json(result);
        } catch (e) {
            e.status = e.status || 500;
            return next(e);
        }
    }
}; 