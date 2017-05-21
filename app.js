var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	pg= require('pg'),
	app= express();
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

//Set Public Folder
app.use(express.static(path.join(__dirname,'public')));

//Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'group7', //env var: PGDATABASE
  password: '123', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

app.get('/',function(req,res){
	res.render('index');
});

app.get('/index.html',function(req,res){
	res.render('index');
});

app.get('/product.html',function(req,res){
	res.render('product');
});

app.get('/single.html',function(req,res){
	res.render('single');
});

app.get('/contact.html',function(req, res){
	res.render('contact');
});

app.get('/login.html',function(req, res){
	res.render('login');
});

app.get('/admin.html',function(req, res){
	res.render('admin');
});

app.get('/addproduct.html',function(req, res){
	res.render('addproduct');
});

app.get('/ManageCategory.html',function(req, res){
	res.render('ManageCategory');
});

app.get('/CategoryDetail.html',function(req, res){
	res.render('CategoryDetail');
});

app.get('/ManageProduct.html',function(req, res){
	res.render('ManageProduct');
});

app.get('/UploadProduct.html',function(req, res){
	res.render('UploadProduct');
});

app.get('/ManageUsers.html',function(req, res){
	res.render('ManageUsers');
});

app.get('/users.html',function(req, res){
	res.render('users');
});

app.get('/transactionhistory.html',function(req, res){
	res.render('transactionhistory');
});

app.get('/ManageOrder.html',function(req, res){
	res.render('ManageOrder');
});

app.get('/adminproduct.html',function(req, res){
	res.render('admin');
});

app.get('/grossrevenue.html',function(req, res){
	res.render('grossrevenue');
});

app.get('/soldproduct.html',function(req, res){
	res.render('soldproduct');
});

app.get('/market.html',function(req, res){
	res.render('market');
});

//Server
app.listen(3000,function(){
	console.log('Server started on port 3000');
});