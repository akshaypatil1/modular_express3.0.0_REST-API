
/*
 * GET users listing.
 */

exports.list = function(req, res){
  objDB.query(
                'SELECT * FROM list',
                function ( objError, objRows, objFields ){
                    if( objError ){
                        sendError( objResponse, 500, 'error', 'query', objError );
                    }else
                    {
                       	response.sendResult(res,1,'success',objRows);
                    }
                }
            );
};



/*
 * GET users listing.
 */

exports.idDetails = function(req, res){
	var id = req.params.id;
  	objDB.query(
                'SELECT * FROM list where id = '+id+'',
                function ( objError, objRows, objFields ){
                    if( objError ){
                        //sendError( objResponse, 500, 'error', 'query', objError );
                        response.sendResult(res,0,'error',objError);
                    }else
                    {
                       	response.sendResult(res,1,'success',objRows);
                    }
                }
            );
};


/*
 *  users listing.
 */

exports.idDetailsPost = function(req, res){
	var id = req.body.id;
  	objDB.query(
                'SELECT * FROM list where id = '+id+'',
                function ( objError, objRows, objFields ){
                    if( objError ){
                        response.sendResult(res,0,'error',objError);
                    }else
                    {
                       	response.sendResult(res,1,'success',objRows);
                    }
                }
            );
};