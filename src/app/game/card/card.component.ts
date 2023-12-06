import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', './card.shapes.scss']
})
export class CardComponent {

  @Input() card?: Card;
  @Output() cardClicked = new EventEmitter<void>();

  flipCard(): void {
    this.cardClicked.emit();
  }
}
