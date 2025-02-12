const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use("/api/posts", postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
    

