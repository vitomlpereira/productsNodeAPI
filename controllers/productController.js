


exports.get = ( req , res ) => {
    return res.json({message:'return all products'});
} 

exports.getByID = ( req , res ) => {
    var username = req.params.productID;
    return res.json({message:`product ${username}`});
} 

exports.put = ( req , res ) => {
    res.send('Updating product');
} 

exports.post = ( req , res ) => {
    res.send('Adding product');
} 

exports.delete = ( req , res ) => {
    res.send('Removing product');
} 