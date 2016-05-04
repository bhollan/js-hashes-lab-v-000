'use strict';

function addIngredient(recipe, ingr, quant){
  recipe[ingr] = quant;
  return recipe;
};

function removeIngredient(recipe, ingr){
  delete recipe[ingr];
  return recipe;
};

function updateIngredient(recipe, ingr, quant){
  recipe[ingr] = quant;
  return recipe;
};

function readRecipe(recipe){
  for(var key in recipe){
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
};
