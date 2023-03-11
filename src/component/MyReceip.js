import { useState } from "react";
import {sReceipe,sReceipebyNutrients,sReceipesbyIngredients,gReceipeInfo,gRecipeInfoBulk,gSimilarRecipes,sIngredients,gIngredientInfo,sGroceryProducts,gProductInfo } from '../param.js';
import {GetRecipeInformationBulk, GetRecipeInformation, SearchRecipesbyIngredients, SearchReceipesbyNutrients, GetSimilarRecipes, SearchIngredients, SearchGroceryProducts, GetProductInformation, SearchRecipes, GetIngredientInformation} from '../func.js'

export function MyReceip() {
    const [selectName, setSelectName] = useState('Please Select Item.');
    // console.log(gProductInfo);
    function handleChange(e) {
        if (e.target.value === "GetRecipeInformationBulk") { GetRecipeInformationBulk(gRecipeInfoBulk); }
        else if (e.target.value === "GetRecipeInformation") { GetRecipeInformation(gReceipeInfo); }
        else if (e.target.value === "SearchRecipesbyIngredients") { SearchRecipesbyIngredients(sReceipesbyIngredients); }
        else if (e.target.value === "SearchReceipesbyNutrients") { SearchReceipesbyNutrients(sReceipebyNutrients); }
        else if (e.target.value === "GetSimilarRecipes") { GetSimilarRecipes(gSimilarRecipes); }
        else if (e.target.value === "SearchIngredients") { SearchIngredients(sIngredients); }
        else if (e.target.value === "SearchGroceryProducts") { SearchGroceryProducts(sGroceryProducts); }
        else if (e.target.value === "GetProductInformation") { gProductInfo.id=22347; GetProductInformation(gProductInfo); }
        else if (e.target.value === "SearchRecipes") { SearchRecipes(sReceipe); }
        else if (e.target.value === "GetIngredientInformation") { GetIngredientInformation(gIngredientInfo); }
        setSelectName(e.target.value);
    }

    return (
        <div>
            <p>
                
            </p>
            <select name={selectName} defaultValue="SearchRecipes" onChange={handleChange}>
                <option value="SearchRecipes">
                    Search Recipes
                </option>
                <option value="SearchReceipesbyNutrients">
                    Search Recipes by Nutrients
                </option>
                <option value="SearchRecipesbyIngredients">
                    Search Recipes by Ingredients
                </option>
                <option value="GetRecipeInformation">
                    Get Recipe Information
                </option>
                <option value="GetRecipeInformationBulk">
                    Get Recipe Information Bulk
                </option>
                <option value="GetSimilarRecipes">
                    Get Similar Recipes
                </option>
                <option value="SearchIngredients">
                    Search Ingredients
                </option>
                <option value="GetIngredientInformation">
                    Get Ingredient Information
                </option>
                <option value="SearchGroceryProducts">
                    Search Grocery Products
                </option>
                <option value="GetProductInformation">
                    Get Product Information
                </option>
            </select>
        </div>
    );
}


