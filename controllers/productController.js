const Product = require('./../models/product');


 exports.get = ( req , res ) => {
    
    Product.find({}, function(err, prod) {
    
        var productsCollection = [];

        prod.forEach(function(p) {
            productsCollection.push(p);  
        });
       
        return res.json(productsCollection);
    });

} 

exports.getByID = ( req , res ) => {
    
    const productID = req.params.productID;

    Product.findById(productID, function(err, prod) {
        return res.json(prod);
    });
}

exports.put = ( req , res ) => {
    res.send('Updating product');
} 

exports.post = ( req , res ) => {
    
    const productName = req.body.productName;
    const product = new Product({ name: productName });
    
    product.save().
        then(( ) => res.status(200).json({success:true}))
        .catch((error) => res.status(500).json({success:false}));

} 

exports.delete = ( req , res ) => {
    res.send('Removing product');
} 