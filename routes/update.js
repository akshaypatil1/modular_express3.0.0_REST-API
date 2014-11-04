exports.insertRecord = function(req, res){
	
  	var name = req.body.name;
    objDB.query(
                'INSERT INTO list (id, name) VALUES (NULL,"'+name+'") ',
                function ( objError, objRows, objFields ){
                    if( objError ){
                        response.sendResult(res,0,'error',objError);
                    }else
                    {
                       	response.sendResult(res,1,'success');
                    }
                }
            );
};

exports.view = function(req, res){
    
    var id = req.body.id;
    objDB.query(
                'SELECT * FROM list where id = '+id+'',
                function ( objError, objRows, objFields ){
                    if( objError ){
                        response.sendResult(res,0,'error',objError);
                    }else
                    {
                        updateNoView(res, objRows[0]);
                    }
                }
            );
};

function updateNoView(res, data)
{
    views = data.no_views+1;
    objDB.query(
                "UPDATE list SET no_views = '"+views+"' WHERE id = '"+data.id+"';",
                function ( objError, objRows, objFields ){
                    if( objError ){
                        response.sendResult(res,0,'error',objError);
                    }else
                    {
                        response.sendResult(res,1,'views update success');
                    }
                }
            );
}