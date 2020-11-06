import {Component} from "react";
import { generateDeck, shuffleDeck, drawCards, orderDeck } from './../services/cards';
import Card from "./Card";

class Deck extends Component {

    constructor() {
        super();
        this.state = {
            deck: generateDeck(),
            numberOfCards: 0,
            drawnCards: [],
        };
        this._shuffleDeck = this._shuffleDeck.bind(this);
        this._generateDeck = this._generateDeck.bind(this);
        this._pickCards = this._pickCards.bind(this);
        this._orderDeck = this._orderDeck.bind(this);
        this.changeNumberOfCards = this.changeNumberOfCards.bind(this);
    }

    _generateDeck() {
        this.setState({
            deck: generateDeck(),
            drawnCards: [],
        })
    }

    _shuffleDeck() {
        this.setState({
            deck: shuffleDeck(this.state.deck)
        })
    }

    _pickCards() {
        this.setState({
            ...drawCards(this.state.deck, this.state.numberOfCards)
        });
    }

    _orderDeck() {
        this.setState({
            deck: orderDeck(this.state.deck)
        })
    }

    changeNumberOfCards (event) {
        this.setState({numberOfCards: event.target.value});
    }

    render() {
      return <div>
            <div className="buttonContainer">
                <div>
                    <button onClick={this._generateDeck} className="btn btn-primary">⟲ Reset Deck</button>
                    <button onClick={this._shuffleDeck} className="btn btn-danger">↬ Shuffle Deck</button>
                    <button onClick={this._orderDeck} className="btn btn-success">➦ Order Deck</button>
                    <div className="input-group mb-3">
                        <button onClick={this._pickCards} className="btn btn-warning">Pick Cards</button>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">#</span>
                        </div>
                        <input type="text" className="form-control" placeholder="number of cards" value={this.state.numberOfCards} onChange={this.changeNumberOfCards}></input>
                    </div>
                </div>
            </div>

        {
            this.state.drawnCards.length > 1 &&
            <div>
                <h1>Picked Cards:</h1>
                {
                this.state.drawnCards.map((card, index) => {
                    return <Card key={`card ${index}`} {...card}/>
                })
                }
            </div>
        }
         <div>
             <h1>Deck</h1>
            {
              this.state.deck.map((card, index) => {
                return <Card key={`card ${index}`} {...card}/>
              })
            }
         </div>
        
      </div>;
    }
  }

export default Deck;