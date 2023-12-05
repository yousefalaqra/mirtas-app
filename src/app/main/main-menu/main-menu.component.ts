import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  currentPatient?:Patient;


  constructor(private gameService: GameService){
    this.gameService.getGame().subscribe(x => this.currentPatient = x.player)
  }

  setCurrentPatient(patient: Patient){
    this.currentPatient = patient;  
    this.gameService.setGamePlayer(patient)
  }

}
