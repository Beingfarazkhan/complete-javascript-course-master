import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import { getJSON } from './helpers.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// const recipeContainer = document.querySelector('.recipe'); //It belongs to the DOM so shouldnt be displayed here

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;

    recipeView.renderSpinener();
    // 1) Loading the recipe :
    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    // 2) Rendering the recipe :
    recipeView.render(recipe);
    // If only class was exported :
    //  const recipeview = new RecipeView(recipe)
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();

if (module.hot) {
  module.hot.accept();
}

//   recipe.ingredients.forEach(ingredient => {
// const ingredientHTML = `<li class="recipe__ingredient">
//     <svg class="recipe__icon">
//       <use href="${icons}#icon-check"></use>
//     </svg>
//     <div class="recipe__quantity">${ingredient.quantity}</div>
//     <div class="recipe__description">
//       <span class="recipe__unit">${ingredient.unit}</span>
//       ${ingredient.description}
//     </div>
//   </li>`;
// // ingredientsContainer.innerHTML = '';
// recipeContainer.insertAdjacentHTML('afterbegin', ingredientHTML);
// });
