import { Patient } from "./patient";

export interface MemoryGame{
    id: string, 
    phases: Array<MemoryGamePhase>
    player?: Patient;
    currentPhaseId?: string;
    totalPhases: number;
}

export interface MemoryGamePhase{
    id: string, 
    moves: number,
    startTime?: number,
    endTime?: number,
}
