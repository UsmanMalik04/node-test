const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is live on port ' + port);
})


app.get('**', (req, res) => {
    res.status(200).json({
        success: true, 
        message: 'Hello! Heroku, i am usman'
    })
})
