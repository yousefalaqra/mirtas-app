import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { SelectGameComponent } from './main/select-game/select-game.component';
import { GameComponent } from './game/game.component';
import { GameResultsComponent } from './game-results/game-results.component';
import { SettingsComponent } from './main/settings/settings.component';
import { patientGuard } from './guards/patient.guard';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'select-game', component: SelectGameComponent, canActivate: [patientGuard] },
  { path: 'memory-game', component: GameComponent, canActivate: [patientGuard] },
  { path: 'game-results', component: GameResultsComponent, canActivate: [patientGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [patientGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
