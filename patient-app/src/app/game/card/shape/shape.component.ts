import { Component, Input } from '@angular/core';
import { CardShape, CardShapeType } from 'src/app/models/card';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {
  @Input() shape!: CardShape;
  cardShapeType = CardShapeType; // Expose the enum to the template
}
