
export interface ILawnFile {
    matrixRows: number;
    matrixColumns: number;
    mowers: IMower[];
}

export interface IMower {
    initialLocation: ILocation;
    commands: string;
}

export interface ILocation {
    x: number;
    y: number;
    direction: string;
}