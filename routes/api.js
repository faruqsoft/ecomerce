import express from "express";
const router = express.Router();


import * as usersController from "../app/controllers/usersController.js";
import * as brandController from "../app/controllers/brandController.js";
import * as cartListController from "../app/controllers/cartListController.js";
import * as categoryController from "../app/controllers/categoryController.js";
import * as invoiceController from "../app/controllers/invoiceController.js";
import * as productController from "../app/controllers/productController.js";
import * as wishListController from "../app/controllers/wishListController.js";





//users

router.post("/login",usersController.login);
router.post("/verifyLogin",usersController.verifyLogin);
router.post("/createUserProfile",usersController.createUserProfile);
router.post("/updateUserProfile",usersController.updateUserProfile);
router.post("/readUserProfile",usersController.readUserProfile);

//brand
router.post("/brandList",brandController.brandList);

//categories
router.post("/categoryList",categoryController.categoryList);

//cart
router.post("/createCart",cartListController.createCart);
router.post("/readCartList",cartListController.readCartList);
router.post("/updateCart",cartListController.updateCart);
router.post("/removeCart",cartListController.removeCart);

//wish
router.post("/createWish",wishListController.createWish);
router.post("/readWish",wishListController.readWish);
router.post("/removeWish",wishListController.removeWish);

//product
router.post("/productListBySlider",productController.productListBySlider);
router.post("/productListByCategory",productController.productListByCategory);
router.post("/productListByRemark",productController.productListByRemark);
router.post("/productListByBrand",productController.productListByBrand);
router.post("/productDetailsId",productController.productDetailsId);
router.post("/productListByKeyword",productController.productListByKeyword);
router.post("/productReviewListById",productController.productReviewListById);
router.post("/createProductReview",productController.createProductReview);


//invoice
router.post("/createProductReview",invoiceController.createProductReview);
router.post("/readInvoiceList",invoiceController.readInvoiceList);
router.post("/readInvoiceDetails",invoiceController.readInvoiceDetails);













export default router;