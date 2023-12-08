import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  playMatchSound(): void {
    this.audio.src = '../assets/matchcard-audio.wav';
    this.audio.load();
    this.audio.play();
  }

  playUnmatchSound(): void {
    this.audio.src = '../assets/unmatchcard-audio.wav';
    this.audio.load();
    this.audio.play();
  }

}
