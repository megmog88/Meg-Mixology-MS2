
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

    let listOfPopularCocktails = [0]
            console.log(cocktails.drinks[listOfPopularCocktails])
    let cocktailName = document.querySelector('h1')
    
    cocktailName.innerHTML = cocktails.drinks[0].strDrink;

    let img = document.querySelector('img')
    img.src = cocktails.drinks[0].strDrinkThumb;

    for(let i=1; i<16; i++){
        let cocktailIngredients = document.querySelector('li')
        cocktailIngredients.innerHTML = cocktails.drinks[0]['strIngredients${i}'];
    }

    let cocktailInstructions = document.querySelector('h2')
    cocktailInstructions.innerHTML = cocktails.drinks[0].strInstructions;
 
    



    
}