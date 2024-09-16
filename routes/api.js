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
router.get("/readUserProfile",usersController.readUserProfile);

//brand
router.get("/brandList",brandController.brandList);

//categories
router.get("/categoryList",categoryController.categoryList);

//cart
router.post("/createCart  ",cartListController.createCart);
router.get("/readCartList",cartListController.readCartList);
router.post("/updateCart",cartListController.updateCart);
router.post("/removeCart",cartListController.removeCart);

//Review
router.post("/createProductReview",productController.createProductReview);


//wish
router.post("/createWish",wishListController.createWish);
router.get("/readWish",wishListController.readWish);
router.post("/removeWish",wishListController.removeWish);

//product
router.get("/productListBySlider",productController.productListBySlider);
router.get("/productListByCategory/:categoryId",productController.productListByCategory);
router.get("/productListByRemark/:remark",productController.productListByRemark);
router.get("/productListByBrand/:brandId",productController.productListByBrand);
router.get("/productDetailsId/:productId",productController.productDetailsId);
router.get("/productListByKeyword",productController.productListByKeyword);
router.get("/productReviewListById",productController.productReviewListById);


//invoice
router.post("/createInvoice",invoiceController.createInvoice);
router.get("/readInvoiceList",invoiceController.readInvoiceList);
router.get("/readInvoiceDetails",invoiceController.readInvoiceDetails);













export default router;