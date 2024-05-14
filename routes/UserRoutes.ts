import express from 'express'
import registerController from '../controllers/user/registerController'
import authController from '../controllers/user/authController';
import getProducts from '../controllers/user/getProductsController';
import validateToken from '../middleware/validateToken';
import makeOrder from '../controllers/user/makeOrderController';
import getOrdersUser from '../controllers/user/getOrdersUsetController';
import updateStatus from '../controllers/user/updateStatusController';
import statusCheck from '../controllers/user/statusCheckController';
const router = express.Router();

router.post('/register', registerController)
router.post('/auth', authController)
router.get('/getProducts',validateToken, getProducts)
router.post('/makeOrder',validateToken, makeOrder)
router.get('/getOrdersUser',validateToken, getOrdersUser)
router.patch('/updateStatus',validateToken, updateStatus)
router.get('/statusCheck',validateToken, statusCheck)





export default router;