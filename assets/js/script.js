//-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});
 
//------Function to search cocktails by ingredient

document.getElementById('searchGin').addEventListener('click', searchGin);

function searchGin(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h2>Cocktails</h2>';
      drinks.forEach(drink => {
   // console.log(drink);
     output += `
          <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
          </div>`;
        });
         
    console.log(output)
      document.getElementById('output').innerHTML = output;
    })
}