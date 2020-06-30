
//------Ingredient Search---//
const btnSearch = document.getElementById('btnSearch');
const ingredientSearch = document.getElementById('ingredient');
const showSearch = document.getElementById('results');
let out = "";

btnSearch.onclick = function(){
    var i = ingredientSearch.value;
    const url = ('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    console.log(url)
    fetch(url)
    .then (function(data){
        return data.json();
    })
    .then(function(jsonObject){
        console.log(jsonObject);
        for (vodka in jsonObject){
            const cocktails = new Array (jsonObject[i].strDrink, jsonObject[i].strDrinkThumb, jsonObject[vodka].description, jsonObject.image_url)
        cocktailsOut(cocktails);
        }
    showSearch.innerHTML = out;
    })
    .catch(function(e){
        console.log("Error: " + e);
    });
}
function cocktailsOut(cocktails){
  console.log(cocktails);

};


