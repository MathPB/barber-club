const schema = require('../utils/agendaSchema');

module.exports = {

    async listAgenda(name, age, date, hour) {
        const listSchema = new schema({
            name: name,
            age: age,
            date: date,
            hour: hour,
        });
        return listSchema;
    }

}