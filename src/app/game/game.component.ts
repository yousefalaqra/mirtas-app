import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MemoryGamePhase, MemoryGame } from '../models/game';
import { GameService } from '../services/game.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    currentPhase?: MemoryGamePhase;
    game?: MemoryGame;

    gameSubs = new Subscription();

    phaseEnded = false;

    currentPhaseNumber = 0;

  constructor(private gameService: GameService, private router: Router){}
  
  ngOnInit(): void {
    this.gameService.startPhase(++this.currentPhaseNumber);

    this.gameSubs = this.gameService.getGame().subscribe(x =>{
      this.game = x;
      this.currentPhase = x.phases.find(y => y.id === x.currentPhaseId);


      if(this.currentPhase?.endTime){
        this.phaseEnded = true

        if(this.game.phases.length === this.game.totalPhases){
          this.router.navigate(['/game-results']);
        }
      }      
    })

  }

  startNextPhaseHandler(){
    this.gameService.startPhase(++this.currentPhaseNumber);
    this.phaseEnded = false;   
    this.router.navigate(['/memory-game']);
  }

  endGame(){
    this.gameService.endCurrentPhase();
    this.phaseEnded = true;
    this.router.navigate(['/game-results']);
  }


  ngOnDestroy(): void {

   }
}
