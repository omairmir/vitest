// const http = require('http')
const express = require('express')
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
port = 3000;
app.use(bodyParser.json());
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8080', // Replace with the allowed domain(s)
  methods: ['GET', 'POST', 'PUT'], // Specify the HTTP methods allowed
};

app.use(cors(corsOptions));
app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname,'../my-app/index.html'));
  res.send('APi 1.0 is Up and Running!')
});
  
app.get('/api/posts', async (req, res) => {
  console.log('GET->api/posts')
  const module = await require("./posts.json");
  setTimeout(() => {res.send({ status:200,posts:module.posts }); },3000)
})


app.get('/api/cards', async (req, res) => {
  console.log('GET->api/cards')
  const module = await require("./cards.json");
  const cards = module.cards
  const offset = parseInt(req.query.offset || '0');
  const limit = parseInt(req.query.limit || '3');

  // Calculate the start and end indexes for the batch
  const startIndex = offset;
  const endIndex = Math.min(startIndex + limit, cards.length);

  // Extract the batch of cards
  const batch = cards.slice(startIndex, endIndex);

  // Calculate the next offset
  const nextCursor = endIndex < cards.length ? endIndex : undefined;
  setTimeout(() => {
    res.send(
      {
        cards: batch,
        nextCursor: nextCursor,
        status:200
  });},3000)
  
});

app.get('/api/cards/:id', async (req, res) => {
  const module = await require("./cards.json");
  const cards = module.cards
  const cardId = parseInt(req.params.id);
  // Find the project by ID
  const card = cards.find((p) => p.id === cardId);

  if (!card) {
    res.send({ status:404,error: 'Card not found' });
  } else {
    res.send({ data: card });
  }
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
