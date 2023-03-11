import { baseURL } from "./param.js";
import { API_KEY } from "./param.js";

export const SearchRecipes = (sReceipe) => {
    let domain = 'recipes/complexSearch?apiKey=';
    let apiUrl = '';
    
    apiUrl = baseURL + domain + API_KEY;

    for (let x in sReceipe){
        apiUrl = apiUrl + '&' + x + '=' + sReceipe[x];
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const GetRecipeInformationBulk = (gRecipeInfoBulk) => {
    let domain = 'recipes/informationBulk?apiKey=';
    let apiUrl = '';
    
    apiUrl = baseURL + domain + API_KEY;

    for (let x in gRecipeInfoBulk){
        apiUrl = apiUrl + '&' + x + '=' + gRecipeInfoBulk[x];
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const GetRecipeInformation = (gReceipeInfo) => {
    let domain1 = 'recipes/'  , domain2 =  '/information?apiKey=';
    let apiUrl = '';
    // console.log(baseURL)
    apiUrl = baseURL + domain1 +  gReceipeInfo.id  +  domain2 + API_KEY;

    for (let x in gReceipeInfo){
        apiUrl = apiUrl + '&' + x + '=' + gReceipeInfo[x];
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const SearchRecipesbyIngredients = (sReceipesbyIngredients) => {
    let domain = 'recipes/findByIngredients?apiKey=';
    let apiUrl = '';

    apiUrl = baseURL + domain + API_KEY;

    for (let x in sReceipesbyIngredients){
        apiUrl = apiUrl+ '&' + x + '=';
        if (x === 'ingredients')
        {
            for (let i in sReceipesbyIngredients[x])
            {
                if (i !== 0)
                {
                    apiUrl = apiUrl + ',+';
                }
                apiUrl = apiUrl + sReceipesbyIngredients[x][i];
            }
        }else{
            apiUrl = apiUrl + sReceipesbyIngredients[x];
        }
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const SearchReceipesbyNutrients = (sReceipebyNutrients) => {
    let domain = 'recipes/findByNutrients?apiKey=';
    let apiUrl = '';
    
    apiUrl = baseURL + domain + API_KEY;

    for (let x in sReceipebyNutrients){
        apiUrl = apiUrl + '&' + x + '=' + sReceipebyNutrients[x];
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const GetSimilarRecipes = (gSimilarRecipes) => {
    let domain1 = 'recipes/';
    let domain2 = '/similar?apiKey=';
    let apiUrl = '';

    apiUrl = baseURL + domain1 + gSimilarRecipes.id + domain2 + API_KEY;

    for (let x in gSimilarRecipes){
        if (x !== 'id'){
            apiUrl = apiUrl  + '&' + x + '=' + gSimilarRecipes[x];
        }
    }
    apiUrl=apiUrl.substring(0,apiUrl.length-1);
    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const SearchIngredients = (sIngredients) => {
    let domain = 'food/ingredients/search?apiKey=';
    let apiUrl = '';
    
    apiUrl = baseURL + domain + API_KEY;

    for (let x in sIngredients){
        apiUrl = apiUrl + '&' + x + '=' + sIngredients[x];
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const SearchGroceryProducts = (sGroceryProducts) => {
    let domain = 'food/products/search?apiKey=';
    let apiUrl = '';
    
    apiUrl = baseURL + domain + API_KEY;

    for (let x in sGroceryProducts){
        apiUrl = apiUrl + '&' + x + '=' + sGroceryProducts[x];
    }
    apiUrl=apiUrl.substring(0,apiUrl.length-1);
    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const GetProductInformation = (gProductInfo) => {
    let domain = 'food/products/';
    let apiUrl = '';
    
    apiUrl = baseURL + domain + gProductInfo.id + '?apiKey=' + API_KEY;

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}

export const GetIngredientInformation = (gIngredientInfo) => {
    // alert("aaaaaaaaaaaaaaaaaaaaaaa");
    let domain1 = 'food/ingredients/' , domain2 = '/information?apiKey=';
    let apiUrl = '';
    // apiUrl=apiUrl.substring(0,apiUrl.length-1);
    apiUrl = baseURL + domain1 + gIngredientInfo.id +  domain2 + API_KEY;

    for (let x in gIngredientInfo){
        if(x !== 'id'){
            apiUrl = apiUrl + '&' + x + '=' + gIngredientInfo[x];
        }
    }

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Do something with the response data
        })
        .catch(error => {
            console.error(error);
        });
}