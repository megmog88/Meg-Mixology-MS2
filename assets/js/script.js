
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
    console.log(cocktails.drinks[10]);

}