import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MemoryGamePhase } from 'src/app/models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase-transition',
  templateUrl: './phase-transition.component.html',
  styleUrls: ['./phase-transition.component.scss']
})
export class PhaseTransitionComponent {
  @Input() currentPhase!: MemoryGamePhase;

  // Event emitter to notify the parent component about phase transitions
  @Output() nextPhase = new EventEmitter<void>();
  @Output()  endGame = new EventEmitter<void>();

  // Add any additional properties or methods as needed
  startNextPhase(): void {
    // You can add any logic related to starting the second phase
    // For example, make an API call, update some state, etc.
    
    // Notify the parent component about the phase transition
    this.nextPhase.emit();
  }

  endGameEarly(): void{
    this.endGame.emit();
  }


}
