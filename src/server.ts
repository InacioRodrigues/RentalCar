import express from 'express';
import { CategoriesRouter } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use("/categories", CategoriesRouter);

app.listen(3333, () => {
  console.log("Server is running on port 3000");
});