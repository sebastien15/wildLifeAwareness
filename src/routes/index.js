import {Router} from "express";
import api from './api/apiRoutes';
const router = Router();

router.get('/', (req,res)=>{
    return res.send('Your are welcome to wildlife ')
});
const url = `/api`
router.use(url,api);

export default router