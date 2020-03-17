const express = require('express')
const app = express()
const port = 80

app.all('*', (req, res) => {
    let protocol = req.headers['x-forwarded-proto'] || req.protocol;
    
    if (protocol == 'http') {
        let from = `${protocol}://${req.hostname}${req.url}`;
        let to = `https://${req.hostname}${req.url}`;
        //redirect
        res.redirect(to);
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
