
//------Ingredient Search---//
function getPopularCocktails(){
    fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Error with Status Code: ' + response.status);
        return;
        }
        response.json().then(function(data){
            displayPopularCocktails(data);
        });
    }
)
.catch(function(err){
    console.log('Fetch Error :-S', err);
});
}

getPopularCocktails();

function displayPopularCocktails(cocktails){


    
    let cocktailName = document.getElementById('#cocktail-name')
    cocktailName.innerHTML = cocktails.drinks[0,1,2,3,4,5,6,7,8,9].strDrink;

    let img = document.querySelector('img')
    img.src = cocktails.drinks[0,1,2,3,4,5,6,7,8,9].strDrinkThumb;
    
    let cocktailInstructions = document.getElementById('cocktail-method')
    cocktailInstructions.innerHTML = cocktails.drinks[0,1,2,3,4,5,6,7,8,9].strInstructions;

    //Get a list of ingredients and measures


}