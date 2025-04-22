import { Router } from 'express';
import { getAvailableRecipes, getRecipeInfo } from '../controllers/recipe.controller';

const router = Router();

router.get('/list', getAvailableRecipes);

router.get('/ingredient', getAvailableRecipes);

router.get('/country', getAvailableRecipes);

router.get('/category', getAvailableRecipes);

router.get('/info/:id', getRecipeInfo);

export default router;
