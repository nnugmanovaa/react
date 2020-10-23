import React from 'react';
import './App.css';
import FoodCategory from './components/recipeCategory/RecipeCategory';
import Navbar from './components/navbar/Navbar';
import { recipeCategoryList } from './models/RecipeCategory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PastaRecipesList from './components/categoryRecipeList/PastaRecipesList';
import SaladRecipesList from './components/categoryRecipeList/SaladRecipesList';
import ChickenRecipesList from './components/categoryRecipeList/ChickenRecipesList';
import RecipeDetails from './components/recipeDetails/RecipeDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/recipes">
        <Navbar />
        <FoodCategory foodCategoryList = {recipeCategoryList} />  
        </Route>

        <Route path="/pasta">
          <PastaRecipesList/>
        </Route>

        <Route exact path="/salad">
          <SaladRecipesList/>
        </Route>

        <Route path="/details/:id">
          <RecipeDetails/>
        </Route>

        <Route path="/chicken">
          <ChickenRecipesList/>
        </Route>

    </Switch>
    </Router>
  );
}

export default App;
