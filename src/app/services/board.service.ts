import { Injectable } from '@angular/core';
import { Card } from '../models/card';

export interface IBoard{
  deck: Array<Card>;
  shuffle: (phase: number, device: 'mobile' | 'tablet' | 'desktop') =>  void;
  //flip: (id: string) => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IBoard{
  deck: Card[] = [];
  initialCards: Card[] = [];
  shuffledCards: Card[] = [];

  constructor() {}

  shuffle(phase: number, device: 'mobile' | 'tablet' | 'desktop'):  void{
    // logic of phase to be able to generate cards... 
    this.deck= [
      { id: '1', flipped: false, matched: false, shape: {id:'rectangle', color: '#FF5733'} },
      { id: '2', flipped: false, matched: false, shape: {id:'circle', color: '#4CAF50'} },
      { id: '3', flipped: false, matched: false, shape: {id:'arrow', color: '#FFB151'} },
      { id: '4', flipped: false, matched: false, shape: {id:'diamond', color: '#3498DB'} },
      { id: '5', flipped: false, matched: false, shape: {id:'oval', color: '#FFC300'} },
      { id: '6', flipped: false, matched: false, shape: {id:'triangle', color: '#9B59B6'} },
      { id: '7', flipped: false, matched: false, shape: {id:'pentagon', color: '#5669FF'} },
      { id: '8', flipped: false, matched: false, shape: {id:'square', color: '#E74C3C'} },
      { id: '9', flipped: false, matched: false, shape: {id:'star', color: '#2ECC71'} },
      { id: '10', flipped: false, matched: false, shape: {id:'leaf', color: '#000080'} },
      { id: '11', flipped: false, matched: false, shape: {id:'blob', color: '#00FFFF'} },
      { id: '12', flipped: false, matched: false, shape: {id:'egg', color: '#FFA500'} },
      { id: '13', flipped: false, matched: false, shape: {id:'trapezoid', color: '#F39C12'} },
      { id: '14', flipped: false, matched: false, shape: {id:'triangle-down', color: '#1ABC9C'} },
      { id: '15', flipped: false, matched: false, shape: {id:'pacman', color: '#34495E'} },
      { id: '16', flipped: false, matched: false, shape: {id:'rhombus', color: '#D35400'} },
      { id: '17', flipped: false, matched: false, shape: {id:'parallelogram', color: '#C0392B'} },
    ]

    let phases=[6,8,11,13,15,17];
    while(this.initialCards.length < phases[phase - 1]){
      let randomIndex = Math.floor(Math.random() * this.deck.length);
      let card = this.deck[randomIndex];
      if (!this.initialCards.includes(card)) {
        this.initialCards.push(card);
      }
    }
    
     this.deck=this.initialCards;
     this.shuffledCards=this.deck.concat(this.initialCards).map((card, index) => ({
      ...card, id: `${card.id}-${index + 1}`}))
  };

  // flip(id: string): boolean{
  //   const currentCards = this.deck;
  //   const cardToBeFlipped =currentCards.find(x => x.id === id);

  //   if(cardToBeFlipped){
  //     cardToBeFlipped.flipped = !cardToBeFlipped.flipped;
  //     return true;
  //   }{
  //     return false;
  //   }
  // };
  
}
