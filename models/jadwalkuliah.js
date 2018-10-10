const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jadwal_kuliahSchema = Schema({
    mk: {
        type: String,
        required: true
    },
    waktu: {
        type: Number,
        required: true
    },
    mahasiswa: {
        type: Schema.ObjectId,
        ret: 'mahasiswa'
    }
});
var jadwal_kuliah = module.exports = mongoose.model('jadwal_kuliah', jadwal_kuliahSchema);