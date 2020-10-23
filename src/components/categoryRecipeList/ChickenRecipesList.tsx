import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { RecipeModel } from '../../models/Recipe'
import attachRecipeListToCategory from './attachRecipeListToCategory';

interface Props {
    curRecipeList?: RecipeModel[]; 
}

function ChickenRecipesList({curRecipeList}: Props): ReactElement {

    return (
        <ul>
            {
                 curRecipeList?.map((recipe) => (
                <Link key={recipe.id} to={'/details/' + recipe.id}>
                <li>
                    <h1>{recipe.name}</h1>
                    <h3>{recipe.author}</h3>
                </li>
                </Link>))
            }
        </ul>
    )
}

export default attachRecipeListToCategory({
    categoryId: 3,
  })(ChickenRecipesList);
  
