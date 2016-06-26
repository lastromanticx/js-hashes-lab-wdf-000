'use strict';

function addIngredient(recipe,ingredient,amount){
  recipe[ingrediant] = amount;
  return recipe;
}

function removeIngredient(recipe,ingredient){
  delete recipe[ingredient];
}

function updateIngredient(recipe,ingredient,amount){
  recipe[ingrediant] = amount;
  return recipe;
}

function readRecipe(recipe){
  for (let i in recipe){
    console.log('this recipe calls for ' recipe[i] + ' of ' + i);
  }
}
