$(document).ready(function(){

	function DeckConstructor(){

			

		}
		// number of cards
		DeckConstructor.prototype.cards = function(){
			var deck = [];
			for(var i = 1; i <= 52; i++){
				deck.push("<p>" + i + "</p>");
			}
			return deck;
		}
		// shuffle cards
		DeckConstructor.prototype.shuffle = function(){
			var input = this.cards();
			for(var i = input.length-1; i > 0; i--){
				var randomIndex = Math.floor(Math.random()*(i+1));
				var itemAtIndex = input[randomIndex];

				input[randomIndex] = input[i];
				input[i] = itemAtIndex;
			}

			return input;
		}

		// refresh
		DeckConstructor.prototype.refresh = function(){
			location.reload();
		}

		// deal
		DeckConstructor.prototype.deal = function(){
			return Math.floor(Math.random() * 53);
		}

		
		/////////////////////////////////////////////
		

		myDeck = new DeckConstructor;
		// all cards
		$("#cards").append(myDeck.cards());
		

		// if click shuffle
		$('button#shuffle').click(function(){

			$('#cards').html('');
			$('#cards').append(myDeck.shuffle());
		})

		// refresh
		$('button#refresh').click(function(){
			myDeck.refresh();
		})
		// deal
		$('button#deal').click(function(){

			var card_dealed = myDeck.deal();
			$('#deal_table').append("<p>" + card_dealed + "</p>");

			console.log(card_dealed);

			

			// myDeck.cards().indexOf(card_dealed);
			// $('#cards').splice(indexCardDeal, 1);

		});


});











