const express = require('express')

const app = express()

app.use(express.static("public"));

app.get('/health', (_, res) => {
    res.send('Health')
})

app.get('/', (_, res) => {
    res.send(
      '<html><head><link rel="stylesheet" href="style.css"><body>testing</body></head></html>'
    );
})

app.listen(5000, () => {
    console.log('listening to port 5000')
})