//-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});

//------time to play

fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
    .then(res => res.json())
    .then(data => console.log(data))

     