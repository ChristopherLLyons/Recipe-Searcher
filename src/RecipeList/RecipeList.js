import React, { Component } from 'react';

class RecipeList extends Component {

    getListItems() {
        return this.props.recipes.map((recipe) =>
            <li key={recipe.idMeal}>
                <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p>{recipe.strInstructions}</p>
                <ul>
                    {this.getIngredientsList(recipe)}
                </ul>
            </li>
        );
    }

    getIngredientsList(recipe) {
        let output = [];

        for (var i = 1; i <= 20; i++) {
            const ingredientIdentifier = 'strIngredient' + i;
            const amountIdentifier = 'strMeasure' + i;
            if (recipe[ingredientIdentifier] !== '' && recipe[ingredientIdentifier] !== null) {
                output.push(<li key={i}>{recipe[ingredientIdentifier]}); {recipe[amountIdentifier]}</li>);
            }
        }

        return output;
    }

    render() {
        return (
            <ul>{this.getListItems()}</ul>
        );
    }
}

export default RecipeList;