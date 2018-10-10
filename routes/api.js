const express = require('express');
const app = express();
const router = express.Router();
const bodyp = require('body-parser');
const mahasiswa = require('../models/mahasiswa');
const jadwal_kuliah = require('../models/jadwalkuliah');

app.use(bodyp.json())
app.use(bodyp.urlencoded({ extended: true }))
router.route('/mahasiswa')
    .get(function (req, res) {
        mahasiswa.find(function (err, data) {
            if (err) res.send(err);
            res.json(data)
        })
    })
    .post(function (req, res) {
        var Mmahasiswa = new mahasiswa();
        Mmahasiswa.nama = req.body.nama;
        Mmahasiswa.hoby = req.body.hoby;
        Mmahasiswa.umur = req.body.umur;
        Mmahasiswa.save(function (err) {
            if (err) res.send(err);
            res.json({ message: "Sukses" })
        })
    })
// .delete(function (req, res) {
//     mahasiswa.remove(function (err) {
//         if (err) res.send(err)
//         res.json({ message: " di hapus" })
//     })
// })

router.route('/mahasiswa/:id')
    .get(function (req, res) {
        mahasiswa.find({ _id: req.params.id }, function (err, data) {
            if (err) res.send(err);
            res.json(data)
        })
    })
    .put(function (req, res) {
        let id = { _id: req.params.id };
        let userBaru = {};
        userBaru.nama = req.body.nama;
        userBaru.hoby = req.body.hoby;
        userBaru.umur = req.body.umur;
        mahasiswa.update(id, userBaru, function (err) {
            if (err) res.send(err);
            res.json({ message: "Sukses" })
        })
    })
    .delete(function (req, res) {
        mahasiswa.remove({ _id: req.params.id }, function (err) {
            if (err) res.send(err)
            res.json({ message: "id : " + req.params.id + " di hapus" })
        })
    })

router.route('/jadwal-kuliah')
    .get(function (req, res) {
        jadwal_kuliah.find(function (err, data) {
            if (err) res.send(err);
            res.json(data)
        })
    })
    .post(function (req, res) {
        var jadwalkuliah = new jadwal_kuliah();
        jadwalkuliah.mk = req.body.mk;
        jadwalkuliah.waktu = req.body.waktu;
        jadwalkuliah.save(function (err) {
            if (err) res.send(err);
            res.json({ message: "Sukses" })
        })
    })
// .delete(function (req, res) {
//     jadwal_kuliah.remove(function (err) {
//         if (err) res.send(err)
//         res.json({ message: " di hapus" })
//     })
// })

router.route('/jadwal-kuliah/:id')
    .get(function (req, res) {
        jadwal_kuliah.find({ _id: req.params.id }, function (err, data) {
            if (err) res.send(err);
            res.json(data)
        })
    })
    .put(function (req, res) {
        let id = { _id: req.params.id };
        let jadwalBaru = {};
        jadwalBaru.mk = req.body.mk;
        jadwalBaru.waktu = req.body.waktu;
        jadwal_kuliah.update(id, userBaru, function (err) {
            if (err) res.send(err);
            res.json({ message: "Sukses" })
        })
    })
    .delete(function (req, res) {
        jadwal_kuliah.remove({ _id: req.params.id }, function (err) {
            if (err) res.send(err)
            res.json({ message: "id : " + req.params.id + " di hapus" })
        })
    })

module.exports = router;