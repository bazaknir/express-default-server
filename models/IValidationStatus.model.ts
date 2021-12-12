export interface IUpperRightCoordsStatus {
    status: boolean;
    row: number;
    col: number;
}

export interface IMowerInitialPosition {
    status: boolean;
    x: number;
    y: number;
    direction: string;
}

export interface IMowerCommandsStatus {
    status: boolean;
    commands: string;
}