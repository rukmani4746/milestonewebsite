import express from 'express';

const router = express.Router();
import { createUser, loginUser } from '../controller/userController.js'
import { bloodinfo, updatebloodinfo, deletebloodinfo, getbloodinfo } from '../controller/hospitalController.js'
import auth  from '../middlewares/authentication.js';

router.post('/register', createUser)
router.post('/login', loginUser)


router.post('/hospital/createbloodInfo', auth('hospital'), bloodinfo)
router.get('/hospital/getbloodInfo', auth('hospital'), getbloodinfo)
router.put('/hospital/updateblood/:bloodsampleId', auth('hospital'), updatebloodinfo)
router.delete('/hospital/deleteblood/:bloodsampleId', auth('hospital'), deletebloodinfo)

export default router