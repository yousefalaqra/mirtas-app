import { Component, Input } from '@angular/core';
import { CardShape } from 'src/app/models/card';
import { ShapeType } from 'src/app/models/card';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {
  @Input() shape!: CardShape;
  ShapeType = ShapeType;
}
