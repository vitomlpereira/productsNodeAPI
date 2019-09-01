const express  = require('express');
const router = express.Router();

const productsCtrl = require('./../controllers/productController');


router.get('/:productID', productsCtrl.getByID);
router.get('/', productsCtrl.get); 
router.put('/', productsCtrl.put); 
router.post('/', productsCtrl.post); 
router.delete('/', productsCtrl.delete); 

module.exports = router;