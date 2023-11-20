import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { BoardService } from 'src/app/services/board.service';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})


export class DeckComponent{
selectedPhase: any;
  constructor(public boardService: BoardService) { 
    //this.boardService.shuffle(this.selectedPhase, 'mobile'); >> the phase will be selected from a list
    this.boardService.shuffle(6, 'mobile')
  }

  flipCard(card: Card): boolean {
    // Implement logic to handle card flipping
    const currentCard = this.boardService.shuffledCards.find(x => x.id === card.id);
    console.log(currentCard?.shape.id)
    if(currentCard){
      currentCard.flipped = !currentCard.flipped;
      return true;
    }{
      return false;
    }
  }

}
