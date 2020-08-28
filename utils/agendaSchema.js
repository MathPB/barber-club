const mongoose = require('mongoose');

const agendaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    hour: {type: String, required: true},
    date: {type: Date, required: true},
});

module.exports = agendaSchema;