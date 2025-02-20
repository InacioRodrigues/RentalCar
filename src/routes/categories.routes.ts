import { Router } from 'express';
import Response from 'express';
import { v4 as uuidv4 } from 'uuid';
 const CategoriesRouter = Router();

const categories = [];

 CategoriesRouter.post('/', (request, response) => {
    
    const { name, description } = request.body;

    const category ={
        id: uuidv4(),
        name,
        description
    };
    categories.push(category);
    return response.status(201).send();
 });


 export { CategoriesRouter };
