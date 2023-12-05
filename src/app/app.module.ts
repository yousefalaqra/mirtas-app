import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './game/card/card.component';
import { DeckComponent } from './game/deck/deck.component';
import { ShapeComponent } from './game/card/shape/shape.component';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { SelectGameComponent } from './main/select-game/select-game.component';
import { GameComponent } from './game/game.component';
import { PhaseTransitionComponent } from './game/phase-transition/phase-transition.component';
import { TimeTakenPipe } from './pipes/time-taken.pipe';
import { GameResultsComponent } from './game-results/game-results.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { SettingsComponent } from './main/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DeckComponent,
    ShapeComponent,
    MainMenuComponent,
    SelectGameComponent,
    GameComponent,
    PhaseTransitionComponent,
    TimeTakenPipe,
    GameResultsComponent,
    PatientListComponent,
    SettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
