const express = require('express');

const expressConfig = require('./config/express');
const config = require('./config/config');

const app = express();

expressConfig(app);


app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));