export interface Card{
    id: string, 
    flipped: boolean,
    matched: boolean,
    shape: CardShape,     
}


export interface CardShape{
    type: CardShapeType;
    color: string;
}

export enum CardSate{
    
}

export enum CardShapeType {
    Circle = 'circle',
    Triangle = 'triangle',
    Square = 'square',
    Star = 'star',
    Hexagon = 'hexagon',
    Pentagon = 'pentagon',
    Octagon = 'octagon',
    Heart = 'heart',
    Rhombus = 'rhombus',
    Parallelogram = 'parallelogram',
    Arrow = 'arrow',
    Crescent = 'crescent',
    Trapezoid = 'trapezoid',
    Oval = 'oval',
    Cross = 'cross',
    Ring = 'ring',
  }