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

  getShapeClasses(shapeType: string): string[] {

    switch (shapeType) {
      case CardShapeType.Rectangle:
        return ['rectangle'];
      case CardShapeType.Circle:
        return ['circle'];
      case CardShapeType.Arrow:
        return ['arrow'];
      case CardShapeType.Diamond:
        return ['diamond'];
      case CardShapeType.Oval:
        return ['oval'];
      case CardShapeType.Triangle:
        return ['triangle'];
      case CardShapeType.Pentagon:
        return ['pentagon'];
      case CardShapeType.Square:
        return ['square'];
      case CardShapeType.Star:
        return ['star'];
      case CardShapeType.Leaf:
        return ['leaf'];
      case CardShapeType.Blob:
        return ['blob'];
      case CardShapeType.Egg:
        return ['egg'];
      case CardShapeType.Trapezoid:
        return ['trapezoid'];
      case CardShapeType.TriangleDown:
        return ['triangle-down'];
      case CardShapeType.Pacman:
        return ['pacman'];
      case CardShapeType.Rhombus:
        return ['rhombus'];
      case CardShapeType.Parallelogram:
        return ['parallelogram'];

      default:
        return ['default-shape']; 
    }
  }
}
