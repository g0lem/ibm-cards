import { generateDeck, shuffleDeck, drawCards, orderDeck } from './cards';



test('card generation test', () => {
    let deck = generateDeck();

    expect(deck.length).toStrictEqual(52);

    expect(deck).toStrictEqual(orderedDeck);

});

test('shuffling deck test', () => {
    let deck = generateDeck();

    let shuffledDeck = shuffleDeck(deck);

    expect(shuffledDeck.length).toStrictEqual(deck.length);

    var differentOrder = false;
    for(var i=0; i< shuffleDeck.length; i++){
        if(JSON.stringify(shuffleDeck[i]) !== JSON.stringify(deck[i])){
            differentOrder = true;
            break;
        }
    }

    expect(differentOrder).toStrictEqual(true);

});

test('ordering deck test', () => {
    let deck = generateDeck();

    let shuffledDeck = shuffleDeck(deck);

    deck = orderDeck(shuffledDeck);

    expect(deck).toStrictEqual(orderedDeck);

});



const orderedDeck = [
    {
      "id": 2,
      "name": 2,
      "letter": 2,
      "unicodeCharacter": 2,
      "suit": "clubs"
    },
    {
      "id": 3,
      "name": 3,
      "letter": 3,
      "unicodeCharacter": 3,
      "suit": "clubs"
    },
    {
      "id": 4,
      "name": 4,
      "letter": 4,
      "unicodeCharacter": 4,
      "suit": "clubs"
    },
    {
      "id": 5,
      "name": 5,
      "letter": 5,
      "unicodeCharacter": 5,
      "suit": "clubs"
    },
    {
      "id": 6,
      "name": 6,
      "letter": 6,
      "unicodeCharacter": 6,
      "suit": "clubs"
    },
    {
      "id": 7,
      "name": 7,
      "letter": 7,
      "unicodeCharacter": 7,
      "suit": "clubs"
    },
    {
      "id": 8,
      "name": 8,
      "letter": 8,
      "unicodeCharacter": 8,
      "suit": "clubs"
    },
    {
      "id": 9,
      "name": 9,
      "letter": 9,
      "unicodeCharacter": 9,
      "suit": "clubs"
    },
    {
      "id": 10,
      "name": 10,
      "letter": 10,
      "unicodeCharacter": "A",
      "suit": "clubs"
    },
    {
      "id": 12,
      "name": "Jack",
      "letter": "J",
      "unicodeCharacter": "B",
      "suit": "clubs"
    },
    {
      "id": 13,
      "name": "Queen",
      "letter": "Q",
      "unicodeCharacter": "D",
      "suit": "clubs"
    },
    {
      "id": 14,
      "name": "King",
      "letter": "K",
      "unicodeCharacter": "E",
      "suit": "clubs"
    },
    {
      "id": 15,
      "name": "Ace",
      "letter": "A",
      "unicodeCharacter": "1",
      "suit": "clubs"
    },
    {
      "id": 2,
      "name": 2,
      "letter": 2,
      "unicodeCharacter": 2,
      "suit": "spades"
    },
    {
      "id": 3,
      "name": 3,
      "letter": 3,
      "unicodeCharacter": 3,
      "suit": "spades"
    },
    {
      "id": 4,
      "name": 4,
      "letter": 4,
      "unicodeCharacter": 4,
      "suit": "spades"
    },
    {
      "id": 5,
      "name": 5,
      "letter": 5,
      "unicodeCharacter": 5,
      "suit": "spades"
    },
    {
      "id": 6,
      "name": 6,
      "letter": 6,
      "unicodeCharacter": 6,
      "suit": "spades"
    },
    {
      "id": 7,
      "name": 7,
      "letter": 7,
      "unicodeCharacter": 7,
      "suit": "spades"
    },
    {
      "id": 8,
      "name": 8,
      "letter": 8,
      "unicodeCharacter": 8,
      "suit": "spades"
    },
    {
      "id": 9,
      "name": 9,
      "letter": 9,
      "unicodeCharacter": 9,
      "suit": "spades"
    },
    {
      "id": 10,
      "name": 10,
      "letter": 10,
      "unicodeCharacter": "A",
      "suit": "spades"
    },
    {
      "id": 12,
      "name": "Jack",
      "letter": "J",
      "unicodeCharacter": "B",
      "suit": "spades"
    },
    {
      "id": 13,
      "name": "Queen",
      "letter": "Q",
      "unicodeCharacter": "D",
      "suit": "spades"
    },
    {
      "id": 14,
      "name": "King",
      "letter": "K",
      "unicodeCharacter": "E",
      "suit": "spades"
    },
    {
      "id": 15,
      "name": "Ace",
      "letter": "A",
      "unicodeCharacter": "1",
      "suit": "spades"
    },
    {
      "id": 2,
      "name": 2,
      "letter": 2,
      "unicodeCharacter": 2,
      "suit": "hearts"
    },
    {
      "id": 3,
      "name": 3,
      "letter": 3,
      "unicodeCharacter": 3,
      "suit": "hearts"
    },
    {
      "id": 4,
      "name": 4,
      "letter": 4,
      "unicodeCharacter": 4,
      "suit": "hearts"
    },
    {
      "id": 5,
      "name": 5,
      "letter": 5,
      "unicodeCharacter": 5,
      "suit": "hearts"
    },
    {
      "id": 6,
      "name": 6,
      "letter": 6,
      "unicodeCharacter": 6,
      "suit": "hearts"
    },
    {
      "id": 7,
      "name": 7,
      "letter": 7,
      "unicodeCharacter": 7,
      "suit": "hearts"
    },
    {
      "id": 8,
      "name": 8,
      "letter": 8,
      "unicodeCharacter": 8,
      "suit": "hearts"
    },
    {
      "id": 9,
      "name": 9,
      "letter": 9,
      "unicodeCharacter": 9,
      "suit": "hearts"
    },
    {
      "id": 10,
      "name": 10,
      "letter": 10,
      "unicodeCharacter": "A",
      "suit": "hearts"
    },
    {
      "id": 12,
      "name": "Jack",
      "letter": "J",
      "unicodeCharacter": "B",
      "suit": "hearts"
    },
    {
      "id": 13,
      "name": "Queen",
      "letter": "Q",
      "unicodeCharacter": "D",
      "suit": "hearts"
    },
    {
      "id": 14,
      "name": "King",
      "letter": "K",
      "unicodeCharacter": "E",
      "suit": "hearts"
    },
    {
      "id": 15,
      "name": "Ace",
      "letter": "A",
      "unicodeCharacter": "1",
      "suit": "hearts"
    },
    {
      "id": 2,
      "name": 2,
      "letter": 2,
      "unicodeCharacter": 2,
      "suit": "diamonds"
    },
    {
      "id": 3,
      "name": 3,
      "letter": 3,
      "unicodeCharacter": 3,
      "suit": "diamonds"
    },
    {
      "id": 4,
      "name": 4,
      "letter": 4,
      "unicodeCharacter": 4,
      "suit": "diamonds"
    },
    {
      "id": 5,
      "name": 5,
      "letter": 5,
      "unicodeCharacter": 5,
      "suit": "diamonds"
    },
    {
      "id": 6,
      "name": 6,
      "letter": 6,
      "unicodeCharacter": 6,
      "suit": "diamonds"
    },
    {
      "id": 7,
      "name": 7,
      "letter": 7,
      "unicodeCharacter": 7,
      "suit": "diamonds"
    },
    {
      "id": 8,
      "name": 8,
      "letter": 8,
      "unicodeCharacter": 8,
      "suit": "diamonds"
    },
    {
      "id": 9,
      "name": 9,
      "letter": 9,
      "unicodeCharacter": 9,
      "suit": "diamonds"
    },
    {
      "id": 10,
      "name": 10,
      "letter": 10,
      "unicodeCharacter": "A",
      "suit": "diamonds"
    },
    {
      "id": 12,
      "name": "Jack",
      "letter": "J",
      "unicodeCharacter": "B",
      "suit": "diamonds"
    },
    {
      "id": 13,
      "name": "Queen",
      "letter": "Q",
      "unicodeCharacter": "D",
      "suit": "diamonds"
    },
    {
      "id": 14,
      "name": "King",
      "letter": "K",
      "unicodeCharacter": "E",
      "suit": "diamonds"
    },
    {
      "id": 15,
      "name": "Ace",
      "letter": "A",
      "unicodeCharacter": "1",
      "suit": "diamonds"
    }
  ];
