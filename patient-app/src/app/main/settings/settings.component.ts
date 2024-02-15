import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  selectedPhases: number = 6; // Default value

  constructor(private router: Router, private gameService: GameService) {}
  

  saveSettings(): void {
    // Logic to save the user's settings
    console.log(`Selected phases: ${this.selectedPhases}`);
    // Additional logic to handle saving the setting in your application
    this.gameService.setGameTotalPhases(this.selectedPhases)
  }

  backToMain(): void {
    // Navigate back to the main screen
    this.router.navigate(['/']);
  }
}
