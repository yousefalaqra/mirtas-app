import { Injectable } from '@angular/core';
import { Card, CardShapeType } from '../models/card';
import { BehaviorSubject, Observable, Subject, delay, tap } from 'rxjs';
import { GameService } from './game.service';

export interface IBoard{
  deck$: () => Observable<Array<Card>>;
  shuffle: (phase: number, device: 'mobile' | 'tablet' | 'desktop') => void;
  reveal: (id: string) => void;


}

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IBoard{
  private deck = new BehaviorSubject<Card[]>([]);
  private flippedCards :Array<Card> = [];

  private onMatch = new Subject();
  private matching = false;

  constructor(private gameService: GameService) { 

    this.onMatch
    .pipe(
      tap(() => this.matching = true),
      delay(2000)
    )
    .subscribe(() =>{
      this.checkMatch()
      this.matching = false;
    })
  }

  deck$(): Observable<Array<Card>>{
    return this.deck.asObservable();
  }
  
  shuffle(phase: number, device: 'mobile' | 'tablet' | 'desktop'): void {
    const allShapes: CardShapeType[] = Object.values(CardShapeType);
  
    // Calculate the total number of cards and unique cards based on the phase

    const uniqueCards = 6 + (phase - 1);
  
    // Generate unique cards
    const newDeck: Array<Card> = [];
    for (let i = 0; i < uniqueCards; i++) {
      const shape = allShapes[i % allShapes.length];
      const uniqueColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
      // Add a unique card
      newDeck.push({
        id: i.toString(),
        flipped: false,
        matched: false,
        shape: {
          type: shape,
          color: uniqueColor,
        },
      });
  
      // Add a duplicate card for each unique card
      newDeck.push({
        id: (i + 'duplicate').toString(),
        flipped: false,
        matched: false,
        shape: {
          type: shape,
          color: uniqueColor,
        },
      });
    }
  
    // Logic for device-specific adjustments if needed
    if (device === 'mobile') {
      // Adjust the deck for mobile devices
      // Add device-specific logic here
    } else if (device === 'tablet') {
      // Adjust the deck for tablet devices
      // Add device-specific logic here
    } else if (device === 'desktop') {
      // Adjust the deck for desktop devices
      // Add device-specific logic here
    }
  
    // Shuffle the deck and emit the updated deck to observers
    this.deck.next(this.shuffleArray(newDeck));
  }
  

  reveal(id: string): void{
    if(!this.matching){
      const currentCards = this.deck.getValue();
      const cardToBeFlipped = currentCards.find(x => x.id === id);
      if(cardToBeFlipped){
        this.flippedCards.push(cardToBeFlipped);
        cardToBeFlipped.flipped = true;
        if(this.flippedCards.length === 2){
          this.onMatch.next(true);
        }
      }    
    }      
  };

  private checkMatch(): void{
    if(this.flippedCards.length === 2){
      const firstCard = this.flippedCards[0];
      const secondCard = this.flippedCards[1];
      if(firstCard.shape.type === secondCard.shape.type){
          this.handleMatch(firstCard.shape.type);      
      }else{
        const currentDeck = this.deck.getValue();
        const updatedDeck = currentDeck.map(x => x.id === firstCard.id || x.id === secondCard.id ? {...x, flipped: false} : x);
        this.deck.next(updatedDeck);
      }

      this.gameService.addPhaseMove();
      this.flippedCards = [];
      this.checkMatchedCards()
    }
  }

  private checkMatchedCards(): void{
    const unMatchedCards = this.deck.getValue().filter(x => !x.matched);
    if(unMatchedCards.length === 0){
      this.gameService.endCurrentPhase()
    }
  }

  private handleMatch(type: CardShapeType): void{
    const currentDeck  = this.deck.getValue();
    const updatedDeck = currentDeck.map(x => x.shape.type === type  ? {...x, matched: true} : x);
    this.deck.next(updatedDeck);
  }

  private shuffleArray(array: any[]) {
    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
