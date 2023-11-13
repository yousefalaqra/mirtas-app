import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent {

  cards :Array<Card> = [
    { id: '1', flipped: false, matched: false, shape: {id: 'triangle', color: '#5669FF'} },
    { id: '2', flipped: false, matched: false, shape: {id:'square', color: '#FFB151'},  },
    // Add more cards with different shapes
  ];

  flipCard(card: Card): void {
    // Implement logic to handle card flipping
    const currentCard = this.cards.find(x => x.id === card.id);

    if(currentCard){
      currentCard.flipped = !currentCard.flipped;
    }
  }

}
