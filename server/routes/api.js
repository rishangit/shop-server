const express = require('express');
const router = express.Router();

//save ; del ; list ; get
const userController = require('../controller/user_controller');
const loginController = require('../controller/login_controller');
router.post('/users/get', userController.getData);
router.post('/users', userController.saveData);
router.post('/login', loginController.login);
const productController = require('../controller/product_controller');
router.post('/saveproduct', productController.saveData);
router.post('/listproduct', productController.listData);
router.post('/get_product', productController.getData);
const shopInfoController = require('../controller/shop_info_controller');
router.post('/save_shop_info', shopInfoController.saveData);
router.post('/get_shop_info', shopInfoController.getData);
router.post('/list_shop_info', shopInfoController.listData);
const liveStockController = require('../controller/live_stock_controller');
router.post('/save_live_stock', liveStockController.saveData);
//router.post('/get_live_stock', liveStockController.listData);
router.post('/list_live_stock', liveStockController.listData);
const productCatagoryController = require('../controller/product_catagory_controller');
router.post('/save_product_catagory', productCatagoryController.saveData);
router.post('/list_product_catagory', productCatagoryController.listData);
router.post('/get_product_catagory', productCatagoryController.getData);
const productUnitController = require('../controller/product_unit_controller');
router.post('/save_product_unit', productUnitController.saveData);
router.post('/list_product_unit', productUnitController.listData);
router.post('/get_product_unit', productUnitController.getData);
const productManufactureController = require('../controller/product_manufacture_controller');
router.post('/save_product_manufacture', productManufactureController.saveData);
router.post('/list_product_manufacture', productManufactureController.listData);
router.post('/get_product_manufacture', productManufactureController.getData);
module.exports = router;