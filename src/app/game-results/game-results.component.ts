import { Component, Input } from '@angular/core';
import { MemoryGame } from '../models/game';
import { Subscription } from 'rxjs';
import { GameService } from '../services/game.service';
import {  Router } from '@angular/router';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent {
  memoryGame?: MemoryGame;
  showMoreDetails: boolean[] = [];
  private gameSubscription: Subscription;
  
  constructor(private gameService: GameService, private boardService: BoardService, private router: Router) {
    // Subscribe to the gameService observable
    const uniqueIds = new Set<string>();
    this.gameSubscription = this.gameService.getGame().subscribe((game: MemoryGame) => {
      this.memoryGame = this.memoryGame || { id: '', phases: [], totalPhases: 0 };
      this.memoryGame.player = game.player;
      this.memoryGame.phases = [];
      for (const item of game.phases) {
        const currentId = item.id;
        if (item.endTime && !uniqueIds.has(currentId)) {
          uniqueIds.add(currentId);
          this.memoryGame.phases.push(item);
        }
      }
    });
  }
  

  get totalTimeTaken(): string {
    // Calculate total time taken based on phase start and end times
    const totalTimeInMillis = this.memoryGame?.phases.reduce((total, phase) => {
      if (phase.startTime && phase.endTime) {
        total += phase.endTime - phase.startTime;
      }
      return total;
    }, 0);

    return this.formatTime(totalTimeInMillis);
  }

  get numberOfMoves(): number {
    // Calculate total number of moves across all phases
    return this.memoryGame? this.memoryGame.phases.reduce((totalMoves, phase) => totalMoves + phase.moves, 0) : 0;
  }

  get averageTimePerMove(): string {
    // Calculate average time per move based on total time and number of moves
    if(this.memoryGame){

      const totalTimeInMillis = this.memoryGame?.phases.reduce((total, phase) => {
        if (phase.startTime && phase.endTime) {
          total += phase.endTime - phase.startTime;
        }
        return total;
    }, 0);
    
    const averageTimePerMove = totalTimeInMillis / this.numberOfMoves;
    
    return this.formatTime(averageTimePerMove);
  }
  return '';
  }

  get cognitivePerformanceFeedback(): string {
    // Implement cognitive performance feedback logic based on your specific requirements
    // You can use the overall game results, total time, total moves, total phases, etc.
    // Example: Provide feedback based on time, moves, and phases, adjust as needed
  
    const totalPhases = this.memoryGame?.totalPhases || 1;
    const averageMovesPerPhase = this.numberOfMoves / totalPhases;
  
    if (this.totalTimeTaken < '00:05:00' && averageMovesPerPhase < 50) {
      return 'Excellent cognitive performance!';
    } else if (this.totalTimeTaken < '00:10:00' && averageMovesPerPhase < 100) {
      return 'Good cognitive performance.';
    } else {
      return 'Work on improving cognitive performance.';
    }
  }

  toggleShowMore(index: number): void {
      this.showMoreDetails[index] = !this.showMoreDetails[index];
  }

  formatTime(timeInMillis?: number): string {
    if(timeInMillis){
      // Helper method to format time in HH:mm:ss
      const seconds = Math.floor(timeInMillis / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      return `${this.pad(hours)}:${this.pad(minutes % 60)}:${this.pad(seconds % 60)}`;
    }else{
      return '';
    }
  }

  pad(value: number): string {
    // Helper method to pad single-digit values with a leading zero
    return value < 10 ? `0${value}` : `${value}`;
  }

  goToMainMenu(): void {
    // Handle navigation to the main menu here
    // You can use Angular Router or any other navigation method
    this.router.navigate(['/']);

  }
}
