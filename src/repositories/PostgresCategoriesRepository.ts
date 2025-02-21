import { ICategoriesRepository, ICreateCategoryDTO} from "./ICategoriesRepository";
import { Category } from "../model/Category";

class PostgresCategoriesRepository implements ICategoriesRepository {

    findByName(name: string) {
        console.log(name);
        return null;
    } 

    list() {
        return null;
    }

    create({name, description}: ICreateCategoryDTO) {
        console.log(name, description);
    }
    
} 


export { PostgresCategoriesRepository }; 
