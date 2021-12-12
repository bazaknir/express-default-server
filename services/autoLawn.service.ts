
import { Observable } from "rxjs";
import { ILawnFile, ILocation, IMower } from "../models/ILawnFile.model";
import * as config from '../configuration.json';
import { validateMowerInitialPosition, validateUpperRightCoord, validateMowersCommands } from "./validation.service";
import { IMowerCommandsStatus, IMowerInitialPosition, IUpperRightCoordsStatus } from "../models/IValidationStatus.model";
const fs = require('fs');
const path = require('path');

export default class AutoLawn {

    constructor() {

    }

    /**
* Reads an automatic lawn file
*/
    readFile = () => {
        let fs = require('fs');
        let fileArr: Array<string>;
        try {
            const filePath = path.join(__dirname, `..//..//${config.FILE_NAME}`);
            fileArr = fs.readFileSync(filePath).toString().split("\r\n");
        }
        catch (e) {
            console.log("File read Error! - check file existence");
            return false;
        }
    }

    /**
* doWork do the lawn of the mower sequentially
*/
    doWork = () => {

    }


}

