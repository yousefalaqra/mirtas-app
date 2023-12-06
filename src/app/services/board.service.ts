import { Injectable, ViewEncapsulation } from '@angular/core';
import { Card } from '../models/card';
import { ShapeType } from '../models/card';

export interface IBoard{
  //deck: Array<Card>;
  shuffle: (phase: number, device: 'mobile' | 'tablet' | 'desktop') =>  void;
  flip: (id: string) => void;
}

@Injectable({
  providedIn: 'root',
})
export class BoardService implements IBoard{
  private deck: Card[] = [];

  constructor() {}

  shuffle(phase: number, device: 'mobile' | 'tablet' | 'desktop'):  void{
    let boardCard= [ 
      { id: '1', flipped: false, matched: false, shape: { id: ShapeType.Rectangle, color: '#FF5733' } },
      { id: '2', flipped: false, matched: false, shape: { id: ShapeType.Circle, color: '#4CAF50' } },
      { id: '3', flipped: false, matched: false, shape: { id: ShapeType.Arrow, color: '#FFB151' } },
      { id: '4', flipped: false, matched: false, shape: { id: ShapeType.Diamond, color: '#3498DB' } },
      { id: '5', flipped: false, matched: false, shape: { id: ShapeType.Oval, color: '#FFC300' } },
      { id: '6', flipped: false, matched: false, shape: { id: ShapeType.Triangle, color: '#9B59B6' } },
      { id: '7', flipped: false, matched: false, shape: { id: ShapeType.Pentagon, color: '#5669FF' } },
      { id: '8', flipped: false, matched: false, shape: { id: ShapeType.Square, color: '#E74C3C' } },
      { id: '9', flipped: false, matched: false, shape: { id: ShapeType.Star, color: '#2ECC71' } },
      { id: '10', flipped: false, matched: false, shape: { id: ShapeType.Leaf, color: '#000080' } },
      { id: '11', flipped: false, matched: false, shape: { id: ShapeType.Blob, color: '#00FFFF' } },
      { id: '12', flipped: false, matched: false, shape: { id: ShapeType.Egg, color: '#FFA500' } },
      { id: '13', flipped: false, matched: false, shape: { id: ShapeType.Trapezoid, color: '#F39C12' } },
      { id: '14', flipped: false, matched: false, shape: { id: ShapeType.TriangleDown, color: '#1ABC9C' } },
      { id: '15', flipped: false, matched: false, shape: { id: ShapeType.Pacman, color: '#34495E' } },
      { id: '16', flipped: false, matched: false, shape: { id: ShapeType.Rhombus, color: '#D35400' } },
      { id: '17', flipped: false, matched: false, shape: { id: ShapeType.Parallelogram, color: '#C0392B' } },
    ]

    this.deck= [];
    let phases=[6,8,11,13,15,17];

    while(this.deck.length < phases[phase - 1]){
      let randomIndex = Math.floor(Math.random() * boardCard.length);
      let card = boardCard[randomIndex];
      if (!this.deck.includes(card)) {
        this.deck.push(card);
      }
    }
     this.deck=this.deck.concat(this.deck).map((card, index) => ({
      ...card, id: `${card.id}-${index + 1}`}))
  };

  getDeck(): Card[] {
    return this.deck;
  }

  flip(id: string): void{
    const cardToBeFlipped =this.deck.find(x => x.id === id);
    if(cardToBeFlipped){
      cardToBeFlipped.flipped = !cardToBeFlipped.flipped;
    }
  };
  
}
