export interface Card{
    id: string, 
    flipped: boolean,
    matched: boolean,
    shape: CardShape,     
}


export interface CardShape{
    id: string;
    color: string;
}

export enum CardSate{
    
}