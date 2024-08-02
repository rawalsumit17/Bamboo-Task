import express from 'express';

import signupController from '../controller/signup.js';



const router = express.Router();

router.post('/signup', signupController);


export default router;