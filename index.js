const express = require('express')

const app = express();
app.use(express.json());

app.get(`/hello`, async (req, res) => { 
    res.status(200).json({"hello": "world"})
})

app.listen(8080, () => {
    console.log('listening on 8080')
})