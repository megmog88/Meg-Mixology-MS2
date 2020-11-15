//-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});


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
          <div class="card pl-5 bg-black">
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
          <div class="card pl-5 bg-black">
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
          <div class="card pl-5 bg-black">
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
          <div class="card pl-5 bg-black">
            <img src="${drink.strDrinkThumb}" class="ingredientThumb card-img-top" alt="drink thumbnail"/>
            <div class="cardbody">
            <h6 class="text-style">${drink.strDrink}</h6>
            </div>
            </div>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}

//--------Display Random Cocktail when card is clicked

document.querySelectorAll('.display-random').forEach(item => {
  item.addEventListener('click', displayRandom)});

function displayRandom(){
     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let random = `<h3 class=" textStyle d-flex justify-content-center">Destiny Cocktail</h3>`;
      drinks.forEach(drink => 
        {
      random += `
                <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
            <p class="textStyle">${drink.strInstructions}</p>
            <ul>
                <li>${drink.strMeasure1}, ${drink.strIngredient1}</li>
                <li>${drink.strMeasure2}, ${drink.strIngredient2}</li>
                <li>${drink.strMeasure3}, ${drink.strIngredient3}</li>
                <li>${drink.strMeasure4}, ${drink.strIngredient4}</li>
                <li>${drink.strMeasure5}, ${drink.strIngredient5}</li>
            </ul>
            </div>
            </div>
            `;
        });
      document.getElementById('random').innerHTML = random;
    })
}