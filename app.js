config = require('./config');

//app.get('/', routes.index);
app.get('/api/list', user.list);
app.get('/api/idDetails/:id', user.idDetails);
app.post('/api/idDetails', user.idDetailsPost);
app.post('/api/insertRecord', update.insertRecord);
app.post('/api/view', update.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
