const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const port = 3000;
var cors = require('cors')
app.use(cors());
 
// parse application/json
// app.use(bodyParser.json());
app.use(express.json());
 
//create database connection
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: "",
  database: 'bioskop_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

app.get('/', (req, res) => {
  res.send('Home page');
})
 
//tampilkan semua data product
app.get('/api/tikets',(req, res) => {
  let sql = "SELECT * FROM tiket1";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

//tampilkan semua data aksesoris
app.get('/api/snacks',(req, res) => {
  let sql = "SELECT * FROM snack";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

//Tampilan Produk di Tabel Product berdasarkan nama produk yang dicari user
app.get('/api/search-tikets', function(req, res) {

  let sql = "SELECT * FROM tiket1 WHERE nama_film LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tampilan Produk di Tabel Aksesoris berdasarkan nama produk yang dicari user
app.get('/api/search-barang', function(req, res) {

  let sql = "SELECT * FROM snack WHERE nama_snack LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tampilan Produk di Tabel Product berdasarkan harga yang dicari user
app.get('/api/search-price', function(req, res) {

  let sql = "SELECT * FROM tiket1 WHERE harga_tiket LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tampilan Produk di Tabel Aksesoris berdasarkan harga yang dicari user
app.get('/api/harga-snack', function(req, res) {

  let sql = "SELECT * FROM snack WHERE harga LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tambahkan data product baru pada tabel Product
app.post('/api/add-tikets',(req, res) => {
  const nama = req.body.nama_film;
  const jumlah = req.body.jumlah;
  const harga = req.body.harga_tiket;

  let data = {nama_film: req.body.nama_film, jumlah: req.body.jumlah, harga_tiket: req.body.harga_tiket};
  let sql = "INSERT INTO tiket1 (nama_film, jumlah, harga_tiket) VALUES (?, ?, ?)";
  let query = conn.query(sql, [nama, jumlah, harga], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Tambahkan data aksesoris baru pada tabel Product
app.post('/api/add-snacks',(req, res) => {
  const namaAkse = req.body.nama_snack;
  const jumlahAkse = req.body.jumlah;
  const hargaAkse = req.body.harga;

  let data = {nama_snack: req.body.nama_snack, jumlah: req.body.jumlah, harga: req.body.harga};
  let sql = "INSERT INTO snack (nama_snack, jumlah, harga) VALUES (?, ?, ?)";
  let query = conn.query(sql, [namaAkse, jumlahAkse, hargaAkse], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});
 
//Edit data product berdasarkan id
app.put('/api/tikets/:id',(req, res) => {

  const name = req.body.nama_film;
  const qty = req.body.jumlah;
  const price = req.body.harga_tiket;

  let sql = "UPDATE tiket1 SET nama_film=?, jumlah=?, harga_tiket=? WHERE tiket_id="+req.params.id;
  let query = conn.query(sql, [name, qty, price], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Edit data aksesoris berdasarkan id
app.put('/api/snacks/:nama',(req, res) => {
  const qty = req.body.jumlah;
  const price = req.body.harga;

  let sql = "UPDATE snack SET jumlah=?, harga=? WHERE nama_snack="+req.params.id;
  let query = conn.query(sql, [name, qty, price], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Delete data product berdasarkan id
app.delete('/api/tikets/:id',(req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM tiket1 WHERE tiket_id = ?";
  let query = conn.query(sql, id, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Delete data di tabel akesoris berdasarkan id
app.delete('/api/snacks/:nama',(req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM snack WHERE nama_snack = ?";
  let query = conn.query(sql, id, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        res.send(results);
    }
  });
});
 
//Server listening
app.listen(port,() =>{
  console.log(`Server started on port ${port}`);
});