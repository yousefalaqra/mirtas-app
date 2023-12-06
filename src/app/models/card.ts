export interface Card{
    id: string, 
    flipped: boolean,
    matched: boolean,
    shape: CardShape,     
}


export interface CardShape{
    id: ShapeType;
    color: string;
}

export enum CardSate{
    
}

export enum ShapeType {
    Rectangle = 'rectangle',
    Circle = 'circle',
    Arrow = 'arrow',
    Diamond = 'diamond',
    Oval = 'oval',
    Triangle = 'triangle',
    Pentagon = 'pentagon',
    Square = 'square',
    Star = 'star',
    Leaf = 'leaf',
    Blob = 'blob',
    Egg = 'egg',
    Trapezoid = 'trapezoid',
    TriangleDown = 'triangle-down',
    Pacman = 'pacman',
    Rhombus = 'rhombus',
    Parallelogram = 'parallelogram',
  }