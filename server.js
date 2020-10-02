const express = require('express');
const app = express();

const port = 3000;

const server = app.listen(port,()=>{
    console.log(`Server started on ${server.address().address}:${server.address().port}`);
});