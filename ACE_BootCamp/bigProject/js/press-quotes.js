
var quotesArray = [
		'By Area Canada is in 2nd Position in the World',
		'By Area China is in 3rd Position in the World',
		'By Area United State od America is in 4th Position in the World',
		'By Area Brazil is in 5th Position in the World'
    'By Area Australia is in 6th Position in the World',
	];
function presschenge(){
var randomNumber = Math.floor(Math.random()*quotesArray.length);
document.getElementById('press-quote').textContent = + quotesArray[randomNumber].split[0] + + quotesArray[randomNumber].split[1];
}; 
	//console.log( 	quotesArray[randomNumber].split(' â€” ')[0] );