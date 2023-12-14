import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/models/card';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit, OnDestroy {
  @Input() phaseNumber = 1;
  @Input() flippedtime = 5000;
  cards :Array<Card> = []
  deckSub = new Subscription();
  constructor(private boardService: BoardService){}
  
  ngOnInit(): void {
    this.deckSub = this.boardService.deck$().subscribe(x => this.cards = x);
    this.boardService.shuffle(this.phaseNumber, 'mobile');
    this.boardService.revealAll();
  }


  flipCard(card: Card): void {
    console.log(card.shape)
    this.boardService.reveal(card.id)
  }

  ngOnDestroy(): void 
  { 
    this.deckSub.unsubscribe();

   }
}
