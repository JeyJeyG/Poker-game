const suits  = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2','3','4','5','6','7','9','10','J','Q','K','A',];

function creatDesk(){
    const deck = [];
    for(const suit of suits){
        for(const value of values){
            deck.push(`${value} of ${values}`);
        }
    }
    return deck;

}
    function getRandomIndex(max) {
        return Math.floor(Math.random()* max)

    }

    function dealHands(deck){
        const player1Hand = [];
        const player2Hand = [];

        while (player1Hand.length < 2){
            const index = getRandomIndex(deck.length);
            player2Hand.push(deck.splice(index, 1)[0]);

        }

        while (player2Hand.length < 2){
            const index = getRandomIndex(deck.length);
            player2Hand.push(deck.splice(index, 1)[0]);



    }
    return [player1Hand, player2Hand];

}

    function startGame(){
        const deck = createDeck();
        const [player1Hand, player2Hand] =dealHands(deck);
        const output = document.getElementById('output');
        output.innerHTML = `
        player 1 hand: ${player1Hand.join(',')}<br>
        player 2 hand: ${player2Hand.join(',')}`;
    }
