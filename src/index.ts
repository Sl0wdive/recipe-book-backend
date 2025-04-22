import express from 'express';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipe.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4444;

const cors = require('cors');
app.use(cors());

app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
