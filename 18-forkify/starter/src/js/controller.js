import * as model from './model.js';
import { getJSON } from './helpers.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

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

    // 0) Update results view to mark selected search result :
    resultsView.update(model.getSearchResultPage());
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading the recipe :
    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    // 2) Rendering the recipe :
    recipeView.render(recipe);
    // If only class was exported :
    //  const recipeview = new RecipeView(recipe)

    // //Test
    // controlServings();
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinener();
    // 1) Get Search query :
    const query = searchView.getQuery();
    if (!query) return `End Of Search Results`;

    // 2) Load search results :
    await model.loadSearchResults(query);

    // 3) Render results :
    resultsView.render(model.getSearchResultPage());

    // 4) Initial Pagination :
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // 3) Render New results :
  resultsView.render(model.getSearchResultPage(goToPage));

  // 4) Initial Pagination :
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings :
  model.updateServings(newServings);
  // Update the recipe view :
  // recipeView.render(model.state.recipe); //Old way
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add or remove bookmarks
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerCLick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
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
