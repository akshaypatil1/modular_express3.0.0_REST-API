
/**
 * Module dependencies.
 */

express = require('express')
routes = require('./routes')
user = require('./routes/user')
http = require('http')
path = require('path');
response = require('./routes/response');
update = require('./routes/update');

var mysql          = require('mysql'); //This sets up the MySQL connection
function DB(){
  var connection = mysql.createConnection(
   {user: 'root', password: '',host: 'localhost',port: 3306,database: 'node_js_sample', multipleStatements: true}); return connection; }
objDB = DB();
//mv = require('mv');

app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  //app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});
