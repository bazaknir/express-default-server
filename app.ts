import express from 'express';
const app = express();
import { router } from './routes/autoLawn.route';
const path = require('path');
import * as config from './configuration.json';

let port = config.PORT;

const http = require('http').Server(app);
import bodyParser = require("body-parser");
import AutoLawn from './services/autoLawn.service';

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers["Auto-Mower-header"]) {
   return next();
  }
  else {
    res.status(400).send({});
  }
})

const autoLawn = new AutoLawn();
if (autoLawn.readFile()) {
  autoLawn.doWork();
}

app.use('/api', router);

http.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});