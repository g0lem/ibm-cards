import {Component} from "react"
import './style.css'
import {getSuitUnicodePrefix} from './../services/cards';
import {toUnicode} from './../services/utils';

class Card extends Component {

    generateCard(){
        const suitPrefix = getSuitUnicodePrefix(this.props.suit);
        const hexValue = suitPrefix + this.props.unicodeCharacter;
        return toUnicode(hexValue)
    }

    render() {
      return  <span className={`card ${this.props.suit}`}>{this.generateCard()}</span>;
    }
  }

export default Card;