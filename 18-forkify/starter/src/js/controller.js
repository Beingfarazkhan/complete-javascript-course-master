import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import { getJSON } from './helpers.js';
import resultsView from './views/resultsView.js';

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
    resultsView.renderSpinener();
    // 1) Get Search query :
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results :
    await model.loadSearchResults(query);

    // 3) Render results :
    resultsView.render(model.getSearchResultPage());
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();

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
