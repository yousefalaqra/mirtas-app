import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GameService } from '../services/game.service';

export const patientGuard: CanActivateFn = (route, state) => {
  return inject(GameService).canActivate();
};



