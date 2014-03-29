'use strict';

var dipsum = [
	'hustle',
	'whiskey',
	'fuck it ship it',
	'burritos',
	'CRAAAAAAAAAAAAAAAAAAAAIIIIIIIIIIIIIIIIIGGGGGGGGGGGGGGGGGGGGGGGGG',
	'FREEEEEDOOOOOOOOOOOOOOOM',
	'think big start small',
	'communication solves all problems',
	'take ownership',
	'get shit done',
	'effecting change',
	'work smarter not harder',
	'the best place for the best people to work',
	'beer o&rsquo;clock',
	'there&rsquo;s only one Paddy Moogan',
	'solid delivery',
	'duh duh-duh duh-duh duh na naa',
	'the ring of fire',
	'single malt',
	'Dave is unwell',
	'Whiskey Willie',
	'Clive',
	'Titson',
	'Onetake Critchlow',
	'P-Dogg',
	'Dizzy Morris',
	'Big Critch',
	'Dreamy Will Critchlow',
	'Breadstick Morris',
	'get your chode out Dave',
	'CheriMO',
	'you can&rsquo;t outsource giving a shit',
	'ship it',
	'Ron Draper',
	'#MarkProblems',
	'quiches'
];
$(function(){
	$('#ship').on('click',function(e){
		e.preventDefault();
		function randomLength(max,min){
			return Math.floor(Math.random()*(max-min) + min);
		}
		function randomPhrase(arr){
			return arr[Math.floor(Math.random()*arr.length)];
		}
		function capitaliseFirstLetter(string){
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		var sentence = [],
			paragraph = [],
			s = randomLength(10,2),
			p = randomLength(10,2),
			target = '#dipsum';

		for (var i=0; i< p; i++){
			paragraph = [];
			s = randomLength(10,2);

			for (var j=0; j< s; j++){
				// var last = s-1;
				// switch (true){
				// 	case j===last:
				// 		sentence.push( randomPhrase(dipsum) + '.');
				// 		break;
				// 	case j===0:
				// 		sentence.push( capitaliseFirstLetter( randomPhrase(dipsum) ) + ',' );
				// 		break;
				// 	default:
				// 		sentence.push( randomPhrase(dipsum) + ',' );
				// }
				var r = randomPhrase(dipsum);
				r = j===0 ? capitaliseFirstLetter(r) : r;
				r = j===s-1 ? r+'.' : r+',';
				sentence.push(r);
			}

			paragraph.push( sentence.join(' ') );
		}

		paragraph = paragraph.join(' ');

		$('<p/>')
			.css({'display':'none'})
			.html(paragraph)
			.appendTo(target)
			.slideDown();
	});
});