const express = require('express');
const app = express();
const port = 5000;
app.get('/greeting', (request, response) => {
response.send({msg:"Hello Gerald!"});
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

