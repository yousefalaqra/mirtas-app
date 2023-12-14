import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval } from 'rxjs';
import { MemoryGame } from '../models/game';
import { Patient } from '../models/patient';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
 
  private game = new BehaviorSubject<MemoryGame >({id: 'memory-game', phases: [], totalPhases: 6}) ;

  private timerObservable = interval(1000);
  private timerSubscription = new Subscription();

  constructor(private router: Router) { }


  getGame(): Observable<MemoryGame>{
    return this.game.asObservable();
  }

  startPhase(phase: number): void{
    const phaseId = 'phase: '+phase;
    const gameValue =  this.game.getValue();
    this.game.next({...gameValue, phases: gameValue.phases.concat({id: phaseId, moves: 0, startTime: Date.now()}), currentPhaseId: phaseId})    
  }

  addPhaseMove(): void{
    const currentGame = this.game.getValue();
    const currentPhase = currentGame.phases.find(x => x.id === currentGame.currentPhaseId);
    if(currentPhase){
      currentPhase.moves += 1;
    }
  }

  endCurrentPhase(): void{
    const currentGame = this.game.getValue();
    const currentPhase = currentGame.phases.find(x => x.id === currentGame.currentPhaseId);

    if(currentPhase){
      currentPhase.endTime = Date.now();

      this.game.next({...currentGame,phases: currentGame.phases.map(x => x.id === currentPhase.id ? currentPhase : x)});
    }
  }

  setGamePlayer(patient: Patient) {
    const gameValue =  this.game.getValue();
    this.game.next({...gameValue, player: patient}) 
   }  

  setGameTotalPhases(total: number) {
    if(total > 16){total = 16};
    if(total < 1){total = 1};
    const gameValue =  this.game.getValue();
    this.game.next({...gameValue, totalPhases: total}) 
   } 

   canActivate(): boolean{

    const isPlayerDefined =  this.game.getValue().player ? true : false

    if(!isPlayerDefined){
      this.router.navigate(['/']);
    }

    return isPlayerDefined;
   }

   ngOnDestroy(): void {
    // Unsubscribe from the timer when the service is destroyed
    this.timerSubscription.unsubscribe();
  }
}
