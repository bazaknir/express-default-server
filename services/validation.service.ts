// ************************************************************************
// This is a validation service which validates a charge request
// ************************************************************************

import { ILawnFile } from "../models/ILawnFile.model";
import { IMowerCommandsStatus, IMowerInitialPosition, IUpperRightCoordsStatus } from "../models/IValidationStatus.model";


/**
* validates the matrix in the file
@returns: {status: boolean, row, col} - status: true when matrix upper right coordinate supllied as agreed: (eg: 5 5), status: false otherwise
*/
export const validateUpperRightCoord = (line: string): IUpperRightCoordsStatus => {
    let coords = line.split(" ");

    let retStatus: IUpperRightCoordsStatus = {
        status: false,
        row: 0,
        col: 0
    };

    // TBD: should return the ROWS & Columns if succeeded with true
    if (coords.length === 2 && coords[0] != "" && +coords[0] >= 0 && coords[1] != "" && +coords[1] >= 0) {
        retStatus.status = true;
        retStatus.row = +coords[0];
        retStatus.col = +coords[0];
    }

    return retStatus;
}

/**
* validates a mower intial position in a file
@returns: true when initial position was supplied as agreed (1 2 N)
*/
export const validateMowerInitialPosition = (line: string, maxRow, maxCol): IMowerInitialPosition => {
    let arr = line.split(" ");

    let retStatus: IMowerInitialPosition = {
        status: false,
        x: 0,
        y: 0,
        direction: ""
    };

    // TBD: should return the mower position & direction if succeeded with true
    if (arr.length === 3 &&
        arr[0] != "" && +arr[0] >= 0 && +arr[0] <= maxRow &&
        arr[1] != "" && +arr[1] >= 0 && +arr[1] <= maxCol &&
        (arr[2] == "N" || arr[2] == "S" || arr[2] == "W" || arr[2] == "E")) {
        retStatus.status = true;
        retStatus.x = +arr[0];
        retStatus.y = +arr[1];
        retStatus.direction = arr[2];
    }

    return retStatus;
}

/**
* validates a mower commands in a file
@returns: true when mower commands were supplied as agreed (LFLFLFLFF)
*/
export const validateMowersCommands = (line: string): IMowerCommandsStatus => {
    let mowerCommandsStatus: IMowerCommandsStatus = {
        status: true,
        commands: ""
    }
    for(let i =0; i< line.length; i++) {
        if(line[i] != "L" && line[i] != "R" && line[i] != "F") {
            mowerCommandsStatus.status = false;
            break;
        }
    }

    mowerCommandsStatus.commands = line;
    return mowerCommandsStatus;
}