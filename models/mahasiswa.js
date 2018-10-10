const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mahasiswaSchema = Schema({
    nama: {
        type: String,
        required: true
    },
    hoby: {
        type: String,
        required: true
    },
    umur: {
        type: Number,
        required: true
    },
});
var mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);