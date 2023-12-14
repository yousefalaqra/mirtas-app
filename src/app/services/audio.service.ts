import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  private setAudioSource(src: string): void {
    this.audio.src = src;
    this.audio.load();
  }

  playMatchSound(): void {
    this.setAudioSource('../assets/matchcard-audio.wav');
    this.audio.play();
  }
  stopAudio(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  releaseResources(): void {
    this.stopAudio();
  }
}
