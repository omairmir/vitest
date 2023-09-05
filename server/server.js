// const http = require('http')
const express = require('express')
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
port = 3000;
app.use(bodyParser.json());
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8080/', // Replace with the allowed domain(s)
  methods: ['GET', 'POST'], // Specify the HTTP methods allowed
};

app.use(cors(corsOptions));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname,'../my-app/index.html'));
  res.send('APi 1.0 is Up and Running!')
});
  
app.get('/api/posts', async (req, res) => {
  // req.header('Access-Control-Allow-Origin',"http://localhost:5173/")
  const module = await require("./posts.json");
  console.log(module.posts)
  res.status(200).send({ status:200,posts:module.posts });
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
