import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { BoardService } from 'src/app/services/board.service';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})


export class DeckComponent{
  private cards :Array<Card> = [];

  constructor(private boardService: BoardService) { 
   this.boardService.shuffle(1, 'mobile')
  }

  getDeck() {
    return this.cards= this.boardService.getDeck();
  }

  flipCard(card: Card): void {
    this.boardService.flip(card.id);
  }

}
