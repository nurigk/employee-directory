const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log('Employee-directory app listening on port', port));