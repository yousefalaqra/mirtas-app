// select-game.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent {
  games: any[] = [
    {
      name: 'Memory Mastery Challenge',
      thumbnail: 'https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Embark on the Memory Mastery Challenge, a game designed to boost memory and cognitive skills. Navigate through six phases, each crafted to enhance your mental sharpness and memory recall. Monitor your progress to ensure optimal completion times and aim to minimize moves, contributing to your cognitive health journey.',
      locked: false
    },
    {
      name: 'Mindful Match Quest',
      thumbnail: 'mindful-match-quest.jpg',
      description: 'Join the Mindful Match Quest, a captivating journey for cognitive well-being. Progress through six immersive phases, refining your memory and strategic thinking. Track your performance metrics, including time taken and move efficiency, as you unlock the full potential of your cognitive abilities in this engaging healthcare-inspired game.',
      locked: true
    },
    {
      name: 'Brain Boost Challenge',
      thumbnail: 'brain-boost-challenge.jpg',
      description: 'Experience the Brain Boost Challenge, a series of dynamic memory card games to stimulate mental agility. Traverse six challenging phases, measuring your performance by completion time and move precision. Immerse yourself in this enriching healthcare-inspired experience that not only entertains but also serves as a valuable tool for cognitive health assessment.',
      locked: true
    },
    {
      name: 'Focus Fusion Expedition',
      thumbnail: 'focus-fusion-expedition.jpg',
      description: 'Embark on the Focus Fusion Expedition, an exploration of memory and concentration for cognitive well-being. Sharpen your cognitive abilities across six carefully crafted phases. Optimize time spent on each stage and master efficient moves. Dive into this healthcare-inspired expedition, where entertainment meets cognitive enhancement, offering insights into potential cognitive health improvements.',
      locked: true
    },
    {
      name: 'NeuroNourish Navigator',
      thumbnail: 'neuronourish-navigator.jpg',
      description: 'Discover the NeuroNourish Navigator, a game designed to provide cognitive nourishment. Journey through six phases, each curated to support mental well-being. Monitor your progress by optimizing completion times and refining your moves. Immerse yourself in this healthcare-inspired experience, where cognitive health is nurtured through engaging gameplay.',
      locked: true
    },
    {
      name: 'CogniCraft Challenge',
      thumbnail: 'cognicraft-challenge.jpg',
      description: 'Engage in the CogniCraft Challenge, a healthcare-inspired game for cognitive crafting. Traverse six skill-building phases, enhancing memory and cognitive abilities. Track your journey by measuring completion times and move efficiency. Immerse yourself in this enriching experience that crafts a path towards improved cognitive health and well-being.',
      locked: true
    },
    // Add more games as needed
  ];

  constructor(private gameService: GameService, private router: Router){}

  startGame(): void{
    this.router.navigate(['/memory-game']);
  }
}
