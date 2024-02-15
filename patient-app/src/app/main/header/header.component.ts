import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentPatient: Patient | undefined;

  constructor(private router: Router, private gameService: GameService) {
    this.gameService.getGame().subscribe(x => this.currentPatient = x.player);
  }

  backToMain(): void {
    // Navigate back to the main screen
    this.router.navigate(['/']);
  }
}
