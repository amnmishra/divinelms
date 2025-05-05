import express from 'express'
const router = express.Router();
import { allCountry , getById , isActive , isDeleted , addCountry , updateCountry , trash} from '../controllers/countryController.js'

router
    .get('/' , allCountry)
    .get('/:id' , getById)
    .post('/', addCountry)
    .put('/:id', updateCountry)
    .patch('/isActive/:id', isActive)
    .patch('/isDeleted/:id', isDeleted)
    .delete('/trash/:id' , trash);
     

export const countryRoutes = router;
