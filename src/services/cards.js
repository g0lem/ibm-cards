import {groupBy, shuffleArray, safeCopy} from './utils';

var regularCards = [];

for(var i=2; i<=10; i++) {
    regularCards.push({
        id: i,
        name: i,
        letter: i,
        unicodeCharacter: i===10 ? 'A' : i,
    });
}

const specialCards = [
    {
        id: 12,
        name: "Jack",
        letter: "J",
        unicodeCharacter: "B",
    },
    {
        id: 13,
        name: "Queen",
        letter: "Q",
        unicodeCharacter: "D",
    },
    {
        id: 14,
        name: "King",
        letter: "K",
        unicodeCharacter: "E",
    },
    {
        id: 15,
        name: "Ace",
        letter: "A",
        unicodeCharacter: "1",
    },
];


const suits = [
    "clubs",
    "spades",
    "hearts",
    "diamonds"
]

const generateDeck = () => {
    var cards = [...regularCards, ...specialCards];
    var deck = suits.map(suit=> {
        return cards.map(card => {
            return {
                ...card,
                suit,
            };
        });
    }).reduce((elm, acc)=>acc=[...elm, ...acc]);

    return safeCopy(deck);  //making sure the array's pointers are reset
}

const drawCards = (deck, numberOfCards) => {
    var drawnCards = [];
    for (var i = 0; i < numberOfCards; i++) {
        var newCard = deck.shift();
        drawnCards.push(newCard);
    }

    return {
        drawnCards,
        deck
    };
}

const orderByValue = (deck) => {
    return deck.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
}

const orderBySuit = (groupedDeck) => {
    return [
        ...groupedDeck["clubs"],
        ...groupedDeck["spades"],
        ...groupedDeck["hearts"],
        ...groupedDeck["diamonds"],
    ]
}

const orderDeck = (deck) => {
    var groupedDeck = groupBy(deck, 'suit');
    var orderedDeck = Object.values(groupedDeck)
                    .map(suitedCards=>orderByValue(suitedCards))
                    .reduce((elm, acc) => acc=[...elm, ...acc]);
    var orderedGroupedDeck = groupBy(orderedDeck, 'suit');                
    return orderBySuit(orderedGroupedDeck)
}

const shuffleDeck = (deck) => {
    return shuffleArray(deck);
}

const suitUnicodes = {
    clubs: "1F0D",
    spades: "1F0A",
    hearts: "1F0B",
    diamonds: "1F0C",
}

const getSuitUnicodePrefix = (suit) => suitUnicodes[suit];

export {
    generateDeck,
    orderDeck,
    shuffleDeck,
    drawCards,
    getSuitUnicodePrefix
};