import express from 'express';
export const router = express.Router();
import * as config from '../configuration.json';
import { ILawnFile } from '../models/ILawnFile.model';

// TODO: Add a log service which write logs to database (file, elastic etc.)


const userRejects = {};

/**
* Handler for REST.post - autoLawn
* This is a future feature to handle automatic lawn by rest api in addition to a file
*/
const autoLawn = async (req, res) => {
    // TBD...
}

router.post('/autoLawn', autoLawn);

