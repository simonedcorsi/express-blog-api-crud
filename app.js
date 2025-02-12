const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use("/api/posts", postsRouter)

// app.get("/api/bacheca", (req, res) => {

//     const posts = [
//         {
//             title: 'Ciambellone',
//             content: 'imaggine ciambellone',
//             image: '/images/ciambellone.jpg',
//             tags: ['ricette', 'piatti tipici']
//         },
//         {
//             title: 'Cracker_barbabietole',
//             content: 'immagine cracker',
//             image: '/images/cracker_barbabietola.jpg',
//             tags: ['ricette', 'piatti tipici']
//         },
//         {
//             title: 'Pane_fritto_dolce',
//             content: 'immagine pane',
//             image: '/images/pane_fritto_dolce.jpg',
//             tags: ['ricette', 'piatti tipici']
//         },
//         {
//             title: 'Pasta_barbabietola',
//             content: 'immagine pasta',
//             image: '/images/pasta_barbabietola.jpg',
//             tags: ['ricette', 'piatti tipici']
//         },
//         {
//             title: 'Torta_paesana',
//             content: 'immagine torta',
//             image: '/images/torta_paesana.jpg',
//             tags: ['ricette', 'piatti tipici']
//         }
//     ];
//  res.json(posts);
// })    

// app.get('/api/bachceca/:id', (req, res) => {
//          res.send(req.params.id);
    
    
//  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
    

