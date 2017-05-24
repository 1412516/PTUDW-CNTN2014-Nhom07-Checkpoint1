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

var urlencodedParser = bodyParser.urlencoded({extended: false});

const pool = new pg.Pool(config);

app.get('/index.html',urlencodedParser,function(req,res){
		if(!req.query.txtSearch){
		pool.connect(function(err, client, done) {
		  if(err) {
		    return console.error('error fetching client from pool', err);
		  }
		  //use the client for executing the query
		  client.query("SELECT * FROM products WHERE status ='hot'", function(err, result) {
		    //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
		    done(err);

		    if(err) {
		      return console.error('error running query', err);
		    }
		    res.render('index',{list_hot:result});
		 	});
		 });
	} else{
		pool.connect(function(err, client, done) {
		  if(err) {
		    return console.error('error fetching client from pool', err);
		  }

		  var txt = req.query.txtSearch;
		  //use the client for executing the query
		  client.query("SELECT * FROM products WHERE type LIKE '%"+txt+"%' OR material LIKE '%"+txt+"%'", function(err, result) {
		    //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
		    done(err);

		    if(err) {
		      return console.error('error running query', err);
		    }
		    console.log(txt);
		    res.render('search',{list_search:result});
		   
		    //res.send("fine!!!");
		 	});
		 });
	}
});

app.get('/copper.html',function(req,res){
	pool.connect(function(err, client, done) {
		  if(err) {
		    return console.error('error fetching client from pool', err);
		  }

		  var txt = req.query.txtSearch;
		  //use the client for executing the query
		  client.query("SELECT * FROM products WHERE material ='Copper'", function(err, result) {
		    //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
		    done(err);

		    if(err) {
		      return console.error('error running query', err);
		    }
		    res.render('copper',{list_copper:result});
		   
		    //res.send("fine!!!");
		 	});
		 });
});

app.get('/galvanized.html',function(req,res){
	res.render('galvanized');
});

app.get('/pvc.html',function(req,res){
	res.render('pvc');
});

app.get('/cpvc.html',function(req,res){
	res.render('cpvc');
});

app.get('/search',function(req,res){
	pool.connect(function(err, client, done) {
		  if(err) {
		    return console.error('error fetching client from pool', err);
		  }

		  var txt = req.query.txtSearch;
		  //use the client for executing the query
		  client.query("SELECT * FROM products WHERE type LIKE '%"+txt+"%' OR material LIKE '%"+txt+"%'", function(err, result) {
		    //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
		    done(err);

		    if(err) {
		      return console.error('error running query', err);
		    }
		    res.render('search',{list_search:result});
		   
		    //res.send("fine!!!");
		 	});
		 });
});


app.get('/product.html',function(req,res){

	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  
	  //use the client for executing the query
	  client.query("SELECT * FROM products", function(err, result) {
	    //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
	    done(err);

	    if(err) {
	      return console.error('error running query', err);
	    }
	    res.render('product',{list:result});
	  });
	});
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

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


//Server
app.listen(3000,function(){
	console.log('Server started on port 3000');
});