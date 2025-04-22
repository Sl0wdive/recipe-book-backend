import { Request, Response } from 'express';
import { getRecipes } from '../services/recipe.service';

export const getAvailableRecipes = async (req: Request, res: Response) => {
  try {
    const { i, a, c } = req.query;
    let filterType = '';
    let filterValue = '';

    if (i) {
      filterType = 'ingredient';
      filterValue = i as string;
    } else if (a) {
      filterType = 'country';
      filterValue = a as string;
    } else if (c) {
      filterType = 'category';
      filterValue = c as string;
    } else {
      filterType = 'list';
    }

    const data = await getRecipes(filterType, filterValue);

    if (data.meals && data.meals.length > 0) {
      res.status(200).json(data.meals); 
    } else {
      res.status(404).json({ message: 'No recipes found' });
    }
  } catch (error: unknown) {
    handleError(error, res);
  }
};

export const getRecipeInfo = async (req: Request, res: Response) => {
  try {
    const recipeId = req.params.id;
    const data = await getRecipes('info', recipeId);
    if (data.meals && data.meals.length > 0) {
      res.status(200).json(data.meals[0]);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error: unknown) {
    handleError(error, res);
  }
};

const handleError = (error: unknown, res: Response) => {
  if (error instanceof Error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Error fetching recipes', error: error.message });
  } else {
    console.error('Unknown error:', error);
    res.status(500).json({ message: 'Error fetching recipes', error: 'An unknown error occurred' });
  }
};
