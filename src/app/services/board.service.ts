import { Injectable } from '@angular/core';
import { Card, CardShapeType } from '../models/card';

export interface IBoard{
  deck: Array<Card>;
  suffle: (phase: number, device: 'mobile' | 'tablet' | 'desktop') => void;
  flip: (id: string) => boolean;


}

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IBoard{
  deck: Card[] = [];

  constructor() { }
  
  suffle(phase: number, device: 'mobile' | 'tablet' | 'desktop'){
    // add logic of phase and device to be able to generate cards... 
    // if phase 1: 12 cards =>  6 unique origin and 6 copis
    // todo @arrej
    this.deck = [
      { id: '1', flipped: false, matched: false, shape: {id: CardShapeType.Circle, color: '#5669FF'} },
      { id: '2', flipped: false, matched: false, shape: {id: CardShapeType.Cross, color: '#FFB151'},  },
      // Add more cards with different shapes
    ]
  };

  flip(id: string): boolean{
    const currentCards = this.deck;
    const cardToBeFlipped =currentCards.find(x => x.id === id);

    if(cardToBeFlipped){
      cardToBeFlipped.flipped = !cardToBeFlipped.flipped;
      return true;
    }{
      return false;
    }
  };
}
