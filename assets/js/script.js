//-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});

//--------Carousel of Popular Cocktails 
window.onload = displayCocktails;

function displayCocktails(){ fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
   .then(response => response.json())
  .then(data => {
      const { drinks } = data;
      console.log(data);
      drinks.forEach(drink => {
        slideShow += 
        `<div class="carousel-item">
            <div class="card-body bg-black">
                <h3 class="card-title textStyle d-flex justify-content-center">${drink.strDrink}</h3>
                <p class="card-text textStyle pl-5 pr-5">${drink.strInstructions}</p>
            </div>
            <div class="card d-flex justify-content-center bg-black">
                <img class="d-block w-100 card-img-top pl-5 pr-5" src="${drink.strDrinkThumb}" alt="Second slide">
            </div>
        </div>
          `;
        });
        document.getElementById('slideShow').innerHTML= slideShow;
    })
}

//------Adding events to buttons to then search by that ingredient

document.getElementById('searchGin').addEventListener('click', searchGin);
document.getElementById('searchVodka').addEventListener('click', searchVodka);
document.getElementById('searchTequila').addEventListener('click', searchTequila);
document.getElementById('searchRum').addEventListener('click', searchRum);



//--------Search for cocktails with Gin
function searchGin(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
   .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h3 class="textStyle d-flex justify-content-center">Gin Cocktails</h3>';
      drinks.forEach(drink => {
     output += `
          <div class="card-deck col-5 col-sm-4 d-inline-block pb-2 bg-black">
          <div class="card pl-md-5 bg-black">
            <img src="${drink.strDrinkThumb}" class="ingredientThumb card-img-top" alt="drink thumbnail"/>
            <div class="cardbody">
            <h6 class="textStyle">${drink.strDrink}</h6>
            </div>
            </div>
          </div>
          `;
        });
      document.getElementById('output').innerHTML = output;
    })
}
//-------------- Search for cocktails with Vodka
function searchVodka(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h3 class="textStyle d-flex justify-content-center">Vodka Cocktails</h3>';
      drinks.forEach(drink => {
     output += `
          <div class="card-deck col-5 col-sm-4 d-inline-block pb-2 bg-black">
          <div class="card pl-md-5 bg-black">
            <img src="${drink.strDrinkThumb}" class="ingredientThumb card-img-top" alt="drink thumbnail"/>
            <div class="cardbody">
            <h6 class="textStyle">${drink.strDrink}</h6>
            </div>
            </div>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}
//-------------- Search for cocktails with Tequila
function searchTequila(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h3 class="textStyle d-flex justify-content-center">Teqilla Cocktails</h3>';
      drinks.forEach(drink => {
     output += `
          <div class="card-deck col-5 col-sm-4 d-inline-block pb-2 bg-black">
          <div class="card pl-md-5 bg-black">
            <img src="${drink.strDrinkThumb}" class="ingredientThumb card-img-top" alt="drink thumbnail"/>
            <div class="cardbody">
            <h6 class="textStyle">${drink.strDrink}</h6>
            </div>
            </div>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}
//-------------- Search for cocktails with Rum
function searchRum(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h3 class="textStyle d-flex justify-content-center">Rum Cocktails</h3>';
      drinks.forEach(drink => {
     output += `
          <div class="card-deck col-5 col-sm-4 d-inline-block pb-2 bg-black">
          <div class="card pl-md-5 bg-black">
            <img src="${drink.strDrinkThumb}" class="ingredientThumb card-img-top" alt="drink thumbnail"/>
            <div class="cardbody">
            <h6 class="textStyle">${drink.strDrink}</h6>
            </div>
            </div>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}

//----------------------------Search Recipe for cocktail
function outputDrink(drink)
{    
    console.log(drink);
    let index = 1;
    let ingredientArray = [];
    while (drink['strIngredient' + index]) {
        ingredientArray.push({name: drink['strIngredient' + index], amount: (drink['strMeasure' + index]||'').trim() ? drink['strMeasure' + index]: "A dash "});
        index++;
    }

    var text = '';

    text += `<b>Drink: </b><br/>${drink.strDrink}<br/><br/>`;
    text += `<b>Glass: </b><br/>${drink.strGlass}<br/><br/>`;
    text += '<b>Ingredients:</b></br>';
    ingredientArray.forEach((ingredient) => {
        text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
    });

    text += `Instructions: <p>${drink.strInstructions}</p>`;

    $( "#result" ).html(text);     
}

function downloadCocktail(){
    let cocktailName = $('#cocktail').val();
    console.log('Downloading details for: ', cocktailName);
    var cocktail = encodeURIComponent(cocktailName);
    $.ajax({
        type: 'GET',
        url:  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail,
        timeout:5000,
        crossDomain: true,
        dataType:'json',
        success: function(result){
            if (!result.drinks || result.drinks.length <= 0) {
                $( "#result" ).html('No drinks found!!');
                return;
            }

            var drink = result.drinks[0];
            outputDrink(drink);  
        },
        error: function (errorMessage) {
            console.error(errorMessage);
        }
    });
}
//--------Display Random Cocktail when card is clicked

    document.querySelectorAll('.display-random').forEach(item => {item.addEventListener('click', displayRandom)});

function displayRandom(){
     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json()) 
  .then(data => {
       const { drinks } = data;
      let random = '<h3 class="textStyle d-flex justify-content-center">YOUR DESTINY</h3>';
      drinks.forEach(drink => {
      random += `
      <div class="row no-gutters">
            <div class="col-8 offset-2 offset-md-3 col-md-6">
            <h4 class="textStyle pt-5">${drink.strDrink}</h4> 
            <img src="${drink.strDrinkThumb}" class="img-fluid" alt="drink thumbnail"/>
            <p class="textStyle">${drink.strInstructions}</p>
            <ul class="textStyle">
            <li>${drink.strMeasure1}, ${drink.strIngredient1}</li>
            <li>${drink.strMeasure2}, ${drink.strIngredient2}</li>
            <li>${drink.strMeasure3}, ${drink.strIngredient3}</li>
            <li>${drink.strMeasure4}, ${drink.strIngredient4}</li>
            <li>${drink.strMeasure5}, ${drink.strIngredient5}</li>
            <li>${drink.strMeasure6}, ${drink.strIngredient6}</li>
            <li>${drink.strMeasure7}, ${drink.strIngredient7}</li>
            <li>${drink.strMeasure8}, ${drink.strIngredient8}</li>
                </div>
            </div>
        
            `;
        });
      document.getElementById('random').innerHTML = random;
    })
}
